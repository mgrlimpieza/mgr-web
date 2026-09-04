import { z } from "zod";

export const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export const ACCEPTED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];
export const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

// Los campos de texto se validan con react-hook-form + zod. El archivo del CV
// se valida aparte (ver validateCvFile) porque los inputs de archivo no
// exponen un File de forma directa al resolver de react-hook-form.
export const applicationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre completo")
    .max(100, "El nombre es demasiado largo"),
  phone: z
    .string()
    .trim()
    .min(6, "Ingresá un teléfono válido")
    .max(20, "El teléfono es demasiado largo")
    .regex(/^[0-9+()\s-]+$/, "Ingresá un teléfono válido"),
  email: z.string().trim().min(1, "Ingresá tu email").email("Ingresá un email válido"),
  position: z.string().trim().max(100).optional(),
  message: z.string().trim().max(2000, "El mensaje es demasiado largo").optional(),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;

export function validateCvFile(file: File | null | undefined): string | null {
  if (!file || file.size === 0) return "Adjuntá tu CV";
  if (file.size > MAX_CV_SIZE_BYTES) return "El archivo no puede superar los 5MB";
  const hasValidExtension = ACCEPTED_CV_EXTENSIONS.some((ext) =>
    file.name.toLowerCase().endsWith(ext)
  );
  if (!ACCEPTED_CV_TYPES.includes(file.type) && !hasValidExtension) {
    return "Formato no admitido. Usá PDF, DOC o DOCX";
  }
  return null;
}

export const jobPositions = [
  "Personal de limpieza",
  "Portería / conserjería",
  "Supervisión",
  "Administración",
  "Otro",
] as const;
