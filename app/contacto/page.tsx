"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    interes: "comprar",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white antialiased min-h-screen">
      {/* Background elegante */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar currentPage="contacto" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/30 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-sm text-amber-200 font-medium tracking-wide">
                Respuesta en menos de 24 horas
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Contáctanos </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Hoy
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Estamos aquí para ayudarte a encontrar tu propiedad ideal
            </p>
          </div>

          {/* Stats rápidos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-6 text-center hover:border-amber-500/40 transition-all">
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Atención</div>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-6 text-center hover:border-amber-500/40 transition-all">
              <div className="text-3xl font-bold text-amber-400 mb-2">+500</div>
              <div className="text-sm text-gray-400">Consultas al mes</div>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-6 text-center hover:border-amber-500/40 transition-all">
              <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-xl p-6 text-center hover:border-amber-500/40 transition-all">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                &lt;1h
              </div>
              <div className="text-sm text-gray-400">Tiempo respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div className="">
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-400 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm text-gray-400 mb-2 font-medium"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-400 mb-2 font-medium"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm text-gray-400 mb-2 font-medium"
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none transition-all"
                      placeholder="442 123 4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interes"
                      className="block text-sm text-gray-400 mb-2 font-medium"
                    >
                      Estoy interesado en *
                    </label>
                    <select
                      id="interes"
                      name="interes"
                      value={formData.interes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-amber-500/50 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="comprar">Comprar</option>
                      <option value="vender">Vender</option>
                      <option value="rentar">Rentar</option>
                      <option value="invertir">Invertir</option>
                      <option value="avaluo">Avalúo</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm text-gray-400 mb-2 font-medium"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none transition-all resize-none"
                      placeholder="Cuéntanos qué estás buscando..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-lg transition-all shadow-xl shadow-amber-500/30"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              {/* FAQs rápidas */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10 mt-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Preguntas Frecuentes
                </h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-white font-medium py-3 border-b border-white/10 hover:text-amber-400 transition-colors">
                      ¿Cuánto tiempo toma el proceso?
                      <svg
                        className="w-5 h-5 text-amber-400 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      El proceso varía según el tipo de propiedad, pero
                      generalmente toma entre 30-60 días desde la oferta hasta
                      el cierre.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-white font-medium py-3 border-b border-white/10 hover:text-amber-400 transition-colors">
                      ¿Ofrecen financiamiento?
                      <svg
                        className="w-5 h-5 text-amber-400 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      Trabajamos con los mejores bancos y te ayudamos a
                      conseguir las mejores tasas de financiamiento disponibles.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-white font-medium py-3 border-b border-white/10 hover:text-amber-400 transition-colors">
                      ¿Puedo agendar una visita?
                      <svg
                        className="w-5 h-5 text-amber-400 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      ¡Por supuesto! Puedes agendar visitas presenciales o
                      virtuales según tu preferencia y disponibilidad.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              {/* Datos de Contacto */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Dirección
                      </h4>
                      <p className="text-gray-400">
                        Av. Constituyentes #123
                        <br />
                        Col. Centro, Querétaro, Qro.
                        <br />
                        C.P. 76000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Teléfono
                      </h4>
                      <p className="text-gray-400">
                        +52 442 123 4567
                        <br />
                        +52 442 765 4321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Email</h4>
                      <p className="text-gray-400">
                        contacto@inmobiliariaqro.com
                        <br />
                        ventas@inmobiliariaqro.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Horario</h4>
                      <p className="text-gray-400">
                        Lunes - Viernes: 9:00 - 19:00
                        <br />
                        Sábados: 10:00 - 15:00
                        <br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Mantente al día con las últimas propiedades y noticias
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg backdrop-blur-md bg-white/5 border border-amber-500/20 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 hover:border-transparent flex items-center justify-center group transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg backdrop-blur-md bg-white/5 border border-amber-500/20 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 hover:border-transparent flex items-center justify-center group transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg backdrop-blur-md bg-white/5 border border-amber-500/20 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 hover:border-transparent flex items-center justify-center group transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg backdrop-blur-md bg-white/5 border border-amber-500/20 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 hover:border-transparent flex items-center justify-center group transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Mapa */}
              <div className="backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119454.40023644968!2d-100.49377379033203!3d20.588793500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b8f1c45c5f7%3A0xc1e9e5c9e1f1e1e1!2zUXVlcsOpdGFybywgUXJvLg!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de Contacto Alternativos */}
      <section className="relative py-20 border-t border-amber-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Otras formas de </span>
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Contactarnos
                </span>
              </h2>
              <p className="text-gray-400">
                Elige el método que más te convenga
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/524421234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-xl shadow-green-500/30 mx-auto group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Respuesta inmediata
                </p>
                <div className="inline-flex items-center gap-2 text-amber-400 font-medium">
                  <span>Chatear ahora</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contacto@inmobiliariaqro.com"
                className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/30 mx-auto group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Consultas detalladas
                </p>
                <div className="inline-flex items-center gap-2 text-amber-400 font-medium">
                  <span>Enviar email</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>

              {/* Llamar */}
              <a
                href="tel:+524421234567"
                className="group backdrop-blur-md bg-white/5 border border-amber-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30 mx-auto group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Teléfono</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Asesoría personalizada
                </p>
                <div className="inline-flex items-center gap-2 text-amber-400 font-medium">
                  <span>Llamar ahora</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
