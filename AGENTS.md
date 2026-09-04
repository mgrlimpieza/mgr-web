# AGENTS.md — MGR Servicios Integrales

Contexto persistente del proyecto para cualquier agente de codigo (Claude Code, Antigravity, Cursor, etc.). Leer esto antes de trabajar en el repo.

## Sobre el proyecto

Landing page institucional de **MGR Servicios Integrales**, empresa uruguaya de limpieza profesional y porteria, con 12 anos de trayectoria, sede en Montevideo y cobertura en Area Metropolitana. Cliente principalmente B2B (oficinas, hoteles, constructoras, locales comerciales).

Sitio de 5 paginas, mobile-first, deploy en Vercel.

## Stack tecnico

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- shadcn/ui (componentes base)
- Framer Motion (animaciones sutiles on-scroll, nada exagerado)
- react-hook-form + zod (validacion de formularios)
- next/image (todas las imagenes, sin excepcion)
- lucide-react (iconos)
- Metadata API nativa de Next.js para SEO (no next-seo ni librerias externas)
- Resend (envio de emails, plan gratuito: 3.000/mes, 100/dia)

## Comandos

```bash
npm run dev      # desarrollo local
npm run build    # build de produccion
npm run lint     # linter
```

## Paleta de colores (tailwind.config)

```js
colors: {
  brand: {
    navy: '#052D60',      // azul marino principal - headers, titulos, footer
    blue: '#0047B3',      // azul vivo - botones de accion, iconos, acentos
    lightbg: '#F1F1FB',   // fondo celeste claro - secciones alternas
    logo: '#0E4272',      // azul del isotipo del logo
  }
}
```

Tipografia: Inter o Plus Jakarta Sans (Google Fonts).

## Estructura de paginas

| Ruta | Contenido |
|---|---|
| `/` | Hero, 3 diferenciales, carrusel de empresas aliadas, barra de stats |
| `/servicios` | Pagina unica (sin dropdown en el header), 4 bloques de servicio, sin CTA propio en la pagina (el usuario ya tiene "Solicitar cotizacion" siempre visible en el header) |
| `/quienes-somos` | Historia, valores (7 cards), seccion de equipo |
| `/contacto` | Formulario de cotizacion, FAQ, boton de WhatsApp directo |
| `/trabaja-con-nosotros` | Formulario de postulacion con CV adjunto |

## Convenciones de codigo

- Copy visible del sitio: espanol rioplatense, tono profesional pero cercano.
- Nombres de variables, funciones y componentes: ingles, convenciones estandar.
- Componentizar: `Header`, `Footer`, `Hero`, `ServiceCard`, `TeamCard`, `FaqAccordion`, `QuoteForm`, `ApplicationForm`, `WhatsAppButton`, `AlliesCarousel`. Nada de paginas monoliticas.
- Accesibilidad basica siempre: alt text en imagenes, labels en formularios, contraste adecuado, navegacion por teclado.

## Datos del negocio (usar siempre estos, no inventar)

- Email de contacto: `contacto@mgrlimpieza.com.uy`
- Horario de atencion: Lunes a viernes de 8 a 18hs
- Sin direccion fisica (no tienen oficina) — no mostrar direccion en el footer
- Instagram: `https://www.instagram.com/mgr.serviciosintegrales/`
- Facebook: pendiente de link, dejar el componente preparado pero comentado
- Anos de trayectoria: 12 (confirmado por el cliente)

## WhatsApp

- **Sin boton flotante** en el sitio.
- Visible unicamente en la pagina `/contacto` (boton directo + el que dispara el formulario de cotizacion).
- Numero real: `siteConfig.whatsappNumber` en `lib/site-config.ts` (dato publico, no es variable de entorno).
- El formulario de `/trabaja-con-nosotros` **no** usa WhatsApp para el envio del CV (los links `wa.me` no soportan adjuntos) — ese formulario va solo por email.

## Formularios

**Cotizacion (`/contacto`):** Nombre*, Telefono*, Email*, Empresa*, Informacion adicional. Al enviar: redirige a WhatsApp con mensaje prellenado + copia por email via Resend (`app/api/send-quote/route.ts`).

**Postulacion (`/trabaja-con-nosotros`):** Nombre*, Telefono*, Email*, Puesto de interes, Mensaje, CV* (adjunto, PDF/DOC/DOCX, max 5MB). Envio solo por email con adjunto via Resend (`app/api/send-application/route.ts`). Boton secundario de WhatsApp sin adjunto, para contacto rapido.

**Ambos formularios** deben mostrar debajo del boton de envio:
> "Tus datos seran utilizados unicamente para responder tu consulta y no seran compartidos con terceros."

Variable de entorno necesaria (`.env.example`): `RESEND_API_KEY`. El numero de WhatsApp (`siteConfig.whatsappNumber`) y el email publico (`siteConfig.contactEmail`) son valores fijos en `lib/site-config.ts`, no variables de entorno — no son datos sensibles. El email de entrega real de Resend (`siteConfig.notificationEmail`) tambien vive ahi, separado del email publico mientras la casilla del dominio propio no este activa.

## FAQ (pagina Contacto, componente accordion)

- Trabajan fines de semana y feriados?
- El personal esta asegurado?
- Proveen los productos e insumos de limpieza?
- Hay un minimo de contrato o pueden ser servicios puntuales?
- En cuanto tiempo responden una solicitud de cotizacion?
- En que zonas trabajan?

## Equipo (pagina Quienes somos)

Layout confirmado (grid de tarjetas con foto + nombre + cargo). Usar avatares placeholder neutros (nunca fotos de personas ficticias generadas por IA) hasta tener las fotos reales.

- Mathias Galizzi — Director y gerente general
- Rodrigo Leal — Supervision general
- Carmen Rivero — Administracion y personas
- [Pendiente] — Servicio tecnico
- [Pendiente] — Contador
- Maximiliano Rodriguez — Marketing y redes sociales

## Hero (componente unico, reutilizado en Inicio, Servicios, Quienes somos, Contacto y Trabaja con nosotros)

Es el **mismo componente/tratamiento visual** en las 5 paginas — solo cambia el texto y la imagen segun la pagina. No crear una version distinta por pagina.

- Proporcion 60% imagen / 40% texto (desktop/tablet).
- Imagen full bleed: llega hasta el borde real del viewport del lado derecho, sin padding ni border-radius en ninguna esquina.
- Borde izquierdo de la imagen con degradado/mascara (`mask-image: linear-gradient(to right, transparent 0%, black 25%)`) para fundirse con el fondo de la seccion.
- Altura: Inicio tiene su propia altura (la mas alta, es la pagina principal). Servicios, Quienes somos, Contacto y Trabaja con nosotros comparten **una altura fija consistente entre si** (mas baja que la de Inicio), para que la navegacion entre paginas internas se sienta estable y no "salte". No forzar el mismo alto que Inicio en estas 4.
- Columna de texto con padding izquierdo ajustado (no dejar espacio en blanco excesivo).
- En mobile, layout distinto, no se aplica el ratio 60/40 ni el full bleed.

## Seccion "Un servicio disenado para adaptarse a su empresa"

- Titulo en una sola linea en desktop (usar tamano de fuente responsive, sin max-width innecesario).
- Cada card lleva una barra horizontal azul (`brand.blue`, ~40px ancho x 3-4px alto, `rounded-full`, centrada) debajo del titulo y antes de la descripcion.

## Carrusel de empresas aliadas (seccion en Inicio)

- Sin label/tag "ALIADOS" (se saco por decision del cliente).
- Ancho limitado y centrado: usar el mismo max-width que el resto de las secciones del sitio, no 100% del viewport.
- Scroll infinito (marquee): array de logos duplicado (`[...logos, ...logos]`), animacion `translateX(0)` a `translateX(-50%)`, lineal e infinita, direccion derecha a izquierda.
- Velocidad: ~30-40 segundos por loop completo, proporcional al ancho total del contenido.
- Degradado de mascara en los bordes izquierdo y derecho del contenedor (mismo criterio que el fade del hero).
- **Sin pausa en hover** — el carrusel siempre tiene que estar en movimiento, nunca se detiene (decision explicita del cliente, se probo con pausa y no gusto).

### Especificaciones de las imagenes de logos

- Formato: PNG con fondo transparente, o SVG.
- Tamano de archivo: ~400x160px (altura ~160px, 2-3x el tamano visible en pantalla), ancho variable segun el logo, con margen interno prolijo.
- Peso: menor a 80-100kb por archivo.
- Ubicacion: `public/images/allies/` (ESTA es la carpeta real que usa el codigo — no crear ni usar `logos-empresas/`, quedo documentada por error en una version anterior de este archivo). Nombres en minusculas sin acentos ni espacios (ej: `hotel-plaza.svg`).
- Render: altura fija + `width: auto` + `object-contain`, nunca ancho fijo (para no deformar logos con distinta proporcion). Efecto opcional: escala de grises en reposo, color al hover.
- Ya existen 6 logos placeholder ficticios (no son clientes reales, son de relleno para probar el diseno): `hotel-plaza.svg`, `cafe-andina.svg`, `constructora-sur.svg`, `grupo-lumen.svg`, `edificio-norte.svg`, `estudio-vega.svg`. Usar estos hasta tener los logos reales de los clientes de MGR.
- Estilo: logotipo limpio (icono lineal integrado + texto), **sin insignia/circulo de fondo**. Tamano de renderizado generoso (altura mayor a la inicial, tipo `h-16`/`h-20`), inspirado en como github.com muestra sus logos de clientes.

## Logo — dos versiones segun el contexto

El logo completo (icono de edificios + "MGR" + tagline) esta pensado para usarse grande. En espacios chicos (header, favicon) se rompe la legibilidad. Por eso el proyecto usa 2 versiones:

- **`logo.jpeg`** (o su version PNG/SVG cuando la de el cliente) — logo completo, usar solo donde hay espacio real (footer, secciones grandes). Pendiente: version PNG transparente / SVG del cliente.
- **`logo-compacto.svg`** — icono simplificado + "MGR", sin tagline. Usar en el header/nav.
- **`favicon-icon.svg`** — solo la letra "M" en un cuadrado, para el favicon (16-32px, necesita ser aun mas simple que el logo compacto).

No usar el logo completo en espacios menores a ~100px de alto — siempre usar la version compacta o el favicon segun corresponda.

## Footer

- Columna de navegacion se llama **"Explora"** (no "Navegacion").
- Icono de Instagram: en reposo, circulo con borde `brand.blue`, fondo blanco, glifo de Instagram en negro. En hover (desktop), mantener el efecto ya implementado. En mobile, mostrar siempre el tratamiento visual del estado hover (no hay hover real en touch).

## SEO

- Metadata por pagina (title, description) en espanol, orientado a busquedas tipo "limpieza de oficinas Montevideo".
- Open Graph tags para que se vea bien al compartir por WhatsApp/redes.
- JSON-LD Schema.org `LocalBusiness` en el layout raiz.
- `sitemap.xml` y `robots.txt` con las convenciones de Next.js App Router.
- Favicon simplificado a partir del logo (sin el texto, el logo completo tiene demasiado detalle para un icono chico).

## Pendiente de contenido real (no bloquea el desarrollo, usar placeholders)

- Logo en version PNG transparente / SVG (hoy JPEG con fondo blanco).
- Fotos reales para los 4 bloques de Servicios y hero de Quienes somos (hoy reutilizan las 2 fotos ya provistas: `menuprincipal.jpeg` y `cotizaciones.jpeg`).
- Fotos reales del equipo.
- Nombre real de "Servicio tecnico" y "Contador".
- Logos reales de empresas aliadas.
- Numero real de WhatsApp.
- Link de Facebook (si se agrega).
- Textos definitivos de cada seccion (hoy son los del mock original).

## Limites (no hacer sin confirmar)

- No agregar boton flotante de WhatsApp en el sitio general (decision explicita del cliente).
- No agregar direccion fisica en el footer (la empresa no tiene oficina).
- No generar fotos de personas con IA para reemplazar al equipo — usar avatares neutros como placeholder.
- No dejar el envio de CV atado a WhatsApp — siempre por email.
