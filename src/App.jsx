import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import NaszaRealizacja from './pages/NaszaRealizacja'
import Onas from './pages/Onas'
import Kontakt from './pages/Kontakt'
import Oferta from './pages/Oferta'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import OfertPage from './components/Layout/OfertaPage'

function App() {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/realizacja' element={<NaszaRealizacja />} />
        <Route path='/o-nas' element={<Onas />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/oferta' element={<Oferta />} />
        <Route path='/oferta/:id' element={<OfertPage />} />
      </Routes>
    </>
  )
}

export default App
