"use client";

import { useState } from "react";
import Link from "next/link";

const genres = [
  { name: "Citizen", href: "/introducing-citizen" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold tracking-tight">
              GENUS
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex space-x-10 text-sm font-medium">
              <div className="relative group">
                <button className="hover:text-gray-900">
                  Genres
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {genres.map((genre) => (
                    <Link
                      key={genre.name}
                      href={genre.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {genre.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setMenuOpen(true)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[999] flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <button onClick={() => setMenuOpen(false)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-2xl font-semibold">
            {genres.map((genre) => (
              <Link
                key={genre.name}
                href={genre.href}
                onClick={() => setMenuOpen(false)}
              >
                {genre.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}