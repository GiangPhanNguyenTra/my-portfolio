import { notFound } from "next/navigation";
import { ProjectDetailPageClient } from "@/components/pages/ProjectDetailPageClient";
import { projectsData } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projectsData.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageClient project={project} />;
}
