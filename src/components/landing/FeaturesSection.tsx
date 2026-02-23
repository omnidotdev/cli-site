import {
  Blocks,
  Globe,
  Layers,
  Rocket,
  Shield,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Terminal,
    title: "CLI, TUI & HTTP",
    description:
      "Three interfaces in one binary: command line, terminal UI, and HTTP API",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    description:
      "Deploy applications to the Omni ecosystem with a single command",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Orchestrate complex workflows and pipelines from your terminal",
  },
  {
    icon: Layers,
    title: "Service Management",
    description:
      "Manage, monitor, and scale services across your infrastructure",
  },
  {
    icon: Globe,
    title: "Decentralized Web",
    description: "First-class support for decentralized protocols and networks",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Built-in authentication, authorization, and encrypted communication",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "Written in Rust for maximum performance and minimal resource usage",
  },
  {
    icon: Blocks,
    title: "Extensible",
    description:
      "Plugin architecture for custom commands, integrations, and extensions",
  },
];

/**
 * Features section.
 */
const FeaturesSection = () => (
  <section className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-3xl tracking-tight">
          Everything you need
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A comprehensive toolkit for managing the entire Omni ecosystem from
          your terminal
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="border-border/50 bg-card/50">
            <CardHeader className="pb-2">
              <Icon className="mb-2 size-5 text-primary" />
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
