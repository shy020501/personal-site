import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getHomeProjects } from "@/content/projects";
import profilePhoto from "@/public/images/profile.jpg";

type Publication = {
  title: string;
  status: string;
  year: string;
  authors: { name: string; marker?: "*" | "†" }[];
  description: string;
  paperHref?: string;
  githubHref?: string;
};

// Illustrative content to replace with actual projects and writing.
const publications: Publication[] = [
  {
    title:
      "Gradient-Balanced Timestep-Partitioned LoRA for Reward Fine-Tuning of Diffusion Models",
    status: "Under Review · ICLR 2027",
    year: "2026",
    authors: [
      { name: "Seunghyo Yun" },
      { name: "Seungjun Oh" },
      { name: "Yusung Kim" },
    ],
    description:
      "Diffusion model의 reward fine-tuning에서 발생하는 timestep-wise optimization imbalance를 분석하고, 이를 완화하기 위한 gradient-balanced LoRA 구조를 제안합니다.",
    paperHref: "/pdf/GTP_LoRA.pdf",
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
    paperHref: "/pdf/Generalized_Concept_Unlearning.pdf",
  },
];

const caseStudies = [
  {
    category: "INDUSTRY ANALYSIS",
    title: "Amazon Robotics: 물체 인식 기반 로봇 피킹 시스템",
    description:
      "Amazon의 물류 자동화 사례를 중심으로 perception, robot manipulation, system integration이 실제 산업 환경에서 어떻게 결합되는지 살펴봅니다.",
  },
  {
    category: "TECHNICAL ANALYSIS",
    title: "VLA의 Test-Time Scaling: 행동 후보 생성과 선택",
    description:
      "Vision-Language-Action 모델에서 여러 행동 후보를 생성하고 verifier나 value model을 통해 최종 행동을 선택하는 test-time scaling 방법들을 정리합니다.",
  },
];

const experience = [
  {
    period: "2025.09 – Present",
    organization: "CSI Lab",
    href: "https://sites.google.com/view/yskim525/home",
    role: "석사과정 연구원",
    affiliation: "Sungkyunkwan University",
  },
  {
    period: "2022.11 – 2025.09",
    organization: "CSI Lab",
    href: "https://sites.google.com/view/yskim525/home",
    role: "학부연구생",
    affiliation: "Sungkyunkwan University",
  },
];

const education = [
  {
    period: "2025.09 – 2027.02",
    institution: "성균관대학교",
    lang: "ko",
    department: "소프트웨어학과",
    detail: "GPA 4.30 · 조기졸업 예정",
  },
  {
    period: "2022.03 – 2025.09",
    institution: "성균관대학교",
    lang: "ko",
    department: "소프트웨어학과",
    detail: "GPA 4.09 · 조기졸업",
  },
  {
    period: "2018.08 – 2021.05",
    institution: "The British International School Shanghai, Puxi",
    lang: "en",
  },
];

const activities = [
  {
    period: "2024.02 – 2024.11",
    organization: "소프트웨어융합대학 학생회",
    role: "부학생회장",
  },
  {
    period: "2022.02 – 2024.02",
    organization: "소프트웨어융합대학 학생회",
    role: "부원",
  },
];

const scholarships = [
  {
    period: "석사전학기",
    title: "新대학원우수학생 장학금 TYPE 1",
    detail: "전액장학금",
  },
  {
    period: "2025년-1학기",
    title: "학생성공-학석연계장학금",
  },
  {
    period: "2024년-2학기",
    title: "학생성공-리더장학금",
  },
  {
    period: "2024년-1학기",
    title: "학생성공-리더장학금",
  },
  {
    period: "2023년-1학기",
    title: "성적우수장학금",
  },
];

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.6c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Home() {
  const projects = getHomeProjects();

  return (
    <main className="site-container">
      <section
        aria-labelledby="hero-heading"
        className="grid items-center gap-8 border-b border-border py-10 sm:py-12 md:grid-cols-[208px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12"
      >
        <div className="w-full max-w-48 md:max-w-none">
          <Image
            src={profilePhoto}
            alt="Seunghyo Yun"
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 208px, 192px"
            loading="eager"
            className="h-auto w-full rounded-sm border border-border"
          />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Physical AI Researcher
          </p>
          <h1
            id="hero-heading"
            lang="ko"
            className="mt-3 text-[1.75rem] leading-[1.1] font-medium tracking-[-0.035em] sm:text-[2rem] lg:text-[2.25rem]"
          >
            윤승효
          </h1>
          <p
            lang="en"
            className="mt-1 text-base leading-6 font-normal text-muted sm:text-lg"
          >
            Seunghyo Yun
          </p>
          <p
            lang="ko"
            className="mt-4 max-w-2xl text-base leading-7 break-keep text-muted"
          >
            Vision-Language-Action (VLA) 모델, Generative Models, Reinforcement
            Learning을 주요 연구 분야로 하며, 이를 Physical AI에 적용하는 연구를
            수행하고 있습니다.
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            <a
              href="https://sites.google.com/view/yskim525/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:decoration-accent motion-reduce:transition-none"
            >
              CSI Lab
            </a>{" "}
            · Sungkyunkwan University
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center gap-3 rounded-sm border border-accent bg-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-150 hover:border-[#10263e] hover:bg-[#10263e] motion-reduce:transition-none"
            >
              View Projects <span aria-hidden="true">→</span>
            </Link>
            <Link href="/publications" className="text-link">
              View Publications <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="projects-heading"
        className="border-b border-border py-14 sm:py-16"
      >
        <SectionHeading
          id="projects-heading"
          title="Projects"
          action={{ label: "View all projects", href: "/projects" }}
        />
        <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="publications-heading"
        className="border-b border-border py-14 sm:py-16"
      >
        <SectionHeading
          id="publications-heading"
          title="Publications"
          action={{ label: "View all publications", href: "/publications" }}
        />
        <ul className="divide-y divide-border">
          {publications.map((publication) => (
            <li key={publication.title} className="py-6 first:pt-0 last:pb-0">
              <article className="grid gap-2 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6">
                <time
                  dateTime={publication.year}
                  className="font-mono text-sm leading-6 text-muted sm:pt-0.5"
                >
                  {publication.year}
                </time>
                <div className="min-w-0">
                  <h3 className="max-w-4xl text-lg leading-snug font-semibold tracking-tight sm:text-xl">
                    {publication.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {publication.authors.map((author, index) => (
                      <span key={author.name}>
                        {index > 0 && ", "}
                        {author.name === "Seunghyo Yun" ? (
                          <strong className="font-bold text-foreground">
                            {author.name}
                          </strong>
                        ) : (
                          author.name
                        )}
                        {author.marker && (
                          <sup className="ml-0.5">{author.marker}</sup>
                        )}
                      </span>
                    ))}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    {publication.status}
                  </p>
                  <p
                    lang="ko"
                    className="mt-3 max-w-4xl text-sm leading-7 break-keep text-foreground"
                  >
                    {publication.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
                    <a
                      href={publication.paperHref ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={publication.paperHref ? undefined : true}
                      tabIndex={publication.paperHref ? undefined : -1}
                      title={
                        publication.paperHref
                          ? undefined
                          : "Paper link coming soon"
                      }
                      className={`inline-flex min-h-9 items-center gap-2 rounded-sm border border-accent bg-accent px-4 py-1.5 text-sm font-normal text-white transition-colors duration-150 motion-reduce:transition-none${
                        publication.paperHref
                          ? " hover:border-[#10263e] hover:bg-[#10263e]"
                          : " pointer-events-none opacity-60"
                      }`}
                    >
                      Paper
                      {!publication.paperHref && (
                        <span className="sr-only">(coming soon)</span>
                      )}
                    </a>
                    {publication.githubHref ? (
                      <a
                        href={publication.githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link font-normal"
                      >
                        <GitHubIcon />
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 py-2 text-sm font-normal text-muted"
                        title="GitHub link coming soon"
                      >
                        <GitHubIcon />
                        GitHub <span aria-hidden="true">↗</span>
                        <span className="sr-only">(coming soon)</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="case-studies-heading"
        className="border-b border-border py-14 sm:py-16"
      >
        <SectionHeading
          id="case-studies-heading"
          title="Case Studies"
          description="외부 연구와 산업 사례를 공부한 기술·산업 분석 노트입니다."
          action={{ label: "View all case studies", href: "/case-studies" }}
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="flex h-full min-w-0 flex-col rounded-sm border border-border bg-white p-6 sm:p-7"
            >
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
                {study.category}
              </p>
              <h3
                lang="ko"
                className="mt-3 text-lg leading-snug font-medium tracking-tight break-keep"
              >
                {study.title}
              </h3>
              <p
                lang="ko"
                className="mt-2 mb-4 text-sm leading-7 break-keep text-foreground"
              >
                {study.description}
              </p>
              <Link href="/case-studies" className="text-link mt-auto">
                Read Case Study
                <span className="sr-only">: {study.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-14 sm:py-16"
      >
        <SectionHeading id="about-heading" title="About" />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16">
          <section aria-labelledby="experience-heading" className="min-w-0">
            <h3
              id="experience-heading"
              className="mb-5 text-lg font-semibold tracking-tight sm:text-xl"
            >
              Experience
            </h3>
            <ol className="ml-1 border-l border-border">
              {experience.map((entry) => (
                <li
                  key={entry.period}
                  className="relative grid gap-2 pb-7 pl-6 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-2 -left-[4.5px] size-2 rounded-full bg-accent"
                  />
                  <p className="font-mono text-sm leading-6 whitespace-nowrap text-foreground">
                    {entry.period}
                  </p>
                  <div className="min-w-0">
                    <h4 className="text-base leading-6 font-semibold">
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:decoration-accent motion-reduce:transition-none"
                      >
                        {entry.organization}
                      </a>
                    </h4>
                    <p lang="ko" className="mt-1 text-sm leading-6 text-muted">
                      {entry.role}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {entry.affiliation}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="education-heading" className="min-w-0">
            <h3
              id="education-heading"
              className="mb-5 text-lg font-semibold tracking-tight sm:text-xl"
            >
              Education
            </h3>
            <ol className="ml-1 border-l border-border">
              {education.map((entry) => (
                <li
                  key={entry.period}
                  lang={entry.lang}
                  className="relative grid gap-2 pb-7 pl-6 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-2 -left-[4.5px] size-2 rounded-full bg-accent"
                  />
                  <p className="font-mono text-sm leading-6 whitespace-nowrap text-foreground">
                    {entry.period}
                  </p>
                  <div className="min-w-0">
                    <h4 className="text-base leading-6 font-semibold">
                      {entry.institution}
                    </h4>
                    {entry.department && (
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {entry.department}
                      </p>
                    )}
                    {entry.detail && (
                      <p className="mt-1 text-xs leading-5 text-muted">
                        {entry.detail}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            aria-labelledby="activities-heading"
            className="min-w-0 border-t border-border pt-8"
          >
            <h3
              id="activities-heading"
              className="mb-5 text-lg font-semibold tracking-tight sm:text-xl"
            >
              Activities &amp; Leadership
            </h3>
            <ol className="divide-y divide-border">
              {activities.map((entry) => (
                <li
                  key={entry.period}
                  lang="ko"
                  className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-5"
                >
                  <p className="font-mono text-sm leading-6 whitespace-nowrap text-foreground">
                    {entry.period}
                  </p>
                  <div className="min-w-0">
                    <h4 className="text-base leading-6 font-semibold break-keep">
                      {entry.organization}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {entry.role}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            aria-labelledby="scholarships-heading"
            className="min-w-0 border-t border-border pt-8"
          >
            <h3
              id="scholarships-heading"
              className="mb-5 text-lg font-semibold tracking-tight sm:text-xl"
            >
              Scholarships
            </h3>
            <ul className="divide-y divide-border">
              {scholarships.map((entry) => (
                <li
                  key={`${entry.period ?? "undated"}-${entry.title}`}
                  lang="ko"
                  className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-5"
                >
                  {entry.period && (
                    <p className="font-mono text-sm leading-6 whitespace-nowrap text-foreground">
                      {entry.period}
                    </p>
                  )}
                  <div
                    className={`min-w-0${entry.period ? "" : " sm:col-start-2"}`}
                  >
                    <h4 className="text-base leading-6 font-semibold break-keep">
                      {entry.title}
                    </h4>
                    {entry.detail && (
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {entry.detail}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
