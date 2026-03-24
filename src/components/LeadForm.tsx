"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { getWhatsAppUrlWithLead } from "@/lib/whatsapp";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);

    // Send to API (Google Sheets)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, description }),
      });
    } catch {
      // Silently fail - WhatsApp is the primary channel
    }

    // Open WhatsApp
    const url = getWhatsAppUrlWithLead(name, phone, description);
    window.open(url, "_blank");

    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Mensagem enviada!
        </h3>
        <p className="text-white/70">
          Nosso time entrará em contato em breve. Verifique seu WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-4"
    >
      <h3 className="text-xl font-bold text-white mb-2">
        Solicite sua análise gratuita
      </h3>
      <p className="text-white/60 text-sm mb-4">
        Preencha seus dados e fale diretamente com um especialista.
      </p>

      <input
        type="text"
        placeholder="Seu nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
      />

      <input
        type="tel"
        placeholder="Seu telefone com DDD"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
      />

      <textarea
        placeholder="Descreva brevemente seu caso (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" />
            Quero Minha Análise Gratuita
          </>
        )}
      </button>

      <p className="text-white/40 text-xs text-center">
        Seus dados estão seguros. Não compartilhamos suas informações.
      </p>
    </form>
  );
}
