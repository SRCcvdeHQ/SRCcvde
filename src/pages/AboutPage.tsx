import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";
import { FinalCta } from "../components/Layout";

export function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About"
        title="Technology with a human on the other side."
        copy="SRCcvde exists for people who have an idea but do not necessarily speak developer — and for teams that simply want a better way to build."
        visual
      />
      <section className="section shell">
        <div className="about-story">
          <p className="section-label">What matters here</p>
          <div>
            <h2>Listen first. Build clearly. Hand over the keys.</h2>
            <p className="large-copy">
              We want clients to feel like part of the build, not passengers
              waiting for a mysterious technical team to return with something
              they barely recognize.
            </p>
          </div>
        </div>
        <div className="founder-note">
          <span>Founder-led · Small by design</span>
          <p>
            You work with the people responsible for the decisions and the
            build—not through layers of account management.
          </p>
        </div>
        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>Accessible</h3>
            <p>
              We explain technology in normal language and meet people where
              they are.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Custom</h3>
            <p>
              The work starts with your problem and your users, not a
              pre-selected template.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Responsible</h3>
            <p>
              We care about security, maintainability, scope, performance, and
              what happens after launch.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Yours</h3>
            <p>
              Once the agreed project is paid in full, ownership transfers
              cleanly to you.
            </p>
          </article>
        </div>
      </section>
      <section className="section-band location-band">
        <div className="shell split-copy">
          <div>
            <p className="section-label">Where we work</p>
            <h2>
              Las Vegas born.
              <br />
              U.S. wide.
            </h2>
          </div>
          <div>
            <p>
              We can work in person across the Las Vegas valley and remotely
              with clients throughout the United States.
            </p>
            <p>
              The goal is the same either way: a relationship that still feels
              close enough to call your developer.
            </p>
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteFrame>
  );
}
