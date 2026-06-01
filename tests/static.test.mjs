import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import {
  API_BASE_URL,
  TOOL_CATALOG,
  buildPayloadFromFormValues,
  buildResultSummaryItems,
  formatJson,
} from "../app.js";

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
  assert.match(html, /data-friendly-form/);
  assert.match(html, /data-result-summary/);
  assert.match(css, /\.page\s*{\s*max-width: 1140px;/);
  assert.match(css, /\.lang-switch a\s*{/);
  assert.match(css, /\.tool-shell button\s*{/);
  assert.match(css, /\.friendly-fields\s*{/);
  assert.match(css, /\.friendly-field-checkbox\s*{/);
  assert.match(css, /\.result-summary dl\s*{/);
  assert.equal(
    API_BASE_URL,
    "https://easuys-structural-tools-api.yellow-violet-f185.workers.dev"
  );
});

test("frontend catalog has all first-wave tools and contains no formulas", async () => {
  assert.deepEqual(Object.keys(TOOL_CATALOG).sort(), [
    "ec5_axial_screw",
    "ec5_steel_timber_screw_connection",
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

test("contact moment joint form metadata preserves fixed screw rows", () => {
  const payload = buildPayloadFromFormValues("ec5_timber_contact_moment_joint", {
    wood_grade: "C24",
    service_class: "1",
    load_duration: "Permanent",
    "interface.width_mm": "180",
    "actions.m_ed_kNm": "5.5",
    "screws.0.y_mm": "-130",
    "screws.7.y_mm": "130",
  });

  assert.equal(payload.wood_grade, "C24");
  assert.equal(payload.service_class, 1);
  assert.equal(payload.load_duration, "Permanent");
  assert.deepEqual(payload.interface, { width_mm: 180, height_mm: 360 });
  assert.deepEqual(payload.actions, { n_ed_kN: 0, m_ed_kNm: 5.5 });
  assert.deepEqual(payload.screws[0], { id: "S1", y_mm: -130 });
  assert.deepEqual(payload.screws[7], { id: "S8", y_mm: 130 });
  assert.equal(payload.screw_defaults.d, 8);
});

test("masonry strength form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec6_masonry_strength", {
    unit_type: "calcium_silicate",
    unit_group: "group_2",
    mortar_type: "thin_layer",
    fb_mpa: "12.5",
    fm_mpa: "10",
    gamma_m: "2",
  });

  assert.deepEqual(payload, {
    unit_type: "calcium_silicate",
    unit_group: "group_2",
    mortar_type: "thin_layer",
    fb_mpa: 12.5,
    fm_mpa: 10,
    gamma_m: 2,
  });
});

test("beam bearing form metadata builds numeric and boolean API payload", () => {
  const payload = buildPayloadFromFormValues("ec6_beam_bearing", {
    fd_mpa: "2.8",
    unit_group: "group_1",
    n_edc_kn: "95",
    bearing_length_mm: "180",
    bearing_width_mm: "140",
    edge_distance_a1_mm: "90",
    wall_height_below_hc_mm: "450",
    top_of_wall: true,
  });

  assert.deepEqual(payload, {
    fd_mpa: 2.8,
    unit_group: "group_1",
    n_edc_kn: 95,
    bearing_length_mm: 180,
    bearing_width_mm: 140,
    edge_distance_a1_mm: 90,
    wall_height_below_hc_mm: 450,
    top_of_wall: true,
  });
});

test("in-plane shear wall form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec6_inplane_shear_wall", {
    length_mm: "1800",
    thickness_mm: "190",
    material_type: "calcium_silicate",
    fb_mpa: "20",
    fm_mpa: "12",
    mortar_class: "M10-M20",
    mortar_type: "general_purpose",
    n_ed_kn: "150",
    v_ed_kn: "45",
    m_ed_knm: "22.5",
    gamma_m: "2",
  });

  assert.deepEqual(payload, {
    length_mm: 1800,
    thickness_mm: 190,
    material_type: "calcium_silicate",
    fb_mpa: 20,
    fm_mpa: 12,
    mortar_class: "M10-M20",
    mortar_type: "general_purpose",
    n_ed_kn: 150,
    v_ed_kn: 45,
    m_ed_knm: 22.5,
    gamma_m: 2,
  });
});

test("lateral wall resistance form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec6_lateral_wall_resistance", {
    height_m: "3.2",
    length_m: "5",
    thickness_mm: "190",
    support_case: "top_bottom",
    material_type: "concrete_aac_fb_ge_5",
    mortar_class: "M12",
    n_ed_line_kn_per_m: "75.5",
    w_ed_kn_per_m2: "1.8",
    gamma_m: "2.2",
  });

  assert.deepEqual(payload, {
    height_m: 3.2,
    length_m: 5,
    thickness_mm: 190,
    support_case: "top_bottom",
    material_type: "concrete_aac_fb_ge_5",
    mortar_class: "M12",
    n_ed_line_kn_per_m: 75.5,
    w_ed_kn_per_m2: 1.8,
    gamma_m: 2.2,
  });
});

test("axial screw form metadata builds nested spacing payload", () => {
  const payload = buildPayloadFromFormValues("ec5_axial_screw", {
    n: "6",
    d: "10",
    d1: "6.5",
    dh: "14",
    lef: "100",
    t_timber: "160",
    alpha: "30",
    rho_k: "430",
    rho_a: "350",
    f_ax_k: "0",
    f_head_k: "13",
    f_tens_k: "22000",
    f_ed: "30000",
    service_class: "2",
    load_duration: "Short-term",
    material_type: "GluedLaminated",
    "spacings.a1": "80",
    "spacings.a2": "55",
    "spacings.a1_cg": "105",
    "spacings.a2_cg": "45",
  });

  assert.deepEqual(payload, {
    n: 6,
    d: 10,
    d1: 6.5,
    dh: 14,
    lef: 100,
    t_timber: 160,
    alpha: 30,
    rho_k: 430,
    rho_a: 350,
    f_ax_k: 0,
    f_head_k: 13,
    f_tens_k: 22000,
    f_ed: 30000,
    service_class: 2,
    load_duration: "Short-term",
    material_type: "GluedLaminated",
    spacings: {
      a1: 80,
      a2: 55,
      a1_cg: 105,
      a2_cg: 45,
    },
  });
});

test("steel-timber screw form metadata builds nested spacing payload", () => {
  const payload = buildPayloadFromFormValues("ec5_steel_timber_screw_connection", {
    config_type: "central",
    t_timber_1_mm: "50",
    t_timber_2_mm: "60",
    t_plate_mm: "6",
    n: "2",
    timber_type: "Hardwood",
    rho_k: "500",
    service_class: "3",
    load_duration: "Permanent",
    d_mm: "8",
    d_root_mm: "5.6",
    l_penetration_mm: "60",
    f_uk_mpa: "400",
    m_y_rk_nmm: "0",
    "spacings.a1_mm": "40",
    "spacings.a2_mm": "30",
    "spacings.a3t_mm": "60",
    "spacings.a4t_mm": "30",
    alpha_deg: "90",
    f_d_kn: "80",
  });

  assert.deepEqual(payload, {
    config_type: "central",
    t_timber_1_mm: 50,
    t_timber_2_mm: 60,
    t_plate_mm: 6,
    n: 2,
    timber_type: "Hardwood",
    rho_k: 500,
    service_class: 3,
    load_duration: "Permanent",
    d_mm: 8,
    d_root_mm: 5.6,
    l_penetration_mm: 60,
    f_uk_mpa: 400,
    m_y_rk_nmm: 0,
    spacings: {
      a1_mm: 40,
      a2_mm: 30,
      a3t_mm: 60,
      a4t_mm: 30,
    },
    alpha_deg: 90,
    f_d_kn: 80,
  });
});

test("all first-wave tools expose form metadata", () => {
  assert.deepEqual(
    Object.entries(TOOL_CATALOG).filter(([, tool]) => !tool.form).map(([toolId]) => toolId),
    []
  );
  assert.equal(buildPayloadFromFormValues("unknown_tool", {}), null);
});

test("masonry result summaries format returned API fields only", () => {
  const masonry = buildResultSummaryItems({
    calculator_id: "ec6_masonry_strength",
    status: "ok",
    result: {
      fk_mpa: 7.715799694536624,
      fd_mpa: 4.538705702668603,
      check_passed: true,
    },
  }, "en");

  assert.deepEqual(masonry, [
    { label: "Status", value: "OK" },
    { label: "fk", value: "7.716 MPa" },
    { label: "fd", value: "4.539 MPa" },
    { label: "Check", value: "PASS" },
  ]);

  const lateral = buildResultSummaryItems({
    calculator_id: "ec6_lateral_wall_resistance",
    result: {
      overall_status: "PASS",
      axis_1_utilization_ratio: 0.2223157894736842,
      axis_2_utilization_ratio: 0.6034285714285714,
      bending_model: "two_way",
      warning_codes: ["ALPHA2_NEAREST_TABLE_VALUE"],
    },
  }, "en");

  assert.deepEqual(lateral, [
    { label: "Status", value: "PASS" },
    { label: "Axis 1 utilization", value: "0.222" },
    { label: "Axis 2 utilization", value: "0.603" },
    { label: "Model", value: "two_way" },
    { label: "Warnings", value: "ALPHA2_NEAREST_TABLE_VALUE" },
  ]);
  assert.deepEqual(buildResultSummaryItems({ calculator_id: "unknown", result: {} }, "en"), []);
});

test("ec5 result summaries format returned API fields only", () => {
  const axial = buildResultSummaryItems({
    calculator_id: "ec5_axial_screw",
    status: "review",
    result: {
      design_capacity_n: 4819.942799650245,
      utilization_ratio: 5.186783544778602,
      governing_failure_mode: "Head pull-through",
      check_passed: false,
    },
  }, "en");

  assert.deepEqual(axial, [
    { label: "Status", value: "REVIEW" },
    { label: "Design capacity", value: "4819.9 N" },
    { label: "Utilization", value: "5.187" },
    { label: "Governing mode", value: "Head pull-through" },
    { label: "Check", value: "FAIL" },
  ]);

  const steelTimber = buildResultSummaryItems({
    calculator_id: "ec5_steel_timber_screw_connection",
    result: {
      overall_status: "PASS",
      r_d_kn: 21.529478806244654,
      utilization_ratio: 0.9289588559012851,
      governing_mode: "Interpolated",
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(steelTimber, [
    { label: "Status", value: "PASS" },
    { label: "Rd", value: "21.529 kN" },
    { label: "Utilization", value: "0.929" },
    { label: "Governing mode", value: "Interpolated" },
    { label: "Warnings", value: "None" },
  ]);
});

test("formatJson is stable", () => {
  assert.equal(formatJson({ b: 2, a: 1 }), '{\n  "b": 2,\n  "a": 1\n}');
});
