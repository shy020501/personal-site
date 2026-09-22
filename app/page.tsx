import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getHomeProjects } from "@/content/projects";
import profilePhoto from "@/public/images/profile.jpg";

// Illustrative content to replace with actual projects and writing.
const publications = [
  {
    title:
      "Gradient-Balanced Timestep-Partitioned LoRA for Reward Fine-Tuning of Diffusion Models",
    status: "Under Review · ICLR 2027",
    year: "2026",
    authors: ["Seunghyo Yun", "Seungjun Oh", "Yusung Kim"],
    description:
      "Diffusion model의 reward fine-tuning에서 발생하는 timestep-wise optimization imbalance를 분석하고, 이를 완화하기 위한 gradient-balanced LoRA 구조를 제안합니다.",
    githubHref: "https://github.com/shy020501",
  },
  {
    title:
      "Generalized Concept Unlearning Guided by AI Feedback for Text-to-Image Diffusion Models",
    status: "Preprint",
    year: "2025",
    authors: ["Taehoon Lee", "Seunghyo Yun", "Yusung Kim"],
    description:
      "AI feedback을 활용하여 text-to-image diffusion model에서 다양한 concept에 일반화 가능한 unlearning 방법을 연구했습니다.",
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
                      <span key={author}>
                        {index > 0 && ", "}
                        {author === "Seunghyo Yun" ? (
                          <strong className="font-bold text-foreground">
                            {author}
                          </strong>
                        ) : (
                          author
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
                    <Link href="/publications" className="text-link">
                      View Publication
                      <span className="sr-only">: {publication.title}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled="true"
                      tabIndex={-1}
                      title="Paper link coming soon"
                      className="text-link pointer-events-none font-normal text-muted"
                    >
                      Paper <span aria-hidden="true">↗</span>
                      <span className="sr-only">(coming soon)</span>
                    </a>
                    {publication.githubHref && (
                      <a
                        href={publication.githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link font-normal"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
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

      <div className="grid gap-12 border-b border-border py-14 sm:py-16 lg:grid-cols-2 lg:gap-16">
        <section aria-labelledby="experience-heading">
          <SectionHeading id="experience-heading" title="Experience" />
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
                  <h3 className="text-base leading-6 font-semibold">
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:decoration-accent motion-reduce:transition-none"
                    >
                      {entry.organization}
                    </a>
                  </h3>
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

        <section aria-labelledby="education-heading">
          <SectionHeading id="education-heading" title="Education" />
          <ol className="divide-y divide-border">
            {education.map((entry) => (
              <li
                key={entry.period}
                lang={entry.lang}
                className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-5"
              >
                <p className="font-mono text-sm leading-6 whitespace-nowrap text-foreground">
                  {entry.period}
                </p>
                <div className="min-w-0">
                  <h3 className="text-base leading-6 font-semibold">
                    {entry.institution}
                  </h3>
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
      </div>

      <section
        aria-labelledby="about-heading"
        className="grid gap-5 py-14 sm:py-16 md:grid-cols-[240px_1fr] md:gap-12"
      >
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]"
        >
          About
        </h2>
        <div>
          <p className="max-w-2xl text-base leading-8 text-muted">
            I’m Seunghyo, a researcher interested in the meeting point of
            artificial intelligence and the physical world. I’m drawn to
            understanding how things work, building useful systems, and sharing
            what I learn along the way.
          </p>
          <Link href="/about" className="text-link mt-4">
            More about me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
