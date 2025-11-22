import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 antialiased">
      {/* Navbar */}
      <nav className="bg-[#1a4d7a] text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="border-2 border-white p-2 rounded">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wider">INMOBILIARIA</span>
              <span className="text-[10px] text-gray-200 tracking-widest">QUERÉTARO</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 text-sm font-light uppercase tracking-wide">
            <a href="#inicio" className="hover:text-orange-400 text-orange-400 transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-orange-400 transition-colors">Nosotros</a>
            <a href="#propiedades" className="hover:text-orange-400 transition-colors">Propiedades</a>
            <a href="#servicios" className="hover:text-orange-400 transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-orange-400 transition-colors">Contacto</a>
          </div>

          {/* Search Box */}
          <div className="hidden md:flex">
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="px-4 py-2 text-gray-800 text-sm rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 px-6 py-2 text-sm font-bold rounded-r-md hover:bg-orange-600 transition-colors">
              BUSCAR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Edificio Moderno"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Diseñamos <br /> Tu Futuro
            </h1>
            <p className="text-gray-100 mb-8 text-lg md:text-xl font-light leading-relaxed">
              Encuentra la propiedad perfecta en Querétaro. Ofrecemos asesoría profesional 
              y un portafolio exclusivo de inmuebles residenciales y comerciales de la más alta calidad.
            </p>
            <button className="bg-orange-500 text-white px-10 py-4 rounded shadow-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors">
              Ver Propiedades
            </button>
          </div>
        </div>
      </header>

      {/* Features Bar (Blue Strip) */}
      <section className="bg-[#2c5282] text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-5xl opacity-80">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Diseño Personalizado</h4>
              <p className="text-sm text-gray-200">Propiedades adaptadas a tus necesidades específicas y estilo de vida.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-5xl opacity-80">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Tours Virtuales</h4>
              <p className="text-sm text-gray-200">Recorre propiedades desde la comodidad de tu hogar con tecnología 3D.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-5xl opacity-80">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Ubicaciones Premium</h4>
              <p className="text-sm text-gray-200">Inmuebles en las mejores zonas de Querétaro con alta plusvalía.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-5xl opacity-80">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Financiamiento Flexible</h4>
              <p className="text-sm text-gray-200">Múltiples opciones de crédito y planes de pago personalizados.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Properties Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl font-bold text-[#2c5282]">Propiedades Destacadas</h2>
            <p className="text-gray-500 text-sm uppercase tracking-wider hidden md:block">
              Descubre nuestro portafolio exclusivo
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Property Image 1 */}
            <div className="h-64 overflow-hidden rounded shadow-md group relative">
              <Image
                src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Parque residencial"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Property Image 2 */}
            <div className="h-64 overflow-hidden rounded shadow-md group relative">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Edificios corporativos"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Property Image 3 */}
            <div className="h-64 overflow-hidden rounded shadow-md group relative">
              <Image
                src="https://images.unsplash.com/photo-1565352688-769934f152a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Vista nocturna ciudad"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Action Strip (Three columns) */}
          <div className="flex flex-col md:flex-row w-full text-white font-bold text-sm uppercase text-center">
            <button className="bg-gray-600 py-5 px-6 flex-1 hover:bg-gray-700 cursor-pointer flex items-center justify-center transition-colors">
              Casas Residenciales Premium
            </button>
            <button className="bg-[#1e3a8a] py-5 px-6 flex-1 hover:bg-blue-900 cursor-pointer flex items-center justify-center border-l border-gray-500 md:border-l-0 transition-colors">
              Departamentos de Lujo
            </button>
            <button className="bg-[#0ea5e9] py-5 px-6 flex-1 hover:bg-sky-600 cursor-pointer flex items-center justify-center transition-colors">
              Locales Comerciales
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#2c5282] mb-12">Nuestros Servicios</h2>

          {/* Top Row Images with Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Service Image 1 */}
            <div className="flex flex-col">
              <div className="relative h-48 w-full mb-3 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Asesoría inmobiliaria"
                  fill
                  className="object-cover"
                />
              </div>
              <a href="#" className="text-center text-cyan-600 font-semibold text-sm uppercase tracking-wide hover:text-cyan-800 transition-colors">
                Asesoría Inmobiliaria Integral
              </a>
            </div>

            {/* Service Image 2 */}
            <div className="flex flex-col">
              <div className="relative h-48 w-full mb-3 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Oficinas modernas"
                  fill
                  className="object-cover"
                />
              </div>
              <a href="#" className="text-center text-cyan-600 font-semibold text-sm uppercase tracking-wide hover:text-cyan-800 transition-colors">
                Propiedades Corporativas
              </a>
            </div>

            {/* Service Image 3 */}
            <div className="flex flex-col">
              <div className="relative h-48 w-full mb-3 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Consultoría profesional"
                  fill
                  className="object-cover"
                />
              </div>
              <a href="#" className="text-center text-cyan-600 font-semibold text-sm uppercase tracking-wide hover:text-cyan-800 transition-colors">
                Inversión y Desarrollo
              </a>
            </div>
          </div>

          {/* Bottom Row - Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-blue-50 p-8 rounded text-center flex flex-col items-center">
              <div className="bg-[#2c5282] w-12 h-12 flex items-center justify-center rounded text-white mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">Avalúos Certificados</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Valuaciones profesionales realizadas por peritos certificados. Informes detallados 
                para compra, venta o trámites legales.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 font-bold text-sm uppercase rounded hover:bg-orange-600 transition-colors">
                Solicitar Avalúo
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-blue-50 p-8 rounded text-center flex flex-col items-center">
              <div className="bg-[#2c5282] w-12 h-12 flex items-center justify-center rounded text-white mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">Agentes Certificados</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Equipo de asesores profesionales con años de experiencia en el mercado inmobiliario 
                de Querétaro y zona metropolitana.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 font-bold text-sm uppercase rounded hover:bg-orange-600 transition-colors">
                Conocer Equipo
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-blue-50 p-8 rounded text-center flex flex-col items-center">
              <div className="bg-[#2c5282] w-12 h-12 flex items-center justify-center rounded text-white mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">Consultoría de Inversión</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Análisis de mercado, proyecciones de plusvalía y asesoría estratégica para 
                maximizar el retorno de tu inversión inmobiliaria.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 font-bold text-sm uppercase rounded hover:bg-orange-600 transition-colors">
                Más Información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a52] text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1 - About */}
            <div>
              <h3 className="text-xl font-bold mb-6">Sobre Nosotros</h3>
              <ul className="text-sm text-gray-300 space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Nuestra Historia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Misión y Visión</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipo Profesional</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonios</a></li>
              </ul>
            </div>

            {/* Column 2 - Description */}
            <div>
              <h3 className="text-xl font-bold mb-6">Inmobiliaria Querétaro</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Con más de 15 años de experiencia en el mercado inmobiliario de Querétaro, 
                ofrecemos servicios profesionales de compra, venta y renta de propiedades.
              </p>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Servicios</h3>
              <ul className="text-sm text-gray-300 space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">▸</span> Compra y Venta
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">▸</span> Rentas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">▸</span> Avalúos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">▸</span> Asesoría Legal
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contacto</h3>
              <ul className="text-sm text-gray-300 space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Querétaro, Qro.</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contacto@inmobiliariaqro.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+52 442 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span>www.inmobiliariaqro.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex flex-col md:flex-row gap-6 mb-4 md:mb-0">
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @InmobiliariaQro
              </a>
              <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            </div>
            <div className="flex items-center gap-4">
              <span>© 2024 Inmobiliaria Querétaro</span>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
