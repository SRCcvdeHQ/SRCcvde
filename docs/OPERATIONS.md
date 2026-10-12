# Website operations

Run `npm run check:live` for the seven production probes: public home/services, real public 404, workspace home/billing deep links, `www` path/query redirection, and rejection of an empty inquiry. These checks do not sign in or create leads. Investigate a failing probe before changing hosting or relaxing security.

The production workflow runs the existing browser suite before upload, checks that deployment credentials are configured, and probes production after upload. Configure `CLOUDFLARE_ACCOUNT_ID` and the encrypted, account-scoped Pages-edit `CLOUDFLARE_API_TOKEN` in the `cloudflare-production` GitHub environment. The current connector cannot manage these secrets; secure owner setup is still required. A failing postdeployment probe does not automatically roll back.

On October 11 the Cloudflare zone's dynamic redirect phase had no entrypoint. A new ruleset `6d8171da7f2c4f9282d9d7c54d7903cf` was created with a single `www.srccvde.com` to `srccvde.com` 308 rule, preserving paths and query strings. Existing managed rulesets were preserved. Before changing this rule, read the current entrypoint and modify only the intended rule rather than replacing the entire ruleset.

Hourly Codex monitoring is enabled and stays quiet while healthy. Its execution depends on the local host being available. Independent hosted monitoring and provider error alerts remain to be configured.

See the workspace repository's `docs/OPERATIONS.md` for MFA recovery, separate staging, backup limitations, and provider workflow checks. No complete offsite restore-tested backup has been established yet.
