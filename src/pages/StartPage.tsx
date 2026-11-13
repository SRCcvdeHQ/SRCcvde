import { useState } from "react";
import type { FormEvent } from "react";
import { submitProjectInquiry } from "../lib/inquiries";
import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";

// The intake backend validates these fields against its existing values, so the
// redesigned choices are mapped onto them. Everything else goes in `details`.
const types: [string, string][] = [
  ["Website", "Website"],
  ["Web app", "Web app"],
  ["PWA", "PWA"],
  ["E-commerce", "E-commerce"],
  ["Portal / dashboard", "Portal or dashboard"],
  ["Operations tool", "Operations / internal tool"],
  ["Not sure yet", "Not sure yet"],
];
const plans: [string, string][] = [
  ["Launch · $200", "$100–$300"],
  ["Members · $300", "$300–$500"],
  ["Commerce · $400", "$300–$500"],
  ["Complete · $500", "$500+"],
  ["Custom", "$500+"],
  ["Not sure", "Not sure yet"],
];
const timelines: [string, string][] = [
  ["As soon as possible", "1-2 weeks"],
  ["Within a month", "2-4 weeks"],
  ["In 1–3 months", "4-8 weeks"],
  ["Just exploring", "Flexible"],
];
const hostOpts = ["Yes", "No", "Not sure"];

function Chips({
  legend,
  hint,
  options,
  selected,
  onToggle,
}: {
  legend: string;
  hint: string;
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <fieldset className="fs">
      <legend className="t-mono">
        {legend} <span className="opt">· {hint}</span>
      </legend>
      <div className="chips">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className="chip"
            aria-pressed={selected.includes(o)}
            onClick={() => onToggle(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function StartPage() {
  const [picked, setPicked] = useState<string[]>([]);
  const [plan, setPlan] = useState<string | null>(null);
  const [host, setHost] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) || "").trim();
    const when = timelines.find(([l]) => l === get("timeline"));
    const extra = [
      picked.length > 1 && `Building: ${picked.join(", ")}`,
      plan && `Closest plan: ${plan}`,
      when && `Launch: ${when[0]}`,
      host && `Already has hosting: ${host}`,
      get("phone") && `Phone: ${get("phone")}`,
    ].filter(Boolean);

    setSubmitting(true);
    setError(false);
    setStatus("Sending your idea…");
    try {
      const result = await submitProjectInquiry({
        name: get("name"),
        email: get("email"),
        company: get("company"),
        project_type:
          types.find(([l]) => l === picked[0])?.[1] ?? "Not sure yet",
        budget_range: plans.find(([l]) => l === plan)?.[1] ?? "Not sure yet",
        timeline: when?.[1] ?? "Flexible",
        involvement: "Not sure yet",
        details: [
          get("details"),
          extra.length ? `\n— ${extra.join("\n— ")}` : "",
        ].join(""),
        website: get("website"),
      });
      setStatus(
        result.duplicate ? "We already have this one — you're all set." : "",
      );
      setSent(true);
    } catch (err) {
      setError(true);
      setStatus(
        err instanceof Error
          ? err.message
          : "Unable to send right now. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setSent(false);
    setPicked([]);
    setPlan(null);
    setHost(null);
    setStatus("");
  }

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Start a project"
        title="Tell us your"
        accent="idea."
        copy="A few questions, about two minutes. It doesn't need to be polished — bring it in whatever shape it's in."
      />
      <section
        className="wrap g12 s-top"
        style={{
          paddingBlock: "clamp(48px, 6vw, 96px) clamp(72px, 9vw, 140px)",
          alignItems: "start",
          rowGap: 56,
        }}
      >
        <aside className="sp4 stack" style={{ gap: 40 }}>
          <div>
            <h2
              className="t-mono c-mute2"
              style={{ margin: "0 0 16px", fontWeight: 400 }}
            >
              What happens next
            </h2>
            <ol className="steps">
              {[
                [
                  "We reply",
                  "In under 24 hours, with questions or a first take.",
                ],
                [
                  "We scope it",
                  "A clear scope and timeline, agreed before anything is confirmed.",
                ],
                [
                  "We build",
                  "Websites in 3–5 days, web apps in 5–7 — with progress in your client workspace.",
                ],
              ].map(([t, d], i) => (
                <li key={t}>
                  <span className="t-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="t-h3 t-h3s m0">{t}</p>
                  <p className="t-body m0 c-mute" style={{ fontSize: 16 }}>
                    {d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="box">
            <p className="t-mono m0 acc">Launch pricing</p>
            <p className="t-body m0 c-mute" style={{ fontSize: 16 }}>
              Plans from $200 for our first 10 clients, until all 10 spots are
              filled.
            </p>
          </div>
        </aside>

        <div className="form-col">
          {sent ? (
            <div className="sent" role="status">
              <p className="t-mono m0 acc">Received</p>
              <h2 className="t-h2 m0">
                Your idea is <span className="serif acc">in.</span>
              </h2>
              <p
                className="t-body m0 c-cream"
                style={{ fontSize: 20, maxWidth: 520 }}
              >
                {status ||
                  "Thank you. We'll reply in under 24 hours with next steps — and when you're ready, a clear scope and timeline."}
              </p>
              <div className="cta-row" style={{ marginTop: 8 }}>
                <a className="btn t-mono" href="/">
                  Back to home{" "}
                  <span className="ar" aria-hidden="true">
                    →
                  </span>
                </a>
                <button
                  className="nv t-mono linkbtn"
                  type="button"
                  onClick={reset}
                >
                  Send another idea
                </button>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={submit} aria-label="Project form">
              <div className="fgrid">
                <div className="fld">
                  <label className="t-mono" htmlFor="f-name">
                    Your name *
                  </label>
                  <input
                    className="inp"
                    id="f-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={120}
                    placeholder="First and last name"
                  />
                </div>
                <div className="fld">
                  <label className="t-mono" htmlFor="f-email">
                    Email *
                  </label>
                  <input
                    className="inp"
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@business.com"
                  />
                </div>
                <div className="fld">
                  <label className="t-mono" htmlFor="f-phone">
                    Phone <span className="opt">· Optional</span>
                  </label>
                  <input
                    className="inp"
                    id="f-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="(702) 555-0100"
                  />
                </div>
                <div className="fld">
                  <label className="t-mono" htmlFor="f-biz">
                    Business or project <span className="opt">· Optional</span>
                  </label>
                  <input
                    className="inp"
                    id="f-biz"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="What it's called, if it has a name"
                  />
                </div>
              </div>

              <Chips
                legend="What are you building?"
                hint="Choose any"
                options={types.map(([l]) => l)}
                selected={picked}
                onToggle={(t) =>
                  setPicked((cur) =>
                    cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t],
                  )
                }
              />
              <Chips
                legend="Which plan feels closest?"
                hint="Choose one"
                options={plans.map(([l]) => l)}
                selected={plan ? [plan] : []}
                onToggle={(p) => setPlan((cur) => (cur === p ? null : p))}
              />

              <div className="fld">
                <label className="t-mono" htmlFor="f-idea">
                  Tell us the idea *
                </label>
                <textarea
                  className="inp"
                  id="f-idea"
                  name="details"
                  required
                  minLength={20}
                  maxLength={4500}
                  placeholder="What it is, who it's for, and what it should do."
                />
              </div>

              <div className="fgrid">
                <div className="fld">
                  <label className="t-mono" htmlFor="f-when">
                    When would you like to launch?
                  </label>
                  <select
                    className="inp"
                    id="f-when"
                    name="timeline"
                    defaultValue="Just exploring"
                  >
                    {timelines.map(([l]) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <Chips
                  legend="Already have hosting?"
                  hint="Optional"
                  options={hostOpts}
                  selected={host ? [host] : []}
                  onToggle={(h) => setHost((cur) => (cur === h ? null : h))}
                />
              </div>

              <div className="hp" aria-hidden="true">
                <label htmlFor="f-website">Website</label>
                <input
                  id="f-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="form-foot">
                <button
                  className="btn t-mono"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send my idea"}{" "}
                  <span className="ar" aria-hidden="true">
                    →
                  </span>
                </button>
                <p
                  className="t-body m0 c-mute2"
                  style={{ fontSize: 15, maxWidth: 360 }}
                >
                  By sending, you agree to our{" "}
                  <a href="/privacy">Privacy Policy</a>. Sending this doesn't
                  create a contract or commitment.
                </p>
              </div>
              <p
                className={`status t-body${error ? " err" : ""}`}
                role="status"
              >
                {status}
              </p>
            </form>
          )}
        </div>
      </section>
    </SiteFrame>
  );
}
