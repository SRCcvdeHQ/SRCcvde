# SRCcvde Architecture

## Current website architecture

The public SRCcvde website is a React + TypeScript application built with Vite.

### Front end
- React
- TypeScript
- Vite
- Responsive CSS

### Hosting
Planned for Cloudflare deployment with `dist/` as the production build output.

### Backend
Supabase will be introduced only where a feature requires authentication, database access, file storage, or server-side workflows.

### Transactional email
Automated application email should use a transactional provider rather than the human Zoho mailbox.

### Principles
- Keep the public site lightweight.
- Add backend complexity only when a user-facing feature needs it.
- Keep client and company secrets out of source control.
- Prefer client-owned production accounts for client projects.
