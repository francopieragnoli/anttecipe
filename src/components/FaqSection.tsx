"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-dark pr-8 group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-muted leading-relaxed pb-6">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" className="bg-light-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted mt-4">
            Tire suas dúvidas sobre o auxílio-acidente
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-8">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
