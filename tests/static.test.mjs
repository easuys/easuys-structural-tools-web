import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import {
  API_BASE_URL,
  TOOL_CATALOG,
  buildPayloadFromFormValues,
  buildReportFilename,
  buildReportHtml,
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
  const mainCss = await readFile(new URL("../../easuys.github.io/styles.css", import.meta.url), "utf8");
  const mainHtml = await readFile(new URL("../../easuys.github.io/index-en.html", import.meta.url), "utf8");
  const favicon = await readFile(new URL("../favicon.ico", import.meta.url));
  const logo = await readFile(new URL("../images/logo.jpg", import.meta.url));
  const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  const tsconfig = JSON.parse(await readFile(new URL("../tsconfig.json", import.meta.url), "utf8"));

  assert.equal(cname.trim(), "structural.easuys.com");
  assert.match(html, /EA Suys Structural Tools/);
  assert.match(html, /class="site-header"/);
  assert.match(html, /class="brand"/);
  assert.match(html, /class="brand-name"/);
  assert.match(html, /class="brand-tagline"/);
  assert.match(html, /class="hero"/);
  assert.match(html, /class="hero-meta"/);
  assert.match(html, /class="contact-card"/);
  assert.match(html, /class="section" id="calculators"/);
  assert.match(html, /EA Suys bv — Kapelle-op-den-Bos, BE/);
  assert.match(mainHtml, /class="contact-card"/);
  assert.match(html, /<img class="logo" src="images\/logo\.jpg" alt="EA Suys logo">/);
  assert.match(html, /<link rel="icon" href="favicon\.ico" sizes="any">/);
  assert.match(html, /<a href="#en" data-lang="en" aria-current="page">EN<\/a>/);
  assert.match(html, /data-friendly-form/);
  assert.match(html, /data-result-summary/);
  assert.match(html, /data-report/);
  assert.match(html, /downloadable JSON or HTML output/);
  assert.match(html, /data-download/);
  assert.match(html, /data-download-html/);
  assert.match(html, /data-print/);
  assert.match(css, /\.page\s*{\s*max-width: 1140px;/);
  assert.match(css, /\.lang-switch a\s*{/);
  assert.match(css, /\.tool-shell button\s*{/);
  assert.match(css, /\.friendly-fields\s*{/);
  assert.match(css, /\.friendly-field-checkbox\s*{/);
  assert.match(css, /\.result-summary dl\s*{/);
  assert.match(css, /\.report-view\s*{/);
  assert.match(css, /\.result-actions\s*{/);
  assert.equal(css.split("/* Structural tools app: scoped additions after the copied www.easuys.be base CSS. */")[0].trim(), mainCss.trim());
  assert.ok(favicon.byteLength > 0);
  assert.ok(logo.byteLength > 0);
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
    "beam_composite_shear_stress",
    "beam_simple_diagrams",
    "composite_embedded_profile_bearing",
    "ec1_roof_loads",
    "ec3_bolt_group_torsion",
    "ec3_bolted_lap_joint",
    "ec3_bolted_moment_connection",
    "ec3_double_sided_web_connection",
    "ec3_fillet_weld",
    "ec3_lateral_torsional_buckling",
    "ec3_plate_tension",
    "ec3_profile_optimizer",
    "ec3_splice_moment_connection",
    "ec3_steel_section_check",
    "ec5_axial_screw",
    "ec5_joist_spacing_optimizer",
    "ec5_osb_composite_vibration",
    "ec5_stabilizing_force",
    "ec5_steel_timber_double_shear_connection",
    "ec5_steel_timber_five_member_connection",
    "ec5_steel_timber_screw_connection",
    "ec5_timber_beam_check",
    "ec5_timber_beam_fire_check",
    "ec5_timber_contact_moment_joint",
    "ec5_timber_member_uls_6_component",
    "ec5_timber_timber_double_shear_connection",
    "ec5_timber_timber_single_shear_connection",
    "ec5_toothed_plate_connection",
    "ec6_beam_bearing",
    "ec6_inplane_shear_wall",
    "ec6_lateral_wall_resistance",
    "ec6_masonry_contact_pressure",
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

test("EC1 roof loads form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec1_roof_loads", {
    roof_angle_degrees: "40",
    roof_surface_area_m2: "6.888",
    altitude_m: "0",
    obstacle: false,
    ground_snow_load_kn_m2: "0.5",
    ce_exposure: "1",
    ct_thermal: "1",
    maintenance_category_h_kn_m2: "0.4",
  });

  assert.deepEqual(payload, {
    roof_angle_degrees: 40,
    roof_surface_area_m2: 6.888,
    altitude_m: 0,
    obstacle: false,
    ground_snow_load_kn_m2: 0.5,
    ce_exposure: 1,
    ct_thermal: 1,
    maintenance_category_h_kn_m2: 0.4,
  });
});

test("composite shear stress form metadata builds component array payload", () => {
  const payload = buildPayloadFromFormValues("beam_composite_shear_stress", {
    "components.0.name": "Staal Plaat Onder",
    "components.0.e_modulus_mpa": "210000",
    "components.0.width_mm": "150",
    "components.0.height_mm": "8",
    "components.0.y_bottom_mm": "0",
    "components.1.name": "Beton",
    "components.1.e_modulus_mpa": "30000",
    "components.1.width_mm": "300",
    "components.1.height_mm": "400",
    "components.1.y_bottom_mm": "8",
    "components.2.name": "Staal Plaat Boven",
    "components.2.e_modulus_mpa": "210000",
    "components.2.width_mm": "150",
    "components.2.height_mm": "8",
    "components.2.y_bottom_mm": "408",
    shear_force_n: "100000",
    y_target_mm: "208",
    distribution_points: "21",
  });

  assert.deepEqual(payload, {
    components: [
      { name: "Staal Plaat Onder", e_modulus_mpa: 210000, width_mm: 150, height_mm: 8, y_bottom_mm: 0 },
      { name: "Beton", e_modulus_mpa: 30000, width_mm: 300, height_mm: 400, y_bottom_mm: 8 },
      { name: "Staal Plaat Boven", e_modulus_mpa: 210000, width_mm: 150, height_mm: 8, y_bottom_mm: 408 },
    ],
    shear_force_n: 100000,
    y_target_mm: 208,
    distribution_points: 21,
  });
});

test("simple beam diagrams form metadata builds load array payload", () => {
  const payload = buildPayloadFromFormValues("beam_simple_diagrams", {
    span_m: "5",
    "uniform_loads.0.label": "floor_load",
    "uniform_loads.0.permanent_kn_per_m": "2.5",
    "uniform_loads.0.variable_kn_per_m": "3",
    "point_loads.0.label": "midspan_point",
    "point_loads.0.permanent_kn": "0",
    "point_loads.0.variable_kn": "25",
    "point_loads.0.position_m": "2.5",
    sample_points: "21",
  });

  assert.deepEqual(payload, {
    span_m: 5,
    uniform_loads: [
      { label: "floor_load", permanent_kn_per_m: 2.5, variable_kn_per_m: 3 },
    ],
    point_loads: [
      { label: "midspan_point", permanent_kn: 0, variable_kn: 25, position_m: 2.5 },
    ],
    sample_points: 21,
  });
});

test("embedded profile bearing form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("composite_embedded_profile_bearing", {
    embedment_height_m: "0.4",
    profile_width_m: "0.2",
    v_ed_kn: "3",
    m_ed_knm: "15.2",
    fck_mpa: "30",
    gamma_c: "1.5",
    bar_diameter_mm: "12",
    bar_fyk_mpa: "500",
    gamma_s: "1.15",
    provided_bars: "2",
    sample_points: "41",
  });

  assert.deepEqual(payload, {
    embedment_height_m: 0.4,
    profile_width_m: 0.2,
    v_ed_kn: 3,
    m_ed_knm: 15.2,
    fck_mpa: 30,
    gamma_c: 1.5,
    bar_diameter_mm: 12,
    bar_fyk_mpa: 500,
    gamma_s: 1.15,
    provided_bars: 2,
    sample_points: 41,
  });
});

test("timber beam fire form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec5_timber_beam_fire_check", {
    span_m: "3.6",
    spacing_m: "0.6",
    b_mm: "75",
    h_mm: "225",
    wood_grade: "C24",
    q_permanent_kn_m2: "1",
    q_variable_kn_m2: "2",
    fire_duration_min: "30",
  });

  assert.deepEqual(payload, {
    span_m: 3.6,
    spacing_m: 0.6,
    b_mm: 75,
    h_mm: 225,
    wood_grade: "C24",
    q_permanent_kn_m2: 1,
    q_variable_kn_m2: 2,
    fire_duration_min: 30,
  });
});

test("report helpers build standalone HTML output", () => {
  const response = {
    calculator_id: "composite_embedded_profile_bearing",
    formula_version: "ea-suys-structural-formulas-2026-06-02.27",
    result: {
      check_passed: true,
      sigma_c_max_kpa: 3000,
      concrete_design_pressure_kpa: 20000,
      max_hanging_force_kn: 60.759494,
      required_bars: 2,
      warning_codes: ["PARTIAL_CONTACT_TENSION_SIDE"],
    },
    assumptions: ["Indicative calculation aid, not a design note."],
    source_refs: ["/home/user/scripts/CompositeTools/script_check_ingestort_profiel.py"],
    status: "ok",
  };

  assert.equal(
    buildReportFilename("composite_embedded_profile_bearing", new Date("2026-06-02T12:00:00.000Z")),
    "ea-suys-composite-embedded-profile-bearing-20260602T120000Z.html"
  );

  const html = buildReportHtml(response, "en", new Date("2026-06-02T12:00:00.000Z"));
  assert.match(html, /<!DOCTYPE html>/);
  assert.match(html, /Calculation record/);
  assert.match(html, /PARTIAL_CONTACT_TENSION_SIDE/);
  assert.match(html, /ea-suys-structural-formulas-2026-06-02.27/);
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

test("ec3 steel section check form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_steel_section_check", {
    profile_name: "IPE 240",
    steel_grade: "S355",
    profile_count: "1",
    "section.h_mm": "240",
    "section.b_mm": "120",
    "section.tw_mm": "6.2",
    "section.tf_mm": "9.8",
    "section.r_mm": "15",
    "section.area_mm2": "3910",
    "section.iy_mm4": "38920000",
    "section.iz_mm4": "2836000",
    "section.wy_el_mm3": "324300",
    "section.wz_el_mm3": "47300",
    "section.wy_pl_mm3": "366600",
    "section.wz_pl_mm3": "73900",
    "loads.n_ed_kn": "80",
    "loads.my_ed_knm": "80",
    "loads.mz_ed_knm": "8",
    "loads.vy_ed_kn": "100",
    "loads.vz_ed_kn": "50",
    "loads.m_sls_knm": "60",
    "loads.span_m": "5",
    gamma_m0: "1",
    deflection_limit_ratio: "250",
  });

  assert.deepEqual(payload, {
    profile_name: "IPE 240",
    steel_grade: "S355",
    profile_count: 1,
    section: {
      h_mm: 240,
      b_mm: 120,
      tw_mm: 6.2,
      tf_mm: 9.8,
      r_mm: 15,
      area_mm2: 3910,
      iy_mm4: 38920000,
      iz_mm4: 2836000,
      wy_el_mm3: 324300,
      wz_el_mm3: 47300,
      wy_pl_mm3: 366600,
      wz_pl_mm3: 73900,
    },
    loads: {
      n_ed_kn: 80,
      my_ed_knm: 80,
      mz_ed_knm: 8,
      vy_ed_kn: 100,
      vz_ed_kn: 50,
      m_sls_knm: 60,
      span_m: 5,
    },
    gamma_m0: 1,
    deflection_limit_ratio: 250,
  });
});

test("ec3 profile optimizer form metadata builds candidate array payload", () => {
  const payload = buildPayloadFromFormValues("ec3_profile_optimizer", {
    steel_grade: "S355",
    profile_count: "1",
    member_length_m: "5",
    max_utilization: "0.98",
    "loads.my_ed_knm": "80",
    "candidates.0.profile_name": "IPE 220",
    "candidates.0.weight_kg_per_m": "26.2",
    "candidates.0.section.h_mm": "220",
    "candidates.0.section.wy_pl_mm3": "285400",
    "candidates.1.profile_name": "IPE 240",
    "candidates.1.weight_kg_per_m": "30.7",
    "candidates.1.section.h_mm": "240",
    "candidates.1.section.wy_pl_mm3": "366600",
  });

  assert.equal(payload.steel_grade, "S355");
  assert.equal(payload.profile_count, 1);
  assert.equal(payload.member_length_m, 5);
  assert.equal(payload.max_utilization, 0.98);
  assert.equal(payload.loads.my_ed_knm, 80);
  assert.equal(payload.candidates[0].profile_name, "IPE 220");
  assert.equal(payload.candidates[0].weight_kg_per_m, 26.2);
  assert.equal(payload.candidates[0].section.h_mm, 220);
  assert.equal(payload.candidates[0].section.wy_pl_mm3, 285400);
  assert.equal(payload.candidates[1].profile_name, "IPE 240");
  assert.equal(payload.candidates[1].weight_kg_per_m, 30.7);
  assert.equal(payload.candidates[1].section.h_mm, 240);
  assert.equal(payload.candidates[1].section.wy_pl_mm3, 366600);
});

test("ec3 lateral-torsional buckling form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_lateral_torsional_buckling", {
    profile_name: "IPE 240",
    steel_grade: "S355",
    "section.h_mm": "240",
    "section.b_mm": "120",
    "section.iz_mm4": "2836000",
    "section.wy_pl_mm3": "366600",
    "section.it_mm4": "130000",
    "section.iw_mm6": "37400000",
    m_ed_knm: "40",
    unbraced_length_m: "3",
    loading_type: "uniform",
    load_position: "top_flange",
    destabilizing: "true",
  });

  assert.deepEqual(payload, {
    profile_name: "IPE 240",
    steel_grade: "S355",
    section: {
      h_mm: 240,
      b_mm: 120,
      iz_mm4: 2836000,
      wy_pl_mm3: 366600,
      it_mm4: 130000,
      iw_mm6: 37400000,
    },
    m_ed_knm: 40,
    unbraced_length_m: 3,
    loading_type: "uniform",
    load_position: "top_flange",
    destabilizing: true,
  });
});

test("ec3 bolt group torsion form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_bolt_group_torsion", {
    plate_thickness_mm: "10",
    steel_grade: "S235",
    bolt_class: "8.8",
    bolt_diameter_mm: "20",
    shear_in_threads: "true",
    hole_type: "normal",
    num_rows: "2",
    num_cols: "2",
    pitch_z_mm: "100",
    pitch_x_mm: "100",
    edge_top_mm: "50",
    edge_bottom_mm: "50",
    edge_left_mm: "50",
    edge_right_mm: "50",
    shear_force_z_kn: "100",
    shear_force_x_kn: "0",
    torsion_moment_knm: "10",
    gamma_m2: "1.25",
  });

  assert.deepEqual(payload, {
    plate_thickness_mm: 10,
    steel_grade: "S235",
    bolt_class: "8.8",
    bolt_diameter_mm: 20,
    shear_in_threads: true,
    hole_type: "normal",
    num_rows: 2,
    num_cols: 2,
    pitch_z_mm: 100,
    pitch_x_mm: 100,
    edge_top_mm: 50,
    edge_bottom_mm: 50,
    edge_left_mm: 50,
    edge_right_mm: 50,
    shear_force_z_kn: 100,
    shear_force_x_kn: 0,
    torsion_moment_knm: 10,
    gamma_m2: 1.25,
  });
});

test("ec3 splice moment connection form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_splice_moment_connection", {
    "beam.steel_grade": "S355",
    "end_plate.steel_grade": "S355",
    "beam.height_mm": "400",
    "beam.width_mm": "180",
    "beam.web_thickness_mm": "8.6",
    "beam.flange_thickness_mm": "13.5",
    "beam.root_radius_mm": "21",
    "end_plate.thickness_mm": "20",
    "end_plate.width_mm": "200",
    "end_plate.height_mm": "450",
    "welds.flange_throat_mm": "8",
    "welds.web_throat_mm": "5",
    "bolts.diameter_mm": "20",
    "bolts.bolt_class": "8.8",
    "bolts.horizontal_spacing_mm": "100",
    "bolts.edge_distance_horizontal_mm": "50",
    "bolts.rows.0.vertical_position_mm": "60",
    "bolts.rows.1.vertical_position_mm": "140",
    "bolts.rows.2.vertical_position_mm": "310",
    "bolts.rows.3.vertical_position_mm": "390",
    "loads.moment_knm": "150",
    "loads.shear_kn": "100",
  });

  assert.equal(payload.beam.profile, "IPE400");
  assert.equal(payload.beam.height_mm, 400);
  assert.equal(payload.end_plate.height_mm, 450);
  assert.equal(payload.welds.web_throat_mm, 5);
  assert.equal(payload.bolts.diameter_mm, 20);
  assert.deepEqual(payload.bolts.rows, [
    { row_id: 1, vertical_position_mm: 60, number_of_bolts: 2 },
    { row_id: 2, vertical_position_mm: 140, number_of_bolts: 2 },
    { row_id: 3, vertical_position_mm: 310, number_of_bolts: 2 },
    { row_id: 4, vertical_position_mm: 390, number_of_bolts: 2 },
  ]);
  assert.deepEqual(payload.loads, { moment_knm: 150, shear_kn: 100, axial_kn: 0 });
  assert.equal(payload.gamma_m2, 1.25);
});

test("ec3 double-sided web connection form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_double_sided_web_connection", {
    "primary.steel_grade": "S355",
    "secondary.steel_grade": "S235",
    "end_plate.steel_grade": "S235",
    "primary.height_mm": "240",
    "primary.width_mm": "120",
    "primary.web_thickness_mm": "6.2",
    "primary.flange_thickness_mm": "9.8",
    "primary.root_radius_mm": "15",
    "secondary.height_mm": "180",
    "secondary.width_mm": "70",
    "secondary.web_thickness_mm": "8",
    "secondary.flange_thickness_mm": "11",
    "secondary.root_radius_mm": "11",
    "end_plate.thickness_mm": "15",
    "end_plate.width_mm": "120",
    "end_plate.height_mm": "200",
    "welds.flange_throat_mm": "5",
    "welds.web_throat_mm": "4",
    "bolts.diameter_mm": "16",
    "bolts.bolt_class": "8.8",
    "bolts.horizontal_spacing_mm": "70",
    "bolts.edge_distance_horizontal_mm": "25",
    "bolts.rows.0.vertical_position_mm": "160",
    "bolts.rows.1.vertical_position_mm": "40",
    "loads.moment_knm": "15",
    "loads.shear_kn": "30",
    web_bearing_factor: "1",
  });

  assert.equal(payload.project_name, "Library Integration Test");
  assert.equal(payload.primary.profile, "IPE240");
  assert.equal(payload.primary.web_thickness_mm, 6.2);
  assert.equal(payload.secondary.profile, "UPN180");
  assert.equal(payload.secondary.flange_thickness_mm, 11);
  assert.equal(payload.end_plate.thickness_mm, 15);
  assert.equal(payload.welds.web_throat_mm, 4);
  assert.deepEqual(payload.bolts.rows, [
    { row_id: 1, vertical_position_mm: 160, number_of_bolts: 2 },
    { row_id: 2, vertical_position_mm: 40, number_of_bolts: 2 },
  ]);
  assert.deepEqual(payload.loads, { moment_knm: 15, shear_kn: 30, axial_kn: 0 });
  assert.equal(payload.web_bearing_factor, 1);
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

test("ec3 bolted lap joint form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_bolted_lap_joint", {
    plate_t1_mm: "10",
    plate_t2_mm: "8",
    plate_width_mm: "140",
    steel_grade: "S355",
    bolt_class: "8.8",
    bolt_diameter_mm: "16",
    shear_in_threads: "true",
    num_rows: "2",
    num_cols: "2",
    e1_mm: "40",
    e2_mm: "35",
    p1_mm: "60",
    p2_mm: "70",
    force_uls_kn: "150",
    force_sls_kn: "90",
    category: "B",
    friction_surface_class: "A",
    hole_type: "normal",
    primary_web_thickness_mm: "8",
    primary_web_fu_mpa: "490",
    web_bearing_factor: "1",
  });

  assert.deepEqual(payload, {
    plate_t1_mm: 10,
    plate_t2_mm: 8,
    plate_width_mm: 140,
    steel_grade: "S355",
    bolt_class: "8.8",
    bolt_diameter_mm: 16,
    shear_in_threads: true,
    num_rows: 2,
    num_cols: 2,
    e1_mm: 40,
    e2_mm: 35,
    p1_mm: 60,
    p2_mm: 70,
    force_uls_kn: 150,
    force_sls_kn: 90,
    category: "B",
    friction_surface_class: "A",
    hole_type: "normal",
    primary_web_thickness_mm: 8,
    primary_web_fu_mpa: 490,
    web_bearing_factor: 1,
  });
});

test("ec3 bolted moment connection form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec3_bolted_moment_connection", {
    "column.steel_grade": "S355",
    "beam.steel_grade": "S355",
    "end_plate.steel_grade": "S355",
    "column.height_mm": "400",
    "column.width_mm": "300",
    "column.web_thickness_mm": "13.5",
    "column.flange_thickness_mm": "24",
    "column.root_radius_mm": "27",
    "beam.height_mm": "600",
    "beam.width_mm": "220",
    "beam.web_thickness_mm": "12",
    "beam.flange_thickness_mm": "19",
    "beam.root_radius_mm": "24",
    "end_plate.thickness_mm": "30",
    "end_plate.width_mm": "280",
    "end_plate.height_mm": "750",
    "welds.flange_throat_mm": "12",
    "welds.web_throat_mm": "8",
    "bolts.diameter_mm": "27",
    "bolts.bolt_class": "10.9",
    "bolts.horizontal_spacing_mm": "120",
    "bolts.edge_distance_horizontal_mm": "50",
    "bolts.edge_distance_vertical_top_mm": "70",
    "bolts.edge_distance_vertical_bottom_mm": "70",
    "bolts.rows.0.vertical_position_mm": "500",
    "bolts.rows.1.vertical_position_mm": "600",
    "bolts.rows.2.vertical_position_mm": "680",
    "loads.moment_knm": "500",
    "loads.shear_kn": "200",
    "loads.axial_kn": "0",
  });

  assert.equal(payload.column.profile, "HEB400");
  assert.equal(payload.beam.profile, "IPE600");
  assert.equal(payload.column.height_mm, 400);
  assert.equal(payload.beam.flange_thickness_mm, 19);
  assert.equal(payload.end_plate.thickness_mm, 30);
  assert.equal(payload.welds.flange_throat_mm, 12);
  assert.equal(payload.bolts.diameter_mm, 27);
  assert.equal(payload.bolts.bolt_class, "10.9");
  assert.deepEqual(payload.bolts.rows, [
    { row_id: 1, vertical_position_mm: 500, number_of_bolts: 2 },
    { row_id: 2, vertical_position_mm: 600, number_of_bolts: 2 },
    { row_id: 3, vertical_position_mm: 680, number_of_bolts: 2 },
  ]);
  assert.deepEqual(payload.loads, { moment_knm: 500, shear_kn: 200, axial_kn: 0 });
  assert.equal(payload.connection_type, "single_sided");
  assert.equal(payload.include_prying_action, true);
  assert.equal(payload.gamma_m2, 1.25);
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

test("masonry contact pressure form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec6_masonry_contact_pressure", {
    profile_name: "HE 240 A",
    beam_width_mm: "240",
    n_ed_kn: "64.03",
    masonry_thickness_mm: "140",
    support_length_mm: "140",
    fd_design_mpa: "3",
  });

  assert.deepEqual(payload, {
    beam_id: "B2.1",
    n_ed_kn: 64.03,
    profile_name: "HE 240 A",
    beam_width_mm: 240,
    masonry_thickness_mm: 140,
    support_length_mm: 140,
    fd_design_mpa: 3,
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

test("timber member ULS 6-component form metadata builds the API payload", () => {
  const payload = buildPayloadFromFormValues("ec5_timber_member_uls_6_component", {
    b_mm: "120",
    h_mm: "360",
    l_ef_mm: "5000",
    wood_grade: "GL24h",
    n_ed_kn: "20",
    vy_ed_kn: "10",
    vz_ed_kn: "2",
    mt_ed_knm: "1",
    my_ed_knm: "18",
    mz_ed_knm: "2",
    k_mod: "0.8",
    support_condition: "fixed-pinned",
    lateral_restraint_type: "discrete",
    lateral_restraint_spacing_mm: "1250",
    load_position: "centroid",
  });

  assert.deepEqual(payload, {
    b_mm: 120,
    h_mm: 360,
    l_ef_mm: 5000,
    wood_grade: "GL24h",
    n_ed_kn: 20,
    vy_ed_kn: 10,
    vz_ed_kn: 2,
    mt_ed_knm: 1,
    my_ed_knm: 18,
    mz_ed_knm: 2,
    k_mod: 0.8,
    support_condition: "fixed-pinned",
    lateral_restraint_type: "discrete",
    lateral_restraint_spacing_mm: 1250,
    load_position: "centroid",
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

test("steel-timber double-shear form metadata builds nested spacing payload", () => {
  const payload = buildPayloadFromFormValues("ec5_steel_timber_double_shear_connection", {
    t2_mm: "100",
    t_plate_mm: "8",
    n: "4",
    timber_type: "Softwood",
    rho_k: "350",
    service_class: "1",
    load_duration: "Medium-term",
    d_mm: "12",
    f_uk_mpa: "400",
    "spacings.a1_mm": "80",
    "spacings.a2_mm": "60",
    "spacings.a3t_mm": "100",
    "spacings.a4t_mm": "40",
    alpha_deg: "0",
    f_d_kn: "35",
  });

  assert.deepEqual(payload, {
    t2_mm: 100,
    t_plate_mm: 8,
    n: 4,
    timber_type: "Softwood",
    rho_k: 350,
    service_class: 1,
    load_duration: "Medium-term",
    d_mm: 12,
    f_uk_mpa: 400,
    spacings: {
      a1_mm: 80,
      a2_mm: 60,
      a3t_mm: 100,
      a4t_mm: 40,
    },
    alpha_deg: 0,
    f_d_kn: 35,
  });
});

test("steel-timber five-member form metadata builds nested spacing payload", () => {
  const payload = buildPayloadFromFormValues("ec5_steel_timber_five_member_connection", {
    t_w1_mm: "80",
    t_w2_mm: "100",
    t_plate_mm: "8",
    n: "4",
    timber_type: "Softwood",
    rho_k: "350",
    service_class: "1",
    load_duration: "Medium-term",
    d_mm: "12",
    f_uk_mpa: "400",
    "spacings.a1_mm": "80",
    "spacings.a2_mm": "60",
    "spacings.a3t_mm": "100",
    "spacings.a4t_mm": "40",
    alpha_deg: "0",
    f_d_kn: "70",
  });

  assert.deepEqual(payload, {
    t_w1_mm: 80,
    t_w2_mm: 100,
    t_plate_mm: 8,
    n: 4,
    timber_type: "Softwood",
    rho_k: 350,
    service_class: 1,
    load_duration: "Medium-term",
    d_mm: 12,
    f_uk_mpa: 400,
    spacings: {
      a1_mm: 80,
      a2_mm: 60,
      a3t_mm: 100,
      a4t_mm: 40,
    },
    alpha_deg: 0,
    f_d_kn: 70,
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

test("toothed-plate connection form metadata builds nested spacing payload", () => {
  const payload = buildPayloadFromFormValues("ec5_toothed_plate_connection", {
    t1_mm: "80",
    t2_mm: "80",
    n: "4",
    timber_type_1: "Softwood",
    timber_type_2: "Softwood",
    rho_k_1: "350",
    rho_k_2: "350",
    service_class_1: "1",
    service_class_2: "1",
    load_duration: "Medium-term",
    connector_type: "C1-C9",
    dc_mm: "75",
    he_mm: "17",
    d_mm: "12",
    f_uk_mpa: "500",
    "spacings.a1_mm": "140",
    "spacings.a2_mm": "95",
    "spacings.a3t_mm": "120",
    "spacings.a3c_mm": "95",
    "spacings.a4t_mm": "50",
    "spacings.a4c_mm": "50",
    alpha_deg: "0",
    f_v_ed_kn: "40",
  });

  assert.deepEqual(payload, {
    t1_mm: 80,
    t2_mm: 80,
    n: 4,
    timber_type_1: "Softwood",
    timber_type_2: "Softwood",
    rho_k_1: 350,
    rho_k_2: 350,
    service_class_1: 1,
    service_class_2: 1,
    load_duration: "Medium-term",
    connector_type: "C1-C9",
    dc_mm: 75,
    he_mm: 17,
    d_mm: 12,
    f_uk_mpa: 500,
    spacings: {
      a1_mm: 140,
      a2_mm: 95,
      a3t_mm: 120,
      a3c_mm: 95,
      a4t_mm: 50,
      a4c_mm: 50,
    },
    alpha_deg: 0,
    f_v_ed_kn: 40,
  });
});

test("timber-timber double-shear form metadata builds nested spacing payload", () => {
  const payload = buildPayloadFromFormValues("ec5_timber_timber_double_shear_connection", {
    t1_mm: "50",
    t2_mm: "100",
    n: "4",
    timber_type_outer: "Softwood",
    timber_type_inner: "Softwood",
    rho_k_outer: "420",
    rho_k_inner: "420",
    service_class_outer: "2",
    service_class_inner: "2",
    load_duration: "Short-term",
    fastener_type: "Bolt",
    d_mm: "12",
    f_uk_mpa: "500",
    pre_drilled: false,
    use_rope_effect: false,
    f_ax_rk_n: "0",
    "spacings.a1_mm": "90",
    "spacings.a2_mm": "60",
    "spacings.a3t_mm": "120",
    "spacings.a3c_mm": "180",
    "spacings.a4t_mm": "70",
    "spacings.a4c_mm": "45",
    alpha_deg: "30",
    f_v_ed_kn: "35",
  });

  assert.deepEqual(payload, {
    t1_mm: 50,
    t2_mm: 100,
    n: 4,
    timber_type_outer: "Softwood",
    timber_type_inner: "Softwood",
    rho_k_outer: 420,
    rho_k_inner: 420,
    service_class_outer: 2,
    service_class_inner: 2,
    load_duration: "Short-term",
    fastener_type: "Bolt",
    d_mm: 12,
    f_uk_mpa: 500,
    pre_drilled: false,
    use_rope_effect: false,
    f_ax_rk_n: 0,
    spacings: {
      a1_mm: 90,
      a2_mm: 60,
      a3t_mm: 120,
      a3c_mm: 180,
      a4t_mm: 70,
      a4c_mm: 45,
    },
    alpha_deg: 30,
    f_v_ed_kn: 35,
  });
});

test("all first-wave tools expose form metadata", () => {
  assert.deepEqual(
    Object.entries(TOOL_CATALOG).filter(([, tool]) => !tool.form).map(([toolId]) => toolId),
    []
  );
  assert.equal(buildPayloadFromFormValues("unknown_tool", {}), null);
});

test("supporting tool result summaries format returned API fields only", () => {
  const composite = buildResultSummaryItems({
    calculator_id: "beam_composite_shear_stress",
    result: {
      tau_n_per_mm2: 1.118283,
      neutral_axis_y_mm: 208,
      transformed_inertia_i_prime_mm4: 328462628.571429,
      static_moment_s_prime_mm3: 1101942.857143,
      actual_width_at_target_mm: 300,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(composite, [
    { label: "Tau", value: "1.118 N/mm2" },
    { label: "Neutral axis", value: "208 mm" },
    { label: "I'", value: "328462628.6 mm4" },
    { label: "S'", value: "1101942.9 mm3" },
    { label: "Width", value: "300 mm" },
    { label: "Warnings", value: "None" },
  ]);

  const simpleBeam = buildResultSummaryItems({
    calculator_id: "beam_simple_diagrams",
    result: {
      cases: {
        uls: {
          m_max_knm: 71.484375,
          v_max_kn: 38.4375,
          reactions: {
            left_kn: 38.4375,
            right_kn: 38.4375,
          },
        },
        sls: {
          m_max_knm: 48.4375,
          v_max_kn: 26.25,
        },
      },
      warning_codes: ["SOURCE_SIMPLIFIED_MAXIMA"],
    },
  }, "en");

  assert.deepEqual(simpleBeam, [
    { label: "ULS Mmax", value: "71.484 kNm" },
    { label: "ULS Vmax", value: "38.438 kN" },
    { label: "SLS Mmax", value: "48.438 kNm" },
    { label: "SLS Vmax", value: "26.25 kN" },
    { label: "ULS R left", value: "38.438 kN" },
    { label: "ULS R right", value: "38.438 kN" },
    { label: "Warnings", value: "SOURCE_SIMPLIFIED_MAXIMA" },
  ]);
});

test("EC1 result summaries format returned API fields only", () => {
  const roofLoads = buildResultSummaryItems({
    calculator_id: "ec1_roof_loads",
    result: {
      overall_status: "PASS",
      governing_variable_load_kn_m2: 0.73112,
      governing_variable_load_kind: "maintenance_formula",
      snow_load_kn_m2: 0.266667,
      maintenance_load_formula_kn_m2: 0.73112,
      snow_shape_coefficient_mu1: 0.533333,
      warning_codes: ["MAINTENANCE_FORMULA_GOVERNS"],
    },
  }, "en");

  assert.deepEqual(roofLoads, [
    { label: "Status", value: "PASS" },
    { label: "Governing load", value: "0.731 kN/m2" },
    { label: "Governing type", value: "maintenance_formula" },
    { label: "Snow load", value: "0.267 kN/m2" },
    { label: "Maintenance formula", value: "0.731 kN/m2" },
    { label: "mu1", value: "0.533" },
    { label: "Warnings", value: "MAINTENANCE_FORMULA_GOVERNS" },
  ]);
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

  const contactPressure = buildResultSummaryItems({
    calculator_id: "ec6_masonry_contact_pressure",
    result: {
      overall_status: "PASS",
      sigma_d_mpa: 1.905654761904762,
      f_rdc_mpa: 3,
      utilization_percent: 63.52182539682539,
      required_length_mm: 88.93055555555556,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(contactPressure, [
    { label: "Status", value: "PASS" },
    { label: "Contact pressure", value: "1.906 MPa" },
    { label: "Resistance", value: "3 MPa" },
    { label: "Utilization", value: "63.522 %" },
    { label: "Required length", value: "88.931 mm" },
    { label: "Warnings", value: "None" },
  ]);
  assert.deepEqual(buildResultSummaryItems({ calculator_id: "unknown", result: {} }, "en"), []);
});

test("ec3 result summaries format returned API fields only", () => {
  const torsion = buildResultSummaryItems({
    calculator_id: "ec3_bolt_group_torsion",
    result: {
      overall_status: "PASS",
      critical_bolt_id: 2,
      max_bolt_force_kn: 55.901699,
      shear_resistance_per_bolt_kn: 94.08,
      utilization_percent: 59.4,
      warning_codes: ["SHEAR_RESISTANCE_GOVERNS"],
    },
  }, "en");

  assert.deepEqual(torsion, [
    { label: "Status", value: "PASS" },
    { label: "Critical bolt", value: "2" },
    { label: "Max bolt force", value: "55.902 kN" },
    { label: "Shear resistance/bolt", value: "94.08 kN" },
    { label: "Utilization", value: "59.4 %" },
    { label: "Warnings", value: "SHEAR_RESISTANCE_GOVERNS" },
  ]);

  const splice = buildResultSummaryItems({
    calculator_id: "ec3_splice_moment_connection",
    result: {
      overall_status: "PASS",
      mj_rd_knm: 166.707113,
      sj_ini_knm_per_rad: 200118.4059,
      utilization_percent: 90,
      compression_flange_governs: true,
      warning_codes: ["COMPRESSION_FLANGE_GOVERNS"],
    },
  }, "en");

  assert.deepEqual(splice, [
    { label: "Status", value: "PASS" },
    { label: "Mj,Rd", value: "166.7 kNm" },
    { label: "Sj,ini", value: "200118.4 kNm/rad" },
    { label: "Utilization", value: "90 %" },
    { label: "Compression flange governs", value: "PASS" },
    { label: "Warnings", value: "COMPRESSION_FLANGE_GOVERNS" },
  ]);

  const doubleSided = buildResultSummaryItems({
    calculator_id: "ec3_double_sided_web_connection",
    result: {
      overall_status: "PASS",
      critical_component: "Moment Resistance",
      max_utilization: 0.877205,
      moment_resistance_knm: 17.099775,
      primary_web_bearing_capacity_kn: 170.236018,
      warning_codes: ["COMPRESSION_REDUCTION_APPLIED", "SECONDARY_FLANGE_COMPRESSION_GOVERNS"],
    },
  }, "en");

  assert.deepEqual(doubleSided, [
    { label: "Status", value: "PASS" },
    { label: "Critical", value: "Moment Resistance" },
    { label: "Max utilization", value: "0.877" },
    { label: "Moment resistance", value: "17.1 kNm" },
    { label: "Primary web bearing", value: "170.2 kN" },
    { label: "Warnings", value: "COMPRESSION_REDUCTION_APPLIED, SECONDARY_FLANGE_COMPRESSION_GOVERNS" },
  ]);

  const bolt = buildResultSummaryItems({
    calculator_id: "ec3_bolted_lap_joint",
    result: {
      overall_status: "PASS",
      governing_resistance_kn: 295.36,
      utilization_percent: 50.8,
      governing_mode: "net section",
      geometry_warning_count: 0,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(bolt, [
    { label: "Status", value: "PASS" },
    { label: "Governing resistance", value: "295.4 kN" },
    { label: "Utilization", value: "50.8 %" },
    { label: "Governing", value: "net section" },
    { label: "Geometry warnings", value: "0" },
    { label: "Warnings", value: "None" },
  ]);

  const moment = buildResultSummaryItems({
    calculator_id: "ec3_bolted_moment_connection",
    result: {
      overall_status: "PASS",
      mj_rd_knm: 816.149139,
      sj_ini_knm_per_rad: 110909.634316,
      utilization_percent: 96.7,
      critical_component: "Column web panel shear",
      geometry_warning_count: 0,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(moment, [
    { label: "Status", value: "PASS" },
    { label: "Mj,Rd", value: "816.1 kNm" },
    { label: "Sj,ini", value: "110909.6 kNm/rad" },
    { label: "Utilization", value: "96.7 %" },
    { label: "Critical", value: "Column web panel shear" },
    { label: "Geometry warnings", value: "0" },
    { label: "Warnings", value: "None" },
  ]);

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

  const section = buildResultSummaryItems({
    calculator_id: "ec3_steel_section_check",
    result: {
      overall_status: "PASS",
      section_class: 1,
      critical_check: "Deflection",
      utilization_percent: 95.6,
      resistances: {
        m_y_rd_knm: 130.143,
        v_y_rd_kn: 801.391041,
      },
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(section, [
    { label: "Status", value: "PASS" },
    { label: "Section class", value: "1" },
    { label: "Critical", value: "Deflection" },
    { label: "Utilization", value: "95.6 %" },
    { label: "My,Rd", value: "130.1 kNm" },
    { label: "Vy,Rd", value: "801.4 kN" },
    { label: "Warnings", value: "None" },
  ]);

  const ltb = buildResultSummaryItems({
    calculator_id: "ec3_lateral_torsional_buckling",
    result: {
      overall_status: "PASS",
      mb_rd_knm: 46.987879,
      utilization_percent: 85.1283,
      lambda_lt: 1.454546,
      ltb_required: true,
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(ltb, [
    { label: "Status", value: "PASS" },
    { label: "Mb,Rd", value: "46.988 kNm" },
    { label: "Utilization", value: "85.128 %" },
    { label: "Lambda LT", value: "1.455" },
    { label: "LTB required", value: "true" },
    { label: "Warnings", value: "None" },
  ]);

  const optimizer = buildResultSummaryItems({
    calculator_id: "ec3_profile_optimizer",
    result: {
      overall_status: "PASS",
      optimized_profile: {
        profile_name: "IPE 240",
        total_weight_kg: 153.5,
        utilization_percent: 95.6,
      },
      suitable_count: 1,
      warning_codes: ["SOME_CANDIDATES_FAILED"],
    },
  }, "en");

  assert.deepEqual(optimizer, [
    { label: "Status", value: "PASS" },
    { label: "Profile", value: "IPE 240" },
    { label: "Total weight", value: "153.5 kg" },
    { label: "Utilization", value: "95.6 %" },
    { label: "Suitable", value: "1" },
    { label: "Warnings", value: "SOME_CANDIDATES_FAILED" },
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

  const timberMemberUls = buildResultSummaryItems({
    calculator_id: "ec5_timber_member_uls_6_component",
    result: {
      overall_status: "PASS",
      max_utilization: 0.5952811535493826,
      critical_check: "Tension Bending",
      k_crit: 1,
      kc_z: 1,
      warning_codes: ["DISCRETE_LATERAL_RESTRAINT", "ROLLING_SHEAR_CHECK_INCLUDED"],
    },
  }, "en");

  assert.deepEqual(timberMemberUls, [
    { label: "Status", value: "PASS" },
    { label: "Max utilization", value: "0.595" },
    { label: "Critical check", value: "Tension Bending" },
    { label: "kcrit", value: "1" },
    { label: "kc,z", value: "1" },
    { label: "Warnings", value: "DISCRETE_LATERAL_RESTRAINT, ROLLING_SHEAR_CHECK_INCLUDED" },
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

  const steelTimberDouble = buildResultSummaryItems({
    calculator_id: "ec5_steel_timber_double_shear_connection",
    result: {
      overall_status: "PASS",
      r_d_kn: 43.945867167471135,
      utilization_ratio: 0.796434392035552,
      f_v_rk_per_shear_plane_kn: 8.926504268392575,
      governing_mode: "Interpolated (Mode k/Mode m)",
      warning_codes: ["INTERMEDIATE_PLATE_INTERPOLATION"],
    },
  }, "en");

  assert.deepEqual(steelTimberDouble, [
    { label: "Status", value: "PASS" },
    { label: "Rd", value: "43.946 kN" },
    { label: "Utilization", value: "0.796" },
    { label: "Fv,Rk plane", value: "8.927 kN" },
    { label: "Governing mode", value: "Interpolated (Mode k/Mode m)" },
    { label: "Warnings", value: "INTERMEDIATE_PLATE_INTERPOLATION" },
  ]);

  const steelTimberFive = buildResultSummaryItems({
    calculator_id: "ec5_steel_timber_five_member_connection",
    result: {
      overall_status: "PASS",
      r_d_kn: 87.89173433494227,
      utilization_ratio: 0.796434392035552,
      r_k_per_fastener_kn: 35.7060170735703,
      governing_mode: "Interpolated (Mode k/Mode m)",
      warning_codes: ["INTERMEDIATE_PLATE_INTERPOLATION"],
    },
  }, "en");

  assert.deepEqual(steelTimberFive, [
    { label: "Status", value: "PASS" },
    { label: "Rd", value: "87.892 kN" },
    { label: "Utilization", value: "0.796" },
    { label: "Rk per bolt", value: "35.706 kN" },
    { label: "Governing mode", value: "Interpolated (Mode k/Mode m)" },
    { label: "Warnings", value: "INTERMEDIATE_PLATE_INTERPOLATION" },
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

  const timberDouble = buildResultSummaryItems({
    calculator_id: "ec5_timber_timber_double_shear_connection",
    result: {
      overall_status: "PASS",
      r_d_kn: 41.430188063468336,
      utilization_ratio: 0.8447946204439694,
      f_v_rk_per_shear_plane_kn: 7.480450622570672,
      governing_mode: "Mode j (One plastic hinge)",
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(timberDouble, [
    { label: "Status", value: "PASS" },
    { label: "Rd", value: "41.43 kN" },
    { label: "Utilization", value: "0.845" },
    { label: "Fv,Rk plane", value: "7.48 kN" },
    { label: "Governing mode", value: "Mode j (One plastic hinge)" },
    { label: "Warnings", value: "None" },
  ]);

  const toothedPlate = buildResultSummaryItems({
    calculator_id: "ec5_toothed_plate_connection",
    result: {
      overall_status: "PASS",
      r_d_kn: 44.93623302115343,
      r_d_plate_kn: 28.778690341144426,
      r_d_bolt_kn: 16.157542680008998,
      utilization_ratio: 0.8901502709666445,
      governing_bolt_mode: "Mode c (Complex embedment)",
      warning_codes: [],
    },
  }, "en");

  assert.deepEqual(toothedPlate, [
    { label: "Status", value: "PASS" },
    { label: "Total Rd", value: "44.936 kN" },
    { label: "Plate Rd", value: "28.779 kN" },
    { label: "Bolt Rd", value: "16.158 kN" },
    { label: "Utilization", value: "0.89" },
    { label: "Bolt mode", value: "Mode c (Complex embedment)" },
    { label: "Warnings", value: "None" },
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
