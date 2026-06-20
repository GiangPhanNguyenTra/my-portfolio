"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ExternalLink, X } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import type { Project } from "@/types/portfolio";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  t: (key: string) => string;
};

export function ProjectModal({ project, onClose, t }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-30 cursor-pointer rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/70"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>

          <div className="no-scrollbar flex-1 overflow-y-auto">
            <div className="relative h-64 w-full sm:h-80">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 56rem, 100vw"
                className="object-cover"
              />
              <div className="absolute right-6 bottom-6 left-6 z-20">
                <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <div>
                <h3 className="mb-3 text-lg font-bold text-zinc-900 dark:text-white">
                  Overview
                </h3>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.descLong}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-bold text-zinc-900 dark:text-white">
                  Key Features
                </h3>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="mt-0.5 mr-2 shrink-0 text-emerald-500"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-bold text-zinc-900 dark:text-white">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600 sm:w-auto"
            >
              <GitHubIcon className="mr-2 h-[18px] w-[18px]" />
              {t("projects.viewSource")}
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
