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
