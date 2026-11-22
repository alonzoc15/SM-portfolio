import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alonzo Camille | Automotive Photography Portfolio",
  description: "Showcase of automotive photography by Alonzo Camille, featuring high-quality images of cars and automotive events.",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
