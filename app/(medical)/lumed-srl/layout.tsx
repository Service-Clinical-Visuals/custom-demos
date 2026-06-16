import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AOSInit from "./_components/AOSInit";
import { VideoProvider } from "../../_context/VideoContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/tcp-logo.png",
  },
  title: "LUMED | Solutions in Cardiopulmonary Diagnostics",
  description: "Innovation, quality, and safety in cardiopulmonary diagnostics.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable} font-sans`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased text-[#333333]">
        <VideoProvider>
          <AOSInit />
          <div className="overflow-x-hidden relative w-full">
            {children}
          </div>
        </VideoProvider>
      </body>
    </html>
  );
}
