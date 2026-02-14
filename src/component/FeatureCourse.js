"use client";
import Image from 'next/image';
import { FaUser, FaClock, FaHeart, FaStar } from 'react-icons/fa';

const FeatureCourses = [
  { id: 1, title: "Virtual Assitance", price: "$350", seats: "17", hours: "2", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500", instructor: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, title: "Affiliate Marketing", price: "$550", seats: "22", hours: "3", img: "https://images.unsplash.com/photo-1523240715639-99a2f05011bb?q=80&w=500", instructor: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, title: "Graphics Design", price: "$250", seats: "24", hours: "6", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500", instructor: "https://randomuser.me/api/portraits/men/46.jpg" },
];

const AnotherCourses = [
  { id: 4, title: "Web Development", price: "$350", seats: "26", hours: "8", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500", instructor: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 5, title: "SEO", price: "$450", seats: "30", hours: "2", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500", instructor: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 6, title: "Support Engineer", price: "$450", seats: "14", hours: "5", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500", instructor: "https://randomuser.me/api/portraits/men/46.jpg" },
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-sm overflow-hidden shadow-lg group">
    <div className="relative h-52 w-full">
      <Image src={course.img} alt={course.title} fill className="object-cover" unoptimized />
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 border-4 border-white rounded-full overflow-hidden z-10 shadow-md">
        <img src={course.instructor} alt="instructor" className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="pt-10 pb-4 px-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold text-[#002147]">{course.price}</span>
        <div className="flex text-yellow-400 text-[10px]"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/></div>
      </div>
      <h3 className="text-md font-bold text-[#002147] mb-2">{course.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">Ludus nemore qui ex. Verear luptatum principes sit ad, pri brute dicit volumus.</p>
    </div>
    <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3 bg-gray-50 text-[11px] text-gray-600">
      <span className="flex items-center gap-1"><FaUser className="text-[#FFD233]"/> {course.seats} Seats</span>
      <span className="flex items-center gap-1"><FaClock className="text-[#FFD233]"/> {course.hours} Hours</span>
      <span className="flex items-center gap-1 cursor-pointer"><FaHeart className="text-[#FFD233]"/> Save</span>
    </div>
  </div>
);

export default function CoursePage() {
  return (
    <div className="w-full">
     
      {/* SECTION 2: Another Course */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002147] mb-3">Another Course</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {AnotherCourses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>
    </div>
  );
}