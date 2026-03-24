"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline" | "large";
  message?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function WhatsAppButton({
  variant = "inline",
  message,
  children,
  className = "",
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);

  if (variant === "floating") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-accent rounded-full shadow-lg hover:bg-accent-dark transition-colors cursor-pointer"
      >
        <span className="absolute w-14 h-14 rounded-full bg-accent animate-pulse-ring" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" fill="white" />
      </a>
    );
  }

  if (variant === "large") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl cursor-pointer ${className}`}
      >
        <MessageCircle className="w-6 h-6" />
        {children || "Quero Minha Análise Gratuita"}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors cursor-pointer ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "Falar no WhatsApp"}
    </a>
  );
}
