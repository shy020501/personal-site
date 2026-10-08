import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

function getCaseStudy(slug: string) {
  const study = caseStudies.find((study) => study.slug === slug);

  if (!study) {
    notFound();
  }

  return study;
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return {
    title: `${study.title} | Seunghyo Yun`,
    description: study.description,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return (
    <main lang="ko" className="site-container py-10 sm:py-12">
      <Link href="/case-studies" lang="en" className="text-link">
        <span aria-hidden="true">←</span> Back to Case Studies
      </Link>

      <header className="mt-6">
        <p
          lang="en"
          className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
        >
          {study.category}
        </p>
        <h1 className="mt-3 text-[1.75rem] leading-snug font-semibold tracking-tight break-keep sm:text-4xl">
          {study.title}
        </h1>
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
