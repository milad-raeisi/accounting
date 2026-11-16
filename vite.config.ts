import { readdirSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const VIRTUAL = 'virtual:lesson-manifest'
const RESOLVED = `\0${VIRTUAL}`
const CONTENT = /src[\\/]content[\\/](lessons|courses)[\\/].*\d\d-[^\\/]+\.ts$/

/** Every lesson file with its course id and the import.meta.glob key used in src/content/lessons/index.ts. */
function lessonFiles(root: string) {
  const out: { file: string; key: string; course: string }[] = []
  const lessonsDir = path.join(root, 'src/content/lessons')
  for (const f of readdirSync(lessonsDir)) if (/^\d\d-.*\.ts$/.test(f)) out.push({ file: path.join(lessonsDir, f), key: `./${f}`, course: 'accounting' })
  const coursesDir = path.join(root, 'src/content/courses')
  for (const c of readdirSync(coursesDir))
    for (const f of readdirSync(path.join(coursesDir, c)))
      if (/^\d\d-.*\.ts$/.test(f)) out.push({ file: path.join(coursesDir, c, f), key: `../courses/${c}/${f}`, course: c })
  return out
}

/**
 * Builds a small manifest (title, summary, number, quiz count…) of every lesson at compile time, so lists and
 * progress load instantly while each lesson's full content is code-split and fetched only when opened.
 * Lesson files only use type imports, so Node can import them directly (type stripping).
 */
function lessonManifest(): Plugin {
  let version = 0
  return {
    name: 'daftar-lesson-manifest',
    resolveId: (id) => (id === VIRTUAL ? RESOLVED : undefined),
    async load(id) {
      if (id !== RESOLVED) return
      const entries = []
      for (const { file, key, course } of lessonFiles(import.meta.dirname)) {
        this.addWatchFile(file)
        const { lesson } = await import(`${pathToFileURL(file).href}?v=${version}`)
        if (!lesson?.slug) throw new Error(`[lesson-manifest] ${file} has no 'lesson' export`)
        entries.push({
          course,
          key,
          slug: lesson.slug,
          number: lesson.number,
          level: lesson.level,
          minutes: lesson.minutes,
          icon: lesson.icon,
          tone: lesson.tone,
          title: lesson.title,
          summary: lesson.summary,
          currency: lesson.currency,
          quizCount: lesson.quiz.length,
        })
      }
      return `export default ${JSON.stringify(entries)}`
    },
    configureServer(server) {
      const refresh = (file: string) => {
        if (!CONTENT.test(file)) return
        version++
        const mod = server.moduleGraph.getModuleById(RESOLVED)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
      server.watcher.on('change', refresh)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves a project site from /<repo>/; the deploy workflow sets BASE_PATH. Locally it stays '/'.
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss(), lessonManifest()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
  },
})
