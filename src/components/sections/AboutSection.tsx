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
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-8 text-zinc-900 dark:text-white flex items-center"
            >
              <Terminal className="text-emerald-500 mr-3" />
              {t("about.title")}
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg"
            >
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-1">
                  <AnimatedCounter from={0} to={17} />
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">
                  {t("about.stat.repos")}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center">
                <div className="text-3xl font-bold text-violet-500 mb-1">9.1</div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">
                  {t("about.stat.commits")}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-1">B2</div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">
                  {t("about.stat.lang")}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-violet-500/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 font-mono text-sm text-zinc-800 dark:text-zinc-300 shadow-xl overflow-hidden group">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-2">
                <p>
                  <span className="text-emerald-500">const</span>{" "}
                  <span className="text-violet-500">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  name:{" "}
                  <span className="text-yellow-600 dark:text-yellow-300">
                    &apos;Phan Nguyễn Trà Giang&apos;
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

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 transition-colors duration-500 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
