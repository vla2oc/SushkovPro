import { useForm } from 'react-hook-form';
import bgtoyota from '../assets/bgtoyota.jpg'


export default function Kontakt() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <section style={{ backgroundImage: `url(${bgtoyota})`, backgroundPosition: 'center 140%' }}
                className='relative h-50 bg-cover bg-center bg-fixed flex items-end justify-center '

            >
                <div id='dark-overlay' className='absolute inset-0 bg-black opacity-70  transition-opacity duration-100 z-0'></div>
            </section>
            <h1 className="text-6xl font-display font-bold text-amber-400 flex justify-center mt-20">Formularz Kontaktowy</h1>
            <div className='flex justify-center p-20'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10 border-2 justify-center'>
                    <input {...register('name')} placeholder='Wpisz imię' />
                    <input {...register('phone')} type='number' placeholder='Wpisz numer telefonu' />
                    <input {...register('email')} type='email' placeholder='Wpisz e-mail' />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}