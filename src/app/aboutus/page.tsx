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
<section
  className="relative flex items-center justify-center overflow-hidden min-h-[80vh] sm:min-h-[90vh] md:min-h-screen pt-16 sm:pt-4 md:pt-12"
  id="hero"
>
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-bottom"
    style={{ backgroundImage: `url(${Playground.src})` }}
  />
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative z-10 text-white w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20">
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-32 items-center"
      id="dandi"
    >
      {/* Left Section (text + image on mobile) */}
      <div className="flex flex-col gap-5 text-left justify-center col-span-2">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-center md:text-left">
          Living Soul Schools
        </h1>

        {/* Image (on mobile: above & left-aligned with text) */}
        <div className="md:hidden flex flex-col items-start justify-center gap-2">
          <div className="relative w-[160px] sm:w-[200px] aspect-[3/3.2] max-h-[280px]">
            <Image
              src={Darasimi}
              alt="Mr. Darasimi Thomas"
              fill
              className="object-cover rounded-xl shadow-lg z-30"
            />
          </div>
          <p className="mt-1 text-sm sm:text-base font-medium text-left">
            Mr. Darasimi Thomas
          </p>
        </div>

        {/* Paragraphs */}
        <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed">
          Edidot Schools is an organization with the dedication, expertise and
          resources to make a difference through education. We are committed to
          giving adequate attention to moral education, spiritual value, social
          and a sound academic life.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed">
          Our academic system is well-structured, comprehensive and dynamic
          featuring world-class curricula, efficient instructional methods,
          cutting-edge technological tools and an empowering student life
          organization. All of which prepare students for success in life. We
          believe in personalized education for every child, and we adopt a
          blend of Nigerian, American and British curriculum to help us achieve
          this.
        </p>
      </div>

      {/* Right image (visible only on desktop) */}
      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="relative w-[260px] aspect-[3/3.2] max-h-[320px]">
          <Image
            src={Darasimi}
            alt="Mr. Darasimi Thomas"
            fill
            className="object-cover rounded-xl shadow-lg z-30"
          />
        </div>
        <p className="mt-3 text-lg font-medium text-center">
          Mr. Darasimi Thomas
        </p>
      </div>
    </div>

    {/* Bottom paragraph block */}
    <div className="mt-8 sm:mt-10 text-left">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        We place an importance on technology which has kept us at the forefront
        of education. These technological tools aid student learning and enhance
        teachers productivity by compiling information on every aspect of Edidot
        school life, including attendance, discipline, examination and grades
        among others.
      </p>

      <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
        We provide a solid foundation to enable our students to reach their full
        potential and make a difference in the world.
      </p>
    </div>
  </div>
</section>



<section
  className="bg-white py-16 sm:py-20 md:py-28 px-6 sm:px-12 md:px-24 text-black"
  id="creche"
>
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-16">
    {/* Image & background — top on mobile */}
    <div className="relative flex justify-center items-center order-1 md:order-2">
      {/* Purple background */}
      <div
        className="absolute rounded-xl bg-violet-300 shadow-md rotate-[8deg] -translate-y-3 translate-x-5
        w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] md:w-[260px] md:h-[320px]"
      />

      {/* Foreground image */}
      <div
        className="relative rounded-xl overflow-hidden shadow-lg z-10
        w-[300px] h-[340px] sm:w-[340px] sm:h-[380px] md:w-[290px] md:h-[310px]"
      >
        <Image
          src={Cretche1}
          alt="Creche Kids"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Text content */}
    <div className="col-span-2 text-left order-2 md:order-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
        Creche
      </h2>
      <p className="text-sm sm:text-base leading-relaxed mb-3">
        We are passionately devoted to the progress of humanity, achieved
        through high quality education, dedicated service, and uncompromising
        commitment.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
        Our primary focus lies in illuminating the path forward, while nourishing
        our endeavors with love. In this era of heightened awareness, we firmly
        believe that a comprehensive education holds the key to overcoming
        life&apos;s myriad challenges. With the radiance of our knowledge and the
        warmth of our compassion, we aspire to attain nothing less than the very
        best.
      </p>
    </div>
  </div>
</section>




<section
  className="bg-white px-6 sm:px-12 md:px-24 pb-16 md:pb-24 text-black"
  id="college"
>
  <div className="flex flex-col md:flex-row justify-between items-start md:items-start">
    {/* Left block: heading + stacked images */}
    <div className="w-full md:w-auto flex flex-col items-start">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 md:mb-12 pt-12 md:pt-24 text-left w-full">
        Living Soul College
      </h2>

      {/* Imagery5 — only visible on mobile, smaller & aligned right */}
      <div className="relative overflow-hidden z-10 mb-1 md:hidden ml-auto w-[120px] h-[100px] sm:w-[150px] sm:h-[130px]">
        <Image
          src={Imagery5}
          alt="Creche Kids"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Image group (Cretche3 + Cretche4) */}
      <div className="flex flex-row items-end gap-2 sm:gap-3 md:gap-4 self-start -mt-2 sm:-mt-28 md:mt-0">
        {/* Left stacked image */}
        <div className="relative flex justify-center items-end">
          {/* Bottom violet div */}
          <div
            className="absolute rounded-xl bg-violet-300 shadow-md rotate-[8deg] translate-x-3
            w-[120px] h-[140px] sm:w-[150px] sm:h-[180px] md:w-[200px] md:h-[250px]"
          />
          {/* Top image */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg z-10
            w-[130px] h-[140px] sm:w-[170px] sm:h-[200px] md:w-[220px] md:h-[250px]"
          >
            <Image
              src={Cretche3}
              alt="Creche Kids"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right image — same baseline */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg z-10
          w-[130px] h-[70px] sm:w-[170px] sm:h-[95px] md:w-[220px] md:h-[125px]"
        >
          <Image
            src={Cretche4}
            alt="Creche Kids"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>

    {/* Imagery5 — only visible on large screens */}
    <div
      className="relative overflow-hidden z-10 mt-10 md:mt-0
      w-[220px] h-[200px] sm:w-[260px] sm:h-[240px] md:w-[320px] md:h-[310px]
      hidden md:block"
    >
      <Image
        src={Imagery5}
        alt="Creche Kids"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  </div>

  {/* Paragraph text below */}
  <p
    className="mt-8 md:mt-12 max-w-7xl mx-auto text-left leading-relaxed
    text-sm sm:text-base px-2 sm:px-0"
  >
    We are passionately devoted to the progress of humanity, achieved through
    high-quality education, dedicated service, and unwavering commitment. Our
    primary focus lies in illuminating the path forward, while nourishing our
    endeavors with love. In this era of heightened awareness, we firmly believe
    that a comprehensive education holds the key to overcoming life&apos;s
    myriad challenges. With the radiance of our knowledge and the warmth of our
    compassion, we aspire to attain nothing less than the very best.
  </p>
</section>








    </div>
  );
}
