import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Defy Gravity | High-Performance Muesli",
  description: "Premium, high-performance healthy breakfast brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} antialiased h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-black text-white selection:bg-white/20">
        {children}
      </body>
    </html>
  );
}
