import { SiteFrame } from "../components/Layout";

export function NotFoundPage() {
  return (
    <SiteFrame>
      <section className="wrap nf">
        <p className="t-mono m0 c-mute2">§ 404</p>
        <h1 className="t-h2 m0">
          This page never made it out of the{" "}
          <span className="serif acc">sketchbook.</span>
        </h1>
        <p className="t-body m0 c-mute">
          The link may have changed, or this page has not been built yet.
        </p>
        <a className="btn t-mono" href="/">
          Back home{" "}
          <span className="ar" aria-hidden="true">
            →
          </span>
        </a>
      </section>
    </SiteFrame>
  );
}
