"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useCountUp } from "@/hooks/useCountUp";
import { useLocale } from "@/context/LocaleContext";
import type { HeroTermLine } from "@/i18n/types";

function StatCounter({
  count,
  suffix,
  label,
}: {
  count: number;
  suffix: string;
  label: string;
}) {
  const { ref } = useCountUp(count, suffix);

  return (
    <div className="flex flex-col gap-1">
      <span
        ref={ref}
        className="font-display text-2xl md:text-3xl font-bold text-primary-400"
      >
        0
      </span>
      <span className="text-sm text-text-muted">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { t, personalInfo } = useLocale();
  const termLines = t.hero.termLines;
  const reduced = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>(
    reduced ? termLines.map((_, i) => i) : []
  );
  const [headingsVisible, setHeadingsVisible] = useState(reduced);
  const [subtitleVisible, setSubtitleVisible] = useState(reduced);
  const [actionsVisible, setActionsVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setVisibleLines(termLines.map((_, i) => i));
      setHeadingsVisible(true);
      setSubtitleVisible(true);
      setActionsVisible(true);
      return;
    }

    setVisibleLines([]);
    setHeadingsVisible(false);
    setSubtitleVisible(false);
    setActionsVisible(false);

    const delays = [0, 400, 900, 1400, 1900, 2400];
    const timers = delays.map((d, i) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), d)
    );

    const h1 = setTimeout(() => setHeadingsVisible(true), 3000);
    const sub = setTimeout(() => setSubtitleVisible(true), 3600);
    const act = setTimeout(() => setActionsVisible(true), 4000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(h1);
      clearTimeout(sub);
      clearTimeout(act);
    };
  }, [reduced, termLines]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (reduced || !glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    glowRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const renderTermLine = (line: HeroTermLine, i: number) => {
    const show = visibleLines.includes(i);
    const base = "mb-2 transition-all duration-400 ease-out";
    const hidden = "opacity-0 translate-y-2";
    const visible = "opacity-100 translate-y-0";

    if (line.prompt) {
      return (
        <div key={i} className={`${base} ${show ? visible : hidden}`}>
          <span className="text-primary-400 mr-2">{line.prompt}</span>
          <span className="text-text-primary">{line.cmd}</span>
        </div>
      );
    }
    if (line.accent) {
      return (
        <div key={i} className={`${base} ${show ? visible : hidden}`}>
          <span className="text-primary-300">{line.accent}</span>
          <span className="text-text-secondary"> {line.joiner} </span>
          <span className="text-primary-300">{line.accent2}</span>
        </div>
      );
    }
    if (line.success) {
      return (
        <div key={i} className={`${base} ${show ? visible : hidden}`}>
          <span className="text-success">{line.success}</span>
          <span className="text-text-secondary">
            {" "}
            {line.dash} {line.msg}
          </span>
          {line.check && <span className="text-success"> ✓</span>}
        </div>
      );
    }
    return (
      <div key={i} className={`${base} ${show ? visible : hidden}`}>
        <span className="text-text-secondary">{line.output}</span>
      </div>
    );
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative pt-32 pb-20 px-6 md:px-8"
      onPointerMove={handlePointerMove}
    >
      <div className="bg-pattern" />
      <div className="bg-glow bg-glow--1" />
      <div className="bg-glow bg-glow--2" />

      <div className="max-w-[1200px] mx-auto w-full relative z-[1]">
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none z-[0] opacity-0 transition-opacity duration-400"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(20,184,166,0.2), transparent 60%)",
          }}
        />

        <div className="relative z-[1] max-w-[900px]">
          <div className="bg-surface-muted border border-border-default rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4),0_0_20px_rgba(20,184,166,0.15)] mb-8">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-emphasis border-b border-border-default">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              <span className="font-display text-xs text-text-muted ml-auto">
                {personalInfo.terminalUser}@infodesign ~ bash
              </span>
            </div>
            <div className="p-5 font-display text-sm min-h-[220px]">
              {termLines.map(renderTermLine)}
              <div className="flex items-center gap-0 mt-2">
                <span className="text-primary-400 mr-2">$</span>
                <span
                  className={`inline-block w-2 h-4 bg-primary-500 ${
                    reduced ? "" : "animate-[blink_1s_step-end_infinite]"
                  }`}
                />
              </div>
            </div>
          </div>

          <h1
            className="font-display text-[clamp(2.4rem,1rem+4vw,4.2rem)] font-bold text-text-primary leading-[1.1] mb-5 overflow-hidden"
            aria-label={t.hero.ariaLabel}
          >
            <span
              className={`block transition-all duration-700 ease-out ${
                headingsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[110%]"
              }`}
            >
              {t.hero.headline1}
            </span>
            <span
              className={`block transition-all duration-700 ease-out delay-200 ${
                headingsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[110%]"
              }`}
            >
              {t.hero.headline2}{" "}
              <span className="bg-gradient-to-br from-primary-300 to-primary-500 bg-clip-text text-transparent">
                {t.hero.headlineAccent}
              </span>
            </span>
          </h1>

          <p
            className={`text-lg text-text-secondary max-w-[65ch] mb-8 transition-all duration-600 ease-out ${
              subtitleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t.hero.subtitle}
          </p>

          <div
            className={`flex gap-4 flex-wrap mb-12 transition-all duration-600 ease-out ${
              actionsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a href="#projects" className="btn-primary">
              {t.hero.ctaProjects}
            </a>
            <a href="#contact" className="btn-outline">
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="flex gap-8 flex-wrap pt-6 border-t border-border-subtle">
            {t.stats.map((stat, i) => (
              <StatCounter
                key={i}
                count={stat.count}
                suffix={stat.suffix ?? ""}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
