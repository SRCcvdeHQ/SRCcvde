import { createContext, useContext, useEffect, useState } from "react";

export const RouteContext = createContext("/");

export const EMAIL = "hello@srccvde.com";
export const CLIENT_LOGIN = "https://app.srccvde.com";

const homeNav = [
  ["01", "Services", "#services"],
  ["02", "Process", "#process"],
  ["03", "Pricing", "#pricing"],
  ["04", "Work", "#work"],
  ["05", "About", "#about"],
  ["06", "FAQ", "#faq"],
] as const;

const pageNav = [
  ["01", "Home", "/"],
  ["02", "Services", "/services"],
  ["03", "Start a project", "/start"],
] as const;

export function Logo() {
  return (
    <a className="logo" href="/" aria-label="SRCcvde home">
      SRCcvde<span className="acc">.</span>
    </a>
  );
}

export function Header() {
  const path = useContext(RouteContext);
  const isHome = path === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const menuItems = isHome ? homeNav : pageNav;

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Logo />
        <nav aria-label="Primary" className="nav desk t-mono">
          {isHome
            ? homeNav.map(([n, label, href]) => (
                <a key={href} className="nv" href={href}>
                  <span className="n">{n}</span> {label}
                </a>
              ))
            : pageNav.slice(0, 2).map(([, label, href]) => (
                <a
                  key={href}
                  className="nv"
                  href={href}
                  aria-current={path === href ? "page" : undefined}
                >
                  {label}
                </a>
              ))}
        </nav>
        <div className="hdr-r">
          <a className="nv t-mono desk c-mute" href={CLIENT_LOGIN}>
            Client login
          </a>
          {path === "/start" ? (
            <a className="nv t-mono hcta" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          ) : (
            <a className="t-mono hcta" href="/start">
              Start a project <span aria-hidden="true">→</span>
            </a>
          )}
          <button
            className="mbtn t-mono"
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div
          className="menu"
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div
            className="wrap hdr-in"
            style={{ width: "100%", borderBottom: "1px solid var(--line)" }}
          >
            <Logo />
            <button
              className="mbtn t-mono"
              style={{ display: "inline-flex" }}
              type="button"
              onClick={close}
              autoFocus
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav aria-label="Menu" className="wrap menu-nav">
            {menuItems.map(([n, label, href], i) => (
              <a
                key={href}
                className="ml mi"
                href={href}
                onClick={close}
                style={{ animationDelay: `${0.04 * (i + 1)}s` }}
              >
                <span className="t-mono">{n}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="wrap mi menu-foot" style={{ animationDelay: ".32s" }}>
            {isHome && (
              <a className="btn t-mono" href="/start">
                Start a project{" "}
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
            )}
            <div className="menu-links t-mono">
              <a className="nv" href={CLIENT_LOGIN}>
                Client login
              </a>
              <a className="nv acc" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in t-mono">
        <span>© 2026 SRCcvde</span>
        <nav aria-label="Legal" className="ftr-links">
          <a className="nv" href="/privacy">
            Privacy
          </a>
          <a className="nv" href="/terms">
            Terms
          </a>
          <a className="nv" href="/cookies">
            Cookies
          </a>
          <a className="nv" href="/accessibility">
            Accessibility
          </a>
          <a className="nv" href={CLIENT_LOGIN}>
            Client login
          </a>
        </nav>
        <span>Las Vegas, NV</span>
      </div>
    </footer>
  );
}

function Grain() {
  return (
    <svg className="grain" aria-hidden="true">
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves={2}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

export function SiteFrame({
  children,
  footer = true,
}: {
  children: React.ReactNode;
  footer?: boolean;
}) {
  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Grain />
      <Header />
      <main id="main">{children}</main>
      {footer && <Footer />}
    </div>
  );
}
