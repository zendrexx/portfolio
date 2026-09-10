"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { about, projects, type Project } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";

const stagger = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: "easeOut" as const },
  }),
};

const SELECTED_WORK_TITLES = [
  "Zebite — AI Grocery Planner",
  "Powerlifting competition app",
  "Inventory Stock Request System",
];

const selectedWork = SELECTED_WORK_TITLES.map((title) =>
  projects.find((p) => p.title === title)
).filter((p): p is Project => Boolean(p));

function WorkCard({
  project,
  featured = false,
  onView,
  index,
}: {
  project: Project;
  featured?: boolean;
  onView?: () => void;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={stagger}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-edge bg-raised transition-shadow hover:shadow-[0_8px_40px_-12px_rgba(230,179,37,0.25)]"
    >
      <div
        className={`relative overflow-hidden bg-linear-to-br ${project.gradient}`}
        style={{
          aspectRatio: project.image
            ? (project.previewAspect ?? 16 / 10)
            : 16 / 10,
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              featured
                ? "(min-width: 1024px) 65vw, 100vw"
                : "(min-width: 1024px) 32vw, 100vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="flex h-full items-center justify-center font-display text-5xl font-bold text-white/15">
            {project.initials}
          </span>
        )}
      </div>
      <div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
        <h4
          className={`font-display font-bold ${
            featured ? "text-xl lg:text-2xl" : "text-base"
          }`}
        >
          {project.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-md border border-edge bg-surface px-2 py-0.5 text-[11px] text-gold/80"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={onView}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-all hover:gap-2.5"
        >
          View project <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

export default function About({
  onViewPortfolio,
  onViewContact,
}: {
  onViewPortfolio?: () => void;
  onViewContact?: () => void;
} = {}) {
  const [featured, ...rest] = selectedWork;

  return (
    <div>
      {/* Hero */}
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold/80">
        {about.heroEyebrow}
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {about.heroTitle}
      </h1>
      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
        {about.heroSubtitle}
      </p>

      {/* Selected Work */}
      <div className="mt-16">
        <SectionTitle>Selected Work</SectionTitle>
        <div className="grid gap-5">
          {featured && (
            <WorkCard
              project={featured}
              featured
              index={0}
              onView={onViewPortfolio}
            />
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((project, i) => (
              <WorkCard
                key={project.title}
                project={project}
                index={i + 1}
                onView={onViewPortfolio}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="mt-16">
        <h3 className="mb-5 font-display text-lg font-bold">I work across</h3>
        <div className="flex flex-wrap gap-2.5">
          {about.capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex items-center gap-2 rounded-full border border-edge bg-raised px-4 py-2 text-sm text-muted transition-colors hover:border-gold/30 hover:text-ink"
            >
              <cap.icon size={15} className="text-gold" />
              {cap.label}
            </div>
          ))}
        </div>
      </div>

      {/* Proof */}
      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {about.proof.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="rounded-2xl border border-edge bg-raised p-5"
          >
            <span className="font-display text-xs font-bold text-gold/70">
              0{i + 1}
            </span>
            <h4 className="mt-3 font-display text-sm font-semibold text-ink">
              {p.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Credentials */}
      <div className="mt-16">
        <h3 className="mb-5 font-display text-lg font-bold">Credentials</h3>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {about.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="flex items-center gap-3 rounded-xl border border-edge bg-raised p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-gold">
                <h.icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug text-ink">
                  {h.label}
                </p>
                <p className="text-xs leading-snug text-faint">{h.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-edge bg-raised p-7 sm:flex-row sm:items-center sm:justify-between lg:p-8">
        <div>
          <h3 className="font-display text-xl font-bold">
            Want to see more, or talk about a project?
          </h3>
          <p className="mt-2 text-sm text-muted">
            Explore full case studies or get in touch directly.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={onViewPortfolio}
            className="gold-gradient inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold text-black"
          >
            View Portfolio <ArrowUpRight size={15} />
          </button>
          <button
            onClick={onViewContact}
            className="rounded-xl border border-edge px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold/40"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
