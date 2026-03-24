import { WHATSAPP_NUMBER } from "./constants";

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage =
    "Olá! Gostaria de fazer uma análise gratuita do meu caso de auxílio-acidente.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getWhatsAppUrlWithLead(name: string, phone: string, description?: string): string {
  const message = `Olá! Meu nome é ${name}, meu telefone é ${phone}.${description ? ` ${description}` : ""} Gostaria de uma análise gratuita do meu caso de auxílio-acidente.`;
  return getWhatsAppUrl(message);
}
