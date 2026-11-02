import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { amazonRoboticsCaseStudy as study } from "@/content/case-studies";
import segmentation from "@/public/images/case-studies/amazon-robotics/vulcan-segmentation.png";
import graspCandidates from "@/public/images/case-studies/amazon-robotics/vulcan-grasp-candidates.png";

export const metadata: Metadata = {
  title: `${study.title} | Seunghyo Yun`,
  description: study.description,
};

const sources = [
  {
    title: "How Amazon Robotics is working to eliminate the need for barcodes",
    publisher: "Amazon Science · 2022.12.09",
    url: "https://www.amazon.science/latest-news/how-amazon-robotics-is-working-on-new-ways-to-eliminate-the-need-for-barcodes",
    note: "MMID와 재고 정보를 이용한 식별 후보 축소를 설명합니다.",
  },
  {
    title:
      "Scaling Object-Centric Robotic Manipulation with Multimodal Object Identification",
    publisher: "Mitash et al. · ICRA 2024",
    url: "https://www.amazon.science/publications/scaling-object-centric-robotic-manipulation-with-multimodal-object-identification",
    note: "상품 식별을 검색 문제로 정식화하고 여러 이미지·텍스트 참조 자료를 결합합니다.",
  },
  {
    title: "ARMBench: An Object-Centric Benchmark Dataset for Robotic Manipulation",
    publisher: "Mitash et al. · ICRA 2023",
    url: "https://www.amazon.science/publications/armbench-an-object-centric-benchmark-dataset-for-robotic-manipulation",
    note: "물체 식별이 저장된 모델과 속성을 조작 계획에 연결하는 역할을 설명합니다.",
  },
  {
    title:
      "Safe and robust robotic picking of items based on reference image and item attributes",
    publisher: "Amazon Technologies · US12579652B1 · 2026.03.17 공개",
    url: "https://patents.google.com/patent/US12579652B1/en",
    note: "상품 속성을 활용한 분할, 파지 방식 및 힘 선택의 설계 예시를 제시합니다.",
  },
  {
    title: "How Amazon’s Vulcan robots use touch to plan and execute motions",
    publisher: "Amazon Science · 2025.05.09",
    url: "https://www.amazon.science/blog/how-amazons-vulcan-robots-use-touch-to-plan-and-execute-motions",
    note: "Vulcan의 상품 매칭, 3D 파지 계획과 실행 중 피드백을 설명합니다. 본문의 공식 이미지·영상 출처입니다.",
  },
];

const sections = [
  { id: "overview", title: "문제와 시스템 구조" },
  { id: "inventory", title: "Inventory와 후보 상품" },
  { id: "identification", title: "이미지 검색으로 상품 식별" },
  { id: "product-knowledge", title: "Product DB와 물체 속성" },
  { id: "grasp-planning", title: "속성을 활용한 파지 계획" },
  { id: "feedback", title: "Vulcan과 실행 중 피드백" },
  { id: "takeaways", title: "Object-Centric Manipulation" },
];

const pipeline = [
  { label: "Container", detail: "Tote / Bin ID", href: "inventory" },
  { label: "Candidates", detail: "상품 후보 목록", href: "inventory" },
  { label: "Identify", detail: "시각 정보로 식별", href: "identification" },
  { label: "Product DB", detail: "상품 속성 조회", href: "product-knowledge" },
  { label: "Plan", detail: "파지 방식·위치·힘", href: "grasp-planning" },
  { label: "Act & Verify", detail: "조작과 피드백", href: "feedback" },
];

const linkClass =
  "text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent";

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

function ArticleSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
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
        {number}
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

export default function AmazonRoboticsPage() {
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
          <p
            lang="en"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
          >
            {study.category} / Robotics
          </p>
          <h1 className="mt-3 max-w-4xl text-[1.75rem] leading-snug font-semibold tracking-tight break-keep sm:text-4xl">
            Amazon Robotics:
            <br />
            상품 인식 기반 안전 조작 시스템
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 break-keep text-muted">
            Amazon Robotics의 상품 식별과 데이터베이스의 사전 지식이 시각·기하 정보, 힘 피드백과 연결되는 과정을 정리합니다.
          </p>
          <p className="mt-5 text-xs leading-6 text-muted">
            MMID · ARMBench · Grasp Planning · Vulcan
          </p>
        </header>

        <div className="grid items-start gap-x-12 lg:grid-cols-[minmax(0,1fr)_13rem]">
          <aside className="border-b border-border py-6 lg:sticky lg:top-8 lg:order-2 lg:border-b-0 lg:py-10">
            <nav aria-label="이 글의 목차">
              <p className="mb-3 text-xs font-semibold tracking-wide text-muted">
                이 글의 흐름
              </p>
              <ol className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-3 py-1 text-muted hover:text-accent"
                    >
                      <span className="font-mono text-[11px] opacity-60" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="underline-offset-4 group-hover:underline">
                        {section.title}
                      </span>
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
            <ArticleSection
              id="overview"
              number="01"
              title="물체를 찾는 것만으로는 충분하지 않습니다"
            >
              <p>
                물류 환경에서 로봇이 물건을 집는 문제는 단순히 물체를 검출하고
                파지점(grasp point)을 찾는 것만으로 해결하기 어렵습니다.
                Amazon과 같은 fulfillment center에는 크기, 형태, 재질이 모두
                다른 수많은 상품이 존재합니다. 같은 파지 전략을 모든 상품에
                적용하면 단단한 상자에는 문제가 없더라도, 빵이나 과일처럼 쉽게
                변형되는 물체는 손상될 수 있습니다.
              </p>
              <p>
                Amazon의 공개 연구에서 흥미로운 점은 카메라로 관측한 정보와 함께
                물류 시스템에 이미 축적된 상품 정보를 활용한다는 것입니다.
                재고 정보로 후보를 좁히고, 실제 상품을 식별한 뒤, 해당 물체의
                속성과 과거 경험을 조작 계획에 연결합니다.
                <Citation number={1} />
                <Citation number={2} />
              </p>

              <figure className="rounded-sm border border-border bg-surface p-5 sm:p-6">
                <p lang="en" className="mb-5 text-xs font-semibold tracking-wide text-accent">
                  From identity to action
                </p>
                <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {pipeline.map((step, index) => (
                    <li key={step.label}>
                      <a
                        href={`#${step.href}`}
                        className="flex h-full gap-3 rounded-sm border border-border bg-white p-4 hover:border-accent/50"
                      >
                        <span className="font-mono text-xs text-muted" aria-hidden="true">
                          {index + 1}
                        </span>
                        <span>
                          <span lang="en" className="block text-sm font-semibold text-accent">
                            {step.label}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-muted">
                            {step.detail}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
                <figcaption className="mt-4 text-xs leading-6 text-muted">
                  여러 공개 자료를 연결해 재구성한 개념적 흐름입니다. 각 단계를
                  선택하면 해당 설명으로 이동합니다.
                </figcaption>
              </figure>

              <p className="border-l-2 border-accent pl-5 text-sm leading-7 text-muted">
                이 글은 MMID와 ARMBench 논문, 상품 속성을 활용한 피킹 특허,
                2025년에 공개된 Vulcan 설명을 함께 읽은 케이스 스터디입니다.
                자료마다 대상 작업과 구현이 다르므로, 아래의 전체 흐름이 하나의
                운영 시스템에 그대로 구현되어 있다는 의미는 아닙니다.
              </p>
            </ArticleSection>

            <ArticleSection
              id="inventory"
              number="02"
              title="Inventory가 식별 후보를 좁혀 줍니다"
            >
              <p>
                물류센터의 tote나 bin에는 여러 상품이 섞여 있습니다. 일반적인
                비전 문제로 생각하면 로봇이 카메라 이미지만 보고 Amazon 전체
                카탈로그에서 현재 물체를 찾아야 할 것처럼 보입니다. 하지만
                물류 시스템에는 훨씬 강력한 사전 정보(prior information)가
                있습니다. 각 컨테이너에 어떤 상품이 들어 있는지 재고 시스템이
                추적하고 있다는 점입니다.
              </p>
              <p>
                Amazon은 MMID(Multimodal Identification)를 소개하면서,
                하나의 tote에 들어 있는 수십 개 수준의 상품만 비교하면 된다는
                점을 설명합니다. 전체 카탈로그를 대상으로 하는 거대한 인식
                문제를, 현재 컨테이너의 후보 목록 안에서 상품을 찾는 문제로
                바꿀 수 있습니다. 이 수십 개라는 규모는 해당 소개 자료의
                예시이며, 모든 컨테이너에 고정된 값은 아닙니다.
                <Citation number={1} />
              </p>
              <div className="rounded-sm border border-border bg-surface px-5 py-5 text-center">
                <p lang="en" className="font-mono text-sm leading-7 sm:text-base">
                  Tote ID → Inventory manifest
                  <br />
                  {"→ {SKU₁, SKU₂, …, SKUₙ}"}
                </p>
              </div>
              <p>
                이 구조를 설명할 때는 QR이나 바코드 자체에 모든 상품 목록과
                수량이 들어 있다고 가정할 필요가 없습니다. 컨테이너 ID를 키로
                backend inventory system의 manifest, 즉 해당 컨테이너의
                상품 목록을 조회한다고 이해하는 편이 적절합니다. 이는 정보의
                연결 관계를 설명하기 위한 모델이며, 공개 자료가 특정 QR의
                저장 형식까지 명시하는 것은 아닙니다.
              </p>
            </ArticleSection>

            <ArticleSection
              id="identification"
              number="03"
              title="상품 식별을 이미지 검색 문제로 바꿉니다"
            >
              <p>
                후보 목록이 준비되면, 눈앞의 물체가 그중 어떤 상품인지 알아내야
                합니다. Amazon은 상품이 물류센터를 통과하는 과정에서 촬영되는
                이미지를 참조 자료로 활용합니다. 관측 이미지와 참조 이미지를
                신경망으로 벡터 표현(embedding)으로 바꾼 뒤, 후보 상품들의
                표현과 비교하는 방식입니다. MMID의 소개 자료에서는 외형과
                치수처럼 여러 정보를 식별에 활용한다고 설명합니다.
                <Citation number={1} />
              </p>
              <p>
                ICRA 2024 논문에서는 Object Identification을 이미지 검색과
                유사한 문제로 정의합니다. 복잡한 컨테이너 장면에서 분할된
                물체 이미지가 query가 되고, 재고 시스템으로부터 얻은 상품
                목록이 candidate set이 되며, 각 후보의 참조 데이터가
                gallery를 구성합니다.
                <Citation number={2} />
              </p>

              <figure className="rounded-sm border border-border bg-white p-5 sm:p-6">
                <p className="mb-4 text-sm font-semibold">Embedding 기반 식별의 개념</p>
                <div className="space-y-3 font-mono text-sm leading-7 sm:text-base" lang="en">
                  <p>
                    z<sub>q</sub> = f<sub>θ</sub>(I<sub>observed</sub>)
                  </p>
                  <p>
                    z<sub>i</sub> = f<sub>θ</sub>(I<sub>reference, i</sub>)
                  </p>
                  <p className="border-t border-border pt-3 text-accent">
                    î = argmin<sub>i ∈ C</sub> d(z<sub>q</sub>, z<sub>i</sub>)
                  </p>
                </div>
                <figcaption className="mt-4 text-xs leading-6 text-muted">
                  C는 현재 컨테이너의 후보 상품 집합이고, d는 표현 사이의
                  거리입니다. 후보마다 참조 이미지가 하나씩 있다고 단순화한
                  수식입니다. 실제로는 여러 참조 이미지나 다른 모달리티를
                  함께 사용할 수 있습니다.
                </figcaption>
              </figure>

              <p>
                실제 논문은 이러한 기본 형태에서 더 나아가 물류 과정의
                tray·bin 이미지와 카탈로그 이미지·상품명을 함께 다룹니다.
                참조 데이터가 일부 상품에만 존재하는 상황에서, 서로 다른
                촬영 환경의 이미지 표현을 학습하고 이미지와 텍스트를 정렬한
                다음 여러 참조 소스의 예측을 결합합니다. 따라서 위 수식은
                원리를 설명하기 위한 것이며, 논문의 전체 알고리즘을 그대로
                나타내지는 않습니다.
                <Citation number={2} />
              </p>
              <p>
                Vulcan의 product matcher에서도 같은 상품을 다른 각도와
                조명에서 촬영한 이미지는 가깝게, 서로 다른 상품의 이미지는
                멀게 배치하도록 contrastive learning을 사용합니다.
                이렇게 하면 상품의 바코드를 직접 읽지 않아도 외형을 이용해
                후보 중 실제 상품을 식별할 수 있습니다.
                <Citation number={5} />
              </p>
            </ArticleSection>

            <ArticleSection
              id="product-knowledge"
              number="04"
              title="Product ID가 조작에 필요한 지식을 연결합니다"
            >
              <p>
                물체의 위치와 모양을 이미 보고 있다면, 정확히 어떤 상품인지까지
                알아야 하는 이유는 무엇일까요? 상품의 정체성을 알면 지금의
                이미지에는 드러나지 않는 정보를 가져올 수 있기 때문입니다.
                ARMBench 논문은 파지 전 물체 ID를 알아내면 과거에 저장한
                해당 물체의 모델이나 속성에 접근하여 manipulation planning에
                활용할 수 있다고 설명합니다.
                <Citation number={3} />
              </p>
              <p>
                로봇의 인식 결과는 이제 “여기에 물체가 있습니다”에서 “이 물체는
                특정 상품이며, 그 상품에 대해 저장된 지식이 있습니다”로
                확장됩니다. Product ID가 시각 인식과 물리적·의미적 사전
                지식을 연결하는 키가 되는 것입니다. 2024년 논문은 질량,
                모양, 크기뿐 아니라 과거 파지의 성공·실패와 손상 이력도
                활용 가능한 정보로 제시합니다.
                <Citation number={2} />
              </p>

              <div className="overflow-x-auto rounded-sm border border-border">
                <table className="w-full border-collapse text-left text-sm leading-6">
                  <caption className="border-b border-border bg-surface px-5 py-4 text-left font-semibold">
                    상품 정보와 조작 계획의 연결 예시
                  </caption>
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="w-[38%] px-4 py-3 font-semibold sm:px-5">상품 정보</th>
                      <th scope="col" className="px-4 py-3 font-semibold sm:px-5">계획에서 고려할 내용</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["크기·치수·형상", "접근 공간, 파지 가능한 면, 주변 물체와의 간섭을 고려합니다."],
                      ["무게", "들어 올릴 때 필요한 지지력과 로봇·도구의 제약을 고려합니다."],
                      ["취약성·변형 가능성", "손상을 줄이기 위한 파지 방식과 힘의 범위를 고려합니다."],
                      ["상품 범주·표면 특성", "흡착이나 집게 파지가 적합한지 판단하는 데 참고합니다."],
                      ["과거 조작 이력", "이전에 성공하거나 실패한 접근을 다음 계획에 참고합니다."],
                    ].map(([attribute, use]) => (
                      <tr key={attribute}>
                        <th scope="row" className="px-4 py-4 align-top font-medium sm:px-5">{attribute}</th>
                        <td className="px-4 py-4 align-top text-muted sm:px-5">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-7 text-muted">
                위 표는 논문과 특허를 바탕으로 정리한 활용 예시입니다. Amazon의
                실제 Product DB에 모든 속성이 동일한 필드로 저장되어 있거나,
                모든 상품의 물성이 완비되어 있다는 뜻은 아닙니다. 재질과 표면
                특성도 저장 정보와 현재 관측을 함께 고려해야 합니다.
                <Citation number={2} />
                <Citation number={4} />
              </p>
            </ArticleSection>

            <ArticleSection
              id="grasp-planning"
              number="05"
              title="상품 속성은 파지 계획의 사전 정보가 됩니다"
            >
              <p>
                이 연결을 직접적으로 보여 주는 자료는 Amazon Technologies의
                특허인 <em lang="en">Safe and robust robotic picking of items based
                on reference image and item attributes</em>입니다. 특허는
                target item ID를 이용해 참조 이미지와 크기, 치수, 무게, 범주,
                형상, 취약성 등의 속성을 가져오고, 분할 결과와 함께 파지 계획에
                활용하는 구성을 제시합니다. 참조 이미지와 속성은 분할 단계에도
                사용될 수 있으므로, 정보가 흐르는 순서가 항상 일방향인 것은
                아닙니다.
                <Citation number={4} />
              </p>
              <p>
                여기서 계획하는 것은 파지 위치만이 아닙니다. 흡착(vacuum),
                집게 파지(pinch), 흡착과 집게의 결합처럼 어떤 방식으로 잡을지와
                어느 정도의 힘을 사용할지도 포함됩니다. 특허는 빵, 과일,
                바나나처럼 손상되기 쉬운 상품에 대해 손상을 줄일 수 있는
                파지 방식이나 힘을 선택하는 예시를 설명합니다.
                <Citation number={4} />
              </p>

              <div className="rounded-sm border border-border bg-surface p-5 sm:p-6">
                <p className="text-sm font-semibold text-accent">파지 계획의 입력과 출력</p>
                <dl className="mt-4 space-y-4 text-sm leading-7">
                  <div className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-4">
                    <dt className="font-semibold">입력</dt>
                    <dd>현재 물체의 시각·기하 정보 + 상품 속성 + 로봇·도구의 상태</dd>
                  </div>
                  <div className="grid gap-1 border-t border-border pt-4 sm:grid-cols-[4rem_1fr] sm:gap-4">
                    <dt className="font-semibold">출력</dt>
                    <dd>파지 방식 + 파지 위치·자세 + 파지 힘</dd>
                  </div>
                </dl>
                <p lang="en" className="mt-5 border-t border-border pt-4 font-mono text-xs leading-6 sm:text-sm">
                  Grasp = f(Visual Geometry, Object Attributes, Robot State)
                </p>
                <p className="mt-2 text-xs leading-6 text-muted">
                  공개 설명을 정리한 개념식입니다.
                </p>
              </div>

              <p>
                이를 “취약하면 약하게 잡고, 무거우면 강하게 잡습니다”라는
                조건문만으로 이해하기는 어렵습니다. 힘을 너무 낮추면 물체가
                미끄러질 수 있고, 충분한 힘이 있어도 접촉 위치나 표면 상태가
                적절하지 않으면 파지에 실패할 수 있습니다. 상품 속성은 현재의
                형상과 도구 조건 안에서 가능한 행동을 좁히는 사전 정보 또는
                제약으로 해석하는 편이 적절합니다.
              </p>
              <p>
                특허 역시 point cloud의 형상과 표면 구조를 사용하며, 일부
                파지 계획을 machine learning 기법으로 생성할 수 있다고
                설명합니다. 따라서 공개 자료만으로 전체 시스템을 사람이
                작성한 규칙의 집합이라고 단정할 수는 없습니다. 또한 특허의
                구현 예시가 특정 로봇에 그대로 배포되었다고 볼 수는 없습니다.
                <Citation number={4} />
              </p>
            </ArticleSection>

            <ArticleSection
              id="feedback"
              number="06"
              title="Vulcan은 계획에 실행 중 피드백을 더합니다"
            >
              <p>
                2025년에 공개된 Vulcan 설명에서는 이러한 인식과 계획에
                접촉 피드백이 결합되는 모습을 볼 수 있습니다. Vulcan이
                다루는 fabric pod는 위가 열린 tote와 달리 앞쪽에서 접근하는
                수납 구조이며, 여러 물체가 쌓여 있고 탄성 밴드로 지지됩니다.
                주변 물체와의 접촉과 충돌 가능성이 계획에서 중요해집니다.
                <Citation number={5} />
              </p>

              <figure>
                <video
                  controls
                  playsInline
                  muted
                  preload="none"
                  width={1920}
                  height={1080}
                  poster="/images/case-studies/amazon-robotics/vulcan-demo-poster.jpg"
                  aria-label="Amazon Vulcan Stow가 주변 물체를 밀어 수납 공간을 확보하는 동작의 시각화"
                  aria-describedby="vulcan-video-caption"
                  className="aspect-video w-full rounded-sm border border-border bg-surface object-contain"
                >
                  <source src="/videos/case-studies/amazon-robotics/vulcan-demo.mp4" type="video/mp4" />
                  브라우저에서 영상을 재생할 수 없습니다.{" "}
                  <a href="/videos/case-studies/amazon-robotics/vulcan-demo.mp4">시연 영상을 다운로드하실 수 있습니다.</a>
                </video>
                <figcaption id="vulcan-video-caption" className="mt-3 text-xs leading-6 text-muted">
                  영상 1. Vulcan Stow가 도구로 주변 물체를 밀어 수납 공간을
                  확보하는 동작의 공식 시각화입니다. 약 8초 길이의 무음
                  영상입니다. © Amazon / Amazon Science.
                  <Citation number={5} />
                </figcaption>
              </figure>

              <p>
                픽킹 과정에서는 이미지 분할과 깊이 정보를 결합해 3D 장면을
                구성하고, 상품을 식별한 다음 흡착에 적합한 평평한 면을 찾습니다.
                후보 파지점은 주변 공간과 물체를 꺼낼 때의 충돌 가능성을
                고려해 평가됩니다. 아래 그림은 물체 분할과 3D 파지 후보가
                각각 어떤 정보를 제공하는지 보여 줍니다.
                <Citation number={5} />
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <figure>
                  <Image
                    src={segmentation}
                    alt="Vulcan이 수납칸의 상품을 색상별로 분할하고, 다른 물체에 가려진 상품과 금속 구조물을 표시한 결과"
                    sizes="(min-width: 1200px) 360px, (min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[4/3] w-full rounded-sm border border-border bg-white object-contain"
                  />
                  <figcaption className="mt-3 text-xs leading-6 text-muted">
                    그림 1. 물체 영역과 가림 상태를 구분한 장면입니다.
                    © Amazon / Amazon Science.
                    <Citation number={5} />
                  </figcaption>
                </figure>
                <figure>
                  <Image
                    src={graspCandidates}
                    alt="물체 표면의 평평한 영역을 색상 패치로 표현하고 흡착 접근 후보를 올리브색 선으로 표시한 Vulcan의 3D 파지 표현"
                    sizes="(min-width: 1200px) 360px, (min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[4/3] w-full rounded-sm border border-border bg-white object-contain"
                  />
                  <figcaption className="mt-3 text-xs leading-6 text-muted">
                    그림 2. 색상 패치는 평평한 표면을, 올리브색 선은 흡착
                    후보를 나타냅니다. © Amazon / Amazon Science.
                    <Citation number={5} />
                  </figcaption>
                </figure>
              </div>

              <p>
                계획 이후에도 판단은 계속됩니다. Vulcan의 도구는 힘과 토크를
                측정하며, 물체를 꺼내는 과정에서는 흡착 압력과 카메라 관측을
                확인합니다. 파지점이 실패하면 다른 후보를 시도하고, 반복적으로
                실패하는 경우에는 사람이 처리하도록 넘기는 절차도 설명되어
                있습니다.
                <Citation number={5} />
              </p>
              <div className="grid gap-5 border-y border-border py-6 sm:grid-cols-2">
                <div>
                  <h3 lang="en" className="text-sm font-semibold text-accent">Database prior</h3>
                  <p className="mt-2 text-sm leading-7">
                    “이 상품은 쉽게 변형됩니다”처럼, 조작 전에 알고 있는
                    상품의 특성입니다. 초기 계획을 정하는 데 사용합니다.
                  </p>
                </div>
                <div>
                  <h3 lang="en" className="text-sm font-semibold text-accent">Online feedback</h3>
                  <p className="mt-2 text-sm leading-7">
                    “지금 힘이 커지고 있습니다” 또는 “흡착이 유지되지 않습니다”처럼,
                    실행 중 실제 상태를 알려 주는 관측입니다.
                  </p>
                </div>
              </div>
              <p>
                두 정보는 서로를 보완합니다. 데이터베이스의 속성만으로 현재의
                포장 상태나 접촉 상황을 모두 알 수는 없으며, 실시간 피드백만으로
                모든 상품의 특성을 처음부터 추론하는 것도 부담이 큽니다.
                이 사례들을 함께 보면 <strong className="font-semibold">사전 지식,
                시각 인식, 기하 계획, 힘 피드백을 결합하는 구조</strong>로
                안전한 조작을 이해할 수 있습니다.
              </p>
            </ArticleSection>

            <ArticleSection
              id="takeaways"
              number="07"
              title="상품을 알고 행동하는 Object-Centric Manipulation"
            >
              <p>
                이 접근의 핵심은 로봇이 매번 모든 것을 새롭게 알아내도록 요구하지
                않는다는 점입니다. Inventory system은 어떤 상품일 가능성이
                있는지 알려 주고, image encoder는 관측과 참조 데이터를
                연결합니다. Product DB는 저장된 속성과 경험을 제공하고,
                vision과 depth는 현재 위치와 기하 구조를 알려 줍니다.
                Grasp planner는 이를 종합해 행동을 정하며, 실행 중 센서는
                실제 접촉과 파지 상태를 확인합니다.
              </p>
              <div className="rounded-sm bg-accent px-5 py-6 text-white sm:px-7">
                <p lang="en" className="text-base leading-8 font-medium sm:text-lg">
                  See → Identify → Retrieve Knowledge
                  <br />
                  → Plan → Act → Verify
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  관측하고, 식별하고, 지식을 조회한 뒤, 계획·실행·확인을 이어 갑니다.
                </p>
              </div>
              <p>
                공개된 사례들은 학습 모델과 기존 물류 정보를 함께 활용하는
                방법을 보여 줍니다. 모든 과정을 하나의 end-to-end 모델로만
                해결해야 하는 것은 아니며, 이미 알고 있는 상품 정보와 새롭게
                관측해야 하는 정보를 구분하는 것 자체가 중요한 시스템 설계가
                됩니다. 동시에 참조 데이터의 누락이나 외형이 비슷한 상품의
                혼동 가능성 때문에, 식별의 불확실성과 실패 대응도 필요합니다.
                <Citation number={1} />
                <Citation number={2} />
              </p>
              <p>
                이러한 관점에서 Amazon의 접근은 단순한 object recognition을
                넘어 Object-Centric Robotic Manipulation으로 이해할 수
                있습니다. 로봇이 자신이 다루는 물체의 정체성을 알고, 그 물체에
                대해 축적된 지식과 현재의 관측을 바탕으로 행동을 결정한다는
                점이 이 케이스 스터디의 핵심입니다.
              </p>
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
                      <p className="mt-1 text-xs text-muted">{source.publisher}</p>
                      <p className="mt-1 break-keep text-muted">{source.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-border pt-5 text-xs leading-6 text-muted">
                공식 이미지와 영상의 권리는 Amazon에 있습니다. 본문의 도식과
                수식은 원리를 설명하기 위해 재구성하였으며, 각 자료의 공개
                시점을 기준으로 기술하였습니다.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
