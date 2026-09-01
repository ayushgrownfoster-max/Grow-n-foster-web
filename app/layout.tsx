import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Grow 'n' Foster | Elite Digital Marketing Agency",
  description:
    "Grow 'n' Foster delivers comprehensive digital marketing services to boost your brand visibility, drive qualified traffic, and increase conversions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} ${syne.variable} ${inter.variable} dark h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-sans selection:bg-primary/30 antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
