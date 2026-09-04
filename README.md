# MGR Servicios Integrales — sitio web

Landing institucional de 5 páginas para MGR Servicios Integrales (limpieza profesional y
portería), construido con Next.js 16 (App Router) + TypeScript + Tailwind CSS + shadcn/ui.

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4 (tokens de marca en [app/globals.css](app/globals.css))
- shadcn/ui (base [Base UI](https://base-ui.com), no Radix — los componentes en
  `components/ui` usan la prop `render` en vez de `asChild` para polimorfismo)
- Framer Motion (`components/motion/fade-in.tsx`)
- react-hook-form + zod
- Resend (envío de emails desde los Route Handlers de `/api`)
- lucide-react (v1 — sin íconos de marcas; los de redes sociales están a mano en
  `components/icons/social-icons.tsx`)

## Primeros pasos

```bash
npm install
cp .env.example .env.local   # completar las variables (ver abajo)
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Ver [.env.example](.env.example):

- `RESEND_API_KEY` — API key de [Resend](https://resend.com), usada por
  `app/api/send-quote` y `app/api/send-application`.
- `CONTACT_EMAIL_TO` — casilla que recibe las cotizaciones y postulaciones.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número de WhatsApp de la empresa (formato
  internacional sin "+", ej. `59899123456`). **Placeholder hasta que se confirme el número real.**

## Estructura

- `app/` — páginas (Inicio, Servicios, Quiénes somos, Contacto, Trabaja con nosotros),
  Route Handlers de email, `sitemap.ts`, `robots.ts`, `icon.svg`.
- `components/layout` — Header, Footer, Logo.
- `components/sections` — Hero y demás bloques reutilizables entre páginas.
- `components/forms` — `QuoteForm` (WhatsApp + email) y `ApplicationForm` (email con CV adjunto).
- `components/ui` — primitivos de shadcn/ui.
- `lib/constants` — contenido del sitio (servicios, valores, equipo, FAQ, aliados, nav).
- `lib/validations` — schemas de zod para los formularios.
- `lib/site-config.ts` — nombre, contacto, helper de link de WhatsApp.

## Pendientes de contenido

Buscar `TODO` en el código (o ver el checklist original del proyecto) para la lista de
assets/datos provisorios: logo transparente, fotos reales de servicios y equipo, logos de
aliados, número de WhatsApp, link de Facebook y textos definitivos.

## Deploy

Pensado para Vercel sin configuración adicional más allá de cargar las variables de
entorno del paso anterior.
