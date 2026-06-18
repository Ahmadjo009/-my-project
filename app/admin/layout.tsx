"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { LayoutDashboard, Users, UserCog, LogOut, ShieldCheck, ShieldAlert } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isOwner, isAdmin, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Protected Route Logic
    if (!user) {
      router.push('/login');
    } else if (!isAdmin) {
      router.push('/dashboard');
    }
  }, [user, isAdmin, router]);

  if (!isAdmin) return null; // Prevent flash of content

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const navItems = [
    { name: 'الرئيسية', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'إدارة الزوار', path: '/admin/visitors', icon: <Users size={20} /> },
    { name: 'طاقم الإدارة', path: '/admin/managers', icon: <UserCog size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Sidebar (Desktop) / Topbar (Mobile) */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-l border-slate-200 shadow-sm flex flex-col z-20 sticky top-0 md:h-screen">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between md:justify-center">
          <div className="flex items-center gap-2 text-[#1e1b4b]">
            <ShieldCheck size={28} className="text-indigo-600" />
            <h1 className="text-xl font-bold">لوحة التحكم</h1>
          </div>
        </div>

        <div className="p-4 flex-1">
          {/* User Info */}
          <div className="bg-indigo-50 rounded-2xl p-4 mb-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg mb-2 shadow-md">
              {user?.name.charAt(0)}
            </div>
            <h3 className="font-bold text-indigo-900">{user?.name}</h3>
            <span className={`text-xs mt-1 font-medium px-2 py-1 rounded-md ${isOwner ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
              {isOwner ? 'المالك (Owner)' : 'المدير (Admin)'}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal
                    ${isActive 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                      : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-slate-100 mt-auto hidden md:block">
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium"
          >
            <LogOut size={20} />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 max-h-screen overflow-y-auto bg-slate-50 relative pb-24 md:pb-8">
        
        {/* Warning for Admins */}
        {!isOwner && pathname === '/admin/managers' && (
          <div className="bg-orange-50 border border-orange-200 text-orange-800 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <ShieldAlert size={24} className="text-orange-500 shrink-0" />
            <div>
              <h4 className="font-bold mb-1">صلاحيات محدودة</h4>
              <p className="text-sm">بصفتك (أدمن)، يمكنك مشاهدة قائمة المدراء وإضافة مدراء جدد، لكن لا يمكنك حذف أي مدير موجود. هذه الصلاحية محصورة لمالك النظام.</p>
            </div>
          </div>
        )}

        {children}
      </main>

    </div>
  );
}
