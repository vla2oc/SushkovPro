import Button from "./Button";

export default function WorkTogether() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-20 md:h-100 font-display">
                <div className="border-2 flex flex-col border-amber-200 justify-center items-center md:p-10 p-5 rounded-2xl shadow-2xl shadow-amber-200">
                    <h1 className=" text-3xl md:text-6xl">Zbudujemy razem!</h1>
                    <p className=" md:text-2xl mt-10 mb-5">Masz pomysł lub projekt? My mamy doświadczenie, zgrany zespół i chęć do działania. Skontaktuj się z nami, a wspólnie stworzymy coś solidnego i trwałego.</p>
                    <Button title="Zadzwoń" />
                </div>
            </div>


        </>
    )
}