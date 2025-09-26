"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";

import Logo from "@/assets/Logo.png";
import MenuWhite from "@/assets/Menu-Icon-White.png";
import MenuBlack from "@/assets/Menu-Icon-Black.png";

export default function Home() {
  const pathname = usePathname();

  const isTransparentPage = pathname === "/";

  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex ">
      <div
        className={`flex flex-row justify-between items-center px-24 py-2 fixed z-50 w-full ${
          isTransparentPage ? "bg-white" : "bg-white"
        }`} id="navbar"
      >
        <div className="flex flex-row items-center gap-4 md:gap-16">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-14 h-auto"/>
              
            </Link>
            
          </div>


        </div>

         <div className="hidden md:flex flex-row items-center text-black font-medium gap-8 text-sm md:text-sm lg:text-sm">
            <Link href="/" className="hover:text-gray-600 ">
              Home
            </Link>
            <Link
              href="/admissions"
              className="hover:text-gray-600 "
            >
              Admissions
            </Link>
            <Link href="/aboutus" className="hover:text-gray-600 ">
              About Us
            </Link>
            <Link href="/academics" className="hover:text-gray-600 ">
              Academics
            </Link>
             <Link href="/academics" className="hover:text-gray-600 ">
              News & Events
            </Link>
              <Link href="/academics" className="hover:text-gray-600 ">
              Gallery
            </Link>
          </div>

        <div>
          <Button className="hidden md:flex px-4 md:px-8  text-white bg-blue-950" variant="outline">
            Contact Us
          </Button>

          <div className="block md:hidden" onClick={handleMenu}>
            {isMenuOpen ? <IoMdClose className="text-3xl"/> :            
             <Image
              src={isTransparentPage ? MenuBlack : MenuBlack}
              alt="Logo"
              className=""
            />}          
          </div>
        </div>
      </div>

      <div className={isMenuOpen ? `w-full absolute top-17 left-0 bg-white z-40 h-full` : 'absolute left-[-100%]'} id="menu">
        <div className="container mx-auto px-4 flex flex-col gap-4 items-center">
            <Link href="/" className="hover:text-gray-600 ">
              Home
            </Link>
            <Link
              href="/admissions"
              className="hover:text-gray-600 "
            >
              Admissions
            </Link>
            <Link href="/aboutus" className="hover:text-gray-600 ">
              About Us
            </Link>
            <Link href="/academics" className="hover:text-gray-600 ">
              Academics
            </Link>
             <Link href="/academics" className="hover:text-gray-600 ">
              News & Events
            </Link>
              <Link href="/academics" className="hover:text-gray-600 ">
              Gallery
            </Link>

          <Button className="pt-2 px-8" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
