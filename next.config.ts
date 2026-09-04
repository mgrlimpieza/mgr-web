import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 100 habilitado para el logo (JPEG fuente con artefactos de compresión visibles a
    // quality por defecto); el resto de las imágenes del sitio sigue usando 75.
    qualities: [75, 100],
  },
};

export default nextConfig;
