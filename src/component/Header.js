'use client';

import React, { useState } from 'react';
import { RiPhoneFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoSkype } from "react-icons/io5";
import Image from 'next/image';
import MainMenu from './MainMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Header Area */}
      <div className='bg-[#f1c40f]'>
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4 gap-2">
          
          {/* Contact Area */}
          <div className="flex items-center gap-4 md:gap-6 text-[#011e40] font-semibold text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <RiPhoneFill />
              <p>+00 0123456789</p>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <MdOutlineEmail />
              <p>info@learapress.com</p>
            </div>
          </div>

          {/* Social Area */}
          <div className="flex items-center gap-4 text-[16px] md:text-[18px] text-[#011e40]">
            <p className="hidden md:block text-sm">Follow us</p>
            <div className="flex gap-4">
              <FaFacebookF className="cursor-pointer hover:text-white transition-colors duration-300" />
              <IoLogoTwitter className="cursor-pointer hover:text-white transition-colors duration-300" />
              <IoLogoLinkedin className="cursor-pointer hover:text-white transition-colors duration-300" />
              <IoLogoSkype className="cursor-pointer hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto py-4 px-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="shrink-0">
            <a href='/'>
              <Image src="/logo.png" alt="Logo" width={110} height={110} className="md:w-[130px]" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <MainMenu />
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <a href="/admission" className="hidden sm:inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold px-4 py-2 md:px-6 md:py-3 rounded-sm shadow-lg hover:scale-105 transition-transform duration-300 text-sm md:text-base">
              Apply Now
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-3xl text-[#011e40] focus:outline-none"
            >
              {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-t' : 'max-h-0'}`}>
          <div className="p-4 bg-gray-50">
             {/* Ekhane MainMenu component ta mobile view-te call hobe */}
             <div className="flex flex-col gap-4">
                <MainMenu />
                <a href="/student-portal" className="sm:hidden block text-center bg-[#f1c40f] text-white font-bold py-3 rounded-sm">
                  Apply Now
                </a>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;