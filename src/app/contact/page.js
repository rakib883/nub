'use client';
import React from 'react';
// React Icons v5.5.0 imports
import { FaMapLocationDot, FaEnvelopeOpenText, FaClock, FaPaperPlane } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Banner Section */}
      <div 
        className="relative h-[250px] md:h-[350px] w-full flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1350&q=80')" 
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">Contact Us</h1>
          <nav className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
            <span className="hover:text-yellow-400 cursor-pointer transition">Home</span> 
            <span className="text-yellow-400">/</span> 
            <span className="text-yellow-400">Contact Us</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Map & Info (60% width on Desktop) */}
          <div className="lg:w-3/5 space-y-12">
            {/* Google Map Iframe */}
            <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-50">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.33089458!2d-118.32866140!3d34.05223420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75dd41d6247%3A0x6a304895c1c0800c!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
                <FaMapLocationDot className="text-blue-900 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2 text-gray-800">Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">California, United States</p>
              </div>

              <div className="group p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
                <FaEnvelopeOpenText className="text-blue-900 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2 text-gray-800">E-Mail</h4>
                <p className="text-gray-600 text-sm">info@company.com</p>
                <p className="text-gray-600 text-sm">support@mail.com</p>
              </div>

              <div className="group p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
                <FaClock className="text-blue-900 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2 text-gray-800">Office Time</h4>
                <p className="text-gray-600 text-sm">Mon-Thu: 9am-4pm</p>
                <p className="text-gray-600 text-sm text-red-500 font-medium">Fri-Sun: Holiday</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (40% width on Desktop) */}
          <div className="lg:w-2/5">
            <div className="sticky top-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Send Your Message</h2>
              <div className="w-16 h-1.5 bg-yellow-400 mb-10 rounded-full"></div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">First Name</label>
                    <input type="text" placeholder="John" className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-lg focus:border-yellow-400 outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-lg focus:border-yellow-400 outline-none transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Phone</label>
                    <input type="tel" placeholder="+1 234..." className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-lg focus:border-yellow-400 outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-lg focus:border-yellow-400 outline-none transition-all" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Message</label>
                  <textarea rows={5} placeholder="Tell us more about your inquiry..." className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-lg focus:border-yellow-400 outline-none transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-yellow-400 hover:bg-gray-900 hover:text-white text-gray-900 font-black py-4 px-12 rounded-lg shadow-[0_10px_20px_rgba(250,204,21,0.2)] hover:shadow-none transition-all duration-300"
                >
                  SEND NOW
                  <FaPaperPlane className="text-sm" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;