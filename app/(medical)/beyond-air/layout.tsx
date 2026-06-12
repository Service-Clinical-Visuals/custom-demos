import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Beyond Air",
  description: "The Magic of Breathing ",
  icons: {
    icon: "/beyond-air/assets/favicon.ico",
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
        className={`${outfit.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
