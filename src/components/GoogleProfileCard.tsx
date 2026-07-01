import SectionTitle from "@/components/SectionTitle";

type GoogleProfileCardProps = {
  href: string;
};

export default function GoogleProfileCard({ href }: GoogleProfileCardProps) {
  return (
    <section id="google-profile" className="bg-sand/80 py-16 sm:py-24">
      {/* Seção nova: Encontre-nos no Google */}
      <div className="section-shell">
        <SectionTitle
          eyebrow="Encontre-nos no Google"
          title="Em breve avaliações reais no Perfil da Empresa"
          description="Os clientes poderão consultar avaliações reais no Perfil da Empresa do Google assim que estiver disponível."
        />

        <div className="mt-10 rounded-[32px] border border-navy/10 bg-white p-8 shadow-soft">
          <p className="max-w-2xl text-lg leading-8 text-navy/75">
            Estamos preparando o perfil da Paraíso Náutico PE no Google para que você veja opiniões verdadeiras de quem já viajou com a gente.
          </p>
          {/* Substitua '#' pelo link do Perfil da Empresa no Google quando o perfil estiver público */}
          <a
            href={href}
            className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-navy px-6 py-4 font-black text-white transition hover:bg-turquoise"
          >
            Perfil da Empresa no Google
          </a>
        </div>
      </div>
    </section>
  );
}
