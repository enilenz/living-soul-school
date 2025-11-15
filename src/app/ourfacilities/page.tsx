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
import Bed from "@/assets/Bed.png";

const facilities = [
  { image: ScienceLab, title: "Science Laboratory" },
  { image: ArtRoom, title: "Art Room" },
  { image: Library, title: "Library" },
  { image: ComputerLab, title: "Computer Lab" },
  { image: Bed, title: "Sickbay" },
  { image: Playground, title: "Playground" },
  
  // { image: Generator, title: "Generator" },
  { image: WhiteBoards, title: "Interactive White Boards" },
  // { image: FireSystem, title: "Fire Alarm System and Extinguishers" },
  { image: AirConditioned, title: "Well Ventilated Classrooms" },
  //{ image: SchoolHall, title: "School Hall" },
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
            Our Facilities
          </h1>

          <p>
           Our facilities are designed to inspire learning, creativity, and comfort at every stage of a child’s development. Each space blends safety, innovation, and functionality to support exceptional academic and personal growth.
          </p>
        </div>
      </section>




<section
  id="facilities"
  className="scroll-mt-24 py-12 px-6 md:px-24 bg-white"
>
  {/* Section Header */}
  <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
    Our School Facilities
  </h2>

  {/* Body Text */}
  <div className="space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">
    <p>
      Living Souls Schools is equipped with modern, safe, and child-friendly facilities designed to
      support effective learning across all levels: Nursery, Primary, and Secondary.
    </p>

    <p>
      Our <span className="font-semibold">Nursery Section</span> offers a warm, stimulating
      environment with colorful classrooms, age-appropriate learning materials, and creative play
      zones that encourage early discovery and development.
    </p>

    <p>
      The <span className="font-semibold">Primary Section</span> features well-structured classrooms,
      digital learning aids, and resource centers that build strong academic foundations while
      fostering curiosity, discipline, and teamwork.
    </p>

    <p>
      Our <span className="font-semibold">Secondary Section</span> provides advanced learning spaces,
      well-equipped science and computer laboratories, a modern library, art and music studios, and
      sports facilities, preparing students for higher education and real-world challenges.
    </p>

    <p>
      Across all sections, we maintain high standards of cleanliness, safety, and technology
      integration, ensuring a conducive atmosphere for excellence, innovation, and growth.
    </p>
  </div>
</section>







          <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
  

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, idx) => (
            <div key={idx} className="relative group rounded-lg overflow-hidden shadow-md">
              {/* Image */}
              <div className="w-full h-[240px] md:h-[300px] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Overlay caption */}
              <div className="absolute bottom-0 w-full bg-black/60 text-white py-2 text-center text-sm md:text-base">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     
   
    </div>
  );
}
