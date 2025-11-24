import Image from "next/image";
import type { Metadata } from "next";

import Playground from "@/assets/Playground.jpg";

import AwardGiving from "@/assets/AwardGiving.jpeg";

import AutoCarousel8 from "@/assets/AutoCarousel8.jpeg";

import AutoCarousel11 from "@/assets/AutoCarousel11.jpeg";
import CareerDay1 from "@/assets/CareerDay1.png"
import CareerDay2 from "@/assets/CareerDay2.png"
import CareerDay3 from "@/assets/CareerDay3.png"
import Cultural1 from "@/assets/Cultural1.jpeg"
import Cultural2 from "@/assets/Cultural2.jpeg"
import Cultural3 from "@/assets/Cultural3.jpeg"
import Sport1 from "@/assets/Sport1.jpeg"
import Sport2 from "@/assets/Sport2.jpeg"
import Sport3 from "@/assets/Sport3.jpeg"
import Sport4 from "@/assets/Sport4.jpeg"

const eventSections = [
  {
    title: "Inter-House Sport",
    images: [Sport1, Sport2, Sport3, Sport4],
  },
  {
    title: "Cultural Day",
    images: [Cultural1, Cultural2, Cultural3],
  },
  {
    title: "Career Day",
    images: [CareerDay2, CareerDay3, CareerDay1],
  },
  {
    title: "Award Giving",
    images: [AwardGiving, AutoCarousel8, AutoCarousel11],
  },
];

export const metadata:Metadata = {
  title: "Our Gallery – Living Soul Schools",
  description: "Explore a visual journey through the life of our school.",
      openGraph: {
    title: "Living Soul Schools | Our Gallery",
    description: "A modern school in Lagos with quality education.",
    url: "https://livingsoulschools.com/ourgallery",
    type: "website",
  
  },
};

export default function Home() {
  return (
    <div className="">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0  bg-cover bg-top"
          style={{ backgroundImage: `url(${Playground.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
          <h1 className="text-5xl  font-bold leading-tight">
            Our Gallery
          </h1>

          <p>
Explore a visual journey through the life of our school. Each image captures the joy, learning, and memorable experiences that define our vibrant community.
          </p>
        </div>
      </section>

     


    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {eventSections.map((section, idx) => (
          <div key={idx} className="space-y-6">
     
            <h2 className="text-center text-xl md:text-2xl font-semibold text-blue-950">
              {section.title}
            </h2>

            
            <div className="flex flex-wrap justify-center gap-6">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="
                    relative 
                    w-[200px] h-[160px]        /* mobile */
                    sm:w-[220px] sm:h-[180px]  /* small tablet */
                    md:w-[260px] md:h-[220px]  /* desktop */
                    rounded-lg overflow-hidden shadow-md
                  "
                >
                  <Image
                    src={img}
                    alt={`${section.title} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
   
    </div>
  );
}
