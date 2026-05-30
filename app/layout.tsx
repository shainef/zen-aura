import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

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
    "Strategic procurement for complete living spaces. Furniture, art, and functional pieces at 60–70% below retail. Proven track record: $24K spaces for $8K.",
  keywords:
    "interior design, furniture sourcing, discount furniture, home design, art curation, procurement, Zen Aura",
  openGraph: {
    title: "Zen Aura | Designer Spaces at 70% Below Retail",
    description: "Complete living spaces through strategic procurement",
    images: ["/og-image.jpg"],
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
        {children}
      </body>
    </html>
  );
}
