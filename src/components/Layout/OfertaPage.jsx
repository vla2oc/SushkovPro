import { useParams } from "react-router-dom"
import { data } from "../data/data"
import toyota from '../../assets/toyota.jpg'
export default function OfertaPage() {

    const { id } = useParams()
    const oferta = data.find(o => o.id == id)




    return (
        <>
            <section style={{ backgroundImage: `url(${toyota})`, backgroundPosition: 'center 50%' }}
                className='relative h-50 bg-cover bg-center bg-fixed flex items-end justify-center '

            >
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-60  transition-opacity duration-100 z-0'></div>
            </section>
            <div className='flex font-display justify-center '>
                <h1 className=' text-5xl md:text-6xl text-center  font-bold text-amber-400 mt-20'>{oferta.title}</h1>
            </div>
        </>
    )
}