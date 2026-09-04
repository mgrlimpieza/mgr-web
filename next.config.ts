import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 100 habilitado para el logo (JPEG fuente con artefactos de compresión visibles a
    // quality por defecto); el resto de las imágenes del sitio sigue usando 75.
    qualities: [75, 100],
    // Los logos de empresas aliadas son SVG estáticos propios (public/images/allies/),
    // no contenido subido por usuarios ni de origen remoto: next/image los rechaza por
    // defecto, así que se habilita SVG de forma acotada con CSP restrictiva.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
