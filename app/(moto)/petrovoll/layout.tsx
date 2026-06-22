import type { Metadata } from "next";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AosInit from "./_components/AosInit";
import { Montserrat, Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Petrovöll | German Lubricants & Chemicals",
  description: "Advanced high performance lubricants for automotive and industrial markets.",
};

export default function PetrovollLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`petrovoll-root ${oswald.variable} ${montserrat.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
      <AosInit />
      <VideoProvider website="petrovoll">
        {children}
      </VideoProvider>
    </div>
  );
}
