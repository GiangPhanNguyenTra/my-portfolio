"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Layers3, Monitor, Sparkles } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Project } from "@/types/portfolio";

type ProjectDetailPageClientProps = {
  project: Project;
};

export function ProjectDetailPageClient({
  project,
}: ProjectDetailPageClientProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400"
        >
          <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
            <ArrowLeft size={16} />
          </span>
          {t("projects.backList")}
        </Link>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                Project Detail
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                {project.badge}
              </span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.highlights.map((item, index) => {
                const Icon = index % 2 === 0 ? Monitor : Layers3;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-emerald-500 dark:bg-zinc-800">
                      <Icon size={20} />
                    </div>
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="px-2 pt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
              {project.screenshots[0]?.caption}
            </p>
          </div>
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <h2 className="flex items-center text-2xl font-bold text-zinc-900 dark:text-white">
              <Sparkles className="mr-3 text-emerald-500" size={22} />
              Project Story
            </h2>
            <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
              {project.descLong}
            </p>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Key Features
              </h3>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mt-2 mr-3 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              <GitHubIcon className="mr-2 h-[18px] w-[18px]" />
              {t("projects.viewSource")}
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Screens & Highlights
            </h2>
            <div className="mt-6 grid gap-6">
              {project.screenshots.map((shot) => (
                <figure
                  key={shot.src}
                  className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-2 pt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
