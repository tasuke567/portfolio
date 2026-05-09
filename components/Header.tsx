'use client'

import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionLink } from "./TransitionLink";
import { useLanguage, useT } from "@/lib/i18n/LanguageProvider";
import type { StringKey } from "@/lib/i18n/dictionaries";
import { blogIndexPath } from "@/lib/posts";

type NavLink = { href: string; key: StringKey };

export function Header() {
  const t = useT();
  const { toggle: toggleLang, locale } = useLanguage();
  const navLinks: NavLink[] = [
    { href: "/#projects", key: "nav.projects" },
    { href: blogIndexPath(locale), key: "nav.writing" },
    { href: "/#about", key: "nav.about" },
    { href: "/resume", key: "nav.resume" },
  ];
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <TransitionLink
          href="/"
          className="inline-flex items-center min-h-[40px] px-1 -mx-1 text-xl font-bold text-zinc-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          WeyDev
        </TransitionLink>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Primary">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
            >
              {t(link.key)}
            </TransitionLink>
          ))}
          <TransitionLink
            href="/#contact"
            className="bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
          >
            {t("nav.contact")}
          </TransitionLink>
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("lang.label")}
            className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors px-2 py-1 rounded border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
          >
            {locale === "en" ? "TH" : "EN"}
          </button>
          <kbd
            className="hidden lg:inline-flex items-center gap-1 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
            aria-hidden="true"
            title="Press Cmd+K to open command palette"
          >
            ⌘K
          </kbd>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls={menuId}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-6 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-base border-b border-zinc-50 dark:border-zinc-900 last:border-0"
                >
                  {t(link.key)}
                </TransitionLink>
              ))}
              <TransitionLink
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold text-sm"
              >
                {t("nav.contact")}
              </TransitionLink>
              <button
                type="button"
                onClick={() => {
                  toggleLang();
                  setOpen(false);
                }}
                className="mt-2 inline-flex items-center justify-center text-xs font-mono text-zinc-500 dark:text-zinc-400 px-6 py-2 border border-zinc-100 dark:border-zinc-800 rounded-full"
                aria-label={t("lang.label")}
              >
                {locale === "en" ? "ภาษาไทย · TH" : "English · EN"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
