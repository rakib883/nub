"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaUser, FaClock, FaHeart, FaStar, FaChalkboardTeacher, FaUserGraduation, FaBookOpen, FaAward } from 'react-icons/fa';

// --- DATA ---
const instructors = [
  { id: 1, name: "ISABELLA", role: "Web Development", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "ISTIAK AHMED", role: "Article Writing", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "BENJAMIN", role: "Graphics Design", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: 4, name: "MICHAEL", role: "Apps Development", img: "https://randomuser.me/api/portraits/men/50.jpg" },
];

const stats = [
  { id: 1, count: "246", label: "Expert Instructor", icon: ""},
  { id: 2, count: "416", label: "Happy Student", icon: ""},
  { id: 3, count: "648", label: "Course Done", icon: "" },
  { id: 4, count: "824", label: "Award Winner", icon: "" },
];

export default function Instractor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className="overflow-x-hidden font-sans">
      
     

      {/* 3. EXPERT INSTRUCTOR (image_4b8f46.jpg) */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002147] mb-4">Our Expert Instructor</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper auctor suspendisse quisque.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map(person => (
              <div key={person.id} className="group cursor-pointer">
                <div className="relative h-72 w-full grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                  <Image src={person.img} fill className="object-cover" alt={person.name} unoptimized />
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-[#002147] text-lg">{person.name}</h4>
                  <p className="text-gray-500 text-sm">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIDEO POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4">
          <button onClick={() => setIsModalOpen(false)} className="absolute top-10 right-10 text-white text-3xl">✕</button>
          <div className="w-full max-w-4xl aspect-video bg-black">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </main>
  );
}