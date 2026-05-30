"use client";

import { useState } from "react";

const packages = [
  {
    tier: "Bronze",
    name: "Sourcing Strategy",
    price: "$500",
    duration: "Self-paced",
    tagline: "Sourcing strategy + you hunt",
    features: ["60-min strategy session (video call)", "Complete sourcing playbook (strategy + list + scripts)", "Digital Sourcing Guide (PDF download)", "60 days email support (unlimited)", "20% off à la carte services"],
    featured: false,
  },
  {
    tier: "Silver",
    name: "Full Procurement",
    price: "$1,000",
    duration: "6–8 weeks",
    tagline: "We source everything for you",
    features: ["Everything in Sourcing Strategy", "We source all items for you", "Quality verification on every piece", "Delivery coordination", "You pay item costs + flat fee"],
    featured: true,
  },
  {
    tier: "Gold",
    name: "White-Glove Design",
    price: "$2,500",
    duration: "Up to 12 weeks",
    tagline: "Complete design + procurement",
    features: ["Everything in Full Procurement", "Full interior design service", "Mood boards & space planning", "Installation & styling", "End-to-end project management"],
    featured: false,
  },
];

export default function Services() {
  const [deliveryExpanded, setDeliveryExpanded] = useState(false);
  const [stagingExpanded, setStagingExpanded] = useState(false);

  return (
    <section id="services" style={{ background: "var(--warm-neutral)", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>
            Packages
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.01em", color: "var(--charcoal)" }}
          >
            Service Packages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start mb-32">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className="relative flex flex-col transition-all duration-300"
              style={{
                background: pkg.featured ? "var(--charcoal)" : "var(--white)",
                border: pkg.featured ? "3px solid var(--sand)" : "1px solid var(--gray-200)",
                borderRadius: "8px",
                padding: pkg.featured ? "40px" : "32px",
                transform: pkg.featured ? "scale(1.05)" : "scale(1)",
                zIndex: pkg.featured ? 10 : 0,
              }}
            >
              {/* Most popular badge */}
              {pkg.featured && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 -top-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: "var(--sand)",
                    color: "var(--charcoal)",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <p
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ color: pkg.featured ? "var(--sand)" : "var(--sand)" }}
              >
                {pkg.tier}
              </p>
              <h3
                className="font-semibold mb-1"
                style={{ fontSize: "22px", color: pkg.featured ? "var(--white)" : "var(--charcoal)" }}
              >
                {pkg.name}
              </h3>
              <p
                className="font-bold mt-4 mb-2"
                style={{ fontSize: "40px", color: "var(--sand)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
              >
                {pkg.price}
              </p>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: pkg.featured ? "rgba(255,255,255,0.6)" : "var(--gray-400)" }}
              >
                {pkg.duration}
              </p>
              <p
                className="text-sm pb-6 mb-6"
                style={{ color: pkg.featured ? "var(--white)" : "var(--gray-400)", borderBottom: `1px solid ${pkg.featured ? "rgba(255,255,255,0.15)" : "var(--gray-200)"}` }}
              >
                {pkg.tagline}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: "var(--sand)" }}>→</span>
                    <span style={{ color: pkg.featured ? "var(--white)" : "var(--charcoal-medium)" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center py-3 px-6 text-base font-semibold transition-all duration-200"
                style={{
                  background: "var(--teal-primary)",
                  color: "var(--white)",
                  border: "none",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--teal-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--teal-primary)";
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* À La Carte */}
        <div>
          {/* "Try Us First" tab */}
          <div className="flex justify-center mb-0">
            <div
              className="inline-flex items-center gap-2 font-bold tracking-widest uppercase"
              style={{
                background: "var(--teal-primary)",
                color: "var(--white)",
                padding: "10px 22px",
                borderRadius: "20px 20px 0 0",
                fontSize: "13px",
                letterSpacing: "0.05em",
                boxShadow: "0 -2px 12px rgba(1,61,90,0.2)",
              }}
            >
              <span style={{ color: "var(--sand)" }}>✦</span>
              Try Us First
            </div>
          </div>

          <div className="text-center mb-12" style={{ borderTop: "3px solid var(--teal-primary)", paddingTop: "28px" }}>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>
              Pay Per Item
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.01em", color: "var(--charcoal)" }}
            >
              Need Help with Just One Piece?
            </h2>
            <p style={{ fontSize: "17px", color: "var(--charcoal-medium)", lineHeight: 1.6, maxWidth: "540px", margin: "0 auto" }}>
              Pay only for what you need. À la carte services let you hire us for individual items
              without committing to a full package.
            </p>
          </div>

          {/* Three service categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {/* Sourcing */}
            <div style={{ background: "var(--white)", border: "1px solid var(--gray-200)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--gray-200)", background: "var(--charcoal)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--sand)" }}>Sourcing</p>
                <h3 className="font-semibold" style={{ fontSize: "18px", color: "var(--white)" }}>Per Item Fee</h3>
              </div>
              <ul className="flex-1 flex flex-col justify-center" style={{ padding: "8px 0" }}>
                {[
                  { label: "Small / Medium",  sub: "Chairs, tables, lamps, décor, mirrors", price: "$75" },
                  { label: "Large / Premium", sub: "Sofas, beds, rugs, antiques, designer",  price: "$200" },
                ].map(({ label, sub, price }) => (
                  <li key={label} className="flex items-center justify-between" style={{ padding: "20px 20px", borderBottom: "1px solid var(--gray-100)" }}>
                    <div>
                      <p className="font-bold" style={{ fontSize: "18px", color: "var(--charcoal)", letterSpacing: "-0.01em", marginBottom: "6px" }}>{label}</p>
                      <p style={{ fontSize: "15px", color: "var(--gray-400)", lineHeight: 1.6 }}>{sub}</p>
                    </div>
                    <span className="font-extrabold ml-6 whitespace-nowrap" style={{ fontSize: "32px", color: "var(--teal-primary)", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>{price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery — collapsible */}
            <div style={{ background: "var(--white)", border: "1px solid var(--gray-200)", borderRadius: "8px", overflow: "hidden" }}>
              <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--gray-200)", background: "var(--charcoal)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--sand)" }}>Delivery</p>
                <h3 className="font-semibold" style={{ fontSize: "18px", color: "var(--white)" }}>Per Trip</h3>
              </div>
              <div className="px-5 pt-2 pb-4">
                <ul style={{ borderColor: "var(--gray-200)" }}>
                  {[
                    { label: "Self-haul", sub: "You pick up",                   price: "FREE" },
                    { label: "Car haul",  sub: "Small items, within 30 mi",     price: "$40" },
                    { label: "Van rental",sub: "Medium loads, within 30 mi",    price: "$75" },
                  ].map(({ label, sub, price }) => (
                    <li key={label} className="flex items-center justify-between" style={{ padding: "10px 0", borderBottom: "1px solid var(--gray-100)" }}>
                      <div>
                        <p className="font-medium" style={{ fontSize: "14px", color: "var(--charcoal)" }}>{label}</p>
                        <p style={{ fontSize: "12px", marginTop: "2px", color: "var(--gray-400)" }}>{sub}</p>
                      </div>
                      <span className="font-bold ml-4 whitespace-nowrap" style={{ fontSize: price === "FREE" ? "14px" : "20px", letterSpacing: price === "FREE" ? "0.05em" : undefined, color: "var(--sand)", fontVariantNumeric: "tabular-nums" }}>{price}</span>
                    </li>
                  ))}

                  {/* Collapsible rows */}
                  {deliveryExpanded && (
                    <>
                      {[
                        { label: "Truck rental", sub: "Large furniture, within 30 mi",  price: "$125" },
                        { label: "Multi-stop",   sub: "Per additional pickup location",  price: "+$25" },
                      ].map(({ label, sub, price }) => (
                        <li key={label} className="flex items-center justify-between" style={{ padding: "10px 0", borderBottom: "1px solid var(--gray-100)" }}>
                          <div>
                            <p className="font-medium" style={{ fontSize: "14px", color: "var(--charcoal)" }}>{label}</p>
                            <p style={{ fontSize: "12px", marginTop: "2px", color: "var(--gray-400)" }}>{sub}</p>
                          </div>
                          <span className="font-bold ml-4 whitespace-nowrap" style={{ fontSize: "20px", color: "var(--teal-primary)", fontVariantNumeric: "tabular-nums" }}>{price}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>

                {/* Toggle */}
                <button
                  onClick={() => setDeliveryExpanded((v) => !v)}
                  aria-expanded={deliveryExpanded}
                  className="flex items-center gap-1.5 font-semibold transition-all duration-200"
                  style={{ background: "none", border: "none", padding: "10px 0 0", cursor: "pointer", fontSize: "13px", color: "var(--teal-primary)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal-hover)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal-primary)"; }}
                >
                  {deliveryExpanded ? "Less options" : "More options"}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.25s", transform: deliveryExpanded ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Extended range note */}
                <p style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--gray-200)", fontSize: "12px", color: "var(--gray-400)", fontStyle: "italic" }}>
                  Extended range: +$1.50/mile beyond 30 miles
                </p>
              </div>
            </div>

            {/* Staging — collapsible */}
            <div style={{ background: "var(--white)", border: "1px solid var(--gray-200)", borderRadius: "8px", overflow: "hidden" }}>
              <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--gray-200)", background: "var(--charcoal)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--sand)" }}>Staging</p>
                <h3 className="font-semibold" style={{ fontSize: "18px", color: "var(--white)" }}>Flat Rate</h3>
              </div>
              <div className="px-5 pt-2 pb-4">
                <ul>
                  {[
                    { label: "Drop-off",        sub: "Bring item to our staging location", price: "FREE" },
                    { label: "Basic placement", sub: "Place item, minor assembly",          price: "$50" },
                    { label: "Room staging",    sub: "Arrange, style, photograph",          price: "$150" },
                  ].map(({ label, sub, price }) => (
                    <li key={label} className="flex items-center justify-between" style={{ padding: "10px 0", borderBottom: "1px solid var(--gray-100)" }}>
                      <div>
                        <p className="font-medium" style={{ fontSize: "14px", color: "var(--charcoal)" }}>{label}</p>
                        <p style={{ fontSize: "12px", marginTop: "2px", color: "var(--gray-400)" }}>{sub}</p>
                      </div>
                      <span className="font-bold ml-4 whitespace-nowrap" style={{ fontSize: price === "FREE" ? "14px" : "20px", letterSpacing: price === "FREE" ? "0.05em" : undefined, color: "var(--sand)", fontVariantNumeric: "tabular-nums" }}>{price}</span>
                    </li>
                  ))}

                  {/* Collapsible rows */}
                  {stagingExpanded && (
                    <>
                      {[
                        { label: "Full home styling", sub: "Multiple rooms, 3–4 hrs",      price: "$300" },
                        { label: "Art hanging",       sub: "Per piece, hardware included",  price: "$75" },
                      ].map(({ label, sub, price }) => (
                        <li key={label} className="flex items-center justify-between" style={{ padding: "10px 0", borderBottom: "1px solid var(--gray-100)" }}>
                          <div>
                            <p className="font-medium" style={{ fontSize: "14px", color: "var(--charcoal)" }}>{label}</p>
                            <p style={{ fontSize: "12px", marginTop: "2px", color: "var(--gray-400)" }}>{sub}</p>
                          </div>
                          <span className="font-bold ml-4 whitespace-nowrap" style={{ fontSize: "20px", color: "var(--teal-primary)", fontVariantNumeric: "tabular-nums" }}>{price}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>

                {/* Toggle */}
                <button
                  onClick={() => setStagingExpanded((v) => !v)}
                  aria-expanded={stagingExpanded}
                  className="flex items-center gap-1.5 font-semibold transition-all duration-200"
                  style={{ background: "none", border: "none", padding: "10px 0 0", cursor: "pointer", fontSize: "13px", color: "var(--teal-primary)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal-hover)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal-primary)"; }}
                >
                  {stagingExpanded ? "Less options" : "More options"}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.25s", transform: stagingExpanded ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bundle discounts + package nudge */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Bundles */}
            <div
              className="flex flex-col gap-3 p-6"
              style={{ background: "var(--white)", border: "1px solid var(--gray-200)", borderRadius: "8px" }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--sand)" }}>Bundle Discounts</p>
              {[
                { qty: "3 items", saving: "10% off sourcing fees" },
                { qty: "5 items", saving: "15% off sourcing fees" },
              ].map(({ qty, saving }) => (
                <div key={qty} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--gray-200)" }}>
                  <span className="font-semibold" style={{ color: "var(--charcoal)" }}>{qty}</span>
                  <span className="text-sm" style={{ color: "var(--charcoal-medium)" }}>{saving}</span>
                </div>
              ))}
              <p className="text-sm mt-1" style={{ color: "var(--gray-600)", lineHeight: 1.6 }}>
                Discounts apply to sourcing fees only. Item costs billed separately.
              </p>
            </div>

            {/* Package nudge */}
            <div
              className="flex flex-col justify-between p-6"
              style={{ background: "var(--teal-primary)", borderRadius: "8px" }}
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--sand)" }}>
                  Sourcing 5+ Items?
                </p>
                <h3 className="font-bold mb-2" style={{ fontSize: "20px", color: "var(--white)", lineHeight: 1.3 }}>
                  A package is better value
                </h3>
                <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
                  5 items à la carte = <strong style={{ color: "var(--white)" }}>$375–$531 sourcing</strong> + delivery + staging.{" "}
                  Silver package = <strong style={{ color: "var(--sand)" }}>$1,000 flat</strong> — unlimited sourcing
                  for 6–8 weeks, delivery coordination, and no per-item fees.
                </p>
              </div>
              <a
                href="#services"
                className="inline-block text-center text-sm font-semibold transition-all duration-200"
                style={{ background: "var(--sand)", color: "var(--charcoal)", padding: "12px 24px", borderRadius: "4px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--sand-dark)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--sand)"; }}
              >
                View Service Packages ↑
              </a>
            </div>
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: "var(--gray-600)" }}>
            Standard service area: 30-mile radius. Beyond 30 miles: +$1.50/mile.{" "}
            <a href="#contact" style={{ color: "var(--teal-primary)", textDecoration: "none", fontWeight: 600 }}>Get a quote →</a>
          </p>
        </div>

      </div>
    </section>
  );
}
