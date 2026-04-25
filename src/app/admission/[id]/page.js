"use client";
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'; // ✅ useEffect add kora hoyeche
import { 
  FaUser, FaEnvelope, FaPhone, FaGraduationCap, 
  FaMapMarkerAlt, FaBook, FaMoneyBillWave, FaUserGraduation 
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast'; // ✅ Toast notification er jonno

export default function StudentAdmissionForm() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(false);
  const [fetchingCourse, setFetchingCourse] = useState(true); // ✅ Course loading state

  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    mobileNumber: '',
    lastStudyLevel: '',
    address: '',
    purchaseCourse: '', // API theke ashbe
    totalPrice: '',     // API theke ashbe
    cashPaid: '',
    dueAmount: 0
  });

  // --- DATABASE THEKE DATA ANAR LOGIC ---
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        // ✅ Tomar course fetch API (Single course ID diye hole valo, na hole sob gula theke filter)
        const res = await fetch(`https://nub-bakend.vercel.app/api/all-course`);
        const result = await res.json();

        if (result.success) {
          // URL er ID er sathe database er ID match kora
          const selectedCourse = result.data.find(course => course._id === id);

          if (selectedCourse) {
            setFormData(prev => ({
              ...prev,
              purchaseCourse: selectedCourse.courseName,
              totalPrice: selectedCourse.price,
              dueAmount: selectedCourse.price // Initially due full price thakbe
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching course:", error);
        toast.error("Course data load hotey somossa hoyeche!");
      } finally {
        setFetchingCourse(false);
      }
    };

    if (id) fetchCourseData();
  }, [id]);

  // Price change hole auto due calculate hobe
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    
    if (name === 'cashPaid') {
      const total = parseFloat(formData.totalPrice) || 0;
      const paid = parseFloat(value) || 0;
      updatedData.dueAmount = total - paid;
    }
    
    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('https://nub-bakend.vercel.app/api/student-reg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success) toast.success("Admission Successful! 🚀");
    } catch (error) {
      toast.error("Admission failed!");
    } finally {
      setLoading(false);
    }
  };

  if (fetchingCourse) return <div className="h-screen flex items-center justify-center font-black animate-pulse">Fetching Course Details...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster />
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="bg-[#011e40] p-10 text-center">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3">
            Student Admission
          </h2>
          <p className="text-[#f1c40f] mt-2 font-black uppercase">Course: {formData.purchaseCourse}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2"><FaUser className="text-blue-500" /> Student Name</label>
            <input name="studentName" onChange={handlePriceChange} type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none font-bold" required />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2"><FaEnvelope className="text-blue-500" /> Email</label>
            <input name="email" onChange={handlePriceChange} type="email" placeholder="Email" className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none font-bold" required />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2"><FaPhone className="text-blue-500" /> Mobile</label>
            <input name="mobileNumber" onChange={handlePriceChange} type="text" placeholder="Mobile" className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none font-bold" required />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2"><FaGraduationCap className="text-blue-500" /> Education</label>
            <select name="lastStudyLevel" onChange={handlePriceChange} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl font-bold" required>
              <option value="">Select Level</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Honours">Honours</option>
            </select>
          </div>

          {/* ✅ DYNAMICALLY FILLED COURSE NAME (ReadOnly) */}
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2"><FaBook className="text-blue-500" /> Selected Course</label>
            <input 
              name="purchaseCourse" 
              value={formData.purchaseCourse} 
              readOnly 
              className="w-full px-5 py-4 bg-gray-100 border-2 border-gray-200 rounded-2xl font-black text-[#011e40] cursor-not-allowed" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-2"><FaMapMarkerAlt className="text-blue-500" /> Address</label>
            <input name="address" onChange={handlePriceChange} type="text" placeholder="Address" className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl font-bold" required />
          </div>

          {/* ✅ DYNAMIC PRICING SECTION */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-50 p-6 rounded-[2rem] border border-blue-100 mt-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-blue-600 uppercase">Total Price (৳)</label>
              <input value={formData.totalPrice} readOnly className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl font-black text-[#011e40]" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-green-600 uppercase">Cash Paid (৳)</label>
              <input name="cashPaid" onChange={handlePriceChange} type="number" placeholder="2000" className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl outline-none font-black text-green-600" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-red-600 uppercase">Due Amount (৳)</label>
              <input value={formData.dueAmount} readOnly type="number" className="w-full px-4 py-3 bg-red-50 border border-red-100 rounded-xl font-black text-red-600" />
            </div>
          </div>

          <div className="md:col-span-2 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl mb-4">
            <div className="flex items-start gap-3">
                <div className="bg-amber-500 p-2 rounded-full text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <div>
                <h4 className="text-amber-800 font-black text-sm uppercase tracking-wide">Login Credentials</h4>
                <p className="text-amber-700 text-xs mt-1 font-medium leading-relaxed">
                    After confirmation, use your <span className="font-black underline">Email</span> as username and your <span className="font-black underline">Mobile Number</span> as your password to access the student dashboard.
                </p>
                </div>
            </div>
            </div>

          <div className="md:col-span-2 pt-6">
            <button type="submit" disabled={loading} className="w-full bg-[#011e40] py-5 rounded-2xl font-black text-[#f1c40f] shadow-xl hover:bg-[#023066] transition-all uppercase flex items-center justify-center gap-3 disabled:opacity-50">
              {loading ? "Processing..." : "Confirm Admission"} <FaCircleCheck />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}