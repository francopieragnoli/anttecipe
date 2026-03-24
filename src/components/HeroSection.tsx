import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-primary/30" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">
              Análise gratuita • Só paga se ganhar
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Sofreu um acidente e{" "}
            <span className="text-highlight">perdeu capacidade</span>{" "}
            de trabalho?
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Recupere o auxílio-acidente que o INSS negou. Nossa equipe
            especializada já ajudou mais de 5.000 trabalhadores a conquistarem
            seus direitos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton variant="large">
              Quero Minha Análise Gratuita
            </WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors"
            >
              Como Funciona
            </a>
          </div>

          <p className="mt-6 text-sm text-white/50">
            Sem compromisso • Sem custo inicial • Atendimento em todo Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
