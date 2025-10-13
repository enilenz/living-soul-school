"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import Logo from "@/assets/Logo.png";
import MenuBlack from "@/assets/Menu-Icon-Black.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* NAVBAR */}
      <nav
        id="navbar"
        className={`flex justify-between items-center 
          px-4 sm:px-8 md:px-16 lg:px-24 py-2 
          fixed top-0 left-0 w-full z-[60] 
          bg-white border-b border-gray-100
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-[61]">
          <Image
            src={Logo}
            alt="Logo"
            className="w-10 h-auto sm:w-12 md:w-14"
          />
        </Link>

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
                <NavigationMenuTrigger
                  className="px-0 py-0 h-auto flex items-center text-black 
                  hover:text-gray-600 
                  data-[state=open]:bg-transparent
                  data-[state=open]:text-gray-600
                  focus:bg-transparent 
                  active:bg-transparent"
                >
                  About Us
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className="bg-white border border-gray-200 rounded-md shadow-md py-3 whitespace-nowrap"
                >
                  <ul className="flex flex-col text-sm text-black">
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
                        <Link href="/ourfacilities" className="hover:text-gray-600">
                          Our Facilities
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <DropdownMenuSeparator />
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/ourgallery" className="hover:text-gray-600">
                          Our Gallery
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <DropdownMenuSeparator />
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/ourhistory" className="hover:text-gray-600">
                          Our History
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <DropdownMenuSeparator />
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/faq" className="hover:text-gray-600">
                          FAQ
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <DropdownMenuSeparator />
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/missionandcorevalues"
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
          <Link href="/newsandevents" className="hover:text-gray-600">
            News & Events
          </Link>
          <Link href="/ourgallery" className="hover:text-gray-600">
            Gallery
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <Button
          className="hidden md:flex px-4 md:px-8 text-white bg-blue-950"
          variant="outline"
        >
          Contact Us
        </Button>

        {/* Mobile Menu Toggle (inside nav so it's always on top) */}
        <div
          className="block md:hidden ml-2 sm:ml-4 z-[70] relative"
          onClick={handleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <IoMdClose className="text-3xl sm:text-4xl text-black" />
          ) : (
            <Image
              src={MenuBlack}
              alt="Menu"
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          )}
        </div>
      </nav>

      {/* MOBILE MENU (moved OUTSIDE the <nav> so navbar stays on top) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[50] bg-white flex flex-col items-start mt-12 px-6 py-10 gap-8 overflow-y-auto text-lg sm:text-xl font-medium text-gray-800"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
     

          <Link href="/" className="w-full py-3 border-b hover:text-gray-600">
            Home
          </Link>

          <Link
            href="/admissions"
            className="w-full py-3 border-b hover:text-gray-600"
          >
            Admissions
          </Link>

          {/* About Us - always open */}
          <div className="w-full border-b pb-3">
            <p className="font-semibold text-gray-900 mb-3">About Us</p>
            <div className="pl-4 flex flex-col gap-3 text-gray-700 text-base sm:text-lg">
              <Link href="/ourfacilities" className="hover:text-gray-600">
                Our Facilities
              </Link>
              <Link href="/ourhistory" className="hover:text-gray-600">
                Our History
              </Link>
              <Link href="/ourmanagement" className="hover:text-gray-600">
                Our Management
              </Link>
              <Link
                href="/missionandcorevalues"
                className="hover:text-gray-600"
              >
                Missions & Core Values
              </Link>
            </div>
          </div>

          <Link
            href="/academics"
            className="w-full py-3 border-b hover:text-gray-600"
          >
            Academics
          </Link>

          <Link
            href="/newsandevents"
            className="w-full py-3 border-b hover:text-gray-600"
          >
            News & Events
          </Link>

          <Link
            href="/ourgallery"
            className="w-full py-3 border-b hover:text-gray-600"
          >
            Gallery
          </Link>

          <div className="w-full mt-8">
            <Link
              href="/contact"
              className="block w-full text-center bg-blue-950 text-white py-4 rounded-md text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
