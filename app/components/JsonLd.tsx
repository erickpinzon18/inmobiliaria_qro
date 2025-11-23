export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Mi Éxito Inmobiliario Querétaro",
    image: "https://inmobiliaria-qro.vercel.app/logo.jpg",
    "@id": "https://inmobiliariaqro.com",
    url: "https://inmobiliariaqro.com",
    telephone: "+52-442-123-4567",
    email: "contacto@inmobiliariaqro.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Querétaro",
      addressLocality: "Querétaro",
      addressRegion: "Querétaro",
      postalCode: "76000",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.588793,
      longitude: -100.389888,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://facebook.com/inmobiliariaqro",
      "https://instagram.com/inmobiliariaqro",
      "https://linkedin.com/company/inmobiliariaqro",
    ],
    priceRange: "$$$",
    areaServed: {
      "@type": "City",
      name: "Querétaro",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
