import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import Helmet from './Helmet'
import CameraRig from "./CameraRig"
import bg from '../../assets/bg1.jpg'

export default function About() {
    return (
        <>
            <div className="absolute w-[800px] h-[800px] right-0">
                <Canvas
                    camera={{ position: [-2, 6, 6], fov: 50 }}
                    className="w-full h-full"
                    shadows
                >
                    <CameraRig />


                    <ambientLight intensity={1.2} />


                    <directionalLight
                        position={[5, 10, 5]}
                        intensity={1.5}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    />
                    <Helmet />
                </Canvas>

            </div>
            <div className=" flex-col font-display flex  h-full max-w-2xl ml-100 ">
                <h1 className="text-7xl  text-amber-400 mb-10 mt-40">O nas</h1>

                <p className="text-lg leading-8 mb-3">Jesteśmy ekipą montażową z Katowic, która w 2023 roku postanowiła pójść na swoje. Założyciel firmy sam zaczynał jako montażysta — z doświadczeniem, determinacją i chęcią robienia rzeczy lepiej. Tak powstała nasza firma — oparta na zaufaniu, rzetelności i sprawdzonym zespole.</p>
                <p className="text-lg leading-8 mb-3">Zajmujemy się montażem konstrukcji aluminiowych — od mniejszych zleceń po skomplikowane projekty. Mamy za sobą dziesiątki realizacji, trudne sytuacje i zdobyte zaufanie.</p>
                <p className="text-lg leading-8 mb-3">Pracujemy prosto i uczciwie. Nie obiecujemy cudów, ale zawsze dotrzymujemy słowa. Dla nas liczy się jakość, terminowość i relacje.</p>
                <p className="text-lg leading-8">Jesteśmy montażową rodziną. I w każdy projekt wkładamy nie tylko wiedzę, ale też serce.</p>
                <button class="flex items-center justify-center mt-5 w-50  rounded-md border border-slate-300 py-3 px-4 text-center text-m transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-amber-700 hover:border-slate-400 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    Skontaktuj się z nami

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1.5">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-center mt-20">
                <img className="w-200" src={bg} alt="" />
            </div>
        </>
    )
}