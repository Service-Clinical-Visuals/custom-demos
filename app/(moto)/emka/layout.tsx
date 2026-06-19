import type { Metadata } from "next";
import { Exo_2, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
  adjustFontFallback: false,
});

const fontBody = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "emka",
  description: "Endorsed by leading automotive manufacturers worldwide. Explore our high-performance engine oils and lubricants.",
  icons: {
    icon: "/moto/veedol-moto/logo 1.png",
  },
};

export default function VeedolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider website="emka">
        <div className="emka-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
