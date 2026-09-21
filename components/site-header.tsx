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
          className="w-fit text-lg font-semibold tracking-tight text-foreground"
        >
          Seunghyo Yun
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
