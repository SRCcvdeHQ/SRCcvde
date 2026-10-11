# Cloudflare Pages migration

Project: `srccvde-site`; build command `npm ci && npm run build`; output `dist`. Wrangler is pinned in the lockfile. The Pages Function `/api/inquiry` is the only dynamic route. `_routes.json` keeps static requests out of Functions. Generated `_headers` includes the hash for inline structured data.

## Review and release sequence

1. Review both website and workspace PRs. Keep GitHub Pages/DNS unchanged during preparation. Save the existing DNS records and deployment identifiers for rollback.
2. Create separate staging Supabase/Pages environments. Verify the database baseline and new migration using synthetic users, storage objects, signing requests, invoices, and sandbox PayPal. Never point preview intake at the production database by default.
3. Provision `srccvde-site` as a direct-upload Pages project. Configure server bindings `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, and encrypted `INTAKE_GATEWAY_SECRET`. The same gateway secret must exist in the Supabase intake function. Configure a separate encrypted Supabase `INTAKE_HASH_SECRET`. Generate independent random secrets; do not commit them or place them in `VITE_` variables.
4. Back up the production database. Apply only the new workspace security migration to the existing database after reviewing current migration history. See the workspace release instructions; old migrations are not a fresh-install recipe.
5. Deploy the workspace MFA screen and protected Edge Functions together with the migration, then the intake function and website gateway together. If the intake endpoint switches first, the old website form will stop submitting; use a short planned release window with the email fallback available.
6. Use `cloudflare-production` environment approvals. Configure GitHub environment variable `CLOUDFLARE_ACCOUNT_ID` and encrypted `CLOUDFLARE_API_TOKEN` with Pages-edit access scoped to the account. Run the manual deployment workflow from `main` only. Do not deploy the review branch to production.
7. Attach `srccvde.com` and `www.srccvde.com` in Pages. Review domain validation and DNS targets before updating existing GitHub Pages records. Canonical domain is `https://srccvde.com`; add a Cloudflare redirect from `www` to apex. Preserve unrelated mail/TXT records.
8. Verify HTTPS, all direct routes, real 404s, CSP/no-framing headers, static fonts, metadata/share image, mobile navigation, and one authorized production intake with a retry. Confirm it creates one lead. Verify client and staff access, MFA recovery, document downloads, signing, sandbox billing, and notification delivery before considering the release complete.

## Rollback

Keep the prior hosting deployment until verification finishes. A DNS rollback alone cannot restore the old direct-to-Supabase form after gateway enforcement: deploy a gateway-compatible site or revert the intake function/config together. Do not remove suspension/MFA database guards to restore convenience; roll back incompatible frontend code with a compatible MFA build. Any migration rollback needs a reviewed inverse migration and backup, rather than replaying the baseline against production.

## Boundaries

No production DNS, secret, auth setting, or database migration is applied by this PR. Preview domains are marked `noindex`; preview intake should use staging bindings or stay unconfigured (503). CSP permits inline styles used by React but restricts scripts to self and an exact structured-data hash. Header rules do not automatically cover Pages Function responses; the gateway adds its own security/no-store headers.
