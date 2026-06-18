"use client";

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ClipboardList, Settings, User } from 'lucide-react';

export const BottomNav = () => {
  const pathname = usePathname();

  // Hide BottomNav on these specific routes
  const hiddenRoutes = ['/', '/register', '/login', '/success'];
  const isHidden = hiddenRoutes.includes(pathname) || pathname.startsWith('/admin');

  if (isHidden) return null;

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <NextLink href="/dashboard" className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-indigo-600 transition-colors">
          <Home size={24} />
          <span className="text-[10px] mt-1 font-medium">الرئيسية</span>
        </NextLink>
        <NextLink href="/activities" className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-indigo-600 transition-colors">
          <ClipboardList size={24} />
          <span className="text-[10px] mt-1 font-medium">الأنشطة</span>
        </NextLink>
        <NextLink href="/profile" className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-indigo-600 transition-colors">
          <User size={24} />
          <span className="text-[10px] mt-1 font-medium">حسابي</span>
        </NextLink>
        <button className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-indigo-600 transition-colors">
          <Settings size={24} />
          <span className="text-[10px] mt-1 font-medium">الإعدادات</span>
        </button>
      </div>
    </div>
  );
};
