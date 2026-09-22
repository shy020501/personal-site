export type Project = {
  slug: string;
  title: string;
  category: string;
  organization: string;
  description: string;
  detailHref?: string;
  order: number;
  visible: boolean;
  showOnHome: boolean;
  homeOrder: number;
};

// visible: false hides a project from both pages.
// /projects uses order; the homepage uses showOnHome and homeOrder.
// Lower order and homeOrder values appear first, independently of array order.
// Add detailHref when a detail page is ready; otherwise cards link to the list.
export const projects: readonly Project[] = [
  {
    slug: "real-world-robot-systems",
    title: "실환경 로봇 실험 시스템 구축",
    category: "REAL-WORLD ROBOTICS",
    organization: "연구실 자체 프로젝트",
    description:
      "실제 로봇 실험을 위한 로봇 시스템 통합, HIL 환경 구축, F/T 센서 기반 실시간 모니터링 및 멀티모달 데이터 수집 시스템을 개발했습니다.",
    detailHref: "/projects/real-world-robot-systems",
    order: 1,
    visible: true,
    showOnHome: true,
    homeOrder: 1,
  },
  {
    slug: "open-domain-vla",
    title: "오픈도메인 멀티모달 자기주도 인공지능 기술 개발",
    category: "VLA · SKILL REPRESENTATION",
    organization: "정보통신기획평가원",
    description:
      "다양한 실제 로봇 작업에 대응하기 위한 멀티모달 기반 open-domain robot learning 및 skill-level VLA 시스템을 연구하고 있습니다.",
    detailHref: "/projects/open-domain-vla",
    order: 2,
    visible: true,
    showOnHome: true,
    homeOrder: 2,
  },
  {
    slug: "physical-ai",
    title: "이기종 협업-피지컬AI SDF 특화 기반 모델 연구개발",
    category: "PHYSICAL AI",
    organization: "과학기술정보통신부",
    description:
      "Physical AI를 위한 로봇 학습 시스템과 simulation–real-world 환경을 구축하고 관련 학습 방법을 연구합니다.",
    detailHref: "/projects/physical-ai",
    order: 3,
    visible: true,
    showOnHome: true,
    homeOrder: 3,
  },
  {
    slug: "drone-anomaly-detection",
    title: "강화학습 기반 드론 이상 탐지 및 이상 행위 대응 기술",
    category: "REINFORCEMENT LEARNING · AUTONOMY",
    organization: "국가보안기술연구소",
    description:
      "강화학습 기반의 드론 이상 탐지와 이상 행위 대응 기술을 다루는 연구 프로젝트입니다.",
    detailHref: "/projects/drone-anomaly-detection",
    order: 4,
    visible: true,
    showOnHome: false,
    homeOrder: 99,
  },
];

export function getVisibleProjects(source: readonly Project[] = projects) {
  return source
    .filter((project) => project.visible === true)
    .sort((a, b) => a.order - b.order);
}

export function getHomeProjects(source: readonly Project[] = projects) {
  return source
    .filter((project) => project.visible === true && project.showOnHome === true)
    .sort((a, b) => a.homeOrder - b.homeOrder);
}
