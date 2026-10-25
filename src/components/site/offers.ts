export const terms = {
  essentialFrom: 300,
  brandFrom: 300,
  ownDomain: 100,
  updatesMonthly: 20,
  hostingMonths: 12,
  domainYears: 1,
  adjustmentRounds: 2,
  firstVersionBusinessDays: 3,
  startPaymentPercent: 50,
  finalPaymentPercent: 50,
  monthlyChanges: 3,
  monthlyRequests: 1,
  carryOver: false,
};

export const essentialBenefits = [
  "Site personalizado para celular e computador.",
  "Serviços, fotos e informações do negócio organizados.",
  "Solicitações preenchidas e enviadas pelo WhatsApp, conforme o tipo de negócio.",
  `Endereço Convert e hospedagem por ${terms.hostingMonths} meses.`,
  `Publicação e ${terms.adjustmentRounds} rodadas de ajustes incluídas.`,
];

export const brandBenefits = [
  "Criação de logotipo.",
  "Paleta de cores personalizada.",
  "Orientação de tipografia.",
  "Arquivos finais para os usos combinados.",
  `${terms.adjustmentRounds} rodadas de ajustes incluídas.`,
];

export const faq = [
  { question: "O site faz agendamentos automáticos?", answer: "Não. Quando há solicitação de horário, o cliente envia suas preferências e o estabelecimento confirma a disponibilidade pelo WhatsApp." },
  { question: "Preciso contratar um domínio próprio?", answer: "Não. O endereço Convert já está incluído. O domínio próprio é opcional." },
  { question: "O que preciso enviar para começar?", answer: "Fotos, informações do negócio, serviços, WhatsApp e logotipo, se tiver." },
  { question: "Posso pedir alterações depois da entrega?", answer: "Sim. O pacote inclui duas rodadas de ajustes durante o desenvolvimento. Atualizações futuras podem ser contratadas separadamente." },
  { question: "E depois dos 12 meses?", answer: "A hospedagem pode continuar mediante renovação. As condições são apresentadas antes da contratação do projeto." },
];

export function offerWhatsApp(destination: string, message: string) {
  const url = new URL(destination);
  url.searchParams.set("text", message);
  return url.toString();
}