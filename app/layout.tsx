import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";
import { AuthProvider } from "@/contexts/AuthContext";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "المنصة",
  description: "مركز المنصة لتسجيل بيانات الزوار وإنشاء عضوية رقمية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-slate-50 text-slate-900`}>
        <AuthProvider>
          <div className="pb-safe">
            {children}
          </div>
          <BottomNav />
        </AuthProvider>
      </body>
    </html>
  );
}
