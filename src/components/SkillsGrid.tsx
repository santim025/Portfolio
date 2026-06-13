"use client";

import { useLocale } from "@/context/LocaleContext";

export default function SkillsGrid() {
  const { t, skills } = useLocale();

  return (
    <section id="skills" className="py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-display text-xs font-medium text-primary-400 tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
          <span className="text-primary-600">/</span> {t.sections.skillsKicker}
        </div>
        <h2 className="section-reveal font-display text-[clamp(1.6rem,1rem+1.8vw,2.4rem)] font-bold text-text-primary mb-8">
          {t.sections.skillsTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="section-reveal group bg-surface-subtle border border-border-default rounded-xl p-5 flex flex-col items-center gap-3 cursor-default transition-colors duration-300 hover:border-primary-800/40"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {skill.deviconClass ? (
                <i
                  className={`${skill.deviconClass} text-[2.5rem] leading-none`}
                  aria-hidden="true"
                />
              ) : (
                <span
                  className="font-display text-[2rem] leading-none font-bold text-[#FF3621]"
                  aria-hidden="true"
                >
                  Db
                </span>
              )}
              <span className="font-display text-sm font-medium text-text-primary text-center">
                {skill.name}
              </span>
              <span className="flex items-center gap-1 text-xs text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-[pulse-dot_2s_infinite]" />
                {t.sections.skillsRunning}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
