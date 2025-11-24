"use client";
import Image from "next/image";
import { useState } from "react";


import Academics from "@/assets/Academics.jpg";
import Library from "@/assets/ArtRoom.jpg";


import Cretche1 from "@/assets/Cretche1.jpg";
import Cretche2 from "@/assets/Cretche2.jpg";

import Cretche4 from "@/assets/Cretche4.jpg";

import Imagery6 from "@/assets/Imagery6.png";

export default function Home() {
  // const [activeTab, setActiveTab] = useState("Creche");

  type TabType = "Cretche" | "Primary" | "Secondary";
  const tabs: TabType[] = ["Cretche", "Primary", "Secondary"];


const [activeTab, setActiveTab] = useState<TabType>("Cretche");

const schedules: Record<TabType, string[][]> = {
  Cretche: [
      ["07:50 - 08:15", "Assembly"],
      ["08:20 - 10:15", "Lessons"],
      ["10:15 - 10:25", "Short Break"],
      ["10:25 - 11:45", "Lessons"],
      ["11:45 - 12:15", "Long Break"],
      ["12:15 - 14:00", "Lessons"],
      ["14:00", "Closing Time"]
     
  ],
  Primary: [
      ["07:50 - 08:15", "Assembly"],
      ["08:20 - 10:15", "Lessons"],
      ["10:15 - 10:25", "Short Break"],
      ["10:25 - 11:45", "Lessons"],
      ["11:45 - 12:15", "Long Break"],
      ["12:15 - 15:00", "Lessons"],
      ["15:00", "Closing Time"]
  ],
  Secondary: [
      ["07:50 - 08:15", "Assembly"],
      ["08:20 - 10:15", "Lessons"],
      ["10:15 - 10:25", "Short Break"],
      ["10:25 - 11:45", "Lessons"],
      ["11:45 - 12:15", "Long Break"],
      ["12:15 - 15:00", "Lessons"],
      ["15:00", "Closing Time"]
  ]
};




  return (
    <div className=""> 

<section className="relative h-[60vh] flex items-center justify-center overflow-hidden "> 
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:`url(${Academics.src})` }} />
   <div className="absolute inset-0 bg-black/70" /> 
   <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4"> 
    <h1 className="text-5xl font-bold leading-tight"> Academics </h1> <p> At Living Soul Schools, we believe education goes beyond academics—it is about nurturing the whole child. From the Creche to Secondary School, we provide a seamless learning journey designed to develop intellectual ability, character, creativity, and confidence. Each stage is tailored to meet the needs of learners at their unique level, ensuring they grow into well-rounded individuals ready for a successful future. </p> 
</div> </section>



    <div className="bg-white text-black">
      {/* ========== CURRICULUM SECTION ========== */}
{/* ========== CURRICULUM SECTION ========== */}
<section className="px-8 md:px-24 py-20 space-y-16">
  {[
    {
      title: "Creche (Early Care & Development)",
      firstParagraph:
        "Our Creche provides a warm, safe, and fun-filled environment where infants and toddlers are cared for with love and attention.",
      content: [
        "Early stimulation through music, rhyme, and storytelling.",
        "Physical development through play and movement activities.",
        "Social and emotional growth by encouraging bonding, interaction, and a sense of security.",
      ],
      secondParagraph:
        "We recognize that a child’s first experiences shape their future, and so we ensure every little one is gently guided to explore, smile, and grow in confidence.",
      image: Cretche1,
      reverse: false,
    },
    {
      title: "Nursery (Foundation Stage)",
      firstParagraph:
        "Our Nursery program is the foundation of lifelong learning. Kids are encouraged to explore their environment through creative and structured play.",
      content: [
        "Literacy and numeracy introduced through rhymes, stories, and interactive games.",
        "Creative expression in music, art, and role play activities.",
        "Social development by fostering sharing, collaboration, and communication.",
      ],
      secondParagraph:
        "We nurture every child’s imagination, setting the stage for success in primary education.",
      image: Cretche2,
      reverse: true,
    },
    {
      title: "Primary School (Building Strong Foundations)",
      firstParagraph:
        "In Primary School, we provide a broad, balanced curriculum that equips children with both academic excellence and life skills. Our teaching blends Nigerian curriculum with modern methodologies, ensuring global competitiveness. Highlights include:",
      content: [
        "Core subjects: English, Mathematics, Science, and Social Studies.",
        "ICT and digital literacy introduced early.",
        "Creative Arts, Music, and Physical Education for well-rounded development.",
        "Strong emphasis on moral values, discipline, and personal responsibility.",
      ],
      secondParagraph:
        "By the end of Primary School, our learners are confident, articulate, and prepared for the challenges of higher learning.",
      image: Library,
      reverse: false,
    },
    {
      title: "Secondary School (Preparing for the Future)",
      firstParagraph:
        "Our Secondary section focuses on academic depth, critical thinking, and personal development. With dedicated teachers and modern facilities, we guide students to excel in national and international examinations while preparing them for leadership in society. Key features:",
      content: [
        "Advanced curriculum in Science, Arts, and Humanities.",
        "Practical, project-based learning and use of technology in classrooms.",
        "Career guidance and counseling for higher education readiness.",
        "Clubs, societies, and extracurriculars to broaden interests and talents.",
        "Character education that emphasizes discipline, resilience, and integrity.",
      ],
      secondParagraph:
        "We aim to graduate students who are not only academically sound but also socially responsible, innovative, and globally competitive.",
      image: Cretche4,
      reverse: true,
    },
  ].map(
    (
      { title, firstParagraph, content, secondParagraph, image, reverse },
      idx
    ) => (
<div
  key={idx}
  className={`flex flex-col md:flex-row ${
    reverse ? "md:flex-row-reverse" : ""
  } items-center gap-8 md:gap-16`}
>
  {/* Image */}
  <div className="relative flex justify-center items-center">
    {/* Purple background div */}
    <div
      className={`absolute 
        w-[180px] h-[170px] sm:w-[230px] sm:h-[210px] md:w-[260px] md:h-[320px]
        rounded-xl bg-violet-300 shadow-md
        ${
          reverse
            ? "rotate-[-8deg] -translate-y-1 -translate-x-4 sm:-translate-x-6"
            : "rotate-[8deg] -translate-y-1 translate-x-4 sm:translate-x-6"
        }`}
    />

    {/* Foreground image */}
    <div
      className="
        relative 
        w-[180px] h-[170px] sm:w-[230px] sm:h-[210px] md:w-[290px] md:h-[310px]
        flex-shrink-0 z-10
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-xl shadow-md"
      />
    </div>
  </div>

  {/* Text */}
  <div className="space-y-3 md:space-y-4 text-left">
    <h3 className="font-bold text-xl md:text-2xl text-blue-950">
      {title}
    </h3>

    <p className="text-sm md:text-base leading-relaxed">
      {firstParagraph}
    </p>

    <ul className="list-disc list-inside space-y-4 marker:text-gray-600 text-sm md:text-base">
      {content.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>

    <p className="text-sm md:text-base leading-relaxed">
      {secondParagraph}
    </p>
  </div>
</div>



    )
  )}
</section>



      {/* ========== SCHOOL DAY SCHEDULE SECTION ========== */}
      <section className="px-8 md:px-24 pb-24">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-950">
            Why Parents Choose Living Soul Schools
          </h2>
          <ul className="list-disc list-inside space-y-6 marker:text-gray-500 text-sm md:text-base ">
            <li>
              A nurturing environment that fosters values through collaboration.
            </li>
            <li>Qualified and passionate teachers who care deeply about students.</li>
            <li>
              Balanced learning that develops academic, creative, sports, and moral
              instruction.
            </li>
            <li>
              A track record of excellence in academics, music, and student
              achievement.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-[280px] h-[220px] md:w-[360px] md:h-[260px] flex-shrink-0">
          <Image
            src={Imagery6}
            alt="Why Parents Choose Living Soul Schools"
            fill
            className="object-cover  "
          />
        </div>
      </div>


<div id="schedule">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-950">
    School Day Schedule
  </h2>

  {/* Tabs */}
  <div className="flex gap-8 mb-6 border-b border-gray-200">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative pb-3 text-base font-medium transition-colors duration-200 ${
          activeTab === tab
            ? "text-blue-950 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-blue-950"
            : "text-gray-500 hover:text-blue-700"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Descriptive Paragraphs */}
  <div className="space-y-4 mb-10 text-sm md:text-base  leading-relaxed">

    <p>
LSS begins the day with assembly at 7:50am and the first class at 8:20am, with each subject running for 40 minutes. Closing time from Monday to Thursday is 3pm while on Friday is 1pm with an additional 1-hour after school lesson available.
    </p>
    <p>
 Students should be picked up at the end of their school day.
    </p>
    <p>
The organisation of a typical day at LSS is as follows:
    </p>
  </div>

  {/* Table */}
<div className="overflow-x-auto">
  <table className="w-full md:w-1/2 text-sm md:text-base border-collapse shadow-md rounded-2xl overflow-hidden">
    <tbody className="bg-white border border-gray-200 rounded-2xl">
      {schedules[activeTab].map(([time, activity], i) => (
        <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50 transition">
          <td className="px-6 py-3 text-gray-600 border-r border-gray-200">
            {time}
          </td>
          <td className="px-6 py-3 font-medium text-blue-950">{activity}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


</div>

      </section>
    </div>


    </div>
  );
}