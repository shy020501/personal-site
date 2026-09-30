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
import dashboardVisualizerImage from "@/public/images/projects/real-world-robot-systems/visualizer.png";
import stlVisualizerImage from "@/public/images/projects/real-world-robot-systems/visualizer_stl.png";
import wristCameraPhoto from "@/public/images/projects/real-world-robot-systems/wrist_cam.jpg";
import { CollectedDataSection } from "./collected-data-section";
import { HilSystemDiagram } from "./hil-system-diagram";

const subtitle =
  "실제 로봇 실험을 위한 로봇 시스템 통합, HIL 환경 구축, F/T 센서 기반 실시간 모니터링 및 멀티모달 데이터 수집 시스템을 개발했습니다.";

const platforms = [
  {
    title: "Robot Platform",
    caption:
      "RB3-730 협동 로봇 2대를 사용해 실제 로봇 실험을 위한 플랫폼을 구성하였습니다. 두 로봇의 제어 인터페이스를 통합하는 별도의 wrapper를 구현하여, 양팔을 하나의 공통 인터페이스에서 관리·제어할 수 있는 dual-arm environment를 구축하였습니다.",
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
      "PGC-50-35 그리퍼와 RFT64-SB01 F/T 센서를 연동해 사용하였으며, F/T 센서 데이터는 100 Hz 주기로 수집하였습니다.",
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
      "상단 카메라는 Intel RealSense D455, 손목 카메라는 Intel RealSense D405를 사용했습니다. Teleoperator로는 3Dconnexion의 SpaceMouse Compact를 사용했습니다.",
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
          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid aspect-video grid-cols-2 overflow-hidden rounded-md border border-border bg-black">
              <div className="relative min-w-0 overflow-hidden">
                <Image
                  src={stlVisualizerImage}
                  alt="카메라 영상과 양팔 gripper의 STL 기반 공간 시각화를 함께 표시한 초기 모니터링 화면"
                  fill
                  sizes="(min-width: 1200px) 274px, (min-width: 768px) 25vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
              <div className="relative min-w-0 overflow-hidden border-l border-border">
                <Image
                  src={dashboardVisualizerImage}
                  alt="카메라 영상 아래 좌우 force와 torque의 시계열 그래프를 표시한 최종 모니터링 화면"
                  fill
                  sizes="(min-width: 1200px) 274px, (min-width: 768px) 25vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
            <video
              controls
              playsInline
              preload="metadata"
              aria-label="초기 STL 기반 F/T 공간 시각화 시연 영상"
              className="aspect-video w-full overflow-hidden rounded-md border border-border bg-black object-contain"
            >
              <source
                src="/videos/projects/real-world-robot-systems/visualizer_stl.mp4"
                type="video/mp4"
              />
              <a href="/videos/projects/real-world-robot-systems/visualizer_stl.mp4">
                STL 기반 시각화 영상 파일 열기
              </a>
            </video>
            <video
              controls
              playsInline
              preload="metadata"
              aria-label="최종 time-series F/T 대시보드 시연 영상"
              className="aspect-video w-full overflow-hidden rounded-md border border-border bg-black object-contain"
            >
              <source
                src="/videos/projects/real-world-robot-systems/visualizer_new.mp4"
                type="video/mp4"
              />
              <a href="/videos/projects/real-world-robot-systems/visualizer_new.mp4">
                F/T 대시보드 영상 파일 열기
              </a>
            </video>
            <video
              controls
              playsInline
              preload="metadata"
              aria-label="추가 time-series F/T 대시보드 시연 영상"
              className="aspect-video w-full overflow-hidden rounded-md border border-border bg-black object-contain"
            >
              <source
                src="/videos/projects/real-world-robot-systems/visualizer_new_usb.mp4"
                type="video/mp4"
              />
              <a href="/videos/projects/real-world-robot-systems/visualizer_new_usb.mp4">
                추가 F/T 대시보드 영상 파일 열기
              </a>
            </video>
          </div>

          <div className="mt-7 space-y-8 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              3Dconnexion SpaceMouse Compact를 이용한 teleoperation은
              end-effector의 위치와 자세를 직관적으로 조작할 수 있지만, 별도의
              haptic feedback을 제공하지 않기 때문에 작업자가 로봇과 환경 사이에
              발생하는 접촉력을 직접 인지하기 어렵습니다. 특히 contact-rich
              manipulation에서는 카메라 영상만으로 현재 end-effector에 어느 정도의
              힘과 토크가 가해지고 있는지 판단하기 어렵고, 순간적으로 큰 접촉력이
              발생하더라도 이를 즉각적으로 인지하지 못할 수 있습니다. 이를 보완하기
              위해 양팔 end-effector에서 측정되는 6-axis F/T 신호를 teleoperation
              화면과 함께 실시간으로 확인할 수 있는 모니터링 시스템을
              구축하였습니다.
            </p>

            <div className="space-y-4">
              <h3
                lang="en"
                className="text-base leading-7 font-bold sm:text-lg"
              >
                Initial Design — STL-based Spatial Visualization
              </h3>
              <p>
                초기에는 gripper의 STL model을 기반으로 한 3D spatial visualization을
                구현하였습니다. 로봇의 TCP pose를 이용해 실제 end-effector의 위치와
                자세를 3D scene에 반영하고, F/T sensor에서 측정한 힘과 토크를 벡터
                형태로 함께 표시하였습니다. 또한 world-frame XYZ 축을 추가하여
                gripper의 현재 자세와 외력 방향의 관계를 직관적으로 확인할 수
                있도록 구성했습니다. 양팔에 대해 각각 visualization을 생성한 뒤
                카메라 이미지와 하나의 화면으로 결합하여, 실제 작업 장면과
                end-effector에 가해지는 외력을 동시에 모니터링할 수 있도록
                하였습니다.
              </p>
              <p>
                해당 방식은 특히 gripper의 자세와 힘 방향을 공간적으로
                함께 확인할 수 있다는 점에서 유용했습니다. 하지만 실제
                teleoperation 과정에서는 몇 가지 한계가 있었습니다. 힘은 직선
                벡터로 표현했을 때 비교적 직관적이지만, 토크는 회전축과 회전 경향을
                나타내는 물리량임에도 동일한 화살표 형태로 표현되어 즉각적인 해석이
                어려웠습니다. 또한 매 순간의 F/T vector만 보여주기 때문에 순간적인
                peak, 지속적인 contact load, vibration 등 시간에 따른 변화 양상을
                확인하기 어려웠고, 작업자가 특정 순간을 놓치면 직전에 발생한 큰
                contact event를 다시 파악하기도 어려웠습니다. 이러한 한계를
                바탕으로 이후에는 3D spatial visualization 대신 축별 F/T 값과 최근
                변화 추이를 함께 확인할 수 있는 대시보드 형태로 모니터링
                인터페이스를 재설계하였습니다.
              </p>
            </div>

            <div className="space-y-4">
              <h3
                lang="en"
                className="text-base leading-7 font-bold sm:text-lg"
              >
                Final Design — Time-Series F/T Dashboard
              </h3>
              <p>
                이러한 한계를 바탕으로 최종 구현에서는 3D STL visualization을
                제거하고, 좌/우 end-effector의 힘과 토크를 time-series 형태로
                직접 모니터링하는 대시보드 형태로 변경하였습니다. 각 arm에 대해 Fx,
                Fy, Fz와 Tx, Ty, Tz를 독립적으로 표시하고, 힘과 토크를 별도의 행으로
                분리하였습니다. 실제 카메라 이미지를 화면 상단에 유지한 채 그 아래에
                좌/우 힘 패널과 토크 패널을 배치하여, 작업 장면과 F/T state를 하나의
                화면에서 동시에 확인할 수 있도록 구성했습니다.
              </p>
              <p>
                각 패널은 또한 전체 vector norm을 함께 제공하도록 구성하였습니다.
                따라서 작업자는 최근 신호의 변화 추이를 그래프로 확인하는 동시에,
                현재 Fx/Fy/Fz 또는 Tx/Ty/Tz의 정확한 값을 바로 읽을 수 있습니다.
                X/Y/Z 축에는 일관된 색상을 적용하여 여러 패널 간에도 동일한 축을
                빠르게 추적할 수 있도록 하였습니다.
              </p>
              <p>
                Time-series 그래프는 전체 history를 별도 자료구조에 계속 누적하는
                방식 대신 고정 크기의 image buffer를 scrolling하는 방식으로
                구현하였습니다. 매 업데이트마다 기존 trace를 한 픽셀 씩 왼쪽으로
                이동시키고, 가장 오른쪽 열에 이전 샘플과 현재 샘플을 연결하는 새로운
                line segment만 추가합니다. 이 방식은 모니터링 시간이 길어져도
                visualization에 사용하는 메모리와 화면 크기가 증가하지 않으며, 최근
                F/T history만 지속적으로 유지할 수 있다는 장점이 있습니다.
              </p>
              <p>
                Visualization이 teleoperation의 타이밍에 영향을
                주지 않는 것을 중요한 설계 조건으로 유지하여 control loop에서는
                가장 최신 visualization frame 하나만 queue에 전달하고, OpenCV
                window rendering은 별도의 daemon thread에서 처리합니다. Queue가
                이미 차 있는 경우에는 기존 프레임을 제거하고 새로운 프레임으로
                교체하므로, 랜더링 속도가 일시적으로 느려져도 과거 프레임이 쌓이면서
                display latency가 증가하지 않습니다.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="hil-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="hil-heading" title="HIL System" />
          <div className="flow-root text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <div className="mb-8 space-y-6 md:float-right md:mb-6 md:ml-6 md:w-[calc(50%-0.75rem)]">
              <figure>
                <div className="aspect-video overflow-hidden rounded-md border border-border bg-white">
                  <HilSystemDiagram />
                </div>
              </figure>

              <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-md border border-border bg-surface text-muted">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  className="size-8 opacity-60"
                >
                  <rect x="2" y="5" width="28" height="22" rx="2" />
                  <path d="m13 11 8 5-8 5Z" />
                </svg>
                <p className="text-center text-xs leading-6">
                  <span lang="en" className="block">HIL Teleoperation Demo</span>
                  영상 준비 중
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 lang="en" className="text-base leading-7 font-bold sm:text-lg">
                  Policy &amp; Human Intervention
                </h3>
                <p>
                  Policy action과 Dual SpaceMouse 기반 human intervention을
                  중재하는 Human-in-the-Loop (HIL) wrapper를 구현하였습니다. 작업자
                  입력 유무에 따라 매 step에서 실행할 action을 선택합니다.
                </p>
                <p>
                  SpaceMouse의 움직임이나 gripper 입력이 감지되면{" "}
                  <code className="text-[0.9em]">intervened=True</code>로 판단하고,
                  policy action을 expert action으로 대체합니다. Intervention이
                  없으면 policy action을 그대로 사용합니다.
                  실행 중에는 human intervention이 발생한 action과 버튼·회전 잠금
                  상태를 함께 기록하여, 작업자의 개입과 조작 과정을 확인할 수
                  있도록 하였습니다.
                </p>
              </div>

              <div className="space-y-4">
                <h3 lang="en" className="text-base leading-7 font-bold sm:text-lg">
                  Teleoperation &amp; Logging
                </h3>
                <p>
                  Dual SpaceMouse로 로봇의 위치·자세와 gripper를 조작하며,
                  이동·회전 잠금과 오른팔 단독 조작을 지원합니다. 입력에는{" "}
                  <code className="text-[0.9em]">invsymlog</code>를 적용해 로봇이
                  사용하는 action 형식으로 변환합니다.
                </p>
                <p>
                  미세한 SpaceMouse 움직임으로 불필요한 intervention이 발생하지
                  않도록 입력 크기에 임계값을 적용하였습니다. 또한, gripper의 개폐
                  동작 delay를 고려하여 버튼 입력에 0.5초의 최소 간격을 설정하고,
                  개폐 명령이 짧은 시간에 반복 전달되지 않도록 하였습니다.
                </p>
                <p>
                  SpaceMouse 회전 입력 시 TCP 중심 회전으로 인해 그리퍼 끝단의
                  위치가 크게 변하는 문제를 줄이기 위해, 그리퍼 길이와 현재 자세를
                  기반으로 끝단의 변위를 계산했습니다. 계산된 변위를 Cartesian
                  translation에 보상하여, 그리퍼 끝단을 중심으로 회전하는 것에
                  가까운 직관적인 원격 조작을 구현했습니다.
                </p>
                <p>
                  로봇 환경이 특정 조작 장치에 종속되지 않도록, 장치별 입력을 공통
                  action 형식으로 변환하는 teleoperator-agnostic 구조로
                  설계하였습니다. 다른 장치는 이 형식에 맞는 입력 연동을 추가하는
                  방식으로 확장할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CollectedDataSection />

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
