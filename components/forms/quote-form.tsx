"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { quoteSchema, type QuoteFormValues } from "@/lib/validations/quote-schema";
import { buildWhatsappLink } from "@/lib/site-config";

function buildQuoteMessage(data: QuoteFormValues) {
  const lines = [
    "Hola MGR, quiero solicitar una cotización.",
    "",
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Email: ${data.email}`,
    `Empresa: ${data.company}`,
  ];
  if (data.message) lines.push(`Información adicional: ${data.message}`);
  return lines.join("\n");
}

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      // Copia por email deshabilitada por el momento (pedido del cliente): la
      // cotización solo se envía por WhatsApp. Descomentar para reactivar el envío
      // en paralelo por /api/send-quote.
      // fetch("/api/send-quote", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // })
      //   .then((res) => {
      //     if (!res.ok) throw new Error("email-failed");
      //   })
      //   .catch(() => {
      //     toast.error(
      //       "Tu solicitud se envió por WhatsApp, pero no pudimos enviar la copia por email."
      //     );
      //   });

      const waLink = buildWhatsappLink(buildQuoteMessage(data));
      window.open(waLink, "_blank", "noopener,noreferrer");
      toast.success("¡Listo! Te redirigimos a WhatsApp para enviar tu solicitud.");
      reset();
    } catch {
      toast.error("Ocurrió un error al enviar tu solicitud. Intentá nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name" className="gap-0 text-sm font-semibold text-brand-navy">
          <span className="mr-1.5 inline-block h-4 w-0.5 rounded-full bg-brand-blue align-middle" />
          Nombre *
        </Label>
        <Input
          id="name"
          placeholder="Ingresá tu nombre completo"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="phone" className="gap-0 text-sm font-semibold text-brand-navy">
          <span className="mr-1.5 inline-block h-4 w-0.5 rounded-full bg-brand-blue align-middle" />
          Teléfono *
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Ingresá tu número de teléfono"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email" className="gap-0 text-sm font-semibold text-brand-navy">
          <span className="mr-1.5 inline-block h-4 w-0.5 rounded-full bg-brand-blue align-middle" />
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Ingresá tu email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="company" className="gap-0 text-sm font-semibold text-brand-navy">
          <span className="mr-1.5 inline-block h-4 w-0.5 rounded-full bg-brand-blue align-middle" />
          Empresa *
        </Label>
        <Input
          id="company"
          placeholder="Ingresá el nombre de tu empresa"
          aria-invalid={!!errors.company}
          {...register("company")}
        />
        {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className="gap-0 text-sm font-semibold text-brand-navy">
          <span className="mr-1.5 inline-block h-4 w-0.5 rounded-full bg-brand-blue align-middle" />
          Información adicional
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Contanos más sobre tus necesidades, tipo de servicio que buscás, horarios preferidos, cantidad de personal requerido, ubicación, etc."
          {...register("message")}
        />
      </div>

      <p className="text-xs text-slate-500">* Campos obligatorios</p>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="h-12 w-full rounded-lg bg-brand-blue text-base text-white hover:bg-brand-blue/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Enviar solicitud
          </>
        )}
      </Button>

      <p className="text-xs leading-relaxed text-slate-500">
        Tus datos serán utilizados únicamente para responder tu consulta y no serán
        compartidos con terceros.
      </p>
    </form>
  );
}
