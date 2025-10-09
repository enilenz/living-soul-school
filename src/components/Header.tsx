"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import { ChevronDown } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import Logo from "@/assets/Logo.png";
import MenuBlack from "@/assets/Menu-Icon-Black.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isTransparentPage = pathname === "/";

  return (
    <nav
      id="navbar"
      className={`flex flex-row justify-between items-center px-24 py-2 fixed z-50 w-full ${
        isTransparentPage ? "bg-white" : "bg-white"
      }`}
    >
      {/* Logo */}
      <div className="flex flex-row items-center gap-4 md:gap-16">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-14 h-auto" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex flex-row items-center text-black font-medium gap-8 text-sm">
        <Link href="/" className="hover:text-gray-600">
          Home
        </Link>
        <Link href="/admissions" className="hover:text-gray-600">
          Admissions
        </Link>

        {/* About Us Dropdown using NavigationMenu */}
       <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="    flex items-center  text-black 
    hover:text-gray-600 
    data-[state=open]:bg-transparent
    data-[state=open]:text-gray-600
    focus:bg-transparent 
    active:bg-transparent">
        About Us
            
      </NavigationMenuTrigger>

      <NavigationMenuContent
        className="
          bg-white border border-gray-200 rounded-md shadow-md 
           py-3 whitespace-nowrap
        "
      >
        <ul className="flex flex-col text-sm text-black ">
         <li>
            <NavigationMenuLink asChild>
              <Link href="/aboutus" className="hover:text-gray-600">
                About Us
              </Link>
            </NavigationMenuLink>
          </li>
           <DropdownMenuSeparator />
          <li>
            <NavigationMenuLink asChild>
              <Link href="/aboutus/facilities" className="hover:text-gray-600">
                Our Facilities
              </Link>
            </NavigationMenuLink>
          </li>
           <DropdownMenuSeparator />
          <li>
            <NavigationMenuLink asChild>
              <Link href="/aboutus/history" className="hover:text-gray-600">
                Our History
              </Link>
            </NavigationMenuLink>
          </li>
           <DropdownMenuSeparator />
          <li>
            <NavigationMenuLink asChild>
              <Link href="/aboutus/management" className="hover:text-gray-600">
                Our Management
              </Link>
            </NavigationMenuLink>
          </li>
           <DropdownMenuSeparator />
          <li>
            <NavigationMenuLink asChild>
              <Link href="/aboutus/faq" className="hover:text-gray-600">
                FAQ
              </Link>
            </NavigationMenuLink>
          </li>
           <DropdownMenuSeparator />
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="/aboutus/mission"
                className="hover:text-gray-600"
              >
                Missions & Core Values
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

        <Link href="/academics" className="hover:text-gray-600">
          Academics
        </Link>
        <Link href="/news" className="hover:text-gray-600">
          News & Events
        </Link>
        <Link href="/gallery" className="hover:text-gray-600">
          Gallery
        </Link>
      </div>

      {/* Desktop Contact Button */}
      <Button className="hidden md:flex px-4 md:px-8 text-white bg-blue-950" variant="outline">
        Contact Us
      </Button>

      {/* Mobile Menu Toggle */}
      <div className="block md:hidden" onClick={handleMenu}>
        {isMenuOpen ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <Image src={MenuBlack} alt="Menu" className="w-8 h-8" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen
            ? "w-full absolute top-16 left-0 bg-white z-40 h-full flex flex-col items-center gap-4 py-8"
            : "hidden"
        }`}
        id="menu"
      >
        <Link href="/" className="hover:text-gray-600">
          Home
        </Link>
        <Link href="/admissions" className="hover:text-gray-600">
          Admissions
        </Link>
        <Link href="/aboutus" className="hover:text-gray-600">
          About Us
        </Link>
        <Link href="/academics" className="hover:text-gray-600">
          Academics
        </Link>
        <Link href="/news" className="hover:text-gray-600">
          News & Events
        </Link>
        <Link href="/gallery" className="hover:text-gray-600">
          Gallery
        </Link>

        <Button className="px-8 text-white bg-blue-950" variant="outline">
          Contact Us
        </Button>
      </div>
    </nav>
  );
}
