import Image from "next/image";
import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { PublicationList } from "@/components/publication-list";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/content/case-studies";
import { publications } from "@/content/publications";
import { getHomeProjects } from "@/content/projects";
import profilePhoto from "@/public/images/profile.jpg";

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
    href: "https://www.skku.edu/skku/index.do",
    lang: "ko",
    department: "소프트웨어학과",
    detail: "GPA 4.30 · 조기졸업 예정",
  },
  {
    period: "2022.03 – 2025.09",
    institution: "성균관대학교",
    href: "https://www.skku.edu/skku/index.do",
    lang: "ko",
    department: "소프트웨어학과",
    detail: "GPA 4.09 · 조기졸업",
  },
  {
    period: "2018.08 – 2021.05",
    institution: "The British International School Shanghai, Puxi",
    href: "https://www.nordangliaeducation.com/biss-puxi",
    lang: "en",
    detail: "중국, 상하이",
  },
];

const activities = [
  {
    id: "student-council-vice-president",
    period: "2024.02 – 2024.11",
    organization: "소프트웨어융합대학 학생회",
    role: "부학생회장",
    href: "https://www.instagram.com/p/C0tfrNePAFB/",
  },
  {
    id: "uni-dthon-organizer",
    period: "2024.02 – 2024.11",
    organization: "UNI-DTHON 운영진",
    role: "홍보팀",
    href: "https://www.instagram.com/p/DAiYQaGBdN0/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA%3D%3D&img_index=3",
  },
  {
    id: "spark-11",
    period: "2023.03 – 2023.12",
    organization: "SPARK 11기",
    role: "Video Wizard 창업",
    href: "/pdf/about/SPARK.pdf",
  },
  {
    id: "student-council-member",
    period: "2022.02 – 2024.02",
    organization: "소프트웨어융합대학 학생회",
    role: "부원",
  },
];

const scholarships = [
  {
    period: "석사 전학기",
    title: "新대학원우수학생 장학금 TYPE 1",
    detail: "전액장학금",
  },
  {
    period: "2025년-1학기",
    title: "학생성공-학석연계장학금",
    detail: "전액장학금",
  },
  {
    period: "2024년-2학기",
    title: "학생성공-리더장학금(70%)",
  },
  {
    period: "2024년-1학기",
    title: "학생성공-리더장학금(70%)",
  },
  {
    period: "2023년-1학기",
    title: "성적우수장학금(우수)",
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
        <PublicationList publications={publications} />
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
            <ContentCard
              key={study.slug}
              category={study.category}
              title={study.title}
              description={study.description}
              href={`/case-studies/${study.slug}`}
              cta="Read Case Study"
            />
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
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:decoration-accent motion-reduce:transition-none"
                      >
                        {entry.institution}
                      </a>
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
                  key={entry.id}
                  lang="ko"
                  className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-5"
                >
                  <p className="font-mono text-sm leading-6 whitespace-nowrap text-foreground">
                    {entry.period}
                  </p>
                  <div className="min-w-0">
                    <h4 className="text-base leading-6 font-semibold break-keep">
                      {entry.href ? (
                        <a
                          href={entry.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:decoration-accent motion-reduce:transition-none"
                        >
                          {entry.organization}
                        </a>
                      ) : (
                        entry.organization
                      )}
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
