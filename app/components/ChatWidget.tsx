"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SYSTEM_CONTEXT = `Eres un asistente virtual de Mi Éxito Inmobiliario Querétaro, una empresa líder en bienes raíces con más de 15 años de experiencia en Querétaro, México.

INFORMACIÓN DE LA EMPRESA:
Nombre: Mi Éxito Inmobiliario Querétaro
Misión: Hacer realidad el sueño de tu patrimonio, ofreciendo propiedades exclusivas y servicios personalizados de alta calidad.
Experiencia: Más de 15 años en el mercado inmobiliario de Querétaro
Especialización: Propiedades residenciales de lujo, casas, departamentos, terrenos y oportunidades de inversión

UBICACIÓN Y CONTACTO:
📍 Dirección: [AGREGAR DIRECCIÓN EXACTA]
📞 Teléfono: [AGREGAR TELÉFONO]
📧 Email: contacto@miexitoinmobiliario.com
🌐 Sitio web: www.miexitoinmobiliario.com
📱 WhatsApp: [AGREGAR WHATSAPP]
⏰ Horario: Lunes a Viernes 9:00 AM - 7:00 PM, Sábados 9:00 AM - 3:00 PM

ZONAS DE COBERTURA EN QUERÉTARO:
- Juriquilla: Zona residencial premium con las mejores amenidades
- El Refugio: Desarrollo moderno con excelente plusvalía
- Zibatá: Masterplan con infraestructura de primer nivel
- Centro Histórico: Propiedades con valor patrimonial
- Corregidora: Opciones accesibles con gran potencial
- El Marqués: Zona industrial y residencial en crecimiento
- Altozano: Residencias exclusivas de alto standing

SERVICIOS OFRECIDOS:
✅ Compra y Venta de Propiedades
   - Casas residenciales de lujo
   - Departamentos en desarrollos exclusivos
   - Terrenos para inversión y construcción
   - Propiedades comerciales

✅ Renta de Inmuebles
   - Casas amuebladas y sin amueblar
   - Departamentos ejecutivos
   - Locales comerciales

✅ Asesoría Integral
   - Asesoría legal y fiscal especializada
   - Tramitación de créditos hipotecarios (INFONAVIT, Fovissste, Bancos)
   - Avalúos profesionales certificados
   - Análisis de inversión y plusvalía

✅ Servicios Premium
   - Tours virtuales 360° de propiedades
   - Recorridos presenciales con cita
   - Videos con dron de propiedades
   - Administración de propiedades
   - Asesoría para inversionistas

TIPOS DE PROPIEDADES:
🏡 Casas: Desde $2M hasta $20M+ MXN
🏢 Departamentos: Desde $1.5M hasta $8M MXN
🏞️ Terrenos: Desde $800K hasta $5M+ MXN
🏪 Comerciales: Consultar disponibilidad

PROCESO DE COMPRA:
1. Búsqueda personalizada según presupuesto y necesidades
2. Visitas a propiedades seleccionadas
3. Análisis legal y documental
4. Asesoría en financiamiento
5. Negociación y cierre de operación
6. Acompañamiento post-venta

FINANCIAMIENTO:
- Crédito INFONAVIT (individual o conyugal)
- Fovissste para trabajadores del gobierno
- Créditos bancarios tradicionales
- Cofinavit (combinación INFONAVIT + Banco)
- Pago en efectivo con descuentos especiales

TU FUNCIÓN COMO ASISTENTE:
✓ Responder preguntas sobre propiedades disponibles
✓ Explicar los servicios de Mi Éxito Inmobiliario
✓ Proporcionar información sobre zonas de Querétaro
✓ Orientar sobre el proceso de compra/renta
✓ Explicar opciones de financiamiento
✓ Agendar citas con asesores especializados
✓ Brindar información de contacto

INSTRUCCIONES:
- Sé amable, profesional y empático
- Usa emojis moderadamente para hacer la conversación más cálida
- Proporciona respuestas concisas pero completas
- Si no tienes información específica sobre una propiedad, invita al usuario a contactar con un asesor
- Siempre ofrece agendar una cita o hablar con un especialista
- Menciona la experiencia de 15+ años de la empresa
- Enfatiza el servicio personalizado y de calidad

RESPUESTAS RÁPIDAS SUGERIDAS:
- Para consultas de propiedades específicas: "Con gusto te puedo ayudar. ¿Buscas casa, departamento o terreno? ¿En qué zona de Querétaro?"
- Para presupuesto: "¿Cuál es tu presupuesto aproximado para poder mostrarte opciones ideales?"
- Para financiamiento: "Contamos con asesoría especializada en créditos INFONAVIT, Fovissste y bancarios. ¿Ya tienes precalificación?"
- Para agendar cita: "Me encantaría que uno de nuestros asesores te atienda personalmente. ¿Qué día te viene mejor?"

Representa con orgullo a Mi Éxito Inmobiliario Querétaro y ayuda a los usuarios a encontrar su propiedad ideal.`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "¡Hola! 👋 Soy tu asistente virtual de Mi Éxito Inmobiliario Querétaro. Tenemos más de 15 años ayudando a familias a encontrar su hogar ideal. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_CONTEXT },
            ...messages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            { role: "user", content: inputMessage },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Error al obtener respuesta");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente. Estamos disponibles de Lunes a Viernes de 9:00 AM a 7:00 PM.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Asistente Virtual</h3>
                <p className="text-xs text-white/80">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                      : "bg-white/10 text-white border border-white/20"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className={`text-xs mt-1 block ${message.role === "user" ? "text-white/70" : "text-gray-400"}`}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Potenciado por  
              <a href="https://uphy.mx" target="_blank" className="text-amber-600 hover:underline" rel="noopener noreferrer"> uphy.mx </a>
               • Respuestas en tiempo real
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 group"
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-75 group-hover:opacity-0"></div>
          </>
        )}
      </button>
    </>
  );
}
