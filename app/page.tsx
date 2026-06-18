import Link from "next/link";
import { Building2, Rocket, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#1e1b4b]">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
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

      {/* Floating Particles */}
      <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-white/40 rounded-full blur-[1px] animate-bounce"></div>
      <div className="absolute top-[30%] right-[25%] w-4 h-4 bg-blue-300/40 rounded-full blur-[2px] animate-pulse"></div>
      <div className="absolute bottom-[40%] left-[15%] w-5 h-5 bg-purple-300/30 rounded-full blur-[2px] animate-bounce delay-700"></div>

      {/* Glassmorphism Card */}
      <div className="z-10 text-center w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transform transition-all hover:scale-[1.02] duration-500">
        
        {/* Logo Area */}
        <div className="relative w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 p-1 shadow-[0_0_40px_rgba(79,70,229,0.5)]">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500/80 to-purple-600/80 backdrop-blur-md flex flex-col items-center justify-center border border-white/20">
            <Building2 size={40} className="text-white mb-1 drop-shadow-md" strokeWidth={1.5} />
            <h1 className="text-2xl font-black text-white tracking-tight drop-shadow-md">المنصة</h1>
            <p className="text-[9px] text-blue-100 font-medium">مركز المعرفة والتطوير</p>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 drop-shadow-sm">
          مرحباً بك في مركز المنصة
        </h2>
        
        <p className="text-sm sm:text-base text-blue-100/90 mb-10 leading-relaxed font-medium">
          سجّل بياناتك للحصول على عضويتك والاستفادة من خدمات المركز وبرامجه التدريبية والفعاليات المتاحة.
        </p>

        {/* Action Button */}
        <Link
          href="/register"
          className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <Rocket size={22} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          <span className="relative z-10 text-lg">ابدأ التسجيل الآن</span>
        </Link>

        {/* Footer info */}
        <div className="mt-6 flex items-center justify-center gap-2 text-blue-200/70 text-xs font-medium">
          <ShieldCheck size={16} />
          <span>بياناتك آمنة وسرية</span>
        </div>
        
      </div>
    </div>
  );
}
