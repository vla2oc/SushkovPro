import { useParams } from "react-router-dom"
import { realizacje } from "../data/data_realizacja"
import Slider from "./Slider"


export default function RealizacjaPage() {

    const { id } = useParams()
    const projekt = realizacje.find(o => o.id == id)




    return (
        <>
            <section style={{ backgroundImage: `url(${projekt.image})`, backgroundPosition: 'center 80%' }}
                className='relative h-50 bg-cover bg-center bg-fixed flex items-end justify-center '

            >
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-60  transition-opacity duration-100 z-0'></div>
            </section>
            <div className="flex justify-center px-4 md:px-10 py-20 font-display">
                <div className='flex-1  font-display md:max-w-7xl '>
                    <h1 className=' text-5xl md:text-6xl text-center  font-bold text-amber-400  mb-12'>{projekt.title}</h1>
                    <p className="md:text-2xl leading-8 mb-2 text-center">{projekt.subtitle}</p>
                </div>
            </div>
            <div className="flex justify-center overflow-hidden object-cover ">
                <Slider slides={projekt.slides} />
            </div>
            <div className="flex justify-center items-center mt-8 mb-12">
                <div className="border-2 p-4 rounded-2xl">
                    <p className="max-w-7xl font-display text-xl">{projekt.content}</p>
                </div>
            </div>
        </>
    )
}