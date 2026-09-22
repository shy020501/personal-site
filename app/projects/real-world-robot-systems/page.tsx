import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { getVisibleProjects } from "@/content/projects";
import gripperPhoto from "@/public/images/projects/real-world-robot-systems/gripper.jpg";
import headCameraPhoto from "@/public/images/projects/real-world-robot-systems/head_cam.jpg";
import mainPhoto from "@/public/images/projects/real-world-robot-systems/main.jpg";
import platformPhoto from "@/public/images/projects/real-world-robot-systems/overview.jpg";
import sensorPhoto from "@/public/images/projects/real-world-robot-systems/sensor.jpg";
import wristCameraPhoto from "@/public/images/projects/real-world-robot-systems/wrist_cam.jpg";

const subtitle =
  "실제 로봇 실험을 위한 로봇 시스템 통합, HIL 환경 구축, F/T 센서 기반 실시간 모니터링 및 멀티모달 데이터 수집 시스템을 개발했습니다.";

const platforms = [
  {
    title: "Robot Platform",
    caption:
      "RB3-730 협동 로봇 2대를 사용해 실제 로봇 실험을 위한 플랫폼을 구성했습니다.",
    images: [
      {
        src: platformPhoto,
        alt: "RB3-730 협동 로봇 2대와 작업대로 구성한 로봇 실험 플랫폼",
      },
    ],
  },
  {
    title: "Grippers & Sensors",
    caption:
      "PGC-50-35 그리퍼와 RFT64-SB01 F/T 센서를 연동해 사용했습니다.",
    images: [
      {
        src: gripperPhoto,
        alt: "로봇 팔에 장착된 PGC-50-35 그리퍼",
      },
      {
        src: sensorPhoto,
        alt: "RFT64-SB01 F/T 센서",
      },
    ],
  },
  {
    title: "Cameras & Hardware",
    caption:
      "Head camera는 Intel RealSense D455, 손목 카메라는 Intel RealSense D405를 사용했습니다. Teleoperator로는 3Dconnexion의 SpaceMouse Compact를 사용했습니다.",
    images: [
      {
        src: headCameraPhoto,
        alt: "Head camera로 사용하는 Intel RealSense D455",
      },
      {
        src: wristCameraPhoto,
        alt: "로봇 손목에 장착한 Intel RealSense D405",
      },
    ],
  },
];

const dataSources = [
  "Camera Observations",
  "Robot States",
  "Actions",
  "Task Progress",
  "Force / Torque Signals",
];

const galleryCaptions = ["실험 환경", "시스템 통합", "로봇 실험 데모"];
const toolPlaceholders = ["Tool 01", "Tool 02", "Tool 03", "Tool 04"];

function getProject() {
  const project = getVisibleProjects().find(
    (project) => project.slug === "real-world-robot-systems",
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
    description: subtitle,
  };
}

function MediaPlaceholder({
  label,
  kind = "image",
  className = "aspect-video",
}: {
  label: string;
  kind?: "image" | "diagram";
  className?: string;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-sm border border-border bg-surface p-6 text-center text-muted ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 48 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className="h-8 w-12 opacity-60"
      >
        {kind === "diagram" ? (
          <>
            <rect x="2" y="10" width="12" height="12" rx="1" />
            <rect x="34" y="1" width="12" height="12" rx="1" />
            <rect x="34" y="19" width="12" height="12" rx="1" />
            <path d="M14 16h10M24 7v18M24 7h10M24 25h10" />
          </>
        ) : (
          <>
            <rect x="5" y="2" width="38" height="28" rx="1" />
            <circle cx="16" cy="11" r="3" />
            <path d="m5 25 11-9 8 6 9-10 10 12" />
          </>
        )}
      </svg>
      <p className="text-xs leading-6 break-keep">{label}</p>
    </div>
  );
}

export default function RealWorldRobotSystemsPage() {
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
          <h1 className="mt-3 max-w-4xl text-[1.75rem] leading-snug font-semibold tracking-tight break-keep sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-7 break-keep">
            {subtitle}
          </p>
          <p className="mt-3 text-sm text-muted">{project.organization}</p>
          <div className="mt-8">
            <Image
              src={mainPhoto}
              alt="로봇 팔과 카메라, 조명, 작업대가 구성된 실제 로봇 실험 환경"
              sizes="(min-width: 1200px) 1120px, 100vw"
              loading="eager"
              className="h-auto w-full rounded-sm border border-border"
            />
          </div>
        </header>

        <section
          aria-labelledby="platforms-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="platforms-heading" title="Robot Platforms" />
          <div className="grid gap-6 sm:grid-cols-3">
            {platforms.map((platform) => (
              <figure key={platform.title} className="min-w-0">
                <div
                  className={`relative grid aspect-video overflow-hidden rounded-md border border-border ${
                    platform.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  {platform.images.map((photo, index) => (
                    <div
                      key={photo.src.src}
                      className={`relative min-w-0 overflow-hidden${
                        index === 1 ? " border-l border-border" : ""
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes={
                          platform.images.length === 1
                            ? "(min-width: 1200px) 358px, (min-width: 640px) 31vw, 100vw"
                            : "(min-width: 1200px) 179px, (min-width: 640px) 15vw, 50vw"
                        }
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
                <figcaption className="mt-3">
                  <p lang="en" className="text-sm font-medium">
                    {platform.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 break-keep text-muted">
                    {platform.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="monitoring-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading
            id="monitoring-heading"
            title="Real-Time F/T Monitoring"
          />
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            F/T 센서 연동과 실시간 force/torque 시각화, 로깅 및 모니터링 구성을
            정리합니다. 실험 중 센서 신호를 확인하는 화면과 데이터 기록 흐름을
            추가할 예정입니다.
          </p>
          <div className="mt-6">
            <MediaPlaceholder
              label="실시간 F/T 모니터링 · 스크린샷 준비 중"
              className="aspect-video sm:aspect-[5/2]"
            />
          </div>
        </section>

        <section
          aria-labelledby="hil-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="hil-heading" title="HIL System" />
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            Simulation과 실제 로봇을 연결하는 Human-in-the-Loop (HIL) 환경을
            소개합니다. 제어 명령과 로봇 상태의 연동, 실험 실행 흐름 등 상세 구성은
            이후 추가할 예정입니다.
          </p>
          <div className="mt-6">
            <MediaPlaceholder
              kind="diagram"
              label="HIL 시스템 구성도 준비 중"
              className="aspect-video sm:aspect-[5/2]"
            />
          </div>
        </section>

        <section
          aria-labelledby="collection-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading
            id="collection-heading"
            title="Multimodal Data Collection"
          />
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            카메라 관측, 로봇 상태, 행동, 작업 진행 정보, F/T 신호를 동기화해
            수집하는 구성을 소개합니다. 각 데이터의 연결 관계와 동기화·저장 방식은
            이후 구체화할 예정입니다.
          </p>
          <figure className="mt-6 rounded-sm border border-border bg-surface p-6 sm:p-8">
            <figcaption className="text-center text-xs leading-6 text-muted">
              데이터 수집 흐름 · 다이어그램 준비 중
            </figcaption>
            <div className="mx-auto mt-6 grid max-w-3xl items-center gap-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-6">
              <ul lang="en" className="grid gap-2">
                {dataSources.map((source) => (
                  <li
                    key={source}
                    className="rounded-sm border border-border bg-white px-4 py-3 text-center text-sm"
                  >
                    {source}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden="true"
                className="text-center text-xl text-muted sm:-rotate-90"
              >
                ↓
              </span>
              <div className="rounded-sm border border-dashed border-border px-5 py-8 text-center">
                <p lang="en" className="text-sm font-medium text-accent">
                  Synchronized Collection
                </p>
                <p className="mt-2 text-xs leading-6 text-muted">
                  동기화 및 저장 구성 예정
                </p>
              </div>
            </div>
          </figure>
        </section>

        <section
          aria-labelledby="gallery-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="gallery-heading" title="Gallery / Demo" />
          <div className="grid gap-6 sm:grid-cols-3">
            {galleryCaptions.map((caption) => (
              <figure key={caption} className="min-w-0">
                <MediaPlaceholder label="이미지 준비 중" />
                <figcaption className="mt-3 text-sm text-muted">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="tools-heading" className="pt-10 sm:pt-12">
          <SectionHeading id="tools-heading" title="Tools" />
          <p className="text-sm leading-7 text-muted">
            사용한 도구와 기술 스택을 추가할 예정입니다.
          </p>
          <ul
            lang="en"
            aria-label="Tools to be added"
            className="mt-4 flex flex-wrap gap-2"
          >
            {toolPlaceholders.map((tool) => (
              <li
                key={tool}
                className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
