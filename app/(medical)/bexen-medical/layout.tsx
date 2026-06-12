import type { Metadata } from "next";
import { Exo, Rubik } from "next/font/google";
import "./globals.css";

const fontHeading = Exo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontBody = Rubik({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bexen Medical",
  description: "Comprehensive solutions for the health sector",
};

import { AosInit } from "./_components/AosInit";
import { VideoProvider } from "../../_context/VideoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontBody.variable} antialiased`}>
        <VideoProvider >
          <AosInit />
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
