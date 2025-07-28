import './OfertaCard.css'
export default function OfertaCard({ img, title, subtitile }) {
    return (
        <>
            <a href="##" className='block'>
                <div className="card relative w-80   md:w-100 md:h-141 z-0">

                    <img src={img} alt="" className='object-cover w-100 h-140 rounded-md mb-4' />
                    <div className="card-details z-20">
                        <p className="text-title absolute inset-0 flex justify-center items-center z-11  ">{title}</p>
                        <p className="text-body absolute inset-0 flex justify-center items-center mt-40 text-lg z-11">{subtitile}</p>
                    </div>
                    <button className="card-button z-0">More info</button>
                    {/* <div className='absolute inset-0 bg-black opacity-0 hover:opacity-80 transition duration-300 z-12'></div> */}
                </div>
            </a>
        </>
    )
}