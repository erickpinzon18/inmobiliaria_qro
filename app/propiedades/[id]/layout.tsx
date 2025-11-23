import { Metadata } from "next";

// Esta función generará la metadata dinámica basada en el ID
// Por ahora usa datos estáticos, pero se conectará a Firebase
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  // Await params para Next.js 15+
  const { id } = await params;
  
  // Aquí después obtendrás los datos de Firebase usando id
  const propiedad = {
    titulo: "Villa Moderna",
    ubicacion: "Juriquilla, Querétaro",
    precio: 8500000,
    tipo: "casa",
    area: 350,
    recamaras: 4,
    banos: 3.5,
    descripcion: "Espectacular residencia de lujo ubicada en una de las zonas más exclusivas de Juriquilla. Esta propiedad cuenta con acabados de primera calidad, amplios espacios y una distribución inteligente que maximiza la funcionalidad y el confort.",
    imagenPrincipal: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
  };

  return {
    title: `${propiedad.titulo} - ${propiedad.ubicacion} | Inmobiliaria Querétaro`,
    description: `${propiedad.descripcion.substring(0, 155)}...`,
    keywords: [
      propiedad.tipo,
      "venta",
      "Querétaro",
      "inmobiliaria",
      propiedad.ubicacion,
      `${propiedad.recamaras} recámaras`,
      `${propiedad.area}m²`,
      "casa de lujo",
      "residencia",
      "propiedad premium"
    ],
    authors: [{ name: "Inmobiliaria Querétaro" }],
    openGraph: {
      title: `${propiedad.titulo} - ${propiedad.ubicacion}`,
      description: propiedad.descripcion,
      url: `https://inmobiliariaqueretaro.com/propiedades/${id}`,
      siteName: "Inmobiliaria Querétaro",
      images: [
        {
          url: propiedad.imagenPrincipal,
          width: 1200,
          height: 630,
          alt: propiedad.titulo,
        },
      ],
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${propiedad.titulo} - ${propiedad.ubicacion}`,
      description: propiedad.descripcion,
      images: [propiedad.imagenPrincipal],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://inmobiliariaqueretaro.com/propiedades/${id}`,
    },
  };
}

// Structured Data JSON-LD para la propiedad
function generateJsonLd(id: string) {
  // Aquí después obtendrás los datos de Firebase
  const propiedad = {
    titulo: "Villa Moderna",
    ubicacion: "Juriquilla, Querétaro",
    precio: 8500000,
    tipo: "casa",
    area: 350,
    areaTerreno: 500,
    recamaras: 4,
    banos: 3.5,
    descripcion: "Espectacular residencia de lujo ubicada en una de las zonas más exclusivas de Juriquilla. Esta propiedad cuenta con acabados de primera calidad, amplios espacios y una distribución inteligente que maximiza la funcionalidad y el confort.",
    imagenPrincipal: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
    agente: {
      nombre: "María González",
      telefono: "+52 442 123 4567",
      email: "maria@inmobiliariaqro.com",
    },
  };

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": propiedad.titulo,
    "description": propiedad.descripcion,
    "url": `https://inmobiliariaqueretaro.com/propiedades/${id}`,
    "image": propiedad.imagenPrincipal,
    "offers": {
      "@type": "Offer",
      "price": propiedad.precio,
      "priceCurrency": "MXN",
      "availability": "https://schema.org/InStock",
      "url": `https://inmobiliariaqueretaro.com/propiedades/${id}`,
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Querétaro",
      "addressRegion": "Querétaro",
      "addressCountry": "MX",
      "streetAddress": propiedad.ubicacion,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.5887930,
      "longitude": -100.3898880,
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": propiedad.area,
      "unitCode": "MTK",
    },
    "numberOfRooms": propiedad.recamaras,
    "numberOfBathroomsTotal": propiedad.banos,
    "accommodationCategory": propiedad.tipo,
    "agent": {
      "@type": "Person",
      "name": propiedad.agente.nombre,
      "telephone": propiedad.agente.telefono,
      "email": propiedad.agente.email,
    },
  };
}

export default async function PropiedadLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jsonLd = generateJsonLd(id);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
