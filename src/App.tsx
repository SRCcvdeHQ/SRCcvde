import { FormEvent, useEffect, useState } from 'react'

const services = [
  ['01', 'Websites', 'Distinct, responsive websites shaped around your brand, goals, and audience.', 'Marketing sites · Company sites · Landing experiences'],
  ['02', 'Web apps', 'Purpose-built applications for customers, teams, workflows, and ideas that need more than a page.', 'SaaS · Customer apps · Custom platforms'],
  ['03', 'PWAs', 'Installable web experiences that feel at home on phones, tablets, and desktops.', 'Installable · Responsive · App-like'],
  ['04', 'E-commerce', 'Custom storefronts and purchasing experiences designed around the way you actually sell.', 'Catalogs · Checkout flows · Customer accounts'],
  ['05', 'Portals & dashboards', 'Clear interfaces for the information your customers or team need most.', 'Client portals · Reporting · Secure dashboards'],
  ['06', 'Operations tools', 'Internal systems that replace repeated tasks, awkward spreadsheets, and disconnected workflows.', 'Admin tools · Workflow systems · Automation'],
]

const steps = [
  ['Dream', 'Bring the idea — polished, half-formed, or written on a napkin.'],
  ['Discover', 'We define what it needs to do, what matters most, and what the responsible first version looks like.'],
  ['Design', 'We shape the experience, structure, and visual direction before the build gets expensive to change.'],
  ['Build', 'You stay as involved as you want while the idea becomes something real.'],
  ['Launch', 'We test it, prepare it, and put it into the world with intention.'],
  ['Own', 'Once the project is paid in full, the finished product is yours.'],
]

type PageMeta = { title: string; description: string }

const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'SRCcvde — Because you dreamt.',
    description: 'SRCcvde builds custom websites, web apps, PWAs, portals, dashboards, and digital tools around your idea.',
  },
  '/services': {
    title: 'Services — SRCcvde',
    description: 'Custom websites, web apps, PWAs, e-commerce, portals, dashboards, and operations tools built by SRCcvde.',
  },
  '/process': {
    title: 'Process — SRCcvde',
    description: 'See how SRCcvde turns an idea into a designed, built, launched, and owned digital product.',
  },
  '/work': {
    title: 'Work — SRCcvde',
    description: 'Selected SRCcvde work and the systems, websites, and digital products we build with purpose.',
  },
  '/about': {
    title: 'About — SRCcvde',
    description: 'SRCcvde is a custom technology studio built around listening first, building responsibly, and giving clients ownership.',
  },
  '/start': {
    title: 'Start a Project — SRCcvde',
    description: 'Tell SRCcvde what you want to build. No technical vocabulary required.',
  },
  '/privacy': {
    title: 'Privacy — SRCcvde',
    description: 'SRCcvde privacy information.',
  },
  '/terms': {
    title: 'Terms — SRCcvde',
    description: 'SRCcvde website terms.',
  },
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={footer ? 'brand footer-brand' : 'brand'} href="/" aria-label="SRCcvde home">
      <span>SRC</span>cvde
      <i aria-hidden="true" />
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Main navigation">
        <Logo />

        <div className="nav-links">
          <a href="/services">Services</a>
          <a href="/process">Process</a>
          <a href="/work">Work</a>
          <a href="/about">About</a>
        </div>

        <a className="nav-cta" href="/start">Start a project</a>

        <button
          className="menu-button"
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={open ? 'mobile-nav is-open' : 'mobile-nav'} aria-hidden={!open}>
        <div className="shell mobile-nav-inner">
          <a href="/services">Services</a>
          <a href="/process">Process</a>
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a className="mobile-start" href="/start">Start a project ↗</a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <Logo footer />
          <p>Because you dreamt.</p>
        </div>

        <div className="footer-links">
          <a href="/services">Services</a>
          <a href="/process">Process</a>
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a href="/start">Start a project</a>
        </div>

        <div className="footer-contact">
          <span>Start something</span>
          <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>
          <small>Las Vegas born · U.S. wide</small>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} SRCcvde. All rights reserved.</span>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <span>Built with intention.</span>
      </div>
    </footer>
  )
}

function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

function IdeaVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'idea-visual compact' : 'idea-visual'} aria-hidden="true">
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
  )
}

function InterfaceVisual() {
  return (
    <div className="interface-visual" aria-hidden="true">
      <div className="window-bar">
        <span /><span /><span />
        <em>srccvde / project</em>
      </div>
      <div className="interface-body">
        <div className="interface-sidebar">
          <strong>build</strong>
          <span className="active">overview</span>
          <span>design</span>
          <span>development</span>
          <span>launch</span>
        </div>
        <div className="interface-content">
          <div className="interface-topline"><span>Project status</span><strong>In motion</strong></div>
          <div className="metric-row">
            <div><small>idea</small><b>01</b></div>
            <div><small>systems</small><b>04</b></div>
            <div><small>owner</small><b>you</b></div>
          </div>
          <div className="signal-chart">
            <i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <SiteFrame>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="kicker"><span className="status-dot" aria-hidden="true" />Custom technology, built around you</div>
          <h1>Because<br /><em>you dreamt.</em></h1>
          <p className="hero-lede">We build custom websites, web apps, PWAs, and digital tools for people with an idea worth making real.</p>
          <div className="actions">
            <a className="button button-tan" href="/start">Tell us your idea <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href="/services">See what we build <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <IdeaVisual />
        <div className="hero-foot"><span>Las Vegas born · U.S. wide</span><span>Scroll to explore</span></div>
      </section>

      <section className="belief section-band">
        <div className="shell belief-grid">
          <p className="section-label">Why SRCcvde exists</p>
          <div>
            <h2>Custom technology should not feel out of reach.</h2>
            <p className="large-copy">You should not need a technical vocabulary or a giant company just to have something built around the way you think.</p>
            <p className="muted-copy">SRCcvde exists to make custom technology feel human: listen first, explain clearly, build responsibly, and never sand away what made the idea yours in the first place.</p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="section-label">What we build</p><h2>Custom tech at your fingertips.</h2></div>
          <p>No rigid product menu. Every project starts with the problem, the people, and what the technology actually needs to accomplish.</p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, copy]) => (
            <a className="service-card" href="/services" key={title}>
              <span className="card-number">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="visual-break section-band">
        <div className="shell visual-break-grid">
          <div>
            <p className="section-label">Made for the real world</p>
            <h2>Beautiful is useful.<br />Useful is the point.</h2>
            <p className="muted-copy">The interface should make the work clearer, the customer journey easier, or the business stronger. Preferably all three.</p>
          </div>
          <InterfaceVisual />
        </div>
      </section>

      <section className="process section-band">
        <div className="shell">
          <div className="process-intro">
            <p className="section-label">How we build</p>
            <h2>We build the home together.</h2>
            <p>Be hands-off. Sit beside us for every decision. Land somewhere in between. The process adapts to you.</p>
          </div>
          <div className="process-list">
            {steps.slice(0, 5).map(([title, copy], index) => (
              <article className="process-step" key={title}>
                <span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="/process">See the complete process <span>↗</span></a>
        </div>
      </section>

      <section className="ownership section-band">
        <div className="shell ownership-inner">
          <p className="section-label">The simple version</p>
          <h2>You own what we build.</h2>
          <div className="ownership-copy">
            <p>Once your project is paid in full, the finished product belongs to you. Your business should not be held hostage by the person who built its technology.</p>
            <p>If you want us around afterward, we can stay. If you are ready to take the keys and go, we make the handoff clean.</p>
          </div>
        </div>
      </section>

      <section className="section shell audience">
        <p className="section-label">Who we build for</p>
        <div className="audience-grid">
          <h2>First idea.<br />Next system.<br /><span>Same respect.</span></h2>
          <div className="audience-copy">
            <p>From the person starting at their kitchen table to the team replacing a workflow that no longer scales — if the project is lawful and we can responsibly build it, the door is open.</p>
            <div className="audience-tags"><span>Founders</span><span>Small business</span><span>Creators</span><span>Teams</span><span>Operations</span><span>Established companies</span></div>
          </div>
        </div>
      </section>

      <section className="work section-band">
        <div className="shell">
          <div className="section-heading">
            <div><p className="section-label">Selected work</p><h2>Built with purpose.</h2></div>
            <p>No invented case studies. The portfolio grows when real client work is ready to be shared.</p>
          </div>
          <a className="work-placeholder" href="/work">
            <div className="work-mark"><span>SRC</span>cvde</div>
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
            <p className="large-copy">SRCcvde is a custom technology studio built around a simple belief: your idea deserves to be understood before it is engineered.</p>
            <p className="muted-copy">Professional systems, thoughtful process, and real accountability — without losing the hometown-developer feeling of knowing who is building beside you.</p>
            <a className="text-link" href="/about">Meet SRCcvde <span>↗</span></a>
          </div>
        </div>
      </section>

      <FinalCta />
    </SiteFrame>
  )
}

function PageHero({ eyebrow, title, copy, visual = false }: { eyebrow: string; title: string; copy: string; visual?: boolean }) {
  return (
    <section className="page-hero shell">
      <div>
        <p className="section-label">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      {visual ? <IdeaVisual compact /> : <span className="page-index" aria-hidden="true">SRC / cvde</span>}
    </section>
  )
}

function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="Services" title="Built around the job, not a template." copy="Every SRCcvde project is custom. These are the kinds of digital products we build — not boxes you have to squeeze your idea into." visual />
      <section className="section shell">
        <div className="service-detail-list">
          {services.map(([number, title, copy, examples]) => (
            <article className="service-detail" key={title}>
              <span>{number}</span><h2>{title}</h2><p>{copy}</p><small>{examples}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="section-band principle">
        <div className="shell principle-grid">
          <p className="section-label">Our rule</p>
          <h2>If a simpler solution is the right solution, we will tell you.</h2>
          <p>Custom does not mean complicated for the sake of it. The goal is the right technology, responsibly scoped.</p>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  )
}

function ProcessPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="Process" title="You never have to wonder what happens next." copy="A clear process protects the idea, the budget, and the relationship. You can be deeply involved or let us carry the technical weight." />
      <section className="section shell">
        <div className="timeline">
          {steps.map(([title, copy], index) => (
            <article className="timeline-step" key={title}>
              <span>0{index + 1}</span>
              <div><h2>{title}</h2><p>{copy}</p></div>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>
      <section className="section-band collaboration">
        <div className="shell split-copy">
          <div><p className="section-label">Collaboration</p><h2>Your level of involvement is yours to choose.</h2></div>
          <div><p>Some clients want every prototype and technical decision. Others want a clear checkpoint and a finished result. Both are valid.</p><p>We explain tradeoffs in plain language, document important decisions, and keep scope visible as the project changes.</p></div>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  )
}

function WorkPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="Work" title="Real work only." copy="We would rather show a smaller portfolio of real projects than fill this page with fictional brands and invented outcomes." />
      <section className="section shell">
        <div className="portfolio-empty">
          <InterfaceVisual />
          <div>
            <p className="section-label">Portfolio status</p>
            <h2>The first public case studies are being prepared.</h2>
            <p>Client work will appear here when it is launched, approved for public display, and worth showing properly.</p>
            <span>Confidential work stays confidential.</span>
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  )
}

function AboutPage() {
  return (
    <SiteFrame>
      <PageHero eyebrow="About" title="Technology with a human on the other side." copy="SRCcvde exists for people who have an idea but do not necessarily speak developer — and for teams that simply want a better way to build." visual />
      <section className="section shell">
        <div className="about-story">
          <p className="section-label">What matters here</p>
          <div>
            <h2>Listen first. Build clearly. Hand over the keys.</h2>
            <p className="large-copy">We want clients to feel like part of the build, not passengers waiting for a mysterious technical team to return with something they barely recognize.</p>
          </div>
        </div>
        <div className="value-grid">
          <article><span>01</span><h3>Accessible</h3><p>We explain technology in normal language and meet people where they are.</p></article>
          <article><span>02</span><h3>Custom</h3><p>The work starts with your problem and your users, not a pre-selected template.</p></article>
          <article><span>03</span><h3>Responsible</h3><p>We care about security, maintainability, scope, performance, and what happens after launch.</p></article>
          <article><span>04</span><h3>Yours</h3><p>Once the agreed project is paid in full, ownership transfers cleanly to you.</p></article>
        </div>
      </section>
      <section className="section-band location-band">
        <div className="shell split-copy">
          <div><p className="section-label">Where we work</p><h2>Las Vegas born.<br />U.S. wide.</h2></div>
          <div><p>We can work in person across the Las Vegas valley and remotely with clients throughout the United States.</p><p>The goal is the same either way: a relationship that still feels close enough to call your developer.</p></div>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  )
}

function StartPage() {
  const [status, setStatus] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const company = String(data.get('company') || '')
    const project = String(data.get('project') || '')
    const budget = String(data.get('budget') || '')
    const timeline = String(data.get('timeline') || '')
    const involvement = String(data.get('involvement') || '')
    const details = String(data.get('details') || '')

    const subject = encodeURIComponent(`Project idea from ${name || 'a new client'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\n\nWhat they want built: ${project}\nBudget range: ${budget}\nTimeline: ${timeline}\nPreferred involvement: ${involvement}\n\nIdea / details:\n${details}`,
    )

    setStatus('Opening your email app with the project brief pre-filled…')
    window.location.href = `mailto:hello@srccvde.com?subject=${subject}&body=${body}`
  }

  return (
    <SiteFrame>
      <PageHero eyebrow="Start a project" title="Tell us what you dreamt." copy="You do not need a scope document, wireframes, or the technical words. Start with what you want to make possible." />
      <section className="section shell intake-layout">
        <aside className="intake-aside">
          <p className="section-label">Before you start</p>
          <h2>A rough idea is enough.</h2>
          <p>We use this first note to understand the shape of the project. It is not a contract, quote, or commitment.</p>
          <div className="contact-note"><span>Prefer email?</span><a href="mailto:hello@srccvde.com">hello@srccvde.com</a></div>
        </aside>

        <form className="intake-form" onSubmit={submit}>
          <div className="field-row">
            <label><span>Your name *</span><input name="name" required autoComplete="name" /></label>
            <label><span>Email *</span><input name="email" type="email" required autoComplete="email" /></label>
          </div>
          <label><span>Company or project name</span><input name="company" autoComplete="organization" /></label>
          <label><span>What are you looking to build? *</span>
            <select name="project" required defaultValue="">
              <option value="" disabled>Choose the closest fit</option>
              <option>Website</option><option>Web app</option><option>PWA</option><option>E-commerce</option><option>Portal or dashboard</option><option>Operations / internal tool</option><option>Not sure yet</option><option>Something else</option>
            </select>
          </label>
          <div className="field-row">
            <label><span>Approximate budget</span>
              <select name="budget" defaultValue="Not sure yet">
                <option>Not sure yet</option><option>Under $2,500</option><option>$2,500–$5,000</option><option>$5,000–$10,000</option><option>$10,000–$25,000</option><option>$25,000+</option>
              </select>
            </label>
            <label><span>Ideal timeline</span>
              <select name="timeline" defaultValue="Flexible">
                <option>Flexible</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option>
              </select>
            </label>
          </div>
          <label><span>How involved do you want to be?</span>
            <select name="involvement" defaultValue="Collaborative">
              <option>Hands-off</option><option>Collaborative</option><option>Very involved</option><option>Not sure yet</option>
            </select>
          </label>
          <label><span>Tell us about the idea *</span><textarea name="details" rows={8} required placeholder="What should exist when we're finished? Who is it for? What problem are you trying to solve?" /></label>
          <div className="form-footer">
            <p>For now, submitting opens a pre-filled email draft so nothing is stored without your knowledge.</p>
            <button className="button button-tan" type="submit">Prepare project email <span>↗</span></button>
          </div>
          <p className="form-status" role="status">{status}</p>
        </form>
      </section>
    </SiteFrame>
  )
}

function LegalPage({ type }: { type: 'privacy' | 'terms' }) {
  const privacy = type === 'privacy'
  return (
    <SiteFrame>
      <PageHero
        eyebrow={privacy ? 'Privacy' : 'Terms'}
        title={privacy ? 'Privacy, in plain language.' : 'Website terms.'}
        copy={privacy ? 'A simple explanation of what this website does with information before the full client intake system is connected.' : 'Basic terms for using the public SRCcvde website. Project-specific terms belong in a signed client agreement.'}
      />
      <section className="section shell legal-copy">
        {privacy ? (
          <>
            <h2>Current website data</h2>
            <p>This public site does not currently submit project form data to a SRCcvde database. The Start a Project form prepares an email in your own email application. SRCcvde receives information only when you choose to send that email.</p>
            <h2>Technical information</h2>
            <p>Our hosting, DNS, and related infrastructure may process standard technical information needed to deliver and protect the website, such as IP addresses, request information, and security logs.</p>
            <h2>Contact</h2>
            <p>Questions about privacy can be sent to <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.</p>
            <div className="legal-note">This page will be updated before database-backed intake, analytics, accounts, or other data-collection features are enabled.</div>
          </>
        ) : (
          <>
            <h2>Using this website</h2>
            <p>The SRCcvde website is provided for general information about our services and to help potential clients contact us. Website content may change as services and processes evolve.</p>
            <h2>No project agreement is created here</h2>
            <p>Submitting an inquiry, sending an email, or discussing an idea does not by itself create a client relationship, guarantee availability, establish pricing, or create a binding project agreement.</p>
            <h2>Project ownership</h2>
            <p>Ownership, licensing, confidentiality, payment milestones, scope, and handoff terms for client work are defined in the signed agreement for that specific project.</p>
            <h2>Contact</h2>
            <p>Questions can be sent to <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.</p>
            <div className="legal-note">These website terms are a working business notice and are not a substitute for project-specific legal agreements.</div>
          </>
        )}
      </section>
    </SiteFrame>
  )
}

function NotFoundPage() {
  return (
    <SiteFrame>
      <section className="not-found shell">
        <p className="section-label">404</p>
        <h1>This page never made it out of the sketchbook.</h1>
        <p>The link may have changed, or this page has not been built yet.</p>
        <a className="button button-tan" href="/">Back home <span>↗</span></a>
      </section>
    </SiteFrame>
  )
}

function FinalCta() {
  return (
    <section className="final-cta section-band">
      <div className="shell final-cta-inner">
        <p className="section-label">Your turn</p>
        <h2>What did you dream?</h2>
        <p>You do not need a scope document. You do not need the technical words. Start with the idea.</p>
        <a className="button button-tan final-button" href="/start">Start a project <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const meta = pageMeta[path]

  useEffect(() => {
    const fallback: PageMeta = { title: 'Page not found — SRCcvde', description: 'The page you requested could not be found.' }
    const current = meta || fallback
    document.title = current.title
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', current.description)
    window.scrollTo(0, 0)
  }, [path, meta])

  switch (path) {
    case '/': return <HomePage />
    case '/services': return <ServicesPage />
    case '/process': return <ProcessPage />
    case '/work': return <WorkPage />
    case '/about': return <AboutPage />
    case '/start': return <StartPage />
    case '/privacy': return <LegalPage type="privacy" />
    case '/terms': return <LegalPage type="terms" />
    default: return <NotFoundPage />
  }
}
