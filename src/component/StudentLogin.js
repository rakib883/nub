"use client";
import { useState } from 'react';
import { FaUserGraduate, FaIdCard, FaLock } from 'react-icons/fa';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [userId, setUserId] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Eikhane login logic thakbe
    console.log("Student ID:", studentId, "User ID:", userId);
    alert("Logging in with ID: " + studentId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Top Header Section */}
        <div className="bg-[#002147] py-8 text-center">
          <div className="bg-[#FFD233] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaUserGraduate className="text-[#002147] text-3xl" />
          </div>
          <h2 className="text-white text-2xl font-bold">Student Portal</h2>
          <p className="text-gray-300 text-sm">Please login to access your dashboard</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          
          {/* Student ID Field */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Student ID</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaIdCard />
              </span>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none transition"
                placeholder="Enter Student ID"
                required
              />
            </div>
          </div>

          {/* User ID / Password Field */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">User ID / Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none transition"
                placeholder="Enter User ID"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD233] hover:bg-[#e6bd2e] text-[#002147] font-bold py-3 rounded-lg shadow-lg transform active:scale-95 transition-all"
          >
            LOGIN NOW
          </button>

          {/* Footer Links */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500 hover:text-[#002147] cursor-pointer">
              Forgot password?
            </p>
            <div className="w-full h-[1px] bg-gray-200 my-4"></div>
            <p className="text-xs text-gray-400 italic">
              Don&apos;t share your login credentials with anyone.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;