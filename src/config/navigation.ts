import type { TranslationKey } from "@/i18n/types";

export type NavItem = {
  id: string;
  labelKey: TranslationKey;
};

export const navItems: NavItem[] = [
  { id: "about", labelKey: "nav.about" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "blogs", labelKey: "nav.blogs" },
  { id: "testimonials", labelKey: "nav.testimonials" },
  { id: "contact", labelKey: "nav.contact" },
];

export const scrollSpySections = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "blogs",
  "why-hire-me",
  "testimonials",
  "contact",
];
