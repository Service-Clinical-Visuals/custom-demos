import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google"; 
import { VideoProvider } from "@/app/_context/VideoContext";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SergTech | Home",
  description: "SergTech | Intelligent Digital Solutions for Parkinson’s Care",
  icons: {
    icon: "/cathegenix/cathe-favicon.png",
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <VideoProvider>
        {children}
        </VideoProvider>
      </body>
    </html>
  );
}
