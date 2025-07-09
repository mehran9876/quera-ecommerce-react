import { create } from "zustand";

type AuthStore = {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAdmin: false,
  setIsAdmin: (value) => set({ isAdmin: value }),
}));
