import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paraíso Náutico PE | Passeios privativos de lancha",
  description:
    "Passeios privativos de lancha na Praia dos Carneiros com embarque no Píer de Guadalupe."
};

// A pasta app concentra as rotas do Next; esta raiz injeta fontes, metadados e estilos globais.
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
