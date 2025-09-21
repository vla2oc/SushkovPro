import { useEffect, useState } from 'react'
import logo from '../../src/assets/SushkovPro.png'

import bgToyotaMobile from '../assets/bgtoyotaMobile.jpg'
import { Menu, X } from 'lucide-react';
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import { fromHalfFloat } from 'three/src/extras/DataUtils.js'
import { Link, NavLink } from 'react-router-dom';



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


        <header className="w-full absolute font-display top-1 left-0 z-30 p-4 bg-transparent text-white">

            {/* Логотип */}
            <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    className="absolute flex w-36 md:w-48 lg:w-56 z-10 right-0 md:left-0"
                />
            </Link>

            {/* Mobile Nav */}
            <div className="flex font-display relative items-start p-4 md:hidden z-20">
                <button
                    className="z-30 relative"
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    {menuOpen
                        ? <X style={{ color: 'white' }} size={28} />
                        : <Menu style={{ color: 'white' }} size={28} />}
                </button>

                <AnimatePresence>
                    {menuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black z-10"
                                onClick={() => setMenuOpen(false)}
                            />

                            {/* Меню */}
                            <motion.nav
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                                className="fixed top-0 right-0 h-full w-64 bg-black text-white flex flex-col items-center space-y-6 py-10 z-20 shadow-lg"
                            >
                                <Link to="/" onClick={() => setMenuOpen(false)}>
                                    <img src={logo} alt="logo" className="w-32 mb-6" />
                                </Link>

                                <Link to="/realizacja" className="header-title" onClick={() => setMenuOpen(false)}>Realizacje</Link>
                                <Link to="/oferta" className="header-title" onClick={() => setMenuOpen(false)}>Oferta</Link>
                                <Link to="/kontakt" className="header-title" onClick={() => setMenuOpen(false)}>Kontakt</Link>
                                <Link to="/o-nas" className="header-title" onClick={() => setMenuOpen(false)}>O nas</Link>
                            </motion.nav>
                        </>
                    )}
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
                                <NavLink
                                    to="/realizacja"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-amber-100 underline decoration-2 decoration-amber-300 underline-offset-8'
                                            : 'text-white hover:text-amber-100 hover:underline decoration-2 decoration-amber-300 underline-offset-8'
                                    }
                                >
                                    Realizacje
                                </NavLink>
                            </li>
                            <li><NavLink to="/oferta" className={({ isActive }) =>
                                isActive
                                    ? 'text-amber-100 underline decoration-2 decoration-amber-300 underline-offset-8'
                                    : 'text-white hover:text-amber-100 hover:underline decoration-2 decoration-amber-300 underline-offset-8'
                            }
                            >Oferta</NavLink></li>
                            <li><NavLink to="/kontakt" className={({ isActive }) =>
                                isActive
                                    ? 'text-amber-100 underline decoration-2 decoration-amber-300 underline-offset-8'
                                    : 'text-white hover:text-amber-100 hover:underline decoration-2 decoration-amber-300 underline-offset-8'
                            }
                            >Kontakt</NavLink></li>
                            <li>
                                <NavLink
                                    to="/o-nas"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-amber-100 underline decoration-2 decoration-amber-300 underline-offset-8'
                                            : 'text-white hover:text-amber-100 hover:underline decoration-2 decoration-amber-300 underline-offset-8'
                                    }
                                >
                                    O nas
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div>
        </header >
    )
}