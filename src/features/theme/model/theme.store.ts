import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import type { Theme, ThemeState } from "@/features/theme/model/theme.types";
import {
  applyTheme,
  getInitialTheme,
} from "@/features/theme/lib/theme.helpers";

export const useThemeStore = create(
  subscribeWithSelector<ThemeState>((set) => ({
    theme: getInitialTheme(),
    changeTheme: (newTheme: Theme) => set({ theme: newTheme }),
  })),
);

useThemeStore.subscribe(
  (state) => state.theme,
  (theme) => {
    applyTheme(theme);
  },
);

// run it one time to apply the light mode when is set so its data-theme appears in html first time entering page
applyTheme(useThemeStore.getState().theme);
