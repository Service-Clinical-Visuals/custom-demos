import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DM = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Inspiration Healthcare",
  description: "Inspiration Healthcare - A global provider of medical technology",
  icons: {
    icon: "/inspiration-healthcare/assets/inspiration-favicon.svg",
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
        className={`${DM.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
