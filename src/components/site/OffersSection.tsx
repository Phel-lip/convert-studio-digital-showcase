import { Check, Globe, MessageCircle, Palette, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { brandBenefits, essentialBenefits, faq, offerWhatsApp, terms } from "./offers";

function Benefits({ items }: { items: string[] }) {
  return <ul className="grid gap-2.5">{items.map(item => <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function ContactButton({ destination, message, children, secondary = false }: { destination: string; message: string; children: React.ReactNode; secondary?: boolean }) {
  return <Button asChild className={`h-auto min-h-11 w-full whitespace-normal rounded-full px-5 py-3 sm:w-fit ${secondary ? "border border-card-border-strong bg-card-subtle text-primary shadow-none hover:bg-primary-soft" : ""}`}><a href={offerWhatsApp(destination, message)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />{children}</a></Button>;
}

export function OffersSection({ whatsapp }: { whatsapp: string }) {
  return <section id="planos" className="scroll-mt-20 border-t border-border py-14 sm:py-20">
    <div className="mb-8 flex flex-col gap-2 sm:mb-10">
      <span className="text-xs font-semibold uppercase text-primary-bright">Pacotes e Planos</span>
      <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">Encontre uma opção para o que você busca</h2>
    </div>

    <article className="overflow-hidden rounded-2xl border border-primary/35 bg-card text-card-foreground shadow-lift">
      <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-x-10">
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <h3 className="font-display text-2xl font-semibold">Pacote Essencial</h3>
          <p className="mt-3 font-display text-3xl font-semibold text-primary">A partir de R${terms.essentialFrom}</p>
          <p className="mt-1 text-xs font-medium text-card-muted">Pagamento único</p>
          <p className="mt-4 text-sm leading-relaxed">Seu negócio bem apresentado, com serviços, trabalhos e solicitações organizados em um só lugar.</p>
        </div>
        <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Benefits items={essentialBenefits} />
        </div>
        <dl className="grid min-w-0 gap-4 border-t border-card-border pt-4 text-sm leading-relaxed lg:col-span-2 lg:row-start-3 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0"><dt className="font-semibold">Prazo</dt><dd className="mt-1 text-card-muted">Primeira versão em até {terms.firstVersionBusinessDays} dias úteis após receber os materiais e o sinal.</dd></div>
          <div className="min-w-0"><dt className="font-semibold">Pagamento</dt><dd className="mt-1 text-card-muted">{terms.startPaymentPercent}% para começar e {terms.finalPaymentPercent}% após a aprovação da versão final, antes da publicação.</dd></div>
        </dl>
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <ContactButton destination={whatsapp} message="Olá! Tenho interesse no Pacote Essencial e quero conversar sobre meu site.">Quero meu site</ContactButton>
        </div>
        <p className="text-xs leading-relaxed text-card-muted lg:col-span-2 lg:row-start-4">O estabelecimento confirma os pedidos pelo WhatsApp. Escopo e preço final definidos antes da contratação. As duas rodadas de ajustes devem ser consolidadas e realizadas dentro do escopo aprovado.</p>
      </div>

      <div className="border-t border-card-border bg-card-body p-5 sm:p-8">
        <h4 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold"><Globe className="h-4 w-4 text-primary" aria-hidden="true" />Seu endereço na internet</h4>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
          <div className="min-w-0"><p className="text-sm font-semibold">Endereço Convert <span className="text-primary">— incluído</span></p><p className="mt-2 text-sm font-medium [overflow-wrap:anywhere]">seunegocio.convertstudio.com.br</p><p className="mt-2 text-sm leading-relaxed text-card-muted">Seu site com um endereço personalizado dentro da Convert Studio, sem precisar contratar um domínio próprio.</p></div>
          <div className="min-w-0"><p className="text-sm font-semibold">Domínio próprio <span className="text-primary">— +R${terms.ownDomain}</span></p><p className="mt-2 text-sm font-medium [overflow-wrap:anywhere]">seunegocio.com.br</p><p className="mt-2 text-sm leading-relaxed text-card-muted">Inclui registro de domínio .com.br disponível por {terms.domainYears} ano, em nome do cliente, e configuração. Renovação anual separada.</p></div>
        </div>
        <p className="mt-5 border-t border-card-border pt-4 text-xs leading-relaxed text-card-muted">A hospedagem incluída vale por {terms.hostingMonths} meses a partir da publicação. A continuidade após esse período depende de renovação, conforme condições informadas antes da contratação.</p>
      </div>
    </article>

    <div className="mt-7 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
      <article className="flex flex-col rounded-2xl border border-card-border bg-card p-5 text-card-foreground shadow-soft sm:p-6">
        <Palette className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold">Logo e Identidade Visual Básica</h3>
        <p className="mt-2 font-display text-xl font-semibold text-primary">A partir de R${terms.brandFrom}</p>
        <p className="mb-5 mt-3 text-sm leading-relaxed text-card-muted">Uma identidade visual consistente para apresentar seu negócio com personalidade.</p>
        <Benefits items={brandBenefits} />
        <p className="mb-5 mt-4 text-xs leading-relaxed text-card-muted">Materiais para Instagram e aplicações adicionais sob orçamento.</p>
        <div className="mt-auto"><ContactButton secondary destination={whatsapp} message="Olá! Gostaria de conversar sobre Logo e Identidade Visual Básica para minha marca.">Conversar sobre minha marca</ContactButton></div>
      </article>
      <article className="flex flex-col rounded-2xl border border-border-strong bg-surface p-5 sm:p-6">
        <RefreshCw className="mb-3 h-5 w-5 text-primary-bright" aria-hidden="true" />
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:flex"><h3 className="min-w-0 font-display text-lg font-semibold">Atualizações do Site</h3><span className="shrink-0 text-xs text-muted-foreground">Opcional</span></div>
        <p className="mt-2 font-display text-xl font-semibold">R${terms.updatesMonthly}/mês</p>
        <p className="mb-4 mt-3 text-sm font-medium leading-relaxed">Pequenas atualizações de conteúdo, com limite mensal.</p>
        <ul className="grid gap-2 text-sm leading-relaxed text-muted-foreground"><li>Trocas simples de textos e imagens.</li><li>Solicitações pelo WhatsApp.</li><li>Contratação opcional após a entrega.</li></ul>
        <p className="mt-4 border-t border-border-strong pt-4 text-xs leading-relaxed text-muted-foreground">Até {terms.monthlyChanges} pequenas trocas reunidas em {terms.monthlyRequests} solicitação mensal, sem acúmulo. Materiais fornecidos pelo cliente. Não inclui novas páginas, alterações de layout ou funcionalidades.</p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Não é necessário contratar atualizações para manter o site ativo durante os {terms.hostingMonths} meses de hospedagem incluída.</p>
      </article>
    </div>

    <div className="mt-10">
      <h3 className="mb-3 font-display text-xl font-semibold">Dúvidas frequentes</h3>
      <Accordion type="single" collapsible>{faq.map((item, index) => <AccordionItem key={item.question} value={`faq-${index}`}><AccordionTrigger className="min-h-12 gap-4 hover:no-underline">{item.question}</AccordionTrigger><AccordionContent className="max-w-2xl leading-relaxed text-muted-foreground">{item.answer}</AccordionContent></AccordionItem>)}</Accordion>
    </div>
  </section>;
}