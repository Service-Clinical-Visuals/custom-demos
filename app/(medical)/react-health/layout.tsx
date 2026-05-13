import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import AosProvider from "./_components/AosProvider";
import { VideoProvider } from "../../_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "React Health",
  description: "React Health delivers innovative and accessible sleep and respiratory care solutions designed to help people breathe easier, sleep better, and live healthier.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`} suppressHydrationWarning>
      <body className="bg-white font-sans antialiased">
        <AosProvider>
          <VideoProvider website="react-health">
            <div className="relative w-full flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </VideoProvider>
        </AosProvider>
      </body>
    </html>
  );
}
