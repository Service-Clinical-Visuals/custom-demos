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
  title: "All Products | Original Syprin",
  description: "Explore the Original Syprin range of automotive care products designed for reliable performance, protection, and lasting engine efficiency.",
};

export default function SyprinProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} syprin-ap-root min-h-screen bg-background text-foreground antialiased overflow-x-hidden relative w-full`}>
      <ShopHeader />
      {children}
      <ShopFooter />
    </div>
  );
}
