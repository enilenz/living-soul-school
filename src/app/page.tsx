import Image from "next/image";

import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

import LandingImage from "@/assets/LandingImage.jpg";
import Child1 from "@/assets/Child1.jpg";
import Child2 from "@/assets/Child2.jpg";
import Child3 from "@/assets/Child3.jpg";

import VideoPlayer from "@/assets/Video Player.png";

import BrightFuture1 from "@/assets/BrightFuture1.jpg";
import BrightFuture2 from "@/assets/BrightFuture2.jpg";
import BrightFuture3 from "@/assets/BrightFuture3.jpg";

import Imagery1 from "@/assets/Imagery1.png";
import Imagery2 from "@/assets/Imagery2.png";
import Imagery3 from "@/assets/Imagery3.png";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen xl:h-[10%] flex ">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${LandingImage.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto  relative z-10 px-8 md:px-16 py-[25vh] text-white">
          {/* Left Side */}
          <div className="flex flex-col justify-center gap-6 text-left h-full">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Inspiring Excellence Nurturing Leaders
            </h1>
            <p className="text-md font-['Product_Sans']">
              Welcome to Living Soul Schools, where we combine academic
              excellence with character development to prepare our students for
              a bright future.
            </p>

            <div className="flex flex-row gap-3">
              <Button className="text-white bg-blue-950 px-13 hover:text-black">
                Enroll
              </Button>
              <Button
                className="text-white bg-transparent px-8"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative w-[300px] h-[400px] mx-auto my-auto hidden md:block">
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
            />
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center pt-16">
        <Image src={VideoPlayer} alt="Video Player" className="" />
      </section>

      <section className="pt-16 px-8 bg-white flex flex-row justify-center items-center gap-12">
        {/* Left Side */}
        <div
          className="flex flex-col items-start text-left justify-start gap-y-6"
          id="other"
        >
          <div className="flex items-end ">
            <Image
              src={Imagery1.src}
              alt="Icon"
              width={100}
              height={120}
              className="align-text-bottom inline-block"
            />
            <h1 className="text-black text-5xl font-bold leading-none">
              Your path to a
            </h1>
          </div>

          <h1 className="text-blue-950 text-5xl font-bold leading-none">
            Bright Future!
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex flex-row gap-5" id="cards">
          <Card
            imageSrc={BrightFuture1.src}
            description="Schedule A Visit"
            textColor="text-blue-950"
          />
          <Card
            imageSrc={BrightFuture2.src}
            description="Academic Guide"
            textColor="text-blue-600"
          />
          <Card
            imageSrc={BrightFuture3.src}
            description="Apply Today!"
            textColor="text-green-500"
          />
        </div>
      </section>

      <section className="pt-48 px-24 bg-white">
        <div className="flex flex-col md:flex-row ">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center ml-6">
            <p className="mb-6 text-sm">
              We are passionately devoted to the progress of humanity, achieved
              through high-quality <br /> education, dedicated service, and
              unwavering commitment. <br />
              Our primary focus lies in illuminating the path forward, while
              nourishing our endeavors with love. In this era of heightened
              awareness, we firmly believe that a comprehensive <br /> education
              holds the key to overcoming life&apos;s myriad challenges. With
              the radiance of our <br /> knowledge and the warmth of our
              compassion, we aspire to attain nothing less than the <br /> very
              best.
            </p>
            <Button className="w-auto self-start text-white bg-blue-950 px-8 py-3 hover:text-black">
              Download E-Brochure
            </Button>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex items-center justify-center mr-6">
            <div
              className="flex flex-col items-start text-left justify-start gap-y-6"
              id="other"
            >
              <div className="flex items-end">
                <h1 className="text-black text-6xl font-bold leading-none">
                  Quality
                </h1>
                <Image
                  src={Imagery2.src}
                  alt="Icon"
                  width={140}
                  height={160}
                  className="align-text-bottom inline-block"
                />
              </div>

              <h1 className="text-blue-950 text-6xl font-bold leading-none self-end">
                Excellence
              </h1>
            </div>
          </div>
        </div>



      </section >



      <section className="py-32 px-24 bg-white">
       <div className="">
           <div className="flex items-center">
                <h1 className="text-black text-3xl font-bold leading-none">
                  Our Story & Goverance
                </h1>
                <Image
                  src={Imagery3.src}
                  alt="Icon"
                  width={100}
                  height={80}
                  className=" inline-block"
                />
              </div>
       <p className="text-gray-800 text-sm">Discover our story, vision, and the people who guide our journey.</p>
       </div>

      <div className=""></div>
      </section>

      <section className="py-16 px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">About Us</h2>
          <p className="mt-6 text-gray-700 leading-relaxed text-center">
            A brief description about your mission, values, or programs.
          </p>
        </div>
      </section>
    </div>
  );
}
