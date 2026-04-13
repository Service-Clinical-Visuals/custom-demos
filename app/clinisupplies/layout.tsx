import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Clinisupplies",
  description: "Clinisupplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
