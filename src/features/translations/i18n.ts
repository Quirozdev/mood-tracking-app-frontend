import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const modules = import.meta.glob("@/**/locales/*/*.json", {
  eager: true,
}) as Record<string, { default: any }>;

const resources: Record<string, any> = {};

for (const path in modules) {
  const match = path.match(/locales\/([^/]+)\/([^/]+)\.json$/);
  if (!match) continue;

  const [, lng, ns] = match;

  if (!resources[lng]) {
    resources[lng] = {};
  }

  resources[lng][ns] = modules[path].default;
}

i18n.on("languageChanged", (lng: string) => {
  document.documentElement.setAttribute("lang", lng);
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: import.meta.env.VITE_I18N_DEBUG,
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    load: "languageOnly",
    cleanCode: true,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
