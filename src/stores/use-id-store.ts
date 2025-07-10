import { create } from "zustand";

interface IdI {
  _id: string;
  setId: (_id: string) => void;
}

export const useIdStore = create<IdI>((set) => ({
  _id: JSON.parse(localStorage.getItem("_id") || "[]"),
  setId: (_id) => {
    localStorage.setItem("_id", JSON.stringify(_id));
    set({ _id });
  },
}));
