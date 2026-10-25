import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export type Plan = {
  name: string;
  price: string;
  description: string;
  items: string[];
  bullets?: boolean;
  notes?: string[];
  emphasis?: boolean;
};

export function PlanCard({ plan, defaultOpen = false }: { plan: Plan; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `plan-${plan.name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-card text-card-foreground transition-[border-color,box-shadow] duration-200 ${
        open
          ? "border-primary/35 shadow-lift"
          : "border-card-border shadow-soft hover:border-card-border-strong"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-4.5"
        >
          <span className="grid min-w-0 flex-1 gap-1">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-card-muted">
              {plan.name}
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl">
              {plan.price}
            </span>
            <span className="block text-[0.8125rem] leading-relaxed text-card-muted sm:text-sm">
              {plan.description}
            </span>
          </span>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-200 ${
              open
                ? "rotate-180 border-primary bg-primary text-primary-foreground"
                : "border-card-border-strong text-card-muted"
            }`}
          >
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        hidden={!open}
        className="grid gap-4 border-t border-card-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6"
      >
        <ul className="grid gap-2.5">
          {plan.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
              {plan.bullets ? (
                <span
                  className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                  aria-hidden="true"
                />
              ) : (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {plan.notes && plan.notes.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-card-border pt-4">
            {plan.notes.map((note) => (
              <span
                key={note}
                className="rounded-full bg-card-subtle px-3 py-1 text-xs font-medium text-card-muted"
              >
                {note}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
