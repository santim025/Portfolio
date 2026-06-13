import type { Dictionary, Locale } from "./types";
import { en } from "./locales/en";
import { es } from "./locales/es";

export type { Dictionary, Locale };

export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "portfolio-locale";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;

  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function localeLabel(locale: Locale): string {
  return locale === "en" ? "English" : "Español";
}
