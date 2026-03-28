"use client";

import { useState } from "react";
import Link from "next/link";

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

            <nav className="hidden md:flex space-x-10 text-sm font-medium">
              <Link href="/introducing-citizen" className="hover:text-gray-900">
                Citizen
              </Link>
              <button className="hover:text-gray-900">Genres</button>
            </nav>

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

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold">GENUS</span>
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

          <nav className="flex flex-col space-y-6 text-lg font-medium">
            <Link href="/introducing-citizen" onClick={() => setMenuOpen(false)}>
              Citizen
            </Link>
            <button className="text-left">Genres</button>
          </nav>
        </div>
      )}
    </>
  );
}