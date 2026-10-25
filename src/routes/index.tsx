import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Instagram, MessageCircle } from "lucide-react";

import { DemoCard, type Demo } from "@/components/site/DemoCard";
import { PlanCard, type Plan } from "@/components/site/PlanCard";
import { SegmentCard, type Segment } from "@/components/site/SegmentCard";
import demoLanding from "@/assets/demo-landing.jpg";
import demoCardapio from "@/assets/demo-cardapio.jpg";
import demoAgenda from "@/assets/demo-agenda.jpg";
import demoHub from "@/assets/demo-businesshub.jpg";
import demoBeleza from "@/assets/demo-beleza.jpg";
import demoVelora from "@/assets/demo-velora.jpg";
import demoNorden from "@/assets/demo-norden.jpg";

const TITLE = "Convert Studio — Sites que convertem. Sistemas que automatizam.";
const DESCRIPTION =
  "Soluções digitais para conectar seu negócio a novos clientes, facilitar o atendimento e fortalecer sua presença online.";

const SITE_URL = "https://convertstudio.com.br/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Convert Studio" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Convert Studio",
          url: SITE_URL,
          description: DESCRIPTION,
          sameAs: ["https://instagram.com/convert_studios"],
        }),
      },
    ],
  }),
  component: Index,
});


const WHATSAPP = "https://wa.me/82991730616";
const INSTAGRAM = "https://instagram.com/convert_studios";

const demos: Demo[] = [
  {
    name: "Presença Online",
    label: "Presença online",
    description:
      "Site completo e moderno. Apresente seu negócio, seus serviços e formas de contato em um só lugar.",
    url: "https://deluxy-digital.convertstudio.com.br/",
    image: demoVelora,
    accent: "lilac",
  },
  {
    name: "Catálogo Digital",
    label: "Catálogo digital",
    description: "Organize seus produtos em um catálogo online e facilite os pedidos pelo WhatsApp.",
    url: "https://cardapio.convertstudio.com.br/",
    image: demoCardapio,
    accent: "butter",
  },
  {
    name: "Agendamento via WhatsApp",
    label: "Agendamentos",
    description: "Apresente serviços, valores e trabalhos em uma página própria. A cliente escolhe suas preferências e envia a solicitação de horário pronta pelo WhatsApp. Você confirma por lá.",
    url: "https://demo-aura.convertstudio.com.br/",
    image: demoAgenda,
    accent: "leaf",
  },
  {
    name: "Orçamento Online",
    label: "Orçamento online",
    description:
      "Facilite a solicitação de orçamentos e receba as informações do cliente de forma organizada.",
    url: "https://nordens.convertstudio.com.br/",
    image: demoNorden,
    accent: "ocean",
  },
];

const segments: Segment[] = [
  {
    segment: "Beleza & Estética",
    name: "Studio de beleza",
    description:
      "Uma experiência digital pensada para profissionais de beleza, estética e atendimento com hora marcada.",
    url: "https://studio-beleza.convertstudio.com.br/",
    image: demoBeleza,
  },
  {
    segment: "Construção & Reformas",
    name: "NORDEN",
    description:
      "Uma experiência digital pensada para empresas de construção, reformas e serviços especializados.",
    url: "https://nordens.convertstudio.com.br/",
    image: demoNorden,
  },
];

const included: string[] = [
  "Design personalizado",
  "Adaptado para celular e computador",
  "Domínio e hospedagem",
  "Publicação do projeto",
  "Suporte após a entrega",
];

const plans: Plan[] = [
  {
    name: "Pacote Essencial",
    price: "A partir de R$ 400",
    description: "Tudo o que você precisa para colocar seu negócio online, sem complicação.",
    items: [
      "Página única personalizada",
      "Até 5 seções",
      "Contato direto pelo WhatsApp",
      "Domínio Convert + hospedagem por 12 meses",
      "Projeto pronto e publicado",
    ],
    notes: ["Entrega em 3–4 dias úteis", "1 revisão inclusa"],
    emphasis: true,
  },
  {
    name: "Pacote Profissional",
    price: "A partir de R$ 1.200",
    description: "Sistemas personalizados para organizar e automatizar processos do seu negócio.",
    items: [
      "Agendamento, orçamento ou fluxos sob medida",
      "Automação de processos",
      "SEO otimizado",
      "Funcionalidades pensadas para sua operação",
      "Projeto pronto e publicado",
    ],
    notes: ["Entrega sob prazo definido no projeto", "2 revisões inclusas"],
  },
  {
    name: "Plano de Suporte",
    price: "R$ 200/mês",
    description: "Seu site sempre atualizado, sem você precisar se preocupar.",
    items: [
      "Manutenção mensal",
      "Hospedagem contínua",
      "Alterações de textos e imagens",
      "Pequenos ajustes no site",
      "Suporte prioritário",
      "Gestão do domínio próprio",
    ],
    notes: ["Contratação opcional após a entrega"],
  },
  {
    name: "Adicionais",
    price: "Conforme o projeto",
    description: "Adicione recursos extras de acordo com a necessidade do seu projeto.",
    bullets: true,
    items: [
      "Domínio próprio .com.br",
      "Páginas adicionais",
      "Seções adicionais",
      "Formulários personalizados",
      "SEO otimizado",
      "Funcionalidades extras",
    ],
  },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-[1.0625rem] font-semibold tracking-[-0.03em] text-foreground ${className}`}
    >
      Convert <span className="text-primary-bright">Studio</span>
    </span>
  );
}

function HeroFragments() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative hidden h-[22rem] select-none lg:block"
    >
      <div className="absolute right-0 top-2 w-[19rem] overflow-hidden rounded-2xl border border-border-strong bg-card shadow-lift">
        <img
          src={demoLanding}
          alt=""
          className="h-[9.5rem] w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute right-[7.5rem] top-[8.5rem] w-[15rem] overflow-hidden rounded-2xl border border-border-strong bg-card shadow-lift">
        <img
          src={demoCardapio}
          alt=""
          className="h-[8rem] w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute right-[1rem] top-[15.5rem] w-[12rem] overflow-hidden rounded-2xl border border-border-strong bg-card shadow-lift">
        <img
          src={demoAgenda}
          alt=""
          className="h-[6.5rem] w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="page-wash min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Wordmark />
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-bright active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Falar agora</span>
            <span className="sm:hidden">Falar agora</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* 1 — Brand / introduction */}
        <section className="reveal py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary-bright"
                  aria-hidden="true"
                />
                Convert Studio
              </p>
              <h1 className="max-w-2xl font-display text-[2.25rem] font-semibold leading-[1.04] sm:text-5xl md:text-[3.5rem]">
                Sites que convertem.
                <br />
                <span className="text-primary-bright">Sistemas que automatizam.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Soluções digitais para conectar seu negócio a novos clientes, facilitar o atendimento e
                fortalecer sua presença online.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#solucoes"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-bright active:scale-[0.98]"
                >
                  Ver soluções
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary-bright hover:bg-primary-soft"
                >
                  Pacotes e Planos
                </a>
              </div>
            </div>
            <HeroFragments />
          </div>
        </section>

        {/* 2 — Real solutions / demos */}
        <section id="solucoes" className="scroll-mt-20 border-t border-border py-14 sm:py-20">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-bright">
              Soluções
            </span>
            <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
              Veja o que a Convert pode criar para o seu negócio
            </h2>
            <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
             Explore projetos pensados para diferentes necessidades e formas de atendimento.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {demos.map((demo) => (
              <DemoCard key={demo.name} demo={demo} />
            ))}
          </div>
        </section>

        {/* 2b — Segment demos */}
        <section
          id="segmentos"
          className="scroll-mt-20 border-t border-border pb-14 pt-12 sm:pb-20 sm:pt-16"
        >
          <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-bright">
              Para diferentes negócios
            </span>
            <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
              Uma solução com a identidade do seu negócio.
            </h2>
            <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
              Cada projeto pode ser adaptado à identidade, ao público e às necessidades da sua
              empresa.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {segments.map((item) => (
              <SegmentCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* 2c — What is included */}
        <section className="border-t border-border py-12 sm:py-14">
          <div className="flex flex-col gap-6 rounded-3xl border border-border-strong bg-surface/60 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-bright">
                Projeto completo
              </span>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                Você traz a ideia. A Convert cuida da estrutura, desenvolvimento e publicação.
              </p>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2 lg:gap-x-8">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary-bright" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 — Plans & packages */}
        <section id="planos" className="scroll-mt-20 border-t border-border py-14 sm:py-20">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-bright">
              Planos e pacotes
            </span>
            <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
              Encontre uma opção para o que você busca
            </h2>
          </div>
          <div className="grid gap-3">
            {plans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} defaultOpen={i === 0} />
            ))}
          </div>
        </section>

        {/* 4 — Contact */}
        <section id="contato" className="scroll-mt-20 pb-14 sm:pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-6 py-10 shadow-ink sm:px-10 sm:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(36rem 20rem at 88% -10%, oklch(0.556 0.242 295 / 0.35), transparent 65%)",
              }}
            />
            <div className="relative">
              <h2 className="max-w-lg font-display text-2xl font-semibold leading-tight sm:text-[2rem]">
                Seu próximo passo começa aqui ↓
              </h2>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-bright active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Solicitar Orçamento
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary-bright hover:bg-primary-soft"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    {/* 5 — Footer */}
<footer className="border-t border-border">
  <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-end sm:justify-between sm:px-8">
    <div className="max-w-md">
      <Wordmark />

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Criamos experiências digitais sob medida para simplificar processos e facilitar o dia a dia.
      </p>

      <p className="mt-2 text-sm font-medium text-foreground">
        Seu digital à altura do que você entrega.
      </p>
    </div>

    <p className="text-xs text-muted-foreground">
      © 2026 Convert Studio
    </p>
  </div>
</footer>
</div>
);
}
