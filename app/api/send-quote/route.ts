import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteSchema } from "@/lib/validations/quote-schema";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de la solicitud inválido." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return NextResponse.json({ error: "Servicio de email no configurado." }, { status: 500 });
  }

  const { name, phone, email, company, message } = parsed.data;
  const to = siteConfig.notificationEmail;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // TODO: reemplazar por un remitente verificado en el dominio propio (ej. cotizaciones@mgrlimpieza.com.uy)
      from: "MGR Servicios Integrales <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Nueva solicitud de cotización — ${company}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
        ${message ? `<p><strong>Información adicional:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    });

    if (error) {
      console.error("Error de Resend al enviar cotización:", error);
      return NextResponse.json({ error: "No se pudo enviar el email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error inesperado enviando cotización:", err);
    return NextResponse.json({ error: "Error inesperado." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
