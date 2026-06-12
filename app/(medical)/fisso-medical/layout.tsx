

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "./_components/LenisProvider";
import AOSProvider from "./_components/AOSProvider";
import { VideoProvider } from "../../_context/VideoContext";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],

});

export const metadata: Metadata = {
  title: "Fisso Medical - Simply the best fixation",
  description:
    "Swiss Made Articulated Arms and Holders. Baitella AG, the worldwide leading manufacturer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialias`}
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
