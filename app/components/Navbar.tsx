"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  currentPage?: "inicio" | "propiedades" | "servicios" | "contacto";
}

export default function Navbar({ currentPage = "inicio" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-amber-500/20">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base md:text-lg bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent tracking-wide">
                Mi Éxito Inmobiliario
              </span>
              <span className="text-[8px] md:text-[9px] text-gray-400 tracking-[0.25em] font-light">
                QUERÉTARO
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm transition-colors font-medium ${
                currentPage === "inicio"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/propiedades"
              className={`text-sm transition-colors font-medium ${
                currentPage === "propiedades"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Propiedades
            </Link>
            <Link
              href="/servicios"
              className={`text-sm transition-colors font-medium ${
                currentPage === "servicios"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className={`text-sm transition-colors font-medium ${
                currentPage === "contacto"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Contacto
            </Link>
          </div>

          <Link href="/contacto" className="hidden md:block">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg shadow-amber-500/30">
              Contactar
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-amber-400 transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-amber-400 transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-amber-400 transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base transition-colors font-medium py-2 ${
                currentPage === "inicio"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/propiedades"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base transition-colors font-medium py-2 ${
                currentPage === "propiedades"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Propiedades
            </Link>
            <Link
              href="/servicios"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base transition-colors font-medium py-2 ${
                currentPage === "servicios"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base transition-colors font-medium py-2 ${
                currentPage === "contacto"
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              Contacto
            </Link>
            <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg shadow-amber-500/30">
                Contactar
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
