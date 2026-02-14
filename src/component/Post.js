import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: "Write Professional Server-Side Scripting Language Php Code",
    desc: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa. Sagittis urna tellus augue montes.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500",
  },
  {
    id: 2,
    title: "Most Popular Python To Build Desktop Apps And Web Apps",
    desc: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa. Sagittis urna tellus augue montes.",
    img: "https://images.unsplash.com/photo-1523240715639-99a2f05011bb?q=80&w=500",
  },
  {
    id: 3,
    title: "Java Programing Language Use For Apps, Game Develop",
    desc: "Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu, etiam in massa. Sagittis urna tellus augue montes.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500",
  }
];

const LatestPost = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#002147]">Our Latest Post</h2>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden mb-6">
                <Image 
                  src={post.img} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002147] leading-tight hover:text-blue-700 transition">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.desc}
                </p>
                
                {/* Continue Reading Link */}
                <button className="flex items-center text-[#002147] font-bold text-sm group/btn">
                  Continue Reading 
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;