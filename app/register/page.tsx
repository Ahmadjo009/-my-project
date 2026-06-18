"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stepper } from '@/components/Stepper';
import { Button } from '@/components/Button';
import { Input, Select } from '@/components/Input';
import { ArrowRight, ArrowLeft, Building2, User, CalendarDays, Users, Globe, Phone, MapPin, GraduationCap, BookOpen, Fingerprint, FileText, HelpCircle } from 'lucide-react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  
  const totalSteps = 4;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/success');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 relative overflow-hidden bg-[#1e1b4b]">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Wavy SVGs for background */}
        <svg className="absolute bottom-0 w-full h-[50vh] opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#4f46e5" fillOpacity="0.2" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-[40vh] opacity-70" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="0.2" d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,138.7C840,117,960,107,1080,122.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="z-10 w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        
        {/* Top Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 p-[2px] shadow-[0_0_20px_rgba(79,70,229,0.5)]">
            <div className="w-full h-full rounded-full bg-[#1e1b4b]/50 backdrop-blur-md flex items-center justify-center">
              <Building2 size={24} className="text-white" strokeWidth={2} />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-black text-[#1e1b4b] text-center mb-8 drop-shadow-sm">إنشاء عضوية جديدة</h1>
        
        <Stepper currentStep={step} totalSteps={totalSteps} />

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-center gap-2 mb-6">
                <User size={20} className="text-indigo-600" />
                <h2 className="text-lg font-bold text-indigo-800">البيانات الشخصية</h2>
              </div>
              <Input label="الاسم الكامل" icon={<User size={18} />} placeholder="أدخل اسمك الكامل" required />
              <Input label="العمر" type="number" icon={<CalendarDays size={18} />} placeholder="أدخل عمرك" required />
              <Select 
                label="الجنس" 
                icon={<Users size={18} />}
                options={[
                  { value: 'male', label: 'ذكر' },
                  { value: 'female', label: 'أنثى' }
                ]} 
                required 
              />
              <Select 
                label="الجنسية" 
                icon={<Globe size={18} />}
                options={[
                  { value: 'saudi', label: 'سعودي' },
                  { value: 'other', label: 'أخرى' }
                ]} 
                required 
              />
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Phone size={20} className="text-indigo-600" />
                <h2 className="text-lg font-bold text-indigo-800">معلومات التواصل</h2>
              </div>
              <Input label="رقم الهاتف" type="tel" icon={<Phone size={18} />} placeholder="05XXXXXXXX" dir="ltr" className="text-right" required />
              <Input label="العنوان" icon={<MapPin size={18} />} placeholder="أدخل عنوانك الحالي" required />
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-center gap-2 mb-6">
                <GraduationCap size={20} className="text-indigo-600" />
                <h2 className="text-lg font-bold text-indigo-800">المعلومات الأكاديمية</h2>
              </div>
              <Select 
                label="المستوى التعليمي" 
                icon={<GraduationCap size={18} />}
                options={[
                  { value: 'highschool', label: 'ثانوي' },
                  { value: 'bachelor', label: 'بكالوريوس' },
                  { value: 'master', label: 'ماجستير' }
                ]} 
                required 
              />
              <Input label="التخصص" icon={<BookOpen size={18} />} placeholder="تخصصك الدراسي" required />
              <Input label="الرقم الوطني" icon={<Fingerprint size={18} />} placeholder="أدخل الرقم الوطني" required />
              
              <div className="mb-4">
                <label className="block text-[#1e1b4b] text-sm font-bold mb-2 text-right">صورة الهوية</label>
                <div className="border-2 border-dashed border-white/50 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-600 bg-white/30 backdrop-blur-sm cursor-pointer hover:bg-white/40 transition-colors">
                  <FileText size={24} className="mb-2 text-indigo-500" />
                  <span className="text-sm font-medium">اضغط لرفع صورة الهوية</span>
                  <input type="file" className="hidden" />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-center gap-2 mb-6">
                <HelpCircle size={20} className="text-indigo-600" />
                <h2 className="text-lg font-bold text-indigo-800">سبب الزيارة</h2>
              </div>
              <Select 
                label="السبب" 
                icon={<HelpCircle size={18} />}
                options={[
                  { value: 'course', label: 'دورة' },
                  { value: 'study', label: 'دراسة' },
                  { value: 'inquiry', label: 'استفسار' }
                ]} 
                required 
              />
              <div className="mb-4">
                <label className="block text-[#1e1b4b] text-sm font-bold mb-2 text-right">ملاحظات (اختياري)</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80 transition-all resize-none h-24 text-slate-700 placeholder-slate-400"
                  placeholder="أي ملاحظات إضافية..."
                ></textarea>
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button 
                type="button" 
                onClick={prevStep} 
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white/50 hover:bg-white/70 text-indigo-800 font-bold backdrop-blur-sm border border-white/50 transition-all active:scale-95 shadow-sm"
              >
                <ArrowRight size={20} />
                السابق
              </button>
            )}
            
            {step < totalSteps ? (
              <button 
                type="button" 
                onClick={nextStep} 
                className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-6 rounded-2xl shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all transform active:scale-95"
              >
                التالي
                <ArrowLeft size={20} />
              </button>
            ) : (
              <button 
                type="submit" 
                className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-4 px-6 rounded-2xl shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform active:scale-95"
              >
                إرسال
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
