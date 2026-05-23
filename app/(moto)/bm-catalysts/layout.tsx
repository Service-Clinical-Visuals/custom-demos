import type { Metadata } from "next";
import { Oxanium, Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import AOSProvider from "../../_components/AOSProvider";
import { VideoProvider } from "../../_context/VideoContext";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "BM Catalysts | Europe's Leading Manufacturer of Aftermarket Hot End Emissions Products",
  description: "Europe's leading manufacturer of aftermarket hot end emissions products, including catalytic converters, DPFs, and front pipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${oxanium.variable} ${exo2.variable}`}>
      <body className={`${exo2.className} overflow-x-hidden bg-[#f8f9fd]`}>
        <Header />
        <VideoProvider website="bm-catalysts">
          <AOSProvider>{children}</AOSProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
