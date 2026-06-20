"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, Terminal } from "lucide-react";
import { skillsData } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/utils";

type SkillsSectionProps = {
  t: (key: string) => string;
};

const iconMap = {
  code: Code,
  terminal: Terminal,
  globe: Globe,
  cpu: Cpu,
  database: Database,
} as const;

export function SkillsSection({ t }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/20 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white inline-flex items-center">
              <Cpu className="text-violet-500 mr-3" />
              {t("skills.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category) => {
              const Icon = iconMap[category.iconName];

              return (
                <motion.div
                  key={category.category}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-violet-500">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                        {category.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
