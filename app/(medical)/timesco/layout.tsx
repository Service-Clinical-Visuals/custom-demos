import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google"; 
import { VideoProvider } from "@/app/_context/VideoContext";


const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timesco | Home",
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
      <body className={`${lora.variable} antialiased`}>
        <VideoProvider>
        {children}
        </VideoProvider>
      </body>
    </html>
  );
}
