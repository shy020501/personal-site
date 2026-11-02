import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { getVisibleProjects } from "@/content/projects";
import metagloveImage from "@/public/images/projects/physical-ai/metaglove.jpg";
import viveTrackerImage from "@/public/images/projects/physical-ai/vive_tracker.jpeg";

const subtitle =
  "시뮬레이션 기반 dexterous manipulation을 위한 teleoperation 환경 구축 및 학습 연구";

const simulationBackends = [
  {
    name: "Bench2Dex",
    href: "https://github.com/Bench2Dex/Bench2Dex",
    engine: "Isaac Sim / Isaac Lab",
    configuration: "양팔 로봇과 dexterous hand(12종) 기반 작업 환경",
  },
  {
    name: "POMDAR",
    href: "https://github.com/srl-ethz/pomdar_benchmark",
    engine: "MuJoCo",
    configuration: "단일 오른손 ORCA hand",
  },
  {
    name: "DexJoCo",
    href: "https://github.com/brave-eai/dexjoco",
    engine: "MuJoCo",
    configuration: "Panda와 Allegro hand의 단일·양팔 작업 환경",
  },
  {
    name: "DexMimicGen",
    href: "https://github.com/NVlabs/dexmimicgen",
    engine: "MuJoCo / robosuite",
    configuration: "Panda 또는 GR1을 사용하는 양팔 작업 환경",
  },
];

function getProject() {
  const project = getVisibleProjects().find(
    (project) => project.slug === "physical-ai",
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

function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-border bg-surface p-6 text-center">
      <p className="text-xs leading-6 break-keep text-muted">{label}</p>
    </div>
  );
}

export default function PhysicalAiPage() {
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
          <p className="mt-4 text-base leading-7 break-keep">{subtitle}</p>
          <p className="mt-3 text-sm text-muted">{project.organization}</p>
        </header>

        <section
          aria-labelledby="overview-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="overview-heading" title="Overview" />
          <div className="space-y-5 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              Physical AI의 정교한 물체 조작을 위해 dexterous robot hand(5지손)
              환경 구축 및 연구를 진행하였습니다.
              이를 위해 시뮬레이션 기반 teleoperation 및 데이터 수집 시스템인
              Dex-teleop(
              <a
                href="https://github.com/shy020501/dex-teleop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              >
                프로젝트 페이지
              </a>
              )을 개발하였습니다. 작업자의 손동작으로 시뮬레이션 속 로봇 손을
              조작하고, 이 과정에서 demonstration을 수집하여 로봇 조작 학습에
              활용할 수 있도록 구성하였습니다.
              모델 설계 및 평가에 관한 내용은 추후 업데이트할 예정입니다.
            </p>
          </div>

          <section aria-labelledby="hardware-heading" className="mt-8">
            <h3
              id="hardware-heading"
              lang="en"
              className="mb-5 text-lg leading-7 font-semibold tracking-tight sm:text-xl"
            >
              Hardware
            </h3>
            <div className="space-y-5 text-sm leading-7 break-keep sm:text-base sm:leading-8">
              <p>
                MANUS Metaglove Pro Haptic은 작업자가 착용한 장갑에서 손가락의
                움직임을 추적하고, 손가락별 촉각(Haptic) 피드백을 제공하는 장비입니다.
                본 프로젝트에서는 로봇 손의 관절을 조작하기 위한 입력 장치로
                활용하며, 시뮬레이션에서 발생한 접촉 정보를 진동으로 전달하는
                경로를 구성하였습니다.
                Metaglove에서도 회전 정보를 제공하지만, 본 프로젝트에서는
                손목의 위치와 회전 정보를 HTC Vive Tracker에서 함께 입력받도록
                구성하였습니다. 이를 위해 Tracker와 Base Station을
                연동하고, Tracker에서 얻은 위치·회전 정보를 각 시뮬레이션 좌표계에
                맞춰 Metaglove의 손가락 동작 정보와 결합하였습니다.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-white">
                    <Image
                      src={metagloveImage}
                      alt="MANUS Metaglove Pro Haptic을 착용한 손과 화면에 표시된 손동작 추적 결과"
                      fill
                      sizes="(min-width: 1200px) 548px, (min-width: 768px) 45vw, 90vw"
                      className="object-fill"
                    />
                  </div>
                </figure>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-white">
                    <Image
                      src={viveTrackerImage}
                      alt="HTC Vive Tracker를 서로 다른 각도에서 본 모습"
                      fill
                      sizes="(min-width: 1200px) 548px, (min-width: 768px) 45vw, 90vw"
                      className="object-contain"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </section>
        </section>

        <section
          aria-labelledby="system-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading
            id="system-heading"
            title="Simulation & Teleoperation System"
          />
          <div className="space-y-5 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              다양한 로봇 손과 작업 환경에서 demonstration 수집 및 학습을 할 수 있도록
              Bench2Dex, POMDAR, DexJoCo, DexMimicGen 환경을 연동하였습니다. 각 프로젝트에서
              제공하는 로봇·작업 환경과 제어기를 활용하였으며, 기존 retargeting
              또는 각 손의 구성에 맞춘 입력 매핑으로 MANUS 장갑을 연결하였습니다.
              이를 공통 Windows 클라이언트와 브라우저 대시보드에서 조작하고
              데이터를 수집할 수 있도록 구성하였습니다.
            </p>

            <div className="overflow-x-auto rounded-sm border border-border">
              <table
                aria-label="연동한 시뮬레이터와 제어 구성"
                className="w-full min-w-[640px] text-left text-sm leading-6"
              >
                <thead lang="en" className="border-b border-border bg-surface">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Simulation
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Engine
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Robot Setup
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {simulationBackends.map((backend) => (
                    <tr key={backend.name}>
                      <th scope="row" className="px-4 py-3 align-top font-medium">
                        <a
                          href={backend.href}
                          lang="en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {backend.name}
                        </a>
                      </th>
                      <td lang="en" className="px-4 py-3 align-top">
                        {backend.engine}
                      </td>
                      <td className="px-4 py-3 align-top">
                        {backend.configuration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <video
              controls
              playsInline
              preload="metadata"
              aria-label="Dex-teleop 시뮬레이션 및 원격 조작 시연 영상"
              className="block aspect-video w-full rounded-sm border border-border bg-black"
            >
              <source
                src="/videos/projects/physical-ai/dex-teleop.mp4"
                type="video/mp4"
              />
              브라우저가 동영상 재생을 지원하지 않습니다.{" "}
              <a href="/videos/projects/physical-ai/dex-teleop.mp4">
                영상 직접 열기
              </a>
            </video>

            <p>
              MANUS Metaglove Pro Haptic은 손가락 자세 인식을 위해 필요한 Bluetooth dongle을 통해 Windows에
              연결하고, 시뮬레이션은 Linux GPU 서버에서 실행하도록 구성하였습니다.
              Windows는 장갑 입력과 진동 출력을 담당하고, Linux는 입력을 로봇
              동작으로 변환하고 작업 환경을 실행합니다. 두 시스템 사이에는
              조작 입력과 접촉 피드백을 주고받는 통신 경로를 마련하고, 작업자는
              브라우저에서 시뮬레이션과 카메라 영상을 확인하도록 하였습니다.
            </p>

          </div>
        </section>

        <section
          aria-labelledby="collection-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading
            id="collection-heading"
            title="Demonstration Collection"
          />
          <div className="space-y-5 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              작업 선택과 필요한 asset 준비, 카메라 확인, episode 수집,
              저장된 데이터 검토를 하나의 대시보드에 연결하였습니다. 서로 다른
              시뮬레이터에서도 환경 초기화와 수집 시작·종료, 저장 경로 관리를
              같은 흐름으로 수행하도록 구성하여 반복적인 demonstration 수집을
              지원하고자 하였습니다.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <MediaPlaceholder label="Data collection 시연 영상 1" />
              <MediaPlaceholder label="Data collection 시연 영상 2" />
            </div>

            <p>
              카메라 영상, 로봇과 물체의 상태, 제어 입력을 함께 기록하고,
              작업·로봇 정보와 수집 설정, 수행 결과를 episode 단위로 정리하도록
              하였습니다. 환경별 로봇 구성과 제어 입력의 정의를 메타데이터로
              명시하여 수집 데이터와 함께 저장합니다. 영상과 상태, 입력의
              시간적 대응을 유지하여 이후 모델 학습에 사용할 demonstration을
              해석하고 검토할 수 있도록 구성하였습니다.
            </p>
            <p>
              일부 환경에서는 물리 시뮬레이션 및 로봇 제어와 화면 렌더링을 별도 프로세스로 분리하여
              실행하도록 수정하였습니다. 이 과정에서 발생할 수 있는 영상과 상태 데이터 간의
              시간적 불일치를 점검하기 위해, 기록된 영상과 기록된 action을 기반으로 생성된
              replay를 통해 수집 당시 동작의 재현성을 확인할 수
              있도록 구성하였습니다. 이를 통해 원격 조작으로 데이터를 만드는 과정과 후속
              모델 학습을 위한 데이터 검토 과정을 연결하였습니다.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="learning-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading
            id="learning-heading"
            title="Dexterous Policy Learning"
          />
          {/* 학습 방법이 정해지면 방법론과 모델 구조를 추가합니다. */}
          <p className="text-sm leading-7 text-muted">
            모델 구조와 학습 방법은 추후 추가할 예정입니다.
          </p>
        </section>

        <section
          aria-labelledby="evaluation-heading"
          className="py-10 sm:py-12"
        >
          <SectionHeading
            id="evaluation-heading"
            title="Experiments & Evaluation"
          />
          {/* 실험 진행 후 평가 설정, 결과와 데모를 추가합니다. */}
          <p className="text-sm leading-7 text-muted">
            실험 설정과 평가 결과는 추후 추가할 예정입니다.
          </p>
        </section>
      </article>
    </main>
  );
}
