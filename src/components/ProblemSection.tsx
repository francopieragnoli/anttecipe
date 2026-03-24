import { AlertTriangle } from "lucide-react";
import { PAIN_STATS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

export default function ProblemSection() {
  return (
    <SectionWrapper id="problema" className="bg-light-bg">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight mb-6">
            O INSS nega milhares de benefícios{" "}
            <span className="text-primary">todos os anos</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Você sofreu um acidente de trabalho, uma doença ocupacional ou um
            acidente de qualquer natureza e ficou com sequelas? O INSS tem o
            dever de conceder o auxílio-acidente, mas na prática, a maioria dos
            pedidos é negada na primeira tentativa.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Muitos trabalhadores desistem por não conhecerem seus direitos ou
            por não terem orientação especializada.{" "}
            <strong className="text-dark">Não seja um deles.</strong>
          </p>
        </div>

        <div className="space-y-4">
          {PAIN_STATS.map((stat) => (
            <div
              key={stat.value}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-highlight/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <div>
                <div className="text-2xl font-black text-dark">{stat.value}</div>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
