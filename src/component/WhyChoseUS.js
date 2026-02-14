import Image from 'next/image';

const features = [
  {
    id: 1,
    title: "Expert Instructor",
    desc: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque.",
    img: "https://images.unsplash.com/photo-1523240715639-99a2f05011bb?q=80&w=500",
    icon: (
      <svg className="w-8 h-8 text-[#002147]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Group Teaching",
    desc: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500",
    icon: (
      <svg className="w-8 h-8 text-[#002147]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Warm Environment",
    desc: "Timeam nusquam usu ut, civibus fabellas eleifend eu vis. Id ipsum civibus pri, te ignota dignissim mel, iisque recteque.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500",
    icon: (
      <svg className="w-8 h-8 text-[#002147]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#002147]">Why Choose Our Course</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.id} className="bg-white rounded-sm shadow-md overflow-hidden group">
              {/* Top Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content with Icon */}
              <div className="relative pt-12 pb-8 px-6 text-center">
                {/* Floating Icon */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-100 shadow-lg z-10">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#002147] mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;