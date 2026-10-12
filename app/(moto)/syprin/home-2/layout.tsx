import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import ShopHeader from "../_components/ShopHeader";
import ShopFooter from "../_components/ShopFooter";

const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Original Syprin | Petrol Performance Protection",
  description: "More Protection. More Performance. High-quality fuel additives, cleaners, and precision lubrication made in Germany.",
};

export default function SyprinHome2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} syprin-h2-root min-h-screen bg-background text-foreground antialiased overflow-x-hidden relative w-full`}>
      {/* Hidden over the banner; appears after half the banner (≈ half the viewport) is scrolled */}
      <ShopHeader revealAfterViewport={0.5} />
      {children}
      <ShopFooter />
    </div>
  );
}
