import app from "@/lib/config/app.config";

/**
 * Site footer.
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/50 border-t px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-muted-foreground text-sm sm:flex-row">
        <p>
          &copy; {year} {app.organization.name}
        </p>

        <nav className="flex gap-4">
          <a
            href={app.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <a
            href={app.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={app.organization.website}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Omni
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
