import type { Metadata } from "next";
import { Righteous, Poppins, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

const fontHeading = Wix_Madefor_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  
});

const fontBody = Wix_Madefor_Display({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
