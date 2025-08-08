import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import NaszaRealizacja from './pages/NaszaRealizacja'
import Onas from './pages/Onas'
import Kontakt from './pages/Kontakt'
import Oferta from './pages/Oferta'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/realizacja' element={<NaszaRealizacja />} />
        <Route path='/o-nas' element={<Onas />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/oferta' element={<Oferta />} />
      </Routes>
    </>
  )
}

export default App
