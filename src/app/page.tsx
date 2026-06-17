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

const trustItems = [
  "Atendimento direto pelo WhatsApp",
  "Reserva confirmada com sinal",
  "Passeio privativo para o seu grupo"
];

const experiencePoints = [
  {
    title: "Planejado para grupos reais",
    description: "Escolha a lancha conforme o tamanho da turma e receba a indicação ideal para sua data.",
    icon: Users
  },
  {
    title: "Roteiro fotogênico",
    description: "Bancos de areia, piscinas naturais, capela, manguezais e paradas perfeitas para fotos.",
    icon: Camera
  },
  {
    title: "Operação clara e simples",
    description: "Valores sob consulta, confirmação rápida e embarque alinhado no Píer de Guadalupe.",
    icon: ShieldCheck
  }
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
      <h2 className="font-display mt-3 text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-navy/70">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden text-navy">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      >
        <MessageCircle size={28} />
      </a>

      <section className="relative isolate min-h-screen overflow-hidden bg-navy text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85')"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,200,87,0.35),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(0,180,216,0.25),_transparent_30%),linear-gradient(135deg,rgba(11,60,93,0.98)_0%,rgba(11,60,93,0.86)_55%,rgba(0,180,216,0.35)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

        <nav className="section-shell relative z-10 flex items-center justify-between py-5">
          <a href="#inicio" className="flex items-center gap-3 font-black tracking-wide">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sun text-navy shadow-soft">
              <Anchor size={22} />
            </span>
            <span>Paraíso Náutico PE</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-white/75 md:flex">
            <a href="#frota" className="transition hover:text-white">
              Frota
            </a>
            <a href="#roteiro" className="transition hover:text-white">
              Roteiro
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </div>
          <a
            href="#contato"
            className="focus-ring hidden rounded-full bg-white px-4 py-3 text-sm font-black text-navy transition hover:bg-sun sm:inline-flex"
          >
            Reservar agora
          </a>
        </nav>

        <div id="inicio" className="section-shell relative z-10 grid min-h-[calc(100vh-84px)] items-center gap-10 pb-14 pt-4 lg:grid-cols-[1.04fr_.96fr]">
          <div className="max-w-3xl animate-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-xl">
              <Sparkles size={16} className="text-sun" />
              Passeio privativo na Praia dos Carneiros
            </p>
            <h1 className="font-display mt-6 text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-[5.25rem]">
              Seu dia no mar, com a estética de uma experiência premium.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Roteiro de 2 horas com embarque no Píer de Guadalupe, passando por piscinas naturais,
              bancos de areia, manguezais e pontos clássicos da região.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-4 font-black text-navy transition hover:-translate-y-0.5 hover:bg-white"
              >
                Consultar disponibilidade <ArrowRight size={18} />
              </a>
              <a
                href="#roteiro"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 font-black text-white transition hover:bg-white hover:text-navy"
              >
                Ver roteiro <Compass size={18} />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item} className="glass-panel rounded-2xl px-4 py-3 text-sm font-bold text-white shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="animate-float lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-soft backdrop-blur-xl">
              <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-sun/20 blur-3xl" />
              <div className="absolute bottom-8 right-4 h-48 w-48 rounded-full bg-turquoise/20 blur-3xl" />
              <Image
                src="/images/boat-line.svg"
                alt="Ilustração de lancha em estilo minimalista"
                width={960}
                height={560}
                className="relative z-10 h-auto w-full rounded-[24px]"
              />
              <div className="relative z-10 grid gap-3 pt-4 sm:grid-cols-3">
                {[
                  ["6 horas", "Experiência completa"],
                  ["Privativo", "Para o seu grupo"],
                  ["Até 14", "passageiros + marinheiro"]
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-navy/40 p-3 text-center backdrop-blur">
                    <div className="text-base font-black text-white">{title}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/65">{subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[28px] p-5 text-navy shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-turquoise">Atendimento</p>
                <p className="mt-3 text-2xl font-black">Resposta rápida pelo WhatsApp</p>
                <p className="mt-2 text-sm leading-6 text-navy/70">
                  Envie data, quantidade de pessoas e receba a melhor opção de lancha.
                </p>
              </div>
              <div className="glass-panel rounded-[28px] p-5 text-navy shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-turquoise">Formato</p>
                <p className="mt-3 text-2xl font-black">Passeio exclusivo e sem complicação</p>
                <p className="mt-2 text-sm leading-6 text-navy/70">
                  Concentra o essencial em uma jornada curta, visual e prática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/80 py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="eyebrow">Sobre a experiência</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-navy sm:text-5xl">
              Um passeio privativo, leve e sob medida para o seu grupo.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-navy/75">
              A Paraíso Náutico PE conecta você aos cenários mais desejados de Carneiros com conforto,
              praticidade e atendimento direto pelo WhatsApp.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card-hover rounded-[28px] bg-white p-5 shadow-sm">
                  <Icon className="text-turquoise" size={30} />
                  <h3 className="mt-4 text-xl font-black text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[36px] p-5 shadow-soft">
            <div className="grid gap-4 md:grid-cols-3">
              {experiencePoints.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[28px] bg-white p-5 shadow-sm">
                  <Icon className="text-turquoise" size={26} />
                  <h3 className="mt-4 text-xl font-black text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy/70">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[28px] bg-[linear-gradient(135deg,rgba(11,60,93,0.96)_0%,rgba(11,60,93,0.88)_50%,rgba(0,180,216,0.92)_100%)] p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sun">Resumo</p>
              <p className="mt-3 max-w-2xl text-2xl font-black leading-tight sm:text-3xl">
                Tudo foi desenhado para reduzir atrito e deixar a decisão de reserva simples.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
                {[
                  "Atendimento por WhatsApp",
                  "Embarque no Píer de Guadalupe",
                  "Reserva mediante sinal"
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
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
              <article key={boat.name} className="card-hover rounded-[32px] border border-navy/10 bg-white p-6 shadow-sm">
                <span className={`block h-2 w-20 rounded-full ${boat.accent}`} />
                <h3 className="font-display mt-6 text-3xl font-bold text-navy">{boat.name}</h3>
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
          <Image
            src="/images/route-map.svg"
            alt="Mapa temporário do roteiro"
            width={960}
            height={720}
            className="rounded-[32px] border border-white/10 shadow-soft"
          />
          <div>
            <p className="eyebrow text-sun">Roteiro</p>
            <h2 className="font-display mt-3 text-4xl font-bold sm:text-5xl">Os cartões-postais de Carneiros no mesmo passeio.</h2>
            <div className="mt-8 grid gap-4 overflow-x-auto pb-2 [scrollbar-width:none] md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
              {route.map(({ name, description, image, icon: Icon }) => (
                <article
                  key={name}
                  className="group flex min-w-[84%] snap-start flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/8 shadow-soft backdrop-blur transition duration-300 ease-out hover:-translate-y-1 hover:shadow-soft md:min-w-0"
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
              <div key={title} className="rounded-[28px] bg-sand p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-black text-navy">{title}</h3>
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
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={index === 0 ? 1200 : 900}
                height={index === 0 ? 900 : 700}
                className={`h-full w-full rounded-[28px] object-cover shadow-soft ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-navy sm:text-5xl">Dúvidas frequentes</h2>
            <p className="mt-4 leading-8 text-navy/70">
              As informações essenciais para consultar, reservar e aproveitar o passeio.
            </p>
          </div>
          <div className="space-y-3">
            {faq.map(([question, answer]) => (
              <details key={question} className="group rounded-[28px] border border-navy/10 bg-white p-5 shadow-sm">
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
          <div className="rounded-[32px] bg-navy p-6 text-white shadow-soft sm:p-8">
            <p className="eyebrow text-sun">Contato</p>
            <h2 className="font-display mt-3 text-4xl font-bold sm:text-5xl">Reserve seu passeio privativo em Carneiros.</h2>
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
