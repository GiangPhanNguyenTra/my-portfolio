import type { Language } from "@/types/portfolio";

export const testimonials = [
  {
    name: "Nguyen Tan Dung",
    role: {
      en: "University Teammate",
      vi: "Đồng đội ở đại học",
    },
    initials: "NK",
    accent: "emerald",
    quote: {
      en: "Giang is the kind of teammate who quietly solves the hard parts. She thinks deeply about architecture, moves fast without becoming careless, and always keeps the long-term maintainability of the system in view. Working with her feels reliable because she brings both speed and structure.",
      vi: "Giang là kiểu đồng đội âm thầm xử lý những phần khó nhất. Bạn ấy suy nghĩ kỹ về kiến trúc, làm nhanh nhưng vẫn cẩn thận và luôn giữ được góc nhìn dài hạn về khả năng bảo trì của hệ thống. Làm việc cùng Giang tạo cảm giác rất yên tâm vì bạn ấy có cả tốc độ lẫn sự chỉn chu.",
    },
  },
  {
    name: "Tran Dinh Phuong Linh",
    role: {
      en: "Colleague at Cybertech JSC",
      vi: "Đồng nghiệp tại Cybertech JSC",
    },
    initials: "TH",
    accent: "violet",
    quote: {
      en: "What I appreciate most is her ownership. She does not stop at shipping code. She cares whether the feature actually works for users, whether edge cases are handled, and whether the team can continue building on top of what she delivered. That mindset is rare and incredibly valuable.",
      vi: "Điều tôi trân trọng nhất là tinh thần ownership của Giang. Bạn ấy không dừng lại ở việc giao code, mà còn quan tâm tính năng có thực sự hoạt động với người dùng hay không, edge case đã được xử lý chưa, và team có thể tiếp tục phát triển trên nền đó không. Tư duy như vậy rất hiếm và cực kỳ giá trị.",
    },
  },
  {
    name: "Dang Thi Ngoc Minh",
    role: {
      en: "Colleague at Cybertech JSC",
      vi: "Đồng nghiệp tại Cybertech JSC",
    },
    initials: "NM",
    accent: "cyan",
    quote: {
      en: "She learns extremely quickly and brings calm energy to projects. Even under pressure, Giang stays organized, communicates clearly, and helps everyone around her move forward. She is the kind of person who improves both the technical direction and the team dynamic at the same time.",
      vi: "Giang học cực nhanh và luôn mang đến nguồn năng lượng bình tĩnh cho dự án. Ngay cả khi áp lực cao, bạn ấy vẫn giữ được sự tổ chức, giao tiếp rõ ràng và giúp mọi người xung quanh cùng tiến lên. Giang là kiểu người cải thiện đồng thời cả định hướng kỹ thuật lẫn tinh thần của cả team.",
    },
  },
] as const;
