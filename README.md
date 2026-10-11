# SRCcvde website

React/TypeScript with prerendered HTML for every public route, hosted on Cloudflare Pages. Static pages remain readable without JavaScript. The project form uses a same-origin Pages Function; Supabase credentials needed by that gateway are server bindings.

Use Node 22.18+ and `npm ci`, then `npm run dev`. Run `npm test` and `npm run build` before committing. `npm run test:browser` runs desktop/mobile route, accessibility, and failed-form checks against a local Pages preview after a build.

See [deployment instructions](docs/DEPLOYMENT.md) for the coordinated backend and hosting migration. Production deployment is manual from `main`, through the `cloudflare-production` GitHub environment. The previous GitHub Pages deployment is replaced; neither a PR nor a merge changes DNS.
