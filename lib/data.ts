// ─── Single Source of Truth ─────────────────────────────────────────────────
// All content is verbatim from the portfolio spec. Do NOT alter or summarise.

export const hero = {
  name: "Kartik Agrawal",
  tagline:
    "Software Engineer building scalable full-stack architectures and high-performance frontend systems.",
  location: "Ranchi, Jharkhand",
  email: "agrawalkartik7605@gmail.com",
  phone: "+91-9119063420",
  linkedin: "https://www.linkedin.com/in/kartik-agrawal-30777128a",
  github: "https://github.com/2017kartik",
  resume:
    "https://drive.google.com/file/d/1qISHYsW1cBX87pfbwUeCKNO_G_rhgtbl/view?usp=sharing",
} as const;

export interface BulletPoint {
  text: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  note: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Brahm Shala",
    type: "Remote",
    period: "Sep 2025 – Nov 2025",
    note: "This role was strictly frontend development.",
    bullets: [
      "Spearheaded a scheduling platform using React.js and Tailwind CSS, eliminating cross-timezone double-bookings and saving over 10 hours of manual coordination weekly.",
      "Built a client-side overlap-detection algorithm using React.js, auto-generating 4-week availability windows and boosting scheduling efficiency by 30%.",
      "Secured the admin dashboard with a JWT-validated RBAC frontend architecture across 15+ protected routes, preventing unauthorized access.",
      "Optimized client-side architecture with TanStack Query, cutting redundant database and network requests by 40% to improve application responsiveness.",
      "Enhanced admin UX with optimistic UI updates and integrated a Gemini AI chatbot to guide expert onboarding.",
    ],
    tags: ["React.js", "Tailwind CSS", "TanStack Query", "JWT", "RBAC"],
  },
];

export interface ProjectLink {
  live?: string;
  github?: string;
}

export interface ProjectItem {
  name: string;
  stack: string[];
  links: ProjectLink;
  image?: string; // path relative to /public
  imageAlt?: string;
  bullets: string[];
}

export const projects: ProjectItem[] = [
  {
    name: "AI Revenue Recovery Engine",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ"],
    links: {
      live: "https://revenue-recovery-engine-vert.vercel.app/",
      github: "https://github.com/2017kartik/revenue-recovery-engine",
    },
    image: "/revenue-recovery.png",
    imageAlt: "AI Revenue Recovery Engine — live dashboard showing recovered payments and real-time transaction events",
    bullets: [
      "Architected an event-driven data ingestion pipeline using Redis-backed BullMQ, decoupling high-volume API traffic from LLM processing to guarantee 100% uptime.",
      "Developed a fault-tolerant asynchronous worker with native exponential backoff and multi-model LLM failover (Groq to Gemini), eliminating dropped payloads.",
      "Built a highly responsive Next.js dashboard guided by Atomic Design principles, applying optimistic UI updates and real-time polling to prevent client-side latency.",
      "Enforced strict database design principles and ACID compliance through PostgreSQL micro-transactions, securely managing data lifecycles in high-throughput environments.",
    ],
  },
  {
    name: "Project Sentinel",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk", "Gemini API"],
    links: {
      live: "https://project-sentinel-mu.vercel.app/",
      github: "https://github.com/2017kartik/project-sentinel",
    },
    image: "/sentinel.png",
    imageAlt: "Project Sentinel — dark mode landing page for the AI technical interview simulation SaaS",
    bullets: [
      "Engineered a full-stack technical interview simulation SaaS with Next.js and TypeScript, featuring a live in-browser coding sandbox.",
      "Integrated the Gemini API to power an automated AI interviewer, streaming real-time code evaluation and complexity analysis directly to the user.",
      "Architected a scalable data layer with Neon PostgreSQL and Clerk Auth, securely persisting user code states and tracking analytical performance metrics.",
    ],
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C/C++", "Java", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5/CSS3"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Bootstrap",
      "TanStack Query",
      "Redux",
      "Zustand",
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Neon DB",
      "Supabase",
      "Redis",
      "BullMQ",
    ],
  },
  {
    category: "Tools & Concepts",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Vercel",
      "Postman",
      "Clerk Auth",
      "Data Structures & Algorithms",
      "Systems Design",
      "OOP",
      "REST APIs",
      "Agile",
    ],
  },
];

export interface CPRating {
  platform: string;
  rating: string | number;
  extra?: string;
  url: string;
}

export const education = {
  degree: "B.Tech in Electronics and Communication Engineering",
  institute: "Indian Institute of Information Technology, Ranchi",
  period: "Aug 2023 – May 2027",
  cgpa: "8.68/10",
};

export const cpRatings: CPRating[] = [
  {
    platform: "LeetCode",
    rating: 1832,
    extra: "Top 7.0%",
    url: "https://leetcode.com/u/2017_kartik",
  },
  {
    platform: "CodeChef",
    rating: 1483,
    extra: "★★",
    url: "https://www.codechef.com/users/kargar_wal",
  },
  {
    platform: "CodeForces",
    rating: 1199,
    extra: "Newbie",
    url: "https://codeforces.com/profile/-kar_2017",
  },
];

export const achievements = [
  "AlgoUniversity Test Fellowship: Ranked in the top 20% in Stage-01 (out of 20,000+ participants) for DSA.",
];
