# EA Suys Structural Tools Web

Public GitHub Pages frontend for `https://structural.easuys.com/`.

The calculation logic is not stored in this repository. The frontend calls the
private Cloudflare Worker API:

`https://easuys-structural-tools-api.yellow-violet-f185.workers.dev`

DNS target for GoDaddy:

- Type: `CNAME`
- Host: `structural`
- Points to: `easuys.github.io`

The `CNAME` file maps this GitHub Pages project to `structural.easuys.com`.

## Turnstile enquiry verification

Turnstile is disabled in the frontend with `TURNSTILE_ENABLED = false` until
the API can verify challenges. To enable it:

1. Configure the Turnstile widget for `structural.easuys.com` and use its site
   key in `app.ts` as `TURNSTILE_SITE_KEY`. Add preview hostnames only when
   those previews should show the challenge.
2. Configure `TURNSTILE_SECRET_KEY` as a secret in the API Worker environment
   with `wrangler secret put TURNSTILE_SECRET_KEY`, then deploy the API change
   that verifies submitted tokens.
3. After the API secret and hostname are active, set `TURNSTILE_ENABLED` to
   `true` in `app.ts` and run `npm run build`.

Do not put the secret key in this repository. The direct mailto enquiry link
remains available while verification is disabled.
