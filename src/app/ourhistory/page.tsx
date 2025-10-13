
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
            Edidot Schools is an organization with the dedication, expertise and resources to make a difference through education. We are committed to giving adequate attention to moral education, spiritual value, social and a sound academic life.

          </p>
        </div>
      </section>

    <section className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-12">
      {/* Heading & Intro */}
      <div className="max-w-5xl mx-auto text-left w-full space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Living Soul Schools</h1>
        <p className="text-gray-700 leading-relaxed">
          EdExcel Schools is an organization with the dedication, expertise and
          resources to make a difference through education. We are committed to
          giving education direction that’s meaningful, relevant, and globally
          competitive.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our academic system is solidly structured, comprehensive and defined
          for nurturing world-class curricula, efficient instructional methods,
          crafting and developing independent learners with strong moral
          principles. At Living Soul Schools, we take pride in personalized
          education for every child. As we soar in the heart of Nigeria, our
          vision and faith inspire us to achieve this.
        </p>
      </div>

      {/* Our History */}
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-md">
          <Image
            src={LandingImage}
            alt="Living Soul Schools Building"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="text-blue-800 font-semibold text-sm uppercase mb-2">
            Our History
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Story Of Living Soul Schools
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are passionately dedicated to the progress of humanity, achieved
            through high-quality education, dedicated service, and innovative
            commitment. Since our establishment, Living Soul Schools has grown
            from humble beginnings into a leading educational institution in
            Lagos, with a reputation for academic excellence and moral
            discipline.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our story began with a clear vision — to raise God-fearing, morally
            upright, and intellectually sound leaders who can make meaningful
            contributions to society. Today, we proudly stand as one of the most
            reputable schools in Lagos, providing a safe and nurturing
            environment where children flourish academically, socially, and
            spiritually.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From our first campus, situated in the heart of Lagos, we have
            expanded into a system of schools offering both day and boarding
            facilities with an excellent student population of over 2,000 pupils
            and personnel.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We are passionately dedicated to the progress of humanity, achieved
          through high-quality education, dedicated service, and innovative
          commitment. Since our establishment, Living Soul Schools has grown
          from humble beginnings into a leading educational institution in
          Lagos, with a reputation for academic excellence and moral discipline.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From our first campus, situated in the heart of Lagos, we have expanded
          with multiple branches, each tailored to specific needs. Operating
          under the vision to raise God-fearing, morally upright, and
          intellectually sound leaders, we currently serve thousands of students
          across Lagos.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
          Core Values
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our core values are anchored in the progress of humanity, achieved
          through high-quality education, dedicated service, and innovative
          commitment. We aim to develop individuals who are spiritually grounded,
          intellectually equipped, and socially responsible.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We uphold excellence, discipline, and integrity while fostering a
          nurturing environment that helps each learner reach their full
          potential. Our core belief is that every child deserves the opportunity
          to succeed, guided by moral and academic excellence.
        </p>
      </div>
    </section>
      
    </div>
  );
}
