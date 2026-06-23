import type { Metadata } from "next";
import { Exo_2, Teko } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
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
  title: "German Gold | Power to Perform",
  description: "Endorsed by leading automotive manufacturers worldwide. Explore our high-performance engine oils and lubricants.",
  icons: {
    icon: "/moto/german-gold/logo.png",
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
      <VideoProvider website="german-gold">
        <div className="german-gold-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
