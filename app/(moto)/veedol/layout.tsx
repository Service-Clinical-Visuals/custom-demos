import type { Metadata } from "next";
import { DM_Sans, Big_Shoulders } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bigshoulder",
  display: "swap",
  adjustFontFallback: false,
});


const fontBody = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veedol | The Professional's Choice for Over a Century",
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
      <VideoProvider website="veedol-moto">
        <div className="veedol-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
