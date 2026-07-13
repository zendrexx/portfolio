"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Dumbbell, ArrowUpRight } from "lucide-react";
import { projects, projectFilters, type Project } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Portfolio() {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <div>
      <SectionTitle>Portfolio</SectionTitle>

      <div className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-xl px-4 py-1.5 text-sm transition-colors ${
              filter === f
                ? "text-black"
                : "border border-edge text-muted hover:text-ink"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="gold-gradient absolute inset-0 rounded-xl"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative font-medium">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.button
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(project)}
              className="group overflow-hidden rounded-2xl border border-edge bg-raised text-left transition-shadow hover:shadow-[0_8px_40px_-12px_rgba(230,179,37,0.25)]"
            >
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="font-display text-5xl font-bold text-white/15">
                    {project.initials}
                  </span>
                )}
                {project.flagship && (
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-lg bg-black/50 px-2.5 py-1 text-xs font-medium text-gold backdrop-blur-sm">
                    <Dumbbell size={12} /> Flagship
                  </span>
                )}
                <span className="absolute right-4 top-4 rounded-lg border border-edge bg-black/40 p-1.5 text-muted opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-gold/80">
                  {project.category}
                </p>
                <h4 className="mt-1.5 font-display font-semibold">
                  {project.title}
                </h4>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-edge-strong bg-surface p-7"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-5 top-5 rounded-xl border border-edge bg-raised p-2 text-muted transition-colors hover:text-ink"
              >
                <X size={16} />
              </button>
              <p className="text-xs uppercase tracking-wider text-gold/80">
                {selected.category}
              </p>
              <h3 className="mt-2 pr-10 font-display text-2xl font-bold">
                {selected.title}
              </h3>
              <p className="mt-1 text-sm text-faint">{selected.tagline}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {selected.description}
              </p>
              <p className="mt-4 text-sm text-muted">
                <span className="font-medium text-ink">Role: </span>
                {selected.role}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-edge bg-raised px-3 py-1 text-xs text-gold/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
