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
    <article className="flex h-full min-w-0 flex-col rounded-sm border border-border bg-white p-6 sm:p-7">
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
      <Link href={href} className="text-link mt-auto">
        {cta}
        <span className="sr-only">: {title}</span>
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
