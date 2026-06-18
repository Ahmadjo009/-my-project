"use client";

import React from 'react';
import { Users, UserCheck, CalendarDays, Activity } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { title: 'إجمالي الزوار', value: '1,248', icon: <Users size={24} />, color: 'bg-blue-500', bg: 'bg-blue-50' },
    { title: 'الزوار النشطين', value: '42', icon: <UserCheck size={24} />, color: 'bg-emerald-500', bg: 'bg-emerald-50' },
    { title: 'الزيارات اليوم', value: '156', icon: <CalendarDays size={24} />, color: 'bg-purple-500', bg: 'bg-purple-50' },
    { title: 'الأنشطة المتاحة', value: '12', icon: <Activity size={24} />, color: 'bg-orange-500', bg: 'bg-orange-50' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">نظرة عامة</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${stat.color} shadow-lg`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">أحدث النشاطات</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                ز
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-800 text-sm">زائر جديد قام بالتسجيل</p>
                <p className="text-xs text-slate-500">منذ {i * 15} دقيقة</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
