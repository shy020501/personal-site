import Link from "next/link";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="site-container flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:py-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-lg font-semibold tracking-tight text-muted transition-colors duration-150 hover:text-accent motion-reduce:transition-none"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h14V9M9 21v-8h6v8" />
          </svg>
          Home
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm sm:gap-x-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-muted transition-colors duration-150 hover:text-accent motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
