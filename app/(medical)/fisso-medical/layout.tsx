import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import LenisProvider from "./_components/LenisProvider";
import AOSProvider from "./_components/AOSProvider";
import { VideoProvider } from "../../_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fisso Medical - Simply the best fixation",
  description:
    "Swiss Made Articulated Arms and Holders. Baitella AG, the worldwide leading manufacturer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable}`}>
      <body
        className={`${outfit.className} bg-[#FFFFFF] text-[#333333] antialiased overflow-x-hidden`}
      >
        <VideoProvider>
          <LenisProvider>
            <AOSProvider>{children}</AOSProvider>
          </LenisProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
