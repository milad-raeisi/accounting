import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, Lightformer, OrbitControls, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

import { cn } from '@/lib/utils'
import { hasWebGL, palette3D, useOnScreen } from './palette'

export type ScaleSide = { label: string; value: string }

type Props = {
  assets: number
  liabilities: number
  equity: number
  /** pre-formatted labels so the scene never needs i18n context */
  labels: { assets: ScaleSide; liabilities: ScaleSide; equity: ScaleSide }
  /** RTL: put Assets on the right-hand pan */
  mirror?: boolean
  /** value represented by one block */
  unit?: number
  className?: string
  fallback?: string
}

const BEAM_HALF = 2.15
const PIVOT_Y = 2.55
const ROD = 1.25
const BLOCK = 0.34
const GAP = 0.06
const MAX_BLOCKS = 27
const ROD_SPREAD = 0.8
const ROD_LEN = Math.hypot(ROD_SPREAD, ROD)
const ROD_ANGLE = Math.atan2(ROD_SPREAD, ROD)

type BlockSpec = { key: string; color: string; pos: [number, number, number] }

function layout(counts: { color: string; n: number; prefix: string }[]): BlockSpec[] {
  const out: BlockSpec[] = []
  let i = 0
  for (const { color, n, prefix } of counts) {
    for (let k = 0; k < n && i < MAX_BLOCKS; k++, i++) {
      const layer = Math.floor(i / 9)
      const cell = i % 9
      const gx = (cell % 3) - 1
      const gz = Math.floor(cell / 3) - 1
      out.push({
        key: `${prefix}-${k}`,
        color,
        pos: [gx * (BLOCK + GAP), 0.06 + BLOCK / 2 + layer * (BLOCK + 0.02), gz * (BLOCK + GAP)],
      })
    }
  }
  return out
}

/** A block that drops onto the pan when it mounts. */
function Block({ color, pos }: { color: string; pos: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)
  const age = useRef(0)
  useFrame((_, dt) => {
    const m = ref.current
    if (!m) return
    age.current += dt
    m.position.y = THREE.MathUtils.damp(m.position.y, pos[1], 9, dt)
    const s = Math.min(1, age.current * 4)
    m.scale.setScalar(THREE.MathUtils.damp(m.scale.x, s, 12, dt))
  })
  return (
    <RoundedBox ref={ref} args={[BLOCK, BLOCK, BLOCK]} radius={0.05} smoothness={3} position={[pos[0], pos[1] + 1.6, pos[2]]} scale={0.001}>
      <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
    </RoundedBox>
  )
}

function Pan({ blocks }: { blocks: BlockSpec[] }) {
  return (
    <group>
      {/* hanging rods: from the pan rim up to the beam tip (apex at y = ROD) */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * ROD_SPREAD * 0.5, ROD / 2, 0]} rotation={[0, 0, s * ROD_ANGLE]}>
          <cylinderGeometry args={[0.012, 0.012, ROD_LEN, 8]} />
          <meshStandardMaterial color={palette3D.goldDeep} metalness={0.9} roughness={0.3} />
        </mesh>
      ))}
      <group position={[0, -0.02, 0]}>
        <mesh>
          <cylinderGeometry args={[0.95, 0.85, 0.08, 48]} />
          <meshStandardMaterial color={palette3D.gold} metalness={0.95} roughness={0.22} />
        </mesh>
        {blocks.map((b) => (
          <Block key={b.key} color={b.color} pos={b.pos} />
        ))}
      </group>
    </group>
  )
}

function Scale({ assets, liabilities, equity, mirror, unit = 4000 }: Omit<Props, 'className' | 'fallback' | 'labels'>) {
  const beam = useRef<THREE.Group>(null)
  const leftPan = useRef<THREE.Group>(null)
  const rightPan = useRef<THREE.Group>(null)
  const needle = useRef<THREE.Group>(null)
  // fit the whole scale (beam + both pans ≈ 6.6 units wide) into narrow canvases
  const vw = useThree((s) => s.viewport.width)
  const fit = Math.min(1, vw / 7)

  const right = liabilities + equity
  const leftValue = mirror ? right : assets
  const rightValue = mirror ? assets : right
  const total = Math.max(1, Math.abs(leftValue) + Math.abs(rightValue))
  const target = THREE.MathUtils.clamp(((leftValue - rightValue) / total) * 1.1, -0.38, 0.38)

  const assetBlocks = useMemo(
    () => layout([{ color: palette3D.asset, n: Math.max(0, Math.round(assets / unit)), prefix: 'a' }]),
    [assets, unit],
  )
  const leBlocks = useMemo(
    () =>
      layout([
        { color: palette3D.equity, n: Math.max(0, Math.round(equity / unit)), prefix: 'e' },
        { color: palette3D.liability, n: Math.max(0, Math.round(liabilities / unit)), prefix: 'l' },
      ]),
    [liabilities, equity, unit],
  )

  useFrame((state, dt) => {
    const b = beam.current
    if (!b) return
    // springy approach to the target tilt + a tiny idle sway
    const sway = Math.sin(state.clock.elapsedTime * 1.4) * 0.006
    b.rotation.z = THREE.MathUtils.damp(b.rotation.z, target + sway, 3.2, dt)
    const r = b.rotation.z
    for (const [pan, side] of [
      [leftPan.current, -1],
      [rightPan.current, 1],
    ] as const) {
      if (!pan) continue
      pan.position.set(side * BEAM_HALF * Math.cos(r), PIVOT_Y + side * BEAM_HALF * Math.sin(r) - ROD, 0)
    }
    if (needle.current) needle.current.rotation.z = r
  })

  const assetPan = <Pan blocks={assetBlocks} />
  const lePan = <Pan blocks={leBlocks} />

  return (
    <group position={[0, -1.35 * fit, 0]} scale={fit}>
      {/* base & pillar */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[1.1, 1.25, 0.12, 64]} />
        <meshStandardMaterial color={palette3D.slate} roughness={0.6} metalness={0.3} />
      </mesh>
      <mesh position={[0, PIVOT_Y / 2 + 0.06, 0]}>
        <cylinderGeometry args={[0.07, 0.11, PIVOT_Y, 24]} />
        <meshStandardMaterial color={palette3D.gold} metalness={0.95} roughness={0.25} />
      </mesh>
      {/* indicator dial */}
      <group position={[0, PIVOT_Y + 0.42, 0.06]}>
        <mesh>
          <circleGeometry args={[0.32, 48, Math.PI * 0.15, Math.PI * 0.7]} />
          <meshStandardMaterial color={palette3D.paper} roughness={0.8} side={THREE.DoubleSide} />
        </mesh>
        <group ref={needle} position={[0, 0, 0.01]}>
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[0.016, 0.3, 0.01]} />
            <meshStandardMaterial color={palette3D.liability} />
          </mesh>
        </group>
      </group>
      {/* beam */}
      <group ref={beam} position={[0, PIVOT_Y, 0]}>
        <RoundedBox args={[BEAM_HALF * 2 + 0.2, 0.09, 0.12]} radius={0.04}>
          <meshStandardMaterial color={palette3D.gold} metalness={0.95} roughness={0.2} />
        </RoundedBox>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.2, 32]} />
          <meshStandardMaterial color={palette3D.goldDeep} metalness={0.9} roughness={0.3} />
        </mesh>
        {[-1, 1].map((s) => (
          <mesh key={s} position={[s * BEAM_HALF, 0, 0]}>
            <sphereGeometry args={[0.07, 24, 24]} />
            <meshStandardMaterial color={palette3D.goldDeep} metalness={0.9} roughness={0.3} />
          </mesh>
        ))}
      </group>
      <group ref={leftPan}>{mirror ? lePan : assetPan}</group>
      <group ref={rightPan}>{mirror ? assetPan : lePan}</group>
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2.6} far={4} />
    </group>
  )
}

/** 3D balance scale: Assets on one pan, Liabilities + Equity on the other. */
function PanLabel({ main, sub, tone }: { main: ScaleSide; sub?: ScaleSide[]; tone: string }) {
  return (
    <div className="min-w-[120px] rounded-xl border bg-background/90 px-3 py-1.5 text-center shadow-lg backdrop-blur">
      <div className={cn('text-[11px] font-semibold', tone)}>{main.label}</div>
      {main.value && <div className="tabular text-sm font-bold">{main.value}</div>}
      {sub && (
        <div className="mt-0.5 flex flex-wrap justify-center gap-x-2 text-[11px] text-muted-foreground">
          {sub.map((s) => (
            <span key={s.label} className="whitespace-nowrap">
              {s.label}: <b className="tabular text-foreground">{s.value}</b>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function BalanceScaleScene({ className, fallback, labels, ...props }: Props) {
  const { ref, mounted, visible } = useOnScreen<HTMLDivElement>()
  const webgl = useMemo(() => (typeof window === 'undefined' ? false : hasWebGL()), [])
  const assetLabel = <PanLabel main={labels.assets} tone="text-asset" />
  const leLabel = (
    <PanLabel main={{ label: `${labels.liabilities.label} + ${labels.equity.label}`, value: '' }} sub={[labels.liabilities, labels.equity]} tone="text-equity" />
  )
  return (
    <div ref={ref} className={cn('relative h-[340px] w-full sm:h-[400px]', className)}>
      {/* DOM labels under each pan (physical left/right to match the 3D pans) */}
      {webgl && (
        <div className="pointer-events-none absolute inset-x-2 bottom-9 z-10 flex items-end justify-between gap-2 sm:inset-x-4" style={{ direction: 'ltr' }}>
          {props.mirror ? leLabel : assetLabel}
          {props.mirror ? assetLabel : leLabel}
        </div>
      )}
      {!webgl && <div className="grid h-full place-items-center text-sm text-muted-foreground">{fallback ?? 'WebGL is not available.'}</div>}
      {webgl && mounted && (
        <Canvas
          dpr={[1, 2]}
          frameloop={visible ? 'always' : 'never'}
          camera={{ position: [0, 1.4, 7.4], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
          className="!touch-pan-y"
        >
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 6, 5]} intensity={1.4} />
          <directionalLight position={[-5, 3, -2]} intensity={0.4} color={palette3D.tealBright} />
          <Environment resolution={128}>
            <Lightformer form="rect" intensity={2.2} position={[0, 4, 3]} scale={[8, 3, 1]} />
            <Lightformer form="rect" intensity={1.2} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} color={palette3D.tealBright} />
            <Lightformer form="ring" intensity={1.5} position={[4, 2, -3]} scale={2} color={palette3D.gold} />
          </Environment>
          <Scale {...props} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI * 0.32}
            maxPolarAngle={Math.PI * 0.52}
            minAzimuthAngle={-0.7}
            maxAzimuthAngle={0.7}
            rotateSpeed={0.6}
          />
        </Canvas>
      )}
    </div>
  )
}
