import { realizacje } from '../components/data/data_realizacja'
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
            <div className=" font-display">
                <h1 className=" text-5xl md:text-6xl text-center font-bold text-amber-400 flex justify-center mt-20">Nasza Realizacja</h1>
                <div className='flex md:gap-50 mb-20 mt-10 justify-center items-center flex-col md:flex-row'>
                    {realizacje.slice(0, 2).map(r => (
                        <FeaturesWork
                            key={r.id}
                            id={r.id}
                            title={r.title}
                            image={r.image}
                            location={r.location}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}