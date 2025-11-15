"use client";
import Image from "next/image";

import Darasimi from "@/assets/Darasimi.png";
import PeterAdebayo from "@/assets/PeterAdebayo.jpeg";
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
              src={PeterAdebayo}
              alt="Mr. Peter Adebayo"
              fill
              className="object-cover object-top rounded-xl shadow-lg z-30"
            />
          </div>
          <p className="mt-1 text-sm sm:text-base font-medium text-left">
            Mr. Peter Adebayo
          </p>
        </div>

        {/* Paragraphs */}
        <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed">
          Living Soul Schools is an organization with the dedication, expertise and
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
            src={PeterAdebayo}
            alt="Mr. Darasimi Thomas"
            fill
            className="object-cover object-top rounded-xl shadow-lg z-30"
          />
        </div>
        <p className="mt-3 text-lg font-medium text-center">
          Mr. Peter Adebayo
        </p>
      </div>
    </div>

    {/* Bottom paragraph block */}
    <div className="mt-8 sm:mt-10 text-left">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        We place an importance on technology which has kept us at the forefront
        of education. These technological tools aid student learning and enhance
        teachers productivity by compiling information on every aspect of Living Soul
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
  id="aboutus"
  className="px-8 md:px-24 py-20 bg-white text-blue-950 scroll-mt-24 space-y-10"
>
  {/* Header + First Paragraph */}
  <div className="text-left max-w-5xl">
    <h2 className="text-2xl md:text-3xl font-bold text-black">Welcome to Living Soul Schools!</h2>
    <p className="mt-2 text-base md:text-lg text-gray-700 leading-relaxed">
      Living Souls Schools (LSS) is a distinguished educational institution
      dedicated to shaping exceptional minds and nurturing well-rounded
      individuals. Established on the values of <strong>excellence</strong>,{" "}
      <strong>integrity</strong>, and <strong>purpose</strong>, LSS stands as a
      beacon of transformative learning — where intellectual curiosity meets
      moral strength, and every learner is empowered to thrive.
    </p>
  </div>

  {/* Body Content */}
  <div className="text-base md:text-lg space-y-6 text-gray-700 leading-relaxed max-w-5xl">
    <p>
      At Living Souls Schools, we transcend academics. Our philosophy is rooted
      in the conviction that every child is a <em>living soul</em> — unique,
      gifted, and capable of greatness. We are committed to cultivating these
      gifts through a holistic approach that blends academic mastery, moral
      discipline, spiritual grounding, and leadership development.
    </p>

    <p>
      Our academic framework is world-class, comprehensive, dynamic, and
      globally relevant. We offer a hybrid curriculum that harmoniously
      integrates the Nigerian standard with select elements of the British and
      American systems, ensuring that our students are equipped with the
      intellectual versatility and global perspective required to excel in any
      environment.
    </p>

    <p>
      Innovation is central to the LSS learning experience. Our classrooms are
      powered by technology and guided by passionate educators who inspire
      excellence through creativity, collaboration, and critical thinking. From
      digital learning tools to performance analytics, we leverage modern
      resources to enhance both teaching efficiency and student engagement.
    </p>

    <p>
      Beyond academics, we focus on building character and leadership. Our
      extensive co-curricular and enrichment programs encourage confidence,
      empathy, and a sense of responsibility, preparing our students not just
      for success in examinations, but for distinction in life.
    </p>

    <p>
      At Living Souls Schools, we take pride in our team of highly qualified,
      passionate, and professional teachers who embody our values and bring
      learning to life with care, creativity, and dedication. Guided by our
      visionary Principal and management team, our educators serve as mentors,
      role models, and partners in the holistic growth of every child. We are
      more than an academic institution; we are a community of purpose to raise
      a generation of confident, visionary, and God-centered leaders who will
      make a lasting impact on their world.
    </p>
  </div>

  {/* Core Values */}
  <div className="pt-10 border-t border-gray-300 max-w-5xl">
    <h3 className="text-2xl md:text-2xl font-bold text-black mb-6">
      Our Core Values
    </h3>

    <div className="space-y-4 text-gray-700">
      <p>
        <strong>Integrity:</strong> We uphold honesty, discipline, and moral
        strength in all we do.
      </p>
      <p>
        <strong>Excellence:</strong> We pursue the highest standards in
        learning, teaching, and leadership.
      </p>
      <p>
        <strong>Creativity:</strong> We inspire innovation and imagination in
        our students and staff.
      </p>
      <p>
        <strong>Respect:</strong> We value each individual and celebrate
        diversity and empathy.
      </p>
      <p>
        <strong>Service:</strong> We encourage compassion, community service,
        and responsibility.
      </p>
      <p>
        <strong>Faith:</strong> We build a God-centered foundation for life and
        purpose.
      </p>
    </div>
  </div>

  {/* Closing Statement */}
  <div className="max-w-5xl">
    <p className="text-gray-700 leading-relaxed">
      At Living Souls Schools, we are more than an institution; we are a family
      united by purpose, values, and a shared passion for nurturing young minds.
      Every day, we strive to create a warm, disciplined, and inspiring
      atmosphere where excellence is a culture, creativity is celebrated, and
      character is built for life.
    </p>

    <p className="mt-4 font-semibold text-blue-950 text-lg">
      Welcome to Living Souls Schools, a home of excellence, integrity, and
      light.
    </p>
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
  At our Creche, we believe that the earliest years of a child’s life are the most formative. Our nurturing environment is designed to provide a safe, stimulating, and loving space where children can explore, learn, and grow. From sensory play to interactive learning activities, every moment is carefully crafted to support holistic development.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
Our trained caregivers prioritize each child’s unique personality and pace, fostering confidence, curiosity, and emotional intelligence. Through play-based learning, we encourage social interaction, creativity, and problem-solving skills, setting a strong foundation for lifelong learning.
      </p>
    </div>
  </div>
</section>







<section
  className="bg-white py-16 sm:py-20 md:py-28 px-6 sm:px-12 md:px-24 text-black"
  id="primary"
>
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-16">

    {/* IMAGE — top on mobile, left on desktop */}
    <div className="relative flex justify-center items-center order-1 md:order-1">
      
      {/* Bigger Purple background */}
      <div
        className="absolute rounded-xl bg-violet-300 shadow-md rotate-[-6deg]
        -translate-y-3 -translate-x-4
        w-[280px] h-[320px]            /* mobile */
        sm:w-[320px] sm:h-[360px]      /* tablet */
        md:w-[260px] md:h-[320px]      /* desktop */
        "
      />

      {/* Bigger Foreground image */}
      <div
        className="relative rounded-xl overflow-hidden shadow-lg z-10
        w-[300px] h-[340px]            /* mobile */
        sm:w-[320px] sm:h-[360px]      /* tablet */
        md:w-[290px] md:h-[310px]      /* desktop */
        "
      >
        <Image
          src={Cretche2}
          alt="Primary School Kids"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* TEXT — below on mobile, right on desktop */}
    <div className="col-span-2 text-left order-2 md:order-2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
        Nursery & Primary School
      </h2>
      <p className="text-sm sm:text-base leading-relaxed mb-3">
Our Nursery & Primary programs are designed to provide a smooth and engaging transition from early childhood into structured learning. Children are encouraged to explore their talents, ask questions, and develop a love for learning through hands-on activities, group projects, and interactive lessons.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
At this stage, we also emphasize values such as responsibility, empathy, and perseverance. By blending structured learning with play and exploration, we empower students to develop confidence, independence, and a sense of purpose that will guide them through their academic journey and beyond.
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
        Living Soul Secondary
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
Secondary school is where dreams start taking shape! We challenge students to think deeply, explore widely, and push themselves while providing guidance and support to help them shine academically and personally.
Our curriculum combines core subjects with creative, hands-on experiences, mentorship programs, and exciting extracurricular opportunities. Students learn to think critically, collaborate effectively, and tackle real-world challenges with confidence.
We believe in producing not just graduates, but young leaders with curiosity, integrity, and ambition. Every student leaves ready to take on new adventures, pursue their passions, and make a positive impact on the world around them.
  </p>
</section>








    </div>
  );
}
