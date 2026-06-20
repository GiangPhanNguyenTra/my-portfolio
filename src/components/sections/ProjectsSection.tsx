"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { projectsData } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

type ProjectsSectionProps = {
  t: (key: string) => string;
  projects?: Project[];
  limit?: number;
  showViewAll?: boolean;
  showSubtitle?: boolean;
  showHeader?: boolean;
};

export function ProjectsSection({
  t,
  projects = projectsData,
  limit = 4,
  showViewAll = true,
  showSubtitle = false,
  showHeader = true,
}: ProjectsSectionProps) {
  const router = useRouter();
  const visibleProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;
  const shouldShowViewAll = showViewAll;

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/20 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {showHeader && (
            <motion.div variants={fadeInUp} className="mb-16">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="text-center md:text-left">
                  <h2 className="inline-flex items-center text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
                    <Code className="mr-3 text-emerald-500" />
                    {t("projects.title")}
                  </h2>
                  {showSubtitle && (
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:mx-0">
                      {t("projects.subtitle")}
                    </p>
                  )}
                </div>

                {shouldShowViewAll && (
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-600 transition-colors hover:border-emerald-400 hover:bg-emerald-50 dark:border-emerald-500/20 dark:bg-zinc-900 dark:text-emerald-400 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10"
                  >
                    {t("projects.viewAll")}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                )}
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                onClick={() => router.push(`/projects/${project.id}`)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col h-full"
              >
                <div className="w-full h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {project.role}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-1">
                    {project.descShort}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
