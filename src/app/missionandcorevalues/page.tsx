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
            We understand just how important it is for parents to choose the
            right school for their child. The process outlined below is typical
            but can be adapted to ensure that you and your child are supported
            every step of the way.{" "}
          </p>
        </div>
      </section>

      <section className="px-8 md:px-24 py-20 bg-white text-blue-950 space-y-12">
        {/* ===== School Policy ===== */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            The School Policy serves as a guiding document that outlines the
            rules, regulations, and expectations for students, staff, and
            parents within all school premises, including creche, nursery,
            primary, secondary, and pre-degree Christened Schools. This
            comprehensive Policy promotes clarity and consistency in matters
            pertaining to academic performance, behavior, attendance, health and
            safety, discipline, and overall school culture. The policy is
            designed to sustain a positive and conducive learning environment
            that fosters the holistic development of students.
          </p>
        </div>

        {/* ===== Child Protection Policy ===== */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            COre Values
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Child Protection Policy is a comprehensive framework designed to
            ensure the safety, well-being, and protection of children within all
            school premises, including creche, nursery, primary, secondary, and
            pre-degree Christened Schools. This policy outlines the guidelines,
            procedures, and responsibilities that the administration, staff,
            caregivers, and students must adhere to in order to create a secure
            and nurturing environment for all children.
          </p>
        </div>
      </section>
    </div>
  );
}
