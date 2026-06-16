import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import SmoothAos from "./_components/SmoothAos";
import { Poppins } from "next/font/google";
import { VideoProvider } from "../../_context/VideoContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Strena Medical",
  description: "Reliable Healthcare, Made Accessible",
  icons: {
    icon: "/strena-medical/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-[#333333]`}>
        <VideoProvider>
          {/* <div id="strena-medical-root"> */}
          <Navbar />
          <SmoothAos />
          {children}
          {/* </div> */}
        </VideoProvider>
      </body>
    </html>
  );
}
