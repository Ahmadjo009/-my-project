import React from 'react';
import Link from 'next/link';
import { Calendar, Users, BookOpen, Clock, Bell, ChevronLeft } from 'lucide-react';

export default function DashboardPage() {
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
        <div className="flex items-center justify-between mb-8">
          <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Bell size={20} />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            م
          </div>
        </div>

        {/* User Info */}
        <div className="text-right">
          <p className="text-blue-200/70 text-sm mb-1">مرحباً بك،</p>
          <h1 className="text-3xl font-black text-white mb-2">محمد أحمد</h1>
          <div className="flex items-center justify-end gap-1 text-blue-200/60 text-sm">
            <span>عضو منذ مايو 2024</span>
            <Clock size={14} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 space-y-6">

        {/* Activity Summary */}
        <div>
          <div className="flex items-center justify-end gap-2 mb-4">
            <h2 className="text-lg font-bold text-white">ملخص نشاطك</h2>
            <Calendar className="text-indigo-300" size={20} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] border-t-2 border-t-blue-400/60 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center mb-3 text-blue-300">
                <Users size={24} />
              </div>
              <p className="text-3xl font-black text-white mb-1">12</p>
              <p className="text-xs text-blue-200/70">إجمالي الزيارات</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] border-t-2 border-t-purple-400/60 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-400/30 rounded-2xl flex items-center justify-center mb-3 text-purple-300">
                <BookOpen size={24} />
              </div>
              <p className="text-3xl font-black text-white mb-1">3</p>
              <p className="text-xs text-blue-200/70">الدورات المسجلة</p>
            </div>
          </div>
        </div>

        {/* Last Visit */}
        <div>
          <div className="flex items-center justify-end gap-2 mb-4">
            <h2 className="text-lg font-bold text-white">آخر زيارة</h2>
            <Clock className="text-indigo-300" size={20} />
          </div>

          <Link href="/activities" className="block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 flex items-center gap-4 hover:bg-white/15 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <ChevronLeft size={20} className="text-blue-300 shrink-0" />
              <div className="flex-1 text-right">
                <h3 className="font-bold text-white">12 مايو 2024</h3>
                <p className="text-sm text-blue-200/70">10:30 صباحاً</p>
              </div>
              <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-400/30 rounded-2xl flex items-center justify-center text-indigo-300 shrink-0">
                <Calendar size={22} />
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
