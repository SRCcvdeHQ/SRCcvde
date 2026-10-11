import { useState } from "react";
import type { FormEvent } from "react";
import { submitProjectInquiry } from "../lib/inquiries";
import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";
import { steps } from "../content";

export function StartPage() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setStatus("Sending your project brief…");

    try {
      const result = await submitProjectInquiry({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        company: String(data.get("company") || ""),
        project_type: String(data.get("project") || ""),
        budget_range: String(data.get("budget") || "Not sure yet"),
        timeline: String(data.get("timeline") || "Flexible"),
        involvement: String(data.get("involvement") || "Collaborative"),
        details: String(data.get("details") || ""),
        website: String(data.get("website") || ""),
      });

      form.reset();
      setStatus(
        result.duplicate
          ? "We already received this project brief. You’re all set."
          : "Received. We’ll review your idea and follow up by email.",
      );
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to submit right now. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Start a project"
        title="Tell us what you dreamt."
        copy="You do not need a scope document, wireframes, or the technical words. Start with what you want to make possible."
      />
      <section className="section shell intake-layout">
        <aside className="intake-aside">
          <p className="section-label">Before you start</p>
          <h2>A rough idea is enough.</h2>
          <p>
            We use this first note to understand the shape of the project. It is
            not a contract, quote, or commitment.
          </p>
          <div className="next-steps">
            <span>What happens next</span>
            <ol>
              <li>
                <b>We read it.</b>
                <small>
                  Your brief is reviewed by a human, not scored by an automated
                  sales funnel.
                </small>
              </li>
              <li>
                <b>We follow up.</b>
                <small>
                  We will ask the questions needed to understand the problem,
                  fit, and responsible first version.
                </small>
              </li>
              <li>
                <b>Then we scope it.</b>
                <small>
                  If it looks like a fit, we move into discovery before any
                  project commitment.
                </small>
              </li>
            </ol>
          </div>
          <div className="contact-note">
            <span>Prefer email?</span>
            <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>
          </div>
        </aside>

        <form className="intake-form" onSubmit={submit}>
          <div className="field-row">
            <label>
              <span>Your name *</span>
              <input
                name="name"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
              />
            </label>
            <label>
              <span>Email *</span>
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
              />
            </label>
          </div>
          <label>
            <span>Company or project name</span>
            <input name="company" maxLength={160} autoComplete="organization" />
          </label>
          <label>
            <span>What are you looking to build? *</span>
            <select name="project" required defaultValue="">
              <option value="" disabled>
                Choose the closest fit
              </option>
              <option>Website</option>
              <option>Web app</option>
              <option>PWA</option>
              <option>E-commerce</option>
              <option>Portal or dashboard</option>
              <option>Operations / internal tool</option>
              <option>Not sure yet</option>
              <option>Something else</option>
            </select>
          </label>
          <div className="field-row">
            <label>
              <span>Approximate budget</span>
              <select name="budget" defaultValue="Not sure yet">
                <option>Not sure yet</option>
                <option>Under $100</option>
                <option>$100–$300</option>
                <option>$300–$500</option>
                <option>$500+</option>
              </select>
            </label>
            <label>
              <span>Ideal timeline</span>
              <select name="timeline" defaultValue="Flexible">
                <option>Flexible</option>
                <option>1-2 weeks</option>
                <option>2-4 weeks</option>
                <option>4-8 weeks</option>
                <option>8+ weeks</option>
              </select>
            </label>
          </div>
          <label>
            <span>How involved do you want to be?</span>
            <select name="involvement" defaultValue="Collaborative">
              <option>Hands-off</option>
              <option>Collaborative</option>
              <option>Very involved</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            <span>Tell us about the idea *</span>
            <textarea
              name="details"
              rows={8}
              minLength={20}
              maxLength={5000}
              required
              placeholder="What should exist when we're finished? Who is it for? What problem are you trying to solve?"
            />
          </label>
          <label className="hp-field" aria-hidden="true">
            <span>Website</span>
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="form-footer">
            <p>
              Your project brief is sent securely to SRCcvde and stored for
              follow-up. Submitting this form does not create a contract or
              commitment.
            </p>
            <button
              className="button button-tan"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send project brief"} <span>↗</span>
            </button>
          </div>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
      </section>
    </SiteFrame>
  );
}
