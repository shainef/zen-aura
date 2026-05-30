"use client";

import { useState, useEffect, useRef } from "react";
import { calculateSavings, formatCurrency, roomTypes, tiers, type TierId, type SavingsResult } from "@/lib/utils";

function AnimatedNumber({ value, prefix = "" }: { value: number; prefix?: string }) {
  const [displayed, setDisplayed] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const duration = 400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setDisplayed(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else prevRef.current = end;
    };
    requestAnimationFrame(tick);
  }, [value]);

  return <span>{prefix}{new Intl.NumberFormat("en-US").format(displayed)}</span>;
}

export default function ROICalculator() {
  const [selectedTier, setSelectedTier] = useState<TierId>("silver");
  const [budget, setBudget] = useState(10000);
  const [roomType, setRoomType] = useState("living-room");
  const [inputValue, setInputValue] = useState("10000");
  const [results, setResults] = useState<SavingsResult>(() => calculateSavings(10000, "silver"));

  useEffect(() => {
    setResults(calculateSavings(budget, selectedTier));
  }, [budget, selectedTier]);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setBudget(val);
    setInputValue(val.toString());
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(raw);
    const num = Number(raw);
    if (num >= 1000 && num <= 50000) setBudget(num);
  };

  const handleInputBlur = () => {
    const num = Math.max(1000, Math.min(50000, Number(inputValue) || 1000));
    setBudget(num);
    setInputValue(num.toString());
  };

  const sliderPercent = ((budget - 1000) / (50000 - 1000)) * 100;
  const roomLabel = roomTypes.find((r) => r.value === roomType)?.label ?? "Living Room";

  return (
    <section id="calculator" style={{ background: "var(--warm-neutral)", padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>
            Interactive Tool
          </p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.01em", color: "var(--charcoal)" }}
          >
            What Could You Save?
          </h2>
          <p style={{ fontSize: "18px", color: "var(--charcoal-medium)", lineHeight: 1.6 }}>
            Select your service tier and item budget to see your total investment and savings
          </p>
        </div>

        {/* Tier Selector */}
        <div className="mb-12">
          <p className="text-center font-semibold mb-6" style={{ fontSize: "18px", color: "var(--charcoal)" }}>
            Select Your Service Tier
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {tiers.map((tier) => {
              const active = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  aria-label={`Select ${tier.name} tier`}
                  aria-pressed={active}
                  className="relative text-center transition-all duration-250 focus:outline-none"
                  style={{
                    background: active ? "rgba(1,61,90,0.03)" : "var(--white)",
                    border: active ? "3px solid var(--teal-primary)" : "2px solid var(--gray-300)",
                    borderRadius: "12px",
                    padding: "28px 16px 20px",
                    cursor: "pointer",
                    transform: active ? "translateY(-2px)" : "translateY(0)",
                    boxShadow: active ? "0 8px 20px rgba(1,61,90,0.15)" : "none",
                    minHeight: "44px",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--teal-primary)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 16px rgba(1,61,90,0.1)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--gray-300)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }
                  }}
                >
                  {/* Badge */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 py-1 text-xs font-bold tracking-widest uppercase whitespace-nowrap"
                    style={{
                      background: tier.featured ? "var(--sand)" : active ? "var(--teal-primary)" : "var(--white)",
                      color: tier.featured ? "var(--charcoal)" : active ? "var(--white)" : "var(--gray-600)",
                      border: tier.featured ? "none" : `2px solid ${active ? "var(--teal-primary)" : "var(--gray-300)"}`,
                      borderRadius: "16px",
                    }}
                  >
                    {tier.badge}
                  </div>

                  {/* Radio indicator */}
                  <div
                    className="absolute top-4 right-4 flex items-center justify-center"
                    style={{
                      width: "20px", height: "20px",
                      border: `2px solid ${active ? "var(--teal-primary)" : "var(--gray-300)"}`,
                      borderRadius: "50%",
                      background: active ? "var(--teal-primary)" : "transparent",
                    }}
                  >
                    {active && (
                      <div style={{ width: "8px", height: "8px", background: "var(--white)", borderRadius: "50%" }} />
                    )}
                  </div>

                  <p className="font-bold mt-2 mb-2" style={{ fontSize: "18px", color: "var(--charcoal)" }}>
                    {tier.name}
                  </p>
                  <p className="font-bold mb-2" style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "var(--teal-primary)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                    {formatCurrency(tier.fee)}
                  </p>
                  <p className="mb-3 font-semibold" style={{ fontSize: "13px", color: "var(--sand)", letterSpacing: "0.02em" }}>
                    {tier.duration}
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--gray-600)", lineHeight: 1.5 }}>
                    {tier.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget Section */}
        <div
          style={{
            background: "var(--white)",
            borderRadius: "12px",
            padding: "clamp(20px, 5vw, 40px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            marginBottom: "24px",
          }}
        >
          <p className="font-semibold mb-6 text-center" style={{ fontSize: "18px", color: "var(--charcoal)" }}>
            Your Budget for Items
          </p>

          {/* Room type */}
          <div className="mb-6">
            <div className="relative max-w-xs mx-auto">
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                aria-label="Room type"
                className="w-full appearance-none focus:outline-none"
                style={{
                  padding: "12px 40px 12px 16px",
                  fontSize: "15px",
                  fontFamily: "var(--font-inter), sans-serif",
                  background: "var(--white)",
                  border: "2px solid var(--gray-200)",
                  borderRadius: "6px",
                  color: "var(--charcoal)",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--teal-primary)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-200)")}
              >
                {roomTypes.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--gray-400)" }}>▾</div>
            </div>
          </div>

          {/* Number input */}
          <div className="relative mb-5 max-w-xs mx-auto">
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 font-bold"
              style={{ fontSize: "22px", color: "var(--charcoal-medium)" }}
            >
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={handleInput}
              onBlur={handleInputBlur}
              aria-label="Item budget amount"
              className="w-full focus:outline-none text-center"
              style={{
                padding: "14px 16px 14px 36px",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "var(--font-inter), sans-serif",
                background: "var(--white)",
                border: "2px solid var(--gray-200)",
                borderRadius: "6px",
                color: "var(--charcoal)",
                transition: "border-color 0.2s",
                fontVariantNumeric: "tabular-nums",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--teal-primary)")}
            />
          </div>

          {/* Slider */}
          <div className="max-w-lg mx-auto">
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={budget}
              onChange={handleSlider}
              aria-label="Adjust item budget"
              className="w-full"
              style={{
                background: `linear-gradient(to right, var(--teal-primary) 0%, var(--teal-primary) ${sliderPercent}%, var(--gray-200) ${sliderPercent}%, var(--gray-200) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs mt-2 font-semibold" style={{ color: "var(--gray-600)" }}>
              <span>$1K</span><span>$25K</span><span>$50K</span>
            </div>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div
          className="grid grid-cols-3 mb-6"
          style={{
            background: "var(--gray-300)",
            gap: "2px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {[
            { label: "Item Costs",   value: <AnimatedNumber value={results.itemBudget} prefix="$" />,      highlight: false },
            { label: "Service Fee",  value: <AnimatedNumber value={results.serviceFee} prefix="$" />,      highlight: false },
            { label: "Your Total",   value: <AnimatedNumber value={results.totalInvestment} prefix="$" />, highlight: true  },
          ].map(({ label, value, highlight }) => (
            <div
              key={label}
              className="text-center py-5 px-2 sm:px-4"
              style={{ background: highlight ? "rgba(1,61,90,0.05)" : "var(--white)" }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: highlight ? "var(--teal-primary)" : "var(--gray-600)" }}
              >
                {label}
              </p>
              <p
                className="font-bold"
                style={{ fontSize: highlight ? "clamp(18px, 4vw, 28px)" : "clamp(16px, 3.5vw, 24px)", color: highlight ? "var(--teal-primary)" : "var(--charcoal)", fontVariantNumeric: "tabular-nums" }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Results Card */}
        <div
          style={{
            background: "var(--white)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Retail Estimate */}
          <div className="text-center p-10" style={{ borderBottom: "1px solid var(--gray-200)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gray-600)" }}>
              Estimated Retail Value
            </p>
            <p
              className="font-bold"
              style={{ fontSize: "clamp(48px, 6vw, 64px)", color: "var(--charcoal)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
            >
              <AnimatedNumber value={results.retailValue} prefix="$" />
            </p>
            <p className="mt-3" style={{ fontSize: "16px", color: "var(--gray-600)" }}>
              for a {roomLabel}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3" style={{ borderBottom: "1px solid var(--gray-200)" }}>
            {[
              { label: "You Pay",   value: <AnimatedNumber value={results.totalInvestment} prefix="$" />, bg: "var(--warm-neutral)", color: "var(--charcoal)",      labelColor: "var(--gray-600)" },
              { label: "You Save",  value: <AnimatedNumber value={results.totalSavings} prefix="$" />,    bg: "var(--gray-200)",     color: "var(--teal-primary)",  labelColor: "var(--charcoal-medium)" },
              { label: "Discount",  value: `${results.discountPercent}%`,                                 bg: "var(--white)",        color: "var(--charcoal)",      labelColor: "var(--gray-600)" },
            ].map(({ label, value, bg, color, labelColor }, i) => (
              <div
                key={label}
                className="p-4 sm:p-6 text-center"
                style={{
                  background: bg,
                  borderRight: i < 2 ? "1px solid var(--gray-200)" : "none",
                }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: labelColor }}>
                  {label}
                </p>
                <p className="font-bold" style={{ fontSize: "clamp(15px, 3.5vw, 22px)", color, fontVariantNumeric: "tabular-nums" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* ROI + CTA */}
          <div
            className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "var(--sand)" }}
          >
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--charcoal)" }}>
                Return on Investment
              </p>
              <p className="font-bold" style={{ fontSize: "52px", color: "var(--charcoal)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                <AnimatedNumber value={results.roi} />%
              </p>
            </div>
            <a
              href="#contact"
              className="text-base font-semibold transition-all duration-200 whitespace-nowrap"
              style={{ background: "var(--teal-primary)", color: "var(--white)", padding: "16px 32px", borderRadius: "6px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--sand)"; (e.currentTarget as HTMLElement).style.color = "var(--teal-primary)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--teal-primary)"; (e.currentTarget as HTMLElement).style.color = "var(--white)"; }}
            >
              Start Your Project →
            </a>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center mt-6 text-sm" style={{ color: "var(--gray-600)", lineHeight: 1.6 }}>
          Based on our proven average of{" "}
          <strong style={{ color: "var(--charcoal)" }}>66.9% savings</strong>{" "}
          across 43+ sourced items. Total shown includes service fee + item costs.
        </p>

      </div>
    </section>
  );
}
