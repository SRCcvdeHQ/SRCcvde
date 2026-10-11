import { SiteFrame } from "../components/Layout";
import { IdeaVisual } from "../components/Visuals";
import { InterfaceVisual } from "../components/Visuals";
import { FinalCta } from "../components/Layout";
import { services } from "../content";
import { steps } from "../content";

export function HomePage() {
  return (
    <SiteFrame>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="kicker">
            <span className="status-dot" aria-hidden="true" />
            Custom technology, built around you
          </div>
          <h1>
            Because
            <br />
            <em>you dreamt.</em>
          </h1>
          <p className="hero-lede">
            We build custom websites, web apps, PWAs, and digital tools for
            people with an idea worth making real.
          </p>
          <div className="actions">
            <a className="button button-tan" href="/start">
              Tell us your idea <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="/services">
              See what we build <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <IdeaVisual />
        <div className="hero-foot">
          <span>Las Vegas born · U.S. wide</span>
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="belief section-band">
        <div className="shell belief-grid">
          <p className="section-label">Why SRCcvde exists</p>
          <div>
            <h2>Custom technology should not feel out of reach.</h2>
            <p className="large-copy">
              You should not need a technical vocabulary or a giant company just
              to have something built around the way you think.
            </p>
            <p className="muted-copy">
              SRCcvde exists to make custom technology feel human: listen first,
              explain clearly, build responsibly, and never sand away what made
              the idea yours in the first place.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band client-experience">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-label">What working together feels like</p>
              <h2>Custom does not have to mean chaotic.</h2>
            </div>
            <p>
              You get a real process around the custom work: a clear scope,
              visible progress, documented decisions, and a clean handoff.
            </p>
          </div>
          <div className="experience-grid">
            <article>
              <span>01</span>
              <h3>Clear scope</h3>
              <p>
                We define what is included, what is not, and what changes would
                affect budget or timeline before surprises become expensive.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Visible progress</h3>
              <p>
                Your project lives in a secure client workspace with milestones,
                documents, approvals, messages, and billing in one place.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Real ownership</h3>
              <p>
                Once the agreed project is paid in full, the finished custom
                deliverables are yours. We make the handoff clean.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Stay or take the keys</h3>
              <p>
                Need aftercare, maintenance, or more development? We can stay
                involved. Ready to run with it? You can.
              </p>
            </article>
          </div>
          <a className="text-link" href="https://app.srccvde.com">
            Already a client? Open your workspace <span>↗</span>
          </a>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="section-label">What we build</p>
            <h2>Custom tech at your fingertips.</h2>
          </div>
          <p>
            No rigid product menu. Every project starts with the problem, the
            people, and what the technology actually needs to accomplish.
          </p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, copy]) => (
            <a className="service-card" href="/services" key={title}>
              <span className="card-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="visual-break section-band">
        <div className="shell visual-break-grid">
          <div>
            <p className="section-label">Made for the real world</p>
            <h2>
              Beautiful is useful.
              <br />
              Useful is the point.
            </h2>
            <p className="muted-copy">
              The interface should make the work clearer, the customer journey
              easier, or the business stronger. Preferably all three.
            </p>
          </div>
          <InterfaceVisual />
        </div>
      </section>

      <section className="process section-band">
        <div className="shell">
          <div className="process-intro">
            <p className="section-label">How we build</p>
            <h2>We build the home together.</h2>
            <p>
              Be hands-off. Sit beside us for every decision. Land somewhere in
              between. The process adapts to you.
            </p>
          </div>
          <div className="process-list">
            {steps.slice(0, 5).map(([title, copy], index) => (
              <article className="process-step" key={title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="/process">
            See the complete process <span>↗</span>
          </a>
        </div>
      </section>

      <section className="ownership section-band">
        <div className="shell ownership-inner">
          <p className="section-label">The simple version</p>
          <h2>You own what we build.</h2>
          <div className="ownership-copy">
            <p>
              Once your project is paid in full, the finished product belongs to
              you. Your business should not be held hostage by the person who
              built its technology.
            </p>
            <p>
              If you want us around afterward, we can stay. If you are ready to
              take the keys and go, we make the handoff clean.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell audience">
        <p className="section-label">Who we build for</p>
        <div className="audience-grid">
          <h2>
            First idea.
            <br />
            Next system.
            <br />
            <span>Same respect.</span>
          </h2>
          <div className="audience-copy">
            <p>
              From the person starting at their kitchen table to the team
              replacing a workflow that no longer scales — if the project is
              lawful and we can responsibly build it, the door is open.
            </p>
            <div className="audience-tags">
              <span>Founders</span>
              <span>Small business</span>
              <span>Creators</span>
              <span>Teams</span>
              <span>Operations</span>
              <span>Established companies</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section-band">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2>Built with purpose.</h2>
            </div>
            <p>
              No invented case studies. The portfolio grows when real client
              work is ready to be shared.
            </p>
          </div>
          <a className="work-placeholder" href="/work">
            <div className="work-mark">
              <span>SRC</span>cvde
            </div>
            <p>First portfolio releases are taking shape.</p>
            <span className="work-status">Explore work ↗</span>
          </a>
        </div>
      </section>

      <section className="about section-band">
        <div className="shell about-grid">
          <p className="section-label">About SRCcvde</p>
          <div>
            <h2>A company that still feels like someone is listening.</h2>
            <p className="large-copy">
              SRCcvde is a custom technology studio built around a simple
              belief: your idea deserves to be understood before it is
              engineered.
            </p>
            <p className="muted-copy">
              Professional systems, thoughtful process, and real accountability
              — without losing the hometown-developer feeling of knowing who is
              building beside you.
            </p>
            <a className="text-link" href="/about">
              Meet SRCcvde <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCta />
    </SiteFrame>
  );
}
