import Image from "next/image";

import CodePolicies from "@/assets/CodeandPolicies.jpg";


import ScienceLab from "@/assets/ScienceLaboratory.jpg";
import ArtRoom from "@/assets/ArtRoom.jpg";
import Library from "@/assets/Library.jpg";
import ComputerLab from "@/assets/ComputerLab.jpg";
import Sickbay from "@/assets/SickBay.jpg";
import Playground from "@/assets/Playground.jpg";
import Generator from "@/assets/LandingImage.jpg";
import WhiteBoards from "@/assets/InteractiveWhiteBoards.jpg";
import FireSystem from "@/assets/LandingImage.jpg";
import AirConditioned from "@/assets/AirConditionedRooms.jpg";
import SchoolHall from "@/assets/SchoolHall.jpg";


const eventSections = [
  {
    title: "Inter-House Sport",
    images: [ScienceLab, AirConditioned, Library, CodePolicies],
  },
  {
    title: "Cultural Day",
    images: [WhiteBoards, ArtRoom, Sickbay],
  },
  {
    title: "Christmas Carol",
    images: [SchoolHall, Generator, Sickbay],
  },
  {
    title: "All Best Stars",
    images: [FireSystem, ComputerLab, Generator],
  },
];

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
            We understand just how important it is for parents to choose the
            right school for their child. The process outlined below is typical
            but can be adapted to ensure that you and your child are supported
            every step of the way.{" "}
          </p>
        </div>
      </section>

     


    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {eventSections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            {/* Section Title */}
            <h2 className="text-center text-xl md:text-2xl font-semibold text-blue-950">
              {section.title}
            </h2>

            {/* FLEX wrap (centered rows) */}
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
