import Link from "next/link";

type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
};

export function SectionHeading({
  id,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-7">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <h2
          id={id}
          className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]"
        >
          {title}
        </h2>
        {action && (
          <Link href={action.href} className="text-link">
            {action.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
