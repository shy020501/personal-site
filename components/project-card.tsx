import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({
  project,
  headingLevel: Heading = "h3",
}: ProjectCardProps) {
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      tabIndex={-1}
      className="h-full min-w-0 scroll-mt-8"
    >
      <Link
        href={project.detailHref ?? `/projects#${project.slug}`}
        aria-label={`View Project: ${project.title}`}
        className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-white transition-colors duration-150 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
      >
        <div className="relative flex aspect-video shrink-0 items-center justify-center overflow-hidden border-b border-border bg-surface text-muted">
          {project.coverImage ? (
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              sizes="(min-width: 1200px) 360px, (min-width: 768px) 33vw, 100vw"
              className={
                project.coverImage.fit === "contain"
                  ? "bg-white object-contain object-center"
                  : "object-cover object-center"
              }
            />
          ) : (
            <svg
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m3 17 5-5 4 4 4-6 5 7" />
            </svg>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
            {project.category}
          </p>
          <Heading
            id={`${project.slug}-title`}
            lang="ko"
            className="mt-5 text-xl font-medium leading-snug tracking-tight"
          >
            {project.title}
          </Heading>
          <p lang="ko" className="mt-1 text-xs leading-5 font-normal text-muted">
            {project.organization}
          </p>
          <p
            lang="ko"
            className="mt-3 mb-7 text-sm leading-7 break-keep text-foreground"
          >
            {project.description}
          </p>
          <span className="text-link mt-auto group-hover:decoration-current">
            View Project
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
