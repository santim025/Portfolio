"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function RevealObserver() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      document.querySelectorAll(".section-reveal").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.d || "0";
            el.style.transitionDelay = `${parseInt(delay) * 80}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".section-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [reduced]);

  return null;
}