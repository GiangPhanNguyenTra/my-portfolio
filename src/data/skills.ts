import type { SkillCategory } from "@/types/portfolio";

export const skillsData: SkillCategory[] = [
  {
    category: "Core Languages",
    iconName: "code",
    items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Backend & Architecture",
    iconName: "terminal",
    items: ["FastAPI", "Spring Boot", "Flask", "WebSocket", "Redis", "Celery"],
  },
  {
    category: "Frontend",
    iconName: "globe",
    items: [
      "Next.js",
      "ReactJS",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "AI & NLP",
    iconName: "cpu",
    items: [
      "LLMs (Llama-3)",
      "RAG Pipeline",
      "LangGraph",
      "OpenAI Whisper",
      "Silero TTS",
      "RoBERTa",
    ],
  },
  {
    category: "Database & DevOps",
    iconName: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Docker", "Nginx"],
  },
];
