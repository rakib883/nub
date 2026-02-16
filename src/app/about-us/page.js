"use client"; // Next.js App Router ব্যবহার করলে এটি প্রয়োজন

import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa'; // Font Awesome Icons

const PeopleNTechAbout = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ভিডিওর লিঙ্ক এখানে পরিবর্তন করুন
  const videoUrl = "https://www.youtube.com/embed/your-video-id-here?autoplay=1";

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20 font-sans">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Left: Text Content */}
        <div className="lg:w-1/2">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
            Our Company Dream
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
            PeopleNTech Mission - Creating Skilled <br /> Manpower for the Future
          </h2>
          <div className="text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Since its inception in 2005, PeopleNTech has been dedicated to transforming lives 
              through skill-based education and practical IT training. With over 40,000 successfully 
              trained students worldwide.
            </p>
            <p>
              Founded by Engr. Abubakar Hanip, PeopleNTech was established with a commitment to 
              real-world, project-based learning. Our certified and industry-experienced trainers work 
              closely with students at every stage.
            </p>
          </div>
        </div>

        {/* Right: Video Thumbnail */}
        <div className="lg:w-1/2 w-full">
          <div 
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-100"
            onClick={() => setIsOpen(true)}
          >
            <img 
              src="https://img.youtube.com/vi/your-video-id-here/maxresdefault.jpg" 
              alt="Video Thumbnail" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <div className="bg-white p-5 rounded-full shadow-xl transform group-hover:scale-110 transition-transform">
                <FaPlay className="text-orange-600 text-2xl ml-1" />
              </div>
            </div>
            {/* Bangla Badge */}
            <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
              পিপলএনটেক ইনস্টিটিউট
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-16" />

      {/* Lower Section: Story */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            PeopleNTech was founded in 2005 to provide affordable consulting and staffing services 
            to small and medium-sized enterprises. Over the years, PeopleNTech has expanded its 
            service capabilities by incorporating diverse expertise.
          </p>
          <p className="text-gray-600 leading-relaxed italic border-l-4 border-orange-500 pl-4">
            Building on its success in the USA, Canada, and India, PeopleNTech began its journey 
            in Bangladesh in 2014, launching our professional courses at its Dhaka campus.
          </p>
        </div>

        {/* Left: Images & Stats */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="row-span-2">
             <img src="https://via.placeholder.com/300x450" className="rounded-xl w-full h-full object-cover shadow-md" alt="Team" />
          </div>
          <div>
             <img src="https://via.placeholder.com/300x200" className="rounded-xl w-full h-full object-cover shadow-md" alt="Office" />
          </div>
          {/* Blue Stats Box */}
          <div className="bg-blue-600 text-white p-6 rounded-xl flex flex-col justify-center items-center text-center shadow-lg">
             <h3 className="text-3xl font-bold">245k+</h3>
             <p className="text-sm opacity-90">Positive Reviews</p>
             <div className="flex mt-3 -space-x-2">
                {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-600 bg-gray-400"></div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Video Modal (Pop-up) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button 
            className="absolute top-6 right-6 text-white text-3xl hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          <div className="w-full max-w-4xl aspect-video shadow-2xl">
            <iframe 
              src={videoUrl}
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default PeopleNTechAbout;