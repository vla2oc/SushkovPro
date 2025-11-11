import bgtoyota from '../assets/bgtoyota.jpg'
import toyota from '../assets/toyota.jpg'
import zawiercie from '../assets/zawiercie.jpg'
import gorlice from '../assets/gorlice.jpg'
import line from '../assets/line.svg'
import Button from '../components/Layout/Button'
import raciborz from '../assets/racibórz.jpg'


export default function Onas() {



    return (
        <>
            <section style={{ backgroundImage: `url(${raciborz})`, backgroundPosition: 'center 100%' }}
                className='relative h-50 bg-cover bg-center bg-fixed flex items-end justify-center '

            >
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-60  transition-opacity duration-100 z-0'></div>
            </section>
            <section className='flex justify-center px-4 md:px-10 py-20 font-display'>
                <div className='flex-1  font-display md:max-w-7xl'>
                    <h2 className=' text-5xl md:text-6xl font-bold flex text-center justify-center text-amber-400 mb-20'>Firma jak rodzina</h2>
                    <p className='md:text-xl leading-8 mb-3'>Nie jesteśmy korporacją. Nie jesteśmy przypadkową ekipą. Jesteśmy grupą ludzi, którzy przez lata pracowali razem — ramię w ramię — zanim zdecydowali się założyć własną firmę. I właśnie ta historia nas wyróżnia.</p>
                    <p className='md:text-xl leading-8 mb-3'>Założyciel naszej firmy zaczynał jako zwykły montażysta. Poznał ten zawód od podstaw, nauczył się, co naprawdę działa, i zrozumiał, że najlepsze efekty osiąga się tylko wtedy, gdy pracuje się z ludźmi, którym się ufa. Tak powstała nasza firma — w Katowicach, w 2023 roku — zbudowana nie na papierze, tylko na relacjach.</p>
                </div>
            </section>
            <div className='flex justify-center flex-col md:mt-15 md:mb-20 gap-20 md:flex-row items-center'>
                <img src={gorlice} alt="" className='w-80 shadow-2xl' />
                <img src={toyota} alt="" className='w-80 shadow-2xl' />
                <img src={zawiercie} alt="" className='w-80 shadow-2xl' />
            </div>
            <section className=''>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-12 p-5 place-items-center font-display">
                    {/* 1 */}
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                            Działamy sprawnie i terminowo
                        </h2>
                        <img
                            src={line}
                            alt=""
                            className="hidden md:block w-8 top-10"
                        />
                    </div>

                    {/* 2 */}
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                            Nie zawyżamy kosztów
                        </h2>
                        <img src={line} alt="" className="hidden md:block w-8 top-10" />
                    </div>

                    {/* 3 */}
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                            Traktujemy projekt jak własny
                        </h2>
                        <img src={line} alt="" className="hidden md:block w-8 top-10" />
                    </div>

                    {/* 4 */}
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                            Dbamy o jakość
                        </h2>
                        <img src={line} alt="" className="hidden md:block w-8 top-10" />
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row font-display md:max-w-full mt-32 mb-0">
                <div className="flex-1 bg-amber-900 p-20 text-white shadow mb-0">
                    <h1 className="text-4xl text-center md:text-5xl text-amber-200 font-bold mb-6">
                        Zobacz nasze realizacje
                    </h1>
                    <p className="text-lg  md:text-xl leading-8 mb-10">
                        Każdy projekt to dla nas coś więcej niż tylko montaż. To efekt współpracy, zaufania i solidnej pracy zespołu. Zobacz, co udało nam się wspólnie stworzyć — od małych zleceń po duże, wymagające realizacje.
                    </p>
                    <Button title="Realizacje" link="/realizacja" />
                </div>

                <div className="flex-1 bg-amber-400 p-20 text-white shadow mb-0">
                    <h2 className="text-4xl md:text-5xl text-orange-900 font-bold mb-6">
                        Chcesz z nami współpracować?
                    </h2>
                    <p className="text-lg md:text-2xl mb-10">
                        Zbudujmy coś solidnego — wspólnie.
                    </p>
                    <Button title="Skontaktuj się z nami" link='/kontakt' />
                </div>
            </section>


        </>
    )
}