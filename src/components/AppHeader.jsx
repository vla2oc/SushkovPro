import { useEffect, useState } from 'react'
import logo from '../../src/assets/SushkovPro.png'

import bgToyotaMobile from '../assets/bgtoyotaMobile.jpg'
import { Menu, X } from 'lucide-react';
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import { fromHalfFloat } from 'three/src/extras/DataUtils.js'
import { Link } from 'react-router-dom';



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

    const isMobile = window.innerWidth < 768
    const [menuOpen, setMenuOpen] = useState(false)
    return (


        <header className='w-full absolute font-display  top-1 left-0 z-30 p-4 bg-transparent text-white'>

            <Link to="/"><img src={logo} alt="logo" className='absolute flex w-36 md:w-48 lg:w-56 z-10 right-0 md:left-0 ' /></Link >

            {/* Mobile Nav - Logo + Burger */}

            <div className='flex font-display relative items-start p-4 md:hidden z-20 '>
                <button className='z-30 relative' onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? <X style={{ color: 'white' }} size={28} /> : <Menu style={{ color: 'white' }} size={28} />}
                </button>
                <AnimatePresence exitBeforeEnter>
                    {menuOpen &&
                        <motion.nav initial={{ height: 0, opacity: 0 }} transition={{ ease: 'easeOut' }} style={{ overflow: 'hidden' }} animate={{ height: 'auto', opacity: 1, }} exit={{ height: 0, opacity: 0 }} className="md:hidden absolute text-white top-0 left-0 w-full bg-black opacity-100 flex flex-col items-center space-y-4 py-5 z-20">
                            <Link to="/SushkovPro/realizacja" className="header-title">Realizacje</Link>
                            <a href="#" className="header-title">Oferta</a>
                            <a href="#" className="header-title">Kontakt</a>
                            <Link to="/SushkovPro/o-nas" className="header-title">O nas</Link>
                        </motion.nav>}
                </AnimatePresence>
            </div>




            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, ease: easeOut }}
                className='flex justify-center relative z-20'
            >
                <div className='hidden md:flex text-white items-center text-center'>
                    <nav>
                        <ul className='flex justify-center gap-10 m-6 text-sm md:text-2xl'>
                            <li>
                                <Link
                                    to="/realizacja"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-amber-100 underline decoration-2 decoration-amber-300 underline-offset-8'
                                            : 'text-white hover:text-amber-100 hover:underline decoration-2 decoration-amber-300 underline-offset-8'
                                    }
                                >
                                    Realizacje
                                </Link>
                            </li>
                            <li><Link to="/kontakt" className="header-title">Oferta</Link></li>
                            <li><Link to="/kontakt" className="header-title">Kontakt</Link></li>
                            <li>
                                <Link
                                    to="/o-nas"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-amber-100 underline decoration-2 decoration-amber-300 underline-offset-8'
                                            : 'text-white hover:text-amber-100 hover:underline decoration-2 decoration-amber-300 underline-offset-8'
                                    }
                                >
                                    O nas
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div>
        </header >
    )
}