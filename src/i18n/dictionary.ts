import type { Dictionary, Language } from "./types";

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.blogs": "Blogs",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.name": "Phan Nguyễn Trà Giang",
    "hero.desc":
      "I build high-performance systems and integrate AI to solve real-world problems. 236+ GitHub contributions in the last year.",
    "hero.cta.work": "View My Work",
    "hero.cta.resume": "Download Resume",

    "about.title": "About Me",
    "about.p1":
      "I am a passionate Fullstack Developer and AI Integrator who graduated from the University of Information Technology (UIT - VNUHCM) with an Excellent GPA of 9.1/10.0.",
    "about.p2":
      "With over a year of professional experience and two years of deep project development, I specialize in building secure, scalable architectures and bridging the gap between cutting-edge Machine Learning models and robust enterprise applications.",
    "about.stat.repos": "Repositories",
    "about.stat.commits": "UIT GPA",
    "about.stat.lang": "VSTEP Level",

    "skills.title": "Technical Arsenal",
    "exp.title": "Experience",
    "exp.current": "Present",

    "projects.title": "Featured Projects",
    "projects.subtitle":
      "A selected snapshot from a larger body of work across backend systems, AI products, and full-stack engineering.",
    "projects.viewSource": "View Source Code",
    "projects.viewAll": "View All Projects",
    "projects.backList": "Back to Projects",

    "blogs.title": "Technical Writing",
    "blogs.subtitle":
      "A few highlighted articles from a broader collection of notes, engineering deep dives, and AI experiments.",
    "blogs.readMore": "Read More",
    "blogs.viewAll": "View All Articles",
    "blogs.backList": "Back to Articles",
    "blogs.backPortfolio": "Back to Portfolio",
    "blogs.backHome": "Back Home",
    "blogs.thanks": "Thanks for reading!",

    "hire.title": "Why Hire Me",
    "hire.subtitle":
      "I bring a mix of engineering depth, product ownership, and AI integration experience that helps teams move from prototype to dependable delivery.",
    "hire.card1.title": "Backend That Scales",
    "hire.card1.desc":
      "I design APIs and system flows with performance, maintainability, and real production constraints in mind.",
    "hire.card2.title": "AI With Product Thinking",
    "hire.card2.desc":
      "I do not just connect models. I shape AI features so they are usable, measurable, and valuable inside real products.",
    "hire.card3.title": "Fast Learner, Strong Owner",
    "hire.card3.desc":
      "I ramp up quickly, take ownership seriously, and keep projects moving without needing constant hand-holding.",
    "hire.card4.title": "Clear Collaboration",
    "hire.card4.desc":
      "I communicate clearly with teammates, translate technical tradeoffs well, and enjoy building alongside others.",
    "hire.card5.title": "Reliable Delivery Mindset",
    "hire.card5.desc":
      "I care about finishing the right thing well, not just pushing code. That means cleaner execution, stronger follow-through, and fewer loose ends.",
    "hire.card6.title": "Cross-Functional Versatility",
    "hire.card6.desc":
      "I can move between backend, AI workflows, and product-facing implementation, which makes me useful in fast-moving teams.",

    "testimonials.title": "Testimonials",
    "testimonials.subtitle":
      "A few words that reflect how I show up as a teammate, collaborator, and builder.",

    "contact.title": "Get In Touch",
    "contact.subtitle":
      "I'm always interested in hearing about new opportunities and interesting projects.",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.replyTitle": "Replies",
    "contact.replyDesc":
      "I'll reply to the email address you enter in the form.",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.location": "Location",
    "contact.note1": "I usually respond within 24 hours.",
    "contact.note2": "Looking forward to connecting with you!",

    "common.backHome": "Back Home",
    "footer.text": "Designed and built by Phan Nguyễn Trà Giang.",
  },

  vi: {
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.blogs": "Bài viết",
    "nav.testimonials": "Đánh giá",
    "nav.contact": "Liên hệ",

    "hero.greeting": "Xin chào, tôi là",
    "hero.name": "Phan Nguyễn Trà Giang",
    "hero.desc":
      "Tôi xây dựng các hệ thống hiệu suất cao và tích hợp AI để giải quyết các vấn đề thực tế.",
    "hero.cta.work": "Xem Dự Án",
    "hero.cta.resume": "Tải CV",

    "about.title": "Về Tôi",
    "about.p1":
      "Tôi là một Lập trình viên Fullstack và Kỹ sư Tích hợp AI, đã tốt nghiệp Trường Đại học Công nghệ Thông tin (UIT - ĐHQG-HCM) với GPA xuất sắc 9.1/10.0.",
    "about.p2":
      "Với hơn một năm kinh nghiệm làm việc chuyên nghiệp và hai năm phát triển các dự án chuyên sâu, tôi đam mê xây dựng các kiến trúc hệ thống an toàn, có khả năng mở rộng và thu hẹp khoảng cách giữa các mô hình Machine Learning tiên tiến với các ứng dụng doanh nghiệp.",
    "about.stat.repos": "Kho lưu trữ",
    "about.stat.commits": "GPA UIT",
    "about.stat.lang": "Chứng chỉ VSTEP",

    "skills.title": "Kho Vũ Khí Công Nghệ",
    "exp.title": "Kinh nghiệm Làm việc",
    "exp.current": "Hiện tại",

    "projects.title": "Dự Án Nổi Bật",
    "projects.subtitle":
      "Đây là một vài dự án tiêu biểu trong tổng thể các sản phẩm backend, AI và full-stack mà tôi đã xây dựng.",
    "projects.viewSource": "Xem Mã Nguồn",
    "projects.viewAll": "Xem Tất Cả Dự Án",
    "projects.backList": "Quay lại Dự Án",

    "blogs.title": "Góc Kỹ Thuật",
    "blogs.subtitle":
      "Một vài bài viết nổi bật trong bộ sưu tập ghi chú kỹ thuật, phân tích hệ thống và thử nghiệm AI của tôi.",
    "blogs.readMore": "Đọc Tiếp",
    "blogs.viewAll": "Xem Tất Cả Bài Viết",
    "blogs.backList": "Quay lại Bài Viết",
    "blogs.backPortfolio": "Quay lại Portfolio",
    "blogs.backHome": "Về Trang Chủ",
    "blogs.thanks": "Cảm ơn bạn đã đọc!",

    "hire.title": "Vì Sao Nên Chọn Tôi",
    "hire.subtitle":
      "Tôi mang đến sự kết hợp giữa năng lực kỹ thuật, tinh thần ownership và kinh nghiệm tích hợp AI để biến prototype thành sản phẩm có thể vận hành tốt.",
    "hire.card1.title": "Backend Chắc Và Mở Rộng Tốt",
    "hire.card1.desc":
      "Tôi thiết kế API và luồng hệ thống theo hướng hiệu năng, dễ bảo trì và phù hợp với bài toán thực tế.",
    "hire.card2.title": "AI Gắn Với Sản Phẩm",
    "hire.card2.desc":
      "Tôi không chỉ kết nối model, mà còn biến tính năng AI thành trải nghiệm thực sự hữu ích trong sản phẩm.",
    "hire.card3.title": "Học Nhanh, Ownership Tốt",
    "hire.card3.desc":
      "Tôi có thể ramp-up nhanh, chủ động nhận trách nhiệm và giữ tiến độ mà không cần phụ thuộc quá nhiều.",
    "hire.card4.title": "Phối Hợp Rõ Ràng",
    "hire.card4.desc":
      "Tôi giao tiếp rõ, thân thiện với teammate và có thể truyền tải trade-off kỹ thuật một cách dễ hiểu.",
    "hire.card5.title": "Tư Duy Delivery Đáng Tin Cậy",
    "hire.card5.desc":
      "Tôi quan tâm đến việc hoàn thành đúng thứ cần làm với chất lượng tốt, không chỉ dừng ở việc code xong.",
    "hire.card6.title": "Linh Hoạt Liên Chức Năng",
    "hire.card6.desc":
      "Tôi có thể di chuyển giữa backend, workflow AI và phía trải nghiệm sản phẩm, nên rất phù hợp với những team chuyển động nhanh.",

    "testimonials.title": "Đánh Giá",
    "testimonials.subtitle":
      "Một vài chia sẻ về cách tôi làm việc, phối hợp và xây dựng sản phẩm cùng mọi người.",

    "contact.title": "Liên Hệ",
    "contact.subtitle":
      "Tôi luôn sẵn sàng trao đổi về cơ hội mới và những dự án thú vị.",
    "contact.name": "Họ và tên",
    "contact.email": "Địa chỉ email",
    "contact.company": "Công ty",
    "contact.message": "Nội dung",
    "contact.send": "Gửi Tin Nhắn",
    "contact.replyTitle": "Phản hồi",
    "contact.replyDesc":
      "Tôi sẽ trả lời qua địa chỉ email bạn nhập trong form.",
    "contact.phone": "Điện thoại",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.location": "Địa điểm",
    "contact.note1": "Tôi thường phản hồi trong vòng 24 giờ.",
    "contact.note2": "Rất mong được kết nối cùng bạn!",

    "common.backHome": "Về Trang Chủ",
    "footer.text": "Thiết kế và phát triển bởi Phan Nguyễn Trà Giang.",
  },
};
