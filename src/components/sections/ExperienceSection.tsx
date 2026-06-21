"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { Language } from "@/types/portfolio";

type ExperienceSectionProps = {
  lang: Language;
  t: (key: string) => string;
};

export function ExperienceSection({ lang, t }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-[31.25rem] w-[31.25rem] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none dark:bg-cyan-500/5" />
      <div className="absolute bottom-0 left-0 h-[31.25rem] w-[31.25rem] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none dark:bg-emerald-500/5" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white inline-flex items-center">
              <Briefcase className="text-cyan-500 mr-3" />
              {t("exp.title")}
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-8">
            {experiences.map((exp, index) => {
              const isWork = exp.id === "work";
              const color = exp.color === "cyan" ? "cyan" : "emerald";
              const NodeIcon = isWork ? Building2 : GraduationCap;

              return (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className={`${index === 0 ? "mb-16" : ""} relative pl-8 md:pl-12 group`}
                >
                  <div
                    className={`absolute -left-[0.6875rem] top-1 h-5 w-5 rounded-full ${color === "cyan" ? "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]" : "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"} border-4 border-white dark:border-zinc-950 group-hover:scale-125 transition-transform duration-300`}
                  />

                  <div
                    className={`bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${color === "cyan" ? "hover:border-cyan-500/30" : "hover:border-emerald-500/30"}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3
                          className={`text-2xl font-bold text-zinc-900 dark:text-white transition-colors ${color === "cyan" ? "group-hover:text-cyan-500" : "group-hover:text-emerald-500"}`}
                        >
                          {exp.title[lang]}
                        </h3>
                        <div className="flex items-center text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
                          <NodeIcon size={16} className="mr-2" /> {exp.org}
                        </div>
                      </div>

                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full font-mono text-sm border whitespace-nowrap w-fit ${color === "cyan" ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-500/20" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20"}`}
                        >
                          <Calendar size={14} className="mr-2" />
                          {exp.from} - {exp.toCurrent ? t("exp.current") : exp.to}
                      </div>
                    </div>

                    <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 mt-6">
                      {exp.items[lang].map((item) => (
                        <li key={item} className="flex items-start">
                          <ChevronRight
                            className={`w-5 h-5 shrink-0 mr-2 ${color === "cyan" ? "text-cyan-500" : "text-emerald-500"}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
