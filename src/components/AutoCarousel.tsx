// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// import { carouselData } from "@/utils/autocarousel";

// export default function AutoCarousel() {
//   return (
//     <div className="space-y-2">
//       {/* Row 1: more images per view */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         loop={true}
//         slidesPerView={5}
//         spaceBetween={5}
//       >
//         {carouselData.map((item, index) => (
//           <SwiperSlide key={`row1-${index}`} >
//             <div className="w-auto h-40 relative">
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Row 2: fewer images per view */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
//         loop={true}
//         slidesPerView={4}
//         spaceBetween={5}
//       >
//         {carouselData.map((item, index) => (
//           <SwiperSlide key={`row2-${index}`} >
//             <div className="w-auto h-40 relative">
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { carouselData } from "@/utils/autocarousel";

export default function AutoCarousel() {
  return (
    <div className="space-y-3">
      {/* 🟦 Row 1 — Always one more slide than Row 2 */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 3 },      // 👈 Mobile: 3 slides
          640: { slidesPerView: 4 },    // Tablet: 4
          1024: { slidesPerView: 6 },   // Desktop: 6
        }}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={`row1-${index}`}>
            <div className="relative h-[100px] sm:h-[140px] md:h-[160px] lg:h-[180px] w-auto">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🟩 Row 2 — Always one less slide than Row 1 */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 2 },      // 👈 Mobile: 2 slides
          640: { slidesPerView: 3 },    // Tablet: 3
          1024: { slidesPerView: 5 },   // Desktop: 5
        }}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={`row2-${index}`}>
            <div className="relative h-[100px] sm:h-[140px] md:h-[160px] lg:h-[180px] w-auto">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
