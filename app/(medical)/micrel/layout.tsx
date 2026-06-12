import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./components/AosInit";

const fontPrimary = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Micrel Medical Devices | Freedom without Clinical Compromise",
  description: "Micrel Medical Devices provides ambulatory infusion pumps, administration sets, accessories, and patient infusion management solutions.",
  icons: {
    icon: "/micrel/header_logo%201.png",
  },
};

export default function MicrelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontPrimary.variable} scroll-smooth`}>
      <body className="bg-white text-slate-800 antialiased font-sans flex flex-col min-h-screen">
        <AosInit />
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
