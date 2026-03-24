import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { getFaqJsonLd, getLegalServiceJsonLd } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auxílio-Acidente | Anttecipe - Advogado Especialista INSS - Análise Gratuita",
  description:
    "Teve o auxílio-acidente negado pelo INSS? Nossos especialistas recuperam seu benefício. Análise gratuita e você só paga se ganhar. +5.000 clientes atendidos.",
  keywords: [
    "auxílio-acidente",
    "advogado INSS",
    "benefício INSS negado",
    "auxílio acidente de trabalho",
    "advogado previdenciário",
    "INSS negou meu benefício",
    "auxílio-acidente valor",
    "como pedir auxílio-acidente",
    "doença ocupacional INSS",
    "acidente de trabalho benefício",
  ],
  openGraph: {
    title: "Auxílio-Acidente | Anttecipe - Análise Gratuita",
    description:
      "Recupere o auxílio-acidente que o INSS negou. Análise gratuita, só paga se ganhar. +5.000 clientes atendidos com 97% de aprovação.",
    type: "website",
    locale: "pt_BR",
    siteName: "Anttecipe",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLegalServiceJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFaqJsonLd()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] antialiased bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
