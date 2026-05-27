import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59JL74SZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59JL74SZ');`,
          }}
        />
      </body>
    </html>
  );
}
