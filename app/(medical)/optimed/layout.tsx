import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google"; 
import { VideoProvider } from "@/app/_context/VideoContext";


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Optimed Medizinische Instrumente GmbH. ",
  description: "CatheGenix | Investing in Science, Innovating For Patients",
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
      <body className={`${sora.variable} antialiased`}>
        <VideoProvider>
        {children}
        </VideoProvider>
      </body>
    </html>
  );
}
