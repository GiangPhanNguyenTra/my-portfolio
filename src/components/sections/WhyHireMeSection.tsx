"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  Handshake,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { whyHireItems } from "@/data/whyHire";
import { fadeInUp, staggerContainer } from "@/lib/utils";

type WhyHireMeSectionProps = {
  t: (key: string) => string;
};

const icons = [
  Briefcase,
  BrainCircuit,
  Rocket,
  Handshake,
  ShieldCheck,
  Layers3,
] as const;

const accentClasses = {
  emerald:
    "text-emerald-500 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20",
  violet:
    "text-violet-500 bg-violet-50 border-violet-200 dark:bg-violet-500/10 dark:border-violet-500/20",
  cyan:
    "text-cyan-500 bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10 dark:border-cyan-500/20",
  amber:
    "text-amber-500 bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20",
} as const;

export function WhyHireMeSection({ t }: WhyHireMeSectionProps) {
  return (
    <section id="why-hire-me" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="inline-flex items-center text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              <Briefcase className="mr-3 text-emerald-500" />
              {t("hire.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 md:text-[15px]">
              {t("hire.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mb-8 rounded-[2rem] border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-500">
                  {t("hire.leadLabel")}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-tight text-zinc-900 dark:text-white md:text-[2rem]">
                  {t("hire.leadTitle")}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-8 text-zinc-600 dark:text-zinc-400">
                  {t("hire.leadDesc")}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                    {t("hire.summary1.label")}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    {t("hire.summary1.value")}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                    {t("hire.summary2.label")}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    {t("hire.summary2.value")}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                    {t("hire.summary3.label")}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    {t("hire.summary3.value")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyHireItems.map((item, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={item.titleKey}
                  variants={fadeInUp}
                  className="group rounded-[2rem] border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${accentClasses[item.accent]}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                    {t(item.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
