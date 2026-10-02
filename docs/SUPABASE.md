# Supabase

SRCcvde Supabase project:

- Project ref: `pszxarjungpoqvbwoblf`
- API URL: `https://pszxarjungpoqvbwoblf.supabase.co`
- Region: `us-west-2`
- Status: `ACTIVE_HEALTHY`

## Environment variables

The web client expects:

```env
VITE_SUPABASE_URL=https://pszxarjungpoqvbwoblf.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=
```

Use the active Supabase publishable key in the browser deployment environment. Never expose database passwords, secret keys, or service-role credentials to the front end.

## Security baseline

- Public schema currently has no application tables.
- Security advisor reports no current issues.
- Performance advisor reports no current issues.
- Any future table in an exposed schema must use Row Level Security and explicit policies before browser access is enabled.

## Status

The SRCcvde Supabase account connection is verified and the repository is wired for the project. The publishable key is intentionally not committed to source control; it should be configured in the deployment environment when Cloudflare deployment is connected.
