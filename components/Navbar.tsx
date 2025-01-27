"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Team", path: "#team" },
  { name: "Services", path: "#services" },
  { name: "Gallery", path: "#gallery" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold text-gray-900">
            Saravana Rehab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map(({ name, path }, i) => (
                <li key={i}>
                  <Link
                    href={path}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="py-2">
            {navLinks.map(({ name, path }, i) => (
              <li key={i}>
                <Link
                  href={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
