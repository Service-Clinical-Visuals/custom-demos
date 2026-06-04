import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const aleo = Aleo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-aleo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entermed",
  description: "Entermed - Leading Global Provider",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aleo.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
