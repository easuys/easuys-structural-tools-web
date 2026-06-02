import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import {
  API_BASE_URL,
  TOOL_CATALOG,
  buildPayloadFromFormValues,
  buildReportModel,
  buildResultDownloadText,
  buildResultFilename,
  buildResultSummaryItems,
  formatJson,
} from "../app.js";

test("frontend is configured for structural subdomain and private API", async () => {
  const cname = await readFile(new URL("../CNAME", import.meta.url), "utf8");
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  const favicon = await readFile(new URL("../favicon.ico", import.meta.url));
  const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  const tsconfig = JSON.parse(await readFile(new URL("../tsconfig.json", import.meta.url), "utf8"));

  assert.equal(cname.trim(), "structural.easuys.com");
  assert.match(html, /EA Suys Structural Tools/);
  assert.match(html, /class="site-header"/);
  assert.match(html, /https:\/\/www\.easuys\.be\/images\/logo\.jpg/);
  assert.match(html, /<link rel="icon" href="favicon\.ico" sizes="any">/);
  assert.match(html, /<a href="#en" data-lang="en" aria-current="page">EN<\/a>/);
  assert.match(html, /data-friendly-form/);
  assert.match(html, /data-result-summary/);
  assert.match(html, /data-report/);
  assert.match(html, /data-download/);
  assert.match(html, /data-print/);
  assert.match(css, /\.page\s*{\s*max-width: 1140px;/);
  assert.match(css, /\.lang-switch a\s*{/);
  assert.match(css, /\.tool-shell button\s*{/);
  assert.match(css, /\.friendly-fields\s*{/);
  assert.match(css, /\.friendly-field-checkbox\s*{/);
  assert.match(css, /\.result-summary dl\s*{/);
  assert.match(css, /\.report-view\s*{/);
  assert.match(css, /\.result-actions\s*{/);
  assert.ok(favicon.byteLength > 0);
  assert.equal(
    API_BASE_URL,
    "https://easuys-structural-tools-api.yellow-violet-f185.workers.dev"
  );
  assert.equal(packageJson.scripts.build, "tsc");
  assert.match(packageJson.scripts.test, /npm run build/);
  assert.match(packageJson.devDependencies.typescript, /^\^6\./);
  assert.deepEqual(tsconfig.include, ["app.ts"]);
});

test("frontend catalog has all first-wave tools and contains no formulas", async () => {
  assert.deepEqual(Object.keys(TOOL_CATALOG).sort(), [
    "ec3_fillet_weld",
    "ec3_plate_tension",
    "ec5_axial_screw",
    "ec5_joist_spacing_optimizer",
    "ec5_osb_composite_vibration",
    "ec5_stabilizing_force",
    "ec5_steel_timber_screw_connection",
    "ec5_timber_beam_check",
    "ec5_timber_contact_moment_joint",
    "ec5_timber_timber_single_shear_connection",
    "ec6_beam_bearing",
    "ec6_inplane_shear_wall",
    "ec6_lateral_wall_resistance",
    "ec6_masonry_horizontal_capacity",
    "ec6_masonry_strength",
  ]);

  const appJs = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const appTs = await readFile(new URL("../app.ts", import.meta.url), "utf8");
  assert.match(appTs, /as HTMLTextAreaElement/);
  for (const app of [appJs, appTs]) {
    assert.doesNotMatch(app, /function calculate/i);
    assert.doesNotMatch(app, /fk = K/i);
  }
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

test("ec3 plate tension form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_plate_tension", {
    width_mm: "80",
    thickness_mm: "8",
    n_ed_kn: "160",
    steel_grade: "S355",
    hole_diameter_mm: "22",
    n_holes: "2",
  });

  assert.deepEqual(payload, {
    width_mm: 80,
    thickness_mm: 8,
    n_ed_kn: 160,
    steel_grade: "S355",
    hole_diameter_mm: 22,
    n_holes: 2,
  });
});

test("ec3 fillet weld form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_fillet_weld", {
    steel_grade: "S275",
    verification_method: "directional",
    throat_thickness_a_mm: "4",
    effective_length_leff_mm: "80",
    force_per_unit_length_fw_ed_n_per_mm: "850",
    sigma_perp_mpa: "300",
    tau_perp_mpa: "150",
    tau_parallel_mpa: "100",
    gamma_m2: "1.25",
  });

  assert.deepEqual(payload, {
    steel_grade: "S275",
    verification_method: "directional",
    throat_thickness_a_mm: 4,
    effective_length_leff_mm: 80,
    force_per_unit_length_fw_ed_n_per_mm: 850,
    sigma_perp_mpa: 300,
    tau_perp_mpa: 150,
    tau_parallel_mpa: 100,
    gamma_m2: 1.25,
  });
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

test("masonry horizontal capacity form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec6_masonry_horizontal_capacity", {
    length_mm: "1200",
    height_mm: "2600",
    thickness_mm: "190",
    n_walls: "1",
    compression_fraction: "0.6",
    material_type: "calcium_silicate",
    mortar_class: "M10-M20",
    fb_mpa: "15",
    tensile_strength_char_mpa: "0.5",
    gamma_m: "2.2",
  });

  assert.deepEqual(payload, {
    length_mm: 1200,
    height_mm: 2600,
    thickness_mm: 190,
    n_walls: 1,
    compression_fraction: 0.6,
    material_type: "calcium_silicate",
    mortar_class: "M10-M20",
    fb_mpa: 15,
    tensile_strength_char_mpa: 0.5,
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

test("stabilizing force form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec5_stabilizing_force", {
    b_mm: "120",
    h_mm: "360",
    l_unbraced_mm: "6000",
    wood_grade: "GL28h",
    m_d_knm: "40",
    l_ef_factor: "0.9",
    n_d_compression_kn: "60",
  });

  assert.deepEqual(payload, {
    b_mm: 120,
    h_mm: 360,
    l_unbraced_mm: 6000,
    wood_grade: "GL28h",
    m_d_knm: 40,
    l_ef_factor: 0.9,
    n_d_compression_kn: 60,
  });
});

test("timber beam check form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec5_timber_beam_check", {
    span_m: "4.2",
    spacing_m: "0.7",
    b_mm: "63",
    h_mm: "175",
    wood_grade: "C18",
    climate_class: "1",
    q_permanent_kn_m2: "1",
    q_variable_kn_m2: "2",
  });

  assert.deepEqual(payload, {
    span_m: 4.2,
    spacing_m: 0.7,
    b_mm: 63,
    h_mm: 175,
    wood_grade: "C18",
    climate_class: 1,
    q_permanent_kn_m2: 1,
    q_variable_kn_m2: 2,
  });
});

test("joist spacing optimizer form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec5_joist_spacing_optimizer", {
    span_m: "4.2",
    b_mm: "63",
    h_mm: "175",
    wood_grade: "C18",
    climate_class: "1",
    q_permanent_kn_m2: "1",
    q_variable_kn_m2: "2",
    min_spacing_m: "0.2",
    max_spacing_m: "0.8",
    spacing_step_m: "0.02",
  });

  assert.deepEqual(payload, {
    span_m: 4.2,
    b_mm: 63,
    h_mm: 175,
    wood_grade: "C18",
    climate_class: 1,
    q_permanent_kn_m2: 1,
    q_variable_kn_m2: 2,
    min_spacing_m: 0.2,
    max_spacing_m: 0.8,
    spacing_step_m: 0.02,
  });
});

test("osb composite vibration form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec5_osb_composite_vibration", {
    span_m: "3.6",
    b_mm: "63",
    h_mm: "175",
    wood_grade: "C18",
    composite_factor: "1.15",
    load_n: "1000",
    limit_mm: "1.5",
  });

  assert.deepEqual(payload, {
    span_m: 3.6,
    b_mm: 63,
    h_mm: 175,
    wood_grade: "C18",
    composite_factor: 1.15,
    load_n: 1000,
    limit_mm: 1.5,
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

test("timber-timber single-shear form metadata builds nested spacing payload", () => {
  const payload = buildPayloadFromFormValues("ec5_timber_timber_single_shear_connection", {
    t1_mm: "90",
    t2_mm: "70",
    n: "5",
    timber_type_1: "Glulam",
    timber_type_2: "LVL",
    rho_k_1: "430",
    rho_k_2: "500",
    service_class_1: "1",
    service_class_2: "2",
    load_duration: "Medium-term",
    fastener_type: "Bolt",
    d_mm: "12",
    f_uk_mpa: "500",
    pre_drilled: true,
    use_rope_effect: false,
    f_ax_rk_n: "0",
    "spacings.a1_mm": "100",
    "spacings.a2_mm": "55",
    "spacings.a3t_mm": "125",
    "spacings.a3c_mm": "190",
    "spacings.a4t_mm": "80",
    "spacings.a4c_mm": "45",
    alpha_deg: "30",
    f_v_ed_kn: "18.5",
  });

  assert.deepEqual(payload, {
    t1_mm: 90,
    t2_mm: 70,
    n: 5,
    timber_type_1: "Glulam",
    timber_type_2: "LVL",
    rho_k_1: 430,
    rho_k_2: 500,
    service_class_1: 1,
    service_class_2: 2,
    load_duration: "Medium-term",
    fastener_type: "Bolt",
    d_mm: 12,
    f_uk_mpa: 500,
    pre_drilled: true,
    use_rope_effect: false,
    f_ax_rk_n: 0,
    spacings: {
      a1_mm: 100,
      a2_mm: 55,
      a3t_mm: 125,
      a3c_mm: 190,
      a4t_mm: 80,
      a4c_mm: 45,
    },
    alpha_deg: 30,
    f_v_ed_kn: 18.5,
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

  const horizontal = buildResultSummaryItems({
    calculator_id: "ec6_masonry_horizontal_capacity",
    result: {
      overall_status: "PASS",
      combined_capacity_kn: 2.4533793103448276,
      governing_per_wall_kn: 1.2266896551724138,
      governing_mode: "bending",
      warning_codes: ["NO_AXIAL_LOAD_QUICK_CHECK"],
    },
  }, "en");

  assert.deepEqual(horizontal, [
    { label: "Status", value: "PASS" },
    { label: "Combined capacity", value: "2.453 kN" },
    { label: "Governing per wall", value: "1.227 kN" },
    { label: "Governing mode", value: "bending" },
    { label: "Warnings", value: "NO_AXIAL_LOAD_QUICK_CHECK" },
  ]);
  assert.deepEqual(buildResultSummaryItems({ calculator_id: "unknown", result: {} }, "en"), []);
});

test("ec3 result summaries format returned API fields only", () => {
  const weld = buildResultSummaryItems({
    calculator_id: "ec3_fillet_weld",
    result: {
      overall_status: "FAIL",
      verification_method: "directional",
      utilization_percent: 107,
      geometry_check: { geometry_check_passed: true },
      warning_codes: ["DIRECTIONAL_CRITERION_1_FAILED"],
    },
  }, "en");

  assert.deepEqual(weld, [
    { label: "Status", value: "FAIL" },
    { label: "Method", value: "directional" },
    { label: "Utilization", value: "107 %" },
    { label: "Geometry", value: "PASS" },
    { label: "Warnings", value: "DIRECTIONAL_CRITERION_1_FAILED" },
  ]);

  const plate = buildResultSummaryItems({
    calculator_id: "ec3_plate_tension",
    result: {
      overall_status: "FAIL",
      n_rd_kn: 105.75,
      utilization_percent: 151.3,
      governing_criterion: "net_section",
      warning_codes: ["NET_SECTION_GOVERNS", "NET_SECTION_FAILED"],
    },
  }, "en");

  assert.deepEqual(plate, [
    { label: "Status", value: "FAIL" },
    { label: "NRd", value: "105.8 kN" },
    { label: "Utilization", value: "151.3 %" },
    { label: "Governing", value: "net_section" },
    { label: "Warnings", value: "NET_SECTION_GOVERNS, NET_SECTION_FAILED" },
  ]);
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

  const stabilizing = buildResultSummaryItems({
    calculator_id: "ec5_stabilizing_force",
    status: "ok",
    result: {
      f_d_kn: 0.03678971926374336,
      lambda_rel_m: 0.8156473902861856,
      k_crit: 0.9482644572853609,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(stabilizing, [
    { label: "Status", value: "OK" },
    { label: "Fd", value: "0.037 kN" },
    { label: "lambda rel,m", value: "0.816" },
    { label: "kcrit", value: "0.948" },
    { label: "Warnings", value: "None" },
  ]);

  const timberBeam = buildResultSummaryItems({
    calculator_id: "ec5_timber_beam_check",
    result: {
      overall_status: "PASS",
      uc_bending: 0.465958033125,
      uc_shear: 0.17473426242187495,
      w_fin_mm: 7.46298432,
      f1_hz: 12.98299870898008,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(timberBeam, [
    { label: "Status", value: "PASS" },
    { label: "Bending UC", value: "0.466" },
    { label: "Shear UC", value: "0.175" },
    { label: "Final deflection", value: "7.463 mm" },
    { label: "Frequency f1", value: "12.983 Hz" },
    { label: "Warnings", value: "None" },
  ]);

  const joistOptimizer = buildResultSummaryItems({
    calculator_id: "ec5_joist_spacing_optimizer",
    result: {
      overall_status: "PASS",
      recommended_spacing_cm: 80,
      adequate_spacing_count: 31,
      source_first_adequate_spacing_m: 0.2,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(joistOptimizer, [
    { label: "Status", value: "PASS" },
    { label: "Recommended spacing", value: "80 cm" },
    { label: "Passing spacings", value: "31" },
    { label: "Source first OK", value: "0.2 m" },
    { label: "Warnings", value: "None" },
  ]);

  const osbComposite = buildResultSummaryItems({
    calculator_id: "ec5_osb_composite_vibration",
    result: {
      overall_status: "PASS",
      composite_deflection_mm: 1.0793148880105403,
      base_deflection_mm: 1.2412121212121212,
      reduction_percent: 13.043478260869556,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(osbComposite, [
    { label: "Status", value: "PASS" },
    { label: "Composite deflection", value: "1.079 mm" },
    { label: "Without OSB", value: "1.241 mm" },
    { label: "Reduction", value: "13.043 %" },
    { label: "Warnings", value: "None" },
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

  const timberTimber = buildResultSummaryItems({
    calculator_id: "ec5_timber_timber_single_shear_connection",
    result: {
      overall_status: "PASS",
      r_d_kn: 18.07582291764916,
      utilization_ratio: 0.8298377378633236,
      n_effective: 4,
      governing_mode: "Mode f (Two plastic hinges)",
      warning_codes: ["ROPE_EFFECT_INCLUDED"],
    },
  }, "en");

  assert.deepEqual(timberTimber, [
    { label: "Status", value: "PASS" },
    { label: "Rd", value: "18.076 kN" },
    { label: "Utilization", value: "0.83" },
    { label: "Effective n", value: "4" },
    { label: "Governing mode", value: "Mode f (Two plastic hinges)" },
    { label: "Warnings", value: "ROPE_EFFECT_INCLUDED" },
  ]);
});

test("formatJson is stable", () => {
  assert.equal(formatJson({ b: 2, a: 1 }), '{\n  "b": 2,\n  "a": 1\n}');
});

test("result download helpers create stable JSON artifacts", () => {
  const response = {
    calculator_id: "ec5_osb_composite_vibration",
    result: { overall_status: "PASS" },
  };

  assert.equal(
    buildResultFilename("ec5_osb_composite_vibration", new Date("2026-06-02T05:00:00.000Z")),
    "ea-suys-ec5-osb-composite-vibration-20260602T050000Z.json"
  );
  assert.equal(buildResultDownloadText(response), formatJson(response));
  assert.equal(
    buildResultFilename("", new Date("2026-06-02T05:00:00.000Z")),
    "ea-suys-calculation-20260602T050000Z.json"
  );
});

test("html report model exposes returned API metadata", () => {
  const report = buildReportModel({
    calculator_id: "ec5_osb_composite_vibration",
    formula_version: "2026-06-02.6",
    status: "ok",
    result: {
      overall_status: "PASS",
      composite_deflection_mm: 1.0793148880105403,
      base_deflection_mm: 1.2412121212121212,
      reduction_percent: 13.043478260869556,
      warning_codes: ["NARROW_OSB_SCOPE"],
    },
    assumptions: ["Point-load vibration helper only."],
    source_refs: ["Source script composite_osb_analysis.py."],
  }, "en", new Date("2026-06-02T05:10:00.000Z"));

  assert.equal(report.title, "Calculation record");
  assert.deepEqual(report.details, [
    { label: "Generated", value: "2026-06-02T05:10:00.000Z" },
    { label: "Calculator", value: "ec5_osb_composite_vibration" },
    { label: "Status", value: "OK" },
    { label: "Formula version", value: "2026-06-02.6" },
  ]);
  assert.deepEqual(report.summaryItems, [
    { label: "Status", value: "PASS" },
    { label: "Composite deflection", value: "1.079 mm" },
    { label: "Without OSB", value: "1.241 mm" },
    { label: "Reduction", value: "13.043 %" },
    { label: "Warnings", value: "NARROW_OSB_SCOPE" },
  ]);
  assert.deepEqual(report.warnings, ["NARROW_OSB_SCOPE"]);
  assert.deepEqual(report.assumptions, ["Point-load vibration helper only."]);
  assert.deepEqual(report.sourceRefs, ["Source script composite_osb_analysis.py."]);
});
