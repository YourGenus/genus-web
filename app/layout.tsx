import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genus • The next-generation consumer brand",
  description:
    "Genus is a next-generation consumer brand focused on creating products and experiences supported by a modern technology platform. Sustainable by design, building an identity‑driven system and an early product foundation that shapes who we are, enabling the brand to grow naturally while evolving toward a direct‑to‑consumer platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar /> {/* ← client component */}
        <div className="pt-24 md:pt-28 flex-1">{children}</div>
        <footer className="text-center py-6 text-gray-500 text-sm">
          Genus © 2026
        </footer>
      </body>
    </html>
  );
}