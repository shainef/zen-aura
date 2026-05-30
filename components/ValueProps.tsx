"use client";

const props = [
  {
    number: "01",
    title: "Strategic Sourcing",
    tagline: "We hunt daily across 10+ channels so you don't have to",
    items: ["Facebook Marketplace", "Estate sales", "Art galleries & artist direct", "Boutique shops", "Thrift stores", "Liquidation sales"],
  },
  {
    number: "02",
    title: "Complete Spaces",
    tagline: "Furniture + Art + Functional Pieces + Design",
    items: ["Not just furniture — entire living spaces", "Culturally-curated art from 5 countries", "Tools, baby gear, outdoor living", "Cohesive aesthetic, not random deals"],
  },
  {
    number: "03",
    title: "Proven Savings",
    tagline: "Average 67% Below Retail",
    items: ["43 items sourced: $17,288 saved", "Outdoor entertaining: 66% savings", "Complete woodworking shop: 47% savings", "Real receipts, real results"],
  },
];

export default function ValueProps() {
  return (
    <section id="value-props" style={{ background: "var(--white)", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>
            Why Choose Us
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.01em", color: "var(--charcoal)" }}
          >
            Strategic Procurement
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop) => (
            <div
              key={prop.number}
              className="group transition-all duration-300"
              style={{
                background: "var(--white)",
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
              <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sand)" }}>
                {prop.number}
              </p>
              <h3 className="font-semibold mb-2" style={{ fontSize: "20px", color: "var(--charcoal)" }}>
                {prop.title}
              </h3>
              <p className="mb-6" style={{ fontSize: "15px", color: "var(--charcoal-medium)", lineHeight: 1.6 }}>
                {prop.tagline}
              </p>
              <ul className="space-y-2.5">
                {prop.items.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ fontSize: "14px", color: "var(--charcoal-medium)" }}>
                    <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "var(--sand)" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
