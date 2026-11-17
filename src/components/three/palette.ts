import { useEffect, useRef, useState } from 'react'

/** Three.js can't parse oklch(), so scenes use hex twins of the CSS tokens. */
export const palette3D = {
  asset: '#3f83c8',
  liability: '#e05570',
  equity: '#8a63d2',
  revenue: '#2ea36f',
  expense: '#e8913a',
  gold: '#d9a943',
  goldDeep: '#b8862b',
  teal: '#406ae4',
  tealBright: '#3b82f6',
  slate: '#273244',
  ink: '#161c2a',
  paper: '#ece6d8',
} as const

/**
 * Mount a WebGL canvas only once it is near the viewport, and pause rendering
 * while it is off-screen. Returns a ref for the wrapper plus `{ mounted, visible }`.
 */
export function useOnScreen<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T>(null)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) setMounted(true)
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return { ref, mounted, visible }
}

let webglSupport: boolean | undefined

/**
 * WebGL availability check (falls back to a static message when missing).
 * Probed once and the probe context released: browsers cap live WebGL contexts, and a leaked probe per
 * scene mount could evict a real canvas after enough lesson navigation.
 */
export function hasWebGL(): boolean {
  if (webglSupport !== undefined) return webglSupport
  try {
    const c = document.createElement('canvas')
    const gl = c.getContext('webgl2') ?? c.getContext('webgl')
    webglSupport = Boolean(gl)
    gl?.getExtension('WEBGL_lose_context')?.loseContext()
  } catch {
    webglSupport = false
  }
  return webglSupport
}
