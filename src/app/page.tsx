"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { WhyHireMeSection } from "@/components/sections/WhyHireMeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollSpySections } from "@/config/navigation";
import type { ThemeMode } from "@/types/portfolio";

export default function HomePage() {
  const router = useRouter();
  const { lang, toggleLang, t } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const effectiveTheme =
    ((resolvedTheme ?? theme ?? "dark") as ThemeMode) || "dark";
  const activeSection = useActiveSection(scrollSpySections, 200);

  const toggleTheme = () => {
    setTheme(effectiveTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-emerald-500/30 dark:bg-zinc-950 dark:text-zinc-50">
      <motion.div
        key="main-portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar
          lang={lang}
          toggleLang={toggleLang}
          theme={effectiveTheme}
          toggleTheme={toggleTheme}
          activeSection={activeSection === "hero" ? "" : activeSection}
          t={t}
        />

        <main>
          <HeroSection lang={lang} t={t} />
          <AboutSection t={t} />
          <SkillsSection t={t} />
          <ExperienceSection lang={lang} t={t} />
          <ProjectsSection t={t} />
          <BlogsSection
            t={t}
            onSelectBlog={(blog) => router.push(`/blogs/${blog.id}`)}
          />
          <WhyHireMeSection t={t} />
          <TestimonialsSection lang={lang} t={t} />
          <ContactSection t={t} />
        </main>

        <Footer t={t} />
      </motion.div>
    </div>
  );
}
