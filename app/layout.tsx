import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inmobiliaria Querétaro | Propiedades de Lujo y Exclusivas en Qro",
  description: "Descubre propiedades exclusivas, residencias de lujo y las mejores oportunidades de inversión en Querétaro. Más de 15 años de experiencia en bienes raíces.",
  keywords: [
    "inmobiliaria querétaro",
    "propiedades en querétaro",
    "casas en venta querétaro",
    "departamentos querétaro",
    "bienes raíces querétaro",
    "propiedades de lujo querétaro",
    "inversión inmobiliaria querétaro",
    "juriquilla propiedades",
    "residencias exclusivas querétaro",
    "venta de casas querétaro"
  ],
  authors: [{ name: "Inmobiliaria Querétaro" }],
  creator: "Inmobiliaria Querétaro",
  publisher: "Inmobiliaria Querétaro",
  metadataBase: new URL("https://inmobiliariaqro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://inmobiliariaqro.com",
    title: "Inmobiliaria Querétaro | Propiedades de Lujo y Exclusivas",
    description: "Descubre propiedades exclusivas, residencias de lujo y las mejores oportunidades de inversión en Querétaro. Más de 15 años de experiencia.",
    siteName: "Inmobiliaria Querétaro",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Inmobiliaria Querétaro - Propiedades Exclusivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inmobiliaria Querétaro | Propiedades de Lujo y Exclusivas",
    description: "Descubre propiedades exclusivas y las mejores oportunidades de inversión en Querétaro. Más de 15 años de experiencia.",
    images: ["/logo.jpg"],
    creator: "@inmobiliariaqro",
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
  icons: {
    icon: [
      { url: "/logo.ico" },
      { url: "/logo.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/logo.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/logo.ico",
    apple: [
      { url: "/logo.jpg" },
      { url: "/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  category: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="canonical" href="https://inmobiliariaqro.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro" />
        <meta name="geo.position" content="20.588793;-100.389888" />
        <meta name="ICBM" content="20.588793, -100.389888" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
