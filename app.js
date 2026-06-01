export const API_BASE_URL = "https://easuys-structural-tools-api.yellow-violet-f185.workers.dev";

export const TOOL_CATALOG = {
  ec5_timber_contact_moment_joint: {
    endpoint: "/calculate/ec5/timber-contact-moment-joint",
    title: {
      nl: "EC5 houtcontact momentverbinding",
      en: "EC5 timber contact moment joint",
      fr: "EC5 assemblage bois par contact",
    },
    sample: {
      wood_grade: "GL24h",
      service_class: 2,
      load_duration: "Short",
      interface: { width_mm: 160, height_mm: 360 },
      contact: {
        member_1_angle_deg: 90,
        member_2_angle_deg: 90,
        kc90_member_1: 1,
        kc90_member_2: 1,
      },
      actions: { n_ed_kN: 0, m_ed_kNm: 4 },
      screw_defaults: {
        d: 8,
        d1: 5.6,
        dh: 22,
        lef: 140,
        alpha_deg: 45,
        rho_a: 350,
        f_ax_k: 11,
        f_head_k: 40,
        f_tens_k: 18000,
        axial_stiffness_n_per_mm: 12000,
      },
      screws: [
        { id: "S1", y_mm: -120 },
        { id: "S2", y_mm: -120 },
        { id: "S3", y_mm: -60 },
        { id: "S4", y_mm: -60 },
        { id: "S5", y_mm: 60 },
        { id: "S6", y_mm: 60 },
        { id: "S7", y_mm: 120 },
        { id: "S8", y_mm: 120 },
      ],
    },
  },
  ec5_axial_screw: {
    endpoint: "/calculate/ec5/axial-screw",
    title: {
      nl: "EC5 axiaal belaste schroeven",
      en: "EC5 axially loaded screws",
      fr: "EC5 vis sollicitees axialement",
    },
    sample: {
      n: 4,
      d: 8,
      d1: 5.6,
      dh: 12,
      lef: 80,
      t_timber: 140,
      alpha: 45,
      rho_k: 420,
      rho_a: 350,
      f_ax_k: 0,
      f_head_k: 12,
      f_tens_k: 18000,
      f_ed: 25000,
      service_class: 2,
      load_duration: "Short",
      material_type: "SolidTimber",
      spacings: { a1: 70, a2: 50, a1_cg: 90, a2_cg: 40 },
    },
  },
  ec6_masonry_strength: {
    endpoint: "/calculate/ec6/masonry-strength",
    title: {
      nl: "EC6 druksterkte metselwerk",
      en: "EC6 masonry compressive strength",
      fr: "EC6 resistance en compression maconnerie",
    },
    sample: {
      unit_type: "clay",
      unit_group: "group_1",
      mortar_type: "general_purpose",
      fb_mpa: 15,
      fm_mpa: 12,
      gamma_m: 1.7,
    },
    form: {
      fields: [
        {
          name: "unit_type",
          value_type: "string",
          control: "select",
          label: { nl: "Steentype", en: "Unit type", fr: "Type d'element" },
          options: [
            "clay",
            "calcium_silicate",
            "aggregate_concrete",
            "autoclaved_aerated_concrete",
            "natural_stone",
          ],
        },
        {
          name: "unit_group",
          value_type: "string",
          control: "select",
          label: { nl: "Groep", en: "Group", fr: "Groupe" },
          options: ["group_1", "group_2", "group_3", "group_4"],
        },
        {
          name: "mortar_type",
          value_type: "string",
          control: "select",
          label: { nl: "Mortel", en: "Mortar", fr: "Mortier" },
          options: [
            "general_purpose",
            "thin_layer",
            "lightweight_600_800",
            "lightweight_800_1300",
          ],
        },
        {
          name: "fb_mpa",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fb", en: "fb", fr: "fb" },
          unit: "MPa",
        },
        {
          name: "fm_mpa",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fm", en: "fm", fr: "fm" },
          unit: "MPa",
        },
        {
          name: "gamma_m",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "gamma_M", en: "gamma_M", fr: "gamma_M" },
        },
      ],
    },
  },
  ec6_beam_bearing: {
    endpoint: "/calculate/ec6/beam-bearing",
    title: {
      nl: "EC6 balkoplegging op metselwerk",
      en: "EC6 beam bearing on masonry",
      fr: "EC6 appui de poutre sur maconnerie",
    },
    sample: {
      fd_mpa: 3,
      unit_group: "group_1",
      n_edc_kn: 80,
      bearing_length_mm: 160,
      bearing_width_mm: 140,
      edge_distance_a1_mm: 120,
      wall_height_below_hc_mm: 600,
      top_of_wall: false,
    },
    form: {
      fields: [
        {
          name: "fd_mpa",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fd", en: "fd", fr: "fd" },
          unit: "MPa",
        },
        {
          name: "unit_group",
          value_type: "string",
          control: "select",
          label: { nl: "Groep", en: "Group", fr: "Groupe" },
          options: ["group_1", "group_2", "group_3", "group_4"],
        },
        {
          name: "n_edc_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "NEdc", en: "NEdc", fr: "NEdc" },
          unit: "kN",
        },
        {
          name: "bearing_length_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Opleglengte", en: "Bearing length", fr: "Longueur d'appui" },
          unit: "mm",
        },
        {
          name: "bearing_width_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Oplegbreedte", en: "Bearing width", fr: "Largeur d'appui" },
          unit: "mm",
        },
        {
          name: "edge_distance_a1_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Randafstand a1", en: "Edge distance a1", fr: "Distance au bord a1" },
          unit: "mm",
        },
        {
          name: "wall_height_below_hc_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Wandhoogte hc", en: "Wall height hc", fr: "Hauteur du mur hc" },
          unit: "mm",
        },
        {
          name: "top_of_wall",
          value_type: "boolean",
          control: "checkbox",
          label: { nl: "Bovenaan wand", en: "Top of wall", fr: "Haut du mur" },
        },
      ],
    },
  },
  ec6_inplane_shear_wall: {
    endpoint: "/calculate/ec6/inplane-shear-wall",
    title: {
      nl: "EC6 metselwerkwand in het vlak",
      en: "EC6 in-plane masonry shear wall",
      fr: "EC6 voile en maconnerie dans son plan",
    },
    sample: {
      length_mm: 1200,
      thickness_mm: 140,
      material_type: "clay",
      fb_mpa: 15,
      fm_mpa: 12,
      mortar_class: "M10-M20",
      mortar_type: "general_purpose",
      n_ed_kn: 120,
      v_ed_kn: 35,
      m_ed_knm: 20,
      gamma_m: 2,
    },
  },
  ec6_lateral_wall_resistance: {
    endpoint: "/calculate/ec6/lateral-wall-resistance",
    title: {
      nl: "EC6 metselwerkwand uit het vlak",
      en: "EC6 lateral masonry wall resistance",
      fr: "EC6 mur en maconnerie hors plan",
    },
    sample: {
      height_m: 3,
      length_m: 4,
      thickness_mm: 140,
      support_case: "four_sides",
      material_type: "clay_abs_lt_7",
      mortar_class: "M6_M4",
      n_ed_line_kn_per_m: 60,
      w_ed_kn_per_m2: 1.2,
      gamma_m: 2,
    },
  },
};

const TEXT = {
  nl: {
    form: "Invoerformulier",
    input: "Invoer JSON",
    result: "Resultaat",
    calculate: "Bereken",
    save: "Bewaar",
    load: "Laad",
    status: "Indicatief rekenrecord.",
  },
  en: {
    form: "Input form",
    input: "Input JSON",
    result: "Result",
    calculate: "Calculate",
    save: "Save",
    load: "Load",
    status: "Indicative calculation record.",
  },
  fr: {
    form: "Formulaire",
    input: "JSON d'entree",
    result: "Resultat",
    calculate: "Calculer",
    save: "Enregistrer",
    load: "Charger",
    status: "Releve de calcul indicatif.",
  },
};

const STORAGE_KEY = "ea-suys-structural-tools-input";

export function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

export function buildPayloadFromFormValues(toolId, values) {
  const tool = TOOL_CATALOG[toolId];
  if (!tool?.form) return null;
  const payload = {};
  for (const field of tool.form.fields) {
    const rawValue = values[field.name] ?? tool.sample[field.name] ?? "";
    payload[field.name] = coerceFieldValue(field, rawValue);
  }
  return payload;
}

export function initApp(documentRef = globalThis.document) {
  if (!documentRef) return;
  const state = { lang: "en", toolId: "ec5_timber_contact_moment_joint" };
  const tabs = documentRef.querySelector("[data-tool-tabs]");
  const input = documentRef.querySelector("[data-json-input]");
  const output = documentRef.querySelector("[data-result-output]");
  const form = documentRef.querySelector("[data-calculator-form]");
  const friendlyForm = documentRef.querySelector("[data-friendly-form]");

  function render() {
    const text = TEXT[state.lang];
    const activeTool = TOOL_CATALOG[state.toolId];
    tabs.innerHTML = Object.entries(TOOL_CATALOG).map(([toolId, tool]) => (
      `<button type="button" data-tool-id="${toolId}" ${toolId === state.toolId ? 'aria-current="true"' : ""}>${escapeHtml(tool.title[state.lang])}</button>`
    )).join("");
    documentRef.querySelector("[data-tool-title]").textContent = activeTool.title[state.lang];
    documentRef.querySelector("[data-tool-status]").textContent = text.status;
    documentRef.querySelector("[data-input-label]").textContent = text.input;
    documentRef.querySelector("[data-result-heading]").textContent = text.result;
    documentRef.querySelector("[data-calculate]").textContent = text.calculate;
    documentRef.querySelector("[data-save]").textContent = text.save;
    documentRef.querySelector("[data-load]").textContent = text.load;
    renderFriendlyForm(friendlyForm, activeTool, state.lang, text.form);
    documentRef.querySelectorAll("[data-lang]").forEach((button) => {
      if (button.dataset.lang === state.lang) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });
    input.value = formatJson(activeTool.sample);
  }

  tabs.addEventListener("click", (event) => {
    const toolId = event.target?.dataset?.toolId;
    if (!toolId) return;
    state.toolId = toolId;
    render();
  });

  documentRef.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.lang = button.dataset.lang;
      render();
    });
  });

  friendlyForm.addEventListener("input", () => {
    syncJsonFromFriendlyForm(state.toolId, friendlyForm, input);
  });

  friendlyForm.addEventListener("change", () => {
    syncJsonFromFriendlyForm(state.toolId, friendlyForm, input);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    output.textContent = "";
    try {
      const payload = JSON.parse(input.value);
      const response = await fetch(`${API_BASE_URL}${TOOL_CATALOG[state.toolId].endpoint}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      output.textContent = formatJson(result);
    } catch (error) {
      output.textContent = formatJson({ error: error.message });
    }
  });

  documentRef.querySelector("[data-save]").addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ toolId: state.toolId, input: input.value }));
  });

  documentRef.querySelector("[data-load]").addEventListener("click", () => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) return;
    if (TOOL_CATALOG[saved.toolId]) state.toolId = saved.toolId;
    render();
    input.value = saved.input;
  });

  render();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderFriendlyForm(container, tool, lang, heading) {
  if (!tool.form) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  container.hidden = false;
  container.innerHTML = [
    `<div class="friendly-form-heading">${escapeHtml(heading)}</div>`,
    `<div class="friendly-fields">${tool.form.fields.map((field) =>
      renderFriendlyField(field, tool.sample[field.name], lang)
    ).join("")}</div>`,
  ].join("");
}

function renderFriendlyField(field, value, lang) {
  const baseLabel = field.label[lang] || field.label.en;
  const label = field.unit ? `${baseLabel} (${field.unit})` : baseLabel;
  if (field.control === "checkbox") {
    return `<label class="friendly-field friendly-field-checkbox"><input name="${escapeHtml(field.name)}" type="checkbox" ${value ? "checked" : ""}><span>${escapeHtml(label)}</span></label>`;
  }
  const control = field.control === "select"
    ? `<select name="${escapeHtml(field.name)}">${field.options.map((option) =>
      `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`
    ).join("")}</select>`
    : `<input name="${escapeHtml(field.name)}" type="number" step="${escapeHtml(field.step || "any")}" value="${escapeHtml(value)}">`;
  return `<label class="friendly-field"><span>${escapeHtml(label)}</span>${control}</label>`;
}

function syncJsonFromFriendlyForm(toolId, container, input) {
  const values = {};
  container.querySelectorAll("[name]").forEach((control) => {
    values[control.name] = control.type === "checkbox" ? control.checked : control.value;
  });
  const payload = buildPayloadFromFormValues(toolId, values);
  if (payload) input.value = formatJson(payload);
}

function coerceFieldValue(field, rawValue) {
  if (field.value_type === "boolean") return rawValue === true || rawValue === "true" || rawValue === "on";
  if (field.value_type !== "number") return String(rawValue);
  if (rawValue === "") return "";
  const value = Number(rawValue);
  return Number.isFinite(value) ? value : rawValue;
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => initApp(document));
}
