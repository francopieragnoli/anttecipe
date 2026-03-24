"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  dark = false,
  noPadding = false,
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`
        ${noPadding ? "" : "py-16 md:py-24 lg:py-32"}
        ${dark ? "bg-dark text-white" : ""}
        ${className}
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className={noPadding ? "" : "max-w-7xl mx-auto px-6 md:px-8 lg:px-12"}>
        {children}
      </div>
    </section>
  );
}
