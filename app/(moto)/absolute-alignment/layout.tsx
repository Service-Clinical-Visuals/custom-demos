import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const fontHeading = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Absolute Alignment",
  description: "Wheel Alignment Equipment Experts",
  icons: {
    icon: "/absolute-alignment/logo.png",
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
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
