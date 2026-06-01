import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Kept for logo wordmark only
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zen Aura | Designer Spaces at 70% Below Retail",
  description:
    "Zen Aura curates complete interior and outdoor environments through strategic sourcing — designer furniture, art, and outdoor pieces at 60–70% below retail.",
  keywords:
    "interior design, outdoor living, furniture sourcing, discount furniture, home design, art curation, procurement, Zen Aura",
  openGraph: {
    title: "Designer Spaces at 70% Below Retail",
    description:
      "Interior and outdoor spaces sourced across 10+ channels. Strategic procurement at 60–70% below retail.",
    url: "https://zenaura.design",
    siteName: "Zen Aura",
    images: [
      {
        url: "https://zenaura.design/images/hero-living.jpg",
        width: 2000,
        height: 1500,
        alt: "Curated living room sourced at 70% below retail — Zen Aura Creative Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Designer Spaces at 70% Below Retail",
    description:
      "Strategic procurement for complete environments — interior and outdoor — at 60–70% below retail.",
    images: ["https://zenaura.design/images/hero-living.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${josefin.variable} h-full`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
