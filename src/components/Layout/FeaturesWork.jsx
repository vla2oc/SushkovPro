
import { FaMapLocation } from "react-icons/fa6"
import { Link } from "react-router-dom"


export default function FeaturesWork({ image, title, location, id }) {

    return (
        <div className="font-display mt-12  ">
            <Link to={`/realizacje/${id}`} className="relative group block w-80 md:w-120">
                <img
                    src={image}
                    alt="Toyota"
                    className="w-120 h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-70 md:opacity-40 group-hover:opacity-70 transition duration-300"></div>

                <div className="absolute uppercase  inset-0 flex justify-center items-center text-amber-300 font-extrabold text-3xl transition-transform duration-300 hover:scale-118">
                    {title}
                </div>
            </Link>
            <p className="text-lg flex items-center gap-2 mt-2">
                <FaMapLocation className="w-6" /> {location}
            </p>

        </div>


    )
}