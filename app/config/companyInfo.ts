// Configuración de Mi Éxito Inmobiliario Querétaro
// Actualiza esta información según los datos reales de la empresa

export const COMPANY_INFO = {
  // Información Básica
  name: "Mi Éxito Inmobiliario Querétaro",
  slogan: "Haciendo realidad el sueño de tu patrimonio",
  yearsOfExperience: 15,
  
  // Contacto
  contact: {
    // TODO: Actualizar con información real
    phone: "+52 442 XXX XXXX",
    whatsapp: "+52 442 XXX XXXX",
    email: "contacto@miexitoinmobiliario.com",
    website: "www.miexitoinmobiliario.com",
    
    // Dirección física
    address: {
      street: "[Calle y Número]",
      neighborhood: "[Colonia]",
      city: "Querétaro",
      state: "Querétaro",
      zipCode: "[C.P.]",
      fullAddress: "[Dirección completa aquí]", // Ej: "Av. Juriquilla #123, Juriquilla, Querétaro, Qro. C.P. 76230"
    },
    
    // Horarios
    schedule: {
      weekdays: "Lunes a Viernes: 9:00 AM - 7:00 PM",
      saturday: "Sábados: 9:00 AM - 3:00 PM",
      sunday: "Domingos: Cerrado",
    },
  },
  
  // Redes Sociales
  social: {
    facebook: "https://facebook.com/miexitoinmobiliario",
    instagram: "https://instagram.com/miexitoinmobiliario",
    linkedin: "https://linkedin.com/company/miexitoinmobiliario",
    youtube: "https://youtube.com/@miexitoinmobiliario",
  },
  
  // Zonas de Cobertura
  coverageAreas: [
    {
      name: "Juriquilla",
      description: "Zona residencial premium con las mejores amenidades",
      priceRange: "$3M - $20M+ MXN",
    },
    {
      name: "El Refugio",
      description: "Desarrollo moderno con excelente plusvalía",
      priceRange: "$2.5M - $15M MXN",
    },
    {
      name: "Zibatá",
      description: "Masterplan con infraestructura de primer nivel",
      priceRange: "$3M - $18M MXN",
    },
    {
      name: "Centro Histórico",
      description: "Propiedades con valor patrimonial",
      priceRange: "$2M - $12M MXN",
    },
    {
      name: "Corregidora",
      description: "Opciones accesibles con gran potencial",
      priceRange: "$1.5M - $8M MXN",
    },
    {
      name: "El Marqués",
      description: "Zona industrial y residencial en crecimiento",
      priceRange: "$1.8M - $10M MXN",
    },
    {
      name: "Altozano",
      description: "Residencias exclusivas de alto standing",
      priceRange: "$5M - $25M+ MXN",
    },
  ],
  
  // Servicios
  services: {
    sales: [
      "Casas residenciales de lujo",
      "Departamentos en desarrollos exclusivos",
      "Terrenos para inversión y construcción",
      "Propiedades comerciales",
    ],
    rentals: [
      "Casas amuebladas y sin amueblar",
      "Departamentos ejecutivos",
      "Locales comerciales",
    ],
    consulting: [
      "Asesoría legal y fiscal especializada",
      "Tramitación de créditos hipotecarios (INFONAVIT, Fovissste, Bancos)",
      "Avalúos profesionales certificados",
      "Análisis de inversión y plusvalía",
    ],
    premium: [
      "Tours virtuales 360° de propiedades",
      "Recorridos presenciales con cita",
      "Videos con dron de propiedades",
      "Administración de propiedades",
      "Asesoría para inversionistas",
    ],
  },
  
  // Rango de Precios
  priceRanges: {
    houses: {
      min: 2000000,
      max: 20000000,
      display: "$2M - $20M+ MXN",
    },
    apartments: {
      min: 1500000,
      max: 8000000,
      display: "$1.5M - $8M MXN",
    },
    land: {
      min: 800000,
      max: 5000000,
      display: "$800K - $5M+ MXN",
    },
  },
  
  // Opciones de Financiamiento
  financing: [
    {
      name: "INFONAVIT",
      description: "Crédito individual o conyugal",
    },
    {
      name: "Fovissste",
      description: "Para trabajadores del gobierno",
    },
    {
      name: "Créditos Bancarios",
      description: "Créditos tradicionales",
    },
    {
      name: "Cofinavit",
      description: "Combinación INFONAVIT + Banco",
    },
    {
      name: "Efectivo",
      description: "Pago en efectivo con descuentos especiales",
    },
  ],
  
  // Equipo (opcional)
  team: [
    {
      name: "María González",
      role: "Directora de Ventas",
      phone: "+52 442 XXX XXXX",
      email: "maria@miexitoinmobiliario.com",
      specialty: "Propiedades residenciales de lujo",
    },
    // Agregar más miembros del equipo aquí
  ],
};

// Coordenadas para el mapa (actualizar con ubicación real)
export const COMPANY_LOCATION = {
  lat: 20.588793, // Coordenada de ejemplo (Juriquilla)
  lng: -100.389888,
  // TODO: Actualizar con coordenadas reales de la oficina
};

// Mensajes predefinidos para el chatbot
export const QUICK_REPLIES = {
  greeting: "¡Hola! 👋 Soy tu asistente virtual de Mi Éxito Inmobiliario Querétaro. Tenemos más de 15 años ayudando a familias a encontrar su hogar ideal. ¿En qué puedo ayudarte hoy?",
  
  propertyInquiry: "Con gusto te puedo ayudar. ¿Buscas casa, departamento o terreno? ¿En qué zona de Querétaro te interesa?",
  
  budget: "¿Cuál es tu presupuesto aproximado para poder mostrarte opciones ideales?",
  
  financing: "Contamos con asesoría especializada en créditos INFONAVIT, Fovissste y bancarios. ¿Ya tienes precalificación o te gustaría que te asesoremos?",
  
  appointment: "Me encantaría que uno de nuestros asesores especializados te atienda personalmente. ¿Qué día y horario te viene mejor?",
  
  error: "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente. Estamos disponibles de Lunes a Viernes de 9:00 AM a 7:00 PM.",
};

export default COMPANY_INFO;
