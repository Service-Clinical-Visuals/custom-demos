import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical device manufactures - Healthcare devices | Pulmodyne",
  description: "Stern Med is a leading medical device manufacturer specializing in innovative healthcare solutions. We design and produce cutting-edge medical devices that improve patient care and outcomes. Our commitment to quality and innovation drives us to create products that meet the evolving needs of healthcare professionals and patients worldwide.",
  icons: {
    icon: "/stern-med/stern-favicon.webp",
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
        className={`${jakarta.variable} antialiased`}
      >
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
