export const WHATSAPP_NUMBER = "5511974747509"; // Placeholder - substituir pelo número real

export const BRAND = {
  name: "Anttecipe",
  tagline: "Assessoria especializada em auxílio-acidente",
  description:
    "Teve o auxílio-acidente negado pelo INSS? Nossos especialistas recuperam seu benefício. Análise gratuita e você só paga se ganhar.",
};

export const METRICS = [
  { value: 5000, prefix: "+", suffix: "", label: "Clientes atendidos" },
  { value: 97, prefix: "", suffix: "%", label: "Taxa de aprovação" },
  { value: 50, prefix: "R$ ", suffix: "M+", label: "Recuperados" },
];

export const STEPS = [
  {
    number: "01",
    title: "Análise Gratuita",
    description:
      "Conte seu caso para nossos especialistas. Sem custo e sem compromisso.",
    icon: "MessageCircle" as const,
  },
  {
    number: "02",
    title: "Cuidamos de Tudo",
    description:
      "Nossa equipe cuida de toda a documentação e do processo junto ao INSS ou na Justiça.",
    icon: "FileText" as const,
  },
  {
    number: "03",
    title: "Você Recebe",
    description:
      "Seu benefício é liberado e você recebe os valores atrasados. Simples assim.",
    icon: "CheckCircle" as const,
  },
];

export const BENEFITS = [
  {
    title: "Análise 100% Gratuita",
    description: "Avaliamos seu caso sem nenhum custo. Você não paga nada para saber se tem direito.",
    icon: "Gift" as const,
  },
  {
    title: "Só Paga Se Ganhar",
    description: "Zero risco financeiro. Nossos honorários são cobrados apenas após a conquista do benefício.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Atendimento Humanizado",
    description: "Tratamos cada cliente com respeito e empatia. Você não é apenas um número.",
    icon: "Heart" as const,
  },
  {
    title: "Equipe Especializada",
    description: "Advogados e peritos com anos de experiência exclusiva em direito previdenciário.",
    icon: "Scale" as const,
  },
  {
    title: "Agilidade no Processo",
    description: "Processos organizados e acompanhamento constante para resultados mais rápidos.",
    icon: "Clock" as const,
  },
  {
    title: "Sigilo Total",
    description: "Seus dados e informações são tratados com absoluta confidencialidade.",
    icon: "Lock" as const,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Depois de 2 anos lutando sozinho contra o INSS, encontrei a Anttecipe. Em 6 meses recebi mais de R$ 40 mil em atrasados. Recomendo de olhos fechados!",
    name: "Maria S.",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    quote:
      "Tive meu pedido negado 3 vezes. A equipe da Anttecipe entrou com recurso e conseguiu reverter. Hoje recebo meu auxílio-acidente todo mês junto com o salário.",
    name: "Carlos R.",
    location: "Belo Horizonte, MG",
    rating: 5,
  },
  {
    quote:
      "Achei que não tinha direito porque já fazia anos do acidente. Eles me mostraram que ainda podia pedir e ganhei. Recebi quase R$ 30 mil de atrasados.",
    name: "Ana P.",
    location: "Curitiba, PR",
    rating: 5,
  },
];

export const ELIGIBILITY_ITEMS = [
  {
    title: "Acidente de Trabalho",
    description:
      "Sofreu um acidente durante o trabalho ou a caminho dele e ficou com sequelas permanentes.",
  },
  {
    title: "Doença Ocupacional",
    description:
      "Desenvolveu LER/DORT, perda auditiva, problemas na coluna ou outras doenças relacionadas ao trabalho.",
  },
  {
    title: "Acidente de Qualquer Natureza",
    description:
      "Acidentes de trânsito, domésticos ou outros que resultaram em redução da capacidade de trabalho.",
  },
  {
    title: "Redução da Capacidade",
    description:
      "Qualquer sequela que reduza sua capacidade para o trabalho que exercia habitualmente.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "O que é o auxílio-acidente?",
    answer:
      "O auxílio-acidente é um benefício previdenciário pago pelo INSS ao trabalhador segurado que sofre um acidente de qualquer natureza (incluindo acidente de trabalho) e fica com sequelas que reduzem sua capacidade para o trabalho. Está previsto no Art. 86 da Lei 8.213/91 e tem caráter indenizatório, podendo ser acumulado com o salário.",
  },
  {
    question: "Quanto vou receber de auxílio-acidente?",
    answer:
      "O valor do auxílio-acidente corresponde a 50% do salário de benefício. Além do valor mensal, você pode ter direito a receber os valores atrasados desde a data do acidente ou da consolidação das sequelas, o que pode representar uma quantia significativa.",
  },
  {
    question: "Posso receber auxílio-acidente mesmo trabalhando?",
    answer:
      "Sim! Diferente de outros benefícios do INSS, o auxílio-acidente pode ser acumulado com o salário. Ele é pago como uma indenização pela redução da sua capacidade de trabalho, não como substituição de renda.",
  },
  {
    question: "Preciso pagar algo para começar?",
    answer:
      "Não. A análise do seu caso é totalmente gratuita e sem compromisso. Nossos honorários só são cobrados se você ganhar a causa. Você tem zero risco financeiro.",
  },
  {
    question: "Meu pedido foi negado pelo INSS. Ainda posso conseguir?",
    answer:
      "Sim! Mais de 70% dos pedidos de auxílio-acidente são negados pelo INSS na primeira tentativa. Isso é muito comum. Nossa equipe é especialista em reverter negativas do INSS, seja por recurso administrativo ou ação judicial.",
  },
  {
    question: "Quanto tempo demora o processo?",
    answer:
      "O prazo varia conforme o caso. Em via administrativa, o processo pode levar de 3 a 6 meses. Na via judicial, de 6 meses a 2 anos. Em todos os casos, trabalhamos para obter o resultado mais rápido possível.",
  },
  {
    question: "Já faz anos que sofri o acidente. Ainda tenho direito?",
    answer:
      "Em muitos casos, sim. O direito ao auxílio-acidente pode ser pleiteado mesmo anos após o acidente, desde que as sequelas ainda existam. Cada caso precisa ser analisado individualmente. Fale conosco para uma avaliação gratuita.",
  },
  {
    question: "Qual a diferença entre auxílio-doença e auxílio-acidente?",
    answer:
      "O auxílio-doença é pago enquanto o trabalhador está temporariamente incapaz de trabalhar e não pode ser acumulado com salário. Já o auxílio-acidente é pago como indenização pela redução permanente da capacidade de trabalho e pode ser recebido junto com o salário.",
  },
];

export const PAIN_STATS = [
  {
    value: "70%",
    label: "dos pedidos de auxílio-acidente são negados pelo INSS",
  },
  {
    value: "3 em 5",
    label: "trabalhadores desistem de lutar por seus direitos",
  },
  {
    value: "R$ Bilhões",
    label: "em benefícios deixam de ser pagos todos os anos",
  },
];
