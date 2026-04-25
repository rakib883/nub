"use client";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FaUserGraduate, FaIdCard, FaLock } from 'react-icons/fa';

const StudentLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Verifying credentials...");

    try {
      const res = await fetch('http://localhost:3000/api/student-login', { // 👈 Relative path use kora best
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Login Successful! 🚀", { id: toastId });

        console.log(data)
        
        // Student info localStorage-e save rakha jay (Optional)
        localStorage.setItem("student", JSON.stringify(data.student));

        // Redirect to dashboard
        router.push("/student-portal/student-dashboard");
        router.refresh();
      } else {
        toast.error(data.message || "Invalid credentials", { id: toastId });
      }
    } catch (error) {
      toast.error("Network Error! Try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 font-sans">
      <Toaster position="top-center" />
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-[#002147] py-10 text-center">
          <div className="bg-[#FFD233] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaUserGraduate className="text-[#002147] text-3xl" />
          </div>
          <h2 className="text-white text-2xl font-black uppercase tracking-tight">Student Portal</h2>
          <p className="text-blue-200 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div>
            <label className="block text-gray-600 text-xs font-black uppercase mb-2 ml-1">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                <FaIdCard />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#FFD233] focus:bg-white outline-none transition-all font-bold text-[#002147]"
                placeholder="example@mail.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-xs font-black uppercase mb-2 ml-1">Password (Mobile No)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#FFD233] focus:bg-white outline-none transition-all font-bold text-[#002147]"
                placeholder="017XXXXXXXX"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#002147] hover:bg-[#003366] text-[#FFD233] font-black py-4 rounded-xl shadow-xl transform active:scale-95 transition-all disabled:opacity-50 uppercase tracking-widest"
          >
            {loading ? "Verifying..." : "Login Now"}
          </button>

          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 italic">
              Use your admission email and mobile number to login.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;