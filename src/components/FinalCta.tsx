import { Clock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <SectionWrapper id="contato" dark>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/20 rounded-full mb-6">
            <Clock className="w-4 h-4 text-highlight" />
            <span className="text-sm text-highlight font-medium">
              Prazo prescricional pode estar se esgotando
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Não deixe seus direitos{" "}
            <span className="text-highlight">prescreverem</span>
          </h2>

          <p className="text-lg text-white/70 leading-relaxed mb-6">
            Cada dia que passa é dinheiro que você deixa de receber. O prazo
            para reivindicar seus direitos pode estar se esgotando. Fale com
            um especialista agora mesmo e descubra quanto você pode receber.
          </p>

          <ul className="space-y-3 text-white/80">
            {[
              "Análise gratuita e sem compromisso",
              "Você só paga se ganhar",
              "Atendimento em todo Brasil",
              "Resposta em até 24 horas",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <LeadForm />
      </div>
    </SectionWrapper>
  );
}
