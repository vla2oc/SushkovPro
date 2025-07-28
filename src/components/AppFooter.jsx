import SushkovPro from '../assets/OnlyLogo.png'
export default function AppFooter() {
    return (
        <div className="bg-amber-200 flex p-8 gap-10 justify-evenly flex-col md:flex-row ">
            <div className="">
                <h1 className="title-footer">Dane Kontaktowe</h1>
                <ul className="space-y-1">
                    <li>dasdasd</li>
                    <li>dasdasd</li>
                    <li>dasdasd</li>
                </ul>
            </div>
            <div className="">
                <h1 className="title-footer">Oferta</h1>
                <ul className="space-y-1">
                    <li>dasdasd</li>
                    <li>dasdasd</li>
                    <li>dasdasd</li>
                </ul>
            </div>
            <div className="col-span-3">
                <h1 className="title-footer">Social Media</h1>
                <ul>
                    <li>dasdasd</li>
                    <li>dasdasd</li>
                    <li>dasdasd</li>
                </ul>
            </div>
            {/* <img src={SushkovPro} alt="" className='w-70' /> */}
        </div>

    )
}