import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { getVisibleProjects } from "@/content/projects";

function getProject() {
  const project = getVisibleProjects().find(
    (project) => project.slug === "open-domain",
  );

  if (!project) {
    notFound();
  }

  return project;
}

export function generateMetadata(): Metadata {
  const project = getProject();

  return {
    title: `${project.title} | Seunghyo Yun`,
    description: project.description,
  };
}

function MediaPlaceholder({
  label,
  className = "aspect-video",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-sm border border-border bg-surface p-6 text-center text-muted ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 48 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className="h-8 w-12 opacity-60"
      >
        <rect x="5" y="2" width="38" height="28" rx="1" />
        <circle cx="16" cy="11" r="3" />
        <path d="m5 25 11-9 8 6 9-10 10 12" />
      </svg>
      <p className="text-xs leading-6 break-keep">{label}</p>
    </div>
  );
}

export default function OpenDomainPage() {
  const project = getProject();

  return (
    <main lang="ko" className="site-container py-10 sm:py-12">
      <Link href="/projects" lang="en" className="text-link">
        <span aria-hidden="true">←</span> Back to Projects
      </Link>

      <article className="mt-6">
        <header className="border-b border-border pb-10 sm:pb-12">
          <p
            lang="en"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
          >
            {project.category}
          </p>
          <h1 className="mt-3 text-[1.75rem] leading-snug font-semibold tracking-tight break-keep sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-7 break-keep">
            {project.description}
          </p>
          <p className="mt-3 text-sm text-muted">{project.organization}</p>
          <div className="mt-8">
            <MediaPlaceholder
              label="프로젝트 대표 이미지 · 준비 중"
              className="aspect-video sm:aspect-[5/2]"
            />
          </div>
        </header>

        <section
          aria-labelledby="overview-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="overview-heading" title="Overview" />
          <p className="text-sm leading-7 break-keep text-muted sm:text-base sm:leading-8">
            연구 배경과 목표, 해결하고자 하는 문제를 정리할 예정입니다.
          </p>
        </section>

        <section
          aria-labelledby="method-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="method-heading" title="Method" />
          <MediaPlaceholder
            label="연구 방법 및 시스템 구성 · 다이어그램 준비 중"
            className="aspect-video sm:aspect-[5/2]"
          />
          <p className="mt-5 text-sm leading-7 break-keep text-muted sm:text-base sm:leading-8">
            연구 방법과 시스템 구성, 주요 기술적 접근에 대한 설명을 추가할
            예정입니다.
          </p>
        </section>

        <section
          aria-labelledby="experiments-heading"
          className="py-10 sm:py-12"
        >
          <SectionHeading
            id="experiments-heading"
            title="Experiments & Demo"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <MediaPlaceholder label="실험 환경 · 이미지 준비 중" />
            <MediaPlaceholder label="실험 결과 및 데모 · 자료 준비 중" />
          </div>
          <p className="mt-5 text-sm leading-7 break-keep text-muted sm:text-base sm:leading-8">
            실험 설정과 평가 방법, 결과 및 데모를 정리할 예정입니다.
          </p>
        </section>
      </article>
    </main>
  );
}
