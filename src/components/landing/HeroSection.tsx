import { ArrowRight, Terminal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Hero section.
 */
const HeroSection = () => (
  <section className="flex flex-col items-center gap-8 px-6 pt-24 pb-16 text-center md:pt-32">
    <Badge variant="secondary" className="gap-1.5">
      <Terminal className="size-3" />
      Open Source CLI
    </Badge>

    <div className="flex max-w-3xl flex-col gap-4">
      <h1 className="font-bold text-4xl tracking-tight md:text-6xl">
        {app.tagline}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        {app.description}
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="lg" asChild>
        <a href={app.links.docs} target="_blank" rel="noopener noreferrer">
          Get Started
          <ArrowRight className="ml-2 size-4" />
        </a>
      </Button>

      <Button variant="outline" size="lg" asChild>
        <a href={app.links.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </Button>
    </div>

    {/* Install command */}
    <div className="rounded-lg border bg-card px-6 py-3 font-mono text-sm">
      <span className="text-muted-foreground">$ </span>
      <span>cargo install omni-cli</span>
    </div>
  </section>
);

export default HeroSection;
