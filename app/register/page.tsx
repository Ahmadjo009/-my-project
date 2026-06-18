"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stepper } from '@/components/Stepper';
import { Button } from '@/components/Button';
import { Input, Select } from '@/components/Input';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  
  const totalSteps = 4;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission to Supabase here
    router.push('/success');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">إنشاء عضوية جديدة</h1>
        
        <Stepper currentStep={step} totalSteps={totalSteps} />

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold text-slate-700 mb-4 text-center">البيانات الشخصية</h2>
              <Input label="الاسم الكامل" placeholder="أدخل اسمك الكامل" required />
              <Input label="العمر" type="number" placeholder="أدخل عمرك" required />
              <Select 
                label="الجنس" 
                options={[
                  { value: 'male', label: 'ذكر' },
                  { value: 'female', label: 'أنثى' }
                ]} 
                required 
              />
              <Select 
                label="الجنسية" 
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
              <h2 className="text-lg font-semibold text-slate-700 mb-4 text-center">معلومات التواصل</h2>
              <Input label="رقم الهاتف" type="tel" placeholder="05XXXXXXXX" dir="ltr" className="text-right" required />
              <Input label="العنوان" placeholder="أدخل عنوانك الحالي" required />
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold text-slate-700 mb-4 text-center">المعلومات الأكاديمية</h2>
              <Select 
                label="المستوى التعليمي" 
                options={[
                  { value: 'highschool', label: 'ثانوي' },
                  { value: 'bachelor', label: 'بكالوريوس' },
                  { value: 'master', label: 'ماجستير' }
                ]} 
                required 
              />
              <Input label="التخصص" placeholder="تخصصك الدراسي" required />
              <Input label="الرقم الوطني" placeholder="أدخل الرقم الوطني" required />
              
              <div className="mb-4">
                <label className="block text-slate-700 text-sm font-bold mb-2">صورة الهوية</label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-500 bg-slate-50">
                  <span className="text-sm mb-2">اضغط لرفع صورة الهوية</span>
                  <input type="file" className="hidden" />
                  <Button variant="secondary" type="button" className="py-2 px-4 text-sm mt-2">اختيار ملف</Button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-semibold text-slate-700 mb-4 text-center">سبب الزيارة</h2>
              <Select 
                label="السبب" 
                options={[
                  { value: 'course', label: 'دورة' },
                  { value: 'study', label: 'دراسة' },
                  { value: 'inquiry', label: 'استفسار' }
                ]} 
                required 
              />
              <div className="mb-4">
                <label className="block text-slate-700 text-sm font-bold mb-2">ملاحظات (اختياري)</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none h-24"
                  placeholder="أي ملاحظات إضافية..."
                ></textarea>
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button type="button" variant="secondary" onClick={prevStep} className="flex-1">
                <ArrowRight size={20} />
                السابق
              </Button>
            )}
            
            {step < totalSteps ? (
              <Button type="button" onClick={nextStep} className="flex-1">
                التالي
                <ArrowLeft size={20} />
              </Button>
            ) : (
              <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 shadow-green-500/30">
                إرسال
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
