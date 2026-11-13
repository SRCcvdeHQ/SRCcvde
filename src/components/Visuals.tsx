export function IdeaToReal() {
  const blocks = Array.from({ length: 6 }, (_, i) => <span key={i} />);
  return (
    <figure className="fig fd" style={{ animationDelay: "1s" }}>
      <div className="tk fig-frame" aria-hidden="true">
        <div className="fig-in">
          <div className="fig-layer idea">{blocks}</div>
          <div className="fig-layer real">{blocks}</div>
          <span className="scan" />
        </div>
      </div>
      <figcaption className="t-mono">
        <span>Fig. 01</span>
        <span>
          <span className="la">Idea</span> <span aria-hidden="true">→</span>{" "}
          <span className="lb acc">Real</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  children,
  small = false,
}: {
  small?: boolean;
  eyebrow: string;
  title: string;
  accent?: string;
  copy?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="wrap subhero">
      <p className="t-mono fd c-mute2" style={{ margin: "0 0 28px" }}>
        § {eyebrow}
      </p>
      <h1
        className={small ? "t-h2 fd m0" : "t-dis t-dis-sm fd m0"}
        style={{ animationDelay: ".08s" }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="serif acc">{accent}</span>
          </>
        )}
      </h1>
      {copy && (
        <p
          className="t-lead fd c-cream"
          style={{
            margin: "clamp(32px, 4vw, 56px) 0 0",
            maxWidth: 760,
            fontSize: "clamp(20px, 2vw, 28px)",
            animationDelay: ".16s",
          }}
        >
          {copy}
        </p>
      )}
      {children}
    </section>
  );
}
