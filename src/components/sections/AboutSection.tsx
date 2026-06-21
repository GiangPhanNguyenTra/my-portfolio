"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

type AboutSectionProps = {
  t: (key: string) => string;
};

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;

    let startTime: number;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (to - from) + from);

      if (nodeRef.current) {
        nodeRef.current.textContent = current.toString();
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, from, to]);

  return <span ref={nodeRef}>{from}</span>;
}

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
        >
          <div>
            <motion.h2
              variants={fadeInUp}
              className="mb-8 flex items-center text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl"
            >
              <Terminal className="mr-3 text-emerald-500" />
              {t("about.title")}
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-3 gap-3 sm:gap-6"
            >
              <div className="rounded-xl border border-zinc-200 bg-zinc-100 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-4">
                <div className="mb-1 text-3xl font-bold text-emerald-500">
                  <AnimatedCounter from={0} to={17} />
                </div>
                <div className="text-[10px] uppercase leading-tight tracking-[0.18em] text-zinc-500 sm:text-xs">
                  {t("about.stat.repos")}
                </div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-100 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-4">
                <div className="mb-1 text-3xl font-bold text-violet-500">9.1</div>
                <div className="text-[10px] uppercase leading-tight tracking-[0.18em] text-zinc-500 sm:text-xs">
                  {t("about.stat.commits")}
                </div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-100 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-4">
                <div className="mb-1 text-3xl font-bold text-cyan-500">B2</div>
                <div className="text-[10px] uppercase leading-tight tracking-[0.18em] text-zinc-500 sm:text-xs">
                  {t("about.stat.lang")}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-violet-500/20 blur-2xl" />
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/50 p-6 font-mono text-sm text-zinc-800 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-300">
              <div className="mb-4 flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-2">
                <p>
                  <span className="text-emerald-500">const</span>{" "}
                  <span className="text-violet-500">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  name:{" "}
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;Phan Nguyen Tra Giang&apos;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  role:{" "}
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;Fullstack AI Engineer&apos;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  education:{" "}
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;UIT - VNUHCM&apos;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  gpa: <span className="text-cyan-500">9.1</span>,
                </p>
                <p className="pl-4">
                  skills: [
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;React&apos;
                  </span>
                  ,{" "}
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;FastAPI&apos;
                  </span>
                  ,{" "}
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;Llama-3&apos;
                  </span>
                  , ...],
                </p>
                <p className="pl-4">
                  passion: <span className="text-emerald-500">() =&gt;</span>{" "}
                  {"{"}
                </p>
                <p className="pl-8">
                  return{" "}
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;Building scalable AI systems&apos;
                  </span>
                  ;
                </p>
                <p className="pl-4">{"}"}</p>
                <p>{"};"}</p>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-emerald-500/50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
