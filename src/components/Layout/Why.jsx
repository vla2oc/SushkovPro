import WhyCard from "./WhyCard";
import termin from '../../assets/termin.svg'
import ceny from '../../assets/ceny.svg'
import jakosc from '../../assets/jakosc.svg'
import zespol from '../../assets/zespol.svg'
export default function Why() {
    return (
        <>
            <div className="bg-amber-100 mt-40 w-full py-20">
                <div className="rounded-4xl  justify-center mx-auto max-w-7xl  ">
                    <h1 className="font-display text-4xl md:text-7xl mt-10 font-bold text-amber-600">Dlaczego SushkovPro?</h1></div>
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-20 gap-20">
                        <WhyCard img={termin} subtitle="Zawsze dotrzymujemy ustalonych terminów. Szanujemy Twój czas — montaż realizujemy sprawnie i zgodnie z harmonogramem." title='Terminowość' />
                        <WhyCard img={ceny} subtitle="Nie zawyżamy kosztów i nie stosujemy ukrytych opłat. U nas płacisz za realną jakość i solidną pracę — nic więcej." title='Uczciwe ceny' />
                        <WhyCard img={jakosc} subtitle='Każdy projekt wykonujemy tak, jakbyśmy robili go dla siebie. Dokładność, solidność i trwałość to nasze standardy.' title='Gwarancja jakości' />
                        <WhyCard img={zespol} subtitle='Tworzymy zgrany zespół fachowców z wieloletnim doświadczeniem w montażu konstrukcji aluminiowych. Znamy się na tym, co robimy.' title='Doświadczony zespół' />
                    </div>
                </div>
            </div>

        </>
    )
}