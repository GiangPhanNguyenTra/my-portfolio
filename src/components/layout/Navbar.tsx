"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/config/navigation";
import type { ThemeMode } from "@/types/portfolio";

type NavbarProps = {
  lang: "en" | "vi";
  toggleLang: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  activeSection: string;
  t: (key: string) => string;
};

export function Navbar({
  lang,
  toggleLang,
  theme,
  toggleTheme,
  activeSection,
  t,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-lg shadow-sm border-b border-zinc-200/50 dark:border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent"
        >
          PTG.
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {navItems.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`relative transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
                    activeSection === link.id
                      ? "text-emerald-600 dark:text-emerald-400"
                      : ""
                  }`}
                >
                  {t(link.labelKey)}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 border-l pl-4 border-zinc-300 dark:border-zinc-700">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 text-xs font-semibold uppercase"
              aria-label="Toggle language"
            >
              <Globe size={16} /> <span>{lang}</span>
            </button>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-zinc-800 dark:text-zinc-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-4 text-zinc-600 dark:text-zinc-300">
              {navItems.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full text-left font-medium ${
                      activeSection === link.id ? "text-emerald-500" : ""
                    }`}
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
              <div className="pt-4 flex items-center space-x-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={toggleLang}
                  className="flex items-center space-x-1 p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors text-xs font-bold uppercase"
                  aria-label="Toggle language"
                >
                  <Globe size={16} /> <span>{lang}</span>
                </button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
