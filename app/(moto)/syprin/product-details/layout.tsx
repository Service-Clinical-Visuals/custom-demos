import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./global.css";
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
  title: "Diesel Injector and System Cleaner | Original Syprin",
  description: "ORIGINAL SYPRIN Diesel System Cleaner – prevents engine damage and keeps your diesel engine at optimal performance.",
};

export default function SyprinProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} syprin-pd-root min-h-screen bg-background text-foreground antialiased overflow-x-hidden relative w-full`}>
      <ShopHeader />
      {children}
      <ShopFooter />
    </div>
  );
}
