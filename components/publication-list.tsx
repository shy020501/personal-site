import type { Publication } from "@/content/publications";

type PublicationListProps = {
  publications: Publication[];
  headingLevel?: "h2" | "h3";
};

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.6c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function PublicationList({
  publications,
  headingLevel: Heading = "h3",
}: PublicationListProps) {
  return (
    <ul className="divide-y divide-border">
      {publications.map((publication) => (
        <li key={publication.title} className="py-6 first:pt-0 last:pb-0">
          <article className="grid gap-2 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6">
            <time
              dateTime={publication.year}
              className="font-mono text-sm leading-6 text-muted sm:pt-0.5"
            >
              {publication.year}
            </time>
            <div className="min-w-0">
              <Heading className="max-w-4xl text-lg leading-snug font-semibold tracking-tight sm:text-xl">
                {publication.title}
              </Heading>
              <p className="mt-2 text-sm leading-6 text-muted">
                {publication.authors.map((author, index) => (
                  <span key={author.name}>
                    {index > 0 && ", "}
                    {author.name === "Seunghyo Yun" ? (
                      <strong className="font-bold text-foreground">
                        {author.name}
                      </strong>
                    ) : (
                      author.name
                    )}
                    {author.marker && (
                      <sup className="ml-0.5">{author.marker}</sup>
                    )}
                  </span>
                ))}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted">
                {publication.status}
              </p>
              <p
                lang="ko"
                className="mt-3 max-w-4xl text-sm leading-7 break-keep text-foreground"
              >
                {publication.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
                <a
                  href={publication.paperHref ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={publication.paperHref ? undefined : true}
                  tabIndex={publication.paperHref ? undefined : -1}
                  title={
                    publication.paperHref
                      ? undefined
                      : "Paper link coming soon"
                  }
                  className={`inline-flex min-h-9 items-center gap-2 rounded-sm border border-accent bg-accent px-4 py-1.5 text-sm font-normal text-white transition-colors duration-150 motion-reduce:transition-none${
                    publication.paperHref
                      ? " hover:border-[#10263e] hover:bg-[#10263e]"
                      : " pointer-events-none opacity-60"
                  }`}
                >
                  Paper
                  {!publication.paperHref && (
                    <span className="sr-only">(coming soon)</span>
                  )}
                </a>
                {publication.githubHref ? (
                  <a
                    href={publication.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link font-normal"
                  >
                    <GitHubIcon />
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 py-2 text-sm font-normal text-muted"
                    title="GitHub link coming soon"
                  >
                    <GitHubIcon />
                    GitHub <span aria-hidden="true">↗</span>
                    <span className="sr-only">(coming soon)</span>
                  </span>
                )}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
