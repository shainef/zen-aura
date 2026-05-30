"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Study", href: "#case-study" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "rgba(248,246,243,0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--gray-200)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + wordmark — top left */}
          <a href="#" className="flex items-center" style={{ gap: "16px" }}>
            <div className="relative flex-shrink-0" style={{ width: "48px", height: "48px" }}>
              <Image
                src="/logo-icon.png"
                alt="Zen Aura logo mark"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <p
                className="text-sm font-semibold tracking-[0.25em] uppercase leading-none"
                style={{ fontFamily: "var(--font-josefin), sans-serif", color: "var(--charcoal)" }}
              >
                ZEN AURA
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded"
                style={{ color: "var(--charcoal)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal)")}
              >
                {label}
              </a>
            ))}
            <a
              href="#calculator"
              className="ml-4 px-6 py-2.5 text-base font-semibold transition-all duration-200"
              style={{
                background: "var(--teal-primary)",
                color: "var(--white)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--teal-hover)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(1,61,90,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--teal-primary)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Calculate Savings
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--charcoal)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: "1px solid var(--gray-200)", background: "var(--warm-neutral)" }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="py-3 text-sm font-medium"
                style={{ color: "var(--charcoal)", borderBottom: "1px solid var(--gray-200)" }}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#calculator"
              className="mt-3 py-3 px-6 text-base font-semibold text-center"
              style={{ background: "var(--teal-primary)", color: "var(--white)", borderRadius: "4px" }}
              onClick={() => setOpen(false)}
            >
              Calculate Savings
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
