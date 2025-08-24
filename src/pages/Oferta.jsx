import zory from '../assets/żory.jpg'
import toyota from '../assets/toyota.jpg'
import zawiercie from '../assets/zawiercie.jpg'
import gorlice from '../assets/gorlice.jpg'
import CardOferta from '../components/Layout/CardOferta'
import WorkTogether from '../components/Layout/WorkTogether'
import { Link, NavLink } from 'react-router-dom';

export default function Oferta() {
    return (
        <>
            <section style={{ backgroundImage: `url(${zory})`, backgroundPosition: 'center 100%' }}
                className='relative h-50 bg-cover bg-center bg-fixed flex items-end justify-center '

            >
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-60  transition-opacity duration-100 z-0'></div>
            </section>

            <div className='flex font-display justify-center '>
                <h1 className=' text-5xl md:text-6xl  font-bold text-amber-400 mt-20'>Nasza Oferta</h1>
            </div>
            <div className='flex-1 justify-center md:px-10 py-5 font-display md:max-w-7xl mx-auto  '>
                <h2 className=' text-center text-3xl  md:text-4xl justify-center flex font-bold text-amber-500 mt-10'>Wykonawstwo i montaż konstrukcji aluminiowych</h2>
                <p className=' text-center md:text-xl md:text-left leading-8 mb-3 mt-5'>Nasza praca zaczyna się od zrozumienia potrzeb klienta i kończy dopiero wtedy, gdy wszystko jest idealnie zamontowane. Oferujemy kompleksowe wykonawstwo oraz montaż konstrukcji aluminiowych — od prostych elementów po złożone systemy fasadowe. <span className='text-amber-800 font-bold'>Nie jesteśmy anonimową firmą z katalogu. Jesteśmy ekipą, która tworzy zgrany, odpowiedzialny zespół. Każdy zna swoją rolę i bierze odpowiedzialność za wspólny rezultat.</span></p>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2  mt-20 mb-20 gap-20 md:max-w-6xl mx-auto place-items-center'>
                <Link to="/oferta/fasady-aluminiowo-szklane">
                    <CardOferta photo={toyota} title='Fasady aluminiowo-szklane' subtitle="Przestrzeń światła i nowoczesny design dla obiektów biznesowych i usługowych." />
                </Link>
                <Link to='/oferta/drzwi-okna-aluminiowe'>
                    <CardOferta photo={zory} title='Drzwi i okna aluminiowe' subtitle="Solidne i eleganckie rozwiązania o wysokiej izolacyjności i trwałości." />
                </Link>
                <Link to='/oferta/fasady-z-plyt'>
                    <CardOferta photo={gorlice} title='Fasady z płyt' subtitle="Estetyczne, trwałe i nowoczesne wykończenie elewacji dopasowane do potrzeb klienta." />
                </Link>
                <Link to='/oferta/witryny-i-zabudowy'>
                    <CardOferta photo={zawiercie} title='Witryny i zabudowy' subtitle="Przejrzyste i funkcjonalne konstrukcje podkreślające charakter przestrzeni.

" />
                </Link>
            </div>

            <WorkTogether />
        </>
    )
}
