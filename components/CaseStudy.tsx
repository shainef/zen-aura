"use client";

import { useState, useCallback, useRef } from "react";

const SLIDES = [
  { src: "/images/space-04.jpg", alt: "Bedroom detail: mustard floral pillow shams against a live-edge headboard" },
  { src: "/images/space-01.jpg", alt: "Sourced living room with curated art wall and mustard velvet modular sofa" },
  { src: "/images/space-02.jpg", alt: "Living room detail: leather tray, reading glasses, and art books on the sofa" },
  { src: "/images/space-03.jpg", alt: "Bedroom with made bed, sage walls, and reclaimed-wood floating shelves" },
  { src: "/images/space-05.jpg", alt: "Bedroom nightstand with caged Edison lamp in warm evening light" },
];

const STATS = [
  { label: "Retail Value",      value: "$25,858", strikethrough: true },
  { label: "Actual Investment", value: "$8,570" },
  { label: "Total Savings",     value: "$17,288", accent: true },
  { label: "Average Discount",  value: "66.9%",   accent: true },
  { label: "ROI",               value: "202%",    accent: true },
];

const INCLUDED = [
  "Designer furniture (West Elm, Eternity Modern, Rove Concepts)",
  "International art (Cuba, Colombia, Indonesia, Mexico, USA)",
  "Complete outdoor entertaining setup",
  "Storage solutions & home organization",
  "Baby gear & family-friendly pieces",
  "Tools & functional equipment",
];

export default function CaseStudy() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
  };
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section className="bg-[#F7F5F0] py-20 md:py-28" id="case-study">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A961]">
            Proof of Concept
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] md:text-5xl">
            My Living Space
          </h2>
        </div>

        {/* Asymmetric 60 / 40 split */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:items-center md:gap-10">

          {/* CAROUSEL — 60% (3 of 5 cols) */}
          <div
            className="relative md:col-span-3"
            role="region"
            aria-roledescription="carousel"
            aria-label="My Living Space gallery"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-xl"
              style={{ aspectRatio: "4 / 3" }}
            >
              {SLIDES.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  aria-hidden={i !== index}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Slide counter */}
              <div className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">
                {index + 1} / {count}
              </div>

              {/* Gold caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#C9A961] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A]">
                6 months of strategic sourcing — 43 pieces, 10+ channels
              </div>

              {/* Prev */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#013D5A] shadow-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#013D5A] focus-visible:ring-offset-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#013D5A] shadow-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#013D5A] focus-visible:ring-offset-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to photo ${i + 1} of ${count}`}
                  aria-current={i === index}
                  className={`h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#013D5A] focus-visible:ring-offset-2 ${
                    i === index ? "w-6 bg-[#013D5A]" : "w-2.5 bg-[#013D5A]/30 hover:bg-[#013D5A]/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STATS + WHAT'S INCLUDED — 40% (2 of 5 cols) */}
          <div className="md:col-span-2">

            {/* Stats card */}
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <ul className="divide-y divide-black/10">
                {STATS.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                  >
                    <span className="text-sm text-[#4A4A4A]">{s.label}</span>
                    <span
                      className={`text-lg font-bold tabular-nums ${
                        s.strikethrough
                          ? "text-[#9A9A9A] line-through"
                          : s.accent
                          ? "text-[#C9A961]"
                          : "text-[#1A1A1A]"
                      }`}
                    >
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A961]">
                What&apos;s Included
              </p>
              <ul className="space-y-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[#1A1A1A]">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-[#C9A961]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
