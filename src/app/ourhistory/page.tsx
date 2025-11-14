import Image from "next/image";

import Darasimi from "@/assets/Darasimi.png";
import Playground from "@/assets/Playground.jpg";
import LandingImage from "@/assets/LandingImage.jpg";

import Cretche1 from "@/assets/Cretche1.jpg";
import Cretche2 from "@/assets/Cretche2.jpg";
import Cretche3 from "@/assets/Cretche3.jpg";
import Cretche4 from "@/assets/Cretche4.jpg";

import Imagery5 from "@/assets/Imagery5.png";

export default function Home() {
  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${Playground.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
          <h1 className="text-5xl font-bold leading-tight">Our History</h1>
          <p>
            Living Soul Schools is an organization with the dedication,
            expertise and resources to make a difference through education. We
            are committed to giving adequate attention to moral education,
            spiritual value, social and a sound academic life.
          </p>
        </div>
      </section>

      <section className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-12">
        {/* Heading & Intro */}
        <div className="max-w-5xl mx-auto text-left w-full space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950">
            Living Soul Schools
          </h1>
          <p className="text-gray-700 leading-relaxed">
            What started as a small nursery has grown into a full academic
            institution offering Nursery, Primary, and Secondary education with
            modern facilities. Guided by integrity and innovation, the school
            integrates technology and creativity to prepare students for a
            changing world. Over the years, Living Souls Schools has built a
            strong reputation for academic excellence, moral discipline, and
            community impact, raising confident, responsible, and future-ready
            leaders.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our academic system is solidly structured, comprehensive and defined
            for nurturing world-class curricula, efficient instructional
            methods, crafting and developing independent learners with strong
            moral principles. At Living Soul Schools, we take pride in
            personalized education for every child. As we soar in the heart of
            Nigeria, our vision and faith inspire us to achieve this.
          </p>
        </div>

        {/* Our History */}
<div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
  {/* Image */}
  <div className="relative w-full h-[300px] md:h-auto rounded-lg overflow-hidden shadow-md">
    <Image
      src={LandingImage}
      alt="Living Soul Schools Building"
      fill
      className="object-cover"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col justify-center">
    <h4 className="text-blue-800 font-semibold text-sm uppercase mb-2">
      Our History
    </h4>
    <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">
      The Story Of Living Soul Schools
    </h2>

    <div className="space-y-4 text-gray-700 leading-relaxed">
      <p>
        Living Soul Nursery and Primary Schools were formally established on
        September 19, 2016, by Mr. EGUNBIYI Peter Adebayo. At inception, there
        were only 9 pupils and 5 academic staff. Since its humble beginnings,
        the school has continued to grow in leaps and bounds. Academic laurels
        have been won by pupils from various sets who graduated from the school.
      </p>
      <p>
        The school provides a conducive teaching and learning environment for
        the upbringing of future confident global citizens under the guidance
        and leadership of highly dedicated and professional staff experienced in
        modern teaching trends in a globalized society.
      </p>
      <p>
        LSS provides a wide range of opportunities for children to develop their
        individual talents and reach their full potential within a strong and
        supportive framework. At Living Soul Nursery and Primary Schools, we
        believe in the innate qualities possessed by children, and our goal is
        to identify, modify, and develop all inherent talents in every child.
      </p>
      <p>
        Guided by visionary leadership and a team of passionate, qualified
        educators, Living Souls Schools has continued to raise students who
        excel academically, demonstrate strong character, and contribute
        meaningfully to society.
      </p>
      <p>
        Today, the school stands as a beacon of excellence, integrity, and
        creativity, offering a balanced curriculum that blends academic rigor
        with moral and spiritual growth. With well-equipped classrooms, modern
        laboratories, digital learning tools, and a nurturing environment,
        Living Souls Schools remains steadfast in its mission to inspire,
        educate, and empower future leaders to transform their world.
      </p>
    </div>
  </div>
</div>


        {/* Mission Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-950 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are passionately dedicated to the progress of humanity, achieved
            through high-quality education, dedicated service, and innovative
            commitment. Since our establishment, Living Soul Schools has grown
            from humble beginnings into a leading educational institution in
            Lagos, with a reputation for academic excellence and moral
            discipline.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From our first campus, situated in the heart of Lagos, we have
            expanded with multiple branches, each tailored to specific needs.
            Operating under the vision to raise God-fearing, morally upright,
            and intellectually sound leaders, we currently serve thousands of
            students across Lagos.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-950 mb-4">
            Core Values
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our core values are anchored in the progress of humanity, achieved
            through high-quality education, dedicated service, and innovative
            commitment. We aim to develop individuals who are spiritually
            grounded, intellectually equipped, and socially responsible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We uphold excellence, discipline, and integrity while fostering a
            nurturing environment that helps each learner reach their full
            potential. Our core belief is that every child deserves the
            opportunity to succeed, guided by moral and academic excellence.
          </p>
        </div>
      </section>
    </div>
  );
}
