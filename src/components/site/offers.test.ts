import { describe, expect, test } from "bun:test";
import { offerWhatsApp, terms } from "./offers";

describe("Termos comerciais aprovados", () => {
  test("Essencial começa em R$300", () => expect(terms.essentialFrom).toBe(300));
  test("Identidade visual começa em R$300", () => expect(terms.brandFrom).toBe(300));
  test("Domínio próprio adicional R$100", () => expect(terms.ownDomain).toBe(100));
  test("Atualizações custam R$20 mensais", () => expect(terms.updatesMonthly).toBe(20));
  test("Hospedagem incluída por 12 meses", () => expect(terms.hostingMonths).toBe(12));
  test("Registro de domínio por 1 ano", () => expect(terms.domainYears).toBe(1));
  test("Duas rodadas de ajustes", () => expect(terms.adjustmentRounds).toBe(2));
  test("Primeira versão até 3 dias úteis", () => expect(terms.firstVersionBusinessDays).toBe(3));
  test("Pagamento inicial de 50%", () => expect(terms.startPaymentPercent).toBe(50));
  test("Pagamento final de 50%", () => expect(terms.finalPaymentPercent).toBe(50));
  test("Até 3 pequenas trocas por mês", () => expect(terms.monthlyChanges).toBe(3));
  test("Uma solicitação mensal consolidada", () => expect(terms.monthlyRequests).toBe(1));
  test("Sem acúmulo mensal", () => expect(terms.carryOver).toBe(false));
  test("Novos contatos preservam WhatsApp e mensagem", () => {
    const url = new URL(offerWhatsApp("https://wa.me/82991730616", "Quero meu site"));
    expect(url.origin + url.pathname).toBe("https://wa.me/82991730616");
    expect(url.searchParams.get("text")).toBe("Quero meu site");
  });
});