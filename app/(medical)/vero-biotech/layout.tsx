import type { Metadata } from "next";
import { Exo, Rubik } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = Exo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fontBody = Rubik({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VERO Biotech",
  description: "Transforming The Delivery of Inhaled Nitric Oxide",
  icons: {
    icon: "/vero-biotech/logo.png"
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontBody.variable} antialiased`}>
        <VideoProvider>
          <AosInit />
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
