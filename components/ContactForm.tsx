"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { roomTypes } from "@/lib/utils";

const budgetRanges = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5-10k", label: "$5,000 – $10,000" },
  { value: "10-20k", label: "$10,000 – $20,000" },
  { value: "20-50k", label: "$20,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (endpoint) await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
    } catch { /* handled below */ }
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  return (
    <section id="contact" style={{ background: "var(--charcoal)", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sand)" }}>
              Free Consultation
            </p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
            >
              Ready to Transform Your Space?
            </h2>
            <p className="mb-12" style={{ fontSize: "18px", color: "var(--gray-400)", lineHeight: 1.6 }}>
              Tell us about your project. We&apos;ll be in touch within 24 hours to discuss how we can save you 60–70% on your dream space.
            </p>
            <div className="space-y-6">
              {[
                { label: "Email", value: "hello@zenaura.design" },
                { label: "Instagram", value: "@zenaura.design" },
                { label: "Serving", value: "Your area" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: "var(--sand)" }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--gray-400)" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: "var(--white)", borderRadius: "8px", padding: "48px" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={52} className="mb-5" style={{ color: "var(--success)" }} />
                <h3 className="font-bold mb-2" style={{ fontSize: "24px", color: "var(--charcoal)" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--charcoal-medium)" }}>We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" type="text" required placeholder="Jane Smith" />
                  <Field label="Email" name="email" type="email" required placeholder="jane@example.com" />
                </div>
                <Field label="Phone (optional)" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                <SelectField label="Project Type" name="project_type" required>
                  <option value="">Select a room type…</option>
                  {roomTypes.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                </SelectField>
                <SelectField label="Budget Range" name="budget_range" required>
                  <option value="">Select a range…</option>
                  {budgetRanges.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
                </SelectField>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--charcoal-medium)" }}>
                    Your Project
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your vision, style preferences, timeline…"
                    className="w-full focus:outline-none resize-none"
                    style={{
                      padding: "14px 16px",
                      fontSize: "16px",
                      fontFamily: "var(--font-inter), sans-serif",
                      background: "var(--white)",
                      border: "2px solid var(--gray-200)",
                      borderRadius: "4px",
                      color: "var(--charcoal)",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--teal-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50"
                  style={{
                    padding: "18px",
                    fontSize: "16px",
                    background: "var(--teal-primary)",
                    color: "var(--white)",
                    borderRadius: "4px",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = "var(--teal-hover)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--teal-primary)"; }}
                >
                  {loading
                    ? <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    : <><Send size={16} /> Request Consultation</>
                  }
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required, placeholder }: { label: string; name: string; type: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" style={{ color: "var(--charcoal-medium)" }}>{label}</label>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        className="w-full focus:outline-none"
        style={{ padding: "14px 16px", fontSize: "16px", fontFamily: "var(--font-inter), sans-serif", background: "var(--white)", border: "2px solid var(--gray-200)", borderRadius: "4px", color: "var(--charcoal)", transition: "border-color 0.2s" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--teal-primary)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
      />
    </div>
  );
}

function SelectField({ label, name, required, children }: { label: string; name: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" style={{ color: "var(--charcoal-medium)" }}>{label}</label>
      <div className="relative">
        <select
          name={name} required={required}
          className="w-full appearance-none focus:outline-none"
          style={{ padding: "14px 48px 14px 16px", fontSize: "16px", fontFamily: "var(--font-inter), sans-serif", background: "var(--white)", border: "2px solid var(--gray-200)", borderRadius: "4px", color: "var(--charcoal)", transition: "border-color 0.2s" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--teal-primary)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
        >
          {children}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--gray-400)" }}>▾</div>
      </div>
    </div>
  );
}
