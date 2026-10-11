import { createContext, useContext, useEffect, useRef, useState } from "react";
export const RouteContext = createContext("/");
import { services } from "../content";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={footer ? "brand footer-brand" : "brand"}
      href="/"
      aria-label="SRCcvde home"
    >
      <span>SRC</span>cvde
      <i aria-hidden="true" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  const current = useContext(RouteContext);
  const navClass = (href: string) =>
    current === href ? "is-current" : undefined;

  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Main navigation">
        <Logo />

        <div className="nav-links">
          <a
            className={navClass("/services")}
            aria-current={current === "/services" ? "page" : undefined}
            href="/services"
          >
            Services
          </a>
          <a
            className={navClass("/process")}
            aria-current={current === "/process" ? "page" : undefined}
            href="/process"
          >
            Process
          </a>
          <a
            className={navClass("/work")}
            aria-current={current === "/work" ? "page" : undefined}
            href="/work"
          >
            Work
          </a>
          <a
            className={navClass("/about")}
            aria-current={current === "/about" ? "page" : undefined}
            href="/about"
          >
            About
          </a>
        </div>

        <div className="nav-actions">
          <a className="nav-login" href="https://app.srccvde.com">
            Client login
          </a>
          <a className="nav-cta" href="/start">
            Start a project
          </a>
        </div>

        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={open ? "mobile-nav is-open" : "mobile-nav"}
        aria-hidden={!open}
      >
        <div className="shell mobile-nav-inner">
          <a
            className={navClass("/services")}
            aria-current={current === "/services" ? "page" : undefined}
            href="/services"
          >
            Services
          </a>
          <a
            className={navClass("/process")}
            aria-current={current === "/process" ? "page" : undefined}
            href="/process"
          >
            Process
          </a>
          <a
            className={navClass("/work")}
            aria-current={current === "/work" ? "page" : undefined}
            href="/work"
          >
            Work
          </a>
          <a
            className={navClass("/about")}
            aria-current={current === "/about" ? "page" : undefined}
            href="/about"
          >
            About
          </a>
          <a href="https://app.srccvde.com">Client login</a>
          <a className="mobile-start" href="/start">
            Start a project ↗
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
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
          <a href="https://app.srccvde.com">Client login</a>
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
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta section-band">
      <div className="shell final-cta-inner">
        <p className="section-label">Your turn</p>
        <h2>What did you dream?</h2>
        <p>
          You do not need a scope document. You do not need the technical words.
          Start with the idea.
        </p>
        <a className="button button-tan final-button" href="/start">
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
