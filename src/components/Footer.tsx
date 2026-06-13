"use client";

import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { personalInfo, t } = useLocale();

  return (
    <footer className="py-6 text-center text-sm text-text-muted border-t border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6">
        &copy; 2026 {personalInfo.name} — {t.sections.footer}
      </div>
    </footer>
  );
}
