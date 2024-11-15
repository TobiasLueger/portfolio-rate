'use client'

import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 px-4 py-4 bg-gray-100 dark:bg-[#1a1a1a] shadow-md">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              PortfolioRate
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-[#252525]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-[#252525]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm text-white bg-gray-800 dark:bg-[#252525] transition-colors rounded-full"
            >
              Contact
            </Link>
            <ModeToggle />
          </div>

          {/* Mobile Burger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg shadow-lg">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Über Uns
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm text-white bg-gray-800 dark:bg-[#252525] transition-colors"
            >
              Kontakt
            </Link>
            <div className="px-4 py-2">
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}