import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getVisibleProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects | Seunghyo Yun",
  description:
    "윤승효의 로봇 시스템, 멀티모달 로봇 학습, Physical AI 연구 프로젝트.",
};

export default function ProjectsPage() {
  const projects = getVisibleProjects();

  return (
    <main className="site-container py-12 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p
          lang="ko"
          className="mt-4 max-w-2xl text-sm leading-7 break-keep text-muted"
        >
          실제 로봇 시스템과 멀티모달 학습, Physical AI를 다루는 연구 프로젝트입니다.
        </p>
      </header>
      {projects.length > 0 ? (
        <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h2" />
          ))}
        </div>
      ) : (
        <p lang="ko" className="text-sm leading-7 text-muted">
          공개된 프로젝트가 아직 없습니다.
        </p>
      )}
    </main>
  );
}
