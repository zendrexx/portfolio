"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Navbar, { type Tab } from "@/components/Navbar";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

const sections: Record<Tab, React.ComponentType> = {
  About,
  Resume,
  Portfolio,
  Contact,
};

export default function Home() {
  const [active, setActive] = useState<Tab>("About");
  const Section = sections[active];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 pb-24 lg:px-8 lg:pb-8">
      <div className="grid gap-6 lg:grid-cols-[340px_1fr] lg:items-start">
        <Sidebar />

        <div className="relative min-h-[70vh] rounded-3xl border border-edge bg-surface p-6 pt-8 lg:p-10 lg:pt-20">
          <Navbar active={active} onChange={setActive} />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Section />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <footer className="mt-8 pb-4 text-center text-xs text-faint">
        © {new Date().getFullYear()} Zendrex Adversalo · Built with Next.js
      </footer>
    </main>
  );
}
