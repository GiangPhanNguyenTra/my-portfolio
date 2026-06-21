"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Globe, Moon, Sun, User } from "lucide-react";
import type { BlogPost, Language, ThemeMode } from "@/types/portfolio";

type BlogModalProps = {
  blog: BlogPost | null;
  onBack: () => void;
  theme: ThemeMode;
  themeReady?: boolean;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
  topBackLabel?: string;
  bottomBackLabel?: string;
};

export function BlogModal({
  blog,
  onBack,
  theme,
  themeReady = false,
  toggleTheme,
  lang,
  toggleLang,
  t,
  topBackLabel,
  bottomBackLabel,
}: BlogModalProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  if (!blog) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-zinc-50 pb-24 font-sans text-zinc-900 selection:bg-violet-500/30 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <nav className="sticky top-0 left-0 z-50 w-full border-b border-zinc-200/50 bg-zinc-50/80 py-4 backdrop-blur-lg dark:border-white/10 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6">
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-violet-500 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 transition-colors group-hover:bg-violet-100 dark:bg-zinc-800 dark:group-hover:bg-violet-900/30">
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </div>
            {topBackLabel ?? t("blogs.backPortfolio")}
          </button>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {themeReady ? (
                theme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )
              ) : (
                <span className="block h-[18px] w-[18px]" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center space-x-1 rounded-full p-2 text-xs font-semibold uppercase text-zinc-600 transition-colors hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
              aria-label="Toggle language"
            >
              <Globe size={16} /> <span>{lang}</span>
            </button>
          </div>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pt-12">
        <header className="mb-12 text-center md:text-left">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <span className="rounded-full border border-violet-200 bg-violet-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
              {blog.category}
            </span>
            <span className="flex items-center text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <Calendar size={14} className="mr-2" /> {blog.date}
            </span>
            <span className="hidden items-center text-sm font-mono text-zinc-500 dark:text-zinc-400 sm:flex">
              <User size={14} className="mr-2" /> Phan Nguyen Tra Giang
            </span>
          </div>
          <h1 className="mb-8 text-4xl font-extrabold leading-tight text-zinc-900 dark:text-white md:text-5xl">
            {blog.title}
          </h1>

          <div className="relative mb-12 h-[40vh] w-full overflow-hidden rounded-3xl shadow-xl md:h-[50vh]">
            <div className="absolute inset-0 z-10 bg-zinc-900/10" />
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg prose-zinc max-w-none leading-relaxed text-zinc-700 prose-headings:text-zinc-900 prose-img:rounded-2xl prose-pre:border prose-pre:border-zinc-800 prose-pre:bg-zinc-900 prose-a:text-violet-500 hover:prose-a:text-violet-600 dark:prose-invert dark:text-zinc-300 dark:prose-headings:text-white">
          {blog.content}
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-sm italic text-zinc-500">{t("blogs.thanks")}</p>
          <button
            type="button"
            onClick={onBack}
            className="flex items-center font-medium text-violet-500 transition-colors hover:text-violet-600"
          >
            <ArrowLeft size={16} className="mr-2" />
            {bottomBackLabel ?? t("blogs.backHome")}
          </button>
        </div>
      </article>
    </motion.div>
  );
}
