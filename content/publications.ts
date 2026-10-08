export type Publication = {
  title: string;
  status: string;
  year: string;
  authors: { name: string; marker?: "*" | "†" }[];
  description: string;
  paperHref?: string;
  githubHref?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Gradient-Balanced Timestep-Partitioned LoRA for Reward Fine-Tuning of Diffusion Models",
    status: "Under Review · ICLR 2027",
    year: "2026",
    authors: [
      { name: "Seunghyo Yun" },
      { name: "Seungjun Oh" },
      { name: "Yusung Kim", marker: "†" },
    ],
    description:
      "Diffusion model의 reward fine-tuning에서 발생하는 timestep-wise optimization imbalance를 분석하고, 이를 완화하기 위한 gradient-balanced LoRA 구조를 제안합니다.",
    paperHref: "/pdf/publications/GTP_LoRA.pdf",
    // githubHref: "https://github.com/shy020501",
  },
  {
    title:
      "Generalized Concept Unlearning Guided by AI Feedback for Text-to-Image Diffusion Models",
    status: "Preprint",
    year: "2025",
    authors: [
      { name: "Taehoon Lee", marker: "*" },
      { name: "Seunghyo Yun", marker: "*" },
      { name: "Yusung Kim", marker: "†" },
    ],
    description:
      "VLM feedback을 활용하여 text-to-image diffusion model에서 다양한 concept에 일반화 가능한 unlearning 방법을 제안합니다.",
    paperHref: "/pdf/publications/Generalized_Concept_Unlearning.pdf",
    githubHref: "https://github.com/shy020501/GCU",
  },
];
