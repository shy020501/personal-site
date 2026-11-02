import Link from "next/link";

type ContentCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  headingLevel?: "h2" | "h3";
};

export function ContentCard({
  category,
  title,
  description,
  href,
  cta,
  headingLevel: Heading = "h3",
}: ContentCardProps) {
  return (
    <article className="h-full min-w-0">
      <Link
        href={href}
        aria-label={`${cta}: ${title}`}
        className="group flex h-full flex-col rounded-sm border border-border bg-white p-6 transition-colors duration-150 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none sm:p-7"
      >
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
          {category}
        </p>
        <Heading
          lang="ko"
          className="mt-3 text-lg leading-snug font-medium tracking-tight break-keep"
        >
          {title}
        </Heading>
        <p
          lang="ko"
          className="mt-2 mb-4 text-sm leading-7 break-keep text-foreground"
        >
          {description}
        </p>
        <span className="text-link mt-auto group-hover:decoration-current">
          {cta}
          <span aria-hidden="true">→</span>
        </span>
      </Link>
    </article>
  );
}
