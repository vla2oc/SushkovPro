import { useEffect } from 'react'
import logo from '../../src/assets/SushkovPro.png'

export default function AppHeader() {

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.scrollY
    //         const overlay = document.getElementById('dark-overlay')

    //         const opacity = Math.min(scrollTop / 800, 0.9)
    //         if (overlay) {
    //             overlay.style.opacity = opacity
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    return (
        <header className='h-screen bg-[url("../../src/assets/bg-toyota.jpg")] bg-cover bg-fixed flex justify-center font-display'>
            <div id='dark-overlay' className='absolute inset-0 bg-black opacity-0  transition-opacity duration-100'></div>
            <img src={logo} alt="logo" className='w-56 absolute left-0 ' />
            <div className='text-white absolute text-lg'>
                <nav className=''>
                    <ul className='flex justify-center gap-9 m-6'>
                        <li><a href="#" className="header-title">Realizacje</a></li>
                        <li><a href="#" className="header-title">Oferta</a></li>
                        <li><a href="# " className="header-title">Kontakt</a></li>
                        <li><a href="#" className="header-title">O nas</a></li>
                    </ul>
                </nav>
            </div>
            <div className='flex flex-col items-end justify-end h-full px-10 pb-20 max-w-4xl ml-250' >
                <h2 className='text-4xl  mb-8 text-amber-200 font-extrabold'>
                    Tworzymy nowoczesne konstrukcje aluminiowe dopasowane do Twojej wizji.
                </h2>
                <p className='text-lg leading-relaxed text-amber-50 font-bold'>
                    Nasze realizacje łączą precyzję wykonania, funkcjonalność i estetykę, tworząc przestrzenie, które są trwałe, praktyczne i stylowe.
                    Współpracujemy z klientami na każdym etapie – od projektu po montaż – by dostarczyć rozwiązania, które naprawdę odpowiadają na potrzeby codziennego życia i pracy.
                </p>
            </div>
        </header>
    )
}