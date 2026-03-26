import type { Metadata } from "next";
import AosInit from "./_components/AosInit";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/gynex/images/favicon.png",
  },
  title: "Gynex - Clinical Visuals",
  description: "Providers of high-quality OB/GYN instruments and equipment to customers worldwide.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        <AosInit />
        {children}
      </body>
    </html>
  );
}
