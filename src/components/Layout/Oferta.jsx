import OfertaCard from "./OfertaCard";
import oferta from '../../assets/oferta1.jpg'
import oferta2 from '../../assets/oferta2.jpg'
import oferta3 from '../../assets/oferta3.jpg'
import { useScrollAnimation } from "../../../useScrollAnimation";
import { motion } from "framer-motion";
export default function Oferta() {
    const { ref, controls } = useScrollAnimation()
    return (
        <motion.div ref={ref} animate={controls} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 1 } } }}>
            <h1 className="flex text-5xl md:text-7xl  justify-center  text-amber-400 mb-10 mt-50 ">
                Oferta
            </h1>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:gap-20 mt-20">
                <OfertaCard img={oferta} title='Oferta' subtitile='Here are the details of the card' />
                <OfertaCard img={oferta2} title='Oferta' subtitile='Here are the details of the card' />
                <OfertaCard img={oferta3} title='Oferta' subtitile='Here are the details of the card' />
            </div>

        </motion.div>
    )
}