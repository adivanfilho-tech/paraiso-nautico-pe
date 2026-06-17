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
  title: "Paraíso Náutico PE | Passeios privativos de lancha em Carneiros",
  description:
    "Landing page moderna para reservas de passeios privativos de lancha na Praia dos Carneiros com embarque no Píer de Guadalupe.",
  openGraph: {
    title: "Paraíso Náutico PE | Passeios privativos de lancha em Carneiros",
    description:
      "Passeios privativos com roteiro em Carneiros, atendimento por WhatsApp e reserva rápida.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraíso Náutico PE | Passeios privativos de lancha em Carneiros",
    description:
      "Passeios privativos com roteiro em Carneiros, atendimento por WhatsApp e reserva rápida."
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
