/**
 * Recovering from a new deploy.
 *
 * Every build gets new hashed file names, and a GitHub Pages deploy removes the previous build's files. A tab that
 * was opened before the deploy (or an index.html the browser cached, which GitHub Pages allows for 10 minutes)
 * still asks for the old chunks, e.g. `LabPage-hVcnQzsK.js`, and gets a 404. Vite reports each failed dynamic
 * import as a `vite:preloadError` event; reloading fetches the new index.html and keeps the current #/route.
 */

const KEY = 'daftar.staleReload'
/** Do not reload again within this window: if the reload did not help (offline, broken deploy), show the error UI. */
const GUARD_MS = 30_000

/** True for the errors browsers raise when a lazily loaded chunk or its CSS cannot be fetched. */
export function isChunkLoadError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error ?? '')
  return /dynamically imported module|Importing a module script failed|Unable to preload CSS/i.test(message)
}

/** Reload once to pick up the new build. Returns false when a reload was already tried moments ago. */
function reloadOnce(): boolean {
  try {
    const last = Number(sessionStorage.getItem(KEY)) || 0
    if (Date.now() - last < GUARD_MS) return false
    sessionStorage.setItem(KEY, String(Date.now()))
  } catch {
    return false // without storage there is no loop guard, so leave it to the Reload button
  }
  window.location.reload()
  return true
}

export function installStaleBuildRecovery() {
  window.addEventListener('vite:preloadError', () => {
    reloadOnce()
  })
}

/** For the Reload button in error fallbacks (a user click, so no loop guard needed). */
export function reloadPage() {
  window.location.reload()
}
