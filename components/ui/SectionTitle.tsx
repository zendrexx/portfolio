"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
        {children}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 48 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="gold-gradient mt-3 h-1 rounded-full"
      />
    </div>
  );
}
