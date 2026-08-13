/**
 * Application configuration.
 */
const app = {
  name: "Omni CLI",
  // Product symbol, mirrors the omni-api catalog SSOT (`catalog/products.ts`
  // omni-cli `icon`). Used in the "Made with <symbol> by Omni" footer credit.
  icon: "⏣",
  tagline: "Your Conduit to the Universe",
  description:
    "A powerful command-line interface for interacting with the Omni ecosystem. Manage services, deploy applications, and orchestrate workflows from your terminal.",
  keywords: [
    "CLI",
    "command-line",
    "developer tools",
    "devtools",
    "terminal",
    "deployment",
    "orchestration",
  ],
  organization: {
    name: "Omni",
    url: "https://omni.dev",
    website: "https://omni.dev",
  },
  links: {
    docs: "https://docs.omni.dev/armory/omni-cli",
    github: "https://github.com/omnidotdev/cli",
  },
  // Legal links mirror the omni-api catalog SSOT
  legal: {
    privacy: "https://omni.dev/legal/privacy",
    terms: "https://omni.dev/legal/terms",
    cookies: "https://omni.dev/legal/cookies",
  },
};

export default app;
