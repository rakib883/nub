import Image from 'next/image';
import { FaUser, FaClock, FaHeart, FaStar } from 'react-icons/fa'; // npm install react-icons

const courses = [
  { id: 1, title: "Virtual Assistance", price: "$350", seats: "17", hours: "2", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500", instructor: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, title: "Affiliate Marketing", price: "$550", seats: "22", hours: "3", img: "https://images.unsplash.com/photo-1523240715639-99a2f05011bb?q=80&w=500", instructor: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, title: "Graphics Design", price: "$250", seats: "24", hours: "6", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500", instructor: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, title: "Web Development", price: "$450", seats: "15", hours: "10", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500", instructor: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: 5, title: "Digital Marketing", price: "$300", seats: "30", hours: "4", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500", instructor: "https://randomuser.me/api/portraits/women/5.jpg" },
  { id: 6, title: "UI/UX Design", price: "$400", seats: "12", hours: "8", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=500", instructor: "https://randomuser.me/api/portraits/women/6.jpg" },
];

const CourseSection = () => {
  return (
    <section className="bg-[#0f172a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">Our Feature Course</h2>
        </div>

        {/* Course Grid - 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-sm overflow-hidden shadow-2xl group border-b-4 border-transparent hover:border-[#FFD233] transition-all">
              
              {/* Thumbnail Image */}
              <div className="relative h-56 w-full">
                <Image 
                  src={course.img} 
                  alt={course.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized // Domain error theke bachar jonno
                />
                {/* Instructor Avatar */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 border-4 border-white rounded-full overflow-hidden shadow-lg z-10">
                   <img src={course.instructor} alt="instructor" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-10 pb-6 px-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#002147]">{course.price}</span>
                  <div className="flex text-yellow-400 text-xs">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#002147] hover:text-blue-700 cursor-pointer transition">
                  {course.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  Ludus nemore qui ex. Verear luptatum principes sit ad, pri brute dicit volumus.
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