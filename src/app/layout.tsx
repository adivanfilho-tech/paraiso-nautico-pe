import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Passeio de lancha na Praia dos Carneiros | Paraíso Náutico PE",
  description:
    "Reserve seu passeio de lancha na Praia dos Carneiros e em Guadalupe - PE com roteiro privativo, embarque no Píer de Guadalupe e atendimento por WhatsApp.",
  keywords: [
    "passeio de lancha na Praia dos Carneiros",
    "passeio de lancha em Guadalupe - PE",
    "lancha privativa em Pernambuco",
    "Paraíso Náutico PE"
  ],
  openGraph: {
    title: "Passeio de lancha na Praia dos Carneiros | Paraíso Náutico PE",
    description:
      "Passeios privativos com roteiro em Carneiros, embarque no Píer de Guadalupe e reserva rápida pelo WhatsApp.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Passeio de lancha na Praia dos Carneiros | Paraíso Náutico PE",
    description:
      "Passeios privativos com roteiro em Carneiros, embarque no Píer de Guadalupe e reserva rápida pelo WhatsApp."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
