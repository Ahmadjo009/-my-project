import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-sm border border-slate-100 p-5 ${className}`}>
      {children}
    </div>
  );
};
