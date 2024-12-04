import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuth = create(
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

export const getUserRole = () => {
  const { user } = useAuth.getState();
  return user?.role || null;
};