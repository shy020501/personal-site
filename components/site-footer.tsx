const socialLinks = [
  { label: "Email", href: "mailto:shy020501@naver.com" },
  { label: "GitHub", href: "https://github.com/shy020501" },
  { label: "Google Scholar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/seunghyo-yun" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Seunghyo Yun
        </p>
        <nav aria-label="Contact and social profiles">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href ?? "#"}
                  target={href?.startsWith("https://") ? "_blank" : undefined}
                  rel={href?.startsWith("https://") ? "noopener noreferrer" : undefined}
                  aria-disabled={href ? undefined : true}
                  tabIndex={href ? undefined : -1}
                  title={href ? undefined : `${label} link coming soon`}
                  className={`inline-flex items-center gap-1.5 transition-colors duration-150 motion-reduce:transition-none ${href ? "hover:text-accent" : "pointer-events-none"}`}
                >
                  {label}
                  <span aria-hidden="true">↗</span>
                  {!href && <span className="sr-only">(coming soon)</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
