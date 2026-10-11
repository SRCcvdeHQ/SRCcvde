import { SiteFrame } from "../components/Layout";
import { PageHero } from "../components/Visuals";
import { services } from "../content";

export function PolicyLayout({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <SiteFrame>
      <PageHero eyebrow={eyebrow} title={title} copy={copy} />
      <section className="section shell legal-layout">
        <aside className="legal-aside">
          <p className="section-label">Policy information</p>
          <strong>Effective October 2, 2026</strong>
          <span>Last updated October 2, 2026</span>
          <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>
        </aside>
        <article className="legal-copy">{children}</article>
      </section>
    </SiteFrame>
  );
}

export function PrivacyPage() {
  return (
    <PolicyLayout
      eyebrow="Privacy Policy"
      title="Privacy, in plain language."
      copy="This policy explains what information SRCcvde collects through this website, why we use it, how it may be shared, and the choices available to you."
    >
      <h2>1. Scope</h2>
      <p>
        This Privacy Policy applies to srccvde.com, app.srccvde.com, the public
        SRCcvde project-intake experience, and SRCcvde's client and project
        platform. It does not replace privacy, confidentiality, or
        data-processing terms that may apply to a signed client project.
      </p>

      <h2>2. Information we collect</h2>
      <p>
        When you submit a project inquiry, we collect the information you choose
        to provide, which may include your name, email address, company or
        project name, project type, budget range, preferred timeline, preferred
        level of involvement, and the details you write about your idea.
      </p>
      <p>
        We also process limited technical information needed to operate and
        protect the site and intake system. This may include browser and device
        information, request origin, user agent, security logs, and network
        information. For intake rate limiting, our backend converts the
        requesting IP address into a one-way HMAC-derived value rather than
        storing the raw IP address in the inquiry record.
      </p>

      <h2>3. How we use information</h2>
      <p>
        We use information to review and respond to inquiries, understand
        potential projects, communicate with you, prevent abuse and duplicate
        submissions, protect our systems, maintain business records, improve the
        website, and comply with applicable law.
      </p>

      <h2>4. How information may be shared</h2>
      <p>
        We may disclose information to service providers that help us operate
        the website and business, such as hosting, database, DNS, security,
        infrastructure, and email providers. Current website infrastructure
        includes services from providers such as GitHub, Supabase, Cloudflare,
        Google Fonts, and our email provider. These providers may process
        technical or submitted information as necessary to provide their
        services.
      </p>
      <p>
        We may also disclose information when reasonably necessary to comply
        with law, protect rights or safety, investigate misuse, or in connection
        with a business reorganization or transfer. We do not currently sell
        personal information for money or share it for cross-context behavioral
        advertising.
      </p>

      <h2>5. Google Drive and Google user data</h2>
      <p>
        An authorized SRCcvde administrator may connect a SRCcvde-controlled
        Google account to the client platform so the platform can create,
        organize, retrieve, and archive project documents in Google Drive. The
        platform requests Google Drive access for this document-management and
        archival workflow.
      </p>
      <p>
        Google user data accessed through Google APIs is used only to provide
        and maintain this user-facing document workflow. SRCcvde does not use
        Google Workspace API data to train or improve generalized
        artificial-intelligence or machine-learning models, create AI-generated
        non-consensual intimate imagery, serve or personalize advertising, or
        sell Google user data.
      </p>
      <p>
        SRCcvde's use and transfer of information received from Google APIs
        adheres to the Google API Services User Data Policy, including the
        Limited Use requirements. OAuth credentials and refresh tokens are
        stored server-side with restricted access and are not exposed in the
        public website or client browser.
      </p>
      <p>
        You can revoke the Google connection from your Google Account
        permissions. SRCcvde administrators may also disconnect or replace the
        connected account. Revocation stops future API access; business records
        and documents already created or archived may be retained as otherwise
        described in this policy or required for legitimate business and legal
        purposes.
      </p>

      <h2>6. Cookies, storage, and tracking</h2>
      <p>
        SRCcvde does not currently use advertising cookies or third-party
        analytics cookies on this public website. The site may use browser
        session storage for basic navigation behavior, such as restoring a
        requested page after a GitHub Pages redirect. See our{" "}
        <a href="/cookies">Cookie &amp; Tracking Notice</a> for more detail.
      </p>
      <p>
        We do not currently engage in cross-site behavioral tracking. Because
        the site does not use cross-site advertising trackers, browser “Do Not
        Track” signals do not change the site's current behavior. Third-party
        infrastructure providers may receive ordinary technical requests when
        their resources or services are used.
      </p>

      <h2>7. Progressive web app and push notifications</h2>
      <p>
        The SRCcvde client platform may be installed as a progressive web app
        (PWA). To support installation, reliable navigation, and limited offline
        behavior, the platform may use a service worker and browser cache.
        Cached application files are functional copies of the app interface and
        are not used for advertising.
      </p>
      <p>
        If you choose to enable push notifications, SRCcvde may process a
        device-specific push subscription endpoint, browser-generated delivery
        keys, browser or device information, notification preferences, and
        records of notification consent or revocation. We use this information
        to deliver the categories of operational notifications you select, such
        as project, document, approval, message, billing, and security updates.
        Marketing notifications are a separate preference and are off by
        default.
      </p>
      <p>
        Push permission is optional. You can change notification categories in
        the SRCcvde platform, disable a subscribed device, or change
        notification permission in your browser or operating-system settings.
        Depending on your device settings, notification previews may appear on a
        lock screen. Push delivery also relies on browser, operating-system, and
        push-delivery infrastructure outside SRCcvde&apos;s direct control.
      </p>

      <h2>8. Retention</h2>
      <p>
        We retain project inquiries and related business records for as long as
        reasonably needed to evaluate the opportunity, communicate with you,
        maintain records, resolve disputes, protect our systems, or meet legal
        obligations. Retention periods may vary depending on whether an inquiry
        becomes a client project.
      </p>

      <h2>9. Your privacy choices and requests</h2>
      <p>
        You may contact us to ask to access, correct, or delete personal
        information that you submitted through this website. We may need to
        verify your identity before completing a request, and some information
        may be retained where permitted or required by law.
      </p>
      <p>
        If an applicable state privacy law gives you additional rights, we will
        process qualifying requests as required by that law. You may send
        requests to{" "}
        <a href="mailto:hello@srccvde.com?subject=Privacy%20Request">
          hello@srccvde.com
        </a>
        .
      </p>

      <h2>10. Security</h2>
      <p>
        We use reasonable technical and organizational safeguards appropriate to
        the information we handle. The public website does not receive direct
        database access to project inquiries; submissions pass through a
        protected server-side function with validation and anti-abuse controls.
        No internet system can be guaranteed completely secure.
      </p>

      <h2>11. Children</h2>
      <p>
        This website is intended for business and general audiences and is not
        directed to children under 13. We do not knowingly seek personal
        information from children under 13 through the project-intake form.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this policy as the website, services, or legal
        requirements change. Material updates will be reflected by changing the
        “Last updated” date on this page and, when appropriate, by providing
        additional notice.
      </p>

      <h2>13. Contact</h2>
      <p>
        Privacy questions and requests can be sent to{" "}
        <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.
      </p>

      <div className="legal-note">
        This policy is written for SRCcvde's current public website and intake
        flow. It should be reviewed whenever analytics, advertising, customer
        accounts, payment processing, or other new data practices are added.
      </div>
    </PolicyLayout>
  );
}

export function TermsPage() {
  return (
    <PolicyLayout
      eyebrow="Terms of Use"
      title="Website terms without the mystery."
      copy="These terms govern use of the public SRCcvde website. A client project is governed by its own signed proposal, agreement, or statement of work."
    >
      <h2>1. Acceptance of these terms</h2>
      <p>
        By using this website, you agree to these Terms of Use. If you do not
        agree, please do not use the site.
      </p>

      <h2>2. Informational website</h2>
      <p>
        The website describes SRCcvde, our general capabilities, process, and
        ways to contact us. Website content is provided for general
        informational purposes and may change without notice.
      </p>

      <h2>3. No client relationship or project agreement</h2>
      <p>
        Submitting a project inquiry, sending an email, scheduling a
        conversation, or discussing an idea does not by itself create a client
        relationship, reserve availability, establish a price, or create a
        binding obligation for either party. A project begins only when the
        applicable parties agree to written project terms.
      </p>

      <h2>4. Estimates and availability</h2>
      <p>
        Any general references to services, timing, or possible approaches on
        this website are not quotes or guarantees. Project scope, pricing,
        milestones, deliverables, ownership, support, and timing are determined
        for each engagement.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The SRCcvde name, website design, text, graphics, brand elements, and
        other site content are owned by SRCcvde or used with permission and may
        not be copied, republished, or commercially exploited without permission
        except as allowed by law.
      </p>
      <p>
        Client ownership of custom project deliverables is not determined by
        these website terms. It is defined in the signed agreement for that
        project.
      </p>

      <h2>6. Information you submit</h2>
      <p>
        You represent that you have the right to provide the information and
        materials you submit to us. Do not submit passwords, payment-card
        information, government identification numbers, medical records, highly
        sensitive personal data, or third-party confidential information through
        the general project-intake form unless we specifically establish an
        appropriate method for doing so.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        You may not use this site to violate law, interfere with its operation,
        attempt unauthorized access, send malicious code, automate abusive
        submissions, scrape the site in a manner that materially burdens our
        systems, impersonate another person, or infringe the rights of SRCcvde
        or others.
      </p>

      <h2>8. Mobile and PWA access</h2>
      <p>
        The SRCcvde client platform may be installed or used as a progressive
        web app on supported devices and browsers. App files may update
        automatically when the platform is opened online. Availability and
        behavior can depend on the device, browser, operating system, network
        connection, and third-party infrastructure.
      </p>
      <p>
        You are responsible for reasonable security of devices used to access
        your account, including device locks and signing out on shared or lost
        devices. Limited application resources may remain in browser cache for
        reliability or offline behavior.
      </p>

      <h2>9. Notifications</h2>
      <p>
        Push notifications are optional and require device or browser
        permission. You may change notification categories or disable
        notifications for a device. Notifications are provided as a convenience
        and delivery is not guaranteed or instantaneous. Do not rely on push
        notifications as the sole method for contractual deadlines, payment
        obligations, legal notices, or urgent security matters. Notification
        previews may be visible to anyone who can view your device lock screen.
      </p>

      <h2>10. Third-party services and links</h2>
      <p>
        The website may depend on or link to third-party services. SRCcvde does
        not control those services and is not responsible for their independent
        terms, privacy practices, availability, or content.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        To the extent permitted by law, the public website is provided “as is”
        and “as available.” We do not promise that the site will always be
        uninterrupted, error-free, or free of harmful components, or that every
        piece of public content will remain current.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the extent permitted by law, SRCcvde will not be liable for indirect,
        incidental, special, consequential, or punitive damages arising solely
        from use of, or inability to use, this public website. Nothing in these
        terms excludes liability that cannot legally be excluded.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These website terms are governed by the laws of the State of Nevada,
        without regard to conflict-of-law rules. Subject to applicable law,
        disputes concerning these website terms may be brought in courts located
        in Clark County, Nevada.
      </p>

      <h2>14. Changes and contact</h2>
      <p>
        We may update these terms from time to time. The effective date shown on
        this page identifies the current version. Questions may be sent to{" "}
        <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.
      </p>

      <div className="legal-note">
        These are public website terms. Project contracts, payment terms,
        confidentiality obligations, warranties, support, and ownership rules
        should remain in SRCcvde's project-specific agreements.
      </div>
    </PolicyLayout>
  );
}

export function CookiesPage() {
  return (
    <PolicyLayout
      eyebrow="Cookie & Tracking Notice"
      title="Very little tracking. That's intentional."
      copy="This notice explains the browser technologies currently used by the SRCcvde public website."
    >
      <h2>1. Cookies</h2>
      <p>
        SRCcvde does not currently set advertising cookies or analytics cookies
        on this public website. We do not currently use cookies to build
        advertising profiles or follow visitors across unrelated websites.
      </p>

      <h2>2. Browser storage</h2>
      <p>
        The site may use session storage for limited functional purposes. For
        example, when GitHub Pages routes a direct link through the site's
        fallback page, session storage may temporarily preserve the page you
        originally requested so the application can restore it. Session storage
        is generally cleared by the browser when the session ends.
      </p>

      <h2>3. PWA cache and push storage</h2>
      <p>
        The authenticated SRCcvde platform may use a service worker and browser
        cache to support PWA installation, reliable navigation, updates, and
        limited offline behavior. If you opt in to push notifications, the
        platform also stores your notification preferences and a device-specific
        push subscription needed for delivery. These technologies are functional
        and are not used to build advertising profiles.
      </p>

      <h2>4. Third-party technical requests</h2>
      <p>
        Some website resources or infrastructure are provided by third parties.
        For example, this site currently loads web fonts from Google Fonts and
        uses infrastructure or services from GitHub, Supabase, and Cloudflare.
        Those providers may receive ordinary connection information such as IP
        address, browser information, and request metadata under their own
        policies.
      </p>

      <h2>5. Future analytics or advertising</h2>
      <p>
        If SRCcvde later adds non-essential analytics, advertising technologies,
        or other tracking that materially changes these practices, this notice
        and the Privacy Policy will be updated. Where applicable law requires
        consent or an opt-out mechanism, we will implement the appropriate
        choice before using that technology.
      </p>

      <h2>6. Browser controls</h2>
      <p>
        You can use your browser settings to block or clear cookies and site
        storage. Blocking essential browser storage may affect some navigation
        behavior, but the current public site does not require advertising or
        analytics cookies to function.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about website tracking can be sent to{" "}
        <a href="mailto:hello@srccvde.com">hello@srccvde.com</a>.
      </p>
    </PolicyLayout>
  );
}

export function AccessibilityPage() {
  return (
    <PolicyLayout
      eyebrow="Accessibility"
      title="Technology should be usable."
      copy="Accessibility is part of the way SRCcvde wants to build—not an afterthought added at the end."
    >
      <h2>Our approach</h2>
      <p>
        SRCcvde aims to make this website usable across a range of devices,
        screen sizes, input methods, and assistive technologies. We use
        responsive layouts, keyboard-focus indicators, semantic page structure,
        readable contrast, reduced-motion support, and form labels as part of
        that work.
      </p>

      <h2>Standards</h2>
      <p>
        We use WCAG 2.2 Level AA as a design and testing target where reasonably
        applicable. This is a continuing goal rather than a claim that every
        page or third-party dependency is perfectly conformant at all times.
      </p>

      <h2>Need help or found a barrier?</h2>
      <p>
        If you have difficulty using any part of this site, tell us what page or
        feature caused the problem and, if comfortable, what device or assistive
        technology you were using. We will make a reasonable effort to provide
        the information or function through an accessible alternative and to
        address the underlying issue.
      </p>

      <h2>Contact</h2>
      <p>
        Email accessibility feedback to{" "}
        <a href="mailto:hello@srccvde.com?subject=Accessibility%20Feedback">
          hello@srccvde.com
        </a>
        .
      </p>
    </PolicyLayout>
  );
}
