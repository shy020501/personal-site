import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Seunghyo Yun",
  description: "외부 연구와 산업 사례를 공부한 기술·산업 분석 노트.",
};

export default function CaseStudiesPage() {
  return (
    <main className="site-container py-12 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Case Studies
        </h1>
        <p
          lang="ko"
          className="mt-4 max-w-2xl text-sm leading-7 break-keep text-muted"
        >
          외부 연구와 산업 사례를 공부한 기술·산업 분석 노트입니다.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {caseStudies.map((study) => (
          <ContentCard
            key={study.slug}
            category={study.category}
            title={study.title}
            description={study.description}
            href={`/case-studies/${study.slug}`}
            cta="Read Case Study"
            headingLevel="h2"
          />
        ))}
      </div>
    </main>
  );
}
