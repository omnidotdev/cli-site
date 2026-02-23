import { Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";

import { ThemeToggle } from "@/components/core";
import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Site header.
 */
const Header = () => (
  <header className="sticky top-0 z-50 border-border/50 border-b bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <Terminal className="size-5 text-primary" />
        <span>{app.name}</span>
      </Link>

      <nav className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <a href={app.links.docs} target="_blank" rel="noopener noreferrer">
            Docs
          </a>
        </Button>

        <Button variant="ghost" size="sm" asChild>
          <a href={app.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>

        <ThemeToggle />
      </nav>
    </div>
  </header>
);

export default Header;
