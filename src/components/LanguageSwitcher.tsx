"use client";

import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  const options: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  return (
    <div
      className="flex items-center rounded-lg border border-border-default bg-surface-muted p-0.5"
      role="group"
      aria-label={t.common.language}
    >
      {options.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`min-w-[2.5rem] rounded-md px-2.5 py-1 font-display text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-1 ${
            locale === code
              ? "bg-primary-900/40 text-primary-300"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
