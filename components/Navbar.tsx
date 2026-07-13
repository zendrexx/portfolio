"use client";

import { motion } from "framer-motion";

export type Tab = "About" | "Resume" | "Portfolio" | "Contact";
export const TABS: Tab[] = ["About", "Resume", "Portfolio", "Contact"];

export default function Navbar({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-sm rounded-2xl border border-edge-strong bg-raised/90 backdrop-blur-md lg:absolute lg:inset-x-auto lg:bottom-auto lg:right-0 lg:top-0 lg:max-w-none lg:rounded-bl-3xl lg:rounded-tl-none lg:rounded-tr-3xl lg:border-b lg:border-l lg:border-r-0 lg:border-t-0 lg:bg-raised/60">
      <ul className="flex items-center justify-around gap-1 px-3 py-2 lg:justify-end lg:gap-2 lg:px-8 lg:py-4">
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <li key={tab} className="relative">
              <button
                onClick={() => onChange(tab)}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  isActive ? "text-gold" : "text-muted hover:text-ink"
                }`}
              >
                {tab}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="gold-gradient absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
