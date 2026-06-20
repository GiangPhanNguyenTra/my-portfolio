"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/utils";

type ContactSectionProps = {
  t: (key: string) => string;
};

const contactItems = (t: (key: string) => string) => [
  {
    label: "Email",
    value: siteConfig.emailText,
    href: siteConfig.email,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "phan-nguyen-tra-giang",
    href: siteConfig.linkedinUrl,
    Icon: LinkedInIcon,
  },
  {
    label: t("contact.phone"),
    value: siteConfig.phoneText,
    href: siteConfig.phoneHref,
    Icon: Phone,
  },
  {
    label: t("contact.location"),
    value: "Ho Chi Minh City, Vietnam",
    href: undefined,
    Icon: MapPin,
  },
];

export function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="inline-flex items-center text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              <Mail className="mr-3 text-emerald-500" />
              {t("contact.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={fadeInUp}
              className="rounded-[2rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-6 rounded-[1.75rem] border border-emerald-100 bg-emerald-50/70 p-5 dark:border-emerald-500/15 dark:bg-emerald-500/10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                  Let&apos;s Connect
                </p>
                <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
                  I&apos;m open to backend, full-stack, and AI integration
                  opportunities. If you have a role, freelance project, or
                  collaboration idea in mind, feel free to reach out.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactItems(t).map(({ label, value, href, Icon }) => {
                  const body = (
                    <div className="group rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 transition-all duration-300 hover:border-emerald-400/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-500 shadow-sm dark:bg-zinc-900">
                        <Icon size={20} />
                      </div>
                      <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        {label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-zinc-900 break-words dark:text-white">
                        {value}
                      </p>
                    </div>
                  );

                  if (!href) {
                    return <div key={label}>{body}</div>;
                  }

                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="block"
                    >
                      {body}
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              className="rounded-[2rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-7"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {t("contact.company")}
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                />
              </div>

              <div className="mt-5 space-y-2">
                <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {t("contact.message")}
                </label>
                <textarea
                  rows={7}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-[1.5rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                />
              </div>

              <button
                type="button"
                className="mt-6 inline-flex cursor-pointer items-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                {t("contact.send")}
                <Send size={16} className="ml-2" />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
