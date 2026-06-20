"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Terminal } from "lucide-react";
import { blogsData } from "@/data/blogs";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { BlogPost } from "@/types/portfolio";

type BlogsSectionProps = {
  t: (key: string) => string;
  onSelectBlog: (blog: BlogPost) => void;
  blogs?: BlogPost[];
  limit?: number;
  showViewAll?: boolean;
  showSubtitle?: boolean;
  showHeader?: boolean;
};

export function BlogsSection({
  t,
  onSelectBlog,
  blogs = blogsData,
  limit = 3,
  showViewAll = true,
  showSubtitle = false,
  showHeader = true,
}: BlogsSectionProps) {
  const visibleBlogs = typeof limit === "number" ? blogs.slice(0, limit) : blogs;
  const shouldShowViewAll = showViewAll;

  return (
    <section id="blogs" className="py-24 relative">
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
                    <Terminal className="mr-3 text-violet-500" />
                    {t("blogs.title")}
                  </h2>
                  {showSubtitle && (
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:mx-0">
                      {t("blogs.subtitle")}
                    </p>
                  )}
                </div>

                {shouldShowViewAll && (
                  <Link
                    href="/blogs"
                    className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-5 py-2.5 text-sm font-semibold text-violet-600 transition-colors hover:border-violet-400 hover:bg-violet-50 dark:border-violet-500/20 dark:bg-zinc-900 dark:text-violet-400 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
                  >
                    {t("blogs.viewAll")}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                )}
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleBlogs.map((blog) => (
              <motion.article
                key={blog.id}
                variants={fadeInUp}
                onClick={() => onSelectBlog(blog)}
                className="group flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:border-violet-500/30 transition-all cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-xs font-bold rounded-full text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-zinc-500 mb-2 font-mono flex items-center">
                    <Calendar size={14} className="mr-1.5" /> {blog.date}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-violet-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-1 line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                  <button className="text-violet-500 font-medium inline-flex items-center group-hover:text-violet-600 transition-colors mt-auto w-fit">
                    {t("blogs.readMore")}{" "}
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
