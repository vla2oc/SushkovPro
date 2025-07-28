import termin from '../../assets/termin.svg'

export default function WhyCard({ img, subtitle, title }) {
    return (
        <>
            <article
                className="w-80 h-65 bg-gray-700 font-display shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
                <div className='flex items-center'>
                    <div>
                        <img src={img} alt="" className="w-15 h-15 ">
                        </img>
                    </div>
                    <div className='flex items-center justify-center text-2xl text-amber-50 h-15 w-full'><h2>{title}</h2></div>
                </div>
                <p className="text-lg w-full text-white mt-10">
                    {subtitle}
                </p>
            </article>
        </>
    )
}