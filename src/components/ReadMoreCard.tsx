// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// interface ReadMoreCardProps {
//   id?: string; // 🆕 for linking to the section
//   title: string;
//   description: string;
//   readMore?: string;
// }

// export default function ReadMoreCard({
//   id,
//   title,
//   description,
//   readMore = "text-gray-800",
// }: ReadMoreCardProps) {
//   return (
//     <div className="bg-white border border-gray-100 rounded-xl h-auto w-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-left p-4 flex flex-col justify-between gap-8">
//       <div className="flex flex-col gap-3">
//         <h1 className="text-blue-950 text-lg font-bold leading-none">{title}</h1>
//         <p className="text-md text-gray-600">{description}</p>
//       </div>

//       {/* 🟦 Read More Button */}
//       <Link href={`/notes#${id || ""}`} scroll={false}>
//         <Button
//           className="w-fit text-black font-semibold text-md bg-transparent px-6 py-3 hover:bg-blue-950 hover:text-white transition-all duration-300"
//           variant="outline"
//         >
//           Read More
//         </Button>
//       </Link>
//     </div>
//   );
// }



"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface ReadMoreCardProps {
  id?: string;
  title: string;
  description: string;
}

export default function ReadMoreCard({ id, title, description }: ReadMoreCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (id === "aboutus") {
      // ✅ Navigate first — smooth scroll handled on the new page
      router.push("/aboutus");
      return;
    }

    // ✅ For all other cards
    router.push(`/notes#${id}`);
    setTimeout(() => {
      const section = document.getElementById(id!);
      if (section) {
        const offset = 100; // adjust for sticky navbar
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-left p-4 flex flex-col justify-between gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-blue-950 text-lg font-bold leading-none">{title}</h1>
        <p className="text-md text-gray-600">{description}</p>
      </div>

      <Button
        onClick={handleClick}
        className="w-fit text-black font-semibold text-md bg-transparent px-6 py-3 hover:bg-blue-950 hover:text-white transition-all duration-300"
        variant="outline"
      >
        Read More
      </Button>
    </div>
  );
}

