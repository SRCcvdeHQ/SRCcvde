const services = [
  ['01', 'Websites', 'Distinct, responsive websites shaped around your brand, goals, and audience.'],
  ['02', 'Web apps', 'Purpose-built applications for customers, teams, workflows, and ideas that need more than a page.'],
  ['03', 'PWAs', 'Installable web experiences that feel at home on phones, tablets, and desktops.'],
  ['04', 'E-commerce', 'Custom storefronts and purchasing experiences designed around the way you actually sell.'],
  ['05', 'Portals & dashboards', 'Clear, useful interfaces for the information your customers or team need most.'],
  ['06', 'Operations tools', 'Internal systems that replace awkward spreadsheets, repeated tasks, and disconnected workflows.'],
]

const steps = [
  ['Dream', 'Bring the idea — polished, half-formed, or written on a napkin.'],
  ['Discover', 'We define what it needs to do, what matters most, and what the responsible first version looks like.'],
  ['Build', 'You stay as involved as you want while the idea becomes something real.'],
  ['Launch', 'We test it, prepare it, and put it into the world with intention.'],
  ['Own', 'Once the project is paid in full, the finished product is yours.'],
]

export default function App() {
  return (
    <div className="page">
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="SRCcvde home">
            <span>SRC</span>cvde
          </a>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </div>

          <a className="nav-cta" href="mailto:hello@srccvde.com?subject=I%20have%20an%20idea">
            Start a project
          </a>
        </nav>
      </header>

      <main id="top">
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
              We build custom websites, web apps, PWAs, and digital tools for people
              with an idea worth making real.
            </p>

            <div className="actions">
              <a className="button button-light" href="mailto:hello@srccvde.com?subject=I%20have%20an%20idea">
                Tell us your idea <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-ghost" href="#services">
                See what we build <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-object" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="idea-core">
              <span className="core-label">idea</span>
              <span className="core-line" />
              <strong>→ real</strong>
            </div>
            <span className="code-fragment fragment-one">&lt;build /&gt;</span>
            <span className="code-fragment fragment-two">01 — dream</span>
          </div>

          <div className="hero-foot">
            <span>Las Vegas born · U.S. wide</span>
            <span>Scroll to explore</span>
          </div>
        </section>

        <section className="belief">
          <div className="shell belief-grid">
            <p className="section-label">Why SRCcvde exists</p>
            <div>
              <h2>Custom technology should not feel out of reach.</h2>
              <p className="large-copy">
                You should not need a technical vocabulary, a giant company, or a giant
                budget just to have something built around the way you think.
              </p>
              <p className="muted-copy">
                SRCcvde exists to make custom technology feel human: listen first,
                explain clearly, build responsibly, and never sand away what made the
                idea yours in the first place.
              </p>
            </div>
          </div>
        </section>

        <section className="section shell" id="services">
          <div className="section-heading">
            <div>
              <p className="section-label">What we build</p>
              <h2>Custom tech at your fingertips.</h2>
            </div>
            <p>
              No rigid product menu. Every project starts with the problem, the people,
              and what the technology actually needs to accomplish.
            </p>
          </div>

          <div className="service-grid">
            {services.map(([number, title, copy]) => (
              <article className="service-card" key={title}>
                <span className="card-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="process section" id="process">
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
              {steps.map(([title, copy], index) => (
                <article className="process-step" key={title}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ownership">
          <div className="shell ownership-inner">
            <p className="section-label light-label">The simple version</p>
            <h2>You own what we build.</h2>
            <div className="ownership-copy">
              <p>
                Once your project is paid in full, the finished product belongs to you.
                Your business should not be held hostage by the person who built its
                technology.
              </p>
              <p>
                If you want us around afterward, we can stay. If you are ready to take
                the keys and go, we make the handoff clean.
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
                From the person starting a bakery at their kitchen table to the team
                replacing a workflow that no longer scales — if the project is lawful
                and we can responsibly build it, the door is open.
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

        <section className="work section" id="work">
          <div className="shell">
            <div className="section-heading work-heading">
              <div>
                <p className="section-label">Selected work</p>
                <h2>Built with purpose.</h2>
              </div>
              <p>
                The portfolio starts with real work — not invented case studies. We are
                building this chapter now.
              </p>
            </div>

            <div className="work-placeholder">
              <div className="work-mark">
                <span>SRC</span>cvde
              </div>
              <p>First projects are taking shape.</p>
              <span className="work-status">Portfolio opening soon</span>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="shell about-grid">
            <p className="section-label">About SRCcvde</p>
            <div>
              <h2>A company that still feels like someone is listening.</h2>
              <p className="large-copy">
                SRCcvde is a custom technology studio built around a simple belief:
                your idea deserves to be understood before it is engineered.
              </p>
              <p className="muted-copy">
                We are company-first and person-led. That means professional systems,
                thoughtful process, and real accountability — without losing the
                hometown-developer feeling of knowing who is building beside you.
              </p>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner">
            <p className="section-label light-label">Your turn</p>
            <h2>What did you dream?</h2>
            <p>
              You do not need a scope document. You do not need the technical words.
              Start with the idea.
            </p>
            <a className="button button-light final-button" href="mailto:hello@srccvde.com?subject=I%20have%20an%20idea">
              Start a project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              <span>SRC</span>cvde
            </a>
            <p>Because you dreamt.</p>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </div>

          <div className="footer-contact">
            <span>Start something</span>
            <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} SRCcvde. All rights reserved.</span>
          <span>Built with intention.</span>
        </div>
      </footer>
    </div>
  )
}
