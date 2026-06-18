"use client";

import React from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Calendar, Shield, LogOut, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const profileInfo = [
    { icon: <User size={20} />, label: 'الاسم الكامل', value: 'محمد أحمد' },
    { icon: <Mail size={20} />, label: 'البريد الإلكتروني', value: 'mohammed@example.com' },
    { icon: <Phone size={20} />, label: 'رقم الهاتف', value: '0512345678' },
    { icon: <MapPin size={20} />, label: 'العنوان', value: 'الرياض، المملكة العربية السعودية' },
    { icon: <GraduationCap size={20} />, label: 'المستوى التعليمي', value: 'بكالوريوس' },
    { icon: <Calendar size={20} />, label: 'تاريخ التسجيل', value: 'مايو 2024' },
  ];

  return (
    <div className="min-h-screen bg-[#1e1b4b] relative overflow-hidden pb-24">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/25 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/25 blur-[120px]"></div>
        <svg className="absolute bottom-0 w-full h-[45vh] opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#4f46e5" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 pt-12 pb-6">
        <h1 className="text-2xl font-black text-white text-right mb-8">حسابي</h1>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px] shadow-[0_0_30px_rgba(79,70,229,0.6)]">
              <div className="w-full h-full rounded-full bg-[#1e1b4b]/60 backdrop-blur-md flex items-center justify-center border border-white/20">
                <User size={40} className="text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="absolute bottom-1 left-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#1e1b4b]"></div>
          </div>
          <h2 className="text-xl font-black text-white">محمد أحمد</h2>
          <div className="flex items-center gap-1 mt-1 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full">
            <Shield size={12} className="text-indigo-300" />
            <span className="text-indigo-300 text-xs font-medium">عضو نشط</span>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="relative z-10 px-6 space-y-3">
        {profileInfo.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/15 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 text-right">
              <p className="text-blue-200/60 text-xs mb-0.5">{item.label}</p>
              <p className="text-white font-bold text-sm">{item.value}</p>
            </div>
          </div>
        ))}

        {/* Membership Number */}
        <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4 mt-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
            <Shield size={20} />
          </div>
          <div className="flex-1 text-right">
            <p className="text-blue-200/60 text-xs mb-0.5">رقم العضوية</p>
            <p className="text-white font-black text-xl tracking-widest">830442</p>
          </div>
        </div>

        {/* Logout Button */}
        <Link href="/" className="block mt-6">
          <div className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-red-500/10 border border-red-400/30 text-red-300 hover:bg-red-500/20 transition-colors font-bold">
            <LogOut size={20} />
            <span>تسجيل الخروج</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
