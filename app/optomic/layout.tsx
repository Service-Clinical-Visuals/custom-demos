import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optomic - Precision Medical Solutions",
  description: "We design high-quality medical equipment focused on innovation, precision, and global standards, delivering reliable solutions for healthcare professionals worldwide.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
