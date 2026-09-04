import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Limpieza profesional en Montevideo`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "limpieza de oficinas Montevideo",
    "servicios de limpieza profesional Uruguay",
    "empresa de limpieza Montevideo",
    "limpieza final de obra",
    "portería Montevideo",
    "limpieza de eventos Uruguay",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Limpieza profesional en Montevideo`,
    description: siteConfig.description,
    images: [
      {
        // TODO: reemplazar por una imagen Open Graph definitiva (1200x630) cuando esté disponible
        url: "/images/menuprincipal.jpeg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Limpieza profesional en Montevideo`,
    description: siteConfig.description,
    images: ["/images/menuprincipal.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  email: siteConfig.contactEmail,
  areaServed: {
    "@type": "Place",
    name: siteConfig.serviceArea,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montevideo",
    addressCountry: "UY",
  },
  url: siteConfig.url,
  image: `${siteConfig.url}/images/logo.jpeg`,
  sameAs: [siteConfig.social.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
