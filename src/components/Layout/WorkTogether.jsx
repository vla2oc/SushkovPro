import Button from "./Button";

export default function WorkTogether() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-16 px-4 md:px-0 font-display">
                <div className="border-2 flex flex-col border-amber-200 justify-center items-center p-6 md:p-10 rounded-2xl shadow-2xl shadow-amber-200 max-w-7xl w-full mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-6xl text-center">
                        Zbudujemy razem!
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl mt-6 mb-8 text-center md:text-justify max-w-4xl">
                        Masz pomysł lub projekt? My mamy doświadczenie, zgrany zespół i chęć do działania.
                        Skontaktuj się z nami, a wspólnie stworzymy coś solidnego i trwałego.
                    </p>
                    <Button title="Zadzwoń" link="/kontakt" />
                </div>
            </div>


        </>
    )
}