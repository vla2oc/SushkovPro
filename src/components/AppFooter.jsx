import { FaWhatsapp } from 'react-icons/fa6';
import SushkovPro from '../assets/OnlyLogo.png'

import { FaClipboardList, FaEnvelope, FaPhoneSquareAlt, FaInstagram, FaFacebook, FaWhatsappSquare } from "react-icons/fa";
export default function AppFooter() {
    return (
        <div className="bg-amber-300 flex p-8 gap-10 justify-evenly flex-col md:flex-row ">
            <div className="">
                <h1 className="title-footer">Dane Kontaktowe</h1>
                <ul className="space-y-8">
                    <li className='text-2xl flex items-center gap-4'><FaPhoneSquareAlt size={40} />+48 575 522 097</li>
                    <li className='text-2xl flex items-center gap-4'><FaEnvelope size={40} />kontakt@firma.pl</li>

                </ul>
            </div>
            <div className="">
                <h1 className="title-footer">Oferta</h1>
                <ul className="space-y-6">
                    <li className='text-2xl  hover:text-amber-700'><a href="">Fasady aluminiowo-szklane</a></li>
                    <li className='text-2xl  hover:text-amber-700'><a href="">Drzwi i okna aluminiowe</a></li>
                    <li className='text-2xl  hover:text-amber-700'><a href="">Fasady z płyt</a></li>
                    <li className='text-2xl  hover:text-amber-700'><a href="">Witryny i zabudowy</a></li>
                </ul>
            </div>
            <div className="col-span-3">
                <h1 className="title-footer">Social Media</h1>
                <ul className='flex flex-row justify-center gap-8'>
                    <li className='text-6xl  items-center gap-4'><a href="#"><FaInstagram /></a></li>
                    <li className='text-6xl items-center gap-4'><a href="#"><FaFacebook /></a></li>
                    <li className='text-6xl items-center gap-4'><a href="#"><FaWhatsappSquare /></a></li>

                </ul>
            </div>
        </div>

    )
}