import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"; 
import { VideoProvider } from "@/app/_context/VideoContext";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "CatheGenix | Investing in Science, Innovating For Patients",
  description: "CatheGenix | Investing in Science, Innovating For Patients",
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
      <body className={`${manrope.variable} antialiased`}>
        <VideoProvider>
        {children}
        </VideoProvider>
      </body>
    </html>
  );
}
