import OfertaCard from "./OfertaCard";
import oferta from '../../assets/oferta1.jpg'
import oferta2 from '../../assets/oferta2.jpg'
import oferta3 from '../../assets/oferta3.jpg'
export default function Oferta() {
    return (
        <>
            <h1 className="flex text-7xl justify-center  text-amber-400 mb-10 mt-50 ">
                Oferta
            </h1>
            <div className="flex justify-center gap-20 mt-20">
                <OfertaCard img={oferta} title='Oferta' subtitile='Here are the details of the card' />
                <OfertaCard img={oferta2} title='Oferta' subtitile='Here are the details of the card' />
                <OfertaCard img={oferta3} title='Oferta' subtitile='Here are the details of the card' />
            </div>

        </>
    )
}