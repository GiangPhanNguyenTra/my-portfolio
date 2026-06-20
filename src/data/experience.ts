export const experiences = [
  {
    id: "work",
    title: "Fullstack Developer",
    org: "CYBERTECH JSC",
    from: "07/2025",
    toCurrent: true,
    color: "cyan",
    items: [
      "Architected enterprise-grade RAG pipelines using Llama-3 and MongoDB Vector Search.",
      "Engineered highly concurrent asynchronous backends with FastAPI and Background Tasks.",
      "Fine-tuned OCR models (Vintern, PaddleOCR) for complex document extraction.",
      "Deployed low-latency WebSockets for real-time IoT AI Kiosks.",
    ],
  },
  {
    id: "education",
    title: "Software Engineering",
    org: "UIT - VNUHCM",
    from: "2022",
    toCurrent: true,
    color: "emerald",
    items: [
      "Current GPA: 9.1/10.0 (Excellent rating).",
      "Specializing in Backend Systems, Advanced AI Applications, and Data Structures.",
      "Active participant in multiple hackathons and academic research projects.",
    ],
  },
] as const;
