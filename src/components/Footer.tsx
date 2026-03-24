import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-black text-white">{BRAND.name}</span>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              {BRAND.tagline}. Ajudamos trabalhadores brasileiros a
              conquistarem o auxílio-acidente que é seu por direito.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-4">
              Links úteis
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Quem Tem Direito", href: "#direito" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Perguntas Frequentes", href: "#faq" },
                { label: "Fale Conosco", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-4">
              Informações legais
            </h4>
            <p className="text-sm text-white/50 leading-relaxed">
              Este site tem caráter informativo e não substitui a consulta a
              um advogado. Cada caso deve ser analisado individualmente por
              profissional habilitado.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8">
          <p className="text-center text-sm text-white/30">
            &copy; {new Date().getFullYear()} {BRAND.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
