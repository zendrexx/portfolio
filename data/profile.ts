import {
  Smartphone,
  Monitor,
  Database,
  PenTool,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Zendrex Adversalo",
  titles: [
    "Mobile App Developer",
    "Flutter Developer",
    "Founder, Workout App",
    "UI/UX Designer",
  ],
  email: "adversalozen8@gmail.com",
  location: "Pangasinan, Philippines",
  socials: {
    linkedin: "https://www.linkedin.com/in/zendrex-adversalo-1abb69355",
    github: "https://github.com/zendrexx",
  },
};

export const about = {
  bio: [
    "I'm a Computer Science student at Pangasinan State University (Dean's Lister) and a mobile-first developer from Pangasinan, Philippines. Flutter and Dart are home base, but I move comfortably across the stack — Java desktop applications, web, and backend work with Firebase, Supabase, Node.js, and MySQL.",
    "I like building products, not just code. I'm the founder and sole developer of a competition workout app — currently focused on powerlifting, with a community platform on the roadmap. I've led a startup team at DLSU's Sikaptala competition and shipped real internal software as a Junior Software Developer at Guanzon Group of Companies.",
  ],
  services: [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Flutter/Dart apps built with real product thinking — Riverpod state management, Firebase & Supabase backends, end-to-end from Figma to release.",
    },
    {
      icon: Monitor,
      title: "Desktop Apps",
      description:
        "Java/JavaFX business applications — inventory systems, approval workflows, and stock tracking built for daily operational use.",
    },
    {
      icon: Database,
      title: "Backend & Data",
      description:
        "APIs and data layers with Firebase, Supabase, Node.js, and MySQL — auth, realtime sync, and clean data modeling.",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "Figma-first workflows: wireframes, design systems, and prototypes that translate 1:1 into the shipped interface.",
    },
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
  highlights: [
    { label: "Dean's Lister", sub: "Pangasinan State University" },
    { label: "Startup Team Leader", sub: "Sikaptala @ DLSU" },
    { label: "DevFest Baguio", sub: "Google Developer Groups" },
    { label: "App Founder", sub: "Powerlifting competition app" },
  ],
};

export const resume = {
  experience: [
    {
      role: "Founder & Developer",
      org: "Powerlifting competition app",
      place: "Pangasinan, Philippines",
      period: "Aug 2025 — Present",
      current: true,
      points: [
        "Sole creator of a powerlifting-focused workout app with a performance dashboard and progress tracking.",
        "Handled end-to-end planning, design, and development — from Figma wireframes to working builds.",
        "Roadmap: evolving into a community platform for lifters.",
      ],
    },
    {
      role: "Junior Software Developer",
      org: "Guanzon Group of Companies",
      place: "Dagupan, Pangasinan",
      period: "Jun 2025 — Dec 2025",
      current: false,
      points: [
        "Developed a desktop application using Java and JavaFX.",
        "Implemented an Inventory Stock Request module managing item requests, approvals, and stock tracking.",
        "Collaborated on application workflows and user interface design.",
        "Debugged and resolved issues found in module testing to improve system stability.",
      ],
    },
    {
      role: "Team Leader & Idea Originator",
      org: "Sikaptala Startup Competition",
      place: "De La Salle University, Manila",
      period: "Mar 2025",
      current: false,
      points: [
        "Originated the startup idea and led the team's execution.",
        "Oversaw planning, pitching, and team coordination through the competition.",
      ],
    },
  ],
  education: [
    {
      school: "Pangasinan State University",
      degree: "BS Computer Science",
      place: "Lingayen, Pangasinan",
      points: ["Dean's Lister", "Attended DevFest Baguio (GDG)"],
    },
  ],
  skills: [
    { name: "Mobile Development — Flutter / Dart", level: 90 },
    { name: "Java / JavaFX", level: 80 },
    { name: "UI/UX — Figma", level: 80 },
    { name: "Backend — Firebase / Supabase / Node / MySQL", level: 75 },
  ],
  alsoKnow: ["JavaScript", "C++", "Go", "Python", "Git", "MS Excel"],
};

export type ProjectCategory = "Mobile" | "Desktop" | "Design";

export type Project = {
  title: string;
  category: ProjectCategory;
  flagship?: boolean;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  gradient: string;
  initials: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Powerlifting competition app",
    category: "Mobile",
    flagship: true,
    tagline: "Powerlifting tracker with a community vision",
    description:
      "A workout app built around gamification — performance dashboard, progress tracking, and streak mechanics that make training feel like leveling up. Currently focused on powerlifting; the long-term vision is a community platform where lifters share programs and compete.",
    role: "Founder & sole developer — end-to-end planning, design, and development.",
    tech: ["Flutter", "Dart", "Firebase", "Supabase", "Riverpod", "Figma"],
    gradient: "from-amber-500/30 via-yellow-600/15 to-transparent",
    initials: "GW",
    image: "/powerliftinghor.png",
  },
  {
    title: "Inventory Stock Request System",
    category: "Desktop",
    tagline: "Internal operations tool for Guanzon Group",
    description:
      "A desktop module handling item requests, multi-step approvals, and stock tracking for a company with heavy daily inventory movement. Built as part of the Guanzon Group's internal software, with debugging and stabilization work across testing cycles.",
    role: "Junior Software Developer — implementation, workflow design, debugging.",
    tech: ["Java", "JavaFX", "MySQL"],
    gradient: "from-sky-500/25 via-indigo-600/10 to-transparent",
    initials: "IS",
    image: "/outsource.png",
  },
  {
    title: "Sikaptala Startup Pitch",
    category: "Design",
    tagline: "From original idea to competition pitch at DLSU",
    description:
      "Originated a startup concept and led a student team through DLSU's Sikaptala startup competition — business planning, pitch deck design, and live presentation in Manila.",
    role: "Team Leader & Idea Originator — planning, pitching, coordination.",
    tech: ["Figma", "Pitching", "Business Planning"],
    gradient: "from-emerald-500/25 via-teal-600/10 to-transparent",
    initials: "SK",
    image: "/sikaptala.png",
  },
];

export const projectFilters = ["All", "Mobile", "Desktop", "Design"] as const;
