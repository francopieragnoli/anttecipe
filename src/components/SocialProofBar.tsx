"use client";

import { METRICS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

function AnimatedMetric({
  value,
  prefix,
  suffix,
  label,
  isActive,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  isActive: boolean;
}) {
  const animatedValue = useAnimatedNumber(value, isActive);

  return (
    <div className="text-center px-4 py-3">
      <div className="text-2xl md:text-3xl font-black text-white">
        {prefix}
        {animatedValue.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="text-sm text-white/70 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function SocialProofBar() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <div ref={ref} className="bg-primary py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:divide-x md:divide-white/20">
          {METRICS.map((metric) => (
            <AnimatedMetric
              key={metric.label}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
              isActive={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
