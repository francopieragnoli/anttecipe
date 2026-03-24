import {
  Gift,
  ShieldCheck,
  Heart,
  Scale,
  Clock,
  Lock,
} from "lucide-react";
import { BENEFITS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

const iconMap = {
  Gift,
  ShieldCheck,
  Heart,
  Scale,
  Clock,
  Lock,
} as const;

export default function BenefitsGrid() {
  return (
    <SectionWrapper id="beneficios" className="bg-light-bg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight">
          Por que mais de 5.000 pessoas{" "}
          <span className="text-primary">confiam em nós</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {BENEFITS.map((benefit) => {
          const Icon = iconMap[benefit.icon];
          return (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
