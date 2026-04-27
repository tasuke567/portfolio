'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, RoundedBox, Environment, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const mainIcons = [
  { id: 'angular',    color: '#dd0031', position: [4.2,  1.4,  0]   as [number,number,number], size: 1.0, speed: 1.2 },
  { id: 'react',      color: '#61dafb', position: [6.2, -0.2, -0.2] as [number,number,number], size: 1.0, speed: 1.5 },
  { id: 'nodejs',     color: '#5fa04e', position: [4.0, -1.8,  0.2] as [number,number,number], size: 1.0, speed: 1.0 },
]

const secondaryIcons = [
  { id: 'typescript', color: '#3178c6', position: [7.0,  1.6, -1]   as [number,number,number], size: 0.65, speed: 1.8 },
  { id: 'laravel',    color: '#ff2d20', position: [2.8,  2.2, -0.5] as [number,number,number], size: 0.65, speed: 1.3 },
  { id: 'nextjs',     color: '#555555', position: [7.4, -1.6, -0.5] as [number,number,number], size: 0.65, speed: 2.0 },
  { id: 'docker',     color: '#2496ed', position: [4.8, -3.0, -0.8] as [number,number,number], size: 0.65, speed: 1.6 },
  { id: 'postgresql', color: '#336791', position: [6.6,  0.6, -1.2] as [number,number,number], size: 0.65, speed: 1.1 },
  { id: 'graphql',    color: '#e10098', position: [5.4,  3.0, -0.8] as [number,number,number], size: 0.65, speed: 1.9 },
  { id: 'redis',      color: '#dc382d', position: [8.0,  0.4, -0.8] as [number,number,number], size: 0.65, speed: 1.4 },
]

function IconCard({ id, color, position, size, speed }: {
  id: string; color: string
  position: [number,number,number]; size: number; speed: number
}) {
  const group = useRef<THREE.Group>(null!)
  const texture = useTexture(`/icons/${id}.svg`)
  const cardSize = size * 0.9

  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35 + speed) * 0.2
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22 + speed) * 0.08
  })

  return (
    <Float speed={speed} rotationIntensity={0.06} floatIntensity={0.8}>
      <group ref={group} position={position}>
        {/* white card background */}
        <RoundedBox args={[cardSize, cardSize, 0.1]} radius={cardSize * 0.22} smoothness={4}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.05} />
        </RoundedBox>
        {/* colored border */}
        <RoundedBox args={[cardSize + 0.05, cardSize + 0.05, 0.07]} radius={cardSize * 0.24} smoothness={4}>
          <meshStandardMaterial color={color} transparent opacity={0.25} roughness={0.5} />
        </RoundedBox>
        {/* icon texture on plane */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[cardSize * 0.65, cardSize * 0.65]} />
          <meshBasicMaterial map={texture} transparent alphaTest={0.01} />
        </mesh>
      </group>
    </Float>
  )
}

function AllIcons() {
  return (
    <>
      {mainIcons.map((s) => <IconCard key={s.id} {...s} />)}
      {secondaryIcons.map((s) => <IconCard key={s.id} {...s} />)}
    </>
  )
}

function CameraRig() {
  const { camera, pointer } = useThree()
  useFrame(() => {
    camera.position.x += (4 + pointer.x * 1.0 - camera.position.x) * 0.03
    camera.position.y += (pointer.y * 0.6 - camera.position.y) * 0.03
    camera.lookAt(4, 0, 0)
  })
  return null
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.0} />
      <pointLight position={[6, 2, 3]} intensity={2} color="#e0e7ff" distance={14} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <AllIcons />
      </Suspense>
      <CameraRig />
    </>
  )
}

export function HeroScene() {
  return (
    <Canvas
      className="absolute inset-0"
      dpr={[1, 1.5]}
      camera={{ position: [4, 0, 10], fov: 55 }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0)
        gl.toneMapping = THREE.ACESFilmicToneMapping
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
