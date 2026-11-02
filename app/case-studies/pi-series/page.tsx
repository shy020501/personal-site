import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { piSeriesCaseStudy as study } from "@/content/case-studies";
import pi0Architecture from "@/public/images/case-studies/pi-series/pi0-architecture.png";
import fastTokenizer from "@/public/images/case-studies/pi-series/fast-tokenizer.png";
import pi05Architecture from "@/public/images/case-studies/pi-series/pi05-architecture.png";
import knowledgeInsulation from "@/public/images/case-studies/pi-series/knowledge-insulation.png";
import pi06Architecture from "@/public/images/case-studies/pi-series/pi06-architecture.png";
import piStar06Architecture from "@/public/images/case-studies/pi-series/pistar06-architecture.png";
import pi06MemArchitecture from "@/public/images/case-studies/pi-series/pi06-mem-architecture.png";
import pi06MemOverview from "@/public/images/case-studies/pi-series/pi06-mem-overview.png";
import pi06RltOverview from "@/public/images/case-studies/pi-series/pi06-rlt-overview.png";
import pi06RltToken from "@/public/images/case-studies/pi-series/pi06-rlt-token.png";
import pi07Architecture from "@/public/images/case-studies/pi-series/pi07-architecture.png";

export const metadata: Metadata = {
  title: `${study.title} | Seunghyo Yun`,
  description: study.description,
};

const sources = [
  {
    title: "Physical Intelligence — Official Blog",
    date: "2026.10.31",
    venue: "공식 블로그",
    venueUrl: "https://www.pi.website/blog",
    url: "https://www.pi.website/blog",
  },
  {
    title: "π0: A Vision-Language-Action Flow Model for General Robot Control",
    date: "2024.10.31",
    venue: "RSS 2025",
    venueUrl: "https://www.roboticsproceedings.org/rss21/p010.html",
    url: "https://www.pi.website/blog/pi0",
    paper: "https://www.pi.website/download/pi0.pdf",
  },
  {
    title: "FAST: Efficient Action Tokenization for Vision-Language-Action Models",
    date: "2025.01.16",
    venue: "RSS 2025",
    venueUrl: "https://www.roboticsproceedings.org/rss21/p012.html",
    url: "https://www.pi.website/research/fast",
    paper: "https://arxiv.org/pdf/2501.09747",
  },
  {
    title: "π0.5: A Vision-Language-Action Model with Open-World Generalization",
    date: "2025.04.22",
    venue: "CoRL 2025",
    venueUrl: "https://2025.corl.org/program/main-conference",
    url: "https://www.pi.website/blog/pi05",
    paper: "https://www.pi.website/download/pi05.pdf",
  },
  {
    title: "Knowledge Insulating Vision-Language-Action Models: Train Fast, Run Fast, Generalize Better",
    date: "2025.05.28",
    venue: "NeurIPS 2025",
    venueUrl: "https://papers.neurips.cc/paper_files/paper/2025/hash/94e936034d12bcd04834ec2773f02aff-Abstract-Conference.html",
    url: "https://www.pi.website/research/knowledge_insulation",
    paper: "https://www.pi.website/download/pi05_KI.pdf",
  },
  {
    title: "π0.6 Model Card",
    date: "2025.11.17",
    venue: "Model Card",
    venueUrl: "https://website.pi-asset.com/pi06star/PI06_model_card.pdf",
    url: "https://website.pi-asset.com/pi06star/PI06_model_card.pdf",
    paper: "https://website.pi-asset.com/pi06star/PI06_model_card.pdf",
  },
  {
    title: "π*0.6: A VLA That Learns From Experience",
    date: "2025.11.17",
    venue: "RSS 2026",
    venueUrl: "https://www.roboticsproceedings.org/rss22/p087.html",
    url: "https://www.pi.website/blog/pistar06",
    paper: "https://www.pi.website/download/pistar06.pdf",
  },
  {
    title: "MEM: Multi-Scale Embodied Memory for Vision Language Action Models",
    date: "2026.03.03",
    venue: "CoRL 2026",
    venueUrl: "https://2026.corl.org/program/accepted-papers",
    url: "https://www.pi.website/research/memory",
    paper: "https://www.pi.website/download/Mem.pdf",
  },
  {
    title: "RL Token: Bootstrapping Online RL with Vision-Language-Action Models",
    date: "2026.03.19",
    venue: "CoRL 2026",
    venueUrl: "https://2026.corl.org/program/accepted-papers",
    url: "https://www.pi.website/research/rlt",
    paper: "https://www.pi.website/download/rlt.pdf",
  },
  {
    title: "π0.7: A Steerable Generalist Robotic Foundation Model with Emergent Capabilities",
    date: "2026.04.16",
    venue: "CoRL 2026",
    venueUrl: "https://2026.corl.org/program/accepted-papers",
    url: "https://www.pi.website/blog/pi07",
    paper: "https://www.pi.website/download/pi07.pdf",
  },
];

const sections = [
  { id: "overview", label: "π Series 개요" },
  { id: "pi0", label: "π0 · Flow Matching Action Expert" },
  { id: "pi0-fast", label: "π0-FAST · Efficient Action Tokenization" },
  { id: "pi05", label: "π0.5 · Hierarchical Inference" },
  { id: "pi06", label: "π0.6 / π*0.6 · Model Scaling / Advantage Conditioning" },
  { id: "pi06-mem", label: "π0.6 + MEM · Short·Long-term Memory" },
  { id: "pi06-rlt", label: "π0.6 + RLT · Online RL" },
  { id: "pi07", label: "π0.7 · Multimodal Conditioning and World Model" },
];

const linkClass =
  "text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent";

const advantageMathML = `
  <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline" style="math-style: normal;"
    aria-label="추정 advantage는 향후 N step의 누적 reward에 N step 후 상태의 value를 더하고 현재 상태의 value를 뺀 값입니다.">
    <mrow>
      <msub>
        <mi>r</mi>
        <mrow><mi>t</mi><mo lspace="0" rspace="0">:</mo><mi>t</mi><mo>+</mo><mi>N</mi><mo>−</mo><mn>1</mn></mrow>
      </msub>
      <mo>+</mo>
      <mi>V</mi><mo stretchy="false">(</mo>
      <msub><mi>o</mi><mrow><mi>t</mi><mo>+</mo><mi>N</mi></mrow></msub>
      <mo stretchy="false">)</mo><mo>−</mo>
      <mi>V</mi><mo stretchy="false">(</mo><msub><mi>o</mi><mi>t</mi></msub><mo stretchy="false">)</mo>
    </mrow>
  </math>
`;

function Citation({ number }: { number: number }) {
  const source = sources[number - 1];

  return (
    <sup className="ml-1 text-[0.7em]">
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`출처 ${number}: ${source.title} (새 창)`}
        className={linkClass}
      >
        [{number}]
      </a>
    </sup>
  );
}

function SourceVenue({ source }: { source: (typeof sources)[number] }) {
  return (
    <a
      href={source.venueUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
      aria-label={`${source.title} — ${source.venue} 출처 (새 창)`}
    >
      {source.venue}
    </a>
  );
}

function PublicationInfo({ references }: { references: number[] }) {
  return (
    <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs leading-6 text-muted">
      {references.map((reference) => {
        const source = sources[reference - 1];

        return (
          <span key={reference} className="whitespace-nowrap">
            <SourceVenue source={source} />{" ("}
            <time dateTime={source.date.replaceAll(".", "-")} title={`최초 공개: ${source.date}`}>
              {source.date.slice(0, 7)}
            </time>
            )
          </span>
        );
      })}
    </p>
  );
}

function ArticleSection({
  id,
  number,
  title,
  references,
  children,
}: {
  id: string;
  number: string;
  title: string;
  references?: number[];
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-8 border-b border-border py-10 sm:py-12"
    >
      <p className="mb-3 font-mono text-xs text-muted" aria-hidden="true">{number}</p>
      <h2
        id={`${id}-heading`}
        className="text-xl leading-snug font-semibold tracking-tight break-keep sm:text-2xl"
      >
        {title}
      </h2>
      {references && <PublicationInfo references={references} />}
      <div className="mt-6 space-y-6 text-sm leading-7 break-keep sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}

function KeyChange({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-sm border border-border bg-surface px-5 py-4">
      <p className="mb-1 text-xs font-semibold text-accent">핵심 변화</p>
      <p className="text-sm leading-7">{children}</p>
    </div>
  );
}

function PaperFigure({
  image,
  filename,
  alt,
  reference,
  page,
  narrow = false,
}: {
  image: StaticImageData;
  filename: string;
  alt: string;
  reference: number;
  page: number;
  narrow?: boolean;
}) {
  const imageUrl = `/images/case-studies/pi-series/${filename}.png`;
  const source = sources[reference - 1];

  return (
    <figure className={narrow ? "mx-auto max-w-xl" : undefined}>
      <a
        href={imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${alt} — 크게 보기 (새 창)`}
        className="block rounded-sm border border-border bg-white p-3 sm:p-4"
      >
        <Image
          src={image}
          alt={alt}
          sizes={narrow
            ? "(min-width: 640px) 544px, 85vw"
            : "(min-width: 1200px) 832px, (min-width: 1024px) 68vw, 85vw"}
          className="block h-auto w-full"
        />
      </a>
      <figcaption className="mt-3 text-xs leading-6 text-muted">
        출처:{" "}
        <a
          href={`${source.paper}#page=${page}`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {source.title}<span className="sr-only"> (새 창)</span>
        </a>
      </figcaption>
    </figure>
  );
}

export default function PiSeriesPage() {
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
            π Series: π0에서 π0.7까지
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 break-keep text-muted">
            Physical Intelligence의 π 시리즈를 모델 구조와 주요 변화 중심으로 정리합니다.
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
            <ArticleSection id="overview" number="01" title="π Series: Generalist VLA">
              <p>
                π 시리즈는 Physical Intelligence가 실제 환경에서 복잡한 작업을 수행할 수 있는 범용 로봇 지능을 목표로 개발하는
                Vision-Language-Action(VLA) 모델 계열입니다. 다양한 로봇과 작업에서 얻은 경험을 공통 모델에 축적하고,
                이를 새로운 환경과 상황에도 활용하는 것을 지향합니다. 정밀한 물체 조작부터 여러 단계로 이루어진 일상 작업까지
                실제 로봇으로 검증하며, 범용성과 실용성을 높여 가고 있습니다.
                <Citation number={1} />
              </p>

              <div className="overflow-hidden rounded-sm border border-border">
                <table className="w-full border-collapse text-left text-sm leading-6">
                  <caption className="border-b border-border bg-surface px-4 py-4 text-left font-semibold sm:px-5">
                    π 시리즈 개요
                  </caption>
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="w-[28%] px-4 py-3 font-semibold sm:px-5">모델</th>
                      <th scope="col" className="px-4 py-3 font-semibold sm:px-5">핵심 변화</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["pi0", "π0", "VLM에 flow matching 기반 action expert를 연결합니다."],
                      ["pi0-fast", "π0-FAST", "Action sequence를 압축된 이산 토큰으로 표현합니다."],
                      ["pi05", "π0.5", "다음에 수행할 subtask를 추론하고, 이를 조건으로 action을 생성하는 계층적 구조를 사용합니다."],
                      ["pi06", "π0.6 / π*0.6", "Gemma 3 기반 구조를 사용하며, Advantage 기반으로 정책을 개선합니다."],
                      ["pi06-mem", "π0.6 + MEM", "단기 시각 기억과 장기 언어 기억을 계층형 정책에 연결합니다."],
                      ["pi06-rlt", "π0.6 + RLT", "VLA의 이미지 임베딩을 RL token으로 압축하고 작은 actor·critic을 온라인으로 학습합니다."],
                      ["pi07", "π0.7", "시각적 중간 목표, 메타데이터, 관측 이력으로 행동을 구체적으로 조건화합니다."],
                    ].map(([id, name, change]) => (
                      <tr key={id}>
                        <th scope="row" className="px-4 py-4 align-top font-medium whitespace-nowrap sm:px-5">
                          <a href={`#${id}`} className={linkClass}>{name}</a>
                        </th>
                        <td className="px-4 py-4 align-top text-muted sm:px-5">{change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ArticleSection>

            <ArticleSection id="pi0" number="02" title="π0: Flow Matching Action Expert" references={[2]}>
              <KeyChange>
                시각·언어를 이해하는 VLM과, 정밀한 연속 행동을 생성하는 action expert를 하나의 정책 안에서 연결합니다.
              </KeyChange>
              <p>
                행동을 이산 토큰으로 표현하고 autoregressive하게 예측하던
                기존 VLA들과 달리, π0는 사전 학습된 PaliGemma VLM에
                연속 행동 생성을 위한 별도의 <strong className="font-semibold">flow matching action expert</strong>를 결합합니다.
                Action expert는 각 Transformer layer의 masked self-attention을
                통해 VLM의 vision-language feature를 참조하며, 로봇 상태와
                flow timestep을 조건으로 입력받은 noised action chunk의
                vector field를 예측합니다. 추론 시에는 예측한 vector field를
                반복적으로 적분하여 연속 행동을 생성합니다.
                <Citation number={2} />
              </p>
              <p>
                이렇게 생성된 action chunk는
                미래의 여러 제어 시점에 실행할 연속 행동 시퀀스입니다.
                이미지·언어의 의미를 인지하면서도 관절이나 그리퍼의 움직임을
                연속적으로 표현할 수 있어, 옷 접기 같은 정밀 조작을 다루는
                기반이 됩니다.
              </p>
              <PaperFigure image={pi0Architecture} filename="pi0-architecture" alt="π0의 사전 학습 VLM과 action expert가 이미지, 언어, 로봇 상태 및 노이즈를 받아 연속 행동을 생성하는 원본 구조도" reference={2} page={4} />
            </ArticleSection>

            <ArticleSection id="pi0-fast" number="03" title="π0-FAST: Efficient Action Tokenization" references={[3]}>
              <KeyChange>
                π0의 continuous action 생성 방식 대신, FAST로 압축한 행동 토큰을 autoregressive하게 예측합니다.
              </KeyChange>
              <p>
                기존 토큰화 방식은 action chunk의 시간축/차원 값을
                개별적으로 양자화하여 토큰으로 표현합니다 (e.g. 50 x 7 token).
                이 경우 토큰 수는 시점 수와 action 차원에 비례하며, 특히 고주파 제어에서는
                인접 시점의 행동 값이 유사하여 중복된 정보가 반복됩니다.
                FAST는 action chunk의 <strong className="font-semibold">각 action 차원에 대해 시간축을 따라 </strong>
                Discrete Cosine Transform(DCT)을 적용하고, 얻어진 주파수 계수를
                양자화한 뒤 Byte Pair Encoding(BPE)으로 압축합니다. 시간에
                따라 반복되는 움직임을 더 효율적인 토큰열로 바꾸는 것이 핵심입니다.
                <Citation number={3} />
              </p>
              <PaperFigure image={fastTokenizer} filename="fast-tokenizer" alt="원본 FAST 토큰화 그림: 행동 시퀀스의 DCT 변환, 계수 양자화, 펼치기, BPE 압축으로 행동 토큰을 얻는 과정" reference={3} page={5} />
              <p>
                π0-FAST는 이렇게 이산화된 표현을 이용해 next-token prediction
                방식으로 로봇 행동을 학습합니다. 생성된 action token은
                BPE decoding으로 양자화된 주파수 계수열을 복원한 뒤,
                역양자화와 inverse DCT를 거쳐 연속 행동 시퀀스로 변환합니다.
              </p>
              <p>
                다만, 양자화 과정에서 정보 손실이 발생할 수 있으며,
                토큰을 순차적으로 생성하는 autoregressive decoding은
                π0의 flow matching 기반 action expert보다 추론 지연이 큽니다. 이에 따라, 이후 π0.5와 같은 후속 모델에서는 discrete action token
                예측을 VLM이 로봇 제어에 필요한 표현을 학습하도록 돕는
                auxiliary task로 활용하며, 추론 시에는 action expert가 생성한 연속 행동을 사용합니다.
                <Citation number={4} /><Citation number={5} />
              </p>
            </ArticleSection>

            <ArticleSection id="pi05" number="04" title="π0.5: Hierarchical Inference" references={[4]}>
              <KeyChange>
                High-level subtask를 먼저 추론하고, 이를 조건으로 low-level
                action chunk를 생성하는 계층적 구조를 사용합니다.
              </KeyChange>
              <p>
                π0가 이미지와 언어 지시로부터 action chunk를 생성했다면, π0.5는 그 사이에
                <strong className="font-semibold"> high-level subtask prediction</strong>을
                추가합니다. 현재 observation과 전체 task를 바탕으로 다음에 수행할
                subtask를 언어 토큰으로 생성하고, 이를 추가 조건으로 입력하여
                flow matching action expert가 연속 행동을 생성합니다.
              </p>
              <p>
                이를 위해 pre-training 단계에서는 여러 로봇의 action 데이터와
                subtask annotation, 웹의 시각·언어 데이터를 함께 학습하게 됩니다.
                이때 로봇 행동은 FAST 기반 discrete action token으로 표현하여, discrete action과
                high-level subtask, bouding box, open vocabulary cation 예측을 하나의 모델에서
                학습합니다.
              </p>
              <PaperFigure image={pi05Architecture} filename="pi05-architecture" alt="π0.5 원본 구조도: 이산 행동과 시각 언어 데이터의 사전 학습에서 하위작업 예측 및 연속 action expert를 사용하는 후속 학습과 추론으로 연결됩니다" reference={4} page={4} />

              <div className="pt-3">
                <h3 className="text-lg font-semibold tracking-tight">π0.5 + KI: Knowledge Insulation</h3>
                <PublicationInfo references={[5]} />
              </div>
              <p>
                π0.5는 로봇 행동을 FAST 토큰으로 사전 학습한 뒤, post-training 단계에서
                연속 행동을 생성하는 action expert를 추가합니다. 반면,
                knowledge insulation은 두 모듈을 함께 학습하면서, 새롭게
                초기화된 action expert의 gradient가 VLM의 사전 학습된
                표현을 훼손하는 문제를 다룹니다.
                <Citation number={4} /><Citation number={5} />
              </p>
              <p>
                VLM은 FAST 기반 discrete action token 예측과 시각·언어 과제로
                학습하고, action expert는 flow matching으로 연속 행동을
                학습합니다. 그러나, action expert는 무작위로
                초기화되어 행동 예측을 처음부터 학습하므로, 이 과정의
                gradient가 VLM까지 전달되면 사전 학습된 시각·언어 표현을
                교란하고 언어 지시를 따르는 능력을 저하시킬 수 있습니다. 이를 방지하기 위해
                <strong className="font-semibold"> action expert에서 VLM으로 흐르는
                gradient를 차단</strong>합니다.
              </p>
              <p>
                FAST 토큰 예측은 action expert의 학습 상태에 의존하지 않는
                직접적인 행동 학습 신호를 VLM에 제공합니다. VLM은 기존의
                next-token prediction 방식으로 로봇 제어에 필요한 표현을
                학습하고, 시각·언어 과제도 함께 학습하여 기존 의미 지식을
                유지하도록 하며, 정밀한 행동 제어를 위해 action expert가
                이러한 표현을 참조해 flow matching으로 연속적인 action chunk를
                생성하도록 합니다.
              </p>
              <PaperFigure image={knowledgeInsulation} filename="knowledge-insulation" alt="Knowledge insulation 원본 구조도: VLM은 언어와 이산 행동을 예측하고 action expert는 연속 행동을 예측하며, 둘 사이에서 expert의 역전파를 차단합니다" reference={5} page={2} />
            </ArticleSection>

            <ArticleSection id="pi06" number="05" title="π0.6 / π*0.6: Model Scaling / Advantage Conditioning" references={[6, 7]}>
              <KeyChange>
                π0.6은 VLM과 action expert의 규모를 확장합니다. π*0.6은
                value function으로 추정한 advantage를 조건으로 사용하여
                로봇 rollout으로 정책을 개선합니다.
              </KeyChange>

              <h3 className="pt-2 text-lg font-semibold tracking-tight">π0.6: Model Scaling</h3>
              <p>
                π0.6은 π0.5의 hierarchical inference와 flow matching 기반
                행동 생성 구조를 유지하면서 모델의 규모를 확장합니다.
                PaliGemma 기반 VLM을 Gemma 3 4B 기반 VLM으로
                교체하고, action expert의 크기를 약 300M에서 860M으로 늘립니다.
                π0.5 + KI에서 사용한 discrete action token 기반 표현 학습과
                action expert의 gradient 차단 방식도 이어받습니다.
                Attention은 이미지 토큰 간에는 bidirectional, text 토큰 간에는
                causal 방식을 사용합니다. 또한 언어 지시와 함께 원하는 수행 품질
                (execution quality) 등의 내용을 포함하는 metadata를 prompt에 입력하여,
                같은 task에서도 수행 방식을 추가로 조건화할 수 있습니다.
                <Citation number={6} /><Citation number={7} />
              </p>
              <PaperFigure image={pi06Architecture} filename="pi06-architecture" alt="π0.6 모델 카드의 원본 구조도: 확장된 VLM 및 action expert와 언어 지시 옆의 metadata 조건 입력이 표시되어 있습니다" reference={6} page={2} />


              <h3 id="pistar06" className="scroll-mt-8 pt-3 text-lg font-semibold tracking-tight">
                π*0.6 / RECAP: Advantage Conditioning
              </h3>
              <p>
                π*0.6은 π0.6을 기반으로, advantage conditioning을
                활용하는 강화학습 방법인 <strong className="font-semibold">RECAP(RL with Experience and
                Corrections via Advantage-conditioned Policies)</strong>으로 학습한 모델입니다.
                Expert demonstration, 로봇이 직접 수집한 rollout, human intervention 데이터를
                함께 사용하며, 각 행동이 얼마나 좋은 결과로 이어졌는지를
                학습 조건에 반영합니다.
                <Citation number={7} />
              </p>
              <p>
                이를 학습하기 위해 별도의 value function은 현재 observation과 task로부터 예상
                return을 추정합니다. 이 값과 실행 데이터의 reward를 이용해
                각 행동의 N-step advantage(
                <span
                  className="inline-block max-w-full overflow-x-auto align-middle text-base sm:text-lg"
                  title="r의 아래첨자로 표시된 구간의 reward 합을 의미합니다."
                  dangerouslySetInnerHTML={{ __html: advantageMathML }}
                />
                )를 추정합니다. 이를 기준값을
                넘는지에 따라 이진 조건으로 변환하고 VLA의 입력에 추가하여,
                서로 다른 품질의 행동을 조건별로 구분해 학습합니다.
              </p>
              <p>
                사전 학습 이후에는 실제 로봇에서 rollout과 human intervention 데이터를 수집한 뒤,
                누적된 데이터로 value function과 정책을 재학습하는 과정을
                반복합니다. 추론 시에는
                prompt에 <code className="font-mono text-[0.9em]">Advantage: positive</code>를
                입력합니다. 이는 학습 시 높은 advantage의 행동에 붙인 라벨로,
                action expert가 이러한 행동을 생성하도록 유도합니다.
              </p>
              <PaperFigure image={piStar06Architecture} filename="pistar06-architecture" alt="π*0.6 논문의 원본 학습 구조: 별도 value function에서 계산한 advantage를 이진 조건으로 바꾸어 VLA의 입력에 넣습니다" reference={7} page={4} narrow />
            </ArticleSection>

            <ArticleSection id="pi06-mem" number="06" title="π0.6 + MEM: Short·Long-term Memory" references={[8]}>
              <KeyChange>
                Short-term video memory와 long-term language memory를
                결합하여, 과거의 관측과 수행 이력을 현재 행동의 조건으로 사용합니다.
              </KeyChange>
              <p>
                앞선 모델들
                <Citation number={2} /><Citation number={3} /><Citation number={4} />
                <Citation number={5} /><Citation number={6} /><Citation number={7} />{" "}처럼
                현재 시점의 관측만으로 행동을 예측하면, 가려진 물체의 위치나
                이전 subtask의 수행 결과를 반영하기 어렵습니다. π0.6 + MEM은
                <strong className="font-semibold"> Multi-Scale Embodied Memory</strong>를
                추가하여, 최근 관측은 video memory로, 장기적인 수행 이력은
                language memory로 처리합니다. 두 기억을 각각 low-level 행동
                생성과 high-level subtask prediction에 연결합니다.
                <Citation number={8} />
              </p>
              <PaperFigure image={pi06MemArchitecture} filename="pi06-mem-architecture" alt="MEM 원본 구조: 왼쪽 high-level policy가 language memory를 갱신하고 subtask를 예측하며, 오른쪽 low-level policy가 video memory encoder와 action expert로 행동을 생성합니다" reference={8} page={4} />
              <p>
                <strong className="font-semibold">Short-term video memory</strong>는
                현재 프레임과 최근 프레임들을 video encoder에 입력합니다.
                여러 프레임의 모든 patch token 간 attention을 한 번에 계산할 때의
                연산 비용을 줄이기 위해,
                프레임 내부의 spatial attention과 프레임 사이의 temporal
                attention을 분리해 적용하고, 과거의 정보를 현재 프레임의
                feature에 통합합니다. 이후 현재 시점에 해당하는 feature만
                VLM으로 전달하여, backbone의 입력 토큰 수를 늘리지 않으면서
                action expert가 최근 움직임과 관측 이력을 참고하도록 합니다.
              </p>
              <p>
                <strong className="font-semibold">Long-term language memory</strong>는
                완료한 subtask, 물체의 위치, 이전 실패와 같은 정보를 언어로
                요약해 유지합니다. High-level policy는 observtion과 task,
                이전 memory를 바탕으로 다음 subtask와 갱신된 memory를
                함께 생성합니다. 선택된 subtask는 low-level policy의 행동
                조건으로 사용하고, 갱신된 memory는 다음 high-level 추론에
                다시 입력합니다.
              </p>
              <PaperFigure image={pi06MemOverview} filename="pi06-mem-overview" alt="MEM 논문 Figure 1: short-term video memory와 long-term language memory의 결합 구조 및 long-horizon task, 부분 관측, 조작 전략 적응 예시" reference={8} page={1} />
            </ArticleSection>

            <ArticleSection id="pi06-rlt" number="07" title="π0.6 + RLT: Online RL" references={[9]}>
              <KeyChange>
                VLA의 행동 제안과 압축된 표현을 작은 actor·critic에 연결하고 online RL로 학습합니다.
              </KeyChange>
              <p>
                VLA 전체를 온라인으로 학습하려면 큰 연산
                비용과 많은 데이터가 필요합니다. π0.6 + RLT는 VLA가 학습한
                표현을 <strong className="font-semibold">RL token으로 압축</strong>하고,
                이를 입력받는 작은 actor·critic을 학습하여 정밀한
                조작을 개선합니다. RL token은 현재 관측을 요약한 상태 표현으로,
                큰 VLA와 온라인 RL 모듈을 연결하는 역할을 합니다.
                <Citation number={9} />
              </p>
              <PaperFigure image={pi06RltOverview} filename="pi06-rlt-overview" alt="RLT 원본 전체 구조: VLA의 내부 표현에서 추출한 RL token과 action expert의 행동 제안을 작은 actor 및 critic에 연결해 온라인 RL을 수행합니다" reference={9} page={1} />
              <p>
                먼저 VLA의 마지막 layer에서 얻은 token embedding과 학습 가능한
                readout token을 작은 encoder Transformer에 입력합니다.
                Readout token의 출력을 RL token으로 사용하고, decoder가
                이를 입력 받아 원래 embedding을 복원하도록 학습합니다.
                이 reconstruction bottleneck을 통해 관측의 정보를 작은 벡터에 압축합니다.
                VLA fine-tuning 단계가 끝나면, 온라인 학습 시에는 VLA와 RL token을 추출하는 encoder의 가중치를 고정합니다.
              </p>
              <PaperFigure image={pi06RltToken} filename="pi06-rlt-token" alt="RLT 원본 RL token 추출 구조: π0.6의 image embeddings를 encoder transformer가 하나의 RL token으로 압축하고 decoder transformer가 복원합니다" reference={9} page={4} narrow />
              <p>
                Online RL 단계에서는 actor가 RL token, 로봇 상태, 그리고
                VLA가 제안한 reference action chunk를 입력받아 행동을
                생성합니다. Q-value를 높이는 목표와 reference action과의 차이를
                억제하는 regularization term을 함께 사용하여, VLA의 행동을 기준으로
                정책을 개선합니다. 학습 시에는 reference action 입력에 dropout을
                적용해, actor가 제안된 행동을 복사하는 데만 의존하지 않도록 합니다.
              </p>
            </ArticleSection>

            <ArticleSection id="pi07" number="08" title="π0.7: Multimodal Conditioning and World Model" references={[10]}>
              <KeyChange>
                Task / subtask instruction, episode metadata, subgoal image를 행동의 조건으로
                사용하고, world model로 시각적 중간 목표를 생성합니다.
              </KeyChange>
              <p>
                π0.7은 π0.6<Citation number={6} />의 구조에 subgoal image를
                추가하여, 시각적 중간 목표를 조건으로 행동을 생성합니다.
                Subgoal image는 subtask 수행 후 도달할 장면을 나타내며,
                BAGEL 기반 world model이 현재 관측과 subtask를 바탕으로
                생성합니다.
                <Citation number={10} />
              </p>
              <p>
                Episode metadata에는 수행 속도, 품질, 실수 여부를 포함합니다.
                이를 조건으로 서로 다른 수준의 demonstration과 자율 실행 기록을
                함께 학습하며, 추론 시에는 원하는 수행 조건을 지정해 행동을
                유도합니다. 또한 prompt에 control mode를 포함하여,
                joint control과 end-effector control 중 사용할 제어 방식을
                명시합니다.
              </p>
              <p>
                과거 observation들은 MEM<Citation number={8} />에서 사용한 video history
                encoder로 압축합니다. 이 short-term memory를 통해 최근 움직임도
                행동 생성에 반영합니다.
              </p>
              <PaperFigure image={pi07Architecture} filename="pi07-architecture" alt="π0.7 원본 아키텍처: 관측 이력, 작업 및 하위작업 지시, subgoal images, metadata가 VLA로 입력되고, 아래에 high-level policy와 world model이 연결됩니다" reference={10} page={4} />
            </ArticleSection>

            <section id="references" aria-labelledby="references-heading" className="scroll-mt-8 pt-10 sm:pt-12">
              <h2 id="references-heading" className="text-xl font-semibold tracking-tight">참고 자료</h2>
              <ol className="mt-6 space-y-6">
                {sources.map((source, index) => (
                  <li key={source.url} className="flex gap-3 text-sm leading-6">
                    <span className="pt-0.5 font-mono text-xs text-muted">[{index + 1}]</span>
                    <div className="min-w-0">
                      <a href={source.url} target="_blank" rel="noopener noreferrer" lang="en" className={linkClass}>
                        {source.title}<span className="sr-only"> (새 창)</span>
                      </a>
                      <p className="mt-1 text-xs text-muted">
                        Physical Intelligence · <SourceVenue source={source} /> · {source.paper ? "공개" : "확인"} {source.date}
                      </p>
                      {source.paper && source.paper !== source.url && (
                        <a href={source.paper} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-1 inline-block text-xs`}>
                          논문 PDF<span className="sr-only"> (새 창)</span>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-border pt-5 text-xs leading-6 text-muted">
                본문의 11개 그림은 공식 논문·모델 카드의 해당 영역을 잘라
                사용하였으며, 그림 안의 구성 요소와 표기는 원본을 유지하였습니다.
                이미지의 권리는 각 논문 저자에게 있습니다.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
