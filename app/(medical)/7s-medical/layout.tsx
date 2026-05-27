import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/medical/7s-medical/favicon.ico",
  },
  title: "7S Medical - Swiss Experts in Orthopedics",
  description: "Swiss Experts in Orthopedics. 7S Medical International AG distributes surgical instruments and implants and organizes versatile hybrid educational events.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        <AosInit />
        <VideoProvider website="7s-medical">
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
