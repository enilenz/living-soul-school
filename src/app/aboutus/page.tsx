"use client";
import Image from "next/image";

import Darasimi from "@/assets/Darasimi.png";
import Playground from "@/assets/Playground.jpg";

import Cretche1 from "@/assets/Cretche1.jpg";
import Cretche2 from "@/assets/Cretche2.jpg";
import Cretche3 from "@/assets/Cretche3.jpg";
import Cretche4 from "@/assets/Cretche4.jpg";

import Imagery5 from "@/assets/Imagery5.png";

export default function Home() {
  return (
    <div className="">
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${Playground.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Centered Content */}
        <div className="relative z-10 text-white w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-32 items-center" id="dandi">
            {/* Left text */}
            <div className="flex flex-col gap-6 text-left col-span-2 justify-center">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Living Soul Schools
              </h1>

              <p>
                Edidot Schools is an organization with the dedication, expertise
                and resources to make a difference through education. We are
                committed to giving adequate attention to moral education,
                spiritual value, social and a sound academic life.
              </p>

              <p className="text-md">
                Our academic system is well-structured, comprehensive and
                dynamic featuring world-class curricula, efficient instructional
                methods, cutting-edge technological tools and an empowering
                student life organization. All of which prepare students for
                success in life. We believe in personalized education for every
                child, and we adopt a blend of Nigerian, American and British
                curriculum to help us achieve this.
              </p>
            </div>

            {/* Right image */}
            <div className="relative w-[260px] max-w-sm flex flex-col text-center justify-center">
              <div className="relative w-full aspect-[3/3.2] max-h-[320px]">
                <Image
                  src={Darasimi}
                  alt="Mr. Darasimi Thomas"
                  fill
                  className="object-cover rounded-xl shadow-lg z-30"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-white">
                Mr. Darasimi Thomas
              </p>
            </div>
          </div>

          {/* Bottom paragraph block */}
          <div className="mt-10 text-left">
            <p>
              We place an importance on technology which has kept us at the
              forefront of education. These technological tools aid student
              learning and enhance teachers productivity by compiling
              information on every aspect of Edidot school life, including
              attendance, discipline, examination and grades among others.
            </p>

            <p className="mt-4">
              We provide a solid foundation to enable our students to reach
              their full potential and make a difference in the world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-28 px-24 text-black">
        <div className=" grid grid-cols-3 items-center">
          {/* Left text */}
          <div className="col-span-2 text-left ">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Creche
            </h2>
            <p>
              We are passionately devoted to the progress of humanity, achieved
              through high quality education, dedicated service, and
              uncompromising commitment.
            </p>
            <p className="">
              Our primary focus lies in illuminating the path forward, while
              nourishing our endeavors with love. In this era of heightened
              awareness, we firmly believe that a comprehensive education holds
              the key to overcoming life&apos;s myriad challenges. With the
              radiance of our knowledge and the warmth of our compassion, we
              aspire to attain nothing less than the very best.
            </p>
          </div>

          {/* Right visuals */}
          <div className="relative flex justify-center items-center">
            
            <div className="absolute w-[260px] h-[320px] rounded-xl bg-violet-300 shadow-md rotate-[8deg] -translate-y-2 translate-x-7" />

            
            <div className="relative w-[290px] h-[310px] rounded-xl overflow-hidden shadow-lg z-10">
              <Image
                src={Cretche1}
                alt="Creche Kids"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  pt-8  px-24 text-black">
        <div className=" grid grid-cols-3 items-center gap-10">
          {/* Right visuals */}
          <div className="relative flex justify-center items-center order-1 ">
            {/* Bottom colored div */}
            <div className="absolute w-[260px] h-[305px] rounded-xl bg-violet-300 shadow-md rotate-[-8deg] -translate-y-4 -translate-x-7" />

            {/* Top image */}
            <div className="relative w-[290px] h-[310px] rounded-xl overflow-hidden shadow-lg z-10">
              <Image
                src={Cretche2}
                alt="Creche Kids"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left text */}
          <div className="col-span-2 text-left order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Primary School
            </h2>
            <p>
              We are passionately devoted to the progress of humanity, achieved
              through high quality education, dedicated service, and
              uncompromising commitment.
            </p>
            <p className="">
              Our primary focus lies in illuminating the path forward, while
              nourishing our endeavors with love. In this era of heightened
              awareness, we firmly believe that a comprehensive education holds
              the key to overcoming life&apos;s myriad challenges. With the
              radiance of our knowledge and the warmth of our compassion, we
              aspire to attain nothing less than the very best.
            </p>
          </div>
        </div>
      </section>

<section className="bg-white px-24 pb-24 text-black">
  <div className="flex flex-row justify-between">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 pt-24">
        Living Soul College
      </h2>

      <div className="flex flex-row items-end gap-4">
        {/* Left stacked image */}
        <div className="relative flex justify-center items-center">
          {/* Bottom colored div */}
          <div className="absolute w-[200px] h-[250px] rounded-xl bg-violet-300 shadow-md rotate-[8deg] -translate-y-3 translate-x-7" />

          {/* Top image */}
          <div className="relative w-[220px] h-[250px] rounded-xl overflow-hidden shadow-lg z-10">
            <Image
              src={Cretche3}
              alt="Creche Kids"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right image (aligned to bottom) */}
        <div className="relative w-[220px] h-[125px] rounded-xl overflow-hidden shadow-lg z-10">
          <Image
            src={Cretche4}
            alt="Creche Kids"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>

    <div className="relative w-[320px] h-[310px] overflow-hidden z-10">
      <Image
        src={Imagery5}
        alt="Creche Kids"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Full-width paragraph below everything */}
  <p className="mt-12 max-w-7xl mx-auto text-left leading-relaxed">
We are passionately devoted to the progress of humanity, achieved through high-quality education, dedicated service, and unwavering commitment.
Our primary focus lies in illuminating the path forward, while nourishing our endeavors with love. In this era of heightened awareness, we firmly believe that a comprehensive education holds the key to overcoming life&apos;s myriad challenges. With the radiance of our knowledge and the warmth of our compassion, we aspire to attain nothing less than the very best.

  </p>
</section>

    </div>
  );
}
