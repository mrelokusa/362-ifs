import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Mock user for demonstration
const MOCK_USER: User = { id: '1', name: 'Thabo Molefe', email: 'thabo.molefe@example.com' };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a logged-in user in local storage
    try {
      const storedUser = localStorage.getItem('hypercare_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from local storage", error);
      localStorage.removeItem('hypercare_user');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (userData: User) => {
    // In a real app, you'd get this from an API
    const userToStore = userData || MOCK_USER;
    localStorage.setItem('hypercare_user', JSON.stringify(userToStore));
    setUser(userToStore);
  };

  const logout = () => {
    localStorage.removeItem('hypercare_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
