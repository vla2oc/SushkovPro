import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import helmet from '../../assets/helmet1.glb'


export default function Helmet() {
    const ref = useRef()
    const { scene } = useGLTF(helmet)
    useFrame(({ mouse }) => {
        if (ref.current) {
            ref.current.rotation.y = THREE.MathUtils.lerp(
                ref.current.rotation.y,
                mouse.x * 0.5,
                0.1
            )
        }
    })
    return <primitive object={scene} ref={ref} scale={2.5} />
}