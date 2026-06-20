import { notFound } from "next/navigation";
import { BlogArticlePageClient } from "@/components/pages/BlogArticlePageClient";
import { blogsData } from "@/data/blogs";

type BlogArticlePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { id } = await params;

  if (!blogsData.some((blog) => blog.id === id)) {
    notFound();
  }

  return <BlogArticlePageClient blogId={id} />;
}
