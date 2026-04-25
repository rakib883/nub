"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaUser, FaClock, FaHeart, FaStar, FaChalkboardTeacher, FaUserGraduation, FaBookOpen, FaAward } from 'react-icons/fa';

export default function Instractor() {
  const [instructors, setInstructors] = useState([]); // ✅ API theke data ekhane thakbe
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- API theke Instructor Fetch kora ---
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await fetch('https://nub-bakend.vercel.app/api/all-user');
        const result = await res.json();
        
        if (result.success) {
          // ✅ Sudhu jader role "instructor" tader filter kora hocche
          const expertInstructors = result.data.filter(user => user.role === "instructor");
          setInstructors(expertInstructors);
        }
      } catch (error) {
        console.error("Error fetching instructors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) return <div className="py-20 text-center font-black animate-pulse text-[#002147]">LOADING EXPERTS...</div>;

  return (
    <main className="overflow-x-hidden font-sans">
      
      {/* 3. EXPERT INSTRUCTOR SECTION */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#002147] mb-4 uppercase tracking-tight">Our Expert Instructors</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Learn from industry leaders and experienced professionals who are passionate about sharing their knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.length > 0 ? (
              instructors.map((person) => (
                <div key={person._id} className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-80 w-full grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                    <Image 
                      src={person.profilePicture || "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={person.name || "Instructor"} 
                      unoptimized 
                    />
                    {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <p className=" text-xs font-medium italic text-white">
                          {/* ✅ Template Literal use kora hoyeche */}
                          {person.experience 
                            ? `${person.experience} Years Experience` 
                            : "Expert Professional"
                          }
                        </p>
                      </div>
                  </div>

                  {/* Info Container */}
                  <div className="mt-5 text-center sm:text-left">
                    <h4 className="font-black text-[#002147] text-xl uppercase  group-hover:text-blue-600 transition-colors">
                      {person.name || "New Instructor"}
                    </h4>
                    <h4 className="font-black text-[#002147] text-xl uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                      {person.course || "New Instructor"}
                    </h4>
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mt-1">
                      {person.education || person.role || "Specialist"}
                    </p>
                    <div className="mt-2 flex items-center justify-center sm:justify-start gap-1 text-amber-500 text-xs">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      <span className="text-gray-400 ml-1 font-bold">(5.0)</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-400 font-bold italic">
                No instructors found at the moment.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- VIDEO POPUP MODAL (Jodi lagge) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <button onClick={() => setIsModalOpen(false)} className="absolute top-10 right-10 text-white text-3xl hover:rotate-90 transition-transform">✕</button>
          <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </main>
  );
}