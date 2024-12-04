import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'admin' | 'service_provider' | 'customer' | 'supervisor';

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setAuth: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const isAuthenticated = () => {
  const { token } = useAuth.getState();
  return !!token;
};

export const getUserRole = (): UserRole | null => {
  const { user } = useAuth.getState();
  return user?.role || null;
};