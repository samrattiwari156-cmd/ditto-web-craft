import {
  BarChart3, Cloud, Code2, Film, Laptop, Mail, Megaphone, MousePointerClick,
  Palette, Search, Settings, Share2, Smartphone, Wrench,
} from "lucide-react";

export const services = [
  { slug: "web-development", title: "Web Development", group: "IT Solutions", icon: Code2, short: "Fast, accessible websites designed to turn visits into enquiries." },
  { slug: "custom-software-development", title: "Custom Software Development", group: "IT Solutions", icon: Laptop, short: "Purpose-built software that simplifies operations and scales with you." },
  { slug: "mobile-app-development", title: "Mobile App Development", group: "IT Solutions", icon: Smartphone, short: "Intuitive mobile experiences for iOS, Android, and the modern web." },
  { slug: "ui-ux-design", title: "UI/UX Design", group: "IT Solutions", icon: Palette, short: "Clear user journeys and interfaces built around real customer needs." },
  { slug: "cloud-solutions", title: "Cloud Solutions", group: "IT Solutions", icon: Cloud, short: "Secure cloud infrastructure, migration, and performance optimization." },
  { slug: "it-consulting-support", title: "IT Consulting & Support", group: "IT Solutions", icon: Wrench, short: "Dependable technology guidance and hands-on support for your team." },
  { slug: "digital-marketing", title: "Digital Marketing Services", group: "Digital Marketing", icon: BarChart3, short: "Integrated campaigns focused on reach, leads, and measurable growth." },
  { slug: "social-media-marketing", title: "Social Media Marketing", group: "Digital Marketing", icon: Share2, short: "Social strategy and content that build trust and active communities." },
  { slug: "search-engine-optimization", title: "Search Engine Optimization", group: "Digital Marketing", icon: Search, short: "Technical and content-led SEO that helps customers find your business." },
  { slug: "pay-per-click", title: "Pay-Per-Click (PPC)", group: "Digital Marketing", icon: MousePointerClick, short: "Precise paid campaigns engineered for qualified traffic and ROI." },
  { slug: "email-marketing", title: "Email Marketing", group: "Digital Marketing", icon: Mail, short: "Targeted journeys that nurture prospects and strengthen retention." },
  { slug: "video-production", title: "Video Production", group: "Digital Marketing", icon: Film, short: "Story-led video content made to earn attention and inspire action." },
  { slug: "managed-it-services", title: "Managed IT Services", group: "IT Solutions", icon: Settings, short: "Proactive monitoring and support that keep your business moving." },
  { slug: "advertising-ppc-solutions", title: "Advertising & PPC Solutions", group: "Digital Marketing", icon: Megaphone, short: "Performance advertising with clear reporting and continuous refinement." },
] as const;

export const faqs = [
  ["What services does ARN Innovation Technology offer in Dubai?", "ARN Innovation Technology offers complete digital marketing and IT services in Dubai, including SEO, PPC, social media marketing, email marketing, video production, website development, custom software development, mobile app development, cloud solutions, and managed IT services."],
  ["Why should I choose ARN Innovation Technology as my digital and IT partner?", "We combine digital marketing expertise with strong IT capabilities to deliver end-to-end solutions. Our team focuses on measurable results, scalable technology, and long-term partnerships that support business growth in Dubai and across the UAE."],
  ["Do you work with startups, SMEs, and enterprise businesses in Dubai?", "Yes, we work with startups, small and medium businesses, and large enterprises. Our digital marketing and IT solutions are tailored to match different business sizes, goals, and industry requirements."],
  ["How does digital marketing help businesses grow in Dubai?", "Digital marketing helps businesses improve online visibility, attract the right audience, generate leads, and increase conversions. Through SEO, PPC, social media, and content strategies, businesses can compete effectively in Dubai’s digital market."],
  ["Can ARN Innovation Technology provide customized IT and digital solutions?", "Yes, all our services are customized. We analyze business goals, technology needs, and target audiences to deliver tailored digital marketing strategies and IT solutions that align with your long-term objectives."],
] as const;