import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import ReadMoreCard from "@/components/ReadMoreCard";
import AutoCarousel from "@/components/AutoCarousel";
import FeaturedNewsCard from "@/components/FeaturedNewsCard";

import LandingImage from "@/assets/LandingImage.jpg";
import Child1 from "@/assets/Child1.jpg";
import Child2 from "@/assets/Child2.jpg";
import Child3 from "@/assets/Child3.jpg";

import BrightFuture1 from "@/assets/BrightFuture1.jpg";
import BrightFuture2 from "@/assets/BrightFuture2.jpg";
import BrightFuture3 from "@/assets/BrightFuture3.jpg";
import Imagery1 from "@/assets/Imagery1.png";
import Imagery2 from "@/assets/Imagery2.png";
import Imagery3 from "@/assets/Imagery3.png";
import Imagery4 from "@/assets/Imagery4.png";
import BlueGrids from "@/assets/BlueGrids.png";

import governanceJson from "@/utils/governance.json";

export const metadata:Metadata = {
  title: "Home – Living Soul Schools",
  description: "Learn about our mission, vision, and academic excellence.",
    openGraph: {
    title: "Living Soul Schools | Home",
    description: "A modern school in Lagos with quality education.",
    url: "https://livingsoulschools.com",
    type: "website",
  
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
     
      <section
        className="relative min-h-[55vh] sm:min-h-[75vh] md:min-h-[90vh] flex items-center overflow-hidden"
        id="hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-[center_top_20%] sm:bg-center md:bg-top transition-all duration-500 scale-110 md:scale-100"
          style={{ backgroundImage: `url(${LandingImage.src})` }}
        />

        <div className="absolute inset-0 bg-black/70 z-[1]" />

        <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-[10vh] md:py-[15vh] text-white">
         
          <div className="flex flex-col justify-center gap-5 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Inspiring Excellence <br /> Nurturing Leaders
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-lg">
              Welcome to Living Soul Schools, where we combine academic
              excellence with character development to prepare our students for
              a bright future.
            </p>

<div className="flex flex-wrap gap-3">
  <Link href="/academics">
    <Button className="text-white bg-blue-950 px-6 sm:px-8 hover:text-black">
      Enroll
    </Button>
  </Link>

  <Link href="/our-history">
    <Button
      className="text-white bg-transparent border-white hover:text-black"
      variant="outline"
    >
      Learn More
    </Button>
  </Link>
</div>
          </div>

         
          <div className="relative w-[260px] sm:w-[300px] h-[360px] sm:h-[400px] mx-auto my-auto hidden md:block">
            <Image
              src={Child3}
              alt="Top Image"
              className="absolute left-0 w-full h-full object-cover rounded-xl shadow-lg z-30 border-2 border-white"
            />
            <Image
              src={Child2}
              alt="Second Image"
              className="absolute top-[5%] left-14 w-[90%] h-[90%] object-cover rounded-xl brightness-50 z-20" 
            />
            <Image
              src={Child1}
              alt="Third Image"
              className="absolute top-[12%] left-28 w-[80%] h-[75%] object-cover rounded-xl brightness-50 z-10"
               priority              
              fetchPriority="high" 
            />
          </div>
        </div>
      </section>

 
 
<section className="relative py-16 bg-blue-950 text-white text-center overflow-hidden">


  <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center">
    
    <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
      “Education is the most powerful tool for shaping tomorrow’s leaders.”
    </h2>

    <p className="text-base sm:text-lg text-gray-200 mb-4">
      At Living Souls Schools, we don’t just teach — we inspire excellence, character, and purpose in our students.
    </p>

  
    <div className="mt-10 w-full flex flex-col items-center md:items-end">
      <p className="text-sm sm:text-base text-gray-100 font-semibold">
        — Mrs. Olubola Egunbiyi
      </p>
      <p className="text-xs sm:text-sm text-gray-300 italic">
        Cofounder, Living Souls Schools
      </p>
    </div>

  </div>
</section>




<section
  className="
    pt-16 px-6 sm:px-10 lg:px-24 bg-white 
    flex flex-col md:flex-row md:items-center md:justify-center gap-10
  "
  id="yourpath"
>

  <div className="flex flex-col text-left gap-y-4 w-full md:w-1/2 items-start">
    <div className="flex items-end">
      <Image
        src={Imagery1.src}
        alt="Icon"
        width={80}
        height={100}
        className="mr-2"
      />
      <h1 className="text-black text-4xl sm:text-5xl font-bold leading-none">
        Your path to a
      </h1>
    </div>
    <h1 className="text-blue-950 text-4xl sm:text-5xl font-bold leading-none">
      Bright Future!
    </h1>
  </div>


  <div
    className="
      flex flex-col sm:flex-row gap-5 
      w-full md:w-1/2 justify-center md:justify-between 
      items-center md:items-stretch
    "
  >
 
  

    <Card
      imageSrc={BrightFuture1.src}
      description="Amazing Facilities"
      textColor="text-blue-950"
      
    />

    <Card
      imageSrc={BrightFuture2.src}
      description="Academic Guides"
      textColor="text-blue-600"
     
    />
   
    <Card
      imageSrc={BrightFuture3.src}
      description="Nuturing Environment"
      textColor="text-green-500"
      
    />
   
  </div>
</section>






<section
  className="pt-32 px-6 sm:px-12 md:px-24 bg-white"
  id="qualityexcellence"
>
  <div className="flex flex-col-reverse md:flex-row gap-8">
 
    <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
      <p className="mb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
        We are passionately devoted to the progress of humanity, achieved
        through high-quality education, dedicated service, and unwavering
        commitment. Our primary focus lies in illuminating the path
        forward, while nourishing our endeavors with love. In this era of
        heightened awareness, we firmly believe that a comprehensive
        education holds the key to overcoming life&apos;s myriad
        challenges. With the radiance of our knowledge and the warmth of
        our compassion, we aspire to attain nothing less than the very
        best.
      </p>

      <Link href="/aboutus">
  <Button className="w-fit text-white bg-blue-950 px-8 py-3 hover:text-black">
    More About Us
  </Button>
</Link>
    </div>

  
    <div className="w-full md:w-1/2 flex items-center md:justify-center justify-start">
      <div className="flex flex-col text-left gap-y-4">
        <div className="flex items-end">
          <h1 className="text-black text-5xl md:text-6xl font-bold leading-none">
            Quality
          </h1>
          <Image
            src={Imagery2.src}
            alt="Icon"
            width={120}
            height={160}
            className="ml-2"
          />
        </div>
        <h1 className="text-blue-950 text-5xl md:text-6xl font-bold leading-none">
          Excellence
        </h1>
      </div>
    </div>
  </div>
</section>


    
      <section
        className="py-20 px-6 sm:px-12 md:px-24 bg-white"
        id="storyandgoverance"
      >
        <div className="mb-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center">
            <h1 className="text-3xl sm:text-4xl font-bold leading-none">
              Our Story & <span className="text-blue-950">Governance</span>
            </h1>
            <Image
              src={Imagery3.src}
              alt="Icon"
              width={80}
              height={60}
              className="ml-2"
            />
          </div>
          <p className="text-gray-700 text-sm sm:text-base mt-2">
            Discover our story, vision, and the people who guide our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {governanceJson.map((card, index) => (
            <ReadMoreCard
              key={index}
              id={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>


      <section
        className="relative px-6 sm:px-12 md:px-24 bg-cover bg-center text-white py-20 md:py-28"
        style={{ backgroundImage: `url(${BlueGrids.src})` }}
        id="bluegrids"
      >
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Our Numbers Speak For Us
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: "8+", text: "YEARS OF EXCELLENCE" },
              { num: "25+", text: "ADVANCED DEGREE TUTORS" },
              { num: "90+", text: "ACCREDITATIONS" },
              { num: "200+", text: "ALUMNI" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-semibold text-5xl sm:text-6xl mb-2">
                  {item.num}
                </h3>
                <p className="text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-8 bg-white">
        <AutoCarousel />
      </section>

   

      <section className="py-16 px-6 sm:px-12 md:px-24 bg-white">
  <div className="flex flex-col items-start text-left mb-4">
    <div className="flex items-center">
      <Image
        src={Imagery4.src}
        alt="Icon"
        width={80}
        height={60}
        className="mr-2"
      />
      <h1 className="text-3xl sm:text-4xl font-bold">
        Featured <span className="text-blue-950">News</span>
      </h1>
    </div>
  </div>

  <p className="text-gray-800 text-sm sm:text-base mb-6 text-left">
Living Souls Schools provides a world-class learning environment that nurtures creativity, confidence, and excellence across all levels.
  </p>

  <FeaturedNewsCard />
</section>



    </div>
  );
}
