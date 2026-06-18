"use client";

import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

export default function SuccessPage() {
  const membershipId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#1e1b4b]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse delay-1000"></div>
        {/* Wavy SVGs */}
        <svg className="absolute bottom-0 w-full h-[50vh] opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#4f46e5" fillOpacity="0.2" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-[40vh] opacity-70" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="0.2" d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,138.7C840,117,960,107,1080,122.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-[25%] left-[15%] w-3 h-3 bg-white/30 rounded-full blur-[1px] animate-bounce"></div>
      <div className="absolute top-[35%] right-[20%] w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[35%] left-[10%] w-4 h-4 bg-purple-300/30 rounded-full blur-[2px] animate-bounce delay-700"></div>

      {/* Glassmorphism Card */}
      <div className="z-10 w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] bg-white/15 backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-center animate-in zoom-in-95 duration-500">

        {/* Success Icon */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-full bg-white/20 blur-md scale-110 animate-pulse"></div>
          <div className="relative w-24 h-24 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <svg className="w-12 h-12 text-emerald-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 drop-shadow-sm">
          تم تسجيل بياناتك بنجاح!
        </h1>
        <p className="text-blue-100/80 text-sm sm:text-base mb-8 leading-relaxed">
          تم إنشاء عضويتك بنجاح، بمكنك الآن متابعة أنشطتك في المركز.
        </p>

        {/* Membership Card */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-blue-200 shrink-0">
            <User size={24} />
          </div>
          <div className="text-right flex-1">
            <p className="text-blue-200/80 text-sm mb-1">رقم العضوية</p>
            <p className="text-3xl font-black text-white tracking-widest drop-shadow-md">
              {membershipId}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 text-lg">الانتقال إلى صفحتي</span>
          <ArrowLeft size={22} className="relative z-10 group-hover:-translate-x-1 transition-transform" />
        </Link>

      </div>
    </div>
  );
}
