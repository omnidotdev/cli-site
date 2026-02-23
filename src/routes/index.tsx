import { createFileRoute } from "@tanstack/react-router";

import {
  Background,
  CTASection,
  FeaturesSection,
  Footer,
  Header,
  HeroSection,
} from "@/components/landing";

/**
 * Landing page for Omni CLI.
 */
const LandingPage = () => (
  <div className="relative">
    <Background />
    <Header />

    <div className="relative z-10 flex min-h-dvh w-full flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  </div>
);

export const Route = createFileRoute("/")({
  component: LandingPage,
});

export default LandingPage;
