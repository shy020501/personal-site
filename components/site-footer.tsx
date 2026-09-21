const socialLinks = ["Email", "GitHub", "Google Scholar", "LinkedIn"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Seunghyo Yun
        </p>
        <nav aria-label="Contact and social profiles">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {socialLinks.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  aria-disabled="true"
                  tabIndex={-1}
                  title={`${label} link coming soon`}
                  className="pointer-events-none inline-flex items-center gap-1.5"
                >
                  {label}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">(coming soon)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
