import { ArrowUpRight } from "lucide-react";

export type Demo = {
  name: string;
  label: string;
  description: string;
  url: string;
  image: string;
  accent: "lilac" | "butter" | "leaf" | "ocean";
};

const accentDot: Record<Demo["accent"], string> = {
  lilac: "bg-lilac",
  butter: "bg-butter",
  leaf: "bg-leaf",
  ocean: "bg-ocean",
};

export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <article className="group relative">
      <a
        href={demo.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver demonstração — ${demo.name}`}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-card-border bg-card text-card-foreground shadow-soft transition-[transform,box-shadow,border-color] duration-[220ms] ease-out hover:-translate-y-[2px] hover:border-primary/25 hover:shadow-lift"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-card-subtle">
          <img
            src={demo.image}
            alt={`Prévia do projeto ${demo.name}`}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-[250ms] ease-out group-hover:scale-[1.015]"
          />
          <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-card/92 px-2.5 py-1 text-[11px] font-medium tracking-wide text-card-foreground shadow-sm backdrop-blur-sm">
            <span className={`h-1.5 w-1.5 rounded-full ${accentDot[demo.accent]}`} />
            {demo.label}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2.5 border-t border-card-border-strong/60 bg-card-body p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            {demo.name}
          </h3>
          <p className="flex-1 text-[0.9375rem] leading-relaxed text-card-muted">
            {demo.description}
          </p>
          <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Ver demonstração
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </a>
    </article>
  );
}
