'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Datos de propiedades de ejemplo
const propiedadesData = [
  {
    id: 1,
    titulo: "Villa Moderna",
    ubicacion: "Juriquilla, Querétaro",
    precio: 8500000,
    tipo: "casa",
    area: 350,
    recamaras: 4,
    banos: 3.5,
    imagen: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=90",
    destacada: true,
    descripcion: "Residencia de lujo con acabados premium, amplios jardines y vista panorámica."
  },
  {
    id: 2,
    titulo: "Loft Minimalista",
    ubicacion: "Centro Histórico, Qro",
    precio: 3200000,
    tipo: "departamento",
    area: 150,
    recamaras: 2,
    banos: 2,
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=90",
    destacada: false,
    descripcion: "Diseño contemporáneo en el corazón de la ciudad con todas las amenidades."
  },
  {
    id: 3,
    titulo: "Oficinas Premium",
    ubicacion: "Zona Empresarial, Qro",
    precio: 12000000,
    tipo: "comercial",
    area: 500,
    recamaras: 10,
    banos: 4,
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=90",
    destacada: false,
    descripcion: "Espacios corporativos de lujo con tecnología de vanguardia y ubicación estratégica."
  },
  {
    id: 4,
    titulo: "Casa Familiar",
    ubicacion: "El Refugio, Querétaro",
    precio: 5800000,
    tipo: "casa",
    area: 280,
    recamaras: 3,
    banos: 2.5,
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90",
    destacada: true,
    descripcion: "Perfecta para familias, con jardín amplio y excelente ubicación."
  },
  {
    id: 5,
    titulo: "Penthouse Exclusivo",
    ubicacion: "Antea, Querétaro",
    precio: 15500000,
    tipo: "departamento",
    area: 420,
    recamaras: 3,
    banos: 3.5,
    imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=90",
    destacada: true,
    descripcion: "Lujo en las alturas con terraza privada y acabados de primera clase."
  },
  {
    id: 6,
    titulo: "Local Comercial",
    ubicacion: "Plaza Centro Sur, Qro",
    precio: 4200000,
    tipo: "comercial",
    area: 180,
    recamaras: 0,
    banos: 2,
    imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=90",
    destacada: false,
    descripcion: "Excelente ubicación en zona comercial de alto tráfico."
  },
  {
    id: 7,
    titulo: "Residencia Colonial",
    ubicacion: "Centro Histórico, Qro",
    precio: 9800000,
    tipo: "casa",
    area: 450,
    recamaras: 5,
    banos: 4,
    imagen: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=90",
    destacada: false,
    descripcion: "Arquitectura colonial restaurada con amenidades modernas."
  },
  {
    id: 8,
    titulo: "Departamento Nuevo",
    ubicacion: "Zibatá, Querétaro",
    precio: 2850000,
    tipo: "departamento",
    area: 95,
    recamaras: 2,
    banos: 2,
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=90",
    destacada: false,
    descripcion: "Moderno departamento en desarrollo con alberca y gym."
  },
  {
    id: 9,
    titulo: "Terreno Premium",
    ubicacion: "Juriquilla, Querétaro",
    precio: 6500000,
    tipo: "terreno",
    area: 800,
    recamaras: 0,
    banos: 0,
    imagen: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=90",
    destacada: true,
    descripcion: "Terreno plano con todos los servicios en zona exclusiva."
  }
];

export default function PropiedadesPage() {
  const [filtroTipo, setFiltroTipo] = useState<string>("todos");
  const [filtroPrecio, setFiltroPrecio] = useState<string>("todos");
  const [busqueda, setBusqueda] = useState<string>("");

  // Filtrar propiedades
  const propiedadesFiltradas = propiedadesData.filter(prop => {
    // Filtro de tipo
    if (filtroTipo !== "todos" && prop.tipo !== filtroTipo) return false;
    
    // Filtro de precio
    if (filtroPrecio !== "todos") {
      if (filtroPrecio === "0-3m" && prop.precio > 3000000) return false;
      if (filtroPrecio === "3m-6m" && (prop.precio < 3000000 || prop.precio > 6000000)) return false;
      if (filtroPrecio === "6m-10m" && (prop.precio < 6000000 || prop.precio > 10000000)) return false;
      if (filtroPrecio === "10m+" && prop.precio < 10000000) return false;
    }
    
    // Filtro de búsqueda
    if (busqueda && !prop.titulo.toLowerCase().includes(busqueda.toLowerCase()) && 
        !prop.ubicacion.toLowerCase().includes(busqueda.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white antialiased min-h-screen">
      {/* Background elegante */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar currentPage="propiedades" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Encuentra tu </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Propiedad Ideal
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explora nuestra selección exclusiva de propiedades en Querétaro
            </p>
          </div>

          {/* Filtros */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {/* Búsqueda */}
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-3 font-medium">Buscar</label>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Ubicación o nombre..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Tipo de Propiedad */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3 font-medium">Tipo</label>
                  <select
                    value={filtroTipo}
                    onChange={(e) => setFiltroTipo(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-amber-500/50 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="todos">Todos</option>
                    <option value="casa">Casas</option>
                    <option value="departamento">Departamentos</option>
                    <option value="comercial">Comercial</option>
                    <option value="terreno">Terrenos</option>
                  </select>
                </div>

                {/* Rango de Precio */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3 font-medium">Precio</label>
                  <select
                    value={filtroPrecio}
                    onChange={(e) => setFiltroPrecio(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-amber-500/50 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="todos">Todos</option>
                    <option value="0-3m">Hasta $3M</option>
                    <option value="3m-6m">$3M - $6M</option>
                    <option value="6m-10m">$6M - $10M</option>
                    <option value="10m+">Más de $10M</option>
                  </select>
                </div>

              </div>

              {/* Contador de resultados */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  <span className="text-amber-400 font-semibold">{propiedadesFiltradas.length}</span> {propiedadesFiltradas.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
                </p>
              </div>
            </div>
          </div>

          {/* Grid de Propiedades */}
          <div className="max-w-7xl mx-auto">
            {propiedadesFiltradas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propiedadesFiltradas.map((propiedad) => (
                  <div key={propiedad.id} className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={propiedad.imagen}
                        alt={propiedad.titulo}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {propiedad.destacada && (
                        <div className="absolute top-4 left-4 px-4 py-2 rounded-lg backdrop-blur-md bg-black/50 border border-amber-500/30">
                          <span className="text-xs text-amber-300 font-semibold">DESTACADA</span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 px-4 py-2 rounded-lg backdrop-blur-md bg-black/50 border border-white/20">
                        <span className="text-xs text-white font-semibold uppercase">{propiedad.tipo}</span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{propiedad.ubicacion}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">{propiedad.titulo}</h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {propiedad.descripcion}
                      </p>

                      <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7H4V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7h-6V5z" />
                          </svg>
                          <span>{propiedad.area} m²</span>
                        </div>
                        {propiedad.recamaras > 0 && (
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>{propiedad.recamaras} rec</span>
                          </div>
                        )}
                        {propiedad.banos > 0 && (
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>{propiedad.banos} baños</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Desde</div>
                          <div className="text-2xl font-bold text-amber-400">
                            ${(propiedad.precio / 1000000).toFixed(1)}M
                          </div>
                        </div>
                        <Link href={`/propiedades/${propiedad.id}`}>
                          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg shadow-amber-500/30">
                            Ver Detalles
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">No se encontraron propiedades</h3>
                <p className="text-gray-400">Intenta ajustar los filtros de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
