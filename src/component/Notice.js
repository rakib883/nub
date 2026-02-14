"use client";

import { useEffect, useRef, useState } from "react";

const NoticeBoard = () => {
  const notices = [
    "Notice 1: Meeting at 10 AM",
    "Notice 2: Exam Schedule Released",
    "Notice 3: Holiday Announcement",
    "Notice 4: New Course Registration",
    "Notice 5: Sports Day Event",
    "Notice 6: Library Closed on Friday",
    "Notice 7: New Course Available",
    "Notice 8: Exam Result Published",
    "Notice 9: Workshop on AI",
    "Notice 10: Holiday on Monday",
  ];

  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let scrollTop = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (!isHovered && container) {
        scrollTop += scrollSpeed;
        if (scrollTop >= container.scrollHeight / 2) {
          scrollTop = 0;
        }
        container.scrollTop = scrollTop;
      }
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    animationFrameId.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="h-48 overflow-hidden border border-gray-300 rounded-md bg-gray-50 p-4 scrollbar-none"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col space-y-3 cursor-pointer">
        {[...notices, ...notices].map((notice, idx) => (
          <div key={idx} className="bg-white p-3 rounded-b-md shadow text-gray-800">
            {notice}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
