import { z } from "zod";

export const quoteSchema = z.object({
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
  company: z
    .string()
    .trim()
    .min(2, "Ingresá el nombre de tu empresa")
    .max(100, "El nombre es demasiado largo"),
  message: z.string().trim().max(2000, "El mensaje es demasiado largo").optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
