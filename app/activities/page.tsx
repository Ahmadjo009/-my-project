"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { Card } from '@/components/Card';
import { BookOpen, Calendar, GraduationCap } from 'lucide-react';

const mockActivities = [
  { id: 1, type: 'course', title: 'أساسيات الذكاء الاصطناعي', date: '12 مايو 2024', time: '10:30 صباحاً', icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 2, type: 'study', title: 'المكتبة والمصادر', date: '26 أبريل 2024', time: '01:00 مساءً', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 3, type: 'course', title: 'مهارات التفكير الإبداعي', date: '15 أبريل 2024', time: '09:00 صباحاً', icon: GraduationCap, color: 'text-purple-500', bg: 'bg-purple-50' },
];

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredActivities = mockActivities.filter(activity => {
    if (activeTab === 'all') return true;
    return activity.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6 pt-10 rounded-b-3xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">زياراتي وأنشطتي</h1>
        
        {/* Tabs */}
        <div className="flex bg-primary-700/50 p-1 rounded-2xl">
          <button 
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${activeTab === 'all' ? 'bg-white text-primary-600 shadow-sm' : 'text-primary-100 hover:text-white'}`}
            onClick={() => setActiveTab('all')}
          >
            الكل
          </button>
          <button 
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${activeTab === 'course' ? 'bg-white text-primary-600 shadow-sm' : 'text-primary-100 hover:text-white'}`}
            onClick={() => setActiveTab('course')}
          >
            الدورات
          </button>
          <button 
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${activeTab === 'study' ? 'bg-white text-primary-600 shadow-sm' : 'text-primary-100 hover:text-white'}`}
            onClick={() => setActiveTab('study')}
          >
            الدراسة
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 space-y-4">
        {filteredActivities.map((activity) => (
          <Link href={`/activities/${activity.id}`} key={activity.id} className="block">
            <Card className="flex items-center gap-4 hover:border-primary-200 transition-colors active:scale-[0.98]">
              <div className={`w-14 h-14 ${activity.bg} ${activity.color} rounded-2xl flex items-center justify-center shrink-0`}>
                <activity.icon size={28} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-primary-600 font-medium mb-1">
                  {activity.type === 'course' ? 'حضور دورة' : 'دراسة'}
                </p>
                <h3 className="font-bold text-slate-800 mb-1">{activity.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {activity.date}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
