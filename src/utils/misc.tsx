// "use client";
// import Image from "next/image";
// import { useState } from "react";


// import Header from "@/components/Header";

// import { Button } from "@/components/ui/button";
// import Card from "@/components/Card";
// import ReadMoreCard from "@/components/ReadMoreCard";
// import AutoCarousel from "@/components/AutoCarousel";
// import FeaturedNewsCard from "@/components/FeaturedNewsCard";

// import Academics from "@/assets/Academics.jpg";
// import LandingImage from "@/assets/LandingImage.jpg";
// import Graduates from "@/assets/Graduates.png";
// import BadgeCheck from "@/assets/BadgeCheck.png";
// import Child1 from "@/assets/Child1.jpg";
// import Child2 from "@/assets/Child2.jpg";
// import Child3 from "@/assets/Child3.jpg";

// import Cretche1 from "@/assets/Cretche1.jpg";
// import Cretche2 from "@/assets/Cretche2.jpg";
// import Cretche3 from "@/assets/Cretche3.jpg";
// import Cretche4 from "@/assets/Cretche4.jpg";

// import Imagery6 from "@/assets/Imagery6.png";

// export default function Home() {
//   // const [activeTab, setActiveTab] = useState("Creche");

//   type TabType = "Cretche" | "Primary" | "Secondary";
//   const tabs: TabType[] = ["Cretche", "Primary", "Secondary"];


// const [activeTab, setActiveTab] = useState<TabType>("Cretche");

// const schedules: Record<TabType, string[][]> = {
//   Cretche: [
//       ["08:00 - 08:15", "Registration"],
//       ["08:15 - 09:15", "Lesson 1"],
//       ["09:15 - 10:15", "Lesson 2"],
//       ["10:15 - 11:15", "Lesson 3"],
//       ["11:15 - 12:15", "Lunch Hour"],
//       ["12:15 - 01:15", "Lesson 4"],
//       ["01:15 - 02:00", "Co-curricular activities"],
//   ],
//   Primary: [
//       ["08:00 - 08:15", "Assembly"],
//       ["08:15 - 09:15", "Lesson 1"],
//       ["09:15 - 10:15", "Lesson 2"],
//       ["10:15 - 11:15", "Lesson 3"],
//       ["11:15 - 11:45", "Break"],
//       ["11:45 - 12:45", "Lesson 4"],
//       ["12:45 - 01:30", "Lunch"],
//       ["01:30 - 02:30", "Lesson 5"],
//   ],
//   Secondary: [
//       ["08:00 - 08:15", "Assembly"],
//       ["08:15 - 09:15", "Lesson 1"],
//       ["09:15 - 10:15", "Lesson 2"],
//       ["10:15 - 11:15", "Lesson 3"],
//       ["11:15 - 11:45", "Break"],
//       ["11:45 - 12:45", "Lesson 4"],
//       ["12:45 - 01:30", "Lunch"],
//       ["01:30 - 02:30", "Lesson 5"],
//   ]
// };




//   return (
//     <div className=""> 

//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden ">
//         <div
//           className="absolute inset-0  bg-cover bg-center"
//           style={{ backgroundImage: `url(${Academics.src})` }}
//         />
//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
//               <h1 className="text-5xl  font-bold leading-tight">
//                 Academics
//               </h1>

//               <p>
//   At Living Soul Schools, we believe education goes beyond academics—it is about nurturing the whole child. From the Creche to Secondary School, we provide a seamless learning journey designed to develop intellectual ability, character, creativity, and confidence. Each stage is tailored to meet the needs of learners at their unique level, ensuring they grow into well-rounded individuals ready for a successful future.
//               </p>
//         </div>
//       </section>


//     <div className="bg-white text-black">
//       {/* ========== CURRICULUM SECTION ========== */}
// {/* ========== CURRICULUM SECTION ========== */}
// <section className="px-8 md:px-24 py-20 space-y-16">
//   {[
//     {
//       title: "Creche (Early Care & Development)",
//       firstParagraph:
//         "Our Creche provides a warm, safe, and fun-filled environment where infants and toddlers are cared for with love and attention.",
//       content: [
//         "Early stimulation through music, rhyme, and storytelling.",
//         "Physical development through play and movement activities.",
//         "Social and emotional growth by encouraging bonding, interaction, and a sense of security.",
//       ],
//       secondParagraph:
//         "We recognize that a child’s first experiences shape their future, and so we ensure every little one is gently guided to explore, smile, and grow in confidence.",
//       image: Cretche1,
//       reverse: false,
//     },
//     {
//       title: "Nursery (Foundation Stage)",
//       firstParagraph:
//         "Our Nursery program is the foundation of lifelong learning. Kids are encouraged to explore their environment through creative and structured play.",
//       content: [
//         "Literacy and numeracy introduced through rhymes, stories, and interactive games.",
//         "Creative expression in music, art, and role play activities.",
//         "Social development by fostering sharing, collaboration, and communication.",
//       ],
//       secondParagraph:
//         "We nurture every child’s imagination, setting the stage for success in primary education.",
//       image: Cretche2,
//       reverse: true,
//     },
//     {
//       title: "Primary School (Building Strong Foundations)",
//       firstParagraph:
//         "In Primary School, we provide a broad, balanced curriculum that equips children with both academic excellence and life skills. Our teaching blends Nigerian curriculum with modern methodologies, ensuring global competitiveness. Highlights include:",
//       content: [
//         "Core subjects: English, Mathematics, Science, and Social Studies.",
//         "ICT and digital literacy introduced early.",
//         "Creative Arts, Music, and Physical Education for well-rounded development.",
//         "Strong emphasis on moral values, discipline, and personal responsibility.",
//       ],
//       secondParagraph:
//         "By the end of Primary School, our learners are confident, articulate, and prepared for the challenges of higher learning.",
//       image: Cretche3,
//       reverse: false,
//     },
//     {
//       title: "Secondary School (Preparing for the Future)",
//       firstParagraph:
//         "Our Secondary section focuses on academic depth, critical thinking, and personal development. With dedicated teachers and modern facilities, we guide students to excel in national and international examinations while preparing them for leadership in society. Key features:",
//       content: [
//         "Advanced curriculum in Science, Arts, and Humanities.",
//         "Practical, project-based learning and use of technology in classrooms.",
//         "Career guidance and counseling for higher education readiness.",
//         "Clubs, societies, and extracurriculars to broaden interests and talents.",
//         "Character education that emphasizes discipline, resilience, and integrity.",
//       ],
//       secondParagraph:
//         "We aim to graduate students who are not only academically sound but also socially responsible, innovative, and globally competitive.",
//       image: Cretche4,
//       reverse: true,
//     },
//   ].map(
//     (
//       { title, firstParagraph, content, secondParagraph, image, reverse },
//       idx
//     ) => (
//       <div
//         key={idx}
//         className={`flex flex-col md:flex-row ${
//           reverse ? "md:flex-row-reverse" : ""
//         } items-center gap-8 md:gap-16`}
//       >
//         {/* Image */}
//         <div className="relative flex justify-center">
//           {/* Purple background div with conditional rotation */}
//           <div
//             className={`absolute w-[260px] h-[320px] rounded-xl bg-violet-300 shadow-md 
//               ${
//                 reverse
//                   ? "rotate-[-8deg] -translate-y-2 -translate-x-7"
//                   : "rotate-[8deg] -translate-y-2 translate-x-7"
//               }`}
//           />

//           {/* Foreground image */}
//           <div className="relative w-[250px] h-[220px] md:w-[290px] md:h-[310px] flex-shrink-0">
//             <Image
//               src={image}
//               alt={title}
//               fill
//               className="object-cover rounded-xl shadow-md"
//             />
//           </div>
//         </div>

//         {/* Text */}
//         <div className="space-y-3 md:space-y-4">
//           <h3 className="font-bold text-xl md:text-2xl text-blue-950">
//             {title}
//           </h3>

//           {/* First Paragraph */}
//           <p className="text-sm md:text-base leading-relaxed">
//             {firstParagraph}
//           </p>

//           {/* Bullet List */}
//           <ul className="list-disc list-inside space-y-6 marker:text-gray-600 text-sm md:text-base">
//             {content.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>

//           {/* Second Paragraph */}
//           <p className="text-sm md:text-base leading-relaxed">
//             {secondParagraph}
//           </p>
//         </div>
//       </div>
//     )
//   )}
// </section>



//       {/* ========== SCHOOL DAY SCHEDULE SECTION ========== */}
//       <section className="px-8 md:px-24 pb-24">
//       <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//         {/* Text */}
//         <div className="flex-1">
//           <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-950">
//             Why Parents Choose Living Soul Schools
//           </h2>
//           <ul className="list-disc list-inside space-y-6 marker:text-gray-500 text-sm md:text-base ">
//             <li>
//               A nurturing environment that fosters values through collaboration.
//             </li>
//             <li>Qualified and passionate teachers who care deeply about students.</li>
//             <li>
//               Balanced learning that develops academic, creative, sports, and moral
//               instruction.
//             </li>
//             <li>
//               A track record of excellence in academics, music, and student
//               achievement.
//             </li>
//           </ul>
//         </div>

//         {/* Image */}
//         <div className="relative w-[280px] h-[220px] md:w-[360px] md:h-[260px] flex-shrink-0">
//           <Image
//             src={Imagery6}
//             alt="Why Parents Choose Living Soul Schools"
//             fill
//             className="object-cover  "
//           />
//         </div>
//       </div>


// <div id="schedule">
//   <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-950">
//     School Day Schedule
//   </h2>

//   {/* Tabs */}
//   <div className="flex gap-8 mb-6 border-b border-gray-200">
//     {tabs.map((tab) => (
//       <button
//         key={tab}
//         onClick={() => setActiveTab(tab)}
//         className={`relative pb-3 text-base font-medium transition-colors duration-200 ${
//           activeTab === tab
//             ? "text-blue-950 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-blue-950"
//             : "text-gray-500 hover:text-blue-700"
//         }`}
//       >
//         {tab}
//       </button>
//     ))}
//   </div>

//   {/* Descriptive Paragraphs */}
//   <div className="space-y-4 mb-10 text-sm md:text-base  leading-relaxed">

//     <p>
// The school is open from Monday to Friday from 7:30 a.m. for students and lessons end at 2.35 p.m. Co-curricular activities take place between 2.45 p.m. and 3.45 p.m. each day. Students should be picked up at the end of their school day.
//     </p>
//     <p>
// We operate a ten day timetable across a two weeks (A and B).
//     </p>
//     <p>
// The organisation of a typical day at BIS is as follows:
//     </p>
//   </div>

//   {/* Table */}
// <div className="overflow-x-auto">
//   <table className="w-full md:w-1/2 text-sm md:text-base border-collapse shadow-md rounded-2xl overflow-hidden">
//     <tbody className="bg-white border border-gray-200 rounded-2xl">
//       {schedules[activeTab].map(([time, activity], i) => (
//         <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50 transition">
//           <td className="px-6 py-3 text-gray-600 border-r border-gray-200">
//             {time}
//           </td>
//           <td className="px-6 py-3 font-medium text-blue-950">{activity}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>


// </div>

//       </section>
//     </div>


//     </div>
//   );
// }





























import Image from "next/image";

import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import ReadMoreCard from "@/components/ReadMoreCard";
import AutoCarousel from "@/components/AutoCarousel";
import FeaturedNewsCard from "@/components/FeaturedNewsCard";

import LandingImage from "@/assets/LandingImage.jpg";
import Graduates from "@/assets/Graduates.png";
import BadgeCheck from "@/assets/BadgeCheck.png";
import Child1 from "@/assets/Child1.jpg";
import Child2 from "@/assets/Child2.jpg";
import Child3 from "@/assets/Child3.jpg";

// import { BadgeCheck, CheckCircle2 } from "lucide-react";
// import { HiBadgeCheck } from "react-icons/hi";



export default function Home() {
  return (
    <div className="">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${LandingImage.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-8">
              <h1 className="text-5xl  font-bold leading-tight">
                Living Soul School Admission
              </h1>

              <p>
    We understand just how important it is for parents to choose the right school for their child. The process outlined below is typical but can be adapted to ensure that you and your child are supported every step of the way.

              </p>
        </div>
      </section>


    <section className="bg-white text-black px-8 md:px-24 py-20 space-y-20">
      {/* The 3 A's */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-black">The </span>
          <span className="text-blue-950">3 A&apos;s</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Apply */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Apply</h3>
            <p className="text-gray-600 leading-relaxed">
              Give us the details to get an initial manual consideration for potential
              placement.
            </p>
          </div>

          {/* Assessment */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Assessment</h3>
            <p className="text-gray-600 leading-relaxed">
              Our professional expert will visit to inspect your child’s ability and
              determine the best class placement.
            </p>
          </div>

          {/* Acceptance */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Acceptance</h3>
            <p className="text-gray-600 leading-relaxed">
              Once you’re done with all offers and accepted, we officially welcome you to
              Living Soul Schools and give proper care for each child.
            </p>
          </div>
        </div>
      </div>

      {/* Admission Requirements */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-black">Admission </span>
          <span className="text-blue-950">Requirements</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Creche */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Creche</h3>
              <span className="text-sm text-gray-500">Ages 1-3</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Birth Certificate or International Passport",
                "Immunization Records",
                "Passport-sized photographs for child",
                "Recent passport photograph for both parents/guardian",
                "Last Academic Record",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
<Image
  src={BadgeCheck}
  alt="Check"
  width={20}
  height={20}
  className="inline-block mr-2"
/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Primary</h3>
              <span className="text-sm text-gray-500">Ages 5-10</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Birth Certificate or International Passport",
                "Immunization Records",
                "Passport-sized photographs for child",
                "Recent passport photograph for both parents/guardian",
                "Last Academic Record",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                <Image
  src={BadgeCheck}
  alt="Check"
  width={20}
  height={20}
  className="inline-block mr-2"
/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* College */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">College</h3>
              <span className="text-sm text-gray-500">Ages 11-16</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Birth Certificate or International Passport",
                "Immunization Records",
                "Passport-sized photographs for child",
                "Recent passport photograph for both parents/guardian",
                "Medical Records",
                "Last Academic Record",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
   <Image
  src={BadgeCheck}
  alt="Check"
  width={20}
  height={20}
  className="inline-block mr-2"
/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="mt-8 px-6 py-2  bg-blue-950 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Make Payment
        </button>
      </div>

      {/* Tuition Fee and Payment */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Tuition Fee and Payment
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-5xl mb-12">
          Over the years, local and international partnerships have been supporting us to
          continually improve our students. Tuition fees are collected termly/annually
          from all branches to help us sustain the school. All fees are prepared by the
          Finance department and payment details are made available by your child’s
          school administrator. Other fees include club subscriptions, library fees,
          tablet fees, and uniforms — all to be settled by the Academic department when
          required.
        </p>

        <div className="flex justify-center">
          <div className="relative w-[400px] h-[250px]">
            <Image
              src={Graduates}
              alt="Graduating Students"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}




