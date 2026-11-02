import physicalAiCover from "@/public/images/projects/physical-ai/dex-teleop.png";

export type Project = {
  slug: string;
  title: string;
  category: string;
  organization: string;
  description: string;
  detailHref?: string;
  coverImage?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain" | "fill";
  };
  order: number;
  visible: boolean;
};

// visible: false hides a project from both pages.
// /projects and the homepage carousel both use order.
// Lower order values appear first, independently of array order.
// Add detailHref when a detail page is ready; otherwise cards link to the list.
export const projects: readonly Project[] = [
  {
    slug: "real-world-robot-systems",
    title: "실환경 로봇 실험 시스템 구축",
    category: "REAL-WORLD ROBOTICS",
    organization: "연구실 자체 프로젝트",
    description:
      "실제 로봇 실험을 위한 로봇 시스템 통합, HIL 환경 구축, F/T 센서 기반 실시간 모니터링 및 데이터 수집 시스템을 개발했습니다.",
    detailHref: "/projects/real-world-robot-systems",
    coverImage: {
      src: "/images/projects/real-world-robot-systems/overview.jpg",
      alt: "양팔 로봇과 카메라, 작업대로 구성한 실환경 로봇 실험 시스템",
    },
    order: 1,
    visible: true,
  },
  {
    slug: "open-domain",
    title: "오픈도메인 멀티모달 자기주도 인공지능 기술 개발",
    category: "VLA · SKILL REPRESENTATION",
    organization: "정보통신기획평가원",
    description:
      "다양한 로봇 작업에 대응하기 위한 멀티모달 skill representation 및 skill-level VLA 시스템을 연구하였습니다.",
    detailHref: "/projects/open-domain",
    coverImage: {
      src: "/images/projects/open-domain/model_overview.png",
      alt: "Skill Tokens와 멀티모달 입력을 이용한 Flow Transformer 기반 로봇 행동 생성 모델 구조",
      fit: "contain",
    },
    order: 2,
    visible: true,
  },
  {
    slug: "physical-ai",
    title: "이기종 협업-피지컬AI SDF 특화 기반 모델 연구개발",
    category: "PHYSICAL AI · DEXTEROUS HAND",
    organization: "과학기술정보통신부",
    description:
      "Physical AI를 위한 dexterous robot hand 시스템과 이를 위한 시뮬레이션 환경을 구축하고 관련 학습 방법을 연구하였습니다.",
    detailHref: "/projects/physical-ai",
    coverImage: {
      src: physicalAiCover.src,
      alt: "Dex-teleop의 양손 로봇 시뮬레이션과 데이터 수집 대시보드",
      fit: "fill",
    },
    order: 3,
    visible: true,
  },
  {
    slug: "so-arm",
    title: "SO-ARM 기반 로봇 제어 소프트웨어 구현",
    category: "LOW-LEVEL CONTROL · TELEOPERATION",
    organization: "개인 프로젝트",
    description:
      "PyBrain SO-ARM을 기반으로 저수준 로봇 제어 인터페이스부터 teleoperation과 데이터 수집까지 연결하는 독립적인 소프트웨어 스택을 개발하였습니다.",
    detailHref: "/projects/so-arm",
    order: 5,
    visible: true,
  },
  {
    slug: "drone-anomaly-detection",
    title: "강화학습 기반 드론 이상 탐지 및 이상 행위 대응 기술",
    category: "REINFORCEMENT LEARNING · DRONE",
    organization: "국가보안기술연구소",
    description:
      "강화학습 기반의 드론 이상 탐지와 이상 행위 대응 기술을 다루는 연구를 진행하였습니다.",
    detailHref: "/projects/drone-anomaly-detection",
    coverImage: {
      src: "/images/projects/drone-anomaly-detection/drone.png",
      alt: "flight-simulator",
    },
    order: 4,
    visible: true,
  },
];

export function getVisibleProjects(source: readonly Project[] = projects) {
  return source
    .filter((project) => project.visible === true)
    .sort((a, b) => a.order - b.order);
}
