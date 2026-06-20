"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "lucide-react";
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
import { useMounted } from "@/hooks/useMounted";
import { scrollSpySections } from "@/config/navigation";
import type { ThemeMode } from "@/types/portfolio";

const LOADER_SESSION_KEY = "portfolio-loader-seen";

function Loader({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState("");
  const fullText = "Initializing system...";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i += 1;
      if (i > fullText.length) {
        clearInterval(timer);
        setTimeout(onComplete, 800);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="flex items-center gap-2 font-mono text-xl text-emerald-500 md:text-2xl">
        <Terminal size={28} className="animate-pulse" />
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block h-6 w-3 bg-emerald-500"
        />
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="relative mt-8 h-1 overflow-hidden rounded-full bg-emerald-500/20"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-full w-1/2 bg-emerald-500"
        />
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const mounted = useMounted();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const { lang, toggleLang, t } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const effectiveTheme =
    ((resolvedTheme ?? theme ?? "dark") as ThemeMode) || "dark";
  const activeSection = useActiveSection(scrollSpySections, 200);

  useEffect(() => {
    if (!mounted) return;

    const hasSeenLoader = window.sessionStorage.getItem(LOADER_SESSION_KEY);
    if (hasSeenLoader) {
      const frame = window.requestAnimationFrame(() => {
        setReady(true);
      });

      return () => window.cancelAnimationFrame(frame);
    }

    const frame = window.requestAnimationFrame(() => {
      setLoading(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [mounted]);

  if (!mounted) {
    return <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950" />;
  }

  const toggleTheme = () => {
    setTheme(effectiveTheme === "dark" ? "light" : "dark");
  };

  const handleLoaderComplete = () => {
    window.sessionStorage.setItem(LOADER_SESSION_KEY, "true");
    setLoading(false);
    setReady(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-emerald-500/30 dark:bg-zinc-950 dark:text-zinc-50">
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {ready && !loading && (
          <motion.div
            key="main-portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
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
              <ExperienceSection t={t} />
              <ProjectsSection t={t} />
              <BlogsSection
                t={t}
                onSelectBlog={(blog) => router.push(`/blogs/${blog.id}`)}
              />
              <WhyHireMeSection t={t} />
              <TestimonialsSection t={t} />
              <ContactSection t={t} />
            </main>

            <Footer t={t} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
