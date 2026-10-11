import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";
import { FinalCta } from "../components/Layout";
import { steps } from "../content";

export function ProcessPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Process"
        title="You never have to wonder what happens next."
        copy="A clear process protects the idea, the budget, and the relationship. You can be deeply involved or let us carry the technical weight."
      />
      <section className="section shell">
        <div className="timeline">
          {steps.map(([title, copy], index) => (
            <article className="timeline-step" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>
      <section className="section-band collaboration">
        <div className="shell split-copy">
          <div>
            <p className="section-label">Collaboration</p>
            <h2>Your level of involvement is yours to choose.</h2>
          </div>
          <div>
            <p>
              Some clients want every prototype and technical decision. Others
              want a clear checkpoint and a finished result. Both are valid.
            </p>
            <p>
              We explain tradeoffs in plain language, document important
              decisions, and keep scope visible as the project changes.
            </p>
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  );
}
