import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[60%] bg-gradient-to-br from-primary-600 to-primary-800 rounded-b-[50%] shadow-2xl -z-0"></div>

      <div className="z-10 text-center w-full max-w-md bg-white p-8 rounded-3xl shadow-xl mt-[20vh]">
        <div className="w-24 h-24 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <UserPlus size={48} />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">المنصة</h1>
        <p className="text-slate-500 mb-8">مركز المعرفة والتطوير</p>

        <h2 className="text-xl font-semibold text-slate-700 mb-6">
          مرحباً بك في مركز المنصة
        </h2>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          سجل بياناتك الآن للحصول على عضويتك الرقمية والاستفادة من خدماتنا.
        </p>

        <Link
          href="/register"
          className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-primary-500/30 transition-all transform active:scale-95"
        >
          ابدأ التسجيل
        </Link>
      </div>
    </div>
  );
}
