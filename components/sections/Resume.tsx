"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { resume } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";

function TimelineBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Briefcase;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-edge bg-raised text-gold">
          <Icon size={18} />
        </div>
        <h3 className="font-display text-xl font-bold">{title}</h3>
      </div>
      <ol className="ml-5 space-y-8 border-l border-edge pl-7">{children}</ol>
    </section>
  );
}

function TimelineItem({
  heading,
  sub,
  period,
  current,
  points,
}: {
  heading: string;
  sub: string;
  period?: string;
  current?: boolean;
  points: string[];
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative"
    >
      <span
        className={`absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 ${
          current
            ? "gold-gradient border-transparent shadow-[0_0_12px_rgba(230,179,37,0.6)]"
            : "border-edge-strong bg-surface"
        }`}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="font-display font-semibold">{heading}</h4>
        {period && (
          <span
            className={`rounded-md px-2 py-0.5 text-xs ${
              current
                ? "gold-gradient font-medium text-black"
                : "border border-edge text-faint"
            }`}
          >
            {period}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-gold/90">{sub}</p>
      <ul className="mt-3 space-y-1.5">
        {points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
            {point}
          </li>
        ))}
      </ul>
    </motion.li>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 900;
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round(level * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, level]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <p className="text-sm font-medium">{name}</p>
        <span className="font-display text-sm font-bold text-gold">
          {count}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-raised">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="gold-gradient h-full rounded-full"
        />
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div>
      <SectionTitle>Resume</SectionTitle>

      <TimelineBlock icon={Briefcase} title="Experience">
        {resume.experience.map((job) => (
          <TimelineItem
            key={job.org}
            heading={job.role}
            sub={`${job.org} · ${job.place}`}
            period={job.period}
            current={job.current}
            points={job.points}
          />
        ))}
      </TimelineBlock>

      <TimelineBlock icon={GraduationCap} title="Education">
        {resume.education.map((edu) => (
          <TimelineItem
            key={edu.school}
            heading={edu.school}
            sub={`${edu.degree} · ${edu.place}`}
            points={edu.points}
          />
        ))}
      </TimelineBlock>

      <section className="rounded-2xl border border-edge bg-raised p-6 lg:p-8">
        <h3 className="mb-6 font-display text-xl font-bold">My Skills</h3>
        <div className="space-y-6">
          {resume.skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {resume.alsoKnow.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-edge bg-surface px-3 py-1 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
