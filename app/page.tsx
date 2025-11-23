import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Inicio | Inmobiliaria Querétaro - Propiedades Exclusivas",
  description: "Bienvenido a la mejor inmobiliaria de Querétaro. Encuentra casas, departamentos y propiedades comerciales de lujo. Más de 500 propiedades y 15 años de experiencia.",
  openGraph: {
    title: "Inmobiliaria Querétaro - Propiedades Exclusivas",
    description: "Bienvenido a la mejor inmobiliaria de Querétaro. Encuentra tu propiedad ideal entre más de 500 opciones.",
    url: "https://inmobiliariaqro.com",
    images: [{ url: "/logo.jpg" }],
  },
};

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white antialiased overflow-hidden">
      {/* Elegant Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar currentPage="inicio" />

      {/* Hero Section - Elegant & Sophisticated */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=90"
            alt="Arquitectura Moderna Querétaro"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-neutral-950/70 to-black/90"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/30 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-sm text-amber-200 font-medium tracking-wide">Prestigio y Experiencia desde 2010</span>
            </div>

            {/* Main Heading - Elegant Typography */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-white">
                Propiedades Exclusivas
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                en Querétaro
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubre residencias de lujo, desarrollos exclusivos y las mejores oportunidades de inversión en la zona más prestigiosa de Querétaro.
            </p>

            {/* Elegant CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link href="/propiedades">
                <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-lg transition-all shadow-xl shadow-amber-500/30">
                  Ver Propiedades
                </button>
              </Link>
              <Link href="/contacto">
                <button className="px-10 py-4 rounded-lg backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 hover:border-amber-500/30 text-white font-semibold text-lg transition-all">
                  Contactar Asesor
                </button>
              </Link>
            </div>

            {/* Stats Cards - Elegant & Minimal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all">
                <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Propiedades</div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all">
                <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Años</div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all">
                <div className="text-4xl font-bold text-amber-400 mb-2">2.5K+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Clientes</div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all">
                <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfacción</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Elegant Cards */}
      <section className="relative py-28">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">
                Nuestros 
              </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Valores
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Excelencia, confianza y compromiso en cada transacción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            
            {/* Feature Card 1 */}
            <div className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seguridad Legal</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Asesoría jurídica especializada en cada transacción.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mejor Inversión</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Análisis de mercado y plusvalía garantizada.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excelencia</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Servicio de primera clase en cada detalle.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expertos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Equipo profesional con años de experiencia.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Properties Gallery - Elegant Design */}
      <section className="relative py-28">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">
                Propiedades 
              </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Destacadas
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Selección exclusiva de las mejores propiedades en Querétaro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Property Card 1 */}
            <div className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=90"
                  alt="Villa Moderna"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-lg backdrop-blur-md bg-black/50 border border-amber-500/30">
                  <span className="text-xs text-amber-300 font-semibold">DESTACADA</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Juriquilla, Querétaro</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Villa Moderna</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Residencia de lujo con acabados premium, amplios jardines y vista panorámica.
                </p>

                <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7H4V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7h-6V5z" />
                    </svg>
                    <span>350 m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>4 rec</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>3.5 baños</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Desde</div>
                    <div className="text-2xl font-bold text-amber-400">$8.5M</div>
                  </div>
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg shadow-amber-500/30">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=90"
                  alt="Loft Minimalista"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-lg backdrop-blur-md bg-black/50 border border-amber-500/30">
                  <span className="text-xs text-amber-300 font-semibold">NUEVO</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Centro Histórico, Qro</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Loft Minimalista</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Diseño contemporáneo en el corazón de la ciudad con todas las amenidades.
                </p>

                <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7H4V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7h-6V5z" />
                    </svg>
                    <span>150 m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>2 rec</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>2 baños</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Desde</div>
                    <div className="text-2xl font-bold text-amber-400">$3.2M</div>
                  </div>
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg shadow-amber-500/30">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=90"
                  alt="Oficinas Premium"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-lg backdrop-blur-md bg-black/50 border border-amber-500/30">
                  <span className="text-xs text-amber-300 font-semibold">CORPORATIVO</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Zona Empresarial, Qro</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Oficinas Premium</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Espacios corporativos de lujo con tecnología de vanguardia y ubicación estratégica.
                </p>

                <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7H4V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7h-6V5z" />
                    </svg>
                    <span>500 m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>10 oficinas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>Piso 12</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Desde</div>
                    <div className="text-2xl font-bold text-amber-400">$12M</div>
                  </div>
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg shadow-amber-500/30">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section - Elegant */}
      <section className="relative py-28 border-t border-amber-500/10">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">
                Servicios 
              </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Exclusivos
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experiencia integral en bienes raíces de alto nivel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Service Card 1 */}
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30 mx-auto">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Avalúos Certificados</h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Valuaciones profesionales con tecnología de análisis de mercado en tiempo real.
              </p>

              <button className="w-full py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/20 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-black hover:border-transparent text-white font-semibold transition-all">
                Solicitar Avalúo
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30 mx-auto">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Asesores Expertos</h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Equipo de especialistas certificados con más de 15 años de experiencia.
              </p>

              <button className="w-full py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/20 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-black hover:border-transparent text-white font-semibold transition-all">
                Conocer Equipo
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30 mx-auto">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Inversión Smart</h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Análisis predictivo y estrategias para maximizar tu inversión.
              </p>

              <button className="w-full py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/20 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-black hover:border-transparent text-white font-semibold transition-all">
                Más Información
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
