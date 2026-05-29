import type { Metadata } from "next";
import { Righteous, Poppins } from "next/font/google";
import "./globals.css";

const fontHeading = Righteous({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  
});

const fontBody = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Liquid tools | JLM Lubricants",
  description: "Fuel additives and lubricants for automotive aftermarket.",
  icons: {
    icon: "/jlm/jlm-logo.webp",
  },
};

import { VideoProvider } from "../../_context/VideoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontBody.variable} antialiased`}>
        <VideoProvider website="jlm-lubricants">
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
