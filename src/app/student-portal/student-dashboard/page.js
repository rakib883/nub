"use client";
import React from 'react';
import { 
  FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaGraduationCap, FaBook, FaMoneyBillWave, FaCalendarAlt,
  FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa';

const StudentProfile = () => {
  // Tomar deya data ekhane map kora hoyeche
  const studentData = {
    id: "69ed0e8338b9afde6ad7d38d",
    studentName: "Monir",
    email: "sheikhrakib883@gmail.com",
    mobileNumber: "01728262111",
    lastStudyLevel: "SSC",
    address: "Dhaka, Mohakhali",
    purchaseCourse: "Web Development",
    totalPrice: 200,
    cashPaid: 100,
    dueAmount: 100,
    admissionDate: "2026-04-25"
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Profile Header */}
        <div className="bg-white rounded-t-[2rem] shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-5xl font-bold border-4 border-white shadow-md">
              {studentData.studentName.charAt(0)}
            </div>
            <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-black text-[#011e40] uppercase tracking-tight">
              {studentData.studentName}
            </h1>
            <p className="text-gray-500 font-medium flex items-center justify-center md:justify-start gap-2">
              <FaIdCard className="text-blue-500" /> ID: {studentData.id.slice(-8).toUpperCase()}
            </p>
          </div>

          <div className="bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
             <span className="text-blue-700 font-black text-sm uppercase">Active Student</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {/* Left Column: Personal Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="text-lg font-black text-[#011e40] mb-6 flex items-center gap-2 border-b pb-3">
                <FaUserCircle className="text-blue-500" /> Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <InfoItem icon={<FaEnvelope />} label="Email" value={studentData.email} />
                <InfoItem icon={<FaPhone />} label="Phone" value={studentData.mobileNumber} />
                <InfoItem icon={<FaGraduationCap />} label="Education" value={studentData.lastStudyLevel} />
                <InfoItem icon={<FaCalendarAlt />} label="Joined Date" value={new Date(studentData.admissionDate).toLocaleDateString()} />
                <div className="sm:col-span-2">
                  <InfoItem icon={<FaMapMarkerAlt />} label="Address" value={studentData.address} />
                </div>
              </div>
            </div>

            {/* Course Progress Card */}
            <div className="bg-[#011e40] p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">Enrolled Course</h3>
                  <h2 className="text-2xl font-black mb-4">{studentData.purchaseCourse}</h2>
                  <div className="w-full bg-blue-900/50 rounded-full h-3 mb-2">
                    <div className="bg-[#f1c40f] h-3 rounded-full w-[40%] shadow-[0_0_10px_#f1c40f]"></div>
                  </div>
                  <p className="text-sm font-bold text-blue-200">Course Progress: 40% Complete</p>
               </div>
               <FaBook className="absolute -right-4 -bottom-4 text-white/5 text-9xl rotate-12" />
            </div>
          </div>

          {/* Right Column: Financial Summary */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 h-full">
              <h3 className="text-lg font-black text-[#011e40] mb-6 flex items-center gap-2 border-b pb-3">
                <FaMoneyBillWave className="text-green-500" /> Billing
              </h3>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                  <span className="text-gray-500 text-xs font-black uppercase">Total</span>
                  <span className="font-black text-[#011e40]">৳{studentData.totalPrice}</span>
                </div>
                
                <div className="flex justify-between items-center bg-green-50 p-4 rounded-2xl border border-green-100">
                  <span className="text-green-600 text-xs font-black uppercase flex items-center gap-1">
                    <FaCheckCircle /> Paid
                  </span>
                  <span className="font-black text-green-700">৳{studentData.cashPaid}</span>
                </div>

                <div className="flex justify-between items-center bg-red-50 p-4 rounded-2xl border border-red-100">
                  <span className="text-red-600 text-xs font-black uppercase flex items-center gap-1">
                    <FaExclamationCircle /> Due
                  </span>
                  <span className="font-black text-red-700">৳{studentData.dueAmount}</span>
                </div>

                <button className="w-full bg-[#011e40] text-[#f1c40f] py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-blue-900 transition-all">
                  Pay Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Reusable Info Component
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 text-blue-500">{icon}</div>
    <div>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter leading-none mb-1">{label}</p>
      <p className="text-sm font-bold text-[#011e40] break-words">{value}</p>
    </div>
  </div>
);

// Small Icon for ID
const FaIdCard = ({ className }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5.2c12.3 11.4 28.4 18.4 46.1 18.4 17.6 0 33.8-7 46.1-18.4h5.2c37.1 0 67.2 25.8 67.2 57.6v19.2zM480 352h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-64h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-64h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-64h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
);

export default StudentProfile;