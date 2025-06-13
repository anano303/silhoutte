import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silhouette  - სილუეტი- შენი სახლის ელეგანტური შტრიხი",
  description:
    "თანამედროვე სტილის, ხელნაკეთი ორიგინალური საყვავილეები და ინტერიერის დეკორი",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
