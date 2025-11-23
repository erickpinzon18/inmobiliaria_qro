import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Servicios Inmobiliarios | Compra, Venta y Renta en Querétaro",
  description: "Servicios inmobiliarios profesionales en Querétaro: compra, venta y renta de propiedades. Asesoría jurídica, avalúos certificados y análisis de inversión.",
  keywords: [
    "servicios inmobiliarios querétaro",
    "compra venta casas querétaro",
    "renta propiedades querétaro",
    "avalúos querétaro",
    "asesoría inmobiliaria querétaro",
    "inversión inmobiliaria",
  ],
  openGraph: {
    title: "Servicios Inmobiliarios en Querétaro",
    description: "Servicios profesionales de compra, venta y renta de propiedades en Querétaro con más de 15 años de experiencia.",
    url: "https://inmobiliaria-qro.vercel.app/servicios",
    images: [{ url: "/logo.jpg" }],
  },
};

export default function ServiciosPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white antialiased min-h-screen">
      {/* Background elegante */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar currentPage="servicios" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Servicios </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Exclusivos
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experiencia integral en bienes raíces de alto nivel
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            
            {/* Servicio 1 */}
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

            {/* Servicio 2 */}
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

            {/* Servicio 3 */}
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

      {/* Servicios Detallados */}
      <section className="relative py-20 border-t border-amber-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Compra */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=90"
                  alt="Compra de Propiedades"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/30 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="text-sm text-amber-200 font-medium tracking-wide">COMPRA</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Encuentra tu Hogar Perfecto
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Te acompañamos en todo el proceso de compra, desde la búsqueda inicial hasta la firma del contrato. Nuestro equipo te ayudará a encontrar la propiedad que se ajuste a tus necesidades y presupuesto.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Búsqueda personalizada según tus criterios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Visitas guiadas a propiedades seleccionadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Negociación experta del mejor precio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Asesoría legal y financiera completa</span>
                  </li>
                </ul>
                
                <Link href="/contacto">
                  <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-xl shadow-amber-500/30">
                    Comenzar Búsqueda
                  </button>
                </Link>
              </div>
            </div>

            {/* Venta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/30 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="text-sm text-amber-200 font-medium tracking-wide">VENTA</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Vende al Mejor Precio
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Maximiza el valor de tu propiedad con nuestro servicio integral de venta. Utilizamos estrategias de marketing avanzadas y nuestra amplia red de contactos para vender tu propiedad rápidamente.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Avalúo profesional de tu propiedad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Fotografía y videos profesionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Marketing digital en múltiples plataformas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Gestión completa del proceso de venta</span>
                  </li>
                </ul>
                
                <Link href="/contacto">
                  <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-xl shadow-amber-500/30">
                    Vender Propiedad
                  </button>
                </Link>
              </div>
              
              <div className="relative h-96 rounded-2xl overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=90"
                  alt="Venta de Propiedades"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>

            {/* Renta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=90"
                  alt="Renta de Propiedades"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/30 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="text-sm text-amber-200 font-medium tracking-wide">RENTA</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Soluciones de Arrendamiento
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Ya sea que busques rentar o arrendar tu propiedad, ofrecemos servicios completos de gestión de rentas con contratos seguros y administración profesional.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Búsqueda de inquilinos confiables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Contratos legalmente vinculantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Administración y cobro de rentas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Mantenimiento y reparaciones</span>
                  </li>
                </ul>
                
                <Link href="/contacto">
                  <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-xl shadow-amber-500/30">
                    Consultar Rentas
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 border-t border-amber-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos inmobiliarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-lg transition-all shadow-xl shadow-amber-500/30">
                  Contactar Ahora
                </button>
              </Link>
              <Link href="/propiedades">
                <button className="px-10 py-4 rounded-lg backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 hover:border-amber-500/30 text-white font-semibold text-lg transition-all">
                  Ver Propiedades
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
