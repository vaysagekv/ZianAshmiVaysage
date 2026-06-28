import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Zian Ashmi Vaysage — Our Family",
  description: "A little corner of the internet for our family — Zian, Ashmi & Vaysage.",
  metadataBase: new URL("https://zianashmivaysage.in"),
  openGraph: {
    siteName: "Zian Ashmi Vaysage",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
