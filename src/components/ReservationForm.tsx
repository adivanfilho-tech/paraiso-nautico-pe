"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { CalendarDays, MessageCircle, Sailboat, Send, Users } from "lucide-react";

type ReservationFormData = {
  name: string;
  whatsapp: string;
  date: string;
  people: number;
  boat: string;
  notes: string;
};

const boats = ["Lancha Compacta", "Lancha Intermediária", "Lancha Premium"];
const whatsappBaseUrl = "https://wa.me/5581997762188";

export function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ReservationFormData>({
    defaultValues: {
      boat: "Lancha Intermediária",
      people: 2
    }
  });

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  function onSubmit(data: ReservationFormData) {
    const message = [
      "Olá! Gostaria de consultar disponibilidade para um passeio de lancha na Praia dos Carneiros.",
      "",
      `Nome: ${data.name}`,
      `WhatsApp: ${data.whatsapp}`,
      `Data desejada: ${data.date}`,
      `Quantidade de pessoas: ${data.people}`,
      `Lancha escolhida: ${data.boat}`,
      `Observações: ${data.notes || "Sem observações"}`,
      "",
      "Embarque: Píer de Guadalupe – Praia dos Carneiros – PE"
    ].join("\n");

    window.open(`${whatsappBaseUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[8px] border border-navy/10 bg-white p-5 shadow-soft sm:p-6"
    >
      <div className="mb-6">
        <p className="eyebrow">Reserva rápida</p>
        <h3 className="mt-2 text-2xl font-black text-navy">Consultar disponibilidade</h3>
        <p className="mt-2 text-sm leading-6 text-navy/70">
          Envie os dados e continue a conversa direto no WhatsApp da equipe.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="text-sm font-bold text-navy">Nome</span>
          <input
            className="focus-ring mt-2 w-full rounded-[8px] border border-navy/20 px-4 py-3 text-navy placeholder:text-navy/40"
            placeholder="Seu nome"
            {...register("name", { required: "Informe seu nome" })}
          />
          {errors.name && <span className="mt-1 block text-sm text-red-600">{errors.name.message}</span>}
        </label>

        <label>
          <span className="flex items-center gap-2 text-sm font-bold text-navy">
            <MessageCircle size={16} /> WhatsApp
          </span>
          <input
            className="focus-ring mt-2 w-full rounded-[8px] border border-navy/20 px-4 py-3 text-navy placeholder:text-navy/40"
            placeholder="(81) 99999-9999"
            {...register("whatsapp", { required: "Informe seu WhatsApp" })}
          />
          {errors.whatsapp && <span className="mt-1 block text-sm text-red-600">{errors.whatsapp.message}</span>}
        </label>

        <label>
          <span className="flex items-center gap-2 text-sm font-bold text-navy">
            <CalendarDays size={16} /> Data desejada
          </span>
          <input
            type="date"
            min={today}
            className="focus-ring mt-2 w-full rounded-[8px] border border-navy/20 px-4 py-3 text-navy"
            {...register("date", { required: "Escolha uma data" })}
          />
          {errors.date && <span className="mt-1 block text-sm text-red-600">{errors.date.message}</span>}
        </label>

        <label>
          <span className="flex items-center gap-2 text-sm font-bold text-navy">
            <Users size={16} /> Pessoas
          </span>
          <input
            type="number"
            min={1}
            max={14}
            className="focus-ring mt-2 w-full rounded-[8px] border border-navy/20 px-4 py-3 text-navy"
            {...register("people", {
              required: "Informe a quantidade",
              valueAsNumber: true,
              min: { value: 1, message: "Mínimo de 1 pessoa" },
              max: { value: 14, message: "Máximo de 14 passageiros" }
            })}
          />
          {errors.people && <span className="mt-1 block text-sm text-red-600">{errors.people.message}</span>}
        </label>

        <label>
          <span className="flex items-center gap-2 text-sm font-bold text-navy">
            <Sailboat size={16} /> Lancha
          </span>
          <select
            className="focus-ring mt-2 w-full rounded-[8px] border border-navy/20 bg-white px-4 py-3 text-navy"
            {...register("boat", { required: true })}
          >
            {boats.map((boat) => (
              <option key={boat}>{boat}</option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="text-sm font-bold text-navy">Observações</span>
          <textarea
            rows={4}
            className="focus-ring mt-2 w-full resize-none rounded-[8px] border border-navy/20 px-4 py-3 text-navy placeholder:text-navy/40"
            placeholder="Horário preferido, ocasião especial ou dúvidas"
            {...register("notes")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-sun px-5 py-4 text-sm font-black uppercase tracking-wide text-navy transition hover:bg-turquoise hover:text-white disabled:opacity-70"
      >
        <Send size={18} />
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
