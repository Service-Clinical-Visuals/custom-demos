import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../_context/VideoContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lutech Medical",
  description: "Colposcopes | Lutech Medical",
  icons: {
    icon: "/lutech-medical/assets/lutech-favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
