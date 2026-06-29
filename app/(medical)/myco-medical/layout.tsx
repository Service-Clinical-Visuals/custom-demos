import type { Metadata } from "next";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AosInit from "./_components/AosInit";
import { DM_Sans } from "next/font/google";

const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Petrovöll | German Lubricants & Chemicals",
  description: "Advanced high performance lubricants for automotive and industrial markets.",
};

export default function PetrovollLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider >
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
