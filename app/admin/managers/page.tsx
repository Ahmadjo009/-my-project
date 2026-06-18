"use client";

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { UserPlus, Trash2, Mail, Shield, UserCog } from 'lucide-react';

interface Manager {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin';
  addedAt: string;
}

const mockManagers: Manager[] = [
  { id: '1', name: 'المدير العام', email: 'sedainjaz@gmail.com', role: 'owner', addedAt: '2024-01-01' },
  { id: '2', name: 'أحمد الإداري', email: 'ahmad.admin@example.com', role: 'admin', addedAt: '2024-05-12' },
  { id: '3', name: 'سارة', email: 'sara.admin@example.com', role: 'admin', addedAt: '2024-06-10' },
];

export default function ManagersPage() {
  const { isOwner, user } = useAuth();
  const [managers, setManagers] = useState<Manager[]>(mockManagers);
  
  // States for adding new admin
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail) return;

    const newAdmin: Manager = {
      id: Date.now().toString(),
      name: newName,
      email: newEmail,
      role: 'admin',
      addedAt: new Date().toISOString().split('T')[0],
    };

    setManagers([...managers, newAdmin]);
    setIsAdding(false);
    setNewName('');
    setNewEmail('');
  };

  const handleRemoveAdmin = (id: string) => {
    if (!isOwner) {
      alert("عذراً، هذه الصلاحية محصورة للمالك (Owner) فقط.");
      return;
    }
    
    // Check if trying to remove the owner itself
    const managerToRemove = managers.find(m => m.id === id);
    if (managerToRemove?.role === 'owner') {
      alert("لا يمكن حذف حساب المالك الأساسي!");
      return;
    }

    if (confirm("هل أنت متأكد من حذف هذا المدير؟")) {
      setManagers(managers.filter(m => m.id !== id));
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">طاقم الإدارة</h2>
          <p className="text-slate-500 text-sm mt-1">إدارة الصلاحيات وحسابات المدراء في النظام</p>
        </div>
        
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-bold transition-colors shadow-md shadow-indigo-200"
        >
          <UserPlus size={20} />
          {isAdding ? 'إلغاء' : 'إضافة أدمن جديد'}
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-indigo-100 mb-8 animate-in fade-in slide-in-from-top-4">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">بيانات الأدمن الجديد</h3>
          <form onSubmit={handleAddAdmin} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><UserCog size={18} /></div>
              <input 
                type="text" placeholder="الاسم" value={newName} onChange={(e) => setNewName(e.target.value)} required
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Mail size={18} /></div>
              <input 
                type="email" placeholder="البريد الإلكتروني" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
              حفظ الأدمن
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4 font-bold text-slate-600">الاسم</th>
                <th className="p-4 font-bold text-slate-600">البريد الإلكتروني</th>
                <th className="p-4 font-bold text-slate-600 text-center">الصلاحية</th>
                <th className="p-4 font-bold text-slate-600 text-center">تاريخ الإضافة</th>
                <th className="p-4 font-bold text-slate-600 text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {managers.map((manager) => (
                <tr key={manager.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-800">{manager.name} {manager.email === user?.email && <span className="text-xs font-normal text-indigo-500 mr-2">(أنت)</span>}</td>
                  <td className="p-4 text-slate-600">{manager.email}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full text-xs font-bold
                      ${manager.role === 'owner' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      <Shield size={12} />
                      {manager.role === 'owner' ? 'Owner' : 'Admin'}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 text-sm text-center">{manager.addedAt}</td>
                  <td className="p-4 text-center">
                    {/* Only show the delete button if current user is owner, AND we are not trying to delete the owner himself */}
                    {isOwner && manager.role !== 'owner' ? (
                      <button 
                        onClick={() => handleRemoveAdmin(manager.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors inline-flex"
                        title="حذف الصلاحية"
                      >
                        <Trash2 size={18} />
                      </button>
                    ) : (
                      <span className="text-slate-300 text-xs">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
