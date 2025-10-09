"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { carouselData } from "@/utils/autocarousel";

export default function AutoCarousel() {
  return (
    <div className="space-y-2">
      {/* Row 1: more images per view */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={5}
        spaceBetween={5}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={`row1-${index}`} >
            <div className="w-auto h-40 relative">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2: fewer images per view */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
        loop={true}
        slidesPerView={4}
        spaceBetween={5}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={`row2-${index}`} >
            <div className="w-auto h-40 relative">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
