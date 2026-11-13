import { SiteFrame, EMAIL } from "../components/Layout";
import { IdeaToReal } from "../components/Visuals";

const services = [
  [
    "Websites",
    "Fast, custom-designed sites that make a first impression.",
    "websites",
  ],
  [
    "Web apps",
    "Tools your customers sign in to and use every day.",
    "web-apps",
  ],
  [
    "PWAs",
    "Installable apps for phone and desktop — no app store needed.",
    "pwas",
  ],
  [
    "E-commerce",
    "Storefronts with cart, checkout and customer accounts.",
    "e-commerce",
  ],
  [
    "Portals & dashboards",
    "Private spaces for your customers, clients or team.",
    "portals",
  ],
  [
    "Operations tools",
    "Internal tools that replace spreadsheets and busywork.",
    "operations",
  ],
];

const steps = [
  ["Dream", "Bring the idea in whatever shape it's in."],
  ["Discover", "Define the goals and a responsible first version."],
  ["Design", "Shape the experience before changes get costly."],
  ["Build", "Stay as involved as you like."],
  ["Launch", "Test, release — then stay on, or take the keys."],
];

const plans = [
  [
    "Launch",
    "$200",
    "A custom website, built to make a first impression.",
    [
      "3–4 pages, custom designed",
      "Mobile-ready on every screen",
      "Contact form",
      "2 rounds of revisions to start — we're flexible",
    ],
  ],
  [
    "Members",
    "$300",
    "Your site, plus a place for customers to sign in.",
    [
      "Everything in Launch",
      "Customer accounts — sign up, log in, password reset",
      "A private account page per customer",
    ],
  ],
  [
    "Commerce",
    "$400",
    "Get paid, and live on your customers' home screens.",
    [
      "Everything in Members",
      "Billing with one payment provider — one-time or subscription",
      "Installable app (PWA) for phone and desktop",
    ],
  ],
  [
    "Complete",
    "$500",
    "The whole thing — and the numbers behind it.",
    [
      "Everything in Commerce",
      "Admin backend to manage customers",
      "Custom analytics, built around what you want to track",
    ],
  ],
] as const;

const work = [
  {
    name: "Science By Hugs",
    kind: "Web platform",
    href: "https://sciencebyhugs.com",
    copy: "The front door to a research ecosystem — one brand, with purpose-built platforms behind it.",
    mark: "Research, connected.",
    tint: "#1d3f6b",
    wide: true,
  },
  {
    name: "Benjamin Pearce",
    kind: "Link hub",
    href: "https://benjaminmpearce.github.io/benpearce-linktree/",
    copy: "A cinematic home for a filmmaker’s films, channels and profiles.",
    mark: "Director’s cut.",
    tint: "#4a2f22",
    wide: false,
  },
  {
    name: "Stone-Bruckner Group",
    kind: "Corporate site",
    href: "https://stonebrucknergroup.com",
    copy: "A refined home for a family of companies — with a private portal for employees.",
    mark: "Built on legacy.",
    tint: "#5a1f2b",
    wide: false,
  },
  {
    name: "Nexus",
    kind: "Customer portal & storefront",
    href: "https://nexus.sciencebyhugs.com",
    copy: "An app-like research storefront — searchable catalog, cart and customer accounts, on web and iOS.",
    mark: "Research catalog.",
    tint: "#2c3d5a",
    wide: true,
  },
];

const faqs = [
  [
    "How long does a project take?",
    "Fast. A website usually takes 3–5 days, and a web app 5–7 days, depending on the project. A full scope and timeline is worked out with you before the project is confirmed.",
  ],
  [
    "What do I need to get started?",
    "Just the idea, in whatever shape it's in. We'll define the goals and a responsible first version together.",
  ],
  [
    "Who owns the finished work?",
    "You do. Finished deliverables belong to you once the project is paid in full.",
  ],
  [
    "Can I see progress while you build?",
    "Yes. Every client gets a secure workspace where progress is visible as it happens — stay as involved as you like.",
  ],
  [
    "What happens after launch?",
    "Every plan includes 30 days of aftercare. After that, extend for 30 days ($100), 90 days ($270) or a full year ($960) — or take the keys.",
  ],
  [
    "Who handles hosting?",
    "It depends on the project. Already have a hosting platform you like? We'll gladly work with it.",
  ],
];

function Project({
  p,
  className = "",
  style,
}: {
  p: (typeof work)[number];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      className={`proj rv ${p.wide ? "sp7" : "sp5"} ${className}`}
      href={p.href}
      style={style}
    >
      <div className={`tk proj-frame ${p.wide ? "proj-wide" : "proj-tall"}`}>
        <div
          className="shot"
          style={{ "--tint": p.tint } as React.CSSProperties}
          aria-hidden="true"
        >
          <span className="t-mono c-mute">{p.kind}</span>
          <span className="big">{p.mark}</span>
        </div>
      </div>
      <div className="proj-meta">
        <span className="t-h3">{p.name}</span>
        <span className="t-mono c-mute">
          {p.kind}{" "}
          <span className="ar" aria-hidden="true">
            ↗
          </span>
        </span>
      </div>
      <p className="t-body m0 c-mute" style={{ fontSize: 16, maxWidth: 560 }}>
        {p.copy}
      </p>
    </a>
  );
}

export function HomePage() {
  return (
    <SiteFrame>
      <section id="top" className="hero" aria-labelledby="hero-h">
        <div className="wrap">
          <div
            className="t-mono fd hero-meta"
            style={{ animationDelay: ".05s" }}
          >
            <span>Custom technology studio</span>
            <span className="desk">Websites · Web apps · PWAs · Tools</span>
            <span>Las Vegas, Nevada</span>
          </div>
          <h1 id="hero-h" className="t-dis m0">
            <span className="ln">
              <span style={{ animationDelay: ".15s" }}>Because</span>
            </span>
            <span className="ln">
              <span
                style={{
                  animationDelay: ".3s",
                  paddingLeft: "clamp(0px, 16vw, 230px)",
                }}
              >
                you
              </span>
            </span>
            <span className="ln">
              <span style={{ animationDelay: ".45s" }}>
                <span className="serif acc" style={{ fontSize: "1.1em" }}>
                  dreamt
                </span>
                <span className="caret acc">.</span>
              </span>
            </span>
          </h1>
        </div>
        <div className="wrap hero-foot">
          <div className="g12">
            <div
              className="sp4 fd stack"
              style={{ gap: 32, animationDelay: ".8s" }}
            >
              <p
                className="t-body m0 c-cream"
                style={{ fontSize: 20, maxWidth: 380 }}
              >
                Custom websites, web apps, PWAs and digital tools — for people
                with an idea worth making real.
              </p>
              <div className="cta-row">
                <a className="btn t-mono" href="/start">
                  Tell us your idea{" "}
                  <span className="ar" aria-hidden="true">
                    →
                  </span>
                </a>
                <a className="nv t-mono c-mute" href="#work">
                  See the work
                </a>
              </div>
            </div>
            <IdeaToReal />
          </div>
        </div>
      </section>

      <section className="s-dark" aria-labelledby="why-h">
        <div className="wrap g12 pad">
          <h2
            id="why-h"
            className="sp3 t-mono m0 c-mute"
            style={{ fontWeight: 400 }}
          >
            § Why SRCcvde
          </h2>
          <p
            className="t-lead rv m0"
            style={
              {
                gridColumn: "5 / span 8",
                textWrap: "pretty",
              } as React.CSSProperties
            }
          >
            Custom technology shouldn't feel like a black box. We{" "}
            <span className="mk">listen first</span>, explain clearly, and build
            responsibly — the right first version, not the biggest one.
          </p>
        </div>
      </section>

      <section id="services" className="s-dark" aria-labelledby="svc-h">
        <div
          className="wrap g12"
          style={{
            paddingBottom: "clamp(96px, 12vw, 176px)",
            alignItems: "start",
          }}
        >
          <div className="sp4 stack">
            <p className="t-mono m0 c-mute">§ 01 — Services</p>
            <h2 id="svc-h" className="t-h2 m0">
              What we <span className="serif">build.</span>
            </h2>
            <p className="t-body m0 c-mute" style={{ maxWidth: 300 }}>
              No fixed menu. Every project starts with the problem and the
              people involved.
            </p>
          </div>
          <div className="sp8 rows">
            {services.map(([name, desc, id], i) => (
              <a key={id} className="row" href={`/services#${id}`}>
                <span className="t-mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-h3">{name}</span>
                <span className="rd t-body">{desc}</span>
                <span className="ar t-h3" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" aria-labelledby="proc-h">
        <div className="wrap pad">
          <div className="g12" style={{ alignItems: "end", paddingBottom: 64 }}>
            <div className="sp7 stack">
              <p className="t-mono m0 c-mute2">§ 02 — Process</p>
              <h2 id="proc-h" className="t-h2 m0">
                From <span className="serif acc">dream</span> to launch.
              </h2>
            </div>
            <p
              className="t-body m0 c-mute"
              style={{ gridColumn: "9 / span 4" }}
            >
              Clear scope. Visible progress in your own secure client workspace.
              Involvement on your terms.
            </p>
          </div>
          <div className="track" aria-hidden="true">
            <span className="fill" />
          </div>
          <ol
            className="ledger"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {steps.map(([t, d], i) => (
              <li key={t}>
                <span className="num" style={{ animationDelay: `${i * 1.2}s` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3">{t}</h3>
                <p className="t-body">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="s-dark s-top" aria-labelledby="price-h">
        <div className="wrap pad">
          <div
            className="g12"
            style={{ alignItems: "end", paddingBottom: 64, rowGap: 32 }}
          >
            <div className="sp6 stack">
              <p className="t-mono m0 c-mute">§ 03 — Pricing</p>
              <h2 id="price-h" className="t-h2 m0">
                Your dream,{" "}
                <span className="serif acc">not an agency invoice.</span>
              </h2>
            </div>
            <div
              className="stack"
              style={{ gridColumn: "9 / span 4", gap: 16 }}
            >
              <p className="t-mono m0 acc">Launch pricing · First 10 clients</p>
              <p className="t-body m0 c-mute">
                Custom work at a fraction of agency rates — for our first 10
                clients, until all 10 spots are filled. Every plan starts with a
                clear scope, and every plan includes 30 days of aftercare.
              </p>
            </div>
          </div>
          <div className="price">
            {plans.map(([name, cost, line, items], i) => (
              <div key={name}>
                <h3 className="t-mono m0 c-mute" style={{ fontWeight: 400 }}>
                  {String(i + 1).padStart(2, "0")} — {name}
                </h3>
                <p className="t-h2 m0 acc">{cost}</p>
                <p className="t-body m0" style={{ fontSize: 17 }}>
                  {line}
                </p>
                <ul className="plus t-body">
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a className="nv t-mono p-start" href="/start">
                  Start with {name} <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
          <div className="bar">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "12px 28px",
              }}
            >
              <h3 className="t-h3 m0">Custom</h3>
              <p className="t-body m0 c-mute" style={{ maxWidth: 560 }}>
                Bigger than Complete? Portals, operations tools and anything
                else — scoped and quoted together.
              </p>
            </div>
            <a className="btn t-mono" href="/start">
              Let's talk{" "}
              <span className="ar" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <p
            className="t-mono m0 c-mute2"
            style={{ paddingTop: 20, borderTop: "1px solid var(--line2)" }}
          >
            Domain and payment-processing fees are paid directly to those
            providers.
          </p>

          <div
            className="g12"
            style={{
              marginTop: "clamp(80px, 10vw, 140px)",
              alignItems: "start",
              rowGap: 40,
            }}
          >
            <div className="sp4 stack" style={{ gap: 20 }}>
              <p className="t-mono m0 c-mute">Aftercare</p>
              <h3
                className="t-h2 m0"
                style={{ fontSize: "clamp(40px, 4.6vw, 68px)" }}
              >
                First 30 days{" "}
                <span className="serif acc" style={{ whiteSpace: "nowrap" }}>
                  on us.
                </span>
              </h3>
              <p className="t-body m0 c-mute">
                Then keep us on — or take the keys. Longer plans cost less per
                month.
              </p>
            </div>
            <div className="sp8 stack" style={{ gap: 40 }}>
              <div className="price p3">
                {[
                  ["30 days", "$100", "$100 / month", false],
                  ["90 days", "$270", "$90 / month — save 10%", true],
                  ["1 year", "$960", "$80 / month — save 20%", true],
                ].map(([t, c, m, save]) => (
                  <div key={t as string}>
                    <p className="t-mono m0 c-mute">{t}</p>
                    <p
                      className="t-h2 m0"
                      style={{ fontSize: "clamp(36px, 3.6vw, 56px)" }}
                    >
                      {c}
                    </p>
                    <p className={`t-mono m0 ${save ? "acc" : "c-mute2"}`}>
                      {m}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="plus plus-grid t-body">
                <li>Bug fixes</li>
                <li>Security and dependency updates</li>
                <li>Unlimited hours for in-scope fixes and changes</li>
                <li>Replies in under 24 hours</li>
                <li>Out-of-scope work, available à la carte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="split" aria-labelledby="own-h">
        <div style={{ background: "var(--bg3)" }}>
          <p className="t-mono m0 c-mute">§ Ownership</p>
          <div className="stack" style={{ gap: 28 }}>
            <h2 id="own-h" className="t-h2 rv m0">
              Paid in full.
              <br />
              <span className="serif">Yours for good.</span>
            </h2>
            <p className="t-body m0 c-mute" style={{ maxWidth: 440 }}>
              Finished deliverables belong to you once the project is paid.
              Ongoing support is there if you want it — never required.
            </p>
          </div>
        </div>
        <div>
          <h2 className="t-mono m0 c-mute2" style={{ fontWeight: 400 }}>
            § Who we build for
          </h2>
          <ul className="who t-h3">
            <li>Founders</li>
            <li>Small businesses</li>
            <li>Creators</li>
            <li>Teams &amp; operations groups</li>
            <li>Established companies</li>
          </ul>
          <p className="t-mono m0 c-mute2">
            If it's lawful and buildable — we're listening.
          </p>
        </div>
      </section>

      <section id="work" className="s-dark" aria-labelledby="work-h">
        <div className="wrap pad">
          <div className="g12" style={{ alignItems: "end", paddingBottom: 56 }}>
            <div className="sp6 stack">
              <p className="t-mono m0 c-mute">§ 04 — Work</p>
              <h2 id="work-h" className="t-h2 m0">
                Selected <span className="serif">work.</span>
              </h2>
            </div>
            <p
              className="t-body m0 c-mute"
              style={{ gridColumn: "10 / span 3" }}
            >
              Live, in the wild. More on the way.
            </p>
          </div>
          <div className="g12" style={{ alignItems: "start" }}>
            <Project p={work[0]} />
            <Project p={work[1]} className="drop" />
          </div>
          <div
            className="g12"
            style={{
              marginTop: "clamp(64px, 8vw, 120px)",
              alignItems: "start",
            }}
          >
            <Project p={work[2]} />
            <Project
              p={work[3]}
              className="drop"
              style={{ gridColumn: "6 / span 7" }}
            />
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-h">
        <div className="wrap pad">
          <div className="g12" style={{ alignItems: "end", rowGap: 40 }}>
            <div className="sp7 stack">
              <p className="t-mono m0 c-mute2">§ 05 — About</p>
              <h2 id="about-h" className="t-h2 rv m0">
                A studio built <span className="serif acc">for dreamers.</span>
              </h2>
            </div>
            <div
              className="stack"
              style={{ gridColumn: "9 / span 4", gap: 20 }}
            >
              <p className="t-body m0 c-cream" style={{ fontSize: 20 }}>
                SRCcvde is a custom technology studio based in Las Vegas,
                working with clients across the U.S.
              </p>
              <p className="t-body m0 c-mute">
                Big-studio craft without the big-studio price — and a studio you
                can actually reach.
              </p>
            </div>
          </div>
          <dl className="stats rv" style={{ marginBottom: 0 }}>
            {[
              ["Platforms", "Web, iOS & Android"],
              ["Websites in", "3–5 days"],
              ["Replies in", "Under 24 hours"],
              ["Based in", "Las Vegas, NV"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="t-mono c-mute2">{k}</dt>
                <dd className="t-h3" style={{ margin: "16px 0 0" }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="faq" className="s-dark" aria-labelledby="faq-h">
        <div
          className="wrap g12 pad"
          style={{ alignItems: "start", rowGap: 40 }}
        >
          <div className="sp4 stack">
            <p className="t-mono m0 c-mute">§ 06 — FAQ</p>
            <h2 id="faq-h" className="t-h2 m0">
              Questions, <span className="serif">answered.</span>
            </h2>
            <p className="t-body m0 c-mute" style={{ maxWidth: 300 }}>
              Something else on your mind?{" "}
              <a
                className="ul acc"
                href={`mailto:${EMAIL}`}
                style={{ whiteSpace: "nowrap" }}
              >
                Just ask.
              </a>
            </p>
          </div>
          <div className="sp8">
            {faqs.map(([q, a], i) => (
              <details key={q} className="faq" open={i === 0}>
                <summary className="t-h3">
                  <span>{q}</span>
                  <span className="pl" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="ans t-body">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="cta-h">
        <div
          className="wrap"
          style={{ paddingTop: "clamp(96px, 12vw, 176px)" }}
        >
          <h2 id="cta-h" className="t-dis rv close-h">
            What did
            <br />
            you{" "}
            <span className="serif acc" style={{ fontSize: "1.1em" }}>
              dream?
            </span>
          </h2>
          <div className="close-row">
            <a className="btn t-mono" href="/start">
              Start a project{" "}
              <span className="ar" aria-hidden="true">
                →
              </span>
            </a>
            <a className="ul t-h3 acc" href={`mailto:${EMAIL}`}>
              {EMAIL}{" "}
              <span className="ar" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
