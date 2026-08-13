import { AppFooter } from "@omnidotdev/thornberry/app-footer";
import { Github as GitHubIcon } from "lucide-react";

import app from "@/lib/config/app.config";

/**
 * Site footer. Renders the shared Omni `<AppFooter>`, which bakes in the
 * "Made with <symbol> by Omni" credit, the omni.dev link, and the legal links so
 * they can't drift. Omni CLI supplies only its catalog symbol, docs link, and
 * GitHub link.
 */
const Footer = () => (
  <AppFooter
    appSymbol={app.icon}
    docsUrl={app.links.docs}
    orgUrl={app.organization.url}
    socials={
      <a
        href={app.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="rounded px-2 py-1 transition-colors hover:text-foreground"
      >
        <GitHubIcon className="size-5" />
      </a>
    }
  />
);

export default Footer;
