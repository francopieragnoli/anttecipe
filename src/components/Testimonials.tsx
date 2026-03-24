import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

export default function Testimonials() {
  return (
    <SectionWrapper id="depoimentos">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight">
          Histórias de quem{" "}
          <span className="text-primary">conquistou seu direito</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-body leading-relaxed flex-1 mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-highlight fill-highlight"
                  />
                ))}
              </div>
              <div className="font-bold text-dark">{testimonial.name}</div>
              <div className="text-sm text-muted">{testimonial.location}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
