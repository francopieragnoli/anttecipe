import { MessageCircle, FileText, CheckCircle } from "lucide-react";
import { STEPS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";
import WhatsAppButton from "./WhatsAppButton";

const iconMap = {
  MessageCircle,
  FileText,
  CheckCircle,
} as const;

export default function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight">
          Como funciona?
        </h2>
        <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
          Três passos simples para você conquistar seu direito
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {STEPS.map((step) => {
          const Icon = iconMap[step.icon];
          return (
            <div key={step.number} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-bold text-primary mb-2 tracking-wider">
                PASSO {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <WhatsAppButton variant="large">
          Falar com Especialista
        </WhatsAppButton>
      </div>
    </SectionWrapper>
  );
}
