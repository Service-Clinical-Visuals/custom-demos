import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google"; 
import { VideoProvider } from "@/app/_context/VideoContext";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Deltasleep.com",
  description: "Deltasleep",
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
      <body className={`${geist.variable} antialiased`}>
        <VideoProvider>
        {children}
        </VideoProvider>
      </body>
    </html>
  );
}
