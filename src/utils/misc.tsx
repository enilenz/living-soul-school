"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import Facebook from "@/assets/Facebook.svg";
import Instagram from "@/assets/Instagram.svg";
import Twitter from "@/assets/Twitter.svg";

export default function Footer() {
  return (
    <footer  id="footer"
      className="
        bg-black text-white 
        py-6 sm:py-8 md:py-10 
        flex flex-col items-center 
        space-y-6 sm:space-y-8 md:space-y-10
      "
    >
{/* === Top Links === */}
<div
  className="
    flex flex-wrap justify-center 
    gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 md:gap-x-8 
    text-[11px] sm:text-sm md:text-base font-medium
    max-w-md sm:max-w-2xl md:max-w-4xl mx-auto text-center
  "
>
  <Link href="/aboutus" className="hover:text-gray-400 transition">
    About Us
  </Link>
  <Link href="/admissions" className="hover:text-gray-400 transition">
    Admissions
  </Link>
  <Link href="/academics" className="hover:text-gray-400 transition">
    Academics
  </Link>
  <Link href="/faq" className="hover:text-gray-400 transition">
    FAQs
  </Link>
  <Link href="/newsandevents" className="hover:text-gray-400 transition">
    News
  </Link>
  <Link href="/codesandpolicies" className="hover:text-gray-400 transition">
    Policies
  </Link>
</div>


      {/* === Contact Info === */}
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-5">
        <p className="font-medium text-sm sm:text-base md:text-lg">Contact Us</p>
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center 
            gap-3 sm:gap-5 md:gap-7 
            text-xs sm:text-sm md:text-base text-gray-400
          "
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
            <span>registrar@livingsoulsschools.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
            <span>+234 810 9777 551</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
            <span> Living Souls Schools, Addo Road</span>
          </div>
        </div>
      </div>

      {/* === Social Media === */}
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-5">
        <p className="font-medium text-sm sm:text-base md:text-lg">
          Follow Our Social Media
        </p>
        <div className="flex justify-center gap-4 sm:gap-5 md:gap-6">
          <Link      
           href="https://www.facebook.com/share/17Dw1WkVkt/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer" 
          className="hover:opacity-80 transition">
            <Image src={Facebook} alt="Facebook" width={24} height={24} />
          </Link>

          <Link      
           href="https://www.instagram.com/livingsoulsschool?igsh=cXNiaXNjOXJtc3Mw"
          target="_blank"
           rel="noopener noreferrer" 
           className="hover:opacity-80 transition">
            <Image src={Instagram} alt="Instagram" width={24} height={24} />
          </Link>

          <Link       
          href="https://x.com/livingsoulssch?s=21"
          target="_blank"
          rel="noopener noreferrer" 
          className="hover:opacity-80 transition">
            <Image src={Twitter} alt="Twitter" width={24} height={24} />
          </Link>

        </div>
      </div>

      {/* === Divider + Bottom Text === */}
      <div className="flex flex-col items-center w-full space-y-3 sm:space-y-4">
        <div className="w-full border-t border-gray-700"></div>
        <p className="text-xs sm:text-sm md:text-md text-gray-300">
          © 2025 Living Soul Schools.
        </p>
      </div>
    </footer>
  );
}
