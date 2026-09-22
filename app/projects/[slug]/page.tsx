import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVisibleProjects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleProjects()
    .filter((project) => project.slug !== "real-world-robot-systems")
    .map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  const project = getVisibleProjects().find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return project;
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: `${project.title} | Seunghyo Yun`,
    description: project.description,
  };
}

export default async function ProjectPlaceholderPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  return (
    <main lang="ko" className="site-container py-10 sm:py-12">
      <Link href="/projects" lang="en" className="text-link">
        <span aria-hidden="true">←</span> Back to Projects
      </Link>

      <header className="mt-6">
        <p
          lang="en"
          className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
        >
          {project.category}
        </p>
        <h1 className="mt-3 text-[1.75rem] leading-snug font-semibold tracking-tight break-keep sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-sm text-muted">{project.organization}</p>
      </header>

      <p
        lang="en"
        className="mt-8 border-t border-border pt-8 text-base text-muted"
      >
        Coming soon.
      </p>
    </main>
  );
}
