import { ArrowUpRight } from "lucide-react";

export type Segment = {
  segment: string;
  name: string;
  description: string;
  url: string;
  image: string;
};

export function SegmentCard({ item }: { item: Segment }) {
  return (
    <article className="group">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver demonstração — ${item.name}`}
        className="flex h-full flex-col gap-5 rounded-3xl border border-border-strong bg-surface/60 p-3 transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-primary-bright/40 hover:bg-surface"
      >
        <div className="relative overflow-hidden rounded-2xl bg-ink">
          <img
            src={item.image}
            alt={`Prévia da demonstração para ${item.segment}`}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[16/11] w-full object-cover object-top transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
          />
          <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-border-strong bg-background/75 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground backdrop-blur-sm">
            Demo de solução
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 px-2 pb-3">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary-bright">
            {item.segment}
          </span>
          <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            {item.name}
          </h3>
          <p className="flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-bright">
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
