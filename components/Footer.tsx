"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--white)", borderTop: "1px solid var(--gray-200)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image src="/logo-icon.png" alt="Zen Aura" fill className="object-contain" />
            </div>
            <div>
              <p
                className="text-sm font-semibold tracking-[0.25em] uppercase leading-none"
                style={{ fontFamily: "var(--font-josefin), sans-serif", color: "var(--charcoal)" }}
              >
                ZEN AURA
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--gray-400)" }}>
                Creative Labs
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Case Study", href: "#case-study" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--gray-400)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--gray-400)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
          >
            <Camera size={15} />
            @zenaura.design
          </a>
        </div>

        <div
          className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: "1px solid var(--gray-200)" }}
        >
          <span style={{ fontSize: "13px", color: "var(--gray-400)" }}>
            © {year} Zen Aura Creative Labs. All rights reserved.
          </span>
          <span style={{ fontSize: "13px", color: "var(--gray-400)" }}>
            Strategic procurement for complete living spaces
          </span>
        </div>
      </div>
    </footer>
  );
}
