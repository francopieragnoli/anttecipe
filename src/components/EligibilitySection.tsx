import { CheckCircle } from "lucide-react";
import { ELIGIBILITY_ITEMS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";
import WhatsAppButton from "./WhatsAppButton";

export default function EligibilitySection() {
  return (
    <SectionWrapper id="direito" className="bg-light-bg">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight mb-6">
            Quem tem direito ao{" "}
            <span className="text-primary">auxílio-acidente?</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            O auxílio-acidente é um benefício previsto no{" "}
            <strong>Art. 86 da Lei 8.213/91</strong>, pago pelo INSS ao
            trabalhador segurado que sofre um acidente e fica com sequelas
            permanentes que reduzem sua capacidade de trabalho.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Diferente do auxílio-doença, o auxílio-acidente{" "}
            <strong>pode ser acumulado com o salário</strong>, pois tem
            caráter indenizatório. O valor corresponde a 50% do salário de
            benefício.
          </p>
          <WhatsAppButton variant="large">
            Verificar Meu Direito
          </WhatsAppButton>
        </div>

        <div className="space-y-4">
          {ELIGIBILITY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-highlight/10 rounded-2xl p-6 border border-highlight/20">
            <p className="text-sm text-dark font-medium">
              <strong>Importante:</strong> Mesmo que o acidente tenha ocorrido
              há anos, você ainda pode ter direito ao benefício. Cada caso
              precisa ser analisado individualmente.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
