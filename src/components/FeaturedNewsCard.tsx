"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // ✅ keep only base CSS
import "swiper/css/pagination";
import "swiper/css/autoplay";


import { featuredNewsData } from "@/utils/autocarousel";

export default function FeaturedNews() {
  return (
    <section className="w-full space-y-4">
      {/* Custom Nav Buttons */}
      <div className="flex justify-end gap-3  xl:hidden">
        <button className="swiper-button-prev flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button className="swiper-button-next flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

<Swiper
  modules={[Navigation]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  spaceBetween={20}
  loop={false}
  grabCursor={true}
  centeredSlides={false}
  breakpoints={{
    0: { slidesPerView: 1, spaceBetween: 16 }, // full-width on phones
    640: { slidesPerView: 2, spaceBetween: 20 }, // two cards on tablets
    1024: { slidesPerView: 3, spaceBetween: 24 }, // three on laptops
    1280: { slidesPerView: 4, spaceBetween: 30 }, // four on desktops
  }}
  className="!overflow-hidden"
>
  {featuredNewsData.map((item, i) => (
    <SwiperSlide key={i}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col mx-auto w-full max-w-sm mb-2">
        {/* Image */}
        <div className="relative w-full h-56 sm:h-60">
          <Image
            src={item.src}
            alt={item.alt || "Featured News"}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 justify-between">
          <p className="text-gray-700 text-sm mb-4">{item.news}</p>

<Link href={`/newsandevents#${item.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full mx-auto text-black px-6 py-2"
          >
            Read More
          </Button>
</Link>

        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </section>
  );
}
