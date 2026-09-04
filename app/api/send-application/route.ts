import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  applicationSchema,
  validateCvFile,
  MAX_CV_SIZE_BYTES,
} from "@/lib/validations/application-schema";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Cuerpo de la solicitud inválido." }, { status: 400 });
  }

  const fields = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    position: String(formData.get("position") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = applicationSchema.safeParse(fields);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const cv = formData.get("cv");
  if (!(cv instanceof File)) {
    return NextResponse.json({ error: "Adjuntá tu CV." }, { status: 400 });
  }
  const cvValidationError = validateCvFile(cv);
  if (cvValidationError) {
    return NextResponse.json({ error: cvValidationError }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return NextResponse.json({ error: "Servicio de email no configurado." }, { status: 500 });
  }

  const { name, phone, email, position, message } = parsed.data;
  const to = process.env.CONTACT_EMAIL_TO ?? siteConfig.contactEmail;

  try {
    const buffer = Buffer.from(await cv.arrayBuffer());
    if (buffer.byteLength > MAX_CV_SIZE_BYTES) {
      return NextResponse.json({ error: "El archivo no puede superar los 5MB" }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // TODO: reemplazar por un remitente verificado en el dominio propio (ej. rrhh@mgrlimpieza.com.uy)
      from: "MGR Servicios Integrales <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Nueva postulación${position ? ` — ${position}` : ""} — ${name}`,
      html: `
        <h2>Nueva postulación para trabajar en MGR</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${position ? `<p><strong>Puesto de interés:</strong> ${escapeHtml(position)}</p>` : ""}
        ${message ? `<p><strong>Mensaje:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
      attachments: [
        {
          filename: cv.name || "cv.pdf",
          content: buffer,
        },
      ],
    });

    if (error) {
      console.error("Error de Resend al enviar postulación:", error);
      return NextResponse.json({ error: "No se pudo enviar el email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error inesperado enviando postulación:", err);
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
