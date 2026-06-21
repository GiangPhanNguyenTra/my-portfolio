"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { rolesByLanguage } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { Language } from "@/types/portfolio";
import { siteConfig } from "@/config/site";

type HeroSectionProps = {
  lang: Language;
  t: (key: string) => string;
};

export function HeroSection({ lang, t }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roleList = rolesByLanguage[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roleList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roleList.length]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute top-1/2 left-1/2 h-[37.5rem] w-[37.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[120px] pointer-events-none dark:bg-emerald-500/10" />
      <div className="absolute top-1/4 right-1/4 h-[25rem] w-[25rem] rounded-full bg-violet-500/20 blur-[100px] pointer-events-none dark:bg-violet-500/10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-sm"
          >
            {t("hero.greeting")}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4"
          >
            {t("hero.name")}
          </motion.h1>

          <motion.div variants={fadeInUp} className="h-12 md:h-16 mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-cyan-500"
              >
                {roleList[currentRoleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center space-x-2"
            >
              <span>{t("hero.cta.work")}</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium transition-all flex items-center justify-center space-x-2"
            >
              <span>{t("hero.cta.resume")}</span>
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center justify-center md:justify-start space-x-6 text-zinc-500 dark:text-zinc-400"
          >
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href={siteConfig.email}
              className="hover:text-emerald-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-mono">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-zinc-400 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-emerald-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
