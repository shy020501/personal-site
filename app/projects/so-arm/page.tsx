import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { getVisibleProjects } from "@/content/projects";

function getProject() {
  const project = getVisibleProjects().find(
    (project) => project.slug === "so-arm",
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

export default function SoArmPage() {
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
          <p className="mt-3 text-sm text-muted">{project.organization}</p>
        </header>

        <section
          aria-labelledby="overview-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="overview-heading" title="Overview" />
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            본 프로젝트에서는 Modern Robotics를 통해 학습한 로봇공학 이론을 실제
            하드웨어에 적용하는 것을 목표로 합니다. PyBrain SO-ARM 플랫폼을
            기반으로 기존 LeRobot 프레임워크의 핵심 기능을 직접 구현하고, 로봇의
            상태를 읽고 동작을 생성하는 저수준 인터페이스부터 teleoperation과 데이터
            수집까지 연결하는 독립적인 소프트웨어 스택을 개발하고자 합니다.
          </p>
        </section>

        <section
          aria-labelledby="architecture-heading"
          className="py-10 sm:py-12"
        >
          <SectionHeading
            id="architecture-heading"
            title="Hardware & System Architecture"
          />
          <div className="space-y-4 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              프로젝트에는 PyBrain SO-ARM의 Leader arm, Follower arm 및 카메라를
              사용합니다.
            </p>
            <p>
              Leader arm은 작업자의 움직임을 입력받는 teleoperation device로
              활용하고, Follower arm은 생성된 명령에 따라 실제 동작을 수행합니다.
              카메라는 로봇 작업 환경의 시각적 관측을 제공하며, 로봇 상태 및 행동
              정보와 함께 기록할 수 있도록 구성합니다.
            </p>
            <p>
              소프트웨어는 하드웨어 통신, 로봇 기구학, 동작 생성, teleoperation,
              데이터 수집 기능을 각각 독립적인 모듈로 구성하여 확장성을 확보하는
              것을 목표로 합니다.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
