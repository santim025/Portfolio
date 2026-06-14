"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  detectLocale,
  getDictionary,
  type Dictionary,
  type Locale,
} from "@/i18n";
import { personalStatic, projectMeta, skills } from "@/data/static";
import type { Project } from "@/data/static";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  personalInfo: typeof personalStatic & Dictionary["personal"];
  projects: Project[];
  skills: typeof skills;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function mergeProjects(t: Dictionary): Project[] {
  return projectMeta.map((meta, i) => ({
    ...meta,
    tag: t.projectCopies[i]?.tag ?? "",
    description: t.projectCopies[i]?.description ?? "",
  }));
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const t = useMemo(() => getDictionary(locale), [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      personalInfo: { ...personalStatic, ...t.personal },
      projects: mergeProjects(t),
      skills,
    }),
    [locale, setLocale, t]
  );

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [ready, locale, t.meta.title, t.meta.description]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
