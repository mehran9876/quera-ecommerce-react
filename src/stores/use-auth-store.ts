import { create } from "zustand";

type AuthStore = {
  isAdmin: boolean;
  userId: string | null;
  setIsAdmin: (value: boolean) => void;
  setUserId: (id: string) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAdmin: false,
  userId: null,
  setIsAdmin: (value) => set({ isAdmin: value }),
  setUserId: (id) => set({ userId: id }),
}));
