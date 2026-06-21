import type { Language } from "@/types/portfolio";

export type ExperienceItem = {
  id: string;
  title: Record<Language, string>;
  org: string;
  from: string;
  to?: string;
  toCurrent?: boolean;
  color: "cyan" | "emerald";
  items: Record<Language, string[]>;
};

export const experiences: readonly ExperienceItem[] = [
  {
    id: "work",
    title: {
      en: "Fullstack Developer",
      vi: "Lập trình viên Fullstack",
    },
    org: "CYBERTECH JSC",
    from: "05/2025",
    to: "05/2026",
    color: "cyan",
    items: {
      en: [
        "Architected enterprise-grade RAG pipelines using Llama-3 and MongoDB Vector Search.",
        "Engineered highly concurrent asynchronous backends with FastAPI and Background Tasks.",
        "Fine-tuned OCR models (Vintern, PaddleOCR) for complex document extraction.",
        "Deployed low-latency WebSockets for real-time IoT AI Kiosks.",
      ],
      vi: [
        "Thiết kế pipeline RAG ở mức doanh nghiệp bằng Llama-3 và MongoDB Vector Search.",
        "Xây dựng backend bất đồng bộ với khả năng xử lý đồng thời cao bằng FastAPI và Background Tasks.",
        "Tinh chỉnh các mô hình OCR như Vintern và PaddleOCR cho bài toán trích xuất tài liệu phức tạp.",
        "Triển khai WebSocket độ trễ thấp cho các kiosk AI IoT theo thời gian thực.",
      ],
    },
  },
  {
    id: "education",
    title: {
      en: "Software Engineering",
      vi: "Kỹ thuật Phần mềm",
    },
    org: "UIT - VNUHCM",
    from: "2022",
    to: "03/2026",
    color: "emerald",
    items: {
      en: [
        "Graduated with GPA 9.1/10.0 (Excellent).",
        "Focused on backend systems, advanced AI applications, and data structures.",
        "Participated actively in hackathons and academic research projects.",
      ],
      vi: [
        "Đã tốt nghiệp với GPA 9.1/10.0 (xếp loại Xuất sắc).",
        "Tập trung vào hệ thống backend, ứng dụng AI nâng cao và cấu trúc dữ liệu.",
        "Tham gia tích cực vào các cuộc thi hackathon và dự án nghiên cứu học thuật.",
      ],
    },
  },
] as const;
