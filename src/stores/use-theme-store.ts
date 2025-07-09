import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStateI {
  theme: string;
  toggleTheme: () => void;
}

export const useThemeStore = create(
  persist<ThemeStateI>(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set(({ theme }) => {
          const newTheme = theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          document.documentElement.dataset.theme = newTheme;
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark",
          );
          return { theme: newTheme };
        }),
    }),
    {
      name: "theme",
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.dataset.theme = state?.theme;
          document.documentElement.classList.toggle(
            "dark",
            state.theme === "dark",
          );
        }
      },
    },
  ),
);
