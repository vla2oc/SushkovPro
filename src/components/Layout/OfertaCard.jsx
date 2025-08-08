import './OfertaCard.css'
import { Link } from 'react-router-dom'
export default function OfertaCard({ img, title, subtitile }) {
    return (
        <>
            <a href="##" className='block'>
                <div className="card relative w-80   md:w-100 md:h-141 z-0">

                    <img src={img} alt="" className='object-cover w-100 h-140 rounded-md mb-4' />


                    <div className="card-details absolute inset-0 z-20 flex flex-col justify-center items-center text-center">
                        <p className="text-title text-2xl  font-bold text-amber-100">{title}</p>
                        <p className="text-body mt-20">{subtitile}</p>
                    </div>
                    <div className='absolute inset-0 bg-black opacity-70 z-10'></div>
                    <Link to="/oferta">
                        <button className="card-button z-30">Więcej</button>
                    </Link>
                </div>
            </a >
        </>
    )
}