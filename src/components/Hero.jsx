import './Hero.css'
import Button from './Layout/Button'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import bgToyota from '../assets/bgtoyota.jpg'
import FeaturesWork from './Layout/FeaturesWork'
import { useScrollAnimation } from '../../useScrollAnimation'
export default function Hero() {
    const { ref, controls } = useScrollAnimation()

    return (
        <>
            <section style={{ backgroundImage: `url(${bgToyota})` }}
                className="relative h-screen bg-cover bg-center bg-fixed flex items-end justify-center">
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-60  transition-opacity duration-100 z-0'></div>
                <div className='flex flex-col relative md:top-10'>
                    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, ease: easeOut }} className="relative z-10 flex flex-col items-center justify-center md:justify-end text-white px-6 max-w-4xl mx-auto md:ml-220 p-50">
                        <h2 className="text-xl sm:text-xl md:text-2xl md:text-right lg:text-4xl text-amber-300 font-extrabold mb-4 text-center ">
                            Tworzymy nowoczesne konstrukcje aluminiowe dopasowane do Twojej wizji.
                        </h2>
                        <p className="text-m sm:text-base md:text-lg lg:text-xl text-amber-50 font-bold text-center md:text-right leading-relaxed">
                            Nasze realizacje łączą precyzję wykonania, funkcjonalność i estetykę, tworząc przestrzenie, które są trwałe, praktyczne i stylowe.
                            Współpracujemy z klientami na każdym etapie – od projektu po montaż – by dostarczyć rozwiązania, które naprawdę odpowiadają na potrzeby codziennego życia i pracy.
                        </p>
                    </motion.div>
                </div>
            </section>


            <motion.div ref={ref} initial='hidden' animate={controls} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 1 } } }} >
                <div className='font-display '>
                    <h1 className='text-5xl font-bold md:text-7xl text-amber-400 flex justify-center align-top mt-40'>Nasze Realizacje</h1>
                </div>
                <div className='flex md:gap-50 justify-center items-center flex-col md:flex-row '>
                    <FeaturesWork />
                    <FeaturesWork />
                </div>
                <div className='flex justify-center mt-5 items-center'>
                    <Button title="Więcej" link='/realizacja' />
                </div>
            </motion.div>
        </>
    )
}