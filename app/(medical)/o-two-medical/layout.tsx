import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import AOSProvider from "../../_components/AOSProvider";
import { VideoProvider } from "../../_context/VideoContext";
import Footer from "./_components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "O-Two Medical Technologies | Controlled Ventilation Solutions",
  description: "Pioneering advanced emergency respiratory care and inhalation analgesia solutions since 1971. Trusted by healthcare professionals in over 60 countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden bg-white text-gray-950">
        <VideoProvider >
          <AOSProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </AOSProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
