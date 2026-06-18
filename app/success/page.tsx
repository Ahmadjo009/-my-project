import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";

export default function SuccessPage() {
  const membershipId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center animate-in zoom-in-95 duration-500">
        <CheckCircle2 size={80} className="text-green-500 mb-6" />
        <h1 className="text-2xl font-bold text-slate-800 mb-2">تم تسجيل بياناتك بنجاح!</h1>
        <p className="text-slate-500 mb-8">تم إنشاء عضويتك بنجاح، يمكنك الآن متابعة أنشطتك في المركز.</p>

        <div className="bg-slate-50 rounded-2xl p-6 w-full mb-8 border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">رقم العضوية</p>
          <p className="text-3xl font-bold text-primary-600 tracking-wider font-mono">{membershipId}</p>
        </div>

        <Link href="/dashboard" className="w-full block">
          <Button fullWidth>الانتقال إلى صفحتي</Button>
        </Link>
      </div>
    </div>
  );
}
