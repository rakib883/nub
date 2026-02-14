import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#011e40] text-gray-300 pt-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Training Center</h2>
          <p className="text-gray-400">
            Learn from the best trainers and improve your skills. Join our courses and enhance your career opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-yellow-500 transition">Courses</Link></li>
            <li><Link href="/trainers" className="hover:text-yellow-500 transition">Trainers</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="flex items-center gap-2"><span>📞</span> +00 123 456 789</p>
          <p className="flex items-center gap-2"><span>✉️</span> info@trainingcenter.com</p>

          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Training Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
