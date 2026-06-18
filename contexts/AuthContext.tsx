"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'owner' | 'admin' | 'user' | null;

interface User {
  email: string;
  role: Role;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isOwner: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isOwner: false,
  isAdmin: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('manasa_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string) => {
    let role: Role = 'user';
    let name = 'مستخدم عادي';

    // RBAC Logic
    if (email.toLowerCase() === 'sedainjaz@gmail.com') {
      role = 'owner';
      name = 'المدير العام';
    } else if (email.includes('admin')) {
      role = 'admin';
      name = 'مدير مساعد';
    }

    const newUser = { email, role, name };
    setUser(newUser);
    localStorage.setItem('manasa_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('manasa_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isOwner: user?.role === 'owner',
      isAdmin: user?.role === 'admin' || user?.role === 'owner',
    }}>
      {children}
    </AuthContext.Provider>
  );
};
