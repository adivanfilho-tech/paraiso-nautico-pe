import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type ChooseReason = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ChooseReasonsProps = {
  items: ChooseReason[];
};

export default function ChooseReasons({ items }: ChooseReasonsProps) {
  return (
    <section id="por-que-escolher" className="py-16 sm:py-24">
      {/* Seção nova: Por que escolher o Paraíso Náutico PE? */}
      <div className="section-shell">
        <SectionTitle
          eyebrow="Por que escolher o Paraíso Náutico PE?"
          title="Experiência premium com atendimento dedicado"
          description="Quatro motivos para escolher um passeio privativo com embarque no Píer de Guadalupe."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-hover rounded-[32px] border border-navy/10 bg-white p-6 shadow-sm">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sun/10 text-sun">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-navy/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
