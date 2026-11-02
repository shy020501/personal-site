export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  description: string;
  visible: boolean;
};

// visible: false hides a case study from listings and its detail page.
export const piSeriesCaseStudy: CaseStudy = {
  slug: "pi-series",
  category: "RESEARCH ANALYSIS",
  title: "π Series: π0에서 π0.7까지",
  description:
    "Physical Intelligence의 π 시리즈를 모델 구조와 주요 변화 중심으로 정리합니다.",
  visible: true,
};

export const ttsCaseStudy: CaseStudy = {
  slug: "vla-test-time-scaling",
  category: "RESEARCH ANALYSIS",
  title: "로봇의 Test-Time Scaling: 더 나은 행동을 고르는 방법",
  description:
    "V-GPS부터 ELASTIC과 SVA까지 13개 연구를 통해, 행동 후보 생성·검증, 미래 결과 예측, 추론과 행동의 정합성, 적응적 계산량 배분을 살펴봅니다.",
  visible: false,
};

export const amazonRoboticsCaseStudy: CaseStudy = {
  slug: "amazon-robotics",
  category: "INDUSTRY ANALYSIS",
  title: "Amazon Robotics: 상품 인식 기반 안전 조작 시스템",
  description:
    "상품 식별과 Product DB의 사전 지식이 시각·기하 정보, 힘 피드백과 결합하여 안전한 로봇 조작으로 이어지는 과정을 살펴봅니다.",
  visible: false,
};

export const caseStudies: CaseStudy[] = [
  piSeriesCaseStudy,
  ttsCaseStudy,
  amazonRoboticsCaseStudy,
];

export function getVisibleCaseStudies(
  source: readonly CaseStudy[] = caseStudies,
) {
  return source.filter((study) => study.visible === true);
}
