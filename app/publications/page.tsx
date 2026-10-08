import type { Metadata } from "next";
import { PublicationList } from "@/components/publication-list";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications | Seunghyo Yun",
  description:
    "윤승효의 diffusion models, reward fine-tuning, concept unlearning 관련 연구 논문.",
};

export default function PublicationsPage() {
  return (
    <main className="site-container py-12 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Publications
        </h1>
        <p
          lang="ko"
          className="mt-4 max-w-2xl text-sm leading-7 break-keep text-muted"
        >
          Diffusion models, Reinforcement Learning 관련 연구 논문입니다.
        </p>
      </header>
      <PublicationList publications={publications} headingLevel="h2" />
    </main>
  );
}
