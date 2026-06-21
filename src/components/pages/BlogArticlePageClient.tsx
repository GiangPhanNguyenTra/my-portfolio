"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { BlogModal } from "@/components/modals/BlogModal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { blogsData } from "@/data/blogs";
import { useMounted } from "@/hooks/useMounted";
import type { ThemeMode } from "@/types/portfolio";

type BlogArticlePageClientProps = {
  blogId: string;
};

export function BlogArticlePageClient({
  blogId,
}: BlogArticlePageClientProps) {
  const router = useRouter();
  const { lang, toggleLang, t } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const blog = blogsData.find((item) => item.id === blogId) ?? null;
  const effectiveTheme =
    ((resolvedTheme ?? theme ?? "dark") as ThemeMode) || "dark";

  const toggleTheme = () => {
    setTheme(effectiveTheme === "dark" ? "light" : "dark");
  };

  if (!blog) return null;

  return (
    <BlogModal
      blog={blog}
      onBack={() => router.push("/blogs")}
      theme={effectiveTheme}
      themeReady={mounted}
      toggleTheme={toggleTheme}
      lang={lang}
      toggleLang={toggleLang}
      t={t}
      topBackLabel={t("blogs.backList")}
      bottomBackLabel={t("blogs.backList")}
    />
  );
}
