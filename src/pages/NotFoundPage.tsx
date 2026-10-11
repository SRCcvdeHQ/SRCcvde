import { SiteFrame } from "../components/Layout";

export function NotFoundPage() {
  return (
    <SiteFrame>
      <section className="not-found shell">
        <p className="section-label">404</p>
        <h1>This page never made it out of the sketchbook.</h1>
        <p>The link may have changed, or this page has not been built yet.</p>
        <a className="button button-tan" href="/">
          Back home <span>↗</span>
        </a>
      </section>
    </SiteFrame>
  );
}
