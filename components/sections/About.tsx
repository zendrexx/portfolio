"use client";

import { motion } from "framer-motion";
import { about } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";

const stagger = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <div>
      <SectionTitle>About Me</SectionTitle>

      <div className="space-y-4 text-[15px] leading-relaxed text-muted">
        {about.bio.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <h3 className="mt-12 mb-6 font-display text-xl font-bold">
        What I&apos;m Doing
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {about.services.map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-edge bg-raised p-6 transition-shadow hover:shadow-[0_8px_40px_-12px_rgba(230,179,37,0.25)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-edge bg-surface text-gold transition-transform group-hover:scale-110">
                <service.icon size={20} />
              </div>
              <div>
                <h4 className="font-display font-semibold">{service.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="mt-12 mb-6 font-display text-xl font-bold">Highlights</h3>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {about.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="rounded-2xl border border-edge bg-raised p-5 text-center"
          >
            <p className="gold-gradient-text font-display text-sm font-bold">
              {h.label}
            </p>
            <p className="mt-1.5 text-xs text-faint">{h.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
