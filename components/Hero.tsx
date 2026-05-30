"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section style={{
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--white)",
    }}>
      {/* Hero background image — hidden on mobile */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/images/hero-living.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
        {/* Scrim: strong on left for text legibility, fades right */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0.15) 100%)",
        }} />
        {/* Mobile: full white overlay so headline stays crisp */}
        <div className="lg:hidden" style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.96)",
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Headline + CTAs */}
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase mb-6"
              style={{ color: "var(--sand)", letterSpacing: "0.12em" }}
            >
              Strategic Procurement
            </p>
            <h1
              className="font-bold mb-6"
              style={{
                color: "var(--charcoal)",
                fontSize: "clamp(40px, 5vw, 72px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Designer Spaces at{" "}
              <span style={{ color: "var(--sand)" }}>70% Below Retail</span>
            </h1>
            <p
              className="mb-10"
              style={{
                fontSize: "clamp(18px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "var(--charcoal-medium)",
                maxWidth: "480px",
              }}
            >
              Strategic procurement + cultural curation = your dream environment for
              less. Interior and outdoor spaces sourced across 10+ channels so you
              don&apos;t have to.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="px-8 py-4 text-base font-semibold transition-all duration-200"
                style={{
                  background: "var(--teal-primary)",
                  color: "var(--white)",
                  borderRadius: "4px",
                  letterSpacing: "0.02em",
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
                Calculate Your Savings
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 text-base font-semibold transition-all duration-200"
                style={{
                  background: "transparent",
                  color: "var(--teal-primary)",
                  border: "2px solid var(--teal-primary)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--teal-primary)";
                  (e.currentTarget as HTMLElement).style.color = "var(--white)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--teal-primary)";
                }}
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right: Floating white stats card */}
          <div className="lg:flex lg:justify-end">
            <div
              className="w-full max-w-sm mx-auto lg:mx-0"
              style={{
                background: "var(--white)",
                borderRadius: "8px",
                borderTop: "4px solid var(--sand)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                padding: "clamp(20px, 5vw, 32px)",
                overflow: "hidden",
              }}
            >
              {/* Logo mark */}
              <div className="flex items-center gap-2 mb-6 pb-6" style={{ borderBottom: "1px solid var(--gray-200)" }}>
                <div className="relative w-7 h-7">
                  <Image src="/logo-icon.png" alt="Zen Aura" fill className="object-contain" />
                </div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-josefin), sans-serif", color: "var(--gray-400)" }}
                >
                  Real Project Numbers
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: "1px solid var(--gray-200)" }}>
                  <span className="text-sm font-medium" style={{ color: "var(--gray-400)" }}>
                    Retail Value
                  </span>
                  <span className="font-semibold line-through" style={{ color: "var(--gray-300)", fontSize: "16px" }}>
                    $25,858
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: "1px solid var(--gray-200)" }}>
                  <span className="text-sm font-medium" style={{ color: "var(--gray-400)" }}>
                    Sourced For
                  </span>
                  <span className="font-bold" style={{ color: "var(--teal-primary)", fontSize: "22px" }}>
                    $8,570
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: "1px solid var(--gray-200)" }}>
                  <span className="text-sm font-medium" style={{ color: "var(--gray-400)" }}>
                    You Save
                  </span>
                  <span className="font-bold" style={{ color: "var(--teal-save)", fontSize: "22px" }}>
                    $17,288
                  </span>
                </div>
              </div>

              {/* 66.9% — full-width black footer, bleeds to card edges */}
              <div
                className="text-center"
                style={{
                  background: "#1A1A1A",
                  margin: "24px calc(clamp(20px, 5vw, 32px) * -1) calc(clamp(20px, 5vw, 32px) * -1)",
                  padding: "clamp(28px, 5vw, 40px) clamp(20px, 5vw, 32px)",
                  borderRadius: "0 0 8px 8px",
                }}
              >
                <p
                  style={{ fontSize: "clamp(56px, 14vw, 80px)", fontWeight: 800, color: "var(--white)", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: "8px" }}
                >
                  66.9%
                </p>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--sand)" }}>
                  Average Savings
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
