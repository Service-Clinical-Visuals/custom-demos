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
  title: "SharkEye Alignment",
  description: "Wheel Alignment Equipment Experts",
  icons: {
    icon: "/shark/shark-favicon.png",
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
        <VideoProvider website="absolute-alignment">
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
