import { useForm } from 'react-hook-form';
import bgtoyota from '../assets/bgtoyota.jpg'
import axios from 'axios';

import { FaAddressBook, FaPhoneSquareAlt } from "react-icons/fa";


export default function Kontakt() {
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:5000/SushkovPro/kontakt', data, {
                headers: { 'Content-Type': 'application/json' },
            })

            if (res.status === 200) {
                alert("Your mail has been sent")
            } else {
                alert('error to send message')
            }
        } catch (error) {
            console.error('Error', error)
            alert('Error')
        }
    }
    return (
        <>
            <section style={{ backgroundImage: `url(${bgtoyota})`, backgroundPosition: 'center 140%' }}
                className='relative h-50 bg-cover bg-center bg-fixed flex items-end justify-center '

            >
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-70  transition-opacity duration-100 z-0'></div>
            </section>
            <h1 className=" text-5xl flex justify-center text-center  md:text-6xl font-display font-bold text-amber-400  mt-20">
                Formularz Kontaktowy
            </h1>

            <div className="flex flex-col mb-10 gap-20 md:flex-row md:gap-52 justify-center items-start pt-24 px-8 bg-white font-display min-h-screen">

                <div className="max-w-md text-gray-800 space-y-20">
                    <div>

                        <h2 className="text-3xl font-semibold mb-5 text-amber-500 flex items-center gap-2"> <FaAddressBook className='' />Dane Rejestrowe</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>SushkovPro Sp. z o.o</li>
                            <li>Adres: ul. Warszawska 12, 00-001 Chorzów</li>
                            <li>NIP: 123-456-78-90</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-5 text-amber-500 flex items-center gap-2"><FaPhoneSquareAlt />Dane kontaktowe</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Telefon: +48 123 456 789</li>
                            <li>Email: kontakt@firma.pl</li>
                            <li>Godziny pracy: Pon - Pt: 9:00 - 17:00</li>
                        </ul>
                    </div>
                </div>

                {/* Левая колонка — ФОРМА */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md bg-amber-50 rounded-lg shadow-[0_0_40px_-10px_rgba(0,0,0,1)] px-8 py-8 space-y-8"
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold mb-1">Imię</label>
                        <input {...register('name')} id="name" placeholder="Wpisz imię" className="form-input" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-1">Mail</label>
                        <input {...register('email')} id="email" type="email" placeholder="Wpisz e-mail" className="form-input" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="text" className="text-lg font-semibold mb-1">Wiadomość</label>
                        <input {...register('text')} id="text" type="text" placeholder="Wpisz wiadomość" className="form-input" />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 border-2 border-[#78788c] bg-transparent text-[#5a5a6e] cursor-pointer transition-all duration-300 hover:bg-[#78788c] hover:text-white font-semibold"
                    >
                        Send
                    </button>
                </form>
            </div>

        </>
    )
}