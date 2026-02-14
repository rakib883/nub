"use client";

import NoticeDropdown from "./Notice";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: "url('https://thumbs.dreamstime.com/b/silhouettes-students-graduate-caps-row-sunset-background-graduation-ceremony-university-web-banner-silhouettes-173007714.jpg')"
        }}
        >
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-70"></div>
</div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 md:px-8">
        {/* Left side content */}
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            We Are Right Person For Your <br /> Educations Teaching
          </h1>
          <p className="mb-8 max-w-lg text-sm md:text-base">
            Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec,
            suscipit tortor et sapien donec ac nec. Nam vel eu amet
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded shadow">
              Learn More
            </button>
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded shadow">
              Contact Us
            </button>
          </div>
        </div>
        {/* Right side empty for image visible */}
        <div className="hidden md:block md:w-1/2 text-white">
            <div className="bg-black/40 rounded-xl">
                <p className=" text-center p-4 font-semibold">Emergency Notice Bord</p>
                <div>
                    <NoticeDropdown></NoticeDropdown>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
