"use client";

import { Button } from "@/components/ui/button";

interface ReadMoreCardProps {
  title: string;
  description: string;
  readMore?: string;
}

export default function ReadMoreCard({
  title,
  description,
  readMore = "text-gray-800",
}: ReadMoreCardProps) {
  return (
    <div className="bg-white border-1 border-gray-100 rounded-xl h-auto w-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-left p-4 flex flex-col gap-12">

<div className="flex flex-col gap-5 ">
          <h1 className="text-blue-950 text-lg font-bold leading-none">{title}</h1>

      <p className="text-md text-gray-600">{description}</p>
</div>

      <Button
        className="w-fit  text-black font-semibold text-md bg-transparent px-6 py-3"
        variant="outline"
      >
        Read More
      </Button>


    </div>
  );
}
