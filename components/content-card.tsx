import Link from "next/link";

type ContentCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export function ContentCard({
  category,
  title,
  description,
  href,
  cta,
}: ContentCardProps) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-border bg-white p-6 sm:p-7">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
        {category}
      </p>
      <h3 className="mt-5 text-xl font-medium leading-snug tracking-tight">
        {title}
      </h3>
      <p className="mt-3 mb-7 text-sm leading-7 text-muted">{description}</p>
      <Link href={href} className="text-link mt-auto">
        {cta}
        <span className="sr-only">: {title}</span>
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
