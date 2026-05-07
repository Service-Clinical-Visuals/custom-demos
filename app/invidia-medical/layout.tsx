import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google"; 
import { VideoProvider } from "../_context/VideoContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Invidia Medical",
  description: "Invidia Medical - Advanced ENT and Hearing Care Solutions",
  icons: {
    icon: "/invidia/invidia-favicon.png",
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
