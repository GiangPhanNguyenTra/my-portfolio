import type { ReactNode } from "react";

export type Language = "en" | "vi";
export type ThemeMode = "dark" | "light";

export type SkillIcon = "code" | "terminal" | "globe" | "cpu" | "database";

export type SkillCategory = {
  category: string;
  iconName: SkillIcon;
  items: string[];
};

export type ProjectHighlight = {
  label: string;
  value: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  role: string;
  category: string;
  badge: string;
  descShort: string;
  descLong: string;
  overview: string;
  tech: string[];
  features: string[];
  highlights: ProjectHighlight[];
  screenshots: ProjectScreenshot[];
  link: string;
  image: string;
};

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: ReactNode;
};
