import {
  Smartphone,
  Database,
  PenTool,
  Dumbbell,
  Leaf,
  TrendingUp,
  Boxes,
  Globe,
  Sparkles,
  GraduationCap,
  Users,
  Rocket,
  Code2,
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
  heroEyebrow: "Product Developer",
  heroTitle: "I design and build digital products from idea to release.",
  heroSubtitle:
    "I'm a Computer Science student and product-focused developer from Pangasinan, Philippines. I work across mobile apps, business systems, backend development, and UI/UX.",
  capabilities: [
    { icon: Smartphone, label: "Mobile Development" },
    { icon: Globe, label: "Web Development" },
    { icon: Boxes, label: "Business Systems" },
    { icon: PenTool, label: "UI/UX" },
    { icon: Database, label: "Backend" },
    { icon: Sparkles, label: "AI Integration" },
  ] satisfies { icon: LucideIcon; label: string }[],
  proof: [
    {
      title: "Built & shipped real products",
      description:
        "Designed, developed, tested, and iterated on real applications.",
    },
    {
      title: "Built business software",
      description:
        "Worked on inventory systems, approval workflows, databases, and operational tools.",
    },
    {
      title: "Product-focused",
      description:
        "Comfortable moving from UI/UX and product thinking to implementation.",
    },
  ],
  highlights: [
    {
      icon: GraduationCap,
      label: "Dean's Lister",
      sub: "Pangasinan State University",
    },
    { icon: Users, label: "Startup Team Leader", sub: "Sikaptala @ DLSU" },
    { icon: Code2, label: "DevFest Baguio", sub: "Google Developer Groups" },
    {
      icon: Rocket,
      label: "App Founder",
      sub: "Powerlifting competition app",
    },
  ] satisfies { icon: LucideIcon; label: string; sub: string }[],
};

export const resume = {
  experience: [
    {
      role: "Founder & Developer",
      org: "Zebite — AI Grocery Planner",
      place: "Pangasinan, Philippines",
      period: "2025 — Present",
      current: true,
      points: [
        "Sole creator of an AI-powered grocery planning app — pantry-first meal generation, budget-capped grocery lists, and AI vision-based receipt/shelf scanning.",
        "Handled end-to-end product, design, and full app + backend build (Flutter, Supabase, OpenAI).",
        "Currently in 14-day closed testing ahead of release — now the main, active project.",
      ],
    },
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

export type ProjectCategory = "Mobile" | "Desktop" | "Design" | "Research";

export type Project = {
  title: string;
  category: ProjectCategory;
  flagship?: boolean;
  /** Badge icon for flagship cards — pick one that fits the product. */
  flagshipIcon?: LucideIcon;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  gradient: string;
  initials: string;
  image?: string;
  /** Native screenshot ratio, used to prevent project previews from cropping UI copy. */
  previewAspect?: number;
};

export const projects: Project[] = [
  {
    title: "Zebite — AI Grocery Planner",
    category: "Mobile",
    flagship: true,
    flagshipIcon: Leaf,
    tagline: "Smarter groceries, planned by AI",
    description:
      "A Flutter app that plans a week of meals and groceries around three inputs: what you already have, what you want, and your budget. The AI checks your pantry first and only recommends buying what's missing — cutting food waste and overspending. Ships with pantry-first meal generation (real recipes, quantities, per-meal macros), a deterministic nutrition engine (Mifflin-St Jeor BMR → TDEE → goal-adjusted targets), budget-capped grocery lists with money-saving swaps, snap-to-stock receipt and shelf scanning via AI vision, crowdsourced local prices, expiry reminders, and offline-first cloud sync. Built PH-first (₱).",
    role: "Founder & sole developer — product, design, and full app + backend build.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Supabase",
      "OpenAI",
      "Hive",
      "ML Kit",
    ],
    gradient: "from-emerald-500/30 via-green-700/15 to-transparent",
    initials: "ZB",
    image: "/zebite.png",
    previewAspect: 1200 / 630,
  },
  {
    title: "Powerlifting competition app",
    category: "Mobile",
    flagship: true,
    flagshipIcon: Dumbbell,
    tagline: "Powerlifting tracker with a community vision",
    description:
      "A workout app built around gamification — performance dashboard, progress tracking, and streak mechanics that make training feel like leveling up. Currently focused on powerlifting; the long-term vision is a community platform where lifters share programs and compete.",
    role: "Founder & sole developer — end-to-end planning, design, and development.",
    tech: ["Flutter", "Dart", "Firebase", "Supabase", "Riverpod", "Figma"],
    gradient: "from-amber-500/30 via-yellow-600/15 to-transparent",
    initials: "GW",
    image: "/powerliftinghor.png",
    previewAspect: 1672 / 941,
  },
  {
    title: "Inventory Stock Request System",
    category: "Desktop",
    flagship: true,
    flagshipIcon: Boxes,
    tagline: "Internal operations tool for Guanzon Group",
    description:
      "A desktop module handling item requests, multi-step approvals, and stock tracking for a company with heavy daily inventory movement. Built as part of the Guanzon Group's internal software, with debugging and stabilization work across testing cycles.",
    role: "Junior Software Developer — implementation, workflow design, debugging.",
    tech: ["Java", "JavaFX", "MySQL"],
    gradient: "from-sky-500/25 via-indigo-600/10 to-transparent",
    initials: "IS",
    image: "/outsource.png",
    previewAspect: 1672 / 941,
  },
  {
    title: "Crypto Volatility Regime Detection",
    category: "Research",
    flagship: true,
    flagshipIcon: TrendingUp,
    tagline: "Thesis: does volume improve regime detection?",
    description:
      "Undergraduate thesis using Gaussian Hidden Markov Models to detect Bull/Sideways/Bear volatility regimes in crypto markets. Compares a standard OHLC-based model against a volume-augmented variant across 4 coins (BTC, ETH, DOGE, LTC), 3 timeframes (5m/15m/30m), and all 4 quarters of 2025 — 48 coin/timeframe/quarter cells per model, scored on log-likelihood, AIC, and BIC. Went beyond raw metric comparison with permutation controls to isolate how much of volume's contribution is genuine regime alignment versus distribution shape, plus a standalone rolling-volatility/volume-surprise analysis as metric-independent corroboration.",
    role: "Sole researcher & developer — data pipeline, modeling, statistical analysis, and dashboard.",
    tech: ["Python", "hmmlearn", "pandas", "NumPy", "scikit-learn", "Flask"],
    gradient: "from-orange-500/30 via-amber-600/15 to-transparent",
    initials: "BV",
    image: "/hmm.png",
    previewAspect: 1115 / 729,
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
    previewAspect: 3840 / 2160,
  },
];

export const projectFilters = [
  "All",
  "Mobile",
  "Desktop",
  "Design",
  "Research",
] as const;
