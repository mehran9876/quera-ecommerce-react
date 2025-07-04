import { create } from "zustand";

interface FavoritesState {
  favorites: string[];
  toggleFavorites: (_id: string) => void;
}

export const useFavorites = create<FavoritesState>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  toggleFavorites: (_id: string) =>
    set((state) => {
      if (state.favorites.includes(_id)) {
        const newFavorites = state.favorites.filter((id) => id !== _id);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return { ...state, favorites: newFavorites };
      } else {
        const newFavorites = [...state.favorites, _id];
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return { ...state, favorites: newFavorites };
      }
    }),
}));
