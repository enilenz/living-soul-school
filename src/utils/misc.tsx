import Image from "next/image";

import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import ReadMoreCard from "@/components/ReadMoreCard";
import AutoCarousel from "@/components/AutoCarousel";
import FeaturedNewsCard from "@/components/FeaturedNewsCard";

import LandingImage from "@/assets/LandingImage.jpg";
import Graduates from "@/assets/Graduates.png";
import Child1 from "@/assets/Child1.jpg";
import Child2 from "@/assets/Child2.jpg";
import Child3 from "@/assets/Child3.jpg";

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
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          The 3 A&apos;s
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
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Admission Requirements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Creche */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">CRECHE</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Birth Certificate or International Passport</li>
              <li>Immunization Records</li>
              <li>Two passport photographs for the child</li>
              <li>Passport photographs for both parents/guardian</li>
              <li>Last Academic Record</li>
            </ul>
          </div>

          {/* Primary */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">PRIMARY</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Birth Certificate or International Passport</li>
              <li>Immunization Records</li>
              <li>Two recent passport photographs for the child</li>
              <li>Passport photographs for both parents/guardian</li>
              <li>Last Academic Record</li>
            </ul>
          </div>

          {/* College */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">COLLEGE</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Birth Certificate or International Passport</li>
              <li>Two recent passport photographs for the child</li>
              <li>Passport photographs for both parents/guardian</li>
              <li>Medical Records</li>
              <li>Last Academic Record</li>
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
