import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { API_BASE_URL, TOOL_CATALOG, formatJson } from "../app.js";

test("frontend is configured for structural subdomain and private API", async () => {
  const cname = await readFile(new URL("../CNAME", import.meta.url), "utf8");
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

  assert.equal(cname.trim(), "structural.easuys.com");
  assert.match(html, /EA Suys Structural Tools/);
  assert.match(html, /class="site-header"/);
  assert.match(html, /https:\/\/www\.easuys\.be\/images\/logo\.jpg/);
  assert.match(html, /https:\/\/www\.easuys\.be\/favicon\.ico/);
  assert.match(html, /<a href="#en" data-lang="en" aria-current="page">EN<\/a>/);
  assert.match(css, /\.page\s*{\s*max-width: 1140px;/);
  assert.match(css, /\.lang-switch a\s*{/);
  assert.match(css, /\.tool-shell button\s*{/);
  assert.equal(
    API_BASE_URL,
    "https://easuys-structural-tools-api.yellow-violet-f185.workers.dev"
  );
});

test("frontend catalog has all first-wave tools and contains no formulas", async () => {
  assert.deepEqual(Object.keys(TOOL_CATALOG).sort(), [
    "ec5_axial_screw",
    "ec5_timber_contact_moment_joint",
    "ec6_beam_bearing",
    "ec6_inplane_shear_wall",
    "ec6_lateral_wall_resistance",
    "ec6_masonry_strength",
  ]);

  const app = await readFile(new URL("../app.js", import.meta.url), "utf8");
  assert.doesNotMatch(app, /function calculate/i);
  assert.doesNotMatch(app, /fk = K/i);
});

test("formatJson is stable", () => {
  assert.equal(formatJson({ b: 2, a: 1 }), '{\n  "b": 2,\n  "a": 1\n}');
});
