"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ShieldCheck, LogIn, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    login(email);
    
    // Redirect based on role
    if (email.toLowerCase() === 'sedainjaz@gmail.com' || email.includes('admin')) {
      router.push('/admin');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#1e1b4b] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="z-10 w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-center">
        
        <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(79,70,229,0.5)]">
          <ShieldCheck size={40} className="text-white drop-shadow-md" />
        </div>

        <h1 className="text-3xl font-black text-white mb-2">تسجيل الدخول</h1>
        <p className="text-blue-100/80 mb-8 text-sm">قم بتسجيل الدخول لتجربة صلاحيات المالك والمدير</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-indigo-300">
              <Mail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل البريد الإلكتروني..."
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-blue-200/50 transition-all text-right"
              required
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-blue-200/80 text-right space-y-2">
            <p><strong className="text-emerald-400">للتجربة كـ أونر:</strong> استخدم <code>sedainjaz@gmail.com</code></p>
            <p><strong className="text-blue-400">للتجربة كـ أدمن:</strong> استخدم أي إيميل يحتوي كلمة <code>admin</code></p>
            <p><strong className="text-slate-400">للتجربة كـ مستخدم:</strong> أي إيميل آخر</p>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-2xl transition-all transform active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          >
            <LogIn size={20} />
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}
