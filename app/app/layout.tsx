import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genus • AI for modern product teams",
  description: "Genus is an early-stage AI workspace for prompt engineering, collaboration, and deploy-ready workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  GENUS
                </Link>
              </div>
              <nav className="flex space-x-8">
                <div className="relative group">
                  <button className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center">
                    Genres
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link
                      href="/introducing-citizen"
                      className="block px-4 py-2 text-xs font-medium text-gray-700"
                    >
                      CITIZEN
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer style={{ textAlign: "center", padding: "1rem 0", color: "#5d647b", fontSize: "0.9rem" }}>
          Genus © 2026
        </footer>
      </body>
    </html>
  );
}
