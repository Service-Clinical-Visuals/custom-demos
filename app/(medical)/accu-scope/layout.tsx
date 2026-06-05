import type { Metadata } from "next";
import { Aleo, Rajdhani, Rubik } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontPrimary = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const fontSecondary = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "AccuScope | Transform Your Practice",
  description: "We are a leading manufacturer of microscopes and related accessories for life science, clinical, research, education and industrial applications.",
};

export default function AccuScopeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
      <AosInit />
      <VideoProvider website="accu-scope">
        {children}
      </VideoProvider>
    </div>
  );
}
