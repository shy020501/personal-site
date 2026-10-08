import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { SectionHeading } from "@/components/section-heading";
import { getVisibleProjects } from "@/content/projects";
import modelOverview from "@/public/images/projects/open-domain/model_overview.png";
import multimodalSkillHeatmap from "@/public/images/projects/open-domain/multimodal_skill_heatmap.png";
import multimodalSkillMainResult from "@/public/images/projects/open-domain/multimodal_skill_main_result.png";
import multimodalSkillOverview from "@/public/images/projects/open-domain/multimodal_skill_overview.png";
import multimodalSkillTsne from "@/public/images/projects/open-domain/multimodal_skill_tsne.png";
import setupImage from "@/public/images/projects/open-domain/setup.gif";
import skillMainResult from "@/public/images/projects/open-domain/skill_main_result.png";
import skillMotivation from "@/public/images/projects/open-domain/skill_motivation.png";
import skillTsne from "@/public/images/projects/open-domain/skill_tsne.png";
import softPrompt from "@/public/images/projects/open-domain/soft_prompt.png";
import uniqueSkillResult from "@/public/images/projects/open-domain/unique_skill_result.png";

const description =
  "다양한 실제 로봇 작업에서 공유할 수 있는 skill을 학습하고, 이를 시각·언어 맥락과 연결하는 학습 방법을 연구하였습니다. 실제 로봇 기반 Skill Foundation Model에서 Multimodal Skill Representation으로 확장해 온 과정을 소개합니다.";

const halfWidthImageSizes =
  "(min-width: 1200px) 548px, (min-width: 768px) 46vw, 100vw";

const inlineLinkClassName =
  "text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent";

const ablationResults = [
  { setting: "Multimodal SFM (Ours)", successRate: 87.2 },
  { setting: "w/o Soft Prompt", successRate: 82.4 },
  { setting: "w/o Language Align", successRate: 83.6 },
  { setting: "w/o V-L Align", successRate: 68.8 },
  { setting: "w/o Skill", successRate: 66.4 },
];

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
    description,
  };
}

function ResearchImage({
  src,
  alt,
  sizes = "(min-width: 1200px) 1120px, 100vw",
  unoptimized = false,
}: {
  src: StaticImageData;
  alt: string;
  sizes?: string;
  unoptimized?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      unoptimized={unoptimized}
      className="block h-auto w-full rounded-sm border border-border bg-white"
    />
  );
}

function ResearchSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mb-8 last:mb-0">
      <h3
        id={id}
        lang="en"
        className="mb-5 text-lg leading-7 font-semibold tracking-tight sm:text-xl"
      >
        {title}
      </h3>
      <div className="space-y-5 text-sm leading-7 break-keep sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
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
            {description}
          </p>
          <p className="mt-3 text-sm text-muted">{project.organization}</p>
        </header>

        <section
          id="sfm"
          aria-labelledby="sfm-heading"
          className="scroll-mt-8 border-b border-border py-10 sm:py-12"
        >
          <p
            lang="en"
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
          >
            Part 1
          </p>
          <SectionHeading id="sfm-heading" title="Skill Foundation Model" />
          <p className="mb-8 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            접촉이 많은 실제 로봇 작업에서 반복적으로 나타나는 동작을 skill로
            학습하고, 이를 여러 작업의 행동 생성에 활용하는 Skill Foundation
            Model (SFM)을 구성하였습니다. 이 단계에서는 실제 로봇 데이터를
            기반으로 skill 표현과 정책을 학습하고, 작업 수행 성공률을 통해
            활용 효과를 평가하였습니다.
          </p>

          <ResearchSection id="sfm-motivation" title="Motivation & Skill Concept">
            <p>
              USB를 포트에 삽입하거나 BNC 커넥터를 연결하는 작업은 서로 다른
              목표를 갖지만, 대상에 접근하고 위치를 정렬한 뒤 접촉력을 가해
              삽입하는 과정이 공통으로 나타나고, BNC 연결에는 이후 회전 동작이
              추가됩니다. 이처럼 여러 작업에서 재사용할 수 있는 동작 패턴을
              skill로 표현하고, 작업 간에 공유하는 것을 목표로 하였습니다.
              나아가, 정밀 체결 작업에서는 동작의 궤적과 함께 접촉 및 힘의
              변화도 중요합니다. 따라서, F/T 정보를 고려하는 skill을 연구의
              방향으로 설정하고, 초기 SFM에서는 행동에서 추출한 skill과 F/T
              관측값을 정책의 입력으로 활용하였습니다.
            </p>
            <ResearchImage
              src={skillMotivation}
              alt="USB 삽입과 BNC 연결에서 접근·정렬·삽입 동작을 공유하고, BNC 연결에는 회전 동작이 추가되는 Skill 개념도"
            />
          </ResearchSection>

          <ResearchSection
            id="sfm-method"
            title="Skill Representation & Policy Learning"
          >
            <div className="grid items-start gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 lang="en" className="text-base font-semibold">
                  Stage 1 — Skill Representation
                </h4>
                <p>
                  <a
                    href="https://quest-model.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={inlineLinkClassName}
                  >
                    QueST
                  </a>
                  의 자기지도 학습 접근을 차용해 32 step의 sequence를 skill encoder에 입력하여 압축된 8개의 skill 표현을 얻고, 
                  skill decoder가 원래의 action sequence를 복원하도록 학습하였습니다. 이 자기지도 학습 구조를 통해 별도의
                  명시적인 skill 구분 없이도 행동에 담긴 반복적인 패턴을 표현할 수 있도록 하였습니다.  
                </p>
                <p>
                  이러한 압축 표현은 반복되는 동작 패턴을 공통된 skill로 요약할 수 있다는 장점이 있지만, 
                  표현이 지나치게 coarse해지면 정밀한 조작에 필요한 미세한 action 차이를 충분히 구분하기 어려울 수 있습니다. 
                  이에 F/T 신호를 AdaLN 기반의 조건으로 skill encoder에 주입하여, 접촉 상태에 따라 skill 표현의 세밀함을 조절하고자 하였습니다. 
                  F/T 값이 0에 가깝게 안정적으로 유지되는 단순 이동 구간에서는 유사한 action들을 상대적으로 coarse하게 묶고, 
                  접촉으로 F/T 신호가 급격히 변화하는 구간에서는 미세한 action 차이를 더 fine-grained하게 표현하도록 유도하는 것을 목표로 하였습니다.
                </p>
                <p>
                  접촉 구간에서 skill 표현이 더 세분화되는지를 간접적으로 살펴보기 위해,
                  skill encoder 학습을 마친 뒤 학습에 사용한 데이터를 가지고
                  skill을 생성하고, 접촉 구간과 비접촉 구간에서 사용된 고유 skill 수를
                  각각 집계하였습니다. QueST와 비교했을 때 F/T-aware Skill의 고유 skill 수는
                  비접촉 구간에서 586개에서 727개로 약 24.1% 증가하였으며,
                  접촉 구간에서는 189개에서 322개로 약 70.4% 증가하였습니다.
                  접촉 구간에서 상대적으로 더 큰 증가율이 나타난 결과는 F/T 정보를 통해
                  접촉 관련 동작을 더 세분화하려는 설계 의도와 부합하는 경향으로 해석하였습니다.
                </p>
                <p>
                  학습된 skill을 t-SNE로 시각화하여, 서로 다른 세 가지 작업에 포함된 그리퍼 하강, 회전, 파지 해제 등의 동작을 정성적으로 비교하였습니다. 
                  그 결과, 작업이 다르더라도 의미적으로 유사한 동작에 해당하는 skill이 시각화 공간에서 인접하게 분포하는 경향을 확인하였습니다.
                </p>
              </div>
              <div className="space-y-6">
                <ResearchImage
                  src={uniqueSkillResult}
                  alt="학습 demonstration에서 생성한 고유 Skill 수 비교: 비접촉 구간은 QueST 586개·F/T-aware 727개, 접촉 구간은 각각 189개·322개"
                  sizes={halfWidthImageSizes}
                />
                <ResearchImage
                  src={skillTsne}
                  alt="Key lock, rotary switch, USB 작업에서 그리퍼 하강·시계 및 반시계 방향 회전·파지 해제 구간을 비교한 Skill t-SNE 시각화"
                  sizes={halfWidthImageSizes}
                />
              </div>
            </div>
            <div className="space-y-3">
              <h4 lang="en" className="text-base font-semibold">
                Stage 2 — Policy Learning
              </h4>
              <p>
                학습한 skill tokens를 행동 생성의 조건으로 활용하였습니다.{" "}
                <a
                  href="https://intuitive-robots.github.io/flower_vla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLinkClassName}
                >
                  Flower
                </a>{" "}
                VLA를 베이스 모델로 활용하여 카메라 이미지와 task instruction에서 얻은 VLM feature를 Flow
                Transformer에 전달하고, robot state와 F/T 관측값도 함께 반영하여 action chunk를 생성하도록 구성하였습니다. 이를 통해 현재 장면과 작업 지시, 로봇의 상태를 학습된 skill과 연결합니다.
              </p>
            </div>
            <ResearchImage
              src={modelOverview}
              alt="Skill Tokens, VLM 특징, 로봇 상태와 F/T 신호를 조건으로 Flow Transformer가 action chunk를 생성하는 SFM 구조"
            />
          </ResearchSection>

          <ResearchSection id="sfm-evaluation" title="Real-Robot Evaluation">
            <p>
              학습 및 평가 세팅은 다양한 접촉이 요구되는 9가지의 작업(USB, Outlet, HDMI, Audio, LAN, Rotary, Knob, BNC, Latch)으로 구성하였습니다. 
              데이터는 작업별로 중복되지 않은 5개 위치에서 각각 10회의 시연을 수집하여 총 450개 episode로 구성하였고, 평가는 각 작업 당 10회씩 수행하였습니다.
              평가 결과 skill을 사용하는 SFM의 평균 성공률은 76.7%로, skill을 사용하지 않는 baseline의 성공률인 62.2%보다 높았습니다.
            </p>
            <Link href="/projects/real-world-robot-systems" className="text-link">
              Robot Platforms & Infrastructure <span aria-hidden="true">→</span>
            </Link>
            <dl className="grid gap-6 border-y border-border py-5 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt lang="en" className="text-sm text-muted">Demonstrations</dt>
                <dd className="mt-1 text-2xl font-semibold text-accent">450</dd>
                <dd className="mt-1 text-xs text-muted">5 positions × 9 tasks × 10 demos</dd>
              </div>
              <div>
                <dt lang="en" className="text-sm text-muted">Evaluation</dt>
                <dd className="mt-1 text-2xl font-semibold text-accent">90 trials</dd>
                <dd className="mt-1 text-xs text-muted">9 tasks × 10 trials</dd>
              </div>
              <div>
                <dt lang="en" className="text-sm text-muted">SFM</dt>
                <dd className="mt-1 text-2xl font-semibold text-accent">76.7%</dd>
                <dd className="mt-1 text-xs text-muted">평균 성공률</dd>
              </div>
              <div>
                <dt lang="en" className="text-sm text-muted">w/o Skill</dt>
                <dd className="mt-1 text-2xl font-semibold">62.2%</dd>
                <dd className="mt-1 text-xs text-muted">평균 성공률</dd>
              </div>
            </dl>
            <div
              className="grid items-start gap-6 md:grid-cols-[var(--evaluation-columns)]"
              style={
                {
                  "--evaluation-columns": [
                    `minmax(0, ${setupImage.width / setupImage.height}fr)`,
                    `minmax(0, ${skillMainResult.width / skillMainResult.height}fr)`,
                  ].join(" "),
                } as CSSProperties
              }
            >
              <ResearchImage
                src={setupImage}
                alt="로봇과 USB, 커넥터, 스위치 등 접촉 작업용 보드로 구성한 실험 환경"
                sizes="(min-width: 1200px) 469px, (min-width: 768px) 40vw, 100vw"
                unoptimized
              />
              <ResearchImage
                src={skillMainResult}
                alt="9개 실로봇 작업의 SFM과 w/o Skill 성공률 비교. 평균 성공률은 각각 76.7%와 62.2%"
                sizes="(min-width: 1200px) 628px, (min-width: 768px) 53vw, 100vw"
              />
            </div>
          </ResearchSection>

          <ResearchSection id="sfm-demo" title="Demo">
            <figure>
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="SFM의 실로봇 접촉 작업 수행 데모"
                aria-describedby="sfm-demo-caption"
                className="aspect-video w-full rounded-sm border border-border bg-black object-contain"
              >
                <source
                  src="/videos/projects/open-domain/success_orig.mp4"
                  type="video/mp4"
                />
                영상을 재생할 수 없는 경우{" "}
                <a href="/videos/projects/open-domain/success_orig.mp4">
                  데모 영상 파일 열기
                </a>
              </video>
              <figcaption
                id="sfm-demo-caption"
                lang="en"
                className="mt-3 text-center text-xs leading-6 text-muted"
              >
                x2 Speed for Knob, Rotary, BNC and Latch
              </figcaption>
            </figure>
          </ResearchSection>
        </section>

        <section
          id="multimodal-sfm"
          aria-labelledby="multimodal-heading"
          className="scroll-mt-8 pt-12 pb-8 sm:pt-16 sm:pb-10"
        >
          <p
            lang="en"
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
          >
            Part 2
          </p>
          <SectionHeading
            id="multimodal-heading"
            title="Multimodal Skill Representation"
          />
          <p className="mb-8 text-sm leading-7 break-keep sm:text-base sm:leading-8">
            앞선 실험을 통해 재사용 가능한 skill 표현을 행동 생성에 활용하는
            효과를 확인하였습니다. 이를 바탕으로 현재의 시각적 상황과 작업
            의도를 함께 반영할 수 있도록, skill 표현을 멀티모달 정보와 연결하는
            방향으로 연구를 확장하였습니다. 
          </p>

          <ResearchSection
            id="multimodal-motivation"
            title="Motivation"
          >
            <p>
              기존처럼 action reconstruction loss만으로 학습한 skill encoder는
              연속된 행동을 압축하고, 복원에 필요한 반복적인 동작 패턴을
              표현하는 데에는 효과적입니다. 그러나 이러한 학습만으로는
              조작 대상이나 작업 의도와 같은 semantic 정보를 skill에
              명시적으로 담기 어렵습니다.
              이에 로봇이 어떤 동작을 수행하는지와 함께, 어떤 대상을 향해 어떤 의도로
              움직이는지를 표현하기 위해 시각·언어 정보를 skill 학습에
              연결하고자 하였습니다. 시각 정보는 현재 장면과 조작 대상을, 언어 정보는
              작업의 목표와 의미를 제공하므로, 행동 패턴을 현재 상황에 맞게
              해석하는 데 활용할 수 있습니다.
            </p>
            <p>
              이를 위해 필요한 것은 현재 수행 중인 skill의 문맥입니다.
              그러나 데이터에는 episode 전체를 설명하는 task description만
              있고, 세부 skill에 대한 annotation은 없는 경우가 많습니다.
              예를 들어 “그릇을 서랍에 넣고, 서랍을 닫아라”라는 지시는 있어도,
              각 구간을 “그릇 집기”, “서랍에 놓기”, “서랍 닫기”로 나눈 설명은
              제공되지 않습니다.
            </p>
            <p>
              설령 이러한 세부 문맥을 설명하는 텍스트가 제공되더라도,
              각 문맥이 시작되고 끝나는 지점을 사람이 step 단위로 별도
              annotation하지 않으면 텍스트와 행동 사이의 정확한 시간적 대응을
              알기 어렵습니다. 또한 현재의 skill 학습에서는 demonstration에서
              연속된 32 step을 무작위로 추출하여 사용하므로, 하나의 학습 구간이
              반드시 단일 문맥에만 대응하지는 않습니다. 예를 들어 그릇을 서랍에
              놓는 동작에서 서랍을 닫는 동작으로 넘어가는 구간처럼, 여러 문맥에
              걸친 행동이나 문맥 사이의 전환 동작이 함께 포함될 수 있습니다.
            </p>
          </ResearchSection>

          <ResearchSection
            id="multimodal-soft-prompts"
            title="Conditional Soft Prompts"
          >
            <div className="grid items-start gap-6 md:grid-cols-2">
              <div className="space-y-5">
                <p>
                  이러한 annotation의 한계를 고려하여, 현재 이미지와 task description에 조건화된 학습 가능한 soft prompt를 도입하였습니다.{" "}
                  <a
                    href="https://arxiv.org/abs/2203.05557"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={inlineLinkClassName}
                  >
                    CoCoOp
                  </a>
                  의 구조를 활용하여 soft prompt generator가 현재 장면에 맞는 prompt embedding을 생성하고,
                  이를 task description과 함께 text encoder에 전달하여 전체 작업 지시에
                  현재 수행 중인 동작의 문맥을 반영하도록 하였습니다.
                </p>
                <p>
                  같은 작업 지시가 주어지더라도 그릇을 집는 구간과 서랍을 닫는 구간,
                  그리고 그 사이의 전환 구간에서 필요한 문맥은 달라집니다.
                  Conditional soft prompt는 세부 문맥이나 구간 경계를 별도로
                  annotation하지 않고도, 현재 관측에 따라 달라지는 표현으로 이러한
                  차이를 반영하도록 설계하였습니다.
                </p>
              </div>
              <ResearchImage
                src={softPrompt}
                alt="현재 이미지와 task description에서 Soft Prompt를 생성하는 구조와, 그릇 집기·서랍 닫기의 Skill에 따라 문맥이 달라지는 예시"
                sizes={halfWidthImageSizes}
              />
            </div>
          </ResearchSection>

          <ResearchSection
            id="multimodal-architecture"
            title="Multimodal SFM Architecture"
          >
            <div className="space-y-3">
              <h4 lang="en" className="text-base font-semibold">
                Stage 1 — Multimodal Skill Learning
              </h4>
              <p>
                Action sequence를 복원하는 reconstruction loss로 skill
                encoder와 decoder를 학습하는 동시에, skill 표현을 시각·언어
                특징과 정렬하였습니다. 이때 앞서 설명한 conditional soft prompt를
                task description과 함께 CLIP text encoder에 입력하여,
                작업 지시와 함께 현재 장면과 동작의 문맥을 반영한
                언어 특징을 얻도록 하였습니다. 이렇게 얻은 언어 특징과
                CLIP image encoder의 시각 특징을{" "}
                <a
                  href="https://boost-robots.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLinkClassName}
                >
                  BooST
                </a>
                -style로 결합하고, 투영된 skill 표현과
                V-L feature 사이에 symmetric contrastive loss를 적용하였습니다.
              </p>
              <p>
                이 단계에서는 CLIP image·text encoder를 고정하고,
                skill encoder·decoder와 projection, soft prompt generator를
                함께 학습하였습니다. 멀티모달 정렬의 학습 신호를 soft prompt
                generator에도 전달하여, 현재 행동 구간과 연결되는 문맥을
                표현하도록 하였습니다. 이를 통해 별도의 skill 문맥 annotation
                없이도 행동 패턴과 시각·언어 의미 정보를 함께 담는 skill을
                학습하고자 하였습니다.
              </p>
            </div>
            <div className="space-y-3">
              <h4 lang="en" className="text-base font-semibold">
                Stage 2 — Skill Generator Learning
              </h4>
              <p>
                이미지와 언어 조건을 입력받는 Transformer 및 flow 기반 skill
                expert가 skill 표현을 생성하도록 학습하였습니다. 생성된 skill은
                1단계에서 학습한 decoder를 거쳐 action sequence로 복원됩니다.
                이때 skill decoder와 학습된 soft prompt generator를 고정하여,
                학습한 표현을 실제 행동 생성에 활용하는 skill generator를
                학습하였습니다.
              </p>
            </div>
            <ResearchImage
              src={multimodalSkillOverview}
              alt="Stage 1에서 행동 복원과 V-L·Skill 정렬을 학습하고, Stage 2에서 고정된 Skill Decoder와 Soft Prompt를 활용해 Skill Generator를 학습하는 Multimodal SFM 구조"
            />
          </ResearchSection>

          <ResearchSection
            id="multimodal-experiments"
            title="Experiments & Analysis"
          >
            <div className="space-y-3">
              <h4 id="libero-results-heading" lang="en" className="text-base font-semibold">
                LIBERO-LONG Evaluation
              </h4>
              <p>
                LIBERO-LONG에서 학습 및 평가를 수행한 결과, Multimodal SFM의
                성공률은 87.2%로 나타났습니다. Action-only skill 모델인 QueST의
                72.8%와 비교하여 14.4%p 향상된 결과를 보였습니다.
              </p>
            </div>
            <ResearchImage
              src={multimodalSkillMainResult}
              alt="LIBERO-LONG 성공률: ResNet-T 44.1%, Diffusion Policy 50.1%, VQ-BeT 59.3%, QueST 72.8%, Multimodal SFM 87.2%"
            />
            <p className="text-xs leading-6 text-muted">
              † QueST: Self-Supervised Skill Abstractions for Learning Continuous
              Control (NeurIPS 2024)에 보고된 성공률을 인용한 값입니다.
            </p>

            <div className="space-y-3 pt-3">
              <h4 id="ablation-results-heading" lang="en" className="text-base font-semibold">
                Ablation Study
              </h4>
              <div className="grid items-start gap-6 lg:grid-cols-2">
                <div className="min-w-0 space-y-5">
                  <p>
                    Soft prompt, language alignment, vision-language alignment,
                    skill 표현에 대한 ablation study를 진행하였습니다.
                    w/o L Align은 시각 특징만으로 skill을 정렬하는 설정이며,
                    w/o V-L Align은 멀티모달 정렬 없이 행동 복원으로 skill을 학습하는
                    설정입니다. w/o Skill에서는 action sequence를 직접 생성합니다.
                  </p>
                  <p>
                    Soft prompt를 제거하는 경우 성공률이 4.8%p 낮아졌으며, V-L alignment와
                    skill을 제거한 설정에서는 각각 18.4%p, 20.8%p 낮아졌습니다.
                    이 실험에서는 skill 표현과 멀티모달 정렬을 함께 사용하는 설정이
                    가장 높은 성공률을 보였습니다.
                  </p>
                </div>
                <div
                  role="region"
                  aria-labelledby="ablation-results-heading"
                  tabIndex={0}
                  className="min-w-0 w-full overflow-x-auto rounded-sm border border-border"
                >
                  <table className="w-full min-w-[480px] text-left text-sm leading-6">
                    <thead className="border-b border-border bg-surface text-muted">
                      <tr>
                        <th scope="col" lang="en" className="px-4 py-3 font-medium">Setting</th>
                        <th scope="col" lang="en" className="px-4 py-3 text-right font-medium">Success Rate</th>
                        <th scope="col" className="px-4 py-3 text-right font-medium">Ours 대비</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {ablationResults.map((result, index) => (
                        <tr
                          key={result.setting}
                          className={index === 0 ? "bg-surface font-semibold text-accent" : undefined}
                        >
                          <th
                            scope="row"
                            lang="en"
                            className={`px-4 py-3 ${index === 0 ? "font-semibold" : "font-normal"}`}
                          >
                            {result.setting}
                          </th>
                          <td className="px-4 py-3 text-right tabular-nums">
                            {result.successRate.toFixed(1)}%
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap tabular-nums">
                            {index === 0
                              ? "—"
                              : `−${(ablationResults[0].successRate - result.successRate).toFixed(1)}%p`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-3">
              <h4 lang="en" className="text-base font-semibold">
                t-SNE Analysis
              </h4>
              <p>
                V-L Align을 적용한 모델과 이를 제거한 모델의 표현 분포를
                t-SNE로 비교하였습니다. Ours에서는 skill과 V-L feature가
                같은 영역에 함께 분포하는 양상을 보였으며, w/o V-L Align에서는
                두 표현이 분리되어 나타났습니다. 이를 통해
                skill embedding에 시각·언어의 semantic 정보가 반영되는 경향을
                정성적으로 확인하였습니다.
              </p>
            </div>
            <ResearchImage
              src={multimodalSkillTsne}
              alt="Ours에서는 Skill과 V-L feature가 함께 분포하고, w/o V-L Align에서는 두 표현이 상대적으로 분리되는 t-SNE 비교"
            />

            <div className="space-y-3 pt-3">
              <h4 lang="en" className="text-base font-semibold">
                Role of Soft Prompt
              </h4>
              <div className="grid items-start gap-6 md:grid-cols-2">
                <p>
                  “Put both moka pots on the stove”라는 전체 작업 지시 아래에서,
                  현재 수행하는 동작이 가까운 moka pot을 집는 상황의 attention을
                  비교하였습니다. Soft prompt를 사용하는 모델은 현재 조작 대상에
                  더 집중하는 양상을 보였으며, 제거한 설정은 전체 작업과 관련된
                  영역에 주의를 분산하는 양상을 보였습니다. 이를 통해 현재 skill의
                  문맥을 반영하는 soft prompt의 역할을 정성적으로 살펴보았습니다.
                </p>
                <ResearchImage
                  src={multimodalSkillHeatmap}
                  alt="가까운 moka pot을 집는 상황에서 현재 조작 대상에 집중하는 Ours와 주의가 분산되는 w/o Soft Prompt의 attention heatmap 비교"
                  sizes={halfWidthImageSizes}
                />
              </div>
            </div>
          </ResearchSection>
        </section>
      </article>
    </main>
  );
}
