import { Award, Users, Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const STATS = [
  { icon: Briefcase, value: "+10 anos", label: "De experiência" },
  { icon: Users, value: "+5.000", label: "Clientes atendidos" },
  { icon: Award, value: "97%", label: "Taxa de sucesso" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="sobre">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Visual placeholder */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <div className="grid grid-cols-1 gap-6">
                {STATS.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <div className="text-left">
                        <div className="text-xl font-black text-dark">{stat.value}</div>
                        <div className="text-sm text-muted">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight mb-6">
            A assessoria{" "}
            <span className="text-primary">mais confiável</span> para
            seu auxílio-acidente
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Somos uma equipe multidisciplinar de advogados, peritos e
            consultores especializados exclusivamente em direito
            previdenciário. Há mais de 10 anos ajudamos trabalhadores
            brasileiros a conquistarem os benefícios que o INSS insiste em
            negar.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Nossa abordagem combina conhecimento jurídico aprofundado com
            atendimento humanizado. Cada caso é tratado com a atenção e o
            cuidado que merece, porque sabemos que por trás de cada processo
            existe uma pessoa e uma família.
          </p>
          <ul className="space-y-3">
            {[
              "Registro ativo na OAB",
              "Equipe multidisciplinar (advogados + peritos)",
              "Atendimento em todo território nacional",
              "Mais de R$ 50 milhões recuperados para nossos clientes",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-body">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
