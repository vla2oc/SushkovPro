import './Hero.css'
import Button from './Layout/Button'
import FeaturesWork from './Layout/FeaturesWork'
export default function Hero() {
    return (
        <>
            <div className='font-display '>
                <h1 className='text-7xl text-amber-400 flex justify-center align-top mt-15'>Nasze Realizacje</h1>
            </div>
            <div className='flex gap-50 justify-center'>
                <FeaturesWork />
                <FeaturesWork />
            </div>
            <div className='flex justify-center mt-5 items-center'>
                <Button />
            </div>
        </>
    )
}