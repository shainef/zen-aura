export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export type TierId = "bronze" | "silver" | "gold";

export interface Tier {
  id: TierId;
  name: string;
  fee: number;
  duration: string;
  badge: string;
  description: string;
  featured?: boolean;
}

export const tiers: Tier[] = [
  { id: "bronze", name: "Bronze", fee: 500,  duration: "Self-paced",    badge: "DIY Friendly",  description: "Sourcing strategy + you hunt" },
  { id: "silver", name: "Silver", fee: 1000, duration: "6–8 weeks",     badge: "Most Popular",  description: "We source everything for you", featured: true },
  { id: "gold",   name: "Gold",   fee: 2500, duration: "Up to 12 weeks", badge: "White-Glove",  description: "Complete design + procurement" },
];

export interface SavingsResult {
  itemBudget: number;
  serviceFee: number;
  totalInvestment: number;
  retailValue: number;
  totalSavings: number;
  discountPercent: number;
  roi: number;
}

const AVG_DISCOUNT = 0.675;

export function calculateSavings(itemBudget: number, tierId: TierId = "silver"): SavingsResult {
  const tier = tiers.find((t) => t.id === tierId)!;
  const serviceFee = tier.fee;
  const totalInvestment = itemBudget + serviceFee;
  const retailValue = itemBudget / (1 - AVG_DISCOUNT);
  const totalSavings = retailValue - totalInvestment;
  const discountPercent = (totalSavings / retailValue) * 100;
  const roi = (totalSavings / totalInvestment) * 100;

  return {
    itemBudget,
    serviceFee,
    totalInvestment: Math.round(totalInvestment),
    retailValue: Math.round(retailValue),
    totalSavings: Math.round(totalSavings),
    discountPercent: Math.round(discountPercent),
    roi: Math.round(roi),
  };
}

export const roomTypes = [
  { value: "living-room", label: "Living Room", avgRetail: 15000 },
  { value: "bedroom", label: "Bedroom", avgRetail: 8000 },
  { value: "dining-room", label: "Dining Room", avgRetail: 6000 },
  { value: "home-office", label: "Home Office", avgRetail: 5000 },
  { value: "nursery", label: "Nursery / Kids Room", avgRetail: 4000 },
  { value: "outdoor", label: "Outdoor Space", avgRetail: 7000 },
  { value: "whole-home", label: "Whole Home", avgRetail: 50000 },
];
