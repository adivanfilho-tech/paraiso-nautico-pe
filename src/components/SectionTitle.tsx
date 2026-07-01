// Componente reutilizável para títulos e descrições das seções.
export default function SectionTitle({
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
