"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// ✅ Import SVGs directly
import Facebook from "@/assets/Facebook.svg";
import Instagram from "@/assets/Instagram.svg";
import Twitter from "@/assets/Twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 flex flex-col items-center space-y-10">
      {/* First line */}
      <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-gray-400 transition">About Us</Link>
        <Link href="/" className="hover:text-gray-400 transition">Admissions</Link>
        <Link href="/" className="hover:text-gray-400 transition">Academics</Link>
        <Link href="/" className="hover:text-gray-400 transition">FAQs</Link>
        <Link href="/" className="hover:text-gray-400 transition">News</Link>
        <Link href="/" className="hover:text-gray-400 transition">Careers</Link>
        <Link href="/" className="hover:text-gray-400 transition">Policies</Link>
      </div>

      {/* Second line */}
      <div className="text-center space-y-5">
        <p className="font-medium text-normal">Contact Us</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-7 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-700" />
            <span>info@school.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-700" />
            <span>+234 800 123 4567</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-700" />
            <span>123 Campus Road, Lagos</span>
          </div>
        </div>
      </div>

      {/* Third line */}
      <div className="text-center space-y-5">
        <p className="font-medium text-normal">Follow Our Social Media</p>
        <div className="flex justify-center gap-6">
          {/* ✅ Use SVGs as components */}
          <Link href="/" className="hover:opacity-80 transition">
            <Image src={Facebook} alt="Facebook" width={28} height={28} />
          </Link>
          <Link href="/" className="hover:opacity-80 transition">
            <Image src={Instagram} alt="Facebook" width={28} height={28} />
          </Link>
          <Link href="/" className="hover:opacity-80 transition">
            <Image src={Twitter} alt="Facebook" width={28} height={28} />
          </Link>
        </div>
      </div>

   
      {/* <div className="w-4/4 border-t border-gray-700"></div>
      <p className="text-md text-white">© 2024 Gidi School</p> */}
        <div className="flex flex-col items-center w-full space-y-4">
    <div className="w-full border-t border-gray-700"></div>
    <p className="text-md text-white">© 2024 Your School Name.</p>
  </div>
    </footer>
  );
}
