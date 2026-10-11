export function IdeaVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "idea-visual compact" : "idea-visual"}
      aria-hidden="true"
    >
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
  );
}

export function InterfaceVisual() {
  return (
    <div className="interface-visual" aria-hidden="true">
      <div className="window-bar">
        <span />
        <span />
        <span />
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
          <div className="interface-topline">
            <span>Project status</span>
            <strong>In motion</strong>
          </div>
          <div className="metric-row">
            <div>
              <small>idea</small>
              <b>01</b>
            </div>
            <div>
              <small>systems</small>
              <b>04</b>
            </div>
            <div>
              <small>owner</small>
              <b>you</b>
            </div>
          </div>
          <div className="signal-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  visual = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  visual?: boolean;
}) {
  return (
    <section className="page-hero shell">
      <div>
        <p className="section-label">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      {visual ? (
        <IdeaVisual compact />
      ) : (
        <span className="page-index" aria-hidden="true">
          SRC / cvde
        </span>
      )}
    </section>
  );
}
