import { useEffect, useMemo, useRef, type MutableRefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Lightformer, OrbitControls, RoundedBox, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

import { cn } from '@/lib/utils'
import { hasWebGL, palette3D, useOnScreen } from './palette'

type Props = {
  labels: string[]
  numerals: string[]
  active: number
  onSelect: (i: number) => void
  /** reverse direction for RTL (counter-clockwise) */
  reverse?: boolean
  className?: string
  fallback?: string
}

const R = 2.7

function angleFor(i: number, n: number, reverse: boolean) {
  const dir = reverse ? 1 : -1
  return Math.PI / 2 + dir * (i * Math.PI * 2) / n
}

function Node({
  i,
  n,
  active,
  reverse,
  onSelect,
}: {
  i: number
  n: number
  active: number
  reverse: boolean
  onSelect: (i: number) => void
}) {
  const ref = useRef<THREE.Mesh>(null)
  const mat = useRef<THREE.MeshStandardMaterial>(null)
  const a = angleFor(i, n, reverse)
  const pos: [number, number, number] = [Math.cos(a) * R, 0, -Math.sin(a) * R]
  const isActive = i === active
  const isDone = i < active
  // unmounting while hovered (route or language change) would otherwise leave the page with a pointer cursor
  useEffect(
    () => () => {
      document.body.style.cursor = ''
    },
    [],
  )
  useFrame((_, dt) => {
    if (!ref.current || !mat.current) return
    const s = isActive ? 1.55 : 1
    ref.current.scale.setScalar(THREE.MathUtils.damp(ref.current.scale.x, s, 8, dt))
    mat.current.emissiveIntensity = THREE.MathUtils.damp(mat.current.emissiveIntensity, isActive ? 1.6 : isDone ? 0.45 : 0.08, 6, dt)
  })
  const color = isActive ? palette3D.gold : isDone ? palette3D.tealBright : palette3D.paper
  return (
    <group position={pos}>
      <mesh
        ref={ref}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(i)
        }}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = '')}
      >
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial ref={mat} color={color} emissive={color} emissiveIntensity={0.1} metalness={0.4} roughness={0.3} />
      </mesh>
    </group>
  )
}

/** Projects 3D anchor points to screen space and moves plain DOM labels, no React roots inside the scene. */
function LabelProjector({ points, els }: { points: THREE.Vector3[]; els: MutableRefObject<(HTMLElement | null)[]> }) {
  const v = useMemo(() => new THREE.Vector3(), [])
  useFrame(({ camera, size }) => {
    points.forEach((p, i) => {
      const el = els.current[i]
      if (!el) return
      v.copy(p).project(camera)
      const x = (v.x * 0.5 + 0.5) * size.width
      const y = (-v.y * 0.5 + 0.5) * size.height
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      el.style.zIndex = String(Math.round((1 - v.z) * 10000))
    })
  })
  return null
}

function Token({ active, n, reverse }: { active: number; n: number; reverse: boolean }) {
  const ref = useRef<THREE.Mesh>(null)
  const angle = useRef(angleFor(0, n, reverse))
  useFrame((state, dt) => {
    const target = angleFor(active, n, reverse)
    // shortest path around the circle
    let d = target - angle.current
    d = Math.atan2(Math.sin(d), Math.cos(d))
    angle.current += d * (1 - Math.exp(-4 * dt))
    const m = ref.current
    if (!m) return
    m.position.set(Math.cos(angle.current) * R, 0.05 + Math.sin(state.clock.elapsedTime * 4) * 0.04, -Math.sin(angle.current) * R)
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.32, 0.035, 16, 48]} />
      <meshStandardMaterial color={palette3D.gold} emissive={palette3D.gold} emissiveIntensity={0.8} metalness={1} roughness={0.2} />
    </mesh>
  )
}

function Ledger() {
  const g = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (g.current) g.current.rotation.y += dt * 0.25
  })
  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={g} position={[0, 0.2, 0]}>
        {[palette3D.asset, palette3D.liability, palette3D.equity, palette3D.revenue, palette3D.expense].map((c, k) => (
          <RoundedBox key={c} args={[1.1, 0.12, 0.8]} radius={0.04} position={[0, k * 0.15 - 0.3, 0]} rotation={[0, k * 0.12, 0]}>
            <meshStandardMaterial color={c} roughness={0.35} metalness={0.2} />
          </RoundedBox>
        ))}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.06, 48]} />
          <meshStandardMaterial color={palette3D.gold} metalness={1} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

/** Torus in the XZ plane; arc parameter t maps to node angle a = t (see angleFor). */
function Ring({ progress }: { progress: number }) {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <torusGeometry args={[R, 0.018, 12, 200]} />
        <meshStandardMaterial color={palette3D.teal} emissive={palette3D.teal} emissiveIntensity={0.35} transparent opacity={0.7} />
      </mesh>
      <mesh>
        <torusGeometry args={[R, 0.035, 12, 200, Math.max(0.001, progress * Math.PI * 2)]} />
        <meshStandardMaterial color={palette3D.tealBright} emissive={palette3D.tealBright} emissiveIntensity={0.9} />
      </mesh>
    </group>
  )
}

export default function CycleScene({ labels, numerals, active, onSelect, reverse = false, className, fallback }: Props) {
  const { ref, mounted, visible } = useOnScreen<HTMLDivElement>()
  const webgl = useMemo(() => (typeof window === 'undefined' ? false : hasWebGL()), [])
  const n = labels.length
  const labelEls = useRef<(HTMLElement | null)[]>([])
  const anchors = useMemo(
    () =>
      Array.from({ length: n }, (_, i) => {
        const a = angleFor(i, n, reverse)
        return new THREE.Vector3(Math.cos(a) * R, 0.5, -Math.sin(a) * R)
      }),
    [n, reverse],
  )
  return (
    <div ref={ref} className={cn('relative h-[360px] w-full overflow-hidden sm:h-[440px]', className)}>
      {!webgl && <div className="grid h-full place-items-center text-sm text-muted-foreground">{fallback ?? 'WebGL is not available.'}</div>}
      {/* DOM labels positioned every frame by <LabelProjector/> */}
      {webgl && mounted && (
        <div className="pointer-events-none absolute inset-0 z-10" style={{ direction: 'ltr' }}>
          {labels.map((label, i) => {
            const isActive = i === active
            return (
              <button
                key={i}
                type="button"
                ref={(el) => {
                  labelEls.current[i] = el
                }}
                onClick={() => onSelect(i)}
                style={{ transform: 'translate3d(-999px,-999px,0)' }}
                className={cn(
                  'pointer-events-auto absolute top-0 left-0 flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-0.5 text-[11px] font-medium shadow-sm backdrop-blur transition-[background-color,color,border-color]',
                  isActive ? ' bg-gold text-[#2a1f05]' : 'bg-background/85 text-muted-foreground hover:text-foreground',
                )}
              >
                <span className="tabular font-bold">{numerals[i]}</span>
                <span className={cn('hidden md:inline', !isActive && 'max-w-[110px] truncate')} dir="auto">
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      )}
      {webgl && mounted && (
        <Canvas dpr={[1, 2]} frameloop={visible ? 'always' : 'never'} camera={{ position: [0, 4.4, 6.4], fov: 42 }} gl={{ alpha: true, antialias: true }} className="!touch-pan-y">
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 6, 4]} intensity={1.3} />
          <pointLight position={[0, 1.5, 0]} intensity={8} distance={6} color={palette3D.gold} />
          <Environment resolution={128}>
            <Lightformer form="rect" intensity={2} position={[0, 5, 2]} scale={[8, 3, 1]} />
            <Lightformer form="ring" intensity={1.4} position={[-4, 2, -2]} scale={2} color={palette3D.tealBright} />
          </Environment>
          {/* Arc starts at node 1 (a = π/2): rotate by +π/2; mirror first (z → −z) for clockwise LTR order */}
          <group rotation={[0, Math.PI / 2, 0]} scale={[1, 1, reverse ? 1 : -1]}>
            <Ring progress={n > 1 ? active / (n - 1) : 0} />
          </group>
          {labels.map((_, i) => (
            <Node key={i} i={i} n={n} active={active} reverse={reverse} onSelect={onSelect} />
          ))}
          <LabelProjector points={anchors} els={labelEls} />
          <Token active={active} n={n} reverse={reverse} />
          <Ledger />
          <Sparkles count={60} scale={[7, 2.5, 7]} size={2.2} speed={0.35} color={palette3D.gold} opacity={0.6} />
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0.5} maxPolarAngle={1.25} rotateSpeed={0.55} />
        </Canvas>
      )}
    </div>
  )
}
