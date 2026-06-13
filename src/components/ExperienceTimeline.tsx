"use client";

import { useLocale } from "@/context/LocaleContext";

export default function ExperienceTimeline() {
  const { t } = useLocale();

  return (
    <section id="experience" className="py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-display text-xs font-medium text-primary-400 tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
          <span className="text-primary-600">/</span>{" "}
          {t.sections.experienceKicker}
        </div>
        <h2 className="section-reveal font-display text-[clamp(1.6rem,1rem+1.8vw,2.4rem)] font-bold text-text-primary mb-8">
          {t.sections.experienceTitle}
        </h2>
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-border-default" />

          {t.experience.map((entry, i) => (
            <article key={i} className="section-reveal relative mb-8 last:mb-0">
              <div className="absolute left-[-2.1rem] md:left-[-2.6rem] top-1.5 w-3.5 h-3.5 rounded-full bg-surface-base border-2 border-primary-500 z-[1]" />

              <div className="font-display text-xs text-primary-400 mb-1">
                [{entry.timestamp}]
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-text-primary mb-1">
                {entry.role}
              </h3>
              <div className="text-base text-primary-300 mb-3 flex items-center gap-2">
                {entry.company}
                <span className="font-display text-xs bg-primary-900 text-primary-300 px-2 py-0.5 rounded border border-primary-800">
                  {entry.tag}
                </span>
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {entry.details.map((detail, j) => (
                  <li
                    key={j}
                    className="text-sm text-text-secondary pl-5 relative leading-relaxed before:content-['-'] before:absolute before:left-2 before:text-text-muted before:font-display"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
