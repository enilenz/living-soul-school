import Image from "next/image";

import CodePolicies from "@/assets/CodeandPolicies.jpg";
import Playground from "@/assets/Playground.jpg";

export default function Home() {
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
            Mission & Core Values
          </h1>

          <p>
Our mission shapes every step we take toward nurturing confident, responsible, and well-rounded learners. Guided by strong values, we strive to build character, inspire curiosity, and empower every child to succeed.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-24 py-20 bg-white text-blue-950 space-y-12">
        {/* ===== School Policy ===== */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
    To identify, develop, and nurture all the child&apos;s inherent talents, thereby giving them a solid foundation to grow in the profession they are passionate about, becoming relevant in society and the world at large.
          </p>
        </div>

        {/* ===== Child Protection Policy ===== */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Core Values
          </h2>
          <p className="text-gray-700 leading-relaxed">
   To engage in a long-term investment, creating well-educated people who will embody skills, integrity, honesty, knowledge, creativity, confidence, excellence, and godly values.
          </p>
        </div>
      </section>
    </div>
  );
}
