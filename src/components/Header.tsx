"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { t, personalInfo } = useLocale();
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      setCondensed(window.scrollY > 24);
      prevScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-out ${
          condensed
            ? "py-3 bg-surface-base/85 backdrop-blur-xl border-b border-border-subtle"
            : "py-6"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="font-display font-bold text-lg text-text-primary flex items-center gap-2 no-underline"
            aria-label={t.common.home}
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_var(--color-primary-500)]" />
            <span>{personalInfo.username}</span>
          </a>

          <nav
            aria-label={t.common.mainNav}
            className="hidden md:flex md:items-center md:gap-5"
          >
            <ul className="flex gap-5 items-center list-none m-0 p-0">
              {t.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-sm font-medium text-text-secondary no-underline relative transition-colors duration-150 hover:text-primary-300 focus-visible:text-primary-300 focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-2 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-left focus-visible:after:scale-x-100 focus-visible:after:origin-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              className="bg-transparent border-none text-text-primary cursor-pointer p-2"
              onClick={() => setMenuOpen(true)}
              aria-label={t.common.openMenu}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-surface-base/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          role="dialog"
          aria-label={t.common.mobileNav}
        >
          <button
            className="absolute top-6 right-6 bg-transparent border-none text-text-primary cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label={t.common.closeMenu}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xl text-text-secondary no-underline transition-colors duration-150 hover:text-primary-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
