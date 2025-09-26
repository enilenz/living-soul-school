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
    <div className="bg-white rounded-xl h-auto w-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300  text-center">
      {/* Image */}
      <div className="p-2 pb-2">
        <div className="relative h-[200px] w-[199px]">
          <Image
            src={imageSrc}
            alt={description}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" ></div>

      {/* Text */}
      <div className="py-3">
        
        <p className={`text-lg font-bold ${textColor}`}>{description}</p>
      </div>
    </div>
  );
}
