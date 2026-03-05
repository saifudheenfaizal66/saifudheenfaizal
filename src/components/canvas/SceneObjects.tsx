import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import type { RootState } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Single floating mesh for the background scene
 */
function FloatingMesh({
    position,
    geometry,
    speed = 1,
    rotationOffset = 0,
}: {
    position: [number, number, number]
    geometry: 'box' | 'sphere' | 'octahedron' | 'torus'
    speed?: number
    rotationOffset?: number
}) {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + rotationOffset
        meshRef.current.rotation.x = t * 0.15
        meshRef.current.rotation.y = t * 0.2
    })

    const color = new THREE.Color('#FF5F1F')
    const emissive = new THREE.Color('#FF3300')

    const material = (
        <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={0.08}
            roughness={0.4}
            metalness={0.8}
            transparent
            opacity={0.25}
            wireframe={geometry === 'torus'}
        />
    )

    const geoNode =
        geometry === 'box' ? (
            <boxGeometry args={[1, 1, 1]} />
        ) : geometry === 'sphere' ? (
            <sphereGeometry args={[0.7, 16, 16]} />
        ) : geometry === 'octahedron' ? (
            <octahedronGeometry args={[0.8, 0]} />
        ) : (
            <torusGeometry args={[0.7, 0.2, 16, 40]} />
        )

    return (
        <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
            <mesh ref={meshRef} position={position}>
                {geoNode}
                {material}
            </mesh>
        </Float>
    )
}

/**
 * Soft particles / bokeh points floating in the scene
 */
function Particles({ count = 80 }: { count?: number }) {
    const pointsRef = useRef<THREE.Points>(null!)

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            arr[i * 3 + 0] = (Math.random() - 0.5) * 20
            arr[i * 3 + 1] = (Math.random() - 0.5) * 20
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
        }
        return arr
    }, [count])

    useFrame((state: RootState) => {
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
        pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#FF5F1F"
                transparent
                opacity={0.45}
                sizeAttenuation
            />
        </points>
    )
}

/**
 * Mouse-reactive plane that nudges the camera slightly
 */
function CameraRig({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
    useFrame((state) => {
        if (!mouse.current) return
        state.camera.position.x += (mouse.current.x * 1.5 - state.camera.position.x) * 0.04
        state.camera.position.y += (mouse.current.y * 1.0 - state.camera.position.y) * 0.04
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

export { FloatingMesh, Particles, CameraRig }
