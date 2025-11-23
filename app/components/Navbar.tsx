import Link from "next/link";

interface NavbarProps {
  currentPage?: "inicio" | "propiedades" | "servicios" | "contacto";
}

export default function Navbar({ currentPage = "inicio" }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-amber-500/20">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="w-12 h-12" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent tracking-wide">
                Mi Éxito Inmobiliario
              </span>
              <span className="text-[9px] text-gray-400 tracking-[0.25em] font-light">
                QUERÉTARO
              </span>
            </div>
          </Link>

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

          <Link href="/contacto">
            <button className="hidden md:block px-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg shadow-amber-500/30">
              Contactar
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
