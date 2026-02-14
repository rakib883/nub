"use client";
import { useState } from 'react';
import Image from 'next/image';

const WelcomeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Eikhane apnar YouTube video-r EMBED link-ta din
  const youtubeVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147]">
              Welcome To Our Learapress
            </h2>
            <div className="w-16 h-1 bg-[#FFD233]"></div>
          </div>

          <div className="text-gray-600 space-y-4">
            <p>
              Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat 
              ullamcorper odio augue eleifend, consequat enim ullamcorper magnis dignissim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus.
            </p>
          </div>

          <button className="bg-[#FFD233] hover:bg-[#e6bd2e] text-black font-bold py-3 px-8 flex items-center transition-all shadow-md">
            Read More <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Side: Image with Play Button */}
        <div className="w-full md:w-1/2 relative group">
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-md shadow-xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" // Sample Image
              alt="Course Video Thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-16 h-16 md:w-20 md:h-20 bg-[#FFD233] rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shadow-2xl group/play"
              >
                <div className="w-0 h-0 border-t-[10px] md:border-t-[14px] border-t-transparent border-l-[18px] md:border-l-[24px] border-l-white border-b-[10px] md:border-b-[14px] border-b-transparent ml-2"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- YouTube Video Modal (Popup) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300">
          
          {/* Close Overlay Click */}
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>

          {/* Video Container */}
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl z-10">
            {/* Close Button "X" */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-[#FFD233] transition-colors"
            >
              ✕ Close
            </button>

            <iframe
              width="100%"
              height="100%"
              src={isModalOpen ? youtubeVideoUrl : ""}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="border-none"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default WelcomeSection;