import type { Metadata } from "next";
import { Karantina, Montserrat } from "next/font/google";
import "./globals.css";

const fontHeading = Karantina({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
  
});

const fontBody = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Comma | The Brand Behind Every Journey",
  description: "OEM-approved engine oils, lubricants and chemicals for passenger and commercial vehicles.",
  icons: {
    icon: "/comma/comma_logo.png",
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
        <VideoProvider website="comma">
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
