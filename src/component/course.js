"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaUser, FaClock, FaHeart, FaStar } from 'react-icons/fa';

const CourseSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API থেকে ডাটা ফেচ করা
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://nub-bakend.vercel.app/api/all-course');
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0f172a] py-16 flex justify-center items-center min-h-[400px]">
        <p className="text-white text-xl">Loading Courses...</p>
      </div>
    );
  }
 console.log(courses)
  return (
    <section className="bg-[#0f172a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">Our Feature Course</h2>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course._id || course.id} className="bg-white rounded-sm overflow-hidden shadow-2xl group border-b-4 border-transparent hover:border-[#FFD233] transition-all">
              
              {/* Thumbnail Image */}
              <div className="relative h-56 w-full">
                <Image 
                  src={course.img} 
                  alt={course.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized 
                />
                {/* Instructor Avatar */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 border-4 border-white rounded-full overflow-hidden shadow-lg z-10">
                    <img src={course.instructor_img || course.instructor} alt="instructor" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-10 pb-6 px-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#002147]">${course.price}</span>
                  <div className="flex text-yellow-400 text-xs">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#002147] hover:text-blue-700 cursor-pointer transition">
                  {course.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {course.description || "Ludus nemore qui ex. Verear luptatum principes sit ad, pri brute dicit volumus."}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 bg-gray-50 text-[13px] font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  <FaUser className="text-[#FFD233]" /> {course.seats} Seats
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="text-[#FFD233]" /> {course.hours} Hours
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
                  <FaHeart className="text-[#FFD233]" /> Save
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;