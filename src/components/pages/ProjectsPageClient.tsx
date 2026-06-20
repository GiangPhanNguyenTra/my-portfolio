"use client";

import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { projectsData } from "@/data/projects";

export function ProjectsPageClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <SubpageHeader
        title={t("projects.title")}
        description={t("projects.subtitle")}
      />

      <main>
        <ProjectsSection
          t={t}
          projects={projectsData}
          limit={projectsData.length}
          showViewAll={false}
          showSubtitle={false}
          showHeader={false}
        />
      </main>

      <Footer t={t} />
    </div>
  );
}
