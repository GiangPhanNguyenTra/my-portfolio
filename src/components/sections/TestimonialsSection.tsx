"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { Language } from "@/types/portfolio";

type TestimonialsSectionProps = {
  lang: Language;
  t: (key: string) => string;
};

const AUTO_ADVANCE_MS = 6500;
const POST_INTERACTION_MS = 10000;

const accentClasses = {
  emerald:
    "from-emerald-500 to-teal-500 shadow-[0_12px_30px_rgba(16,185,129,0.25)]",
  violet:
    "from-violet-500 to-fuchsia-500 shadow-[0_12px_30px_rgba(139,92,246,0.25)]",
  cyan:
    "from-cyan-500 to-sky-500 shadow-[0_12px_30px_rgba(6,182,212,0.25)]",
} as const;

export function TestimonialsSection({ lang, t }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [postInteractionSlow, setPostInteractionSlow] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const delay = postInteractionSlow ? POST_INTERACTION_MS : AUTO_ADVANCE_MS;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setPostInteractionSlow(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, postInteractionSlow]);

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
    setPostInteractionSlow(true);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setPostInteractionSlow(true);
  };

  const activeItem = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-zinc-50 py-24 dark:bg-zinc-900/20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="text-center md:text-left">
                <h2 className="inline-flex items-center text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
                  <Quote className="mr-3 text-violet-500" />
                  {t("testimonials.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 md:mx-0 md:text-[15px]">
                  {t("testimonials.subtitle")}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 md:justify-end">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-violet-400 hover:text-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-violet-400 hover:text-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.name}
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -70 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => {
                  setIsPaused(false);
                  setPostInteractionSlow(true);
                }}
                onFocusCapture={() => setIsPaused(true)}
                onBlurCapture={() => {
                  setIsPaused(false);
                  setPostInteractionSlow(true);
                }}
              >
                <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-linear-to-br text-lg font-bold text-white ${accentClasses[activeItem.accent]}`}
                  >
                    {activeItem.initials}
                  </div>

                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {activeItem.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {activeItem.role[lang]}
                  </p>

                  <div className="mt-7 flex gap-2">
                    {testimonials.map((item, index) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => {
                          setActiveIndex(index);
                          setPostInteractionSlow(true);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          index === activeIndex
                            ? "w-8 bg-violet-500"
                            : "w-2 bg-zinc-300 dark:bg-zinc-700"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
                  <Quote
                    className="mb-5 text-zinc-300 dark:text-zinc-700"
                    size={34}
                  />
                  <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300 md:text-[17px]">
                    {activeItem.quote[lang]}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
