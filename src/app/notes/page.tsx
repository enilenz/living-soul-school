"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import CodePolicies from "@/assets/CodeandPolicies.jpg";
import Playground from "@/assets/Playground.jpg";

export default function Home() {

  useEffect(() => {
    // Scroll smoothly to hash when page loads
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // small delay for layout to render
      }
    }
  }, []);

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
            Notes
          </h1>

          <p>
            We understand just how important it is for parents to choose the
            right school for their child. The process outlined below is typical
            but can be adapted to ensure that you and your child are supported
            every step of the way.{" "}
          </p>
        </div>
      </section>

      {/* === Details Sections === */}
      <section className="px-6 md:px-24 py-16 md:py-24 bg-white space-y-20">
        
<div id="foundersnote" className="scroll-mt-24">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
    Founder&apos;s Note
  </h2>

  <p className="leading-relaxed text-sm md:text-base text-gray-700 mb-8">
    When I founded Living Souls Schools on 19 September 2016, my vision was both simple and profound —
    to create a learning environment where every child is seen, nurtured, and inspired to flourish in spirit,
    mind, and intellect. To me, education has always been more than the pursuit of grades; it is a sacred
    calling, a journey of shaping character, awakening curiosity, and helping each child discover the unique
    light within them. At Living Souls Schools, we believe that every learner is a “living soul of light” —
    full of potential, creativity, and divine purpose. Our role as educators is to help that light shine brightly.
    <br />
    <br />
    From our humble beginnings, we have grown into a vibrant community of learners, teachers, and parents who
    share a deep commitment to holistic education. Our curriculum is thoughtfully designed to blend academic
    excellence with moral and spiritual development, leadership training, and practical life skills, ensuring
    our students are not only prepared for examinations but also equipped for life beyond the classroom.
    <br />
    <br />
    We take pride in fostering an atmosphere of warmth, discipline, and curiosity, where values and knowledge
    go hand in hand. Every classroom experience, extracurricular program, and mentorship opportunity is crafted
    to inspire confidence, compassion, and a lifelong love for learning.
    <br />
    <br />
    As we continue to grow, our mission remains unwavering: to raise a generation of confident, responsible,
    and God-centered individuals who will lead with integrity and make a lasting positive impact on their world.
    <br />
    <br />
    I warmly invite you to explore our community, meet our passionate educators, and experience what makes
    Living Souls Schools a true home of excellence, purpose, and growth.
  </p>

  {/* Signature block */}
  <div className="flex flex-col items-start text-left space-y-1">
    <p className="text-gray-700 text-sm md:text-base">With warm regards,</p>
    <p className="font-semibold text-blue-950 text-base md:text-lg">Mr. EGUNBIYI Peter Adebayo.</p>
    <p className="italic text-gray-600 text-sm md:text-base">
      Founder & Proprietor, Living Souls Schools
    </p>
  </div>
</div>


        {/* Core Values Section */}
        <div id="directorssnote" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Director&apos;s Note</h2>
  <p className="leading-relaxed text-sm md:text-base text-gray-700 mb-8">
At Living Souls Schools, our guiding philosophy is rooted in the belief that education is not merely about academic achievement, but about transforming lives, nurturing the mind, strengthening character, and awakening the potential that lies within every child.
Since our founding in 2016, we have remained steadfast in our commitment to excellence, integrity, and holistic development. We see every learner as a “living soul of light” unique, gifted, and full of promise, and we consider it our sacred duty to provide an environment that allows that light to shine.
    <br />
    <br />
Over the years, Living Souls Schools has evolved into a thriving educational community, guided by values that inspire growth in both intellect and character. Our curriculum is thoughtfully designed to blend academic rigor with moral and spiritual depth, leadership development, and practical life skills. This balanced approach ensures that our students not only excel academically but also develop the confidence, compassion, and resilience required to thrive in a dynamic world.
We are proud of our dedicated educators who serve not only as teachers but as mentors and role models, shaping future leaders with empathy, discipline, and purpose. Together with supportive parents and a vibrant student body, we continue to build a learning environment where excellence and values coexist harmoniously.
    <br />
    <br />
As Managing Director, I remain committed to advancing our mission to raise a generation of well-rounded, globally minded, and God-centered individuals who will lead with integrity and contribute meaningfully to society.
I invite you to be part of our story to experience the warmth, purpose, and transformative spirit that define Living Souls Schools.

  </p>

  {/* Signature block */}
  <div className="flex flex-col items-start text-left space-y-1">
    <p className="text-gray-700 text-sm md:text-base">With sincere regards,</p>
    <p className="font-semibold text-blue-950 text-base md:text-lg">Abayomi Adebayo</p>
    <p className="italic text-gray-600 text-sm md:text-base">
      Managing Director, Living Souls Schools
    </p>
  </div>
        </div>

        {/* Vision Section */}
        <div id="registar" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Registar&apos;s Office</h2>
  <p className="leading-relaxed text-sm md:text-base text-gray-700 mb-8">
The Registrar’s Office at Living Souls Schools serves as the central point of contact for all student admissions, enrollment, and academic record management. We are dedicated to ensuring that every parent and student experiences a seamless and transparent process from the very first inquiry to full enrollment.
    <br />
    <br />
Our goal is to make the journey into the Living Souls Schools community both welcoming and efficient, providing the guidance, clarity, and support families need to make informed decisions about their child’s education.
  </p>


  <div className="space-y-12 text-gray-700 leading-relaxed max-w-5xl">
  {/* Core Responsibilities List */}
  <ul className="list-disc pl-6 space-y-2">
    <li>
      Managing admissions and enrollment across crèche, Nursery, Primary, and Secondary levels.
    </li>
    <li>Maintaining accurate student records and academic documentation.</li>
    <li>Coordinating placement and transfers within and between classes.</li>
    <li>Providing verification and reference services for graduates and alumni.</li>
    <li>Offering admissions counseling and responding to parent inquiries promptly.</li>
  </ul>

  {/* Admissions Process */}
  <div>
    <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
      Admissions Process at a Glance
    </h3>
    <ul className="list-decimal pl-6 space-y-2">
      <li>
        <strong>Inquiry & Tour –</strong> Parents are invited to visit the school,
        meet our team, and explore our learning environment.
      </li>
      <li>
        <strong>Application Submission –</strong> Complete and submit the
        application form (online or in person).
      </li>
      <li>
        <strong>Assessment & Interview –</strong> Prospective students may be
        assessed to determine appropriate placement.
      </li>
      <li>
        <strong>Admission Decision –</strong> Successful applicants receive an
        official offer of admission.
      </li>
      <li>
        <strong>Enrollment & Orientation –</strong> Upon acceptance, families
        complete registration and receive orientation details.
      </li>
    </ul>
  </div>

  {/* Registrar's Message */}
  <div className="border-l-4 border-blue-900 pl-6 py-4 bg-gray-50 rounded-md">
    <h3 className="text-xl md:text-2xl font-semibold text-blue-950 mb-3">
      Message from the Registrar
    </h3>
    <p className="italic mb-4">
      “At Living Souls Schools, we understand that choosing the right school for
      your child is one of the most important decisions a parent can make. Our
      office is here to provide every possible assistance, from your first
      inquiry to your child’s first day in class. We are committed to ensuring a
      smooth, transparent, and supportive process for every family we serve.”
    </p>
    <p className="font-medium">– The Registrar, Living Souls Schools</p>
    <p className="font-semibold text-blue-950">Mrs. Eluwa Justina</p>
  </div>

  {/* Contact Info */}
  <div>
    <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
      Contact the Registrar’s Office
    </h3>
    <ul className="space-y-1">
      <li>📍 <strong>Location:</strong> Living Souls Schools, Addo Road</li>
      <li>📞 <strong>Phone:</strong> +234 8109777551</li>
      <li>✉️ <strong>Email:</strong> registrar@livingsoulsschools.com</li>
      <li>🕓 <strong>Office Hours:</strong> Monday – Friday, 8:00 AM – 4:00 PM</li>
    </ul>
  </div>
</div>

        </div>

        {/* Policies Section */}
        <div id="calendar" className="scroll-mt-24 space-y-6">
     
<div className="text-left space-y-2">
    <h2 className="text-2xl md:text-3xl font-bold text-black">
      Calendar
    </h2>
    <p className="text-base md:text-lg text-gray-700 font-semibold">
      A Year of Excellence, Purpose, and Growth
    </p>
  </div>

  {/* Intro */}
  <div className="text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl space-y-4">
    <p>
      At Living Souls Schools, every academic year is thoughtfully structured to balance learning, creativity, discipline, and personal development. Our calendar reflects our commitment to educational excellence, moral values, and holistic education, ensuring that every term offers opportunities for both intellectual and personal growth.
    </p>
  </div>

  {/* Academic Structure */}
  <div className="max-w-5xl space-y-6">
    <h3 className="text-xl md:text-2xl font-semibold text-black">
      Our Academic Structure
    </h3>
    <p className="text-gray-700">
      The school year is divided into three terms — First Term, Second Term, and Third Term — each designed to deliver a blend of rigorous academics, spiritual formation, and creative engagement.
    </p>

    <ul className="list-disc pl-6 space-y-3 text-gray-700">
      <li>
        <strong>First Term (September – December):</strong> The foundation of a new academic year. This term focuses on orientation, core academic goals, and value-based learning. Students are reintroduced to discipline, teamwork, and leadership through classroom activities and orientation programs.
      </li>
      <li>
        <strong>Second Term (January – April):</strong> A time for academic consolidation and creative expression. Students engage in critical thinking projects, leadership development activities, and mid-year assessments to measure progress and strengthen their learning outcomes.
      </li>
      <li>
        <strong>Third Term (May – July):</strong> The concluding term emphasizes revision, examinations, and preparation for promotion. It also celebrates achievements through Awards Day, Graduation Ceremonies, and End-of-Year Activities.
      </li>
    </ul>
  </div>

  {/* Special Events */}
  <div className="max-w-5xl space-y-6">
    <h3 className="text-xl md:text-2xl font-semibold text-black">
      Special Events and Highlights
    </h3>
    <p className="text-gray-700">
      Our calendar is not just about academics — it’s designed to cultivate the spirit, mind, and intellect of every learner. Throughout the year, Living Souls Schools organizes enriching activities such as:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong>Cultural and Literacy Week:</strong> celebrating diversity, reading culture, and creativity.</li>
      <li><strong>Science, Technology & Innovation Fair:</strong> promoting inquiry and discovery learning.</li>
      <li><strong>Leadership and Values Week:</strong> instilling integrity, confidence, and responsibility.</li>
      <li><strong>Career Day:</strong> inspiring students to explore future pathways with purpose.</li>
      <li><strong>Sports and Wellness Week:</strong> encouraging teamwork, fitness, and a healthy lifestyle.</li>
      <li><strong>Parents-Teachers Conferences:</strong> strengthening collaboration for student success.</li>
      <li><strong>Community Service and Outreach Programs:</strong> fostering empathy and service to others.</li>
    </ul>
  </div>

  {/* Commitment */}
  <div className="max-w-5xl text-gray-700 space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-black">
      Our Commitment
    </h3>
    <p>
      The Living Souls Schools Academic Calendar represents more than dates and events; it embodies our unwavering commitment to quality education, structured learning, and character formation. Each activity, examination, and celebration is intentionally designed to build confidence, discipline, creativity, and leadership in our students.
    </p>
    <p>
      Together, we move forward in excellence, raising a generation of bright, responsible, and God-centered individuals ready to impact their world positively.
    </p>
  </div>
        </div>


        <div id="parents" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">For The Parents</h2>
  <p className="leading-relaxed text-sm md:text-base text-gray-700 mb-8">
At Living Souls Schools, we believe that education is a shared journey, one built on partnership, trust, and mutual commitment. As we reflect on the remarkable progress of our students this term, we cannot help but express our deepest gratitude to you, our dedicated parents, for your unwavering support and cooperation.
    <br />
    <br />
 Your encouragement at home, your involvement in school activities, and your faith in our vision have contributed greatly to the growth and transformation we see in our learners. Each milestone your child achieves is not just a reflection of classroom teaching, but also of the values, discipline, and love nurtured within your home.
    <br />
    <br />
We have witnessed outstanding improvement in academics, behavior, confidence, and creativity, and we celebrate these achievements with you. Your partnership has strengthened our mission to raise children who are not only intellectually sound but also morally upright, emotionally balanced, and purpose-driven.
  <br />
    <br />
    Thank you for believing in Living Souls Schools and for walking this journey of excellence with us. Together, we are shaping a future filled with promise, potential, and light.


  </p>

  {/* Signature block */}
  <div className="flex flex-col items-start text-left space-y-1">
    <p className="text-gray-700 text-sm md:text-base">With sincere appreciation,</p>
    <p className="font-semibold text-blue-950 text-base md:text-lg">The Management & Staff</p>
    <p className="italic text-gray-600 text-sm md:text-base">
      Living Souls Schools
    </p>
  </div>
        </div>

        
      </section>
    </div>
  );
}
