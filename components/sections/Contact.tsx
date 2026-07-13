"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";

type Status = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const directLinks = [
  {
    icon: Mail,
    label: "Email me",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Zendrex Adversalo",
    href: profile.socials.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "zendrexx",
    href: profile.socials.github,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", "New message from your portfolio");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-edge bg-raised px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-gold/50";

  return (
    <div>
      <SectionTitle>Contact</SectionTitle>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {directLinks.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 * i, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-edge bg-raised p-5 transition-shadow hover:shadow-[0_8px_40px_-12px_rgba(230,179,37,0.25)]"
          >
            <Icon size={18} className="text-gold" />
            <p className="mt-3 font-display text-sm font-semibold">{label}</p>
            <p className="mt-0.5 truncate text-xs text-muted">{value}</p>
          </motion.a>
        ))}
      </div>

      <div className="rounded-2xl border border-edge bg-raised p-6 lg:p-8">
        <h3 className="font-display text-xl font-bold">Send a Message</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={13} className="text-gold" />
          Based in {profile.location} — open to remote work.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              minLength={2}
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className={inputClasses}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            required
            minLength={10}
            rows={5}
            className={`${inputClasses} resize-y`}
          />
          {/* Honeypot for bots */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            className="hidden"
          />

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="gold-gradient flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
            >
              {status === "sending" ? (
                <LoaderCircle size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {status === "sending" ? "Sending…" : "Send Message"}
            </motion.button>

            {status === "sent" && (
              <p className="flex items-center gap-1.5 text-sm text-emerald-400">
                <CheckCircle2 size={15} /> Message sent — I&apos;ll get back to
                you soon!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-1.5 text-sm text-red-400">
                <AlertCircle size={15} />
                {WEB3FORMS_KEY
                  ? "Something went wrong — please email me directly instead."
                  : "Form isn't configured yet — please email me directly."}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
