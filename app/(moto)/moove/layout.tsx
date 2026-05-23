import type { Metadata } from "next";
import { Lato, Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";

const fontBody = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fontHeading = Bai_Jamjuree({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Moove",
  description: "A Global Lubricants Solutions Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontBody.variable} ${fontHeading.variable} moove-theme antialiased bg-white`}>
      <VideoProvider website="moove">
        {children}
      </VideoProvider>
    </div>
  );
}
