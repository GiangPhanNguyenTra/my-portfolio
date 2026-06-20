"use client";

import { useRouter } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { blogsData } from "@/data/blogs";

export function BlogsPageClient() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <SubpageHeader
        title={t("blogs.title")}
        description={t("blogs.subtitle")}
      />

      <main>
        <BlogsSection
          t={t}
          blogs={blogsData}
          limit={blogsData.length}
          showViewAll={false}
          showSubtitle={false}
          showHeader={false}
          onSelectBlog={(blog) => router.push(`/blogs/${blog.id}`)}
        />
      </main>

      <Footer t={t} />
    </div>
  );
}
