import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";

type Service = {
  id: string;
  name: string;
  line: string;
  gets: string[];
  goodFor: string;
  plan: string;
  price?: string;
  cta: string;
};

const services: Service[] = [
  {
    id: "websites",
    name: "Websites",
    line: "Fast, custom-designed sites that make a first impression.",
    gets: [
      "3–4 custom-designed pages — no templates",
      "Mobile-ready on every screen",
      "A contact form that lands in your inbox",
      "Ready in 3–5 days, depending on the project",
    ],
    goodFor:
      "Founders, small businesses and creators who need to look real, fast.",
    plan: "Launch",
    price: "$200",
    cta: "Start with Launch",
  },
  {
    id: "web-apps",
    name: "Web apps",
    line: "Tools your customers sign in to and use every day.",
    gets: [
      "Customer accounts — sign up, log in, password reset",
      "A private account page for each customer",
      "An admin backend to manage customers, on Complete",
      "Ready in 5–7 days, depending on the project",
    ],
    goodFor: "Businesses whose customers need a place of their own.",
    plan: "Members",
    price: "$300",
    cta: "Start with Members",
  },
  {
    id: "pwas",
    name: "PWAs",
    line: "Installable apps for phone and desktop — no app store needed.",
    gets: [
      "Installs straight from the browser to the home screen",
      "One app for iPhone, Android and desktop",
      "App-like navigation and your own app icon",
      "Includes everything in Members",
    ],
    goodFor: "Anyone who wants to live on their customers' home screens.",
    plan: "Commerce",
    price: "$400",
    cta: "Start with Commerce",
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    line: "Storefronts with cart, checkout and customer accounts.",
    gets: [
      "A product catalog with search and categories",
      "Cart and checkout with one payment provider",
      "One-time or subscription billing",
      "Customer accounts, and an installable app",
    ],
    goodFor: "Shops ready to take payments without the big-platform fees.",
    plan: "Commerce",
    price: "$400",
    cta: "Start with Commerce",
  },
  {
    id: "portals",
    name: "Portals & dashboards",
    line: "Private spaces for your customers, clients or team.",
    gets: [
      "Secure sign-in for the right people",
      "An admin backend to manage customers",
      "Custom analytics, built around what you want to track",
      "Includes everything in Commerce",
    ],
    goodFor: "Teams that want the whole picture in one place.",
    plan: "Complete",
    price: "$500",
    cta: "Start with Complete",
  },
  {
    id: "operations",
    name: "Operations tools",
    line: "Internal tools that replace spreadsheets and busywork.",
    gets: [
      "Built around the way your team already works",
      "Track jobs, inventory, schedules — whatever you run on",
      "Admin controls for who sees what",
      "Scoped and quoted together",
    ],
    goodFor:
      "Operations groups and established companies outgrowing spreadsheets.",
    plan: "Custom",
    cta: "Get a scope",
  },
];

export function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="Services" title="What we" accent="build.">
        <div
          className="g12 fd"
          style={{
            marginTop: "clamp(40px, 5vw, 72px)",
            alignItems: "end",
            rowGap: 32,
            animationDelay: ".16s",
          }}
        >
          <p
            className="t-lead sp6 m0 c-cream"
            style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
          >
            No fixed menu. Every project starts with the problem and the people
            involved — these are the shapes it usually takes.
          </p>
          <nav aria-label="Jump to a service" className="jump t-mono">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.name.replace(" & dashboards", "").replace(" tools", "")}
              </a>
            ))}
          </nav>
        </div>
      </PageHero>

      {services.map((s, i) => (
        <article
          key={s.id}
          id={s.id}
          className="wrap g12 svc"
          aria-labelledby={`${s.id}-h`}
        >
          <div className="sp5 stack" style={{ gap: 20 }}>
            <p className="t-mono m0 c-mute2">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 id={`${s.id}-h`} className="t-h2 m0">
              {s.name}
            </h2>
            <p
              className="t-body m0 c-mute"
              style={{ fontSize: 20, maxWidth: 420 }}
            >
              {s.line}
            </p>
          </div>
          <div className="svc-r">
            <h3
              className="t-mono c-mute2"
              style={{ margin: "0 0 14px", fontWeight: 400 }}
            >
              What you get
            </h3>
            <ul className="gets">
              {s.gets.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <div className="meta">
              <div>
                <p className="t-mono c-mute2" style={{ margin: "0 0 8px" }}>
                  Good for
                </p>
                <p className="t-body m0 c-cream">{s.goodFor}</p>
              </div>
              <div>
                <p className="t-mono c-mute2" style={{ margin: "0 0 8px" }}>
                  Starts with
                </p>
                <p className="t-h3 m0">
                  {s.plan} —{" "}
                  {s.price ? (
                    <span className="acc">{s.price}</span>
                  ) : (
                    <span className="serif acc">let's talk</span>
                  )}
                </p>
                <a className="go t-mono" href="/start">
                  {s.cta}{" "}
                  <span className="ar" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}

      <section
        className="wrap s-top"
        aria-labelledby="cta-h"
        style={{
          paddingBlock: "clamp(72px, 9vw, 140px) clamp(56px, 7vw, 96px)",
        }}
      >
        <h2
          id="cta-h"
          className="t-dis m0"
          style={{ fontSize: "clamp(56px, 8.6vw, 132px)" }}
        >
          Not sure which
          <br />
          you <span className="serif acc">need?</span>
        </h2>
        <div
          className="bar"
          style={{ marginTop: 48, borderColor: "var(--line)" }}
        >
          <p className="t-body m0 c-mute" style={{ maxWidth: 520 }}>
            Tell us the idea. We'll reply in under 24 hours and point you to the
            right plan — launch pricing for our first 10 clients.
          </p>
          <a className="btn t-mono" href="/start">
            Start a project{" "}
            <span className="ar" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
