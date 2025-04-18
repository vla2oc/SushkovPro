import { useState } from "react"
import { FaMapLocation } from "react-icons/fa6"
import toyota from '../../assets/projektToyota.jpg'

export default function FeaturesWork({ img, title, location }) {
    const [cardAnim, setCardAnim] = useState(false)

    return (
        <div className="font-display mt-12">
            <a href="#" className="relative group block w-120">
                <img
                    src={toyota}
                    alt="Toyota"
                    className="w-120 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>

                <div className="absolute uppercase inset-0 flex justify-center items-center text-amber-300 font-extrabold text-3xl transition-transform duration-300 hover:scale-118">
                    Salon Toyota
                </div>
            </a>
            <p className="text-lg flex items-center gap-2 mt-2">
                <FaMapLocation className="w-6" /> Katowice
            </p>
        </div>


    )
}