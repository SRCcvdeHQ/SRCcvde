import { FormEvent, useEffect, useState } from 'react'
import { submitProjectInquiry } from './lib/inquiries'

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
    title: 'Terms of Use — SRCcvde',
    description: 'Terms governing use of the public SRCcvde website.',
  },
  '/cookies': {
    title: 'Cookie & Tracking Notice — SRCcvde',
    description: 'How SRCcvde uses cookies, local storage, and similar website technologies.',
  },
  '/accessibility': {
    title: 'Accessibility — SRCcvde',
    description: 'SRCcvde accessibility commitment and contact information.',
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
          <a href="/cookies">Cookies</a>
          <a href="/accessibility">Accessibility</a>
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

      <section className="section-band">
        <div className="shell split-copy">
          <div>
            <p className="section-label">SRCcvde client platform</p>
            <h2>One place to move a project from idea to handoff.</h2>
          </div>
          <div>
            <p>SRCcvde operates a secure client and project platform at app.srccvde.com for project intake, proposals, agreements, electronic signatures, milestones, project documents, approvals, and handoff.</p>
            <p>When an authorized SRCcvde administrator connects Google Drive, the platform uses the Google Drive API only to organize and archive SRCcvde client project documents in the connected business Drive. Google Workspace API data is not used to train or improve generalized AI or machine-learning models, create non-consensual intimate imagery, build advertising profiles, or sell user data.</p>
            <p>Our use of information received from Google APIs follows the Google API Services User Data Policy, including its Limited Use requirements. <a className="text-link" href="/privacy">Read our Privacy Policy <span>↗</span></a></p>
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
  const [submitting, setSubmitting] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return

    const form = event.currentTarget
    const data = new FormData(form)

    setSubmitting(true)
    setStatus('Sending your project brief…')

    try {
      const result = await submitProjectInquiry({
        name: String(data.get('name') || ''),
        email: String(data.get('email') || ''),
        company: String(data.get('company') || ''),
        project_type: String(data.get('project') || ''),
        budget_range: String(data.get('budget') || 'Not sure yet'),
        timeline: String(data.get('timeline') || 'Flexible'),
        involvement: String(data.get('involvement') || 'Collaborative'),
        details: String(data.get('details') || ''),
        website: String(data.get('website') || ''),
      })

      form.reset()
      setStatus(
        result.duplicate
          ? 'We already received this project brief. You’re all set.'
          : 'Received. We’ll review your idea and follow up by email.',
      )
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to submit right now. Please try again.')
    } finally {
      setSubmitting(false)
    }
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
          <label><span>Tell us about the idea *</span><textarea name="details" rows={8} minLength={20} maxLength={5000} required placeholder="What should exist when we're finished? Who is it for? What problem are you trying to solve?" /></label>
          <label className="hp-field" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-footer">
            <p>Your project brief is sent securely to SRCcvde and stored for follow-up. Submitting this form does not create a contract or commitment.</p>
            <button className="button button-tan" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send project brief'} <span>↗</span></button>
          </div>
          <p className="form-status" role="status">{status}</p>
        </form>
      </section>
    </SiteFrame>
  )
}

function PolicyLayout({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string
  title: string
  copy: string
  children: React.ReactNode
}) {
  return (
    <SiteFrame>
      <PageHero eyebrow={eyebrow} title={title} copy={copy} />
      <section className="section shell legal-layout">
        <aside className="legal-aside">
          <p className="section-label">Policy information</p>
          <strong>Effective October 2, 2026</strong>
          <span>Last updated October 2, 2026</span>
          <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>
        </aside>
        <article className="legal-copy">{children}</article>
      </section>
    </SiteFrame>
  )
}

function PrivacyPage() {
  return (
    <PolicyLayout
      eyebrow="Privacy Policy"
      title="Privacy, in plain language."
      copy="This policy explains what information SRCcvde collects through this website, why we use it, how it may be shared, and the choices available to you."
    >
      <h2>1. Scope</h2>
      <p>This Privacy Policy applies to srccvde.com, app.srccvde.com, the public SRCcvde project-intake experience, and SRCcvde's client and project platform. It does not replace privacy, confidentiality, or data-processing terms that may apply to a signed client project.</p>

      <h2>2. Information we collect</h2>
      <p>When you submit a project inquiry, we collect the information you choose to provide, which may include your name, email address, company or project name, project type, budget range, preferred timeline, preferred level of involvement, and the details you write about your idea.</p>
      <p>We also process limited technical information needed to operate and protect the site and intake system. This may include browser and device information, request origin, user agent, security logs, and network information. For intake rate limiting, our backend converts the requesting IP address into a one-way HMAC-derived value rather than storing the raw IP address in the inquiry record.</p>

      <h2>3. How we use information</h2>
      <p>We use information to review and respond to inquiries, understand potential projects, communicate with you, prevent abuse and duplicate submissions, protect our systems, maintain business records, improve the website, and comply with applicable law.</p>

      <h2>4. How information may be shared</h2>
      <p>We may disclose information to service providers that help us operate the website and business, such as hosting, database, DNS, security, infrastructure, and email providers. Current website infrastructure includes services from providers such as GitHub, Supabase, Cloudflare, Google Fonts, and our email provider. These providers may process technical or submitted information as necessary to provide their services.</p>
      <p>We may also disclose information when reasonably necessary to comply with law, protect rights or safety, investigate misuse, or in connection with a business reorganization or transfer. We do not currently sell personal information for money or share it for cross-context behavioral advertising.</p>

      <h2>5. Google Drive and Google user data</h2>
      <p>An authorized SRCcvde administrator may connect a SRCcvde-controlled Google account to the client platform so the platform can create, organize, retrieve, and archive project documents in Google Drive. The platform requests Google Drive access for this document-management and archival workflow.</p>
      <p>Google user data accessed through Google APIs is used only to provide and maintain this user-facing document workflow. SRCcvde does not use Google Workspace API data to train or improve generalized artificial-intelligence or machine-learning models, create AI-generated non-consensual intimate imagery, serve or personalize advertising, or sell Google user data.</p>
      <p>SRCcvde's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. OAuth credentials and refresh tokens are stored server-side with restricted access and are not exposed in the public website or client browser.</p>
      <p>You can revoke the Google connection from your Google Account permissions. SRCcvde administrators may also disconnect or replace the connected account. Revocation stops future API access; business records and documents already created or archived may be retained as otherwise described in this policy or required for legitimate business and legal purposes.</p>

      <h2>6. Cookies, storage, and tracking</h2>
      <p>SRCcvde does not currently use advertising cookies or third-party analytics cookies on this public website. The site may use browser session storage for basic navigation behavior, such as restoring a requested page after a GitHub Pages redirect. See our <a href="/cookies">Cookie &amp; Tracking Notice</a> for more detail.</p>
      <p>We do not currently engage in cross-site behavioral tracking. Because the site does not use cross-site advertising trackers, browser “Do Not Track” signals do not change the site's current behavior. Third-party infrastructure providers may receive ordinary technical requests when their resources or services are used.</p>

      <h2>7. Progressive web app and push notifications</h2>
      <p>The SRCcvde client platform may be installed as a progressive web app (PWA). To support installation, reliable navigation, and limited offline behavior, the platform may use a service worker and browser cache. Cached application files are functional copies of the app interface and are not used for advertising.</p>
      <p>If you choose to enable push notifications, SRCcvde may process a device-specific push subscription endpoint, browser-generated delivery keys, browser or device information, notification preferences, and records of notification consent or revocation. We use this information to deliver the categories of operational notifications you select, such as project, document, approval, message, billing, and security updates. Marketing notifications are a separate preference and are off by default.</p>
      <p>Push permission is optional. You can change notification categories in the SRCcvde platform, disable a subscribed device, or change notification permission in your browser or operating-system settings. Depending on your device settings, notification previews may appear on a lock screen. Push delivery also relies on browser, operating-system, and push-delivery infrastructure outside SRCcvde&apos;s direct control.</p>

      <h2>8. Retention</h2>
      <p>We retain project inquiries and related business records for as long as reasonably needed to evaluate the opportunity, communicate with you, maintain records, resolve disputes, protect our systems, or meet legal obligations. Retention periods may vary depending on whether an inquiry becomes a client project.</p>

      <h2>9. Your privacy choices and requests</h2>
      <p>You may contact us to ask to access, correct, or delete personal information that you submitted through this website. We may need to verify your identity before completing a request, and some information may be retained where permitted or required by law.</p>
      <p>If an applicable state privacy law gives you additional rights, we will process qualifying requests as required by that law. You may send requests to <a href="mailto:hello@srccvde.com?subject=Privacy%20Request">hello@srccvde.com</a>.</p>

      <h2>10. Security</h2>
      <p>We use reasonable technical and organizational safeguards appropriate to the information we handle. The public website does not receive direct database access to project inquiries; submissions pass through a protected server-side function with validation and anti-abuse controls. No internet system can be guaranteed completely secure.</p>

      <h2>11. Children</h2>
      <p>This website is intended for business and general audiences and is not directed to children under 13. We do not knowingly seek personal information from children under 13 through the project-intake form.</p>

      <h2>12. Changes to this policy</h2>
      <p>We may update this policy as the website, services, or legal requirements change. Material updates will be reflected by changing the “Last updated” date on this page and, when appropriate, by providing additional notice.</p>

      <h2>13. Contact</h2>
      <p>Privacy questions and requests can be sent to <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.</p>

      <div className="legal-note">This policy is written for SRCcvde's current public website and intake flow. It should be reviewed whenever analytics, advertising, customer accounts, payment processing, or other new data practices are added.</div>
    </PolicyLayout>
  )
}

function TermsPage() {
  return (
    <PolicyLayout
      eyebrow="Terms of Use"
      title="Website terms without the mystery."
      copy="These terms govern use of the public SRCcvde website. A client project is governed by its own signed proposal, agreement, or statement of work."
    >
      <h2>1. Acceptance of these terms</h2>
      <p>By using this website, you agree to these Terms of Use. If you do not agree, please do not use the site.</p>

      <h2>2. Informational website</h2>
      <p>The website describes SRCcvde, our general capabilities, process, and ways to contact us. Website content is provided for general informational purposes and may change without notice.</p>

      <h2>3. No client relationship or project agreement</h2>
      <p>Submitting a project inquiry, sending an email, scheduling a conversation, or discussing an idea does not by itself create a client relationship, reserve availability, establish a price, or create a binding obligation for either party. A project begins only when the applicable parties agree to written project terms.</p>

      <h2>4. Estimates and availability</h2>
      <p>Any general references to services, timing, or possible approaches on this website are not quotes or guarantees. Project scope, pricing, milestones, deliverables, ownership, support, and timing are determined for each engagement.</p>

      <h2>5. Intellectual property</h2>
      <p>The SRCcvde name, website design, text, graphics, brand elements, and other site content are owned by SRCcvde or used with permission and may not be copied, republished, or commercially exploited without permission except as allowed by law.</p>
      <p>Client ownership of custom project deliverables is not determined by these website terms. It is defined in the signed agreement for that project.</p>

      <h2>6. Information you submit</h2>
      <p>You represent that you have the right to provide the information and materials you submit to us. Do not submit passwords, payment-card information, government identification numbers, medical records, highly sensitive personal data, or third-party confidential information through the general project-intake form unless we specifically establish an appropriate method for doing so.</p>

      <h2>7. Acceptable use</h2>
      <p>You may not use this site to violate law, interfere with its operation, attempt unauthorized access, send malicious code, automate abusive submissions, scrape the site in a manner that materially burdens our systems, impersonate another person, or infringe the rights of SRCcvde or others.</p>

      <h2>8. Mobile and PWA access</h2>
      <p>The SRCcvde client platform may be installed or used as a progressive web app on supported devices and browsers. App files may update automatically when the platform is opened online. Availability and behavior can depend on the device, browser, operating system, network connection, and third-party infrastructure.</p>
      <p>You are responsible for reasonable security of devices used to access your account, including device locks and signing out on shared or lost devices. Limited application resources may remain in browser cache for reliability or offline behavior.</p>

      <h2>9. Notifications</h2>
      <p>Push notifications are optional and require device or browser permission. You may change notification categories or disable notifications for a device. Notifications are provided as a convenience and delivery is not guaranteed or instantaneous. Do not rely on push notifications as the sole method for contractual deadlines, payment obligations, legal notices, or urgent security matters. Notification previews may be visible to anyone who can view your device lock screen.</p>

      <h2>10. Third-party services and links</h2>
      <p>The website may depend on or link to third-party services. SRCcvde does not control those services and is not responsible for their independent terms, privacy practices, availability, or content.</p>

      <h2>11. Disclaimers</h2>
      <p>To the extent permitted by law, the public website is provided “as is” and “as available.” We do not promise that the site will always be uninterrupted, error-free, or free of harmful components, or that every piece of public content will remain current.</p>

      <h2>12. Limitation of liability</h2>
      <p>To the extent permitted by law, SRCcvde will not be liable for indirect, incidental, special, consequential, or punitive damages arising solely from use of, or inability to use, this public website. Nothing in these terms excludes liability that cannot legally be excluded.</p>

      <h2>13. Governing law</h2>
      <p>These website terms are governed by the laws of the State of Nevada, without regard to conflict-of-law rules. Subject to applicable law, disputes concerning these website terms may be brought in courts located in Clark County, Nevada.</p>

      <h2>14. Changes and contact</h2>
      <p>We may update these terms from time to time. The effective date shown on this page identifies the current version. Questions may be sent to <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.</p>

      <div className="legal-note">These are public website terms. Project contracts, payment terms, confidentiality obligations, warranties, support, and ownership rules should remain in SRCcvde's project-specific agreements.</div>
    </PolicyLayout>
  )
}

function CookiesPage() {
  return (
    <PolicyLayout
      eyebrow="Cookie & Tracking Notice"
      title="Very little tracking. That's intentional."
      copy="This notice explains the browser technologies currently used by the SRCcvde public website."
    >
      <h2>1. Cookies</h2>
      <p>SRCcvde does not currently set advertising cookies or analytics cookies on this public website. We do not currently use cookies to build advertising profiles or follow visitors across unrelated websites.</p>

      <h2>2. Browser storage</h2>
      <p>The site may use session storage for limited functional purposes. For example, when GitHub Pages routes a direct link through the site's fallback page, session storage may temporarily preserve the page you originally requested so the application can restore it. Session storage is generally cleared by the browser when the session ends.</p>

      <h2>3. PWA cache and push storage</h2>
      <p>The authenticated SRCcvde platform may use a service worker and browser cache to support PWA installation, reliable navigation, updates, and limited offline behavior. If you opt in to push notifications, the platform also stores your notification preferences and a device-specific push subscription needed for delivery. These technologies are functional and are not used to build advertising profiles.</p>

      <h2>4. Third-party technical requests</h2>
      <p>Some website resources or infrastructure are provided by third parties. For example, this site currently loads web fonts from Google Fonts and uses infrastructure or services from GitHub, Supabase, and Cloudflare. Those providers may receive ordinary connection information such as IP address, browser information, and request metadata under their own policies.</p>

      <h2>5. Future analytics or advertising</h2>
      <p>If SRCcvde later adds non-essential analytics, advertising technologies, or other tracking that materially changes these practices, this notice and the Privacy Policy will be updated. Where applicable law requires consent or an opt-out mechanism, we will implement the appropriate choice before using that technology.</p>

      <h2>6. Browser controls</h2>
      <p>You can use your browser settings to block or clear cookies and site storage. Blocking essential browser storage may affect some navigation behavior, but the current public site does not require advertising or analytics cookies to function.</p>

      <h2>7. Contact</h2>
      <p>Questions about website tracking can be sent to <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.</p>
    </PolicyLayout>
  )
}

function AccessibilityPage() {
  return (
    <PolicyLayout
      eyebrow="Accessibility"
      title="Technology should be usable."
      copy="Accessibility is part of the way SRCcvde wants to build—not an afterthought added at the end."
    >
      <h2>Our approach</h2>
      <p>SRCcvde aims to make this website usable across a range of devices, screen sizes, input methods, and assistive technologies. We use responsive layouts, keyboard-focus indicators, semantic page structure, readable contrast, reduced-motion support, and form labels as part of that work.</p>

      <h2>Standards</h2>
      <p>We use WCAG 2.2 Level AA as a design and testing target where reasonably applicable. This is a continuing goal rather than a claim that every page or third-party dependency is perfectly conformant at all times.</p>

      <h2>Need help or found a barrier?</h2>
      <p>If you have difficulty using any part of this site, tell us what page or feature caused the problem and, if comfortable, what device or assistive technology you were using. We will make a reasonable effort to provide the information or function through an accessible alternative and to address the underlying issue.</p>

      <h2>Contact</h2>
      <p>Email accessibility feedback to <a href="mailto:hello@srccvde.com?subject=Accessibility%20Feedback">hello@srccvde.com</a>.</p>
    </PolicyLayout>
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
    case '/privacy': return <PrivacyPage />
    case '/terms': return <TermsPage />
    case '/cookies': return <CookiesPage />
    case '/accessibility': return <AccessibilityPage />
    default: return <NotFoundPage />
  }
}
