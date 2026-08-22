import { getItemOrDefault, setItem } from "../../../shared/lib/local-storage";
import { THEME_STORAGE_KEY, type Theme } from "../model/theme.types";

export function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getInitialTheme() {
  return getItemOrDefault<Theme>(THEME_STORAGE_KEY, getSystemTheme());
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  setItem(THEME_STORAGE_KEY, theme);
}
