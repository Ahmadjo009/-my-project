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
    <div className="fixed bottom-0 w-full bg-[#1e1b4b]/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <NextLink href="/dashboard" className="flex flex-col items-center justify-center w-full h-full text-blue-200/60 hover:text-white transition-colors">
          <Home size={24} />
          <span className="text-[10px] mt-1 font-medium">الرئيسية</span>
        </NextLink>
        <NextLink href="/activities" className="flex flex-col items-center justify-center w-full h-full text-blue-200/60 hover:text-white transition-colors">
          <ClipboardList size={24} />
          <span className="text-[10px] mt-1 font-medium">الأنشطة</span>
        </NextLink>
        <NextLink href="/profile" className="flex flex-col items-center justify-center w-full h-full text-blue-200/60 hover:text-white transition-colors">
          <User size={24} />
          <span className="text-[10px] mt-1 font-medium">حسابي</span>
        </NextLink>
        <button className="flex flex-col items-center justify-center w-full h-full text-blue-200/60 hover:text-white transition-colors">
          <Settings size={24} />
          <span className="text-[10px] mt-1 font-medium">الإعدادات</span>
        </button>
      </div>
    </div>
  );
};
