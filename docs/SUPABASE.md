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

The browser uses only the active Supabase publishable key. Never expose database passwords, secret keys, or service-role credentials to the front end.

## Project intake

The public Start a Project form submits to the Supabase Edge Function:

- `submit-project-inquiry`

The function validates the request before writing to:

- `public.project_inquiries`

The intake database stores contact details, project type, budget range, timeline, preferred involvement, project details, workflow status, and limited anti-abuse request metadata.

## Security baseline

- Row Level Security is enabled on `public.project_inquiries`.
- No public RLS policies are intentionally defined for the intake table.
- Browser roles have no direct table privileges.
- Public submissions must pass through the Edge Function.
- The Edge Function validates the allowed site origin and active publishable key.
- The function performs server-side field validation, honeypot filtering, duplicate suppression, and IP-based rate limiting.
- The IP value itself is not stored; the function stores an HMAC-derived hash for rate limiting.
- Supabase server-side secret credentials remain inside the Edge Function environment and are not committed to GitHub.

The Supabase security advisor reports the no-policy RLS state as informational. That state is intentional because the table is not designed for direct browser access.

Performance advisor notices about unused indexes are expected on a new, empty table and should be revisited after real traffic exists.

## Workflow statuses

Project inquiries currently support:

- `new`
- `contacted`
- `discovery`
- `quoted`
- `won`
- `lost`
- `archived`

## Deployment

The SRCcvde website is deployed through GitHub Pages. The GitHub Pages workflow provides the public Supabase URL and publishable key to the Vite production build.

Generated database TypeScript definitions live at:

- `src/types/database.ts`

Update those generated types whenever the database schema changes.
