"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import Typewriter from "@/components/ui/Typewriter";

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-edge bg-raised text-gold shadow-inner">
        <Icon size={17} />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wider text-faint">
          {label}
        </p>
        <p className="truncate text-sm text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="relative rounded-3xl border border-edge bg-surface p-6 lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto lg:p-8">
      {/* Mobile expand toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Show contacts"
        className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-3xl border-b border-l border-edge bg-raised px-4 py-2.5 text-gold lg:hidden"
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="block"
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <div className="flex items-center gap-5 lg:flex-col lg:gap-0 lg:text-center">
        <div className="relative shrink-0">
          <div className="avatar-glow absolute -inset-4 rounded-full" />
          <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-edge-strong bg-gradient-to-br from-raised to-surface font-display text-2xl font-bold text-gold lg:h-36 lg:w-36 lg:rounded-3xl lg:text-4xl">
            <Image
              src="/prof.jpg"
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 144px, 80px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="lg:mt-6">
          <h1 className="font-display text-lg font-bold tracking-tight lg:text-2xl">
            {profile.name}
          </h1>
          <div className="mt-2 inline-block rounded-lg border border-edge bg-raised px-3 py-1.5">
            <Typewriter words={profile.titles} />
          </div>
        </div>
      </div>

      {/* Contact details — always visible on desktop, toggled on mobile */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <SidebarDetails />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden lg:block">
        <SidebarDetails />
      </div>
    </aside>
  );
}

function SidebarDetails() {
  return (
    <div>
      <div className="my-7 h-px bg-edge" />
      <div className="flex flex-col gap-5">
        <ContactRow
          icon={Mail}
          label="Email"
          value={profile.email}
          href={`mailto:${profile.email}`}
        />
        <ContactRow
          icon={Phone}
          label="Phone"
          value={profile.phone}
          href={`tel:${profile.phone.replaceAll("-", "")}`}
        />
        <ContactRow icon={MapPin} label="Location" value={profile.location} />
      </div>
      <div className="mt-7 flex justify-center gap-3">
        {[
          {
            icon: LinkedinIcon,
            href: profile.socials.linkedin,
            label: "LinkedIn",
          },
          { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
          { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            whileHover={{ y: -3 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-edge bg-raised text-muted transition-colors hover:border-gold/40 hover:text-gold"
          >
            <Icon size={17} />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
