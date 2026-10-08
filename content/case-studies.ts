export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  description: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "amazon-robotics",
    category: "INDUSTRY ANALYSIS",
    title: "Amazon Robotics: 물체 인식 기반 로봇 피킹 시스템",
    description:
      "Amazon의 물류 자동화 사례를 중심으로 perception, robot manipulation, system integration이 실제 산업 환경에서 어떻게 결합되는지 살펴봅니다.",
  },
  {
    slug: "vla-test-time-scaling",
    category: "TECHNICAL ANALYSIS",
    title: "VLA의 Test-Time Scaling: 행동 후보 생성과 선택",
    description:
      "Vision-Language-Action 모델에서 여러 행동 후보를 생성하고 verifier나 value model을 통해 최종 행동을 선택하는 test-time scaling 방법들을 정리합니다.",
  },
];
