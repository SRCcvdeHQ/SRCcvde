import { useState } from "react";
import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";
import { InterfaceVisual } from "../components/Visuals";
import { FinalCta } from "../components/Layout";

export function WorkPage() {
  const workspaceAreas = [
    {
      id: "projects",
      label: "Projects",
      eyebrow: "Project lifecycle",
      title: "From discovery to aftercare.",
      copy: "Projects move through a visible lifecycle with milestones, progress, client actions, and clear ownership of what happens next.",
      points: [
        "Milestones and project phases",
        "Client action requests",
        "Progress visible to both sides",
      ],
    },
    {
      id: "documents",
      label: "Documents",
      eyebrow: "Documents & signatures",
      title: "Agreements without email archaeology.",
      copy: "Proposals, agreements, addenda, approvals, and executed copies live with the project instead of disappearing into inbox threads.",
      points: [
        "Guided smart-document drafting",
        "Electronic signatures and acknowledgments",
        "Executed-document archive",
      ],
    },
    {
      id: "billing",
      label: "Billing",
      eyebrow: "Billing & payments",
      title: "Money is part of the project view.",
      copy: "Invoices, balances, payment activity, and receipts sit beside the work so clients do not need a separate system just to understand what is due.",
      points: [
        "Invoice creation and history",
        "Payment tracking and receipts",
        "Client-facing billing view",
      ],
    },
    {
      id: "messages",
      label: "Messages",
      eyebrow: "Client communication",
      title: "The conversation stays with the work.",
      copy: "Project messages and delivery context stay in one workspace, making it easier to understand decisions later.",
      points: [
        "Project-scoped conversations",
        "Delivery status and history",
        "One place for client replies",
      ],
    },
    {
      id: "notifications",
      label: "Notifications",
      eyebrow: "PWA & notifications",
      title: "Updates can follow the client.",
      copy: "The workspace installs as a PWA and can deliver opted-in project, document, billing, message, and security notifications across multiple subscribed devices.",
      points: [
        "Installable mobile and desktop PWA",
        "Per-category notification preferences",
        "Multiple devices per account",
      ],
    },
  ];
  const capabilityBuilds = [
    {
      id: "portal",
      label: "Customer portal",
      copy: "A secure place for customers to see status, files, actions, messages, and account information.",
    },
    {
      id: "ops",
      label: "Operations dashboard",
      copy: "Turn spreadsheets, repetitive admin work, and scattered tools into one purpose-built internal system.",
    },
    {
      id: "commerce",
      label: "Custom commerce",
      copy: "A storefront and checkout flow designed around the way the business actually sells—not around a generic template.",
    },
  ];
  const [selectedArea, setSelectedArea] = useState(workspaceAreas[0].id);
  const [selectedCapability, setSelectedCapability] = useState(
    capabilityBuilds[0].id,
  );
  const active =
    workspaceAreas.find((item) => item.id === selectedArea) ||
    workspaceAreas[0];
  const capability =
    capabilityBuilds.find((item) => item.id === selectedCapability) ||
    capabilityBuilds[0];

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Work"
        title="Built systems. Real capability."
        copy="We show work we actually built—whether it was created for a client, for SRCcvde itself, or as a clearly labeled capability demonstration."
      />

      <section className="section shell work-feature">
        <div className="work-feature-head">
          <div>
            <p className="section-label">Featured build · Internal product</p>
            <h2>SRCcvde Workspace</h2>
          </div>
          <p>
            A complete client and project operating system built to move a
            custom technology engagement from first inquiry through discovery,
            agreements, development, billing, launch, and aftercare.
          </p>
        </div>

        <div className="work-tour">
          <div
            className="work-tour-nav"
            role="tablist"
            aria-label="Explore SRCcvde Workspace"
          >
            {workspaceAreas.map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={selectedArea === item.id}
                className={selectedArea === item.id ? "is-active" : ""}
                onClick={() => setSelectedArea(item.id)}
                key={item.id}
              >
                <span>{item.label}</span>
                <small>{item.eyebrow}</small>
              </button>
            ))}
          </div>
          <div className="work-tour-preview" role="tabpanel" aria-live="polite">
            <div className="work-ui-mock" aria-hidden="true">
              <div className="work-ui-top">
                <span>SRCcvde</span>
                <i>{active.label}</i>
              </div>
              <div className="work-ui-body">
                <aside>
                  <b>workspace</b>
                  {workspaceAreas.map((item) => (
                    <span
                      className={selectedArea === item.id ? "active" : ""}
                      key={item.id}
                    >
                      {item.label.toLowerCase()}
                    </span>
                  ))}
                </aside>
                <div className="work-ui-content">
                  <small>{active.eyebrow}</small>
                  <strong>{active.title}</strong>
                  <div className="work-ui-bars">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
            <div className="work-tour-copy">
              <p className="section-label">{active.eyebrow}</p>
              <h3>{active.title}</h3>
              <p>{active.copy}</p>
              <ul>
                {active.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="work-facts">
          <span>Internal product</span>
          <span>Responsive web app</span>
          <span>Installable PWA</span>
          <span>Client + admin experiences</span>
        </div>
      </section>

      <section className="section-band capability-showcase">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-label">Capability demonstrations</p>
              <h2>Imagine your version of this.</h2>
            </div>
            <p>
              These are examples of problems SRCcvde can design around. They are
              capability demonstrations, not fabricated client projects.
            </p>
          </div>
          <div className="capability-picker">
            <div
              className="capability-tabs"
              role="tablist"
              aria-label="Capability demonstrations"
            >
              {capabilityBuilds.map((item) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedCapability === item.id}
                  className={selectedCapability === item.id ? "is-active" : ""}
                  onClick={() => setSelectedCapability(item.id)}
                  key={item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              className="capability-result"
              role="tabpanel"
              aria-live="polite"
            >
              <p className="section-label">Concept build</p>
              <h3>{capability.label}</h3>
              <p>{capability.copy}</p>
              <a className="text-link" href="/start">
                Build something like this <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="portfolio-empty">
          <InterfaceVisual />
          <div>
            <p className="section-label">Public client work</p>
            <h2>Client case studies join the page when they are ready.</h2>
            <p>
              We only publish client work after launch, when we have permission
              to show it, and when we can tell the story accurately.
            </p>
            <span>Confidential work stays confidential.</span>
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  );
}
