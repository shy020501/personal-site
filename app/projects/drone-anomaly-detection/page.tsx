import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { getVisibleProjects } from "@/content/projects";
import simulationImage from "@/public/images/projects/drone-anomaly-detection/airsim_simulation.png";
import distortedSensorImage from "@/public/images/projects/drone-anomaly-detection/distorted_sensor.png";
import distortionSetupImage from "@/public/images/projects/drone-anomaly-detection/distortion_setup.png";
import resultImage from "@/public/images/projects/drone-anomaly-detection/result.png";

const subtitle =
  "IMU 센서 왜곡 환경에서 목표 지점 이동과 호버링을 수행하는 강화학습 기반 드론 제어 연구";

const environment = [
  {
    label: "Software",
    value:
      "Unreal Engine 4.27 · AirSim 1.8.1 · PX4 1.11.3 · Stable-Baselines3 2.0.0",
  },
  { label: "Drone", value: "DJI F450" },
  {
    label: "Inputs",
    value: "자이로 센서, 가속 센서, GPS 위치 및 속도",
  },
  { label: "Distortion Targets", value: "자이로 센서 · 가속 센서" },
  { label: "GPU", value: "RTX 2080 Ti 11GB × 4" },
];

const actionSpaces = [
  { name: "Position", control: "x, y, z 위치", range: "−5 ~ +5" },
  { name: "Velocity", control: "x, y, z 속도", range: "−1 ~ +1" },
  {
    name: "Angular Velocity",
    control: "x, y, z 각속도",
    range: "−3.14 ~ +3.14",
  },
  { name: "Motor Control", control: "각 모터 출력 세기", range: "0 ~ 1" },
];

const learningProgression = [
  {
    action: "Position-based Action",
    difficulty: "매우 쉽게 학습",
    steps: "약 100K steps 이내",
  },
  { action: "Velocity-based Action", difficulty: "쉽게 학습" },
  {
    action: "Angular Velocity based Action",
    difficulty: "많은 학습 시간 소요",
  },
  {
    action: "Motor-control based Action",
    difficulty: "매우 많은 학습 시간 소요",
    steps: "약 10M steps",
  },
];

const inlineLinkClassName =
  "text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent";

function getProject() {
  const project = getVisibleProjects().find(
    (project) => project.slug === "drone-anomaly-detection",
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

function ProjectImage({
  src,
  alt,
  sizes = "(min-width: 1200px) 1120px, 100vw",
}: {
  src: StaticImageData;
  alt: string;
  sizes?: string;
}) {
  return (
    <a
      href={src.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${alt} — 원본 이미지 새 탭에서 보기`}
      className="block cursor-zoom-in overflow-hidden rounded-sm border border-border"
    >
      <Image src={src} alt={alt} sizes={sizes} className="h-auto w-full" />
    </a>
  );
}

export default function DroneAnomalyDetectionPage() {
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
          aria-labelledby="environment-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="environment-heading" title="Simulation Environment" />
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            Microsoft Research의{" "}
            <a
              href="https://microsoft.github.io/AirSim/"
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLinkClassName}
            >
              AirSim
            </a>
            을 기반으로 드론 비행 시뮬레이션 환경을 구성하였습니다. DJI F450
            모델을 사용하여 센서 왜곡 수준과 제어 방식에 따른 강화학습 정책의
            비행 성능을 평가하였습니다.
          </p>
          <div className="mt-6 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
            <ProjectImage
              src={simulationImage}
              alt="AirSim 환경에서 DJI F450 드론을 비행시키는 시뮬레이션 화면"
              sizes="(min-width: 1200px) 544px, (min-width: 1024px) 50vw, 100vw"
            />
            <dl className="divide-y divide-border text-sm leading-6">
              {environment.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-4"
                >
                  <dt lang="en" className="text-muted">
                    {item.label}
                  </dt>
                  <dd className="break-keep">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="motivation-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="motivation-heading" title="Motivation" />
          <div className="space-y-4 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              IMU의 선형가속도와 각속도는 드론의 움직임을 추정하고 비행을 제어하는
              데 사용됩니다. 실제 비행에서는{" "}
              <a
                href="https://docs.px4.io/v1.14/en/advanced_config/tuning_the_ecl_ekf#what-should-i-do-if-the-height-estimate-is-diverging"
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLinkClassName}
              >
                기체 진동에 의한 측정 신호 왜곡
              </a>
              이나{" "}
              <a
                href="https://docs.px4.io/v1.12/en/advanced_config/sensor_thermal_calibration"
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLinkClassName}
              >
                온도 변화에 따른 센서 bias
              </a>
              가 발생할 수 있습니다. 부정확한 센서값은 위치·자세 추정에 오차를
              만들고, 이를 바탕으로 이루어지는 제어에도 영향을 주어 목표 위치로의
              이동이나 안정적인 호버링을 어렵게 할 수 있습니다.
            </p>
            <p>
              연구의 출발점은{" "}
              <a
                href="https://review.px4.io/browse"
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLinkClassName}
              >
                PX4 Flight Review
              </a>
              의 공개 비행 로그에서 확인한 실제 드론의 IMU 센서 왜곡 사례입니다.
              첨부한 선형가속도와 각속도 데이터는 이곳에서 확인한 실제 왜곡값입니다.
              이러한 상황에서도 목표 지점에 도달하고 위치를 유지할 수 있도록,
              왜곡된 관측값에 대응하는 강화학습 기반 제어 정책을 연구하였습니다.
            </p>
          </div>
          <div className="mt-6">
            <ProjectImage
              src={distortedSensorImage}
              alt="PX4 공개 비행 로그에서 확인한 실제 드론의 선형가속도 및 각속도 왜곡 데이터"
            />
          </div>
        </section>

        <section
          aria-labelledby="distortion-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="distortion-heading" title="IMU Distortion Setup" />
          <div className="space-y-4 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              센서 왜곡을 재현하고 강도를 조절하기 위해, 현재 IMU에서 측정한
              linear acceleration과 angular velocity에 정규분포에서 추출한
              노이즈를 더하였습니다. 각 센서 신호의 최대 크기 기준값에 원하는
              왜곡률을 곱해 표준편차를 정하고, 평균이 0인 정규분포에서 값을
              샘플링하였습니다.
            </p>
            <div className="grid gap-3 rounded-sm border border-border bg-surface px-5 py-4 font-mono text-base sm:grid-cols-3">
              <p>σ = p · M</p>
              <p>
                ε<sub>t</sub> ~ N(0, σ<sup>2</sup>)
              </p>
              <p>
                x̃<sub>t</sub> = x<sub>t</sub> + ε<sub>t</sub>
              </p>
            </div>
            <p>
              M은 센서 신호별 최대 크기 기준값, p는 왜곡률을 비율로 나타낸 값이며,
              σ는 주입할 노이즈의 표준편차입니다. 매 시점의 측정값에 샘플링한
              노이즈를 더해 왜곡된 관측값을 생성합니다. 왜곡률은 이 기준값에 대해
              일관되게 적용하므로, 서로 다른 왜곡 강도에서 정책의 동작을 비교할
              수 있습니다.
            </p>
          </div>
          <div className="mt-6">
            <ProjectImage
              src={distortionSetupImage}
              alt="왜곡 없음, 10%, 20% 조건에서의 각속도와 선형가속도 신호 비교"
            />
          </div>
        </section>

        <section
          aria-labelledby="mdp-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="mdp-heading" title="MDP Formulation" />
          <dl className="divide-y divide-border text-sm leading-7 sm:text-base sm:leading-8">
            <div className="grid gap-2 pb-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
              <dt lang="en" className="font-semibold">State</dt>
              <dd className="break-keep">
                목표 지점 좌표, GPS 좌표 및 속도, 선형가속도, 각속도, orientation
              </dd>
            </div>
            <div className="grid gap-2 pt-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
              <dt lang="en" className="font-semibold">Reward</dt>
              <dd className="break-keep">
                현재 위치에서 목표 지점까지의 거리에 따라 보상을 부여하였습니다.
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <h3 id="action-space-heading" className="text-base leading-7 font-bold sm:text-lg">
              Action Spaces
            </h3>
            <p className="mt-3 text-sm leading-7 break-keep sm:text-base sm:leading-8">
              위치 명령부터 모터 출력까지, 제어 수준이 다른 아래 네 가지 행동
              공간을 각각 구성하여 학습을 시도하였습니다. 각 설정에서 정책은
              해당 범위의 연속적인 제어값을 선택합니다.
            </p>
            <div
              role="region"
              aria-labelledby="action-space-heading"
              tabIndex={0}
              className="mt-5 overflow-x-auto rounded-sm border border-border"
            >
              <table className="w-full min-w-[480px] text-left text-sm leading-6">
                <thead className="border-b border-border bg-surface text-muted">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Action</th>
                    <th scope="col" className="px-4 py-3 font-medium">제어 대상</th>
                    <th scope="col" className="px-4 py-3 font-medium">선택 범위 (각 성분)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {actionSpaces.map((action) => (
                    <tr key={action.name}>
                      <th scope="row" lang="en" className="px-4 py-3 font-medium">
                        {action.name}
                      </th>
                      <td className="px-4 py-3">{action.control}</td>
                      <td className="px-4 py-3 whitespace-nowrap tabular-nums">
                        {action.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="baseline-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="baseline-heading" title="Baseline Learning" />
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            먼저 IMU 왜곡이 없는 환경에서 10 m 떨어진 목표 지점으로 이동한 뒤,
            해당 위치에서 호버링하는 기본 task를 학습하였습니다. 알고리즘은
            Soft Actor-Critic (SAC)을 사용하였으며, actor와 두 개의 Q network를
            각각 256차원 hidden layer 3개로 구성하였습니다.
          </p>
          <div
            role="region"
            aria-label="행동 공간별 학습 난이도와 학습 step 규모 비교"
            tabIndex={0}
            className="mt-6 overflow-x-auto border-y border-border py-6"
          >
            <div className="min-w-[960px]">
              <ol className="grid grid-cols-4 gap-8">
                {learningProgression.map((item, index) => (
                  <li key={item.action} className="relative text-center">
                    <p
                      lang="en"
                      className={`leading-6 whitespace-nowrap ${item.steps ? "text-base font-semibold" : "text-sm font-medium"}`}
                    >
                      {item.action}
                    </p>
                    <p className="mt-2 text-sm text-muted">{item.difficulty}</p>
                    {item.steps && (
                      <p className="mt-2 text-sm font-semibold text-accent">
                        {item.steps}
                      </p>
                    )}
                    {index < learningProgression.length - 1 && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        className="absolute top-2 -right-7 h-2 w-6 text-accent/60"
                      >
                        <path d="M0 4h23" />
                        <path d="m19 1 4 3-4 3" />
                      </svg>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            Position-based Action은 약 100K steps 이내에 rule-based 수준으로 기본 task를 학습한 반면,
            모터 출력을 직접 결정하는 Motor-control-based Action은 약 10M
            steps가 필요하였습니다. 같은 목표에 대해서도 행동 공간에 따라
            학습에 필요한 상호작용 규모가 크게 달라졌습니다.
          </p>
        </section>

        <section
          aria-labelledby="curriculum-heading"
          className="border-b border-border py-10 sm:py-12"
        >
          <SectionHeading id="curriculum-heading" title="Learning with IMU Distortion" />
          <div className="space-y-4 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              센서 왜곡 환경에서는 Motor-control-based Action 세팅에서
              동일한 SAC 알고리즘과 network 구조에
              Hindsight Experience Replay (HER)를 추가하여 학습하였습니다.
              처음부터 일정한 왜곡 수준을 적용했을 때 0–40% 조건에서는 학습이
              가능했지만, 50% 이상의 높은 왜곡 조건에서는 학습에 어려움이
              있었습니다.
            </p>
            <p>
              이에 따라 낮은 왜곡 수준에서 시작해 점진적으로 난이도를 높이는
              curriculum learning을 도입하였습니다. 각 단계의 최대 왜곡 수준을
              X%로 두고, 학습 중 노출되는 왜곡 조건을 두 비율로 나누었습니다.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-sm border border-border bg-surface">
            <div className="px-4 py-4 sm:px-5">
              <p className="text-xs text-muted">학습 노출의 50%</p>
              <p className="mt-2 text-base font-semibold text-accent sm:text-lg">
                x% 왜곡
              </p>
            </div>
            <div className="border-l border-border px-4 py-4 sm:px-5">
              <p className="text-xs text-muted">학습 노출의 50%</p>
              <p className="mt-2 text-base font-semibold text-accent sm:text-lg">
                0% ~ x% 왜곡
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            절반은 현재 단계의 최대 왜곡 수준을 경험하고, 나머지 절반은 왜곡이
            없는 조건부터 현재 수준까지의 범위를 경험하도록 구성하였습니다.
            학습이 진행될수록 x를 높이면서도 이전의 낮은 왜곡 수준을 함께
            제공하여, 더 어려운 조건에 적응하는 과정에서도 다양한 왜곡 수준을
            지속적으로 경험하도록 하였습니다.
          </p>
        </section>

        <section aria-labelledby="results-heading" className="py-10 sm:py-12">
          <SectionHeading id="results-heading" title="Results" />
          <div className="space-y-4 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <p>
              주어진 목표 위치로 이동하도록 하는 rule-based 제어를 기준으로,
              왜곡 수준에 따른 목표 지점과의 위치 오차를 비교하였습니다.
              커리큘럼 학습 초기에는 rule-based 방식과 비슷한 오차를 보였지만,
              학습이 진행되면서 높은 왜곡 조건에서의 위치 오차가 줄어들었습니다.
            </p>
            <p>
              학습 후반에는 80%의 높은 IMU 왜곡 수준에서도 비교적 낮고 안정적인
              위치 오차를 유지하였습니다. 시뮬레이션에서 왜곡 강도를 점진적으로
              높이고 이전 수준의 경험을 함께 제공하는 방식으로, 더 넓은 왜곡
              범위에 대응하는 제어 정책을 학습할 수 있었습니다.
            </p>
          </div>
          <div className="mt-6">
            <ProjectImage
              src={resultImage}
              alt="커리큘럼 학습 초기, 중기, 후기에 왜곡률 0–80%에서 rule-based 제어와 강화학습의 위치 오차를 비교한 그래프"
            />
          </div>
        </section>
      </article>
    </main>
  );
}
