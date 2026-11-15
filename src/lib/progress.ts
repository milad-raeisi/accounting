import { useCallback, useSyncExternalStore } from 'react'

type QuizScore = { score: number; total: number }
type ProgressState = { done: string[]; quiz: Record<string, QuizScore> }

const KEY = 'aa.progress'
const empty: ProgressState = { done: [], quiz: {} }

function read(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return {
      done: Array.isArray(parsed.done) ? parsed.done.filter((s) => typeof s === 'string') : [],
      quiz: parsed.quiz && typeof parsed.quiz === 'object' ? parsed.quiz : {},
    }
  } catch {
    return empty
  }
}

let state: ProgressState = typeof window === 'undefined' ? empty : read()
const listeners = new Set<() => void>()

function commit(next: ProgressState) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* storage unavailable: keep in memory */
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useProgress() {
  const s = useSyncExternalStore(subscribe, () => state, () => empty)

  const markDone = useCallback((slug: string, done = true) => {
    const has = state.done.includes(slug)
    if (done === has) return
    commit({ ...state, done: done ? [...state.done, slug] : state.done.filter((d) => d !== slug) })
  }, [])

  const saveQuiz = useCallback((slug: string, score: number, total: number) => {
    const prev = state.quiz[slug]
    if (prev && prev.score / prev.total >= score / total) return
    commit({ ...state, quiz: { ...state.quiz, [slug]: { score, total } } })
  }, [])

  const reset = useCallback(() => commit(empty), [])

  return {
    done: s.done,
    quiz: s.quiz,
    isDone: (slug: string) => s.done.includes(slug),
    markDone,
    saveQuiz,
    reset,
  }
}
