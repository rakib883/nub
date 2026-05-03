"use client";

import { useEffect, useRef, useState } from "react";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]); // এপিআই থেকে আসা নোটিশগুলো এখানে থাকবে
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // ১. এপিআই থেকে নোটিশ ফেচ করা
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("https://nub-bakend.vercel.app/api/all-notice");
        const result = await res.json();
        if (result.success) {
          setNotices(result.data); // ডেটাবেস থেকে পাওয়া নোটিশ সেট করা
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  // ২. অটো-স্ক্রলিং অ্যানিমেশন লজিক
  useEffect(() => {
    const container = containerRef.current;
    if (!container || notices.length === 0) return;

    let scrollTop = container.scrollTop;
    const scrollSpeed = 0.5; // স্ক্রল স্পিড একটু কমানো হয়েছে যাতে পড়তে সুবিধা হয়

    const scroll = () => {
      if (!isHovered && container) {
        scrollTop += scrollSpeed;
        
        // যখন লিস্টের অর্ধেক স্ক্রল হয়ে যাবে, তখন আবার শুরুতে ফিরে যাবে (Infinite effect)
        if (scrollTop >= container.scrollHeight / 2) {
          scrollTop = 0;
        }
        container.scrollTop = scrollTop;
      }
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    animationFrameId.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isHovered, notices]); // নোটিশ লোড হওয়ার পর অ্যানিমেশন শুরু হবে

  return (
    <div
      ref={containerRef}
      className="h-64 overflow-hidden border border-gray-100 rounded-2xl bg-gray-50/50 p-4 scrollbar-none shadow-inner"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col space-y-3 cursor-pointer">
        {notices.length > 0 ? (
          // নোটিশগুলোকে ডাবল করা হয়েছে যাতে স্ক্রলিং স্মুথ এবং ইনফিনিট মনে হয়
          [...notices, ...notices].map((notice, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 rounded-xl shadow-sm text-gray-800 font-bold border-l-4 border-[#f1c40f] hover:bg-blue-50 transition-colors"
            >
              {notice.title} {/* আপনার মডেল অনুযায়ী 'title' ব্যবহার করা হয়েছে */}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 py-10 font-bold">
            Loading Notices...
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;