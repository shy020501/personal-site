import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ttsCaseStudy as study } from "@/content/case-studies";
import {
  ttsGroups,
  ttsMethods,
  ttsSources,
  type TtsMethod,
  type TtsMethodId,
} from "@/content/tts-case-study";
import vGps from "@/public/images/case-studies/vla-test-time-scaling/v-gps-method.png";
import roboMonkey from "@/public/images/case-studies/vla-test-time-scaling/robomonkey-method.png";
import mgSelect from "@/public/images/case-studies/vla-test-time-scaling/mg-select-method.png";
import seal from "@/public/images/case-studies/vla-test-time-scaling/seal-robotics-method.png";
import sitcom from "@/public/images/case-studies/vla-test-time-scaling/sitcom-method.png";
import dasip from "@/public/images/case-studies/vla-test-time-scaling/dasip-method.png";
import coverVla from "@/public/images/case-studies/vla-test-time-scaling/cover-vla-method.png";
import scale from "@/public/images/case-studies/vla-test-time-scaling/scale-method.png";
import tapSampling from "@/public/images/case-studies/vla-test-time-scaling/tapsampling-method.png";
import vlaAttc from "@/public/images/case-studies/vla-test-time-scaling/vla-attc-method.png";
import elastic from "@/public/images/case-studies/vla-test-time-scaling/elastic-method.png";
import eTts from "@/public/images/case-studies/vla-test-time-scaling/e-tts-method.png";
import sva from "@/public/images/case-studies/vla-test-time-scaling/sva-method.png";

export const metadata: Metadata = {
  title: `${study.title} | Seunghyo Yun`,
  description: study.description,
};

const images: Record<TtsMethodId, StaticImageData> = {
  "v-gps": vGps,
  robomonkey: roboMonkey,
  "mg-select": mgSelect,
  seal,
  sitcom,
  dasip,
  "cover-vla": coverVla,
  scale,
  tapsampling: tapSampling,
  "vla-attc": vlaAttc,
  elastic,
  "e-tts": eTts,
  sva,
};

const sections = [
  { id: "overview", label: "TTS의 개념과 계산의 축" },
  ...ttsGroups.map(({ id, label }) => ({ id, label })),
  { id: "comparison", label: "13개 연구 비교" },
  { id: "deployment", label: "로봇 제어에서 확인할 점" },
];

const linkClass =
  "text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent";

function Citation({ id }: { id: TtsMethodId }) {
  const index = ttsSources.findIndex((source) => source.id === id);
  const source = ttsSources[index];

  return (
    <sup className="ml-1 text-[0.7em]">
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`출처 ${index + 1}: ${source.name} (새 창)`}
        className={linkClass}
      >
        [{index + 1}]
      </a>
    </sup>
  );
}

function ArticleSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-8 border-b border-border py-10 sm:py-12"
    >
      <p className="mb-3 font-mono text-xs text-muted" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </p>
      <h2
        id={`${id}-heading`}
        className="text-xl leading-snug font-semibold tracking-tight break-keep sm:text-2xl"
      >
        {title}
      </h2>
      <div className="mt-6 space-y-6 text-sm leading-7 break-keep sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}

function PaperFigure({ method }: { method: TtsMethod }) {
  const source = ttsSources.find((item) => item.id === method.id)!;
  const figure = method.figure;
  const imageUrl = `/images/case-studies/vla-test-time-scaling/${figure.file}-method.png`;

  return (
    <figure>
      <a
        href={imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${source.name} 원본 그림 크게 보기 (새 창)`}
        className="block rounded-sm border border-border bg-white p-3 sm:p-4"
      >
        <Image
          src={images[method.id]}
          alt={figure.alt}
          sizes="(min-width: 1200px) 832px, (min-width: 1024px) 68vw, 85vw"
          className="block h-auto w-full"
        />
      </a>
      <figcaption className="mt-3 text-xs leading-6 text-muted">
        <p>{figure.caption}</p>
        <p className="mt-1">
          <a
            href={`${source.paper}#page=${figure.page}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            원본 논문 Fig. {figure.number}, p. {figure.page}
            <span className="sr-only"> (새 창)</span>
          </a>
          에서 발췌하였습니다.
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} ml-2`}
          >
            그림 크게 보기<span className="sr-only"> (새 창)</span>
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

function MethodArticle({ method }: { method: TtsMethod }) {
  return (
    <div
      id={method.id}
      aria-labelledby={`${method.id}-heading`}
      className="scroll-mt-8 space-y-5 border-t border-border pt-8 sm:space-y-6 sm:pt-10"
    >
      <h3
        id={`${method.id}-heading`}
        className="text-lg leading-8 font-semibold tracking-tight break-keep sm:text-xl"
      >
        {method.heading}
      </h3>
      <div className="rounded-sm border border-border bg-surface px-5 py-4">
        <p className="mb-1 text-xs font-semibold text-accent">핵심 구조</p>
        <p className="text-sm leading-7">{method.takeaway}</p>
      </div>
      <p>
        {method.paragraphs[0]}<Citation id={method.id} />
      </p>
      <PaperFigure method={method} />
      {method.paragraphs.slice(1).map((paragraph) => (
        <p key={paragraph}>
          {paragraph}<Citation id={method.id} />
        </p>
      ))}
    </div>
  );
}

export default function TestTimeScalingPage() {
  if (!study.visible) {
    notFound();
  }

  return (
    <main lang="ko" className="site-container py-10 sm:py-12">
      <Link href="/case-studies" lang="en" className="text-link">
        <span aria-hidden="true">←</span> Back to Case Studies
      </Link>

      <article className="mt-6">
        <header className="border-b border-border pb-10 sm:pb-12">
          <p lang="en" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            {study.category} / Robot Learning
          </p>
          <h1 className="mt-3 max-w-4xl text-[1.75rem] leading-snug font-semibold tracking-tight break-keep sm:text-4xl">
            Test-Time Scaling:
            <br />
            더 나은 행동을 고르는 방법
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 break-keep text-muted">
            로봇이 행동하기 전에 조금 더 계산한다면 무엇이 달라질까요?
            후보 생성과 검증에서 미래 결과 예측, 추론과 행동의 공동 개선,
            상황에 따른 계산량 배분까지 13개 연구의 핵심 구조를 살펴봅니다.
          </p>
        </header>

        <div className="grid items-start gap-x-12 lg:grid-cols-[minmax(0,1fr)_13rem]">
          <aside className="border-b border-border py-6 lg:sticky lg:top-8 lg:order-2 lg:border-b-0 lg:py-10">
            <nav aria-label="이 글의 목차">
              <p className="mb-3 text-xs font-semibold tracking-wide text-muted">이 글의 흐름</p>
              <ol className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="group flex items-baseline gap-3 py-1 text-muted hover:text-accent">
                      <span className="font-mono text-[11px] opacity-60" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="underline-offset-4 group-hover:underline">{section.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <a href="#references" className="text-link mt-4 text-xs">
                참고 자료 <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </aside>

          <div className="min-w-0">
            <ArticleSection id="overview" number={1} title="Test-Time Scaling이란?">
              <p>
                Test-Time Scaling(TTS)은 추론 단계에 추가 계산을 투입하여,
                학습된 모델의 출력 품질이나 작업 성공률을 높이려는 접근입니다.
                Vision-Language-Action(VLA) 모델을 비롯한 로봇 정책에서는
                <strong className="font-semibold"> 추가 계산을 어디에 사용하는지</strong>에
                따라 여러 행동 후보를 생성·평가하는 방식, 한 후보를 반복 정제하는
                방식, 미래 결과를 예측하며 탐색하는 방식으로 나누어 볼 수 있습니다.
                또한 <strong className="font-semibold">계산량을 어떻게 배분하는지</strong>에
                따라 고정 예산을 사용하는 방식과 상황의 난이도나 불확실성에 맞춰
                계산량을 조절하는 adaptive 방식으로 구분할 수 있습니다.
                이러한 기준은 서로 배타적이지 않으며, 한 방법에서 여러 방식을
                결합하기도 합니다.
                <Citation id="v-gps" /><Citation id="sitcom" /><Citation id="elastic" />
              </p>
              <p>
                로봇에서 추가 계산은 실제 움직임이 시작되기까지의 지연으로 이어집니다.
                따라서 성공률과 함께 계산 비용, 제어 주기, 다시 관측할 시점도
                고려해야 합니다. 이 글에서는 시트에 포함된 연구를
                <strong className="font-semibold"> 무엇을 생성하고, 무엇으로 평가하며,
                언제 계산을 늘리는지</strong>에 따라 묶었습니다.
                DASIP와 SCALE처럼 후보 수 증가와는 다른 방식으로 추론을 조절하는
                인접 연구도 함께 다룹니다.
                <Citation id="dasip" /><Citation id="scale" />
              </p>

              <div className="rounded-sm border border-border bg-surface p-5 sm:p-6">
                <p className="text-xs font-semibold text-accent">후보 생성과 선택의 기본 형태</p>
                <div className="mt-3 space-y-2 font-mono text-sm leading-7" aria-label="정책에서 N개의 행동 후보를 생성하고, 평가 점수가 가장 높은 후보를 선택합니다.">
                  <p>A₁, …, Aₙ ∼ πθ( · | observation, instruction)</p>
                  <p>A* = arg max S(observation, instruction, Aᵢ)</p>
                </div>
                <p className="mt-3 text-xs leading-6 text-muted">
                  A는 한 개의 행동 또는 action chunk이며, S는 가치 함수·선호도·조건부
                  confidence 등입니다. 여러 방법을 설명하기 위한 공통 표현이며,
                  각 연구의 실제 선택 규칙은 다릅니다.
                </p>
              </div>

              <dl className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                {[
                  ["후보의 폭", "같은 상황에서 여러 행동이나 지시문을 검토합니다. Best-of-N과 CoVer-VLA가 여기에 해당합니다."],
                  ["생성의 깊이", "한 후보를 만드는 denoising·적분 과정을 더 정교하게 수행합니다. DASIP와 ELASTIC이 이 축을 다룹니다."],
                  ["예측의 길이", "행동 뒤의 상태를 여러 단계 전개해 결과를 평가합니다. SEAL과 SITCOM이 대표적입니다."],
                  ["계산의 시점", "불확실하거나 어려운 상황에 추가 계산을 배분합니다. VLA-ATTC와 적응적 추론 연구가 이 질문을 다룹니다."],
                ].map(([term, description]) => (
                  <div key={term} className="bg-background p-5">
                    <dt className="text-sm font-semibold text-accent">{term}</dt>
                    <dd className="mt-2 text-sm leading-7">{description}</dd>
                  </div>
                ))}
              </dl>
              <p>
                <strong className="font-semibold">TTS가 모든 구성 요소의 추가 학습이 없다는 뜻은 아닙니다.</strong>
                {" "}기반 정책은 유지하더라도 verifier, Q-function, dynamics model,
                계산량을 조절하는 meta-policy는 별도로 학습할 수 있습니다.
                추가 학습 없이 모델 내부 신호를 사용하는 접근과,
                미리 학습한 평가기를 실행 시 활용하는 접근을 구분해서 읽어야 합니다.
                <Citation id="robomonkey" /><Citation id="mg-select" /><Citation id="elastic" />
              </p>
            </ArticleSection>

            {ttsGroups.map((group, index) => (
              <ArticleSection key={group.id} id={group.id} number={index + 2} title={group.title}>
                <p>{group.introduction}</p>
                <nav aria-label={`${group.label} 연구 바로가기`} className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  {group.methods.map((id) => (
                    <a key={id} href={`#${id}`} className={linkClass}>
                      {ttsSources.find((source) => source.id === id)!.name}
                    </a>
                  ))}
                </nav>
                <div className="space-y-10 sm:space-y-12">
                  {group.methods.map((id) => (
                    <MethodArticle key={id} method={ttsMethods.find((method) => method.id === id)!} />
                  ))}
                </div>
              </ArticleSection>
            ))}

            <ArticleSection id="comparison" number={7} title="13개 연구는 추가하는 모듈과 계산의 대상이 다릅니다">
              <p>
                다음 표는 시트의 기반 모델과 접근 방식을 원문과 대조해 정리한 것입니다.
                ‘추가 학습’은 TTS를 위해 준비하는 구성 요소를 뜻하며,
                기반 정책의 사전 학습이나 작업별 fine-tuning 전체를 뜻하지 않습니다.
                연구명을 누르면 해당 설명으로 이동합니다.
              </p>
              <div
                role="region"
                aria-label="13개 TTS 연구 비교표, 좁은 화면에서는 가로로 스크롤할 수 있습니다"
                tabIndex={0}
                className="overflow-x-auto rounded-sm border border-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <table className="w-full min-w-[760px] border-collapse text-left text-xs leading-6">
                  <caption className="border-b border-border bg-surface px-5 py-4 text-left text-sm font-semibold">
                    기반 모델 · 추가 학습 요소 · 추론 시 조절 대상
                  </caption>
                  <thead className="bg-surface/60">
                    <tr>
                      {["연구", "기반 모델·정책", "추가 학습 요소", "추론 시 조절 대상"].map((heading) => (
                        <th key={heading} scope="col" className="border-b border-border px-4 py-3 font-semibold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ttsMethods.map((method) => (
                      <tr key={method.id} className="border-b border-border last:border-b-0">
                        <th scope="row" className="px-4 py-4 align-top font-semibold whitespace-nowrap">
                          <a href={`#${method.id}`} className={linkClass}>
                            {ttsSources.find((source) => source.id === method.id)!.name}
                          </a>
                        </th>
                        <td className="px-4 py-4 align-top">{method.base}</td>
                        <td className="px-4 py-4 align-top">{method.addedTraining}</td>
                        <td className="px-4 py-4 align-top">{method.compute}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs leading-6 text-muted">
                기반 모델은 대표적인 적용 예시입니다. 추가 학습이 없더라도
                사전 학습된 VLM, 시뮬레이터 또는 기반 정책의 준비가 필요할 수 있습니다.
                MG-Select의 기본형과 확장형, DASIP의 분류 방식은 각각 구분해 표시하였습니다.
              </p>
            </ArticleSection>

            <ArticleSection id="deployment" number={8} title="로봇에서는 성공률과 제어에 필요한 시간을 함께 읽어야 합니다">
              <h3 className="text-lg font-semibold tracking-tight">후보가 좋아지는 것과 좋은 후보를 고르는 것은 다릅니다</h3>
              <p>
                후보 중 하나라도 성공할 가능성이 커졌다는 결과는 실제 선택기의
                성공률과 같지 않습니다. 적절한 후보가 있는지와 verifier가 그것을
                찾아내는지를 나누어 보아야 합니다. 후보 수를 늘릴수록 평가기의
                오판을 이용하는 행동이 선택될 수도 있으므로, 탐색의 폭과 평가기의
                신뢰성을 함께 확인해야 합니다.
                <Citation id="robomonkey" /><Citation id="sva" />
              </p>

              <h3 className="pt-2 text-lg font-semibold tracking-tight">Action chunk와 실제 실행 길이를 구분합니다</h3>
              <p>
                모델이 한 번에 예측한 길이, 그중 실제 로봇에서 실행하는 길이,
                미래 결과를 평가하기 위해 전개한 길이는 서로 다릅니다.
                예측한 chunk 일부만 실행하고 다시 관측할 수도 있습니다.
                따라서 후보 수와 chunk 크기만으로 제어 주파수나 반응성을 계산할 수는 없습니다.
                시트에 실행 길이가 ‘확인 불가’로 기록된 항목은 임의의 값으로 채우지 않았습니다.
                <Citation id="sva" /><Citation id="seal" />
              </p>

              <h3 className="pt-2 text-lg font-semibold tracking-tight">지연 시간에는 어떤 계산이 포함되는지 확인합니다</h3>
              <p>
                정책 생성 시간, 후보 평가 시간, 미래 rollout 시간, 외부 VLM 호출,
                통신과 제어 대기 시간은 측정 범위가 다를 수 있습니다.
                SEAL처럼 검증을 비동기로 처리하는 경우에도 외부 검증 비용이
                사라지는 것은 아닙니다. GPU, 기반 정책, 실행 horizon이 다른
                논문의 ms 수치를 한 줄로 나열해 우열을 정하기보다,
                같은 조건에서 성공률과 지연이 어떻게 바뀌는지를 보는 편이 유용합니다.
                <Citation id="seal" /><Citation id="elastic" />
              </p>

              <div className="rounded-sm border border-border bg-surface px-5 py-4">
                <p className="mb-1 text-xs font-semibold text-accent">이 연구들을 연결하는 질문</p>
                <p className="text-sm leading-7">
                  더 나은 후보가 필요한지, 더 믿을 만한 평가 신호가 필요한지,
                  더 긴 미래 예측이 필요한지, 또는 계산을 필요한 순간에 집중해야 하는지를
                  먼저 구분할 수 있습니다. 이 구분을 통해 TTS를 단순한 샘플 수 증가에서
                  로봇의 의사결정 과정을 설계하는 문제로 확장해 볼 수 있습니다.
                </p>
              </div>
            </ArticleSection>

            <section id="references" aria-labelledby="references-heading" className="scroll-mt-8 pt-10 sm:pt-12">
              <h2 id="references-heading" className="text-xl font-semibold tracking-tight">참고 자료</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                연구 목록은 TTS 시트를 따르며, 아래에 명시한 원문 버전으로 구조와 용어를 확인하였습니다.
              </p>
              <ol className="mt-6 space-y-6">
                {ttsSources.map((source, index) => (
                  <li key={source.id} className="flex gap-3 text-sm leading-6">
                    <span className="pt-0.5 font-mono text-xs text-muted">[{index + 1}]</span>
                    <div className="min-w-0">
                      <p className="mb-1 font-semibold">{source.name}</p>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" lang="en" className={`${linkClass} break-words`}>
                        {source.title}<span className="sr-only"> (새 창)</span>
                      </a>
                      <p className="mt-1 text-xs text-muted">{source.edition}</p>
                      <a href={source.paper} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-1 inline-block text-xs`}>
                        논문 PDF<span className="sr-only"> (새 창)</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 space-y-3 border-t border-border pt-5 text-xs leading-6 text-muted">
                <p>
                  시트의 SEAL 링크(arXiv:2501.15225)는 로봇 조작과 다른 동명의 논문을
                  가리켜, 저자 공식 프로젝트의 논문으로 바로잡았습니다.
                  VLA-ATTC의 RAC 명칭과 SVA의 개정판 차이도 본문에 반영하였습니다.
                </p>
                <p>
                  본문의 13개 그림은 각 원본 논문의 해당 영역을 발췌한 것입니다.
                  구성 요소와 표기를 새로 그리거나 변경하지 않았으며,
                  CoVer-VLA는 방법을 설명하는 패널을 발췌하였습니다.
                  이미지의 권리는 각 논문 저자에게 있습니다.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
