import { create } from "zustand";

type AuthStore = {
  isAdmin: boolean;
  userId: null | string;
  setIsAdmin: (value: boolean) => void;
  setUserId: (id: string | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAdmin: JSON.parse(localStorage.getItem("isAdmin") || "false"),
  userId: localStorage.getItem("_id") || null,
  setIsAdmin: (value) => {
    localStorage.setItem("isAdmin", JSON.stringify(value));
    set({ isAdmin: value });
  },
  setUserId: (id) => {
    localStorage.setItem("_id", id || "");
    set({ userId: id });
  },
}));
