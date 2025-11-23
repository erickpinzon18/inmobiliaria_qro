"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Datos de ejemplo - después vendrán de Firebase
const propiedadData = {
  id: 1,
  titulo: "Villa Moderna",
  ubicacion: "Juriquilla, Querétaro",
  precio: 8500000,
  tipo: "casa",
  area: 350,
  areaTerreno: 500,
  recamaras: 4,
  banos: 3.5,
  estacionamientos: 3,
  antiguedad: "Estrenar",
  imagenPrincipal: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
  galeria: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=90",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=90",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=90",
  ],
  videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ", // URL de ejemplo
  videoDron: "https://www.youtube.com/embed/XuZ_LYVToUY?si=lZWFllP4UNNx0y1N", // URL de ejemplo
  descripcion: "Espectacular residencia de lujo ubicada en una de las zonas más exclusivas de Juriquilla. Esta propiedad cuenta con acabados de primera calidad, amplios espacios y una distribución inteligente que maximiza la funcionalidad y el confort.",
  caracteristicas: [
    "Cocina integral de lujo con electrodomésticos de alta gama",
    "Amplios jardines con sistema de riego automático",
    "Sistema de seguridad con cámaras y alarma",
    "Aire acondicionado y calefacción en todas las habitaciones",
    "Paneles solares para eficiencia energética",
    "Acabados en mármol y madera fina",
    "Vista panorámica a las montañas",
    "Closets de lujo en todas las recámaras",
    "Cuarto de servicio con baño completo",
    "Terraza techada con asador",
  ],
  amenidades: [
    "Alberca",
    "Gimnasio",
    "Área de juegos infantiles",
    "Salón de eventos",
    "Cancha de tenis",
    "Vigilancia 24/7",
    "Casa club",
    "Áreas verdes",
  ],
  cercania: [
    { lugar: "Centro comercial", distancia: "5 min" },
    { lugar: "Escuelas privadas", distancia: "8 min" },
    { lugar: "Hospitales", distancia: "10 min" },
    { lugar: "Zona industrial", distancia: "15 min" },
    { lugar: "Centro histórico", distancia: "20 min" },
  ],
  agente: {
    nombre: "María González",
    telefono: "+52 442 123 4567",
    email: "maria@inmobiliariaqro.com",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=90",
  },
};

export default function DetallePropiedad() {
  const [imagenActiva, setImagenActiva] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);

  const [formContacto, setFormContacto] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "Me interesa esta propiedad",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formContacto);
    alert("¡Gracias por tu interés! Te contactaremos pronto.");
  };

  return (
    <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white antialiased min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar currentPage="propiedades" />

      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/propiedades" className="hover:text-amber-400 transition-colors">
              Propiedades
            </Link>
            <span>/</span>
            <span className="text-amber-400">{propiedadData.titulo}</span>
          </div>

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-4 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-semibold uppercase">
                  {propiedadData.tipo}
                </span>
                <span className="px-4 py-1 rounded-full bg-white/5 border border-white/20 text-gray-300 text-sm">
                  {propiedadData.antiguedad}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {propiedadData.titulo}
              </h1>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-lg">{propiedadData.ubicacion}</span>
              </div>
            </div>
            <div className="text-left lg:text-right">
              <div className="text-sm text-gray-400 mb-2">Precio</div>
              <div className="text-5xl font-bold text-amber-400">
                ${(propiedadData.precio / 1000000).toFixed(2)}M
              </div>
              <div className="text-sm text-gray-500 mt-1">
                ${(propiedadData.precio / propiedadData.area).toLocaleString()} / m²
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna Principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Galería Principal */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden">
                <div className="relative h-[500px] group cursor-pointer" onClick={() => setModalAbierto(true)}>
                  <Image
                    src={propiedadData.galeria[imagenActiva]}
                    alt={propiedadData.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Miniaturas */}
                <div className="grid grid-cols-6 gap-2 p-4 bg-black/20">
                  {propiedadData.galeria.map((img, index) => (
                    <div
                      key={index}
                      className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                        imagenActiva === index ? "border-amber-400" : "border-transparent hover:border-amber-400/50"
                      }`}
                      onClick={() => setImagenActiva(index)}
                    >
                      <Image src={img} alt={`Vista ${index + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Descripción */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  Descripción
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">{propiedadData.descripcion}</p>
              </div>

              {/* Características */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Características
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {propiedadData.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Videos */}
              <div className="space-y-6">
                {/* Video Tour Instagram - Vertical */}
                <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video Tour
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Recorrido virtual por la propiedad</p>
                  </div>
                  <div className="flex justify-center p-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
                    <div className="w-full max-w-md">
                      <blockquote 
                        className="instagram-media" 
                        data-instgrm-captioned 
                        data-instgrm-permalink="https://www.instagram.com/reel/DRPWmWjkTiv/?utm_source=ig_embed&utm_campaign=loading" 
                        data-instgrm-version="14" 
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.95)', 
                          border: 0, 
                          borderRadius: '12px', 
                          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                          margin: '0 auto', 
                          maxWidth: '540px', 
                          minWidth: '326px', 
                          padding: 0, 
                          width: '100%'
                        }}
                      >
                        <div style={{ padding: '16px' }}>
                          <a 
                            href="https://www.instagram.com/reel/DRPWmWjkTiv/?utm_source=ig_embed&utm_campaign=loading" 
                            style={{ 
                              background: '#FFFFFF', 
                              lineHeight: 0, 
                              padding: '0 0', 
                              textAlign: 'center', 
                              textDecoration: 'none', 
                              width: '100%' 
                            }} 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                              </div>
                            </div>
                            <div style={{ padding: '19% 0' }}></div>
                            <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                              <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                  <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                    <g>
                                      <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div style={{ paddingTop: '8px' }}>
                              <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>Ver esta publicación en Instagram</div>
                            </div>
                          </a>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Video Dron - Horizontal */}
                <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Vista Aérea con Dron
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Video panorámico del área</p>
                  </div>
                  <div className="relative aspect-video bg-gradient-to-br from-neutral-900 to-neutral-950">
                    <iframe
                      src={propiedadData.videoDron}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Amenidades */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  Amenidades
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {propiedadData.amenidades.map((amenidad, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                      <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{amenidad}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cercanías */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  Cercanías
                </h2>
                <div className="space-y-3">
                  {propiedadData.cercania.map((lugar, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-gray-300">{lugar.lugar}</span>
                      <span className="text-amber-400 font-semibold">{lugar.distancia}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    Ubicación
                  </h2>
                </div>
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29901.23456789!2d-100.3898880!3d20.5887930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b8e3c3c3c3d%3A0x1234567890abcdef!2sJuriquilla%2C%20Quer%C3%A9taro!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Datos Principales */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-6 top-24">
                <h3 className="text-xl font-bold mb-6">Datos Principales</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7H4V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7h-6V5z" />
                      </svg>
                      <span className="text-gray-300">Construcción</span>
                    </div>
                    <span className="font-semibold text-white">{propiedadData.area} m²</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                      <span className="text-gray-300">Terreno</span>
                    </div>
                    <span className="font-semibold text-white">{propiedadData.areaTerreno} m²</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-gray-300">Recámaras</span>
                    </div>
                    <span className="font-semibold text-white">{propiedadData.recamaras}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-gray-300">Baños</span>
                    </div>
                    <span className="font-semibold text-white">{propiedadData.banos}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <span className="text-gray-300">Estacionamientos</span>
                    </div>
                    <span className="font-semibold text-white">{propiedadData.estacionamientos}</span>
                  </div>
                </div>
              </div>

              {/* Agente */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6">Agente de Ventas</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400">
                    <Image src={propiedadData.agente.foto} alt={propiedadData.agente.nombre} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{propiedadData.agente.nombre}</div>
                    <div className="text-sm text-gray-400">Asesora Inmobiliaria</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${propiedadData.agente.telefono}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-300">{propiedadData.agente.telefono}</span>
                  </a>

                  <a
                    href={`mailto:${propiedadData.agente.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-300">{propiedadData.agente.email}</span>
                  </a>
                </div>

                <a
                  href={`https://wa.me/${propiedadData.agente.telefono.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Formulario de Contacto */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6">Solicitar Información</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      value={formContacto.nombre}
                      onChange={(e) => setFormContacto({ ...formContacto, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formContacto.email}
                      onChange={(e) => setFormContacto({ ...formContacto, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      value={formContacto.telefono}
                      onChange={(e) => setFormContacto({ ...formContacto, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Mensaje"
                      value={formContacto.mensaje}
                      onChange={(e) => setFormContacto({ ...formContacto, mensaje: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold transition-all shadow-lg"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              {/* Compartir */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Compartir</h3>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex-1 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </button>
                  <button className="flex-1 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal de Galería */}
      {modalAbierto && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6" onClick={() => setModalAbierto(false)}>
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            onClick={() => setModalAbierto(false)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              src={propiedadData.galeria[imagenActiva]}
              alt="Imagen ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
