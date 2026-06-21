"use client";

import Link from "next/link";
import { ArrowLeft, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useMounted } from "@/hooks/useMounted";
import type { ThemeMode } from "@/types/portfolio";

type SubpageHeaderProps = {
  title: string;
  description: string;
  backHref?: string;
};

export function SubpageHeader({
  title,
  description,
  backHref = "/",
}: SubpageHeaderProps) {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const effectiveTheme =
    ((resolvedTheme ?? theme ?? "dark") as ThemeMode) || "dark";

  const toggleTheme = () => {
    setTheme(effectiveTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 left-0 z-50 border-b border-zinc-200/50 bg-zinc-50/85 backdrop-blur-lg dark:border-white/10 dark:bg-zinc-950/85">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-5 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            href={backHref}
            className="mb-5 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400"
          >
            <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 transition-colors dark:bg-zinc-800">
              <ArrowLeft size={16} />
            </span>
            {t("common.backHome")}
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>

        <div className="flex items-center space-x-3 self-start md:self-auto">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {mounted ? (
              effectiveTheme === "dark" ? (
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
            <Globe size={16} />
            <span>{lang}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
