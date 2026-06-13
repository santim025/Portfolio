"use client";

import { useLocale } from "@/context/LocaleContext";

export default function Contact() {
  const { t, personalInfo } = useLocale();

  return (
    <section
      id="contact"
      className="bg-surface-subtle border-t border-b border-border-default py-20 px-6 md:px-8"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <div className="font-display text-xs font-medium text-primary-400 tracking-[0.15em] uppercase mb-3 flex items-center justify-center gap-2">
          <span className="text-primary-600">/</span> {t.sections.contactKicker}
        </div>
        <h2 className="section-reveal font-display text-[clamp(2rem,1rem+2.8vw,3.2rem)] font-bold text-text-primary leading-tight mb-4">
          {t.sections.contactTitle}
          <span className="bg-gradient-to-br from-primary-300 to-primary-500 bg-clip-text text-transparent">
            {t.sections.contactTitleAccent}
          </span>
          ?
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-[55ch] mx-auto">
          {t.sections.contactBody}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm font-medium text-text-secondary border border-border-default bg-surface-muted transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary-700 hover:text-primary-300 hover:shadow-[0_4px_12px_rgba(20,184,166,0.1)] focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-2 no-underline"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm font-medium text-text-secondary border border-border-default bg-surface-muted transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary-700 hover:text-primary-300 hover:shadow-[0_4px_12px_rgba(20,184,166,0.1)] focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-2 no-underline"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            {t.common.linkedin}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm font-medium text-text-secondary border border-border-default bg-surface-muted transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary-700 hover:text-primary-300 hover:shadow-[0_4px_12px_rgba(20,184,166,0.1)] focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-2 no-underline"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            {t.common.github}
          </a>
        </div>
      </div>
    </section>
  );
}
