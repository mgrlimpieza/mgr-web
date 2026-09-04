"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Loader2, Send, Upload, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  applicationSchema,
  jobPositions,
  validateCvFile,
  type ApplicationFormValues,
} from "@/lib/validations/application-schema";

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [position, setPosition] = useState<string>("");
  // Se usa para forzar el remount del <input type="file"> y así limpiar su valor sin refs.
  const [fileInputKey, setFileInputKey] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({ resolver: zodResolver(applicationSchema) });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCvFile(file);
    setCvError(file ? validateCvFile(file) : null);
  };

  const clearFile = () => {
    setCvFile(null);
    setCvError(null);
    setFileInputKey((key) => key + 1);
  };

  const onSubmit = async (data: ApplicationFormValues) => {
    const fileError = validateCvFile(cvFile);
    if (fileError) {
      setCvError(fileError);
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("position", position || data.position || "");
      formData.append("message", data.message ?? "");
      formData.append("cv", cvFile as File);

      const res = await fetch("/api/send-application", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("send-failed");

      toast.success("¡Postulación enviada! Nos pondremos en contacto a la brevedad.");
      reset();
      setPosition("");
      clearFile();
    } catch {
      toast.error(
        "No pudimos enviar tu postulación. Intentá nuevamente o escribinos por WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFormSubmit = handleSubmit(onSubmit);

  return (
    <form onSubmit={onFormSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="app-name" className="text-sm font-semibold text-brand-navy">
          Nombre *
        </Label>
        <Input
          id="app-name"
          placeholder="Ingresá tu nombre completo"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="app-phone" className="text-sm font-semibold text-brand-navy">
            Teléfono *
          </Label>
          <Input
            id="app-phone"
            type="tel"
            placeholder="Ingresá tu teléfono"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="app-email" className="text-sm font-semibold text-brand-navy">
            Email *
          </Label>
          <Input
            id="app-email"
            type="email"
            placeholder="Ingresá tu email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-sm font-semibold text-brand-navy">Puesto de interés</Label>
        <Select value={position} onValueChange={(value) => setPosition(value as string)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccioná un puesto (opcional)" />
          </SelectTrigger>
          <SelectContent>
            {jobPositions.map((job) => (
              <SelectItem key={job} value={job}>
                {job}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="app-message" className="text-sm font-semibold text-brand-navy">
          Mensaje / comentario adicional
        </Label>
        <Textarea
          id="app-message"
          rows={4}
          placeholder="Contanos sobre tu experiencia y disponibilidad"
          {...register("message")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="app-cv" className="text-sm font-semibold text-brand-navy">
          Adjuntar CV *
        </Label>
        <input
          key={fileInputKey}
          id="app-cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={onFileChange}
          className="sr-only"
        />
        {!cvFile ? (
          <label
            htmlFor="app-cv"
            className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-input bg-brand-lightbg/50 px-6 py-8 text-center transition-colors hover:border-brand-blue/50"
          >
            <Upload className="size-6 text-brand-blue" />
            <span className="text-sm font-medium text-brand-navy">
              Hacé clic para adjuntar tu CV
            </span>
            <span className="text-xs text-slate-500">PDF, DOC o DOCX — máximo 5MB</span>
          </label>
        ) : (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-input bg-brand-lightbg/50 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <FileText className="size-5 shrink-0 text-brand-blue" />
              <span className="truncate text-sm text-brand-navy">{cvFile.name}</span>
            </div>
            <button
              type="button"
              onClick={clearFile}
              aria-label="Quitar archivo"
              className="shrink-0 text-slate-400 transition-colors hover:text-destructive"
            >
              <X className="size-4" />
            </button>
          </div>
        )}
        {cvError && <p className="text-xs text-destructive">{cvError}</p>}
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
            Enviar postulación
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
