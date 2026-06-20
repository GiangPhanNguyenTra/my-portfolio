import type { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "ride-hailing",
    title: "Ride-Hailing Dispatch System",
    role: "Backend Developer",
    category: "Backend Optimization",
    badge: "High-Concurrency Dispatch",
    descShort:
      "Matching drivers in < 5 seconds using KDTree and ThreadPoolExecutor.",
    descLong:
      "A high-performance Proof of Concept (PoC) for a ride-hailing dispatch system. It utilizes KDTree spatial indexing and multi-threading (ThreadPoolExecutor) to handle thousands of concurrent driver-matching requests, ensuring matches in under 5 seconds even under heavy load.",
    overview:
      "This project focused on solving one critical problem in ride-hailing products: assigning the nearest available driver under heavy concurrency without degrading latency. I built the backend architecture, optimized geo-search logic, and tuned the asynchronous pipeline to hit a consistent matching SLA.",
    tech: ["Python", "FastAPI", "KDTree", "ThreadPoolExecutor", "Redis"],
    features: [
      "Spatial indexing for fast geolocation queries",
      "Concurrent request handling",
      "Real-time state management",
      "Sub-5 second matching SLA",
    ],
    highlights: [
      { label: "Role", value: "Backend Developer" },
      { label: "Focus", value: "Dispatch latency optimization" },
      { label: "Outcome", value: "P99 matching down to 3.8 seconds" },
      { label: "Scale", value: "Thousands of concurrent requests" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
        alt: "Ride-hailing routing concept",
        caption: "Core matching flow designed for low-latency geospatial lookup.",
      },
      {
        src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
        alt: "Traffic data visualization",
        caption: "Simulation scenarios used to validate dispatch behavior under load.",
      },
    ],
    link: "https://github.com/GiangPhanNguyenTra/Demo_MatchingDriver",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "price-calculator",
    title: "Dynamic Price Calculator",
    role: "Backend Developer",
    category: "Pricing Engine",
    badge: "Real-Time Fare Logic",
    descShort:
      "Dynamic pricing for 10,000 trips in < 3s based on supply/demand.",
    descLong:
      "An advanced pricing engine simulating complex ride-hailing economics. It calculates dynamic surge pricing for up to 10,000 simultaneous trip requests in under 3 seconds by analyzing real-time supply vs demand, simulated weather conditions, and traffic density.",
    overview:
      "I designed this pricing service to model realistic ride-hailing economics while staying efficient enough for high request volume. The main challenge was combining multiple business signals without turning the calculation pipeline into a bottleneck.",
    tech: ["Python", "Pandas", "NumPy", "FastAPI", "Celery"],
    features: [
      "High-throughput data processing",
      "Multi-variable dynamic pricing algorithm",
      "Asynchronous task queues",
      "Stress-tested for 10k concurrent trips",
    ],
    highlights: [
      { label: "Role", value: "Backend Developer" },
      { label: "Focus", value: "Surge pricing logic" },
      { label: "Outcome", value: "10,000 requests processed under 3 seconds" },
      { label: "Signals", value: "Supply, demand, weather, traffic" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        alt: "Pricing dashboard",
        caption: "Pricing engine output modeled around supply-demand imbalance.",
      },
      {
        src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
        alt: "Analytics workspace",
        caption: "Stress tests and scenario analysis for large trip batches.",
      },
    ],
    link: "https://github.com/GiangPhanNguyenTra/Demo_PriceCalculator",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "toxic-comment",
    title: "Toxic Comment Classification",
    role: "Machine Learning Engineer",
    category: "Machine Learning",
    badge: "RoBERTa Fine-Tuning",
    descShort:
      "Fine-tuned RoBERTa achieving 98.97% ROC-AUC with mixed precision.",
    descLong:
      "An NLP pipeline built to identify and classify multiple types of toxic online behavior. By fine-tuning a pre-trained RoBERTa model and utilizing mixed precision training (FP16), the system achieves an outstanding 98.97% ROC-AUC score while maintaining efficient inference times.",
    overview:
      "This project explored how to deliver strong toxicity detection without wasting GPU resources. I handled data preprocessing, training setup, mixed precision tuning, and evaluation pipelines to improve both model quality and training efficiency.",
    tech: [
      "PyTorch",
      "HuggingFace Transformers",
      "RoBERTa",
      "Pandas",
      "Scikit-Learn",
    ],
    features: [
      "Multi-label text classification",
      "FP16 Mixed Precision Training",
      "Custom dataset preprocessing",
      "High-accuracy validation metrics",
    ],
    highlights: [
      { label: "Role", value: "Machine Learning Engineer" },
      { label: "Focus", value: "Text toxicity detection" },
      { label: "Outcome", value: "98.97% ROC-AUC" },
      { label: "Optimization", value: "45% lower VRAM usage with FP16" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        alt: "Code on screen",
        caption: "Training pipeline for multi-label toxicity classification.",
      },
      {
        src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2070&auto=format&fit=crop",
        alt: "Model evaluation charts",
        caption: "Evaluation focused on strong metrics without sacrificing throughput.",
      },
    ],
    link: "https://github.com/GiangPhanNguyenTra/multi-toxic-text-detection",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "wordwise",
    title: "WordWise AI Ecosystem",
    role: "Fullstack AI Developer",
    category: "AI Integration",
    badge: "Language Learning Platform",
    descShort: "Multi-Agent Chatbot, AI Pronunciation Scoring, Core Dashboard.",
    descLong:
      "A comprehensive AI ecosystem for language learning. Features a Multi-Agent chatbot powered by LangGraph to simulate complex conversations, and an advanced pronunciation scoring system utilizing OpenAI Whisper and Dynamic Time Warping (DTW) algorithm for precise phoneme-level feedback.",
    overview:
      "WordWise combined multiple AI capabilities into one language-learning experience. I worked across backend services, AI orchestration, and product-facing interfaces to connect conversation agents, speech scoring, and learning analytics in one ecosystem.",
    tech: ["LangGraph", "Llama-3", "Whisper", "React", "FastAPI", "MongoDB"],
    features: [
      "Stateful multi-agent conversations",
      "Audio processing & ASR",
      "DTW-based pronunciation scoring",
      "Full-stack dashboard integration",
    ],
    highlights: [
      { label: "Role", value: "Fullstack AI Developer" },
      { label: "Focus", value: "Conversational AI + speech scoring" },
      { label: "Outcome", value: "Unified AI ecosystem for learners" },
      { label: "Stack", value: "LangGraph, Whisper, FastAPI, React" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        alt: "AI interface concept",
        caption: "Core dashboard bringing agents, learning flow, and analytics together.",
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        alt: "Language app collaboration",
        caption: "A product direction centered on feedback loops for pronunciation and fluency.",
      },
    ],
    link: "https://github.com/GiangPhanNguyenTra/wordwise-chatbot",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
  },
];
