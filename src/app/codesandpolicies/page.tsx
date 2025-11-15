import Image from "next/image";
import type { Metadata } from "next";

import CodePolicies from "@/assets/CodeandPolicies.jpg";

export const metadata:Metadata = {
  title: "Code and Policies – Your School Name",
  description: "Learn about our mission, vision, and academic excellence.",
};

export default function Home() {
  return (
    <div className="">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0  bg-cover bg-top"
          style={{ backgroundImage: `url(${CodePolicies.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
          <h1 className="text-5xl  font-bold leading-tight">
            Codes & Policies
          </h1>

          <p>
          Our policies are built to create a safe, fair, and supportive environment for every student and staff member. They reflect our commitment to consistency, transparency, and the well-being of the entire school community.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-24 py-20 bg-white text-blue-950 space-y-12">
        {/* ===== School Policy ===== */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">School Policy</h2>
          <p className="text-gray-700 leading-relaxed">
   The Living Soul Schools (LSS) School Policy provides a clear and unified framework that guides behaviour, expectations, and responsibilities across all levels of the institution, Crèche, Nursery, Primary, and Secondary. It outlines the standards that students, staff, and parents are expected to uphold in areas such as academics, attendance, conduct, health and safety, discipline, and overall school culture.
 This Policy ensures consistency, fairness, and accountability while supporting Living Souls Schools’ commitment to excellence and value-driven education. It is designed to maintain a positive, structured, and conducive learning environment where every child can grow intellectually, socially, emotionally, and morally.

          </p>
        </div>

        {/* ===== Child Protection Policy ===== */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Child Protection Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
The Living Soul Schools Child Protection Policy establishes the guidelines and procedures necessary to safeguard every child in our care across the Crèche, Nursery, Primary, and Secondary sections. This policy reinforces the school’s unwavering commitment to creating a safe, secure, and nurturing environment for all learners.
 It defines the roles and responsibilities of administrators, teachers, caregivers, support staff, parents, and students in identifying, preventing, and responding to any form of harm, abuse, or neglect.
 Through continuous awareness, vigilance, and adherence to established protocols, Living Souls Schools ensures that the well-being, dignity, and rights of every child remain protected and prioritised at all times.

          </p>
        </div>
      </section>
    </div>
  );
}
