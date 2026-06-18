import React from 'react';
import { BottomNav } from '@/components/BottomNav';
import { Card } from '@/components/Card';
import { Calendar, Users, BookOpen, Clock, Bell } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header Profile */}
      <div className="bg-primary-600 text-white p-6 rounded-b-3xl shadow-lg shadow-primary-500/20 relative">
        <div className="absolute top-6 left-6">
          <button className="p-2 bg-primary-500/50 rounded-full hover:bg-primary-500 transition-colors">
            <Bell size={20} />
          </button>
        </div>
        <div className="flex items-center gap-4 mt-8 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <Users size={32} />
          </div>
          <div>
            <p className="text-primary-100 text-sm">مرحباً بك،</p>
            <h1 className="text-2xl font-bold">محمد أحمد</h1>
          </div>
        </div>
        <p className="text-sm text-primary-200 flex items-center gap-1">
          <Clock size={14} /> عضو منذ مايو 2024
        </p>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 space-y-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Calendar className="text-primary-600" size={20} />
          ملخص نشاطك
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Card className="flex flex-col items-center justify-center text-center p-6 border-l-4 border-l-primary-500">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-3">
              <Users size={24} />
            </div>
            <p className="text-2xl font-bold text-slate-800">12</p>
            <p className="text-sm text-slate-500">إجمالي الزيارات</p>
          </Card>
          
          <Card className="flex flex-col items-center justify-center text-center p-6 border-l-4 border-l-indigo-400">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-3">
              <BookOpen size={24} />
            </div>
            <p className="text-2xl font-bold text-slate-800">3</p>
            <p className="text-sm text-slate-500">الدورات المسجلة</p>
          </Card>
        </div>

        <h2 className="text-lg font-bold text-slate-800 mb-4 mt-8 flex items-center gap-2">
          <Clock className="text-primary-600" size={20} />
          آخر زيارة
        </h2>
        <Card className="flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-2xl text-slate-500">
            <Calendar size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">12 مايو 2024</h3>
            <p className="text-sm text-slate-500">10:30 صباحاً</p>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
