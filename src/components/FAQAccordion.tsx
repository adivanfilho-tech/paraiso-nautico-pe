import { ArrowRight, HelpCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <section id="faq" className="py-16 sm:py-24">
      {/* Seção nova: Perguntas frequentes em formato sanfona */}
      <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionTitle
            eyebrow="FAQ"
            title="Dúvidas frequentes"
            description="As informações essenciais para consultar, reservar e aproveitar o passeio."
          />
        </div>

        <div className="space-y-3">
          {items.map(({ question, answer }) => (
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
  );
}
