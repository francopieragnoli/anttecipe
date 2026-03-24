"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/lib/constants";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span
            className={`text-xl md:text-2xl font-black tracking-tight transition-colors ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            {BRAND.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Como Funciona", href: "#como-funciona" },
            { label: "Benefícios", href: "#beneficios" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-body" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton variant="inline">
          Análise Gratuita
        </WhatsAppButton>
      </div>
    </header>
  );
}
