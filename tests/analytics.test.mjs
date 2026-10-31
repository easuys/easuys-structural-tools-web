import assert from "node:assert/strict";
import { readFile as readRawFile } from "node:fs/promises";
import { test } from "node:test";

// Cloudflare Web Analytics (A2 step 0): one beacon with the structural.easuys.com token after the app script, no
// cookies, and a localized footer note filled by app.ts in every language.
const readFile = async (...args) => (await readRawFile(...args)).replace(/\r\n/g, "\n");
const TOKEN = "80838af61b8d422da4a923bd8813bf4a";

test("index.html carries one analytics beacon after the app and an empty note slot", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.equal([...html.matchAll(/static\.cloudflareinsights\.com\/beacon\.min\.js/g)].length, 1);
  assert.ok(html.includes(`"token": "${TOKEN}"`));
  assert.ok(html.indexOf("cloudflareinsights") > html.indexOf('src="app.js'), "beacon after the app script");
  assert.ok(html.indexOf("cloudflareinsights") < html.indexOf("</body>"));
  assert.match(html, /<div class="footer-note" data-analytics-note><\/div>/);
});

test("the footer note is localized in NL, EN and FR and rendered by the app", async () => {
  for (const file of ["../app.ts", "../app.js"]) {
    const src = await readFile(new URL(file, import.meta.url), "utf8");
    assert.match(src, /analyticsNote: "Bezoeken worden geteld met Cloudflare Web Analytics, zonder cookies/);
    assert.match(src, /analyticsNote: "Visits are counted with Cloudflare Web Analytics, without cookies/);
    assert.match(src, /analyticsNote: "Les visites sont comptées avec Cloudflare Web Analytics, sans cookies/);
    assert.match(src, /querySelector\("\[data-analytics-note\]"\)/);
    assert.doesNotMatch(src, /document\.cookie/);
  }
});
