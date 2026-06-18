import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-[#1e1b4b] text-sm font-bold mb-2 text-right">
          {label}
        </label>
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-4 text-indigo-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border ${error ? 'border-red-400' : 'border-white/40'} focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80 transition-all text-slate-700 placeholder-slate-400 ${icon ? 'pl-12' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1 text-right">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
  icon?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-[#1e1b4b] text-sm font-bold mb-2 text-right">
          {label}
        </label>
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-4 pointer-events-none text-indigo-400">
              {icon}
            </div>
          )}
          {/* Default arrow dropdown */}
          {!icon && (
            <div className="absolute left-4 pointer-events-none text-indigo-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          )}
          <select
            ref={ref}
            className={`w-full px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border ${error ? 'border-red-400' : 'border-white/40'} focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80 transition-all appearance-none text-slate-700 ${icon ? 'pl-12' : 'pl-10'} ${className}`}
            {...props}
          >
            <option value="" disabled className="text-slate-400">اختر...</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-slate-800">{opt.label}</option>
            ))}
          </select>
        </div>
        {error && <p className="text-red-500 text-xs mt-1 text-right">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
