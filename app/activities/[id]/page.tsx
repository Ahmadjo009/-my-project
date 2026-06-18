import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { ArrowRight, Calendar, Clock, MapPin, GraduationCap, Info, BookOpen } from 'lucide-react';

export default function ActivityDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, fetch the activity by ID using params.id
  
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6 pt-10 rounded-b-3xl shadow-md relative">
        <div className="flex items-center justify-between mb-6">
          <Link href="/activities" className="p-2 bg-primary-500/50 rounded-full hover:bg-primary-500 transition-colors">
            <ArrowRight size={20} />
          </Link>
          <h1 className="text-xl font-bold">تفاصيل الزيارة</h1>
          <div className="w-9"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-8 relative z-10 space-y-4">
        {/* Date & Time */}
        <div className="flex gap-4">
          <Card className="flex-1 flex items-center justify-center gap-2 p-4 text-slate-700">
            <Calendar className="text-primary-500" size={20} />
            <span className="font-medium text-sm">12 مايو 2024</span>
          </Card>
          <Card className="flex-1 flex items-center justify-center gap-2 p-4 text-slate-700">
            <Clock className="text-primary-500" size={20} />
            <span className="font-medium text-sm">10:30 صباحاً</span>
          </Card>
        </div>

        {/* Details Card */}
        <Card className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
              <Info size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">نوع النشاط</p>
              <h2 className="font-bold text-slate-800">حضور دورة</h2>
            </div>
          </div>

          <div className="w-full h-px bg-slate-100"></div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-50 text-purple-500 rounded-2xl">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">اسم الدورة</p>
              <h2 className="font-bold text-slate-800">أساسيات الذكاء الاصطناعي</h2>
            </div>
          </div>

          <div className="w-full h-px bg-slate-100"></div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">وصف الدورة</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                دورة تمهيدية للتعرف على مفاهيم الذكاء الاصطناعي وتطبيقاته المختلفة في الحياة العملية وكيفية الاستفادة منه في مجالات العمل المختلفة.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-slate-100"></div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">المكان</p>
              <h2 className="font-bold text-slate-800">قاعة التدريب - الطابق الثاني</h2>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

