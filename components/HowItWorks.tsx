"use client";

const steps = [
  {
    number: "01",
    title: "Discovery Consultation",
    description: "We discuss your style, budget, timeline, and must-haves. Your vision drives every decision.",
    details: ["60 minutes", "Free initial consultation"],
  },
  {
    number: "02",
    title: "Strategic Sourcing",
    description: "We hunt across 10+ channels daily, negotiate deals, and verify quality before presenting anything.",
    details: ["2–8 weeks depending on scope", "You approve options as we find them"],
  },
  {
    number: "03",
    title: "Presentation & Approval",
    description: "See curated options with full pricing breakdowns. Retail vs. sourced vs. savings — completely transparent.",
    details: ["Full pricing transparency", "Make selections at your pace"],
  },
  {
    number: "04",
    title: "Procurement & Delivery",
    description: "We handle purchase, pickup, and delivery coordination. You receive your complete space.",
    details: ["End-to-end logistics", "60–70% below retail"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "var(--white)", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>
            The Process
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.01em", color: "var(--charcoal)" }}
          >
            How It Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="transition-all duration-300"
              style={{
                background: idx % 2 === 0 ? "var(--white)" : "var(--warm-neutral)",
                border: "1px solid var(--gray-200)",
                borderRadius: "8px",
                padding: "32px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--teal-primary)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gray-200)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "var(--sand)" }}>
                Step {step.number}
              </p>
              <h3 className="font-semibold mb-3" style={{ fontSize: "18px", color: "var(--charcoal)" }}>
                {step.title}
              </h3>
              <p className="mb-5" style={{ fontSize: "14px", color: "var(--charcoal-medium)", lineHeight: 1.7 }}>
                {step.description}
              </p>
              <ul className="space-y-1.5">
                {step.details.map((d) => (
                  <li key={d} className="flex items-center gap-2" style={{ fontSize: "13px", color: "var(--gray-400)" }}>
                    <span style={{ color: "var(--sand)" }}>·</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block px-10 py-4 text-base font-semibold transition-all duration-200"
            style={{ background: "var(--teal-primary)", color: "var(--white)", borderRadius: "4px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--teal-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--teal-primary)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
