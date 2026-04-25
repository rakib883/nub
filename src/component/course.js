"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaUser, FaClock, FaHeart, FaStar, FaCartPlus } from 'react-icons/fa';
import Link from 'next/link';

const CourseSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://nub-bakend.vercel.app/api/all-course');
        const result = await response.json();

        // ✅ API response structure check kora
        if (result.success && Array.isArray(result.data)) {
          setCourses(result.data);
        } else {
          setCourses([]); // Jodi data na ashe khali array
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filtered list agei ber kore rakha bhalo
  const runningCourses = courses?.filter((course) => course.status === "Running") || [];

  if (loading) {
    return (
      <div className="bg-[#0f172a] py-16 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD233]"></div>
      </div>
    );
  }

  return (
    <section className="bg-[#0f172a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">Our Running Courses</h2>
          <div className="h-1 w-20 bg-[#FFD233] mt-2"></div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {runningCourses.length > 0 ? (
            runningCourses.map((course) => (
              <div key={course._id} className="bg-white rounded-sm overflow-hidden shadow-2xl group border-b-4 border-transparent hover:border-[#FFD233] transition-all flex flex-col h-full">
                
                <div className="relative h-56 w-full overflow-hidden">
                  {/* ✅ Next.js Image fallback fixed */}
                  <Image 
                    src={course.thumbnailLink && course.thumbnailLink.startsWith('http') ? course.thumbnailLink : "https://via.placeholder.com/500x300"} 
                    alt={course.courseName || "course image"} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized 
                  />
                  
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
                    {course.status}
                  </div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 border-4 border-white rounded-full overflow-hidden shadow-lg z-10 bg-white">
                      <img 
                        src={course.instructorPicLink || "https://via.placeholder.com/150"} 
                        alt="instructor" 
                        className="w-full h-full object-cover" 
                      />
                  </div>
                </div>

                <div className="pt-10 pb-6 px-6 space-y-3 flex-grow flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#002147]">৳{course.price}</span>
                    <div className="flex text-yellow-400 text-xs">
                      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#002147] hover:text-blue-700 cursor-pointer transition line-clamp-1">
                    {course.courseName}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {course.description || "Master the latest skills with our comprehensive curriculum."}
                  </p>

                <Link href={`/admission/${course._id}`} className="w-full mt-auto">
                  <button className="w-full bg-[#0f172a] hover:bg-blue-900 text-white font-bold py-3.5 rounded-md shadow-lg flex items-center justify-center gap-3 transition-all active:scale-95 group/btn text-sm">
                    <FaCartPlus className="text-[#FFD233] group-hover/btn:animate-bounce" /> 
                    Get Admission
                  </button>
                </Link> 
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 bg-gray-50 text-[13px] font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-[#FFD233]" /> {course.seats || 0} Seats
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-[#FFD233]" /> {course.duration || 'N/A'}
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
                    <FaHeart className="text-[#FFD233]" /> Save
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400">
              <p className="text-xl font-semibold">No running courses found at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;