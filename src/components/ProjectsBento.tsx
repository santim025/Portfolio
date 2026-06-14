"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import type { Dictionary } from "@/i18n";
import type { Project } from "@/data/static";

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function endpointLabel(
  project: Project,
  labels: Dictionary["projects"]
): string {
  if (project.liveUrl) {
    try {
      return new URL(project.liveUrl).hostname.replace(/^www\./, "");
    } catch {
      return "live";
    }
  }
  if (project.isPrivate) return labels.privateRepo;
  return "—";
}

function FeaturedPanel({
  project,
  personalInfo,
  labels,
  common,
}: {
  project: Project;
  personalInfo: { terminalUser: string };
  labels: Dictionary["projects"];
  common: Dictionary["common"];
}) {
  const slug = slugify(project.title);
  const deployStack = project.stack.slice(0, 3).join(" + ");

  return (
    <article className="section-reveal overflow-hidden rounded-xl border border-primary-800 bg-gradient-to-br from-primary-500/10 to-surface-subtle shadow-[0_8px_32px_rgba(20,184,166,0.12)]">
      <div className="flex items-center gap-2 border-b border-border-subtle bg-surface-muted px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
        <span className="ml-auto font-display text-[11px] text-text-muted">
          {personalInfo.terminalUser}@prod ~ systemctl status {slug}
        </span>
      </div>

      <div className="p-6 font-display text-sm">
        <p>
          <span className="text-primary-400">$</span>{" "}
          <span className="text-success">● {slug}.service</span> —{" "}
          {labels.serviceActive}
        </p>
        <p className="mt-1 text-text-muted">{deployStack}</p>

        <h3 className="mt-4 font-display text-[clamp(1.5rem,1rem+1.2vw,1.75rem)] font-bold text-text-primary">
          {project.title}
        </h3>
        <p className="mt-2 font-body text-sm leading-7 text-text-secondary">
          {project.description}
        </p>

        {project.highlights && (
          <div className="mt-5 grid grid-cols-3 gap-3">
            {project.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border-subtle bg-surface-muted px-3 py-3"
              >
                <strong className="block font-display text-lg text-primary-400">
                  {item.value}
                </strong>
                <span className="font-display text-[10px] uppercase tracking-wider text-text-muted">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              {common.liveDemo}
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs"
          >
            {common.github}
          </a>
        </div>
      </div>
    </article>
  );
}

function ServiceRow({
  project,
  index,
  labels,
  common,
}: {
  project: Project;
  index: number;
  labels: Dictionary["projects"];
  common: Dictionary["common"];
}) {
  const [open, setOpen] = useState(false);
  const isLive = Boolean(project.liveUrl);
  const visibleStack = project.stack.slice(0, 2);

  return (
    <div className="border-b border-border-subtle last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="grid w-full grid-cols-[20px_1fr_auto] items-start gap-3 px-4 py-3.5 text-left transition-colors hover:bg-primary-500/[0.04] focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-[-2px] sm:px-5"
      >
        <span
          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
            isLive
              ? "bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]"
              : "bg-text-muted"
          }`}
          aria-hidden="true"
        />

        <span className="min-w-0">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display text-sm font-semibold text-text-primary">
              {project.title}
            </span>
            {project.isPrivate && (
              <span className="rounded border border-border-default bg-surface-emphasis px-1.5 py-0.5 font-display text-[10px] uppercase tracking-wider text-text-muted">
                {labels.privateBadge}
              </span>
            )}
          </span>
          <span className="mt-0.5 block font-display text-[11px] text-text-muted">
            {project.tag.split("·")[0]?.trim()} ·{" "}
            {endpointLabel(project, labels)}
          </span>
        </span>

        <span className="hidden flex-wrap justify-end gap-1 sm:flex">
          {visibleStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border-default bg-surface-emphasis px-2 py-0.5 font-display text-[10px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </span>
      </button>

      {open && (
        <div
          className="border-t border-border-subtle bg-surface-muted/50 px-4 pb-4 pt-3 sm:px-5"
          data-d={String(index % 6)}
        >
          <p className="mb-3 font-body text-sm leading-6 text-text-secondary">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:hidden">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border-default bg-surface-emphasis px-2 py-0.5 font-display text-[10px] text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs font-medium text-primary-400 no-underline transition-colors hover:text-primary-300"
            >
              {common.github} →
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs font-medium text-primary-400 no-underline transition-colors hover:text-primary-300"
              >
                {common.liveDemo}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectsBento() {
  const { t, personalInfo, projects } = useLocale();
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const services = projects.filter((p) => p.title !== featured.title);
  const liveCount = projects.filter((p) => p.liveUrl).length;

  return (
    <section id="projects" className="py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-display text-xs font-medium text-primary-400 tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
          <span className="text-primary-600">/</span>{" "}
          {t.sections.projectsKicker}
        </div>

        <div className="section-reveal mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(1.6rem,1rem+1.8vw,2.4rem)] font-bold text-text-primary">
            {t.sections.projectsTitle}
          </h2>
          <p className="font-display text-sm text-text-muted max-w-[46ch] md:text-right">
            {t.sections.projectsSummary(
              projects.length,
              liveCount,
              projects.length - liveCount
            )}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <FeaturedPanel
            project={featured}
            personalInfo={personalInfo}
            labels={t.projects}
            common={t.common}
          />

          <div className="section-reveal overflow-hidden rounded-xl border border-border-default bg-surface-subtle">
            <div className="border-b border-border-subtle bg-surface-muted px-4 py-3 font-display text-[11px] text-text-muted sm:px-5">
              {t.projects.kubectlHeader(personalInfo.username)}
            </div>
            <div role="list">
              {services.map((project, index) => (
                <ServiceRow
                  key={project.title}
                  project={project}
                  index={index}
                  labels={t.projects}
                  common={t.common}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
