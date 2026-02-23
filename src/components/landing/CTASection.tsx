import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Call-to-action section.
 */
const CTASection = () => (
  <section className="px-6 py-24">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-4 font-bold text-3xl tracking-tight">
        Ready to get started?
      </h2>
      <p className="mb-8 text-lg text-muted-foreground">
        Install the Omni CLI and start managing your universe from the terminal
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" asChild>
          <a href={app.links.docs} target="_blank" rel="noopener noreferrer">
            Read the Docs
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <a href={app.links.github} target="_blank" rel="noopener noreferrer">
            Star on GitHub
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
