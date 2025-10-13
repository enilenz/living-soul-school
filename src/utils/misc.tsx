"use client";

import Image from "next/image";

interface CardProps {
  imageSrc: string;
  description: string;
  textColor?: string;
}

export default function Card({
  imageSrc,
  description,
  textColor = "text-gray-800",
}: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center w-[300px] sm:w-[230px] md:w-[250px]">
      {/* Image */}
      <div className="p-3">
        <div className="relative h-[220px] sm:h-[250px] w-full">
          <Image
            src={imageSrc}
            alt={description}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Text */}
      <div className="py-4">
        <p className={`text-lg sm:text-xl font-bold ${textColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
