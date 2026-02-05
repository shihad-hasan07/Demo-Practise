'use client'

// npm install swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiper_SLider = () => {
    return (
        <div className="w-full max-w-4xl mx-auto py-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="mySwiper h-64 bg-gray-100 rounded-lg"
            >
                <SwiperSlide className="relative flex items-center justify-center bg-blue-500 text-white">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold">প্রথম স্লাইড</h2>
                        <p className="text-lg">এখানে আপনি আপনার মনের মতো বর্ণনা লিখতে পারেন।</p>
                        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold">
                            আরো জানুন
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl">Slide 2</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl">Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Swiper_SLider;