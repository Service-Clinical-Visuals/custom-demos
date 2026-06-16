import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontPrimary = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const fontSecondary = Outfit({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "XNov | Transform Your Practice",
  description: "For healthcare professionals, we provide deep, real-time analysis of heart rhythm data that seamlessly connects our technology to existing workflows.",
};

export default function XNovLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontPrimary.variable} ${fontSecondary.variable} font-sans`}>
      <AosInit />
      <div id="x-nov-root">
        <VideoProvider >
          {children}
        </VideoProvider>
      </div>
    </div>
  );
}
