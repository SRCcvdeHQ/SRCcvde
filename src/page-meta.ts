export type PageMeta = { title: string; description: string };

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "SRCcvde — Because you dreamt.",
    description:
      "SRCcvde builds custom websites, web apps, PWAs, portals, dashboards, and digital tools around your idea.",
  },
  "/services": {
    title: "Services — SRCcvde",
    description:
      "Custom websites, web apps, PWAs, e-commerce, portals, dashboards, and operations tools built by SRCcvde.",
  },
  "/start": {
    title: "Start a Project — SRCcvde",
    description:
      "Tell SRCcvde what you want to build. No technical vocabulary required.",
  },
  "/privacy": {
    title: "Privacy — SRCcvde",
    description: "SRCcvde privacy information.",
  },
  "/terms": {
    title: "Terms of Use — SRCcvde",
    description: "Terms governing use of the public SRCcvde website.",
  },
  "/cookies": {
    title: "Cookie & Tracking Notice — SRCcvde",
    description:
      "How SRCcvde uses cookies, local storage, and similar website technologies.",
  },
  "/accessibility": {
    title: "Accessibility — SRCcvde",
    description: "SRCcvde accessibility commitment and contact information.",
  },
};
