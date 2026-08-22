import { useThemeStore } from "@/features/theme/model/theme.store";
import type { Theme } from "@/features/theme/model/theme.types";
import { useTranslation } from "react-i18next";

export default function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const { t } = useTranslation(["theme"]);

  const availableOptions = [
    {
      label: t("light"),
      value: "light",
      icon: "☀️",
    },
    {
      label: t("dark"),
      value: "dark",
      icon: "🌙",
    },
  ] as const;

  const selectedAvailableOptionIndex = availableOptions.findIndex(
    (availableOption) => availableOption.value === theme,
  )!;

  const selectedAvailableOption =
    availableOptions[selectedAvailableOptionIndex];

  return availableOptions.length === 2 ? (
    <button
      onClick={() => {
        changeTheme(
          availableOptions[
            (selectedAvailableOptionIndex + 1) % availableOptions.length
          ].value,
        );
      }}
      className="rounded-md border p-1"
    >
      {selectedAvailableOption.icon} {selectedAvailableOption.label}
    </button>
  ) : (
    <select
      name="theme"
      value={theme}
      onChange={(e) => {
        const selectedTheme = e.target.value as Theme;
        changeTheme(selectedTheme);
      }}
      className="rounded-md border"
    >
      {availableOptions.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.icon} {option.label}
          </option>
        );
      })}
    </select>
  );
}
