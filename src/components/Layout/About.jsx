import { Canvas } from "@react-three/fiber"
import { Link } from 'react-router-dom'
import Helmet from './Helmet'
import CameraRig from "./CameraRig"
import bg from '../../assets/bg1.jpg'
import { motion } from "framer-motion"
import { useScrollAnimation } from "../../../useScrollAnimation"

export default function About() {
    const { ref, controls } = useScrollAnimation()

    return (
        <motion.div ref={ref} initial='hidden' animate={controls} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 1 } } }}    >
            <div className=" hidden md:block absolute w-[650px] h-[650px] right-0 mt-20">
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
            <div className=" flex-col items-center font-display flex  h-full md:max-w-2xl p-2 md:ml-40  ">
                <h1 className=" text-5xl font-bold md:text-7xl  text-amber-400 mb-10 mt-40">O nas</h1>

                <p className="md:text-xl leading-8 mb-3">Jesteśmy ekipą montażową z Katowic, która w 2023 roku postanowiła pójść na swoje. Założyciel firmy sam zaczynał jako montażysta — z doświadczeniem, determinacją i chęcią robienia rzeczy lepiej. Tak powstała nasza firma — oparta na zaufaniu, rzetelności i sprawdzonym zespole.</p>
                <p className="md:text-xl leading-8 mb-3">Zajmujemy się montażem konstrukcji aluminiowych — od mniejszych zleceń po skomplikowane projekty. Mamy za sobą dziesiątki realizacji, trudne sytuacje i zdobyte zaufanie.</p>
                <p className="md:text-xl leading-8 mb-3">Pracujemy prosto i uczciwie. Nie obiecujemy cudów, ale zawsze dotrzymujemy słowa. Dla nas liczy się jakość, terminowość i relacje.</p>
                <p className="md:text-xl leading-8">Jesteśmy montażową rodziną. I w każdy projekt wkładamy nie tylko wiedzę, ale też serce.</p>
                <Link to="/kontakt">
                    <button className="flex items-center justify-center mt-5 w-50  rounded-md border border-slate-300 py-3 px-4 text-center text-m transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-amber-700 hover:border-slate-400 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" >
                        Skontaktuj się z nami

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
            </div>
            <div className="flex justify-center mt-20 ">
                <img className="w-200" src={bg} alt="" />
            </div>
        </motion.div>
    )
}