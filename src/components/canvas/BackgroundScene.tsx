import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { FloatingMesh, Particles, CameraRig } from './SceneObjects'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

interface BackgroundSceneProps {
    mouse: React.RefObject<{ x: number; y: number }>
}

export default function BackgroundScene({ mouse }: BackgroundSceneProps) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.2} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#FF5F1F" />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#FF3300" />
                <directionalLight position={[0, 5, 5]} intensity={0.3} color="#ffffff" />

                <Suspense fallback={null}>
                    {/* Floating geometric primitives */}
                    <FloatingMesh position={[-4, 2.5, -2]} geometry="box" speed={0.6} rotationOffset={0} />
                    <FloatingMesh position={[4.5, -1.5, -3]} geometry="sphere" speed={0.5} rotationOffset={1} />
                    <FloatingMesh position={[-3, -2.5, -4]} geometry="octahedron" speed={0.7} rotationOffset={2} />
                    <FloatingMesh position={[3, 3, -5]} geometry="torus" speed={0.4} rotationOffset={3} />
                    <FloatingMesh position={[0, -3.5, -6]} geometry="box" speed={0.35} rotationOffset={1.5} />
                    <FloatingMesh position={[-5.5, 0, -5]} geometry="sphere" speed={0.45} rotationOffset={4} />
                    <FloatingMesh position={[5.5, 1, -4]} geometry="octahedron" speed={0.55} rotationOffset={0.5} />

                    {/* Bokeh-style particle field */}
                    <Particles count={100} />
                </Suspense>

                {/* Post-processing bloom for glow */}
                <EffectComposer>
                    <Bloom
                        intensity={0.8}
                        luminanceThreshold={0.6}
                        luminanceSmoothing={0.9}
                        radius={0.8}
                    />
                </EffectComposer>

                <CameraRig mouse={mouse} />
            </Canvas>
        </div>
    )
}
