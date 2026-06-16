import {
  Camera,
  Anchor,
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  HelpCircle,
  MapPin,
  MessageCircle,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Star,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { ReservationForm } from "@/components/ReservationForm";

const whatsappUrl =
  "https://wa.me/5581997762188?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20um%20passeio%20de%20lancha%20na%20Praia%20dos%20Carneiros.";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Mar turquesa e faixa de areia"
  },
  {
    src: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=900&q=80",
    alt: "Lancha navegando em águas claras"
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "Praia tropical com vegetação"
  },
  {
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80",
    alt: "Costa ensolarada vista do mar"
  }
];

const fleet = [
  {
    name: "Lancha Compacta",
    capacity: "Até 9 passageiros + marinheiro",
    bestFor: "Casais, famílias pequenas e grupos enxutos",
    accent: "bg-turquoise"
  },
  {
    name: "Lancha Intermediária",
    capacity: "Até 10 passageiros + marinheiro",
    bestFor: "Grupos que querem mais conforto e espaço",
    accent: "bg-sun"
  },
  {
    name: "Lancha Premium",
    capacity: "Até 14 passageiros + marinheiro",
    bestFor: "Celebrações, grupos maiores e experiências completas",
    accent: "bg-navy"
  }
];

const route = [
  {
    name: "Capela de São Benedito",
    description: "Um dos cartões-postais mais tradicionais de Carneiros, cercado por mar calmo.",
    image: "/images/roteiro/capela-sao-benedito.jpg",
    icon: Anchor
  },
  {
    name: "Bancos de areia",
    description: "Parada para caminhar na maré baixa e observar a cor da água mudar ao redor.",
    image: "/images/roteiro/bancos-areia.jpg",
    icon: Compass
  },
  {
    name: "Praia da Argila",
    description: "Trecho famoso pelas formações naturais e pela paisagem diferente da rota.",
    image: "/images/roteiro/praia-argila.jpg",
    icon: Sparkles
  },
  {
    name: "Píer de Guadalupe",
    description: "Ponto de embarque e referência da experiência, com vista privilegiada do litoral.",
    image: "/images/roteiro/pier-guadalupe.jpg",
    icon: MapPin
  },
  {
    name: "Batalha do Reduto",
    description: "Trecho de história e paisagem, ideal para fotos durante o trajeto.",
    image: "/images/roteiro/batalha-reduto.jpg",
    icon: Sailboat
  },
  {
    name: "Manguezais",
    description: "Passeio por áreas de natureza preservada, com cenário tranquilo e autêntico.",
    image: "/images/roteiro/manguezais.jpg",
    icon: CheckCircle2
  },
  {
    name: "Piscinas naturais",
    description: "Momento mais procurado do roteiro, com água cristalina e parada relaxante.",
    image: "/images/roteiro/piscinas-naturais.jpg",
    icon: Camera
  }
];

const steps = [
  ["Escolha", "Informe data, quantidade de pessoas e lancha desejada."],
  ["Confirme", "A equipe consulta disponibilidade e passa os valores sob consulta."],
  ["Reserve", "A reserva é confirmada mediante pagamento de sinal."],
  ["Embarque", "Encontre o marinheiro no Píer de Guadalupe e aproveite 2 horas no mar."]
];

const faq = [
  ["O passeio é privativo?", "Sim. A lancha é reservada para o seu grupo, com marinheiro incluso."],
  ["Qual é a duração?", "O passeio tem duração média de 2 horas."],
  ["Onde acontece o embarque?", "No Píer de Guadalupe, na Praia dos Carneiros, Pernambuco."],
  ["Como funcionam os valores?", "Os valores são sob consulta e variam conforme a quantidade de pessoas e a lancha escolhida."],
  ["Como confirmo minha reserva?", "Após consultar disponibilidade, a reserva é confirmada mediante pagamento de sinal."]
];

const highlights: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Clock, title: "Duração", text: "2 horas de passeio" },
  { icon: MapPin, title: "Embarque", text: "Píer de Guadalupe" },
  { icon: ShieldCheck, title: "Reserva", text: "Confirmada com sinal" }
];

const contactItems: Array<{ icon: LucideIcon; text: string }> = [
  { icon: MessageCircle, text: "+55 81 99776-2188" },
  { icon: MapPin, text: "Píer de Guadalupe – Praia dos Carneiros – PE" },
  { icon: Clock, text: "Duração: 2 horas" },
  { icon: Sailboat, text: "Passeio privativo com valores sob consulta" }
];

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-navy/70">{description}</p>
    </div>
  );
}

// Esta página concentra a landing page inteira; os arrays acima alimentam seções repetidas sem espalhar conteúdo pelo JSX.
export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      >
        <MessageCircle size={28} />
      </a>

      <section className="relative min-h-[92vh] bg-navy text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-turquoise/50" />
        <nav className="section-shell relative z-10 flex items-center justify-between py-5">
          <a href="#inicio" className="flex items-center gap-3 font-black">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sun text-navy">
              <Anchor size={22} />
            </span>
            <span>Paraíso Náutico PE</span>
          </a>
          <a
            href="#contato"
            className="focus-ring hidden rounded-[8px] bg-white px-4 py-3 text-sm font-black text-navy transition hover:bg-sun sm:inline-flex"
          >
            Reservar agora
          </a>
        </nav>

        <div id="inicio" className="section-shell relative z-10 grid min-h-[calc(92vh-84px)] items-center gap-10 pb-14 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-3xl animate-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              <Sparkles size={16} className="text-sun" />
              Passeio privativo na Praia dos Carneiros
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Sua lancha exclusiva para viver Carneiros pelo mar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Roteiro de 2 horas com embarque no Píer de Guadalupe, passando por piscinas naturais,
              bancos de areia, manguezais e pontos clássicos da região.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-[8px] bg-sun px-6 py-4 font-black text-navy transition hover:bg-white"
              >
                Consultar disponibilidade <ArrowRight size={18} />
              </a>
              <a
                href="#roteiro"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/30 px-6 py-4 font-black text-white transition hover:bg-white hover:text-navy"
              >
                Ver roteiro <Compass size={18} />
              </a>
            </div>
          </div>

          <div className="animate-float rounded-[8px] border border-white/20 bg-white/10 p-4 backdrop-blur">
            <img
              src="/images/boat-line.svg"
              alt="Ilustração temporária de lancha"
              className="h-auto w-full rounded-[8px]"
            />
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {["2 horas", "Privativo", "Até 14 pessoas"].map((item) => (
                <div key={item} className="rounded-[8px] bg-white/10 p-3 text-center text-sm font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Sobre a experiência</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">
              Um passeio privativo, leve e sob medida para o seu grupo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-navy/75">
              A Paraíso Náutico PE conecta você aos cenários mais desejados de Carneiros com conforto,
              praticidade e atendimento direto pelo WhatsApp.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-hover rounded-[8px] bg-white p-5">
                <Icon className="text-turquoise" size={30} />
                <h3 className="mt-4 font-black text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="frota" className="py-16 sm:py-24">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Frota"
            title="Escolha a lancha ideal para o seu grupo"
            description="Todas as opções são privativas e incluem marinheiro. Os valores são consultados conforme quantidade de pessoas."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {fleet.map((boat) => (
              <article key={boat.name} className="card-hover rounded-[8px] border border-navy/10 bg-white p-6">
                <span className={`block h-2 w-20 rounded-full ${boat.accent}`} />
                <h3 className="mt-6 text-2xl font-black text-navy">{boat.name}</h3>
                <p className="mt-3 flex items-center gap-2 font-bold text-navy/80">
                  <Users size={18} className="text-turquoise" /> {boat.capacity}
                </p>
                <p className="mt-4 leading-7 text-navy/70">{boat.bestFor}</p>
                <a href="#contato" className="mt-6 inline-flex items-center gap-2 font-black text-turquoise">
                  Consultar esta lancha <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roteiro" className="bg-navy py-16 text-white sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <img src="/images/route-map.svg" alt="Mapa temporário do roteiro" className="rounded-[8px] shadow-soft" />
          <div>
            <p className="eyebrow text-sun">Roteiro</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Os cartões-postais de Carneiros no mesmo passeio.</h2>
            <div className="mt-8 grid gap-4 overflow-x-auto pb-2 [scrollbar-width:none] md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
              {route.map(({ name, description, image, icon: Icon }) => (
                <article
                  key={name}
                  className="group flex min-w-[84%] snap-start flex-col overflow-hidden rounded-[8px] border border-white/10 bg-white/8 shadow-soft backdrop-blur transition duration-300 ease-out hover:-translate-y-1 hover:shadow-soft md:min-w-0"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 767px) 84vw, (max-width: 1279px) 45vw, 30vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-black text-navy shadow-sm">
                      <Icon size={16} className="text-turquoise" />
                      Parada
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col bg-white p-5 text-navy">
                    <h3 className="text-xl font-black">{name}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy/70">{description}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-black text-turquoise">
                      <CheckCircle2 size={18} />
                      Roteiro do passeio
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Como funciona"
            title="Da consulta ao embarque, sem complicação"
            description="O fluxo foi pensado para você resolver tudo pelo WhatsApp e chegar ao píer com a reserva alinhada."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-[8px] bg-sand p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-navy/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-sand py-16 sm:py-24">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Galeria"
            title="Imagens temporárias para visualizar o clima do passeio"
            description="As fotos do Unsplash funcionam como placeholders e podem ser trocadas pelas imagens reais da operação quando estiverem disponíveis."
          />
          <div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`h-full w-full rounded-[8px] object-cover shadow-soft ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Dúvidas frequentes</h2>
            <p className="mt-4 leading-8 text-navy/70">
              As informações essenciais para consultar, reservar e aproveitar o passeio.
            </p>
          </div>
          <div className="space-y-3">
            {faq.map(([question, answer]) => (
              <details key={question} className="group rounded-[8px] border border-navy/10 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-navy">
                  <span className="flex items-center gap-2">
                    <HelpCircle size={18} className="text-turquoise" /> {question}
                  </span>
                  <ArrowRight className="shrink-0 transition group-open:rotate-90" size={18} />
                </summary>
                <p className="mt-4 leading-7 text-navy/70">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[url('/images/wave-pattern.svg')] bg-cover bg-center py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="rounded-[8px] bg-navy p-6 text-white shadow-soft sm:p-8">
            <p className="eyebrow text-sun">Contato</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Reserve seu passeio privativo em Carneiros.</h2>
            <div className="mt-8 space-y-4">
              {contactItems.map(({ icon: Icon, text }) => (
                <p key={text} className="flex items-start gap-3 leading-7">
                  <Icon className="mt-1 shrink-0 text-sun" size={20} />
                  <span>{text}</span>
                </p>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] bg-white/10 p-5">
              <p className="flex items-center gap-2 font-black">
                <Star className="text-sun" size={19} />
                Dica
              </p>
              <p className="mt-2 leading-7 text-white/80">
                Informe a quantidade de pessoas para receber a indicação de lancha mais adequada.
              </p>
            </div>
          </div>
          <ReservationForm />
        </div>
      </section>

      <footer className="bg-navy px-4 py-8 text-center text-sm text-white/70">
        <p>© 2026 Paraíso Náutico PE. Passeios privativos de lancha na Praia dos Carneiros.</p>
      </footer>
    </main>
  );
}
