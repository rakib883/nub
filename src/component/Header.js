import React from 'react'
import { RiPhoneFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoSkype } from "react-icons/io5";
import Image from 'next/image';
import MainMenu from './MainMenu';

const Header = () => {
  return (
    <div className="">
      {/* top header area */}
      <div className='bg-[#f1c40f]'>
        <div className="max-w-[1280px] mx-auto flex justify-between items-center py-2 ">
            
            {/* contact area */}
            <div className="flex items-center gap-6 text-[#011e40] font-semibold">
            
            <div className="flex items-center gap-1">
                <RiPhoneFill />
                <p>+00 0123456789</p>
            </div>

            <div className="flex items-center gap-1">
                <MdOutlineEmail />
                <p>info@learapress.com</p>
            </div>

            </div>

            {/* social area */}
            <div className="flex items-center gap-4 text-[18px] text-[#011e40]" >
                 <p>Follow us</p>
                 <div className="cursor-pointer hover:text-white  transition-colors duration-300">
                    <FaFacebookF />
                 </div>
                 <div className="cursor-pointer hover:text-white  transition-colors duration-300">
                    <IoLogoTwitter />
                 </div>
                 <div className="cursor-pointer hover:text-white  transition-colors duration-300">
                    <IoLogoLinkedin />
                 </div>
                 <div className="cursor-pointer hover:text-white  transition-colors duration-300">
                    <IoLogoSkype />
                 </div>
            </div>

        </div>
      </div>
      {/* main header */}
      <div className="max-w-[1280px] mx-auto py-4  flex justify-between items-center">
        {/* Logo area here */}
         <div>
            <a href='/'>
                <Image src="/logo.png" alt="Logo" width={130} height={130} />
            </a>
         </div>
         {/* menu area here */}
         <div>
            <MainMenu/>
         </div>
         {/* apply area here */}
         <div>
              <a href="/admission"className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold px-6 py-3 rounded-sm shadow-lg hover:scale-105 hover:from-yellow-500 hover:to-yellow-600 transition-transform duration-300">
                  Apply Now
               </a>
         </div>
      </div>

    </div>
  )
}

export default Header
