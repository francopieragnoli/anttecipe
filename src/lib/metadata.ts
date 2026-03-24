import { FAQ_ITEMS } from "./constants";

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getLegalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Anttecipe",
    description:
      "Assessoria jurídica especializada em auxílio-acidente e benefícios INSS",
    areaServed: {
      "@type": "Country",
      name: "BR",
    },
    serviceType: "Assessoria Previdenciária",
    priceRange: "Gratuito - Só paga se ganhar",
    knowsAbout: [
      "Auxílio-acidente",
      "Direito Previdenciário",
      "INSS",
      "Benefícios Previdenciários",
    ],
  };
}
