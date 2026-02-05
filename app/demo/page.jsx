"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {
    return (
        <div className="w-full max-w-4xl mx-auto py-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // যে মডিউলগুলো ব্যবহার করতে চান
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="mySwiper h-64 bg-gray-100 rounded-lg"
            >
                <SwiperSlide className="flex items-center justify-center text-2xl">Slide 1</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl">Slide 2</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl">Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
}