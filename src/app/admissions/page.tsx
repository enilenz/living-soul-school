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

        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
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




