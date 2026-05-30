import { Camera } from "lucide-react";

const stats = [
  { stat: "43+", label: "Items Sourced" },
  { stat: "67%", label: "Average Savings" },
  { stat: "5", label: "Countries of Art" },
  { stat: "$17K+", label: "Saved on One Project" },
];

export default function SocialProof() {
  return (
    <section style={{ background: "var(--white)", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Trust stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20" style={{ background: "var(--gray-200)", borderRadius: "8px", overflow: "hidden" }}>
          {stats.map(({ stat, label }) => (
            <div key={label} className="py-12 px-8 text-center" style={{ background: "var(--white)" }}>
              <p
                className="font-bold mb-2"
                style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--charcoal)", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}
              >
                {stat}
              </p>
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--gray-400)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Social placeholder */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>
              Client Stories
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.01em", color: "var(--charcoal)" }}
            >
              What Clients Say
            </h2>
            <p style={{ fontSize: "18px", color: "var(--charcoal-medium)", lineHeight: 1.6 }}>
              Just getting started. Testimonials coming soon — follow along on Instagram for sourcing finds and design inspiration in real time.
            </p>
          </div>
          <div
            style={{
              background: "var(--warm-neutral)",
              border: "1px solid var(--gray-200)",
              borderRadius: "8px",
              padding: "40px",
            }}
          >
            <p className="mb-6" style={{ fontSize: "18px", color: "var(--charcoal-medium)", lineHeight: 1.7, fontStyle: "italic" }}>
              &ldquo;Follow along on Instagram to see sourced finds, design inspiration, and behind-the-scenes procurement in real time.&rdquo;
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200"
              style={{ background: "var(--teal-primary)", color: "var(--white)", borderRadius: "4px" }}
            >
              <Camera size={16} />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
