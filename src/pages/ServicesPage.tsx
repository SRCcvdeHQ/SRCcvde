import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";
import { FinalCta } from "../components/Layout";
import { services } from "../content";

export function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Services"
        title="Built around the job, not a template."
        copy="Every SRCcvde project is custom. These are the kinds of digital products we build — not boxes you have to squeeze your idea into."
        visual
      />
      <section className="section shell">
        <div className="service-detail-list">
          {services.map(([number, title, copy, examples]) => (
            <article className="service-detail" key={title}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
              <small>{examples}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="section-band principle">
        <div className="shell principle-grid">
          <p className="section-label">Our rule</p>
          <h2>
            If a simpler solution is the right solution, we will tell you.
          </h2>
          <p>
            Custom does not mean complicated for the sake of it. The goal is the
            right technology, responsibly scoped.
          </p>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  );
}
