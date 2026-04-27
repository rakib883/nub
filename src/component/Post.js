"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const LatestPost = () => {
  const [posts, setPosts] = useState([]); // ডাটা রাখার জন্য স্টেট
  const [loading, setLoading] = useState(true); // লোডিং স্টেট

  // এপিআই থেকে ডাটা ফেচ করার ফাংশন
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://nub-bakend.vercel.app/api/all-posts');
      const result = await response.json();
      
      if (result.success) {
        // ডাটাবেস থেকে আসা ডাটা সেট করা
        setPosts(result.data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // যদি ডাটা লোড হতে সময় নেয়
  if (loading) {
    return (
      <div className="py-20 text-center font-bold text-[#002147] animate-pulse">
        Loading Latest Posts...
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10 border-b-2 border-gray-100 pb-4">
          <h2 className="text-3xl font-bold text-[#002147]">Our Latest Post</h2>
          <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Total {posts.length} Posts
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="group cursor-pointer flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden mb-6 rounded-lg shadow-sm">
                  <Image 
                    src={post.imageLink || "https://via.placeholder.com/500x300?text=No+Image"} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Overlay for aesthetic look */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow space-y-4">
                  <h3 className="text-xl font-bold text-[#002147] leading-tight hover:text-blue-700 transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  
                  {/* Push button to the bottom */}
                  <div className="mt-auto pt-2">
                    <button className="flex items-center text-[#002147] font-bold text-sm group/btn hover:text-blue-600 transition-colors">
                      Continue Reading 
                      <span className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-400">
              No posts found at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;