import { Center } from '@react-three/drei'
import bgtoyota from '../assets/bgtoyota.jpg'
import FeaturesWork from '../components/Layout/FeaturesWork'

export default function NaszaRealizacja() {
    return (
        <>
            <section style={{ backgroundImage: `url(${bgtoyota})`, backgroundPosition: 'center 140%' }}
                className='relative h-50 bg-cover bg-center bg-fixed flex items-end justify-center '

            >
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-70  transition-opacity duration-100 z-0'></div>
            </section>

            <h1 className="text-6xl font-bold text-amber-400 flex justify-center mt-20">Nasza Realizacja</h1>
            <div className='flex justify-center items-center mt-20 mb-30'>
                <FeaturesWork />
            </div>

        </>
    )
}