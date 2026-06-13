"use client";

import { useLocale } from "@/context/LocaleContext";

export default function SysInfo() {
  const { t, personalInfo } = useLocale();
  const { profileLabels, specializationLabels } = t;

  return (
    <section id="about" className="py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-display text-xs font-medium text-primary-400 tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
          <span className="text-primary-600">/</span> {t.sections.aboutKicker}
        </div>
        <h2 className="section-reveal font-display text-[clamp(1.6rem,1rem+1.8vw,2.4rem)] font-bold text-text-primary mb-8">
          {t.sections.aboutTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="section-reveal bg-surface-subtle border border-border-default rounded-xl p-6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(20,184,166,0.12)] hover:border-primary-800/50">
            <div className="font-display text-sm font-semibold text-primary-400 mb-4 flex items-center gap-2 before:content-['>'] before:text-primary-600">
              {t.sections.profileCard}
            </div>
            {(
              [
                [profileLabels.name, personalInfo.name],
                [profileLabels.role, personalInfo.role],
                [profileLabels.focus, personalInfo.focus],
                [profileLabels.experience, personalInfo.experienceYears],
                [profileLabels.company, personalInfo.currentCompany],
                [profileLabels.location, personalInfo.location],
                [profileLabels.education, personalInfo.education],
                [profileLabels.modality, personalInfo.modality],
              ] as const
            ).map(([key, val]) => (
              <div
                key={key}
                className="flex justify-between py-2 border-b border-border-subtle last:border-b-0 text-sm"
              >
                <span className="text-text-muted font-display text-xs font-medium">
                  {key}
                </span>
                <span className="text-text-primary">{val}</span>
              </div>
            ))}
          </div>

          <div className="section-reveal bg-surface-subtle border border-border-default rounded-xl p-6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(20,184,166,0.12)] hover:border-primary-800/50">
            <div className="font-display text-sm font-semibold text-primary-400 mb-4 flex items-center gap-2 before:content-['>'] before:text-primary-600">
              {t.sections.specializationCard}
            </div>
            {(
              [
                [specializationLabels.backend, t.specialization.backend],
                [specializationLabels.web, t.specialization.web],
                [specializationLabels.mobile, t.specialization.mobile],
                [specializationLabels.cloud, t.specialization.cloud],
                [specializationLabels.data, t.specialization.data],
                [specializationLabels.devops, t.specialization.devops],
              ] as const
            ).map(([key, val]) => (
              <div
                key={key}
                className="flex justify-between py-2 border-b border-border-subtle last:border-b-0 text-sm"
              >
                <span className="text-text-muted font-display text-xs font-medium">
                  {key}
                </span>
                <span className="text-text-primary">{val}</span>
              </div>
            ))}
          </div>

          <div className="section-reveal md:col-span-2 bg-surface-subtle border border-border-default rounded-xl p-6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(20,184,166,0.12)] hover:border-primary-800/50">
            <p className="text-text-secondary leading-7 max-w-[65ch] text-base">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
