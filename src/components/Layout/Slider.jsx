import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'


export default function Slider({ slides }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className=' w-full h-[250px] md:w-[900px] md:h-[600px]'
            autoplay={{ delay: 2000, disableOnInteraction: false, }}
            speed={1200}
            loop={true}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}><img src={slide.image} alt="" className="w-full h-full object-cover" /></SwiperSlide>
            ))}

        </Swiper>
    )
}