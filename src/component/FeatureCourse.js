"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaUser, FaClock, FaHeart, FaStar, FaCalendarAlt } from 'react-icons/fa';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-sm overflow-hidden shadow-lg group flex flex-col h-full border-b-4 border-transparent hover:border-blue-600 transition-all">
    <div className="relative h-52 w-full">
      {/* Database Thumbnail */}
      <Image 
        src={course.thumbnailLink || "https://via.placeholder.com/500x300"} 
        alt={course.courseName} 
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-500" 
        unoptimized 
      />
      
      {/* Instructor Avatar */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 border-4 border-white rounded-full overflow-hidden z-10 shadow-md bg-white">
        <img 
          src={course.instructorPicLink || "https://via.placeholder.com/150"} 
          alt="instructor" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Upcoming Badge */}
      <div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-md">
        {course.status}
      </div>
    </div>

    <div className="pt-10 pb-4 px-5 flex-grow">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold text-[#002147]">৳{course.price}</span>
        <div className="flex text-yellow-400 text-[10px]">
          <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/>
        </div>
      </div>
      
      {/* Course Title */}
      <h3 className="text-md font-bold text-[#002147] mb-2 line-clamp-1">
        {course.courseName}
      </h3>
      
      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
        {course.description || "Join our upcoming batch and master this skill with industry experts."}
      </p>

      {/* ✅ Admission Button */}
      <button className="w-full mt-5 bg-[#002147] hover:bg-blue-900 text-white font-bold py-3 rounded text-sm transition-all active:scale-95 shadow-md">
         Admission Open
      </button>
    </div>

    {/* Footer Info */}
    <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3 bg-gray-50 text-[11px] text-gray-600 mt-auto">
      <span className="flex items-center gap-1 font-bold">
        <FaUser className="text-[#FFD233]"/> {course.seats} Seats
      </span>
      <span className="flex items-center gap-1 font-bold">
        <FaCalendarAlt className="text-[#FFD233]"/> {course.upcomingDate || "Coming Soon"}
      </span>
      <span className="flex items-center gap-1 cursor-pointer hover:text-red-500">
        <FaHeart className="text-[#FFD233]"/> Save
      </span>
    </div>
  </div>
);

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // ✅ Tomar backend link theke data fetch kora hochhe
        const response = await fetch('https://nub-bakend.vercel.app/api/all-course');
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          // ✅ Shudhu 'Upcoming' status-er course gulo filter korlam
          const upcoming = result.data.filter(c => c.status === "Upcoming");
          setCourses(upcoming);
        }
        setLoading(false);
      } catch (error) {
        console.error("Fetch Error:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 mb-4"></div>
        <p className="text-gray-500 font-bold tracking-widest">LOADING UPCOMING COURSES...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8fafc]">
      <section className="max-w-7xl mx-auto py-20 px-4">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#002147] mb-4 uppercase tracking-tight">
            Upcoming Programs
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.length > 0 ? (
            courses.map(course => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl font-bold uppercase tracking-widest">
                No Upcoming Courses Available
              </p>
            </div>
          )}
        </div>

      </section>
    </div>
  );
}