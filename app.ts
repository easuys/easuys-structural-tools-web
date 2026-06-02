export const API_BASE_URL = "https://easuys-structural-tools-api.yellow-violet-f185.workers.dev";

export const TOOL_CATALOG = {
  beam_composite_shear_stress: {
    endpoint: "/calculate/beam/composite-shear-stress",
    title: {
      nl: "Samengestelde balk schuifspanning",
      en: "Composite beam shear stress",
      fr: "Contrainte de cisaillement composite",
    },
    sample: {
      components: [
        { name: "Staal Plaat Onder", e_modulus_mpa: 210000, width_mm: 150, height_mm: 8, y_bottom_mm: 0 },
        { name: "Beton", e_modulus_mpa: 30000, width_mm: 300, height_mm: 400, y_bottom_mm: 8 },
        { name: "Staal Plaat Boven", e_modulus_mpa: 210000, width_mm: 150, height_mm: 8, y_bottom_mm: 408 },
      ],
      shear_force_n: 100000,
      y_target_mm: 208,
      distribution_points: 21,
    },
    form: {
      fields: [
        { name: "components.0.name", path: ["components", 0, "name"], value_type: "string", control: "text", label: { nl: "Component 1", en: "Component 1", fr: "Composant 1" } },
        { name: "components.0.e_modulus_mpa", path: ["components", 0, "e_modulus_mpa"], value_type: "number", control: "number", step: "100", label: { nl: "E 1", en: "E 1", fr: "E 1" }, unit: "N/mm2" },
        { name: "components.0.width_mm", path: ["components", 0, "width_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Breedte 1", en: "Width 1", fr: "Largeur 1" }, unit: "mm" },
        { name: "components.0.height_mm", path: ["components", 0, "height_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Hoogte 1", en: "Height 1", fr: "Hauteur 1" }, unit: "mm" },
        { name: "components.0.y_bottom_mm", path: ["components", 0, "y_bottom_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Onderkant 1", en: "Bottom 1", fr: "Bas 1" }, unit: "mm" },
        { name: "components.1.name", path: ["components", 1, "name"], value_type: "string", control: "text", label: { nl: "Component 2", en: "Component 2", fr: "Composant 2" } },
        { name: "components.1.e_modulus_mpa", path: ["components", 1, "e_modulus_mpa"], value_type: "number", control: "number", step: "100", label: { nl: "E 2", en: "E 2", fr: "E 2" }, unit: "N/mm2" },
        { name: "components.1.width_mm", path: ["components", 1, "width_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Breedte 2", en: "Width 2", fr: "Largeur 2" }, unit: "mm" },
        { name: "components.1.height_mm", path: ["components", 1, "height_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Hoogte 2", en: "Height 2", fr: "Hauteur 2" }, unit: "mm" },
        { name: "components.1.y_bottom_mm", path: ["components", 1, "y_bottom_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Onderkant 2", en: "Bottom 2", fr: "Bas 2" }, unit: "mm" },
        { name: "components.2.name", path: ["components", 2, "name"], value_type: "string", control: "text", label: { nl: "Component 3", en: "Component 3", fr: "Composant 3" } },
        { name: "components.2.e_modulus_mpa", path: ["components", 2, "e_modulus_mpa"], value_type: "number", control: "number", step: "100", label: { nl: "E 3", en: "E 3", fr: "E 3" }, unit: "N/mm2" },
        { name: "components.2.width_mm", path: ["components", 2, "width_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Breedte 3", en: "Width 3", fr: "Largeur 3" }, unit: "mm" },
        { name: "components.2.height_mm", path: ["components", 2, "height_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Hoogte 3", en: "Height 3", fr: "Hauteur 3" }, unit: "mm" },
        { name: "components.2.y_bottom_mm", path: ["components", 2, "y_bottom_mm"], value_type: "number", control: "number", step: "1", label: { nl: "Onderkant 3", en: "Bottom 3", fr: "Bas 3" }, unit: "mm" },
        { name: "shear_force_n", value_type: "number", control: "number", step: "100", label: { nl: "Dwarskracht V", en: "Shear V", fr: "Effort tranchant V" }, unit: "N" },
        { name: "y_target_mm", value_type: "number", control: "number", step: "1", label: { nl: "Doelhoogte y", en: "Target height y", fr: "Hauteur cible y" }, unit: "mm" },
        { name: "distribution_points", value_type: "number", control: "number", step: "1", label: { nl: "Diagram punten", en: "Diagram points", fr: "Points diagramme" } },
      ],
    },
  },
  beam_continuous_strip: {
    endpoint: "/calculate/beam/continuous-strip",
    title: {
      nl: "Doorlopende strook op vier steunpunten",
      en: "Continuous strip on four supports",
      fr: "Bande continue sur quatre appuis",
    },
    sample: {
      span_lengths_m: [4.64, 2.18, 4.64],
      e_modulus_gpa: 33,
      inertia_m4: 0.00028125,
      uniform_load_kn_per_m: -4.48,
      sample_points: 401,
    },
    form: {
      fields: [
        { name: "span_lengths_m.0", path: ["span_lengths_m", 0], value_type: "number", control: "number", step: "0.01", label: { nl: "Overspanning 1", en: "Span 1", fr: "Portee 1" }, unit: "m" },
        { name: "span_lengths_m.1", path: ["span_lengths_m", 1], value_type: "number", control: "number", step: "0.01", label: { nl: "Overspanning 2", en: "Span 2", fr: "Portee 2" }, unit: "m" },
        { name: "span_lengths_m.2", path: ["span_lengths_m", 2], value_type: "number", control: "number", step: "0.01", label: { nl: "Overspanning 3", en: "Span 3", fr: "Portee 3" }, unit: "m" },
        { name: "e_modulus_gpa", value_type: "number", control: "number", step: "0.1", label: { nl: "E-modulus", en: "E modulus", fr: "Module E" }, unit: "GPa" },
        { name: "inertia_m4", value_type: "number", control: "number", step: "0.000001", label: { nl: "Traagheidsmoment I", en: "Inertia I", fr: "Inertie I" }, unit: "m4" },
        { name: "uniform_load_kn_per_m", value_type: "number", control: "number", step: "0.01", label: { nl: "Uniforme lijnlast", en: "Uniform line load", fr: "Charge lineaire uniforme" }, unit: "kN/m" },
        { name: "sample_points", value_type: "number", control: "number", step: "1", label: { nl: "Diagram punten", en: "Diagram points", fr: "Points diagramme" } },
      ],
    },
  },
  beam_spring_calibration: {
    endpoint: "/calculate/beam/spring-calibration",
    title: {
      nl: "Balk veersteun calibratie",
      en: "Beam spring calibration",
      fr: "Calibration ressort de poutre",
    },
    sample: {
      span_m: 11.742,
      e_modulus_gpa: 210,
      area_m2: 0.003912,
      inertia_m4: 0.00003892,
      uniform_load_kn_per_m: 28.77502545,
      target_moment_knm: 119.05,
      tolerance_knm: 0.1,
      spring_position_m: 5.871,
      sample_points: 401,
    },
    form: {
      fields: [
        { name: "span_m", value_type: "number", control: "number", step: "0.001", label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { name: "spring_position_m", value_type: "number", control: "number", step: "0.001", label: { nl: "Veerpositie", en: "Spring position", fr: "Position ressort" }, unit: "m" },
        { name: "e_modulus_gpa", value_type: "number", control: "number", step: "0.1", label: { nl: "E-modulus", en: "E modulus", fr: "Module E" }, unit: "GPa" },
        { name: "area_m2", value_type: "number", control: "number", step: "0.000001", label: { nl: "Doorsnede A", en: "Area A", fr: "Aire A" }, unit: "m2" },
        { name: "inertia_m4", value_type: "number", control: "number", step: "0.000001", label: { nl: "Traagheidsmoment I", en: "Inertia I", fr: "Inertie I" }, unit: "m4" },
        { name: "uniform_load_kn_per_m", value_type: "number", control: "number", step: "0.001", label: { nl: "Uniforme lijnlast", en: "Uniform line load", fr: "Charge lineaire uniforme" }, unit: "kN/m" },
        { name: "target_moment_knm", value_type: "number", control: "number", step: "0.01", label: { nl: "Doelmoment", en: "Target moment", fr: "Moment cible" }, unit: "kNm" },
        { name: "tolerance_knm", value_type: "number", control: "number", step: "0.01", label: { nl: "Tolerantie", en: "Tolerance", fr: "Tolerance" }, unit: "kNm" },
        { name: "sample_points", value_type: "number", control: "number", step: "1", label: { nl: "Diagram punten", en: "Diagram points", fr: "Points diagramme" } },
      ],
    },
  },
  beam_simple_diagrams: {
    endpoint: "/calculate/beam/simple-diagrams",
    title: {
      nl: "Eenvoudige balkdiagrammen",
      en: "Simple beam diagrams",
      fr: "Diagrammes de poutre simple",
    },
    sample: {
      span_m: 5,
      uniform_loads: [
        { label: "floor_load", permanent_kn_per_m: 2.5, variable_kn_per_m: 3 },
      ],
      point_loads: [
        { label: "midspan_point", permanent_kn: 0, variable_kn: 25, position_m: 2.5 },
      ],
      sample_points: 21,
    },
    form: {
      fields: [
        { name: "span_m", value_type: "number", control: "number", step: "0.1", label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { name: "uniform_loads.0.label", path: ["uniform_loads", 0, "label"], value_type: "string", control: "text", label: { nl: "Lijnlast naam", en: "UDL label", fr: "Nom charge repartie" } },
        { name: "uniform_loads.0.permanent_kn_per_m", path: ["uniform_loads", 0, "permanent_kn_per_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "G lijnlast", en: "G UDL", fr: "G repartie" }, unit: "kN/m" },
        { name: "uniform_loads.0.variable_kn_per_m", path: ["uniform_loads", 0, "variable_kn_per_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Q lijnlast", en: "Q UDL", fr: "Q repartie" }, unit: "kN/m" },
        { name: "point_loads.0.label", path: ["point_loads", 0, "label"], value_type: "string", control: "text", label: { nl: "Puntlast naam", en: "Point label", fr: "Nom charge ponctuelle" } },
        { name: "point_loads.0.permanent_kn", path: ["point_loads", 0, "permanent_kn"], value_type: "number", control: "number", step: "0.01", label: { nl: "G puntlast", en: "G point", fr: "G ponctuelle" }, unit: "kN" },
        { name: "point_loads.0.variable_kn", path: ["point_loads", 0, "variable_kn"], value_type: "number", control: "number", step: "0.01", label: { nl: "Q puntlast", en: "Q point", fr: "Q ponctuelle" }, unit: "kN" },
        { name: "point_loads.0.position_m", path: ["point_loads", 0, "position_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Puntlast positie", en: "Point position", fr: "Position charge" }, unit: "m" },
        { name: "sample_points", value_type: "number", control: "number", step: "1", label: { nl: "Diagram punten", en: "Diagram points", fr: "Points diagramme" } },
      ],
    },
  },
  beam_support_fixity_bracketing: {
    endpoint: "/calculate/beam/support-fixity-bracketing",
    title: {
      nl: "Balk steunfixatie bracket",
      en: "Beam support-fixity bracketing",
      fr: "Poutre bracket fixite appuis",
    },
    sample: {
      length_m: 3.2,
      e_modulus_gpa: 11,
      inertia_m4: 0.000072,
      distributed_loads: [
        { label: "zone_1", start_kn_per_m: 8, end_kn_per_m: 8, start_m: 0, end_m: 1.2 },
        { label: "zone_2", start_kn_per_m: 12, end_kn_per_m: 18, start_m: 1.2, end_m: 3.2 },
      ],
      point_loads: [
        { label: "machine", magnitude_kn: 6, position_m: 1.2 },
        { label: "partition", magnitude_kn: 3.5, position_m: 2.7 },
      ],
      sample_points: 81,
    },
    form: {
      fields: [
        { name: "length_m", value_type: "number", control: "number", step: "0.01", label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { name: "e_modulus_gpa", value_type: "number", control: "number", step: "0.1", label: { nl: "E-modulus", en: "E modulus", fr: "Module E" }, unit: "GPa" },
        { name: "inertia_m4", value_type: "number", control: "number", step: "0.000001", label: { nl: "Traagheidsmoment I", en: "Inertia I", fr: "Inertie I" }, unit: "m4" },
        { name: "distributed_loads.0.start_kn_per_m", path: ["distributed_loads", 0, "start_kn_per_m"], value_type: "number", control: "number", step: "0.1", label: { nl: "Zone 1 q start", en: "Zone 1 q start", fr: "Zone 1 q debut" }, unit: "kN/m" },
        { name: "distributed_loads.0.end_kn_per_m", path: ["distributed_loads", 0, "end_kn_per_m"], value_type: "number", control: "number", step: "0.1", label: { nl: "Zone 1 q einde", en: "Zone 1 q end", fr: "Zone 1 q fin" }, unit: "kN/m" },
        { name: "distributed_loads.0.start_m", path: ["distributed_loads", 0, "start_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Zone 1 start", en: "Zone 1 start", fr: "Zone 1 debut" }, unit: "m" },
        { name: "distributed_loads.0.end_m", path: ["distributed_loads", 0, "end_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Zone 1 einde", en: "Zone 1 end", fr: "Zone 1 fin" }, unit: "m" },
        { name: "distributed_loads.1.start_kn_per_m", path: ["distributed_loads", 1, "start_kn_per_m"], value_type: "number", control: "number", step: "0.1", label: { nl: "Zone 2 q start", en: "Zone 2 q start", fr: "Zone 2 q debut" }, unit: "kN/m" },
        { name: "distributed_loads.1.end_kn_per_m", path: ["distributed_loads", 1, "end_kn_per_m"], value_type: "number", control: "number", step: "0.1", label: { nl: "Zone 2 q einde", en: "Zone 2 q end", fr: "Zone 2 q fin" }, unit: "kN/m" },
        { name: "distributed_loads.1.start_m", path: ["distributed_loads", 1, "start_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Zone 2 start", en: "Zone 2 start", fr: "Zone 2 debut" }, unit: "m" },
        { name: "distributed_loads.1.end_m", path: ["distributed_loads", 1, "end_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Zone 2 einde", en: "Zone 2 end", fr: "Zone 2 fin" }, unit: "m" },
        { name: "point_loads.0.magnitude_kn", path: ["point_loads", 0, "magnitude_kn"], value_type: "number", control: "number", step: "0.1", label: { nl: "Puntlast 1", en: "Point load 1", fr: "Charge ponctuelle 1" }, unit: "kN" },
        { name: "point_loads.0.position_m", path: ["point_loads", 0, "position_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Positie 1", en: "Position 1", fr: "Position 1" }, unit: "m" },
        { name: "point_loads.1.magnitude_kn", path: ["point_loads", 1, "magnitude_kn"], value_type: "number", control: "number", step: "0.1", label: { nl: "Puntlast 2", en: "Point load 2", fr: "Charge ponctuelle 2" }, unit: "kN" },
        { name: "point_loads.1.position_m", path: ["point_loads", 1, "position_m"], value_type: "number", control: "number", step: "0.01", label: { nl: "Positie 2", en: "Position 2", fr: "Position 2" }, unit: "m" },
        { name: "sample_points", value_type: "number", control: "number", step: "1", label: { nl: "Diagram punten", en: "Diagram points", fr: "Points diagramme" } },
      ],
    },
  },
  composite_embedded_profile_bearing: {
    endpoint: "/calculate/composite/embedded-profile-bearing",
    title: {
      nl: "Ingestort profiel draagvlak",
      en: "Embedded profile bearing",
      fr: "Appui profil encastre",
    },
    sample: {
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
    },
    form: {
      fields: [
        { name: "embedment_height_m", value_type: "number", control: "number", step: "0.01", label: { nl: "Ingestorte hoogte", en: "Embedment height", fr: "Hauteur encastree" }, unit: "m" },
        { name: "profile_width_m", value_type: "number", control: "number", step: "0.01", label: { nl: "Profielbreedte", en: "Profile width", fr: "Largeur profil" }, unit: "m" },
        { name: "v_ed_kn", value_type: "number", control: "number", step: "0.1", label: { nl: "VEd", en: "VEd", fr: "VEd" }, unit: "kN" },
        { name: "m_ed_knm", value_type: "number", control: "number", step: "0.1", label: { nl: "MEd", en: "MEd", fr: "MEd" }, unit: "kNm" },
        { name: "fck_mpa", value_type: "number", control: "number", step: "0.1", label: { nl: "fck", en: "fck", fr: "fck" }, unit: "MPa" },
        { name: "gamma_c", value_type: "number", control: "number", step: "0.01", label: { nl: "gamma c", en: "gamma c", fr: "gamma c" } },
        { name: "bar_diameter_mm", value_type: "number", control: "number", step: "1", label: { nl: "Staafdiameter", en: "Bar diameter", fr: "Diametre barre" }, unit: "mm" },
        { name: "bar_fyk_mpa", value_type: "number", control: "number", step: "1", label: { nl: "fyk staaf", en: "Bar fyk", fr: "fyk barre" }, unit: "MPa" },
        { name: "gamma_s", value_type: "number", control: "number", step: "0.01", label: { nl: "gamma s", en: "gamma s", fr: "gamma s" } },
        { name: "provided_bars", value_type: "number", control: "number", step: "1", label: { nl: "Voorziene staven", en: "Provided bars", fr: "Barres prevues" } },
        { name: "sample_points", value_type: "number", control: "number", step: "1", label: { nl: "Diagram punten", en: "Diagram points", fr: "Points diagramme" } },
      ],
    },
  },
  ec1_roof_loads: {
    endpoint: "/calculate/ec1/roof-loads",
    title: {
      nl: "EC1 daklasten",
      en: "EC1 roof loads",
      fr: "EC1 charges de toiture",
    },
    sample: {
      roof_angle_degrees: 40,
      roof_surface_area_m2: 6.888,
      altitude_m: 0,
      obstacle: false,
      ground_snow_load_kn_m2: 0.5,
      ce_exposure: 1,
      ct_thermal: 1,
      maintenance_category_h_kn_m2: 0.4,
    },
    form: {
      fields: [
        {
          name: "roof_angle_degrees",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Dakhelling", en: "Roof angle", fr: "Inclinaison toiture" },
          unit: "deg",
        },
        {
          name: "roof_surface_area_m2",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "Dakoppervlak", en: "Roof surface", fr: "Surface toiture" },
          unit: "m2",
        },
        {
          name: "altitude_m",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte", en: "Altitude", fr: "Altitude" },
          unit: "m",
        },
        {
          name: "obstacle",
          value_type: "boolean",
          control: "checkbox",
          label: { nl: "Sneeuwophoping door obstakels", en: "Obstacle snow accumulation", fr: "Accumulation par obstacle" },
        },
        {
          name: "ground_snow_load_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "Sneeuwlast grond", en: "Ground snow load", fr: "Charge neige sol" },
          unit: "kN/m2",
        },
        {
          name: "ce_exposure",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "CE", en: "CE", fr: "CE" },
        },
        {
          name: "ct_thermal",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "CT", en: "CT", fr: "CT" },
        },
        {
          name: "maintenance_category_h_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "Onderhoud Cat. H", en: "Maintenance Cat. H", fr: "Entretien Cat. H" },
          unit: "kN/m2",
        },
      ],
    },
  },
  ec2_rectangular_section_capacity: {
    endpoint: "/calculate/ec2/rectangular-section-capacity",
    title: {
      nl: "EC2 rechthoekige betonsectie",
      en: "EC2 rectangular concrete section",
      fr: "EC2 section beton rectangulaire",
    },
    sample: {
      fck_mpa: 35,
      gamma_c: 1.5,
      alpha_cc: 0.85,
      fyk_mpa: 500,
      gamma_s: 1.15,
      h_mm: 400,
      b_mm: 400,
      c1_mm: 40,
      n1: 4,
      phi1_mm: 25,
      c6_mm: 40,
      n6: 4,
      phi6_mm: 25,
      d5_mm: 0,
      n5: 0,
      phi5_mm: 0,
      d4_mm: 0,
      n4: 0,
      phi4_mm: 0,
      d3_mm: 0,
      n3: 0,
      phi3_mm: 0,
      d2_mm: 0,
      n2: 0,
      phi2_mm: 0,
      n_ed_kn: -1200,
      alpha_car: 12,
      n_car_kn: -1140,
      s_car_max: 0.6,
      alpha_freq: 15,
      n_freq_kn: -1100,
      s_freq_max: 0.45,
      c_crack_mm: 40,
      k3: 3.4,
      kt: 0.4,
      wmax_mm: 0.3,
      applied_moment_knm: 180,
    },
    form: {
      fields: [
        { name: "fck_mpa", value_type: "number", control: "number", step: "0.1", label: { nl: "fck", en: "fck", fr: "fck" }, unit: "MPa" },
        { name: "gamma_c", value_type: "number", control: "number", step: "0.01", label: { nl: "gamma c", en: "gamma c", fr: "gamma c" } },
        { name: "alpha_cc", value_type: "number", control: "number", step: "0.01", label: { nl: "alpha cc", en: "alpha cc", fr: "alpha cc" } },
        { name: "fyk_mpa", value_type: "number", control: "number", step: "1", label: { nl: "fyk", en: "fyk", fr: "fyk" }, unit: "MPa" },
        { name: "gamma_s", value_type: "number", control: "number", step: "0.01", label: { nl: "gamma s", en: "gamma s", fr: "gamma s" } },
        { name: "h_mm", value_type: "number", control: "number", step: "1", label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" }, unit: "mm" },
        { name: "b_mm", value_type: "number", control: "number", step: "1", label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" }, unit: "mm" },
        { name: "c1_mm", value_type: "number", control: "number", step: "1", label: { nl: "Dekking onder", en: "Bottom cover", fr: "Enrobage bas" }, unit: "mm" },
        { name: "n1", value_type: "number", control: "number", step: "1", label: { nl: "Aantal staven onder", en: "Bottom bars", fr: "Barres bas" } },
        { name: "phi1_mm", value_type: "number", control: "number", step: "1", label: { nl: "Diameter onder", en: "Bottom diameter", fr: "Diametre bas" }, unit: "mm" },
        { name: "c6_mm", value_type: "number", control: "number", step: "1", label: { nl: "Dekking boven", en: "Top cover", fr: "Enrobage haut" }, unit: "mm" },
        { name: "n6", value_type: "number", control: "number", step: "1", label: { nl: "Aantal staven boven", en: "Top bars", fr: "Barres haut" } },
        { name: "phi6_mm", value_type: "number", control: "number", step: "1", label: { nl: "Diameter boven", en: "Top diameter", fr: "Diametre haut" }, unit: "mm" },
        { name: "d5_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 5 diepte", en: "Layer 5 depth", fr: "Profondeur couche 5" }, unit: "mm" },
        { name: "n5", value_type: "number", control: "number", step: "1", label: { nl: "Laag 5 aantal", en: "Layer 5 bars", fr: "Barres couche 5" } },
        { name: "phi5_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 5 diameter", en: "Layer 5 diameter", fr: "Diametre couche 5" }, unit: "mm" },
        { name: "d4_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 4 diepte", en: "Layer 4 depth", fr: "Profondeur couche 4" }, unit: "mm" },
        { name: "n4", value_type: "number", control: "number", step: "1", label: { nl: "Laag 4 aantal", en: "Layer 4 bars", fr: "Barres couche 4" } },
        { name: "phi4_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 4 diameter", en: "Layer 4 diameter", fr: "Diametre couche 4" }, unit: "mm" },
        { name: "d3_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 3 diepte", en: "Layer 3 depth", fr: "Profondeur couche 3" }, unit: "mm" },
        { name: "n3", value_type: "number", control: "number", step: "1", label: { nl: "Laag 3 aantal", en: "Layer 3 bars", fr: "Barres couche 3" } },
        { name: "phi3_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 3 diameter", en: "Layer 3 diameter", fr: "Diametre couche 3" }, unit: "mm" },
        { name: "d2_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 2 diepte", en: "Layer 2 depth", fr: "Profondeur couche 2" }, unit: "mm" },
        { name: "n2", value_type: "number", control: "number", step: "1", label: { nl: "Laag 2 aantal", en: "Layer 2 bars", fr: "Barres couche 2" } },
        { name: "phi2_mm", value_type: "number", control: "number", step: "1", label: { nl: "Laag 2 diameter", en: "Layer 2 diameter", fr: "Diametre couche 2" }, unit: "mm" },
        { name: "n_ed_kn", value_type: "number", control: "number", step: "1", label: { nl: "NEd", en: "NEd", fr: "NEd" }, unit: "kN" },
        { name: "alpha_car", value_type: "number", control: "number", step: "0.1", label: { nl: "alpha car", en: "alpha car", fr: "alpha car" } },
        { name: "n_car_kn", value_type: "number", control: "number", step: "1", label: { nl: "Ncar", en: "Ncar", fr: "Ncar" }, unit: "kN" },
        { name: "s_car_max", value_type: "number", control: "number", step: "0.01", label: { nl: "s car max", en: "s car max", fr: "s car max" } },
        { name: "alpha_freq", value_type: "number", control: "number", step: "0.1", label: { nl: "alpha freq", en: "alpha freq", fr: "alpha freq" } },
        { name: "n_freq_kn", value_type: "number", control: "number", step: "1", label: { nl: "Nfreq", en: "Nfreq", fr: "Nfreq" }, unit: "kN" },
        { name: "s_freq_max", value_type: "number", control: "number", step: "0.01", label: { nl: "s freq max", en: "s freq max", fr: "s freq max" } },
        { name: "c_crack_mm", value_type: "number", control: "number", step: "1", label: { nl: "Scheurdekking", en: "Crack cover", fr: "Enrobage fissure" }, unit: "mm" },
        { name: "k3", value_type: "number", control: "number", step: "0.1", label: { nl: "k3", en: "k3", fr: "k3" } },
        { name: "kt", value_type: "number", control: "number", step: "0.1", label: { nl: "kt", en: "kt", fr: "kt" } },
        { name: "wmax_mm", value_type: "number", control: "number", step: "0.01", label: { nl: "wmax", en: "wmax", fr: "wmax" }, unit: "mm" },
        { name: "applied_moment_knm", value_type: "number", control: "number", step: "1", label: { nl: "Toegepast moment", en: "Applied moment", fr: "Moment applique" }, unit: "kNm" },
      ],
    },
  },
  ec3_bolt_group_torsion: {
    endpoint: "/calculate/ec3/bolt-group-torsion",
    title: {
      nl: "EC3 boutgroep torsie",
      en: "EC3 bolt group torsion",
      fr: "EC3 groupe de boulons torsion",
    },
    sample: {
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
    },
    form: {
      fields: [
        {
          name: "plate_thickness_mm",
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" },
          unit: "mm",
        },
        {
          name: "steel_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" },
          options: ["S235", "S275", "S355"],
        },
        {
          name: "bolt_class",
          value_type: "string",
          control: "select",
          label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe boulon" },
          options: ["4.6", "4.8", "5.6", "5.8", "6.8", "8.8", "10.9"],
        },
        {
          name: "bolt_diameter_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Boutdiameter", en: "Bolt diameter", fr: "Diametre boulon" },
          unit: "mm",
        },
        {
          name: "shear_in_threads",
          value_type: "boolean",
          control: "checkbox",
          label: { nl: "Afschuiving in draad", en: "Shear plane in threads", fr: "Cisaillement dans filet" },
        },
        {
          name: "hole_type",
          value_type: "string",
          control: "select",
          label: { nl: "Gat type", en: "Hole type", fr: "Type trou" },
          options: ["normal", "oversized"],
        },
        {
          name: "num_rows",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal rijen", en: "Rows", fr: "Rangees" },
        },
        {
          name: "num_cols",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal kolommen", en: "Columns", fr: "Colonnes" },
        },
        {
          name: "pitch_z_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rijafstand", en: "Row pitch", fr: "Entraxe rangees" },
          unit: "mm",
        },
        {
          name: "pitch_x_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kolomafstand", en: "Column pitch", fr: "Entraxe colonnes" },
          unit: "mm",
        },
        {
          name: "edge_top_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rand boven", en: "Top edge", fr: "Bord haut" },
          unit: "mm",
        },
        {
          name: "edge_bottom_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rand onder", en: "Bottom edge", fr: "Bord bas" },
          unit: "mm",
        },
        {
          name: "edge_left_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rand links", en: "Left edge", fr: "Bord gauche" },
          unit: "mm",
        },
        {
          name: "edge_right_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rand rechts", en: "Right edge", fr: "Bord droit" },
          unit: "mm",
        },
        {
          name: "shear_force_z_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Vz", en: "Vz", fr: "Vz" },
          unit: "kN",
        },
        {
          name: "shear_force_x_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Vx", en: "Vx", fr: "Vx" },
          unit: "kN",
        },
        {
          name: "torsion_moment_knm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Torsiemoment", en: "Torsion moment", fr: "Moment torsion" },
          unit: "kNm",
        },
        {
          name: "gamma_m2",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "gamma M2", en: "gamma M2", fr: "gamma M2" },
        },
      ],
    },
  },
  ec3_splice_moment_connection: {
    endpoint: "/calculate/ec3/splice-moment-connection",
    title: {
      nl: "EC3 momentlas",
      en: "EC3 splice moment connection",
      fr: "EC3 eclisse moment",
    },
    sample: {
      beam: {
        profile: "IPE400",
        height_mm: 400,
        width_mm: 180,
        web_thickness_mm: 8.6,
        flange_thickness_mm: 13.5,
        root_radius_mm: 21,
        steel_grade: "S355",
      },
      end_plate: {
        thickness_mm: 20,
        width_mm: 200,
        height_mm: 450,
        steel_grade: "S355",
      },
      welds: {
        flange_throat_mm: 8,
        web_throat_mm: 5,
      },
      bolts: {
        diameter_mm: 20,
        bolt_class: "8.8",
        rows: [
          { row_id: 1, vertical_position_mm: 60, number_of_bolts: 2 },
          { row_id: 2, vertical_position_mm: 140, number_of_bolts: 2 },
          { row_id: 3, vertical_position_mm: 310, number_of_bolts: 2 },
          { row_id: 4, vertical_position_mm: 390, number_of_bolts: 2 },
        ],
        horizontal_spacing_mm: 100,
        edge_distance_horizontal_mm: 50,
        edge_distance_vertical_top_mm: 60,
        edge_distance_vertical_bottom_mm: 60,
      },
      loads: {
        moment_knm: 150,
        shear_kn: 100,
        axial_kn: 0,
      },
      gamma_m0: 1,
      gamma_m2: 1.25,
    },
    form: {
      fields: [
        {
          name: "beam.steel_grade",
          path: ["beam", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Ligger staal", en: "Beam steel", fr: "Acier poutre" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "end_plate.steel_grade",
          path: ["end_plate", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Kopplaat staal", en: "End-plate steel", fr: "Acier platine" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "beam.height_mm",
          path: ["beam", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Ligger hoogte", en: "Beam height", fr: "Hauteur poutre" },
          unit: "mm",
        },
        {
          name: "beam.width_mm",
          path: ["beam", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Ligger breedte", en: "Beam width", fr: "Largeur poutre" },
          unit: "mm",
        },
        {
          name: "beam.web_thickness_mm",
          path: ["beam", "web_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Ligger lijfdikte", en: "Beam web thickness", fr: "Epaisseur ame poutre" },
          unit: "mm",
        },
        {
          name: "beam.flange_thickness_mm",
          path: ["beam", "flange_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Ligger flensdikte", en: "Beam flange thickness", fr: "Epaisseur aile poutre" },
          unit: "mm",
        },
        {
          name: "beam.root_radius_mm",
          path: ["beam", "root_radius_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Ligger afronding", en: "Beam root radius", fr: "Rayon poutre" },
          unit: "mm",
        },
        {
          name: "end_plate.thickness_mm",
          path: ["end_plate", "thickness_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat dikte", en: "End-plate thickness", fr: "Epaisseur platine" },
          unit: "mm",
        },
        {
          name: "end_plate.width_mm",
          path: ["end_plate", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat breedte", en: "End-plate width", fr: "Largeur platine" },
          unit: "mm",
        },
        {
          name: "end_plate.height_mm",
          path: ["end_plate", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat hoogte", en: "End-plate height", fr: "Hauteur platine" },
          unit: "mm",
        },
        {
          name: "welds.flange_throat_mm",
          path: ["welds", "flange_throat_mm"],
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Flenslas keel", en: "Flange weld throat", fr: "Gorge soudure aile" },
          unit: "mm",
        },
        {
          name: "welds.web_throat_mm",
          path: ["welds", "web_throat_mm"],
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Lijflas keel", en: "Web weld throat", fr: "Gorge soudure ame" },
          unit: "mm",
        },
        {
          name: "bolts.diameter_mm",
          path: ["bolts", "diameter_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Boutdiameter", en: "Bolt diameter", fr: "Diametre boulon" },
          unit: "mm",
        },
        {
          name: "bolts.bolt_class",
          path: ["bolts", "bolt_class"],
          value_type: "string",
          control: "select",
          label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe boulon" },
          options: ["4.6", "4.8", "5.6", "5.8", "6.8", "8.8", "10.9"],
        },
        {
          name: "bolts.horizontal_spacing_mm",
          path: ["bolts", "horizontal_spacing_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Horizontale boutafstand", en: "Horizontal bolt spacing", fr: "Entraxe horizontal" },
          unit: "mm",
        },
        {
          name: "bolts.edge_distance_horizontal_mm",
          path: ["bolts", "edge_distance_horizontal_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Horizontale randafstand", en: "Horizontal edge distance", fr: "Distance bord horizontal" },
          unit: "mm",
        },
        {
          name: "bolts.rows.0.vertical_position_mm",
          path: ["bolts", "rows", 0, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 1 positie", en: "Row 1 position", fr: "Position rangee 1" },
          unit: "mm",
        },
        {
          name: "bolts.rows.1.vertical_position_mm",
          path: ["bolts", "rows", 1, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 2 positie", en: "Row 2 position", fr: "Position rangee 2" },
          unit: "mm",
        },
        {
          name: "bolts.rows.2.vertical_position_mm",
          path: ["bolts", "rows", 2, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 3 positie", en: "Row 3 position", fr: "Position rangee 3" },
          unit: "mm",
        },
        {
          name: "bolts.rows.3.vertical_position_mm",
          path: ["bolts", "rows", 3, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 4 positie", en: "Row 4 position", fr: "Position rangee 4" },
          unit: "mm",
        },
        {
          name: "loads.moment_knm",
          path: ["loads", "moment_knm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Moment MEd", en: "Moment MEd", fr: "Moment MEd" },
          unit: "kNm",
        },
        {
          name: "loads.shear_kn",
          path: ["loads", "shear_kn"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Dwarskracht VEd", en: "Shear VEd", fr: "Effort tranchant VEd" },
          unit: "kN",
        },
      ],
    },
  },
  ec3_double_sided_web_connection: {
    endpoint: "/calculate/ec3/double-sided-web-connection",
    title: {
      nl: "EC3 dubbelzijdige lijfverbinding",
      en: "EC3 double-sided web connection",
      fr: "EC3 assemblage double sur ame",
    },
    sample: {
      project_name: "Library Integration Test",
      primary: {
        profile: "IPE240",
        height_mm: 240,
        width_mm: 120,
        web_thickness_mm: 6.2,
        flange_thickness_mm: 9.8,
        root_radius_mm: 15,
        steel_grade: "S355",
      },
      secondary: {
        profile: "UPN180",
        height_mm: 180,
        width_mm: 70,
        web_thickness_mm: 8,
        flange_thickness_mm: 11,
        root_radius_mm: 11,
        steel_grade: "S235",
      },
      end_plate: {
        thickness_mm: 15,
        width_mm: 120,
        height_mm: 200,
        steel_grade: "S235",
      },
      welds: {
        flange_throat_mm: 5,
        web_throat_mm: 4,
      },
      bolts: {
        diameter_mm: 16,
        bolt_class: "8.8",
        rows: [
          { row_id: 1, vertical_position_mm: 160, number_of_bolts: 2 },
          { row_id: 2, vertical_position_mm: 40, number_of_bolts: 2 },
        ],
        horizontal_spacing_mm: 70,
        edge_distance_horizontal_mm: 25,
      },
      loads: {
        moment_knm: 15,
        shear_kn: 30,
        axial_kn: 0,
      },
      gamma_m0: 1,
      gamma_m2: 1.25,
      web_bearing_factor: 1,
    },
    form: {
      fields: [
        {
          name: "primary.steel_grade",
          path: ["primary", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Primair staal", en: "Primary steel", fr: "Acier primaire" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "secondary.steel_grade",
          path: ["secondary", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Secundair staal", en: "Secondary steel", fr: "Acier secondaire" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "end_plate.steel_grade",
          path: ["end_plate", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Kopplaat staal", en: "End-plate steel", fr: "Acier platine" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "primary.height_mm",
          path: ["primary", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Primair hoogte", en: "Primary height", fr: "Hauteur primaire" },
          unit: "mm",
        },
        {
          name: "primary.width_mm",
          path: ["primary", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Primair breedte", en: "Primary width", fr: "Largeur primaire" },
          unit: "mm",
        },
        {
          name: "primary.web_thickness_mm",
          path: ["primary", "web_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Primair lijfdikte", en: "Primary web thickness", fr: "Epaisseur ame primaire" },
          unit: "mm",
        },
        {
          name: "primary.flange_thickness_mm",
          path: ["primary", "flange_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Primair flensdikte", en: "Primary flange thickness", fr: "Epaisseur aile primaire" },
          unit: "mm",
        },
        {
          name: "primary.root_radius_mm",
          path: ["primary", "root_radius_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Primair afronding", en: "Primary root radius", fr: "Rayon primaire" },
          unit: "mm",
        },
        {
          name: "secondary.height_mm",
          path: ["secondary", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Secundair hoogte", en: "Secondary height", fr: "Hauteur secondaire" },
          unit: "mm",
        },
        {
          name: "secondary.width_mm",
          path: ["secondary", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Secundair breedte", en: "Secondary width", fr: "Largeur secondaire" },
          unit: "mm",
        },
        {
          name: "secondary.web_thickness_mm",
          path: ["secondary", "web_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Secundair lijfdikte", en: "Secondary web thickness", fr: "Epaisseur ame secondaire" },
          unit: "mm",
        },
        {
          name: "secondary.flange_thickness_mm",
          path: ["secondary", "flange_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Secundair flensdikte", en: "Secondary flange thickness", fr: "Epaisseur aile secondaire" },
          unit: "mm",
        },
        {
          name: "secondary.root_radius_mm",
          path: ["secondary", "root_radius_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Secundair afronding", en: "Secondary root radius", fr: "Rayon secondaire" },
          unit: "mm",
        },
        {
          name: "end_plate.thickness_mm",
          path: ["end_plate", "thickness_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat dikte", en: "End-plate thickness", fr: "Epaisseur platine" },
          unit: "mm",
        },
        {
          name: "end_plate.width_mm",
          path: ["end_plate", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat breedte", en: "End-plate width", fr: "Largeur platine" },
          unit: "mm",
        },
        {
          name: "end_plate.height_mm",
          path: ["end_plate", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat hoogte", en: "End-plate height", fr: "Hauteur platine" },
          unit: "mm",
        },
        {
          name: "welds.flange_throat_mm",
          path: ["welds", "flange_throat_mm"],
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Flenslas keel", en: "Flange weld throat", fr: "Gorge soudure aile" },
          unit: "mm",
        },
        {
          name: "welds.web_throat_mm",
          path: ["welds", "web_throat_mm"],
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Lijflas keel", en: "Web weld throat", fr: "Gorge soudure ame" },
          unit: "mm",
        },
        {
          name: "bolts.diameter_mm",
          path: ["bolts", "diameter_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Boutdiameter", en: "Bolt diameter", fr: "Diametre boulon" },
          unit: "mm",
        },
        {
          name: "bolts.bolt_class",
          path: ["bolts", "bolt_class"],
          value_type: "string",
          control: "select",
          label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe boulon" },
          options: ["4.6", "4.8", "5.6", "5.8", "6.8", "8.8", "10.9"],
        },
        {
          name: "bolts.horizontal_spacing_mm",
          path: ["bolts", "horizontal_spacing_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Horizontale boutafstand", en: "Horizontal bolt spacing", fr: "Entraxe horizontal" },
          unit: "mm",
        },
        {
          name: "bolts.edge_distance_horizontal_mm",
          path: ["bolts", "edge_distance_horizontal_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Horizontale randafstand", en: "Horizontal edge distance", fr: "Distance bord horizontal" },
          unit: "mm",
        },
        {
          name: "bolts.rows.0.vertical_position_mm",
          path: ["bolts", "rows", 0, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 1 positie", en: "Row 1 position", fr: "Position rangee 1" },
          unit: "mm",
        },
        {
          name: "bolts.rows.1.vertical_position_mm",
          path: ["bolts", "rows", 1, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 2 positie", en: "Row 2 position", fr: "Position rangee 2" },
          unit: "mm",
        },
        {
          name: "loads.moment_knm",
          path: ["loads", "moment_knm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Moment MEd", en: "Moment MEd", fr: "Moment MEd" },
          unit: "kNm",
        },
        {
          name: "loads.shear_kn",
          path: ["loads", "shear_kn"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Dwarskracht VEd", en: "Shear VEd", fr: "Effort tranchant VEd" },
          unit: "kN",
        },
        {
          name: "web_bearing_factor",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Lijf oplegfactor", en: "Web bearing factor", fr: "Facteur appui ame" },
        },
      ],
    },
  },
  ec3_bolted_lap_joint: {
    endpoint: "/calculate/ec3/bolted-lap-joint",
    title: {
      nl: "EC3 geboute overlapverbinding",
      en: "EC3 bolted lap joint",
      fr: "EC3 assemblage boulonne a recouvrement",
    },
    sample: {
      plate_t1_mm: 10,
      plate_t2_mm: 8,
      plate_width_mm: 140,
      steel_grade: "S355",
      bolt_class: "8.8",
      bolt_diameter_mm: 16,
      shear_in_threads: false,
      num_rows: 2,
      num_cols: 2,
      e1_mm: 40,
      e2_mm: 35,
      p1_mm: 60,
      p2_mm: 70,
      force_uls_kn: 150,
      force_sls_kn: 90,
      category: "A",
      friction_surface_class: "A",
      hole_type: "normal",
      primary_web_thickness_mm: 8,
      primary_web_fu_mpa: 490,
      web_bearing_factor: 1,
    },
    form: {
      fields: [
        {
          name: "plate_t1_mm",
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Plaatdikte t1", en: "Plate thickness t1", fr: "Epaisseur plaque t1" },
          unit: "mm",
        },
        {
          name: "plate_t2_mm",
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Plaatdikte t2", en: "Plate thickness t2", fr: "Epaisseur plaque t2" },
          unit: "mm",
        },
        {
          name: "plate_width_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Plaatbreedte", en: "Plate width", fr: "Largeur plaque" },
          unit: "mm",
        },
        {
          name: "steel_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" },
          options: ["S235", "S275", "S355"],
        },
        {
          name: "bolt_class",
          value_type: "string",
          control: "select",
          label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe boulon" },
          options: ["4.6", "4.8", "5.6", "5.8", "6.8", "8.8", "10.9"],
        },
        {
          name: "bolt_diameter_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Boutdiameter", en: "Bolt diameter", fr: "Diametre boulon" },
          unit: "mm",
        },
        {
          name: "shear_in_threads",
          value_type: "boolean",
          control: "checkbox",
          label: { nl: "Afschuiving in draad", en: "Shear plane in threads", fr: "Cisaillement dans filet" },
        },
        {
          name: "num_rows",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal rijen", en: "Number of rows", fr: "Nombre de rangees" },
        },
        {
          name: "num_cols",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal kolommen", en: "Number of columns", fr: "Nombre de colonnes" },
        },
        {
          name: "e1_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "e1", en: "e1", fr: "e1" },
          unit: "mm",
        },
        {
          name: "e2_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "e2", en: "e2", fr: "e2" },
          unit: "mm",
        },
        {
          name: "p1_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "p1", en: "p1", fr: "p1" },
          unit: "mm",
        },
        {
          name: "p2_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "p2", en: "p2", fr: "p2" },
          unit: "mm",
        },
        {
          name: "force_uls_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "FEd ULS", en: "FEd ULS", fr: "FEd ELU" },
          unit: "kN",
        },
        {
          name: "force_sls_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "FEd SLS", en: "FEd SLS", fr: "FEd ELS" },
          unit: "kN",
        },
        {
          name: "category",
          value_type: "string",
          control: "select",
          label: { nl: "Categorie", en: "Category", fr: "Categorie" },
          options: ["A", "B", "C"],
        },
        {
          name: "friction_surface_class",
          value_type: "string",
          control: "select",
          label: { nl: "Wrijvingsklasse", en: "Friction class", fr: "Classe friction" },
          options: ["A", "B", "C", "D"],
        },
        {
          name: "hole_type",
          value_type: "string",
          control: "select",
          label: { nl: "Gat type", en: "Hole type", fr: "Type trou" },
          options: ["normal", "oversized"],
        },
        {
          name: "primary_web_thickness_mm",
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Primaire lijf dikte", en: "Primary web thickness", fr: "Epaisseur ame primaire" },
          unit: "mm",
        },
        {
          name: "primary_web_fu_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "fu primair lijf", en: "Primary web fu", fr: "fu ame primaire" },
          unit: "MPa",
        },
        {
          name: "web_bearing_factor",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Lijf oplegfactor", en: "Web bearing factor", fr: "Facteur appui ame" },
        },
      ],
    },
  },
  ec3_bolted_moment_connection: {
    endpoint: "/calculate/ec3/bolted-moment-connection",
    title: {
      nl: "EC3 geboute momentverbinding",
      en: "EC3 bolted moment connection",
      fr: "EC3 assemblage boulonne moment",
    },
    sample: {
      column: {
        profile: "HEB400",
        height_mm: 400,
        width_mm: 300,
        web_thickness_mm: 13.5,
        flange_thickness_mm: 24,
        root_radius_mm: 27,
        steel_grade: "S355",
      },
      beam: {
        profile: "IPE600",
        height_mm: 600,
        width_mm: 220,
        web_thickness_mm: 12,
        flange_thickness_mm: 19,
        root_radius_mm: 24,
        steel_grade: "S355",
      },
      end_plate: {
        thickness_mm: 30,
        width_mm: 280,
        height_mm: 750,
        steel_grade: "S355",
      },
      welds: {
        flange_throat_mm: 12,
        web_throat_mm: 8,
      },
      bolts: {
        diameter_mm: 27,
        bolt_class: "10.9",
        rows: [
          { row_id: 1, vertical_position_mm: 500, number_of_bolts: 2 },
          { row_id: 2, vertical_position_mm: 600, number_of_bolts: 2 },
          { row_id: 3, vertical_position_mm: 680, number_of_bolts: 2 },
        ],
        horizontal_spacing_mm: 120,
        edge_distance_horizontal_mm: 50,
        edge_distance_vertical_top_mm: 70,
        edge_distance_vertical_bottom_mm: 70,
      },
      loads: {
        moment_knm: 500,
        shear_kn: 200,
        axial_kn: 0,
      },
      connection_type: "single_sided",
      include_prying_action: true,
      gamma_m0: 1,
      gamma_m2: 1.25,
    },
    form: {
      fields: [
        {
          name: "column.steel_grade",
          path: ["column", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Kolom staal", en: "Column steel", fr: "Acier poteau" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "beam.steel_grade",
          path: ["beam", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Ligger staal", en: "Beam steel", fr: "Acier poutre" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "end_plate.steel_grade",
          path: ["end_plate", "steel_grade"],
          value_type: "string",
          control: "select",
          label: { nl: "Kopplaat staal", en: "End-plate steel", fr: "Acier platine" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "column.height_mm",
          path: ["column", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kolom hoogte", en: "Column height", fr: "Hauteur poteau" },
          unit: "mm",
        },
        {
          name: "column.width_mm",
          path: ["column", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kolom breedte", en: "Column width", fr: "Largeur poteau" },
          unit: "mm",
        },
        {
          name: "column.web_thickness_mm",
          path: ["column", "web_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kolom lijfdikte", en: "Column web thickness", fr: "Epaisseur ame poteau" },
          unit: "mm",
        },
        {
          name: "column.flange_thickness_mm",
          path: ["column", "flange_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kolom flensdikte", en: "Column flange thickness", fr: "Epaisseur aile poteau" },
          unit: "mm",
        },
        {
          name: "column.root_radius_mm",
          path: ["column", "root_radius_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kolom afronding", en: "Column root radius", fr: "Rayon poteau" },
          unit: "mm",
        },
        {
          name: "beam.height_mm",
          path: ["beam", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Ligger hoogte", en: "Beam height", fr: "Hauteur poutre" },
          unit: "mm",
        },
        {
          name: "beam.width_mm",
          path: ["beam", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Ligger breedte", en: "Beam width", fr: "Largeur poutre" },
          unit: "mm",
        },
        {
          name: "beam.web_thickness_mm",
          path: ["beam", "web_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Ligger lijfdikte", en: "Beam web thickness", fr: "Epaisseur ame poutre" },
          unit: "mm",
        },
        {
          name: "beam.flange_thickness_mm",
          path: ["beam", "flange_thickness_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Ligger flensdikte", en: "Beam flange thickness", fr: "Epaisseur aile poutre" },
          unit: "mm",
        },
        {
          name: "beam.root_radius_mm",
          path: ["beam", "root_radius_mm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Ligger afronding", en: "Beam root radius", fr: "Rayon poutre" },
          unit: "mm",
        },
        {
          name: "end_plate.thickness_mm",
          path: ["end_plate", "thickness_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat dikte", en: "End-plate thickness", fr: "Epaisseur platine" },
          unit: "mm",
        },
        {
          name: "end_plate.width_mm",
          path: ["end_plate", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat breedte", en: "End-plate width", fr: "Largeur platine" },
          unit: "mm",
        },
        {
          name: "end_plate.height_mm",
          path: ["end_plate", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Kopplaat hoogte", en: "End-plate height", fr: "Hauteur platine" },
          unit: "mm",
        },
        {
          name: "welds.flange_throat_mm",
          path: ["welds", "flange_throat_mm"],
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Flenslas keel", en: "Flange weld throat", fr: "Gorge soudure aile" },
          unit: "mm",
        },
        {
          name: "welds.web_throat_mm",
          path: ["welds", "web_throat_mm"],
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Lijflas keel", en: "Web weld throat", fr: "Gorge soudure ame" },
          unit: "mm",
        },
        {
          name: "bolts.diameter_mm",
          path: ["bolts", "diameter_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Boutdiameter", en: "Bolt diameter", fr: "Diametre boulon" },
          unit: "mm",
        },
        {
          name: "bolts.bolt_class",
          path: ["bolts", "bolt_class"],
          value_type: "string",
          control: "select",
          label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe boulon" },
          options: ["4.6", "4.8", "5.6", "5.8", "6.8", "8.8", "10.9"],
        },
        {
          name: "bolts.horizontal_spacing_mm",
          path: ["bolts", "horizontal_spacing_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Horizontale boutafstand", en: "Horizontal bolt spacing", fr: "Entraxe horizontal" },
          unit: "mm",
        },
        {
          name: "bolts.edge_distance_horizontal_mm",
          path: ["bolts", "edge_distance_horizontal_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Horizontale randafstand", en: "Horizontal edge distance", fr: "Distance bord horizontal" },
          unit: "mm",
        },
        {
          name: "bolts.edge_distance_vertical_top_mm",
          path: ["bolts", "edge_distance_vertical_top_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Bovenste randafstand", en: "Top edge distance", fr: "Distance bord haut" },
          unit: "mm",
        },
        {
          name: "bolts.edge_distance_vertical_bottom_mm",
          path: ["bolts", "edge_distance_vertical_bottom_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Onderste randafstand", en: "Bottom edge distance", fr: "Distance bord bas" },
          unit: "mm",
        },
        {
          name: "bolts.rows.0.vertical_position_mm",
          path: ["bolts", "rows", 0, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 1 positie", en: "Row 1 position", fr: "Position rangee 1" },
          unit: "mm",
        },
        {
          name: "bolts.rows.1.vertical_position_mm",
          path: ["bolts", "rows", 1, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 2 positie", en: "Row 2 position", fr: "Position rangee 2" },
          unit: "mm",
        },
        {
          name: "bolts.rows.2.vertical_position_mm",
          path: ["bolts", "rows", 2, "vertical_position_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Rij 3 positie", en: "Row 3 position", fr: "Position rangee 3" },
          unit: "mm",
        },
        {
          name: "loads.moment_knm",
          path: ["loads", "moment_knm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Moment MEd", en: "Moment MEd", fr: "Moment MEd" },
          unit: "kNm",
        },
        {
          name: "loads.shear_kn",
          path: ["loads", "shear_kn"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Dwarskracht VEd", en: "Shear VEd", fr: "Effort tranchant VEd" },
          unit: "kN",
        },
        {
          name: "loads.axial_kn",
          path: ["loads", "axial_kn"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Normaalkracht NEd", en: "Axial NEd", fr: "Effort normal NEd" },
          unit: "kN",
        },
      ],
    },
  },
  ec3_fillet_weld: {
    endpoint: "/calculate/ec3/fillet-weld",
    title: {
      nl: "EC3 hoeklas",
      en: "EC3 fillet weld",
      fr: "EC3 soudure d'angle",
    },
    sample: {
      steel_grade: "S235",
      verification_method: "simplified",
      throat_thickness_a_mm: 5,
      effective_length_leff_mm: 120,
      force_per_unit_length_fw_ed_n_per_mm: 850,
      sigma_perp_mpa: 300,
      tau_perp_mpa: 150,
      tau_parallel_mpa: 100,
      gamma_m2: 1.25,
    },
    form: {
      fields: [
        {
          name: "steel_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" },
          options: ["S235", "S275", "S355", "S420", "S460"],
        },
        {
          name: "verification_method",
          value_type: "string",
          control: "select",
          label: { nl: "Methode", en: "Method", fr: "Methode" },
          options: ["simplified", "directional"],
        },
        {
          name: "throat_thickness_a_mm",
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Keelhoogte a", en: "Throat thickness a", fr: "Gorge a" },
          unit: "mm",
        },
        {
          name: "effective_length_leff_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Effectieve lengte", en: "Effective length", fr: "Longueur efficace" },
          unit: "mm",
        },
        {
          name: "force_per_unit_length_fw_ed_n_per_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Fw,Ed", en: "Fw,Ed", fr: "Fw,Ed" },
          unit: "N/mm",
        },
        {
          name: "sigma_perp_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "sigma perp", en: "sigma perp", fr: "sigma perp" },
          unit: "N/mm2",
        },
        {
          name: "tau_perp_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "tau perp", en: "tau perp", fr: "tau perp" },
          unit: "N/mm2",
        },
        {
          name: "tau_parallel_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "tau parallel", en: "tau parallel", fr: "tau parallel" },
          unit: "N/mm2",
        },
        {
          name: "gamma_m2",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "gamma M2", en: "gamma M2", fr: "gamma M2" },
        },
      ],
    },
  },
  ec3_plate_tension: {
    endpoint: "/calculate/ec3/plate-tension",
    title: {
      nl: "EC3 stalen plaat op trek",
      en: "EC3 steel plate tension",
      fr: "EC3 plaque acier en traction",
    },
    sample: {
      width_mm: 120,
      thickness_mm: 10,
      n_ed_kn: 180,
      steel_grade: "S235",
      hole_diameter_mm: 0,
      n_holes: 0,
    },
    form: {
      fields: [
        {
          name: "width_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Plaatbreedte", en: "Plate width", fr: "Largeur plaque" },
          unit: "mm",
        },
        {
          name: "thickness_mm",
          value_type: "number",
          control: "number",
          step: "0.5",
          label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" },
          unit: "mm",
        },
        {
          name: "n_ed_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "NEd", en: "NEd", fr: "NEd" },
          unit: "kN",
        },
        {
          name: "steel_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" },
          options: ["S235", "S275", "S355", "S450"],
        },
        {
          name: "hole_diameter_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Gatdiameter", en: "Hole diameter", fr: "Diametre trou" },
          unit: "mm",
        },
        {
          name: "n_holes",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal gaten", en: "Number of holes", fr: "Nombre de trous" },
        },
      ],
    },
  },
  ec3_steel_section_check: {
    endpoint: "/calculate/ec3/steel-section-check",
    title: {
      nl: "EC3 staalsectie controle",
      en: "EC3 steel section check",
      fr: "EC3 verification section acier",
    },
    sample: {
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
    },
    form: {
      fields: [
        {
          name: "profile_name",
          value_type: "string",
          control: "text",
          label: { nl: "Profiel", en: "Profile", fr: "Profil" },
        },
        {
          name: "steel_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" },
          options: ["S235", "S275", "S355", "S420", "S450", "S460"],
        },
        {
          name: "profile_count",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal profielen", en: "Profile count", fr: "Nombre profils" },
        },
        {
          name: "section.h_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "section.b_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "section.tw_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Lijfdikte tw", en: "Web thickness tw", fr: "Epaisseur ame tw" },
          unit: "mm",
        },
        {
          name: "section.tf_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Flensdikte tf", en: "Flange thickness tf", fr: "Epaisseur semelle tf" },
          unit: "mm",
        },
        {
          name: "section.r_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Afronding r", en: "Root radius r", fr: "Rayon r" },
          unit: "mm",
        },
        {
          name: "section.area_mm2",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Oppervlakte A", en: "Area A", fr: "Aire A" },
          unit: "mm2",
        },
        {
          name: "section.iy_mm4",
          value_type: "number",
          control: "number",
          step: "1000",
          label: { nl: "Iy", en: "Iy", fr: "Iy" },
          unit: "mm4",
        },
        {
          name: "section.iz_mm4",
          value_type: "number",
          control: "number",
          step: "1000",
          label: { nl: "Iz", en: "Iz", fr: "Iz" },
          unit: "mm4",
        },
        {
          name: "section.wy_el_mm3",
          value_type: "number",
          control: "number",
          step: "100",
          label: { nl: "Wel,y", en: "Wel,y", fr: "Wel,y" },
          unit: "mm3",
        },
        {
          name: "section.wz_el_mm3",
          value_type: "number",
          control: "number",
          step: "100",
          label: { nl: "Wel,z", en: "Wel,z", fr: "Wel,z" },
          unit: "mm3",
        },
        {
          name: "section.wy_pl_mm3",
          value_type: "number",
          control: "number",
          step: "100",
          label: { nl: "Wpl,y", en: "Wpl,y", fr: "Wpl,y" },
          unit: "mm3",
        },
        {
          name: "section.wz_pl_mm3",
          value_type: "number",
          control: "number",
          step: "100",
          label: { nl: "Wpl,z", en: "Wpl,z", fr: "Wpl,z" },
          unit: "mm3",
        },
        {
          name: "loads.n_ed_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "NEd", en: "NEd", fr: "NEd" },
          unit: "kN",
        },
        {
          name: "loads.my_ed_knm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "My,Ed", en: "My,Ed", fr: "My,Ed" },
          unit: "kNm",
        },
        {
          name: "loads.mz_ed_knm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Mz,Ed", en: "Mz,Ed", fr: "Mz,Ed" },
          unit: "kNm",
        },
        {
          name: "loads.vy_ed_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Vy,Ed", en: "Vy,Ed", fr: "Vy,Ed" },
          unit: "kN",
        },
        {
          name: "loads.vz_ed_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Vz,Ed", en: "Vz,Ed", fr: "Vz,Ed" },
          unit: "kN",
        },
        {
          name: "loads.m_sls_knm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "M SLS", en: "M SLS", fr: "M SLS" },
          unit: "kNm",
        },
        {
          name: "loads.span_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Overspanning", en: "Span", fr: "Portee" },
          unit: "m",
        },
        {
          name: "gamma_m0",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "gamma M0", en: "gamma M0", fr: "gamma M0" },
        },
        {
          name: "deflection_limit_ratio",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Doorbuiging L/x", en: "Deflection L/x", fr: "Fleche L/x" },
        },
      ],
    },
  },
  ec3_lateral_torsional_buckling: {
    endpoint: "/calculate/ec3/lateral-torsional-buckling",
    title: {
      nl: "EC3 kipcontrole",
      en: "EC3 lateral-torsional buckling",
      fr: "EC3 deversement",
    },
    sample: {
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
    },
    form: {
      fields: [
        { name: "profile_name", value_type: "string", control: "text", label: { nl: "Profiel", en: "Profile", fr: "Profil" } },
        { name: "steel_grade", value_type: "string", control: "select", label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" }, options: ["S235", "S275", "S355", "S420", "S450", "S460"] },
        { name: "section.h_mm", value_type: "number", control: "number", step: "0.1", label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" }, unit: "mm" },
        { name: "section.b_mm", value_type: "number", control: "number", step: "0.1", label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" }, unit: "mm" },
        { name: "section.iz_mm4", value_type: "number", control: "number", step: "1000", label: { nl: "Iz", en: "Iz", fr: "Iz" }, unit: "mm4" },
        { name: "section.wy_pl_mm3", value_type: "number", control: "number", step: "100", label: { nl: "Wpl,y", en: "Wpl,y", fr: "Wpl,y" }, unit: "mm3" },
        { name: "section.it_mm4", value_type: "number", control: "number", step: "1000", label: { nl: "It", en: "It", fr: "It" }, unit: "mm4" },
        { name: "section.iw_mm6", value_type: "number", control: "number", step: "100000", label: { nl: "Iw", en: "Iw", fr: "Iw" }, unit: "mm6" },
        { name: "m_ed_knm", value_type: "number", control: "number", step: "1", label: { nl: "My,Ed", en: "My,Ed", fr: "My,Ed" }, unit: "kNm" },
        { name: "unbraced_length_m", value_type: "number", control: "number", step: "0.1", label: { nl: "Kiplengte", en: "Unbraced length", fr: "Longueur non maintenue" }, unit: "m" },
        { name: "loading_type", value_type: "string", control: "select", label: { nl: "Belasting", en: "Loading", fr: "Chargement" }, options: ["uniform", "point_load", "end_moments", "linear"] },
        { name: "load_position", value_type: "string", control: "select", label: { nl: "Aangrijpingspunt", en: "Load position", fr: "Position charge" }, options: ["top_flange", "shear_center", "bottom_flange"] },
        { name: "destabilizing", value_type: "boolean", control: "checkbox", label: { nl: "Destabiliserend", en: "Destabilizing", fr: "Destabilisant" } },
      ],
    },
  },
  ec3_profile_optimizer: {
    endpoint: "/calculate/ec3/profile-optimizer",
    title: {
      nl: "EC3 profieloptimalisatie",
      en: "EC3 profile optimizer",
      fr: "EC3 optimisation profil",
    },
    sample: {
      steel_grade: "S355",
      profile_count: 1,
      member_length_m: 5,
      max_utilization: 0.98,
      loads: {
        n_ed_kn: 80,
        my_ed_knm: 80,
        mz_ed_knm: 8,
        vy_ed_kn: 100,
        vz_ed_kn: 50,
        m_sls_knm: 60,
        span_m: 5,
      },
      candidates: [
        {
          profile_name: "IPE 220",
          weight_kg_per_m: 26.2,
          section: {
            h_mm: 220,
            b_mm: 110,
            tw_mm: 5.9,
            tf_mm: 9.2,
            r_mm: 12,
            area_mm2: 3340,
            iy_mm4: 27720000,
            iz_mm4: 2049000,
            wy_el_mm3: 252000,
            wz_el_mm3: 37300,
            wy_pl_mm3: 285400,
            wz_pl_mm3: 58100,
          },
        },
        {
          profile_name: "IPE 240",
          weight_kg_per_m: 30.7,
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
        },
      ],
    },
    form: {
      fields: [
        { name: "steel_grade", value_type: "string", control: "select", label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" }, options: ["S235", "S275", "S355", "S420", "S450", "S460"] },
        { name: "profile_count", value_type: "number", control: "number", step: "1", label: { nl: "Aantal profielen", en: "Profile count", fr: "Nombre profils" } },
        { name: "member_length_m", value_type: "number", control: "number", step: "0.1", label: { nl: "Lengte", en: "Length", fr: "Longueur" }, unit: "m" },
        { name: "max_utilization", value_type: "number", control: "number", step: "0.01", label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
        { name: "loads.my_ed_knm", value_type: "number", control: "number", step: "1", label: { nl: "My,Ed", en: "My,Ed", fr: "My,Ed" }, unit: "kNm" },
        { name: "loads.mz_ed_knm", value_type: "number", control: "number", step: "1", label: { nl: "Mz,Ed", en: "Mz,Ed", fr: "Mz,Ed" }, unit: "kNm" },
        { name: "loads.vy_ed_kn", value_type: "number", control: "number", step: "1", label: { nl: "Vy,Ed", en: "Vy,Ed", fr: "Vy,Ed" }, unit: "kN" },
        { name: "loads.vz_ed_kn", value_type: "number", control: "number", step: "1", label: { nl: "Vz,Ed", en: "Vz,Ed", fr: "Vz,Ed" }, unit: "kN" },
        { name: "loads.m_sls_knm", value_type: "number", control: "number", step: "1", label: { nl: "M SLS", en: "M SLS", fr: "M SLS" }, unit: "kNm" },
        { name: "loads.span_m", value_type: "number", control: "number", step: "0.1", label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { name: "candidates.0.profile_name", path: ["candidates", 0, "profile_name"], value_type: "string", control: "text", label: { nl: "Kandidaat 1", en: "Candidate 1", fr: "Candidat 1" } },
        { name: "candidates.0.weight_kg_per_m", path: ["candidates", 0, "weight_kg_per_m"], value_type: "number", control: "number", step: "0.1", label: { nl: "Gewicht 1", en: "Weight 1", fr: "Poids 1" }, unit: "kg/m" },
        { name: "candidates.0.section.h_mm", path: ["candidates", 0, "section", "h_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "h 1", en: "h 1", fr: "h 1" }, unit: "mm" },
        { name: "candidates.0.section.b_mm", path: ["candidates", 0, "section", "b_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "b 1", en: "b 1", fr: "b 1" }, unit: "mm" },
        { name: "candidates.0.section.tw_mm", path: ["candidates", 0, "section", "tw_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "tw 1", en: "tw 1", fr: "tw 1" }, unit: "mm" },
        { name: "candidates.0.section.tf_mm", path: ["candidates", 0, "section", "tf_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "tf 1", en: "tf 1", fr: "tf 1" }, unit: "mm" },
        { name: "candidates.0.section.area_mm2", path: ["candidates", 0, "section", "area_mm2"], value_type: "number", control: "number", step: "1", label: { nl: "A 1", en: "A 1", fr: "A 1" }, unit: "mm2" },
        { name: "candidates.0.section.iy_mm4", path: ["candidates", 0, "section", "iy_mm4"], value_type: "number", control: "number", step: "1000", label: { nl: "Iy 1", en: "Iy 1", fr: "Iy 1" }, unit: "mm4" },
        { name: "candidates.0.section.iz_mm4", path: ["candidates", 0, "section", "iz_mm4"], value_type: "number", control: "number", step: "1000", label: { nl: "Iz 1", en: "Iz 1", fr: "Iz 1" }, unit: "mm4" },
        { name: "candidates.0.section.wy_el_mm3", path: ["candidates", 0, "section", "wy_el_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wel,y 1", en: "Wel,y 1", fr: "Wel,y 1" }, unit: "mm3" },
        { name: "candidates.0.section.wz_el_mm3", path: ["candidates", 0, "section", "wz_el_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wel,z 1", en: "Wel,z 1", fr: "Wel,z 1" }, unit: "mm3" },
        { name: "candidates.0.section.wy_pl_mm3", path: ["candidates", 0, "section", "wy_pl_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wpl,y 1", en: "Wpl,y 1", fr: "Wpl,y 1" }, unit: "mm3" },
        { name: "candidates.0.section.wz_pl_mm3", path: ["candidates", 0, "section", "wz_pl_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wpl,z 1", en: "Wpl,z 1", fr: "Wpl,z 1" }, unit: "mm3" },
        { name: "candidates.1.profile_name", path: ["candidates", 1, "profile_name"], value_type: "string", control: "text", label: { nl: "Kandidaat 2", en: "Candidate 2", fr: "Candidat 2" } },
        { name: "candidates.1.weight_kg_per_m", path: ["candidates", 1, "weight_kg_per_m"], value_type: "number", control: "number", step: "0.1", label: { nl: "Gewicht 2", en: "Weight 2", fr: "Poids 2" }, unit: "kg/m" },
        { name: "candidates.1.section.h_mm", path: ["candidates", 1, "section", "h_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "h 2", en: "h 2", fr: "h 2" }, unit: "mm" },
        { name: "candidates.1.section.b_mm", path: ["candidates", 1, "section", "b_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "b 2", en: "b 2", fr: "b 2" }, unit: "mm" },
        { name: "candidates.1.section.tw_mm", path: ["candidates", 1, "section", "tw_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "tw 2", en: "tw 2", fr: "tw 2" }, unit: "mm" },
        { name: "candidates.1.section.tf_mm", path: ["candidates", 1, "section", "tf_mm"], value_type: "number", control: "number", step: "0.1", label: { nl: "tf 2", en: "tf 2", fr: "tf 2" }, unit: "mm" },
        { name: "candidates.1.section.area_mm2", path: ["candidates", 1, "section", "area_mm2"], value_type: "number", control: "number", step: "1", label: { nl: "A 2", en: "A 2", fr: "A 2" }, unit: "mm2" },
        { name: "candidates.1.section.iy_mm4", path: ["candidates", 1, "section", "iy_mm4"], value_type: "number", control: "number", step: "1000", label: { nl: "Iy 2", en: "Iy 2", fr: "Iy 2" }, unit: "mm4" },
        { name: "candidates.1.section.iz_mm4", path: ["candidates", 1, "section", "iz_mm4"], value_type: "number", control: "number", step: "1000", label: { nl: "Iz 2", en: "Iz 2", fr: "Iz 2" }, unit: "mm4" },
        { name: "candidates.1.section.wy_el_mm3", path: ["candidates", 1, "section", "wy_el_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wel,y 2", en: "Wel,y 2", fr: "Wel,y 2" }, unit: "mm3" },
        { name: "candidates.1.section.wz_el_mm3", path: ["candidates", 1, "section", "wz_el_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wel,z 2", en: "Wel,z 2", fr: "Wel,z 2" }, unit: "mm3" },
        { name: "candidates.1.section.wy_pl_mm3", path: ["candidates", 1, "section", "wy_pl_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wpl,y 2", en: "Wpl,y 2", fr: "Wpl,y 2" }, unit: "mm3" },
        { name: "candidates.1.section.wz_pl_mm3", path: ["candidates", 1, "section", "wz_pl_mm3"], value_type: "number", control: "number", step: "100", label: { nl: "Wpl,z 2", en: "Wpl,z 2", fr: "Wpl,z 2" }, unit: "mm3" },
      ],
    },
  },
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
      load_duration: "Short-term",
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
    form: {
      fields: [
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C24", "C27", "GL24h", "GL28h", "binderholz_bbs", "steico_lvl_r"],
        },
        {
          name: "service_class",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse", en: "Service class", fr: "Classe de service" },
          options: [1, 2, 3],
        },
        {
          name: "load_duration",
          value_type: "string",
          control: "select",
          label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" },
          options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"],
        },
        {
          name: "interface.width_mm",
          path: ["interface", "width_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Contactbreedte", en: "Interface width", fr: "Largeur interface" },
          unit: "mm",
        },
        {
          name: "interface.height_mm",
          path: ["interface", "height_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Contacthoogte", en: "Interface height", fr: "Hauteur interface" },
          unit: "mm",
        },
        {
          name: "contact.member_1_angle_deg",
          path: ["contact", "member_1_angle_deg"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoek lid 1", en: "Member 1 angle", fr: "Angle element 1" },
          unit: "deg",
        },
        {
          name: "contact.member_2_angle_deg",
          path: ["contact", "member_2_angle_deg"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoek lid 2", en: "Member 2 angle", fr: "Angle element 2" },
          unit: "deg",
        },
        {
          name: "contact.kc90_member_1",
          path: ["contact", "kc90_member_1"],
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "kc90 lid 1", en: "kc90 member 1", fr: "kc90 element 1" },
        },
        {
          name: "contact.kc90_member_2",
          path: ["contact", "kc90_member_2"],
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "kc90 lid 2", en: "kc90 member 2", fr: "kc90 element 2" },
        },
        {
          name: "actions.n_ed_kN",
          path: ["actions", "n_ed_kN"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "NEd", en: "NEd", fr: "NEd" },
          unit: "kN",
        },
        {
          name: "actions.m_ed_kNm",
          path: ["actions", "m_ed_kNm"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "MEd", en: "MEd", fr: "MEd" },
          unit: "kNm",
        },
        {
          name: "screw_defaults.d",
          path: ["screw_defaults", "d"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Diameter d", en: "Diameter d", fr: "Diametre d" },
          unit: "mm",
        },
        {
          name: "screw_defaults.d1",
          path: ["screw_defaults", "d1"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kerndiameter d1", en: "Root diameter d1", fr: "Diametre noyau d1" },
          unit: "mm",
        },
        {
          name: "screw_defaults.dh",
          path: ["screw_defaults", "dh"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kopdiameter dh", en: "Head diameter dh", fr: "Diametre tete dh" },
          unit: "mm",
        },
        {
          name: "screw_defaults.lef",
          path: ["screw_defaults", "lef"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Effectieve lengte lef", en: "Effective length lef", fr: "Longueur efficace lef" },
          unit: "mm",
        },
        {
          name: "screw_defaults.alpha_deg",
          path: ["screw_defaults", "alpha_deg"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Schroefhoek alpha", en: "Screw angle alpha", fr: "Angle de vis alpha" },
          unit: "deg",
        },
        {
          name: "screw_defaults.rho_a",
          path: ["screw_defaults", "rho_a"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_a", en: "rho_a", fr: "rho_a" },
          unit: "kg/m3",
        },
        {
          name: "screw_defaults.f_ax_k",
          path: ["screw_defaults", "f_ax_k"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fax,k", en: "fax,k", fr: "fax,k" },
          unit: "N/mm2",
        },
        {
          name: "screw_defaults.f_head_k",
          path: ["screw_defaults", "f_head_k"],
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fhead,k", en: "fhead,k", fr: "fhead,k" },
          unit: "N/mm2",
        },
        {
          name: "screw_defaults.f_tens_k",
          path: ["screw_defaults", "f_tens_k"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "ftens,k", en: "ftens,k", fr: "ftens,k" },
          unit: "N",
        },
        {
          name: "screw_defaults.axial_stiffness_n_per_mm",
          path: ["screw_defaults", "axial_stiffness_n_per_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Axiale stijfheid", en: "Axial stiffness", fr: "Raideur axiale" },
          unit: "N/mm",
        },
        {
          name: "screws.0.y_mm",
          path: ["screws", 0, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S1 y", en: "S1 y", fr: "S1 y" },
          unit: "mm",
        },
        {
          name: "screws.1.y_mm",
          path: ["screws", 1, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S2 y", en: "S2 y", fr: "S2 y" },
          unit: "mm",
        },
        {
          name: "screws.2.y_mm",
          path: ["screws", 2, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S3 y", en: "S3 y", fr: "S3 y" },
          unit: "mm",
        },
        {
          name: "screws.3.y_mm",
          path: ["screws", 3, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S4 y", en: "S4 y", fr: "S4 y" },
          unit: "mm",
        },
        {
          name: "screws.4.y_mm",
          path: ["screws", 4, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S5 y", en: "S5 y", fr: "S5 y" },
          unit: "mm",
        },
        {
          name: "screws.5.y_mm",
          path: ["screws", 5, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S6 y", en: "S6 y", fr: "S6 y" },
          unit: "mm",
        },
        {
          name: "screws.6.y_mm",
          path: ["screws", 6, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S7 y", en: "S7 y", fr: "S7 y" },
          unit: "mm",
        },
        {
          name: "screws.7.y_mm",
          path: ["screws", 7, "y_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "S8 y", en: "S8 y", fr: "S8 y" },
          unit: "mm",
        },
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
      load_duration: "Short-term",
      material_type: "SolidTimber",
      spacings: { a1: 70, a2: 50, a1_cg: 90, a2_cg: 40 },
    },
    form: {
      fields: [
        {
          name: "n",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal schroeven", en: "Number of screws", fr: "Nombre de vis" },
        },
        {
          name: "d",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Diameter d", en: "Diameter d", fr: "Diametre d" },
          unit: "mm",
        },
        {
          name: "d1",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kerndiameter d1", en: "Root diameter d1", fr: "Diametre noyau d1" },
          unit: "mm",
        },
        {
          name: "dh",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kopdiameter dh", en: "Head diameter dh", fr: "Diametre tete dh" },
          unit: "mm",
        },
        {
          name: "lef",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Effectieve lengte lef", en: "Effective length lef", fr: "Longueur efficace lef" },
          unit: "mm",
        },
        {
          name: "t_timber",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte", en: "Timber thickness", fr: "Epaisseur bois" },
          unit: "mm",
        },
        {
          name: "alpha",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoek alpha", en: "Angle alpha", fr: "Angle alpha" },
          unit: "deg",
        },
        {
          name: "rho_k",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_k", en: "rho_k", fr: "rho_k" },
          unit: "kg/m3",
        },
        {
          name: "rho_a",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_a", en: "rho_a", fr: "rho_a" },
          unit: "kg/m3",
        },
        {
          name: "f_ax_k",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fax,k", en: "fax,k", fr: "fax,k" },
          unit: "N/mm2",
        },
        {
          name: "f_head_k",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fhead,k", en: "fhead,k", fr: "fhead,k" },
          unit: "N/mm2",
        },
        {
          name: "f_tens_k",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "ftens,k", en: "ftens,k", fr: "ftens,k" },
          unit: "N",
        },
        {
          name: "f_ed",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "FEd", en: "FEd", fr: "FEd" },
          unit: "N",
        },
        {
          name: "service_class",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse", en: "Service class", fr: "Classe de service" },
          options: [1, 2, 3],
        },
        {
          name: "load_duration",
          value_type: "string",
          control: "select",
          label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" },
          options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"],
        },
        {
          name: "material_type",
          value_type: "string",
          control: "select",
          label: { nl: "Materiaaltype", en: "Material type", fr: "Type de materiau" },
          options: ["SolidTimber", "GluedLaminated", "LVL", "Connections"],
        },
        {
          name: "spacings.a1",
          path: ["spacings", "a1"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a1", en: "a1", fr: "a1" },
          unit: "mm",
        },
        {
          name: "spacings.a2",
          path: ["spacings", "a2"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a2", en: "a2", fr: "a2" },
          unit: "mm",
        },
        {
          name: "spacings.a1_cg",
          path: ["spacings", "a1_cg"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a1,cg", en: "a1,cg", fr: "a1,cg" },
          unit: "mm",
        },
        {
          name: "spacings.a2_cg",
          path: ["spacings", "a2_cg"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a2,cg", en: "a2,cg", fr: "a2,cg" },
          unit: "mm",
        },
      ],
    },
  },
  ec5_stabilizing_force: {
    endpoint: "/calculate/ec5/stabilizing-force",
    title: {
      nl: "EC5 stabilisatiekracht",
      en: "EC5 stabilizing force",
      fr: "EC5 effort de stabilisation",
    },
    sample: {
      b_mm: 75,
      h_mm: 225,
      l_unbraced_mm: 4000,
      wood_grade: "C24",
      m_d_knm: 8,
      l_ef_factor: 1,
      n_d_compression_kn: 0,
    },
    form: {
      fields: [
        {
          name: "b_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "h_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "l_unbraced_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Ongesteunde lengte", en: "Unbraced length", fr: "Longueur non maintenue" },
          unit: "mm",
        },
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C24", "C27", "GL24h", "GL28h"],
        },
        {
          name: "m_d_knm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Md", en: "Md", fr: "Md" },
          unit: "kNm",
        },
        {
          name: "l_ef_factor",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "l_ef factor", en: "l_ef factor", fr: "facteur l_ef" },
        },
        {
          name: "n_d_compression_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Nd druk", en: "Nd compression", fr: "Nd compression" },
          unit: "kN",
        },
      ],
    },
  },
  ec5_timber_beam_check: {
    endpoint: "/calculate/ec5/timber-beam-check",
    title: {
      nl: "EC5 houten balkcontrole",
      en: "EC5 timber beam check",
      fr: "EC5 verification poutre bois",
    },
    sample: {
      span_m: 3.6,
      spacing_m: 0.6,
      b_mm: 75,
      h_mm: 225,
      wood_grade: "C24",
      climate_class: 2,
      q_permanent_kn_m2: 1,
      q_variable_kn_m2: 2,
    },
    form: {
      fields: [
        {
          name: "span_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Overspanning", en: "Span", fr: "Portee" },
          unit: "m",
        },
        {
          name: "spacing_m",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "Hart-op-hart afstand", en: "Spacing", fr: "Entraxe" },
          unit: "m",
        },
        {
          name: "b_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "h_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C18", "C24"],
        },
        {
          name: "climate_class",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse", en: "Service class", fr: "Classe de service" },
          options: [1, 2, 3],
        },
        {
          name: "q_permanent_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Permanente last", en: "Permanent load", fr: "Charge permanente" },
          unit: "kN/m2",
        },
        {
          name: "q_variable_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Veranderlijke last", en: "Variable load", fr: "Charge variable" },
          unit: "kN/m2",
        },
      ],
    },
  },
  ec5_timber_floor_vibration: {
    endpoint: "/calculate/ec5/timber-floor-vibration",
    title: {
      nl: "EC5 houten vloer trilling",
      en: "EC5 timber floor vibration",
      fr: "EC5 vibration plancher bois",
    },
    sample: {
      span_m: 3.6,
      spacing_m: 0.6,
      b_mm: 75,
      h_mm: 225,
      wood_grade: "C24",
      q_permanent_kn_m2: 1,
      point_load_n: 1000,
      deflection_limit_mm: 1.5,
      frequency_limit_hz: 8,
    },
    form: {
      fields: [
        {
          name: "span_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Overspanning", en: "Span", fr: "Portee" },
          unit: "m",
        },
        {
          name: "spacing_m",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "Hart-op-hart afstand", en: "Spacing", fr: "Entraxe" },
          unit: "m",
        },
        {
          name: "b_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "h_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C18", "C24"],
        },
        {
          name: "q_permanent_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Permanente last", en: "Permanent load", fr: "Charge permanente" },
          unit: "kN/m2",
        },
        {
          name: "point_load_n",
          value_type: "number",
          control: "number",
          step: "100",
          label: { nl: "Puntlast", en: "Point load", fr: "Charge ponctuelle" },
          unit: "N",
        },
        {
          name: "deflection_limit_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Doorbuigingslimiet", en: "Deflection limit", fr: "Limite fleche" },
          unit: "mm",
        },
        {
          name: "frequency_limit_hz",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Frequentielimiet", en: "Frequency limit", fr: "Limite frequence" },
          unit: "Hz",
        },
      ],
    },
  },
  ec5_timber_beam_fire_check: {
    endpoint: "/calculate/ec5/timber-beam-fire-check",
    title: {
      nl: "EC5 houten balk brandcontrole",
      en: "EC5 timber beam fire check",
      fr: "EC5 verification au feu poutre bois",
    },
    sample: {
      span_m: 3.6,
      spacing_m: 0.6,
      b_mm: 75,
      h_mm: 225,
      wood_grade: "C24",
      q_permanent_kn_m2: 1,
      q_variable_kn_m2: 2,
      fire_duration_min: 30,
    },
    form: {
      fields: [
        {
          name: "span_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Overspanning", en: "Span", fr: "Portee" },
          unit: "m",
        },
        {
          name: "spacing_m",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "Hart-op-hart afstand", en: "Spacing", fr: "Entraxe" },
          unit: "m",
        },
        {
          name: "b_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "h_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C18", "C24"],
        },
        {
          name: "q_permanent_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Permanente last", en: "Permanent load", fr: "Charge permanente" },
          unit: "kN/m2",
        },
        {
          name: "q_variable_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Veranderlijke last", en: "Variable load", fr: "Charge variable" },
          unit: "kN/m2",
        },
        {
          name: "fire_duration_min",
          value_type: "number",
          control: "number",
          step: "5",
          label: { nl: "Brandduur", en: "Fire duration", fr: "Duree feu" },
          unit: "min",
        },
      ],
    },
  },
  ec5_timber_member_uls_6_component: {
    endpoint: "/calculate/ec5/timber-member-uls-6-component",
    title: {
      nl: "EC5 houten element UGT 6 componenten",
      en: "EC5 timber member ULS, 6 components",
      fr: "EC5 element bois ELU 6 composantes",
    },
    sample: {
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
    },
    form: {
      fields: [
        {
          name: "b_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "h_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "l_ef_mm",
          value_type: "number",
          control: "number",
          step: "10",
          label: { nl: "Effectieve lengte", en: "Effective length", fr: "Longueur efficace" },
          unit: "mm",
        },
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C24", "C27", "GL24h", "GL28h"],
        },
        {
          name: "n_ed_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "NEd", en: "NEd", fr: "NEd" },
          unit: "kN",
        },
        {
          name: "vy_ed_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Vy,Ed", en: "Vy,Ed", fr: "Vy,Ed" },
          unit: "kN",
        },
        {
          name: "vz_ed_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Vz,Ed", en: "Vz,Ed", fr: "Vz,Ed" },
          unit: "kN",
        },
        {
          name: "mt_ed_knm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Mt,Ed", en: "Mt,Ed", fr: "Mt,Ed" },
          unit: "kNm",
        },
        {
          name: "my_ed_knm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "My,Ed", en: "My,Ed", fr: "My,Ed" },
          unit: "kNm",
        },
        {
          name: "mz_ed_knm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Mz,Ed", en: "Mz,Ed", fr: "Mz,Ed" },
          unit: "kNm",
        },
        {
          name: "k_mod",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "kmod", en: "kmod", fr: "kmod" },
        },
        {
          name: "support_condition",
          value_type: "string",
          control: "select",
          label: { nl: "Steunvoorwaarde", en: "Support condition", fr: "Condition d'appui" },
          options: ["pinned-pinned", "fixed-pinned", "fixed-fixed", "cantilever"],
        },
        {
          name: "lateral_restraint_type",
          value_type: "string",
          control: "select",
          label: { nl: "Zijdelingse steun", en: "Lateral restraint", fr: "Maintien lateral" },
          options: ["none", "discrete", "full"],
        },
        {
          name: "lateral_restraint_spacing_mm",
          value_type: "number",
          control: "number",
          step: "10",
          label: { nl: "Steunafstand", en: "Restraint spacing", fr: "Espacement maintien" },
          unit: "mm",
        },
        {
          name: "load_position",
          value_type: "string",
          control: "select",
          label: { nl: "Lastpositie", en: "Load position", fr: "Position charge" },
          options: ["top", "bottom", "centroid"],
        },
      ],
    },
  },
  ec5_joist_spacing_optimizer: {
    endpoint: "/calculate/ec5/joist-spacing-optimizer",
    title: {
      nl: "EC5 h.o.h.-afstand optimizer",
      en: "EC5 joist spacing optimizer",
      fr: "EC5 optimisation entraxe solives",
    },
    sample: {
      span_m: 3.6,
      b_mm: 75,
      h_mm: 225,
      wood_grade: "C24",
      climate_class: 2,
      q_permanent_kn_m2: 1,
      q_variable_kn_m2: 2,
      min_spacing_m: 0.2,
      max_spacing_m: 0.8,
      spacing_step_m: 0.02,
    },
    form: {
      fields: [
        {
          name: "span_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Overspanning", en: "Span", fr: "Portee" },
          unit: "m",
        },
        {
          name: "b_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "h_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C18", "C24"],
        },
        {
          name: "climate_class",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse", en: "Service class", fr: "Classe de service" },
          options: [1, 2, 3],
        },
        {
          name: "q_permanent_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Permanente last", en: "Permanent load", fr: "Charge permanente" },
          unit: "kN/m2",
        },
        {
          name: "q_variable_kn_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Veranderlijke last", en: "Variable load", fr: "Charge variable" },
          unit: "kN/m2",
        },
        {
          name: "min_spacing_m",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "Min. h.o.h.", en: "Min spacing", fr: "Entraxe min." },
          unit: "m",
        },
        {
          name: "max_spacing_m",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "Max. h.o.h.", en: "Max spacing", fr: "Entraxe max." },
          unit: "m",
        },
        {
          name: "spacing_step_m",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "Stap", en: "Step", fr: "Pas" },
          unit: "m",
        },
      ],
    },
  },
  ec5_osb_composite_vibration: {
    endpoint: "/calculate/ec5/osb-composite-vibration",
    title: {
      nl: "EC5 OSB samengestelde trilling",
      en: "EC5 OSB composite vibration",
      fr: "EC5 vibration mixte OSB",
    },
    sample: {
      span_m: 3.6,
      b_mm: 75,
      h_mm: 225,
      wood_grade: "C24",
      composite_factor: 1.15,
      load_n: 1000,
      limit_mm: 1.5,
    },
    form: {
      fields: [
        {
          name: "span_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Overspanning", en: "Span", fr: "Portee" },
          unit: "m",
        },
        {
          name: "b_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" },
          unit: "mm",
        },
        {
          name: "h_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" },
          unit: "mm",
        },
        {
          name: "wood_grade",
          value_type: "string",
          control: "select",
          label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" },
          options: ["C18", "C24"],
        },
        {
          name: "composite_factor",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "Composite factor", en: "Composite factor", fr: "Facteur composite" },
        },
        {
          name: "load_n",
          value_type: "number",
          control: "number",
          step: "100",
          label: { nl: "Puntlast", en: "Point load", fr: "Charge ponctuelle" },
          unit: "N",
        },
        {
          name: "limit_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Doorbuigingslimiet", en: "Deflection limit", fr: "Limite de fleche" },
          unit: "mm",
        },
      ],
    },
  },
  ec5_steel_timber_screw_connection: {
    endpoint: "/calculate/ec5/steel-timber-screw-connection",
    title: {
      nl: "EC5 staal-hout schroefverbinding",
      en: "EC5 steel-to-timber screw connection",
      fr: "EC5 assemblage acier-bois par vis",
    },
    sample: {
      config_type: "single",
      t_timber_1_mm: 80,
      t_timber_2_mm: 0,
      t_plate_mm: 6,
      n: 4,
      timber_type: "Softwood",
      rho_k: 420,
      service_class: 2,
      load_duration: "Short-term",
      d_mm: 8,
      d_root_mm: 5.6,
      l_penetration_mm: 80,
      f_uk_mpa: 600,
      m_y_rk_nmm: 0,
      spacings: { a1_mm: 90, a2_mm: 50, a3t_mm: 120, a4t_mm: 75 },
      alpha_deg: 45,
      f_d_kn: 20,
    },
    form: {
      fields: [
        {
          name: "config_type",
          value_type: "string",
          control: "select",
          label: { nl: "Configuratie", en: "Configuration", fr: "Configuration" },
          options: ["single", "central"],
        },
        {
          name: "t_timber_1_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte t1", en: "Timber thickness t1", fr: "Epaisseur bois t1" },
          unit: "mm",
        },
        {
          name: "t_timber_2_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte t2", en: "Timber thickness t2", fr: "Epaisseur bois t2" },
          unit: "mm",
        },
        {
          name: "t_plate_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" },
          unit: "mm",
        },
        {
          name: "n",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal schroeven", en: "Number of screws", fr: "Nombre de vis" },
        },
        {
          name: "timber_type",
          value_type: "string",
          control: "select",
          label: { nl: "Houttype", en: "Timber type", fr: "Type de bois" },
          options: ["Softwood", "LVL", "Hardwood"],
        },
        {
          name: "rho_k",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_k", en: "rho_k", fr: "rho_k" },
          unit: "kg/m3",
        },
        {
          name: "service_class",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse", en: "Service class", fr: "Classe de service" },
          options: [1, 2, 3],
        },
        {
          name: "load_duration",
          value_type: "string",
          control: "select",
          label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" },
          options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"],
        },
        {
          name: "d_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Diameter d", en: "Diameter d", fr: "Diametre d" },
          unit: "mm",
        },
        {
          name: "d_root_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Kerndiameter", en: "Root diameter", fr: "Diametre noyau" },
          unit: "mm",
        },
        {
          name: "l_penetration_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Indringlengte", en: "Penetration length", fr: "Longueur penetree" },
          unit: "mm",
        },
        {
          name: "f_uk_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "f_uk", en: "f_uk", fr: "f_uk" },
          unit: "N/mm2",
        },
        {
          name: "m_y_rk_nmm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "My,Rk", en: "My,Rk", fr: "My,Rk" },
          unit: "Nmm",
        },
        {
          name: "spacings.a1_mm",
          path: ["spacings", "a1_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a1", en: "a1", fr: "a1" },
          unit: "mm",
        },
        {
          name: "spacings.a2_mm",
          path: ["spacings", "a2_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a2", en: "a2", fr: "a2" },
          unit: "mm",
        },
        {
          name: "spacings.a3t_mm",
          path: ["spacings", "a3t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a3,t", en: "a3,t", fr: "a3,t" },
          unit: "mm",
        },
        {
          name: "spacings.a4t_mm",
          path: ["spacings", "a4t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a4,t", en: "a4,t", fr: "a4,t" },
          unit: "mm",
        },
        {
          name: "alpha_deg",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoek alpha", en: "Angle alpha", fr: "Angle alpha" },
          unit: "deg",
        },
        {
          name: "f_d_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Fd", en: "Fd", fr: "Fd" },
          unit: "kN",
        },
      ],
    },
  },
  ec5_steel_timber_double_shear_connection: {
    endpoint: "/calculate/ec5/steel-timber-double-shear-connection",
    title: {
      nl: "EC5 staal-hout verbinding dubbele afschuiving",
      en: "EC5 steel-to-timber double-shear connection",
      fr: "EC5 assemblage acier-bois double cisaillement",
    },
    sample: {
      t2_mm: 100,
      t_plate_mm: 8,
      n: 4,
      timber_type: "Softwood",
      rho_k: 350,
      service_class: 1,
      load_duration: "Medium-term",
      d_mm: 12,
      f_uk_mpa: 400,
      spacings: { a1_mm: 80, a2_mm: 60, a3t_mm: 100, a4t_mm: 40 },
      alpha_deg: 0,
      f_d_kn: 35,
    },
    form: {
      fields: [
        {
          name: "t2_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte t2", en: "Timber thickness t2", fr: "Epaisseur bois t2" },
          unit: "mm",
        },
        {
          name: "t_plate_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" },
          unit: "mm",
        },
        {
          name: "n",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal bouten", en: "Number of bolts", fr: "Nombre de boulons" },
        },
        {
          name: "timber_type",
          value_type: "string",
          control: "select",
          label: { nl: "Houttype", en: "Timber type", fr: "Type de bois" },
          options: ["Softwood", "LVL", "Hardwood"],
        },
        {
          name: "rho_k",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_k", en: "rho_k", fr: "rho_k" },
          unit: "kg/m3",
        },
        {
          name: "service_class",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse", en: "Service class", fr: "Classe de service" },
          options: [1, 2, 3],
        },
        {
          name: "load_duration",
          value_type: "string",
          control: "select",
          label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" },
          options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"],
        },
        {
          name: "d_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Diameter d", en: "Diameter d", fr: "Diametre d" },
          unit: "mm",
        },
        {
          name: "f_uk_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "f_uk", en: "f_uk", fr: "f_uk" },
          unit: "N/mm2",
        },
        {
          name: "spacings.a1_mm",
          path: ["spacings", "a1_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a1", en: "a1", fr: "a1" },
          unit: "mm",
        },
        {
          name: "spacings.a2_mm",
          path: ["spacings", "a2_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a2", en: "a2", fr: "a2" },
          unit: "mm",
        },
        {
          name: "spacings.a3t_mm",
          path: ["spacings", "a3t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a3,t", en: "a3,t", fr: "a3,t" },
          unit: "mm",
        },
        {
          name: "spacings.a4t_mm",
          path: ["spacings", "a4t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a4,t", en: "a4,t", fr: "a4,t" },
          unit: "mm",
        },
        {
          name: "alpha_deg",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoek alpha", en: "Angle alpha", fr: "Angle alpha" },
          unit: "deg",
        },
        {
          name: "f_d_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Fd", en: "Fd", fr: "Fd" },
          unit: "kN",
        },
      ],
    },
  },
  ec5_steel_timber_five_member_connection: {
    endpoint: "/calculate/ec5/steel-timber-five-member-connection",
    title: {
      nl: "EC5 staal-hout vijfdelige verbinding",
      en: "EC5 steel-to-timber five-member connection",
      fr: "EC5 assemblage acier-bois cinq elements",
    },
    sample: {
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
      spacings: { a1_mm: 80, a2_mm: 60, a3t_mm: 100, a4t_mm: 40 },
      alpha_deg: 0,
      f_d_kn: 70,
    },
    form: {
      fields: [
        {
          name: "t_w1_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte tw1", en: "Timber thickness tw1", fr: "Epaisseur bois tw1" },
          unit: "mm",
        },
        {
          name: "t_w2_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte tw2", en: "Timber thickness tw2", fr: "Epaisseur bois tw2" },
          unit: "mm",
        },
        {
          name: "t_plate_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" },
          unit: "mm",
        },
        {
          name: "n",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal bouten", en: "Number of bolts", fr: "Nombre de boulons" },
        },
        {
          name: "timber_type",
          value_type: "string",
          control: "select",
          label: { nl: "Houttype", en: "Timber type", fr: "Type de bois" },
          options: ["Softwood", "LVL", "Hardwood"],
        },
        {
          name: "rho_k",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_k", en: "rho_k", fr: "rho_k" },
          unit: "kg/m3",
        },
        {
          name: "service_class",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse", en: "Service class", fr: "Classe de service" },
          options: [1, 2, 3],
        },
        {
          name: "load_duration",
          value_type: "string",
          control: "select",
          label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" },
          options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"],
        },
        {
          name: "d_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Diameter d", en: "Diameter d", fr: "Diametre d" },
          unit: "mm",
        },
        {
          name: "f_uk_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "f_uk", en: "f_uk", fr: "f_uk" },
          unit: "N/mm2",
        },
        {
          name: "spacings.a1_mm",
          path: ["spacings", "a1_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a1", en: "a1", fr: "a1" },
          unit: "mm",
        },
        {
          name: "spacings.a2_mm",
          path: ["spacings", "a2_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a2", en: "a2", fr: "a2" },
          unit: "mm",
        },
        {
          name: "spacings.a3t_mm",
          path: ["spacings", "a3t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a3,t", en: "a3,t", fr: "a3,t" },
          unit: "mm",
        },
        {
          name: "spacings.a4t_mm",
          path: ["spacings", "a4t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a4,t", en: "a4,t", fr: "a4,t" },
          unit: "mm",
        },
        {
          name: "alpha_deg",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoek alpha", en: "Angle alpha", fr: "Angle alpha" },
          unit: "deg",
        },
        {
          name: "f_d_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Fd", en: "Fd", fr: "Fd" },
          unit: "kN",
        },
      ],
    },
  },
  ec5_timber_timber_single_shear_connection: {
    endpoint: "/calculate/ec5/timber-timber-single-shear-connection",
    title: {
      nl: "EC5 hout-hout verbinding enkele afschuiving",
      en: "EC5 timber-to-timber single-shear connection",
      fr: "EC5 assemblage bois-bois simple cisaillement",
    },
    sample: {
      t1_mm: 80,
      t2_mm: 80,
      n: 4,
      timber_type_1: "Softwood",
      timber_type_2: "Softwood",
      rho_k_1: 420,
      rho_k_2: 420,
      service_class_1: 2,
      service_class_2: 2,
      load_duration: "Short-term",
      fastener_type: "Screw",
      d_mm: 8,
      f_uk_mpa: 600,
      pre_drilled: false,
      use_rope_effect: true,
      f_ax_rk_n: 9000,
      spacings: {
        a1_mm: 90,
        a2_mm: 50,
        a3t_mm: 120,
        a3c_mm: 180,
        a4t_mm: 75,
        a4c_mm: 40,
      },
      alpha_deg: 45,
      f_v_ed_kn: 15,
    },
    form: {
      fields: [
        {
          name: "t1_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte t1", en: "Timber thickness t1", fr: "Epaisseur bois t1" },
          unit: "mm",
        },
        {
          name: "t2_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Houtdikte t2", en: "Timber thickness t2", fr: "Epaisseur bois t2" },
          unit: "mm",
        },
        {
          name: "n",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal bevestigers", en: "Number of fasteners", fr: "Nombre de fixations" },
        },
        {
          name: "timber_type_1",
          value_type: "string",
          control: "select",
          label: { nl: "Houttype 1", en: "Timber type 1", fr: "Type de bois 1" },
          options: ["Softwood", "Glulam", "LVL", "Hardwood"],
        },
        {
          name: "timber_type_2",
          value_type: "string",
          control: "select",
          label: { nl: "Houttype 2", en: "Timber type 2", fr: "Type de bois 2" },
          options: ["Softwood", "Glulam", "LVL", "Hardwood"],
        },
        {
          name: "rho_k_1",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_k lid 1", en: "rho_k member 1", fr: "rho_k element 1" },
          unit: "kg/m3",
        },
        {
          name: "rho_k_2",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "rho_k lid 2", en: "rho_k member 2", fr: "rho_k element 2" },
          unit: "kg/m3",
        },
        {
          name: "service_class_1",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse 1", en: "Service class 1", fr: "Classe de service 1" },
          options: [1, 2, 3],
        },
        {
          name: "service_class_2",
          value_type: "number",
          control: "select",
          label: { nl: "Serviceklasse 2", en: "Service class 2", fr: "Classe de service 2" },
          options: [1, 2, 3],
        },
        {
          name: "load_duration",
          value_type: "string",
          control: "select",
          label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" },
          options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"],
        },
        {
          name: "fastener_type",
          value_type: "string",
          control: "select",
          label: { nl: "Bevestiger", en: "Fastener", fr: "Fixation" },
          options: ["Nail", "Bolt", "Dowel", "Screw"],
        },
        {
          name: "d_mm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Diameter d", en: "Diameter d", fr: "Diametre d" },
          unit: "mm",
        },
        {
          name: "f_uk_mpa",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "f_uk", en: "f_uk", fr: "f_uk" },
          unit: "N/mm2",
        },
        {
          name: "pre_drilled",
          value_type: "boolean",
          control: "checkbox",
          label: { nl: "Voorgeboord", en: "Pre-drilled", fr: "Preperce" },
        },
        {
          name: "use_rope_effect",
          value_type: "boolean",
          control: "checkbox",
          label: { nl: "Touw-effect", en: "Rope effect", fr: "Effet de corde" },
        },
        {
          name: "f_ax_rk_n",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Fax,Rk", en: "Fax,Rk", fr: "Fax,Rk" },
          unit: "N",
        },
        {
          name: "spacings.a1_mm",
          path: ["spacings", "a1_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a1", en: "a1", fr: "a1" },
          unit: "mm",
        },
        {
          name: "spacings.a2_mm",
          path: ["spacings", "a2_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a2", en: "a2", fr: "a2" },
          unit: "mm",
        },
        {
          name: "spacings.a3t_mm",
          path: ["spacings", "a3t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a3,t", en: "a3,t", fr: "a3,t" },
          unit: "mm",
        },
        {
          name: "spacings.a3c_mm",
          path: ["spacings", "a3c_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a3,c", en: "a3,c", fr: "a3,c" },
          unit: "mm",
        },
        {
          name: "spacings.a4t_mm",
          path: ["spacings", "a4t_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a4,t", en: "a4,t", fr: "a4,t" },
          unit: "mm",
        },
        {
          name: "spacings.a4c_mm",
          path: ["spacings", "a4c_mm"],
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "a4,c", en: "a4,c", fr: "a4,c" },
          unit: "mm",
        },
        {
          name: "alpha_deg",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Hoek alpha", en: "Angle alpha", fr: "Angle alpha" },
          unit: "deg",
        },
        {
          name: "f_v_ed_kn",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "FV,Ed", en: "FV,Ed", fr: "FV,Ed" },
          unit: "kN",
        },
      ],
    },
  },
  ec5_timber_timber_double_shear_connection: {
    endpoint: "/calculate/ec5/timber-timber-double-shear-connection",
    title: {
      nl: "EC5 hout-hout verbinding dubbele afschuiving",
      en: "EC5 timber-to-timber double-shear connection",
      fr: "EC5 assemblage bois-bois double cisaillement",
    },
    sample: {
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
    },
    form: {
      fields: [
        { name: "t1_mm", value_type: "number", control: "number", step: "1", label: { nl: "Buitenlid t1", en: "Outer member t1", fr: "Element exterieur t1" }, unit: "mm" },
        { name: "t2_mm", value_type: "number", control: "number", step: "1", label: { nl: "Binnenlid t2", en: "Inner member t2", fr: "Element interieur t2" }, unit: "mm" },
        { name: "n", value_type: "number", control: "number", step: "1", label: { nl: "Aantal bevestigers", en: "Number of fasteners", fr: "Nombre de fixations" } },
        { name: "timber_type_outer", value_type: "string", control: "select", label: { nl: "Houttype buiten", en: "Outer timber type", fr: "Type bois exterieur" }, options: ["Softwood", "Glulam", "LVL", "Hardwood"] },
        { name: "timber_type_inner", value_type: "string", control: "select", label: { nl: "Houttype binnen", en: "Inner timber type", fr: "Type bois interieur" }, options: ["Softwood", "Glulam", "LVL", "Hardwood"] },
        { name: "rho_k_outer", value_type: "number", control: "number", step: "1", label: { nl: "rho_k buiten", en: "rho_k outer", fr: "rho_k exterieur" }, unit: "kg/m3" },
        { name: "rho_k_inner", value_type: "number", control: "number", step: "1", label: { nl: "rho_k binnen", en: "rho_k inner", fr: "rho_k interieur" }, unit: "kg/m3" },
        { name: "service_class_outer", value_type: "number", control: "select", label: { nl: "Serviceklasse buiten", en: "Outer service class", fr: "Classe service exterieure" }, options: [1, 2, 3] },
        { name: "service_class_inner", value_type: "number", control: "select", label: { nl: "Serviceklasse binnen", en: "Inner service class", fr: "Classe service interieure" }, options: [1, 2, 3] },
        { name: "load_duration", value_type: "string", control: "select", label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" }, options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"] },
        { name: "fastener_type", value_type: "string", control: "select", label: { nl: "Bevestiger", en: "Fastener", fr: "Fixation" }, options: ["Nail", "Bolt", "Dowel", "Screw"] },
        { name: "d_mm", value_type: "number", control: "number", step: "0.1", label: { nl: "Diameter d", en: "Diameter d", fr: "Diametre d" }, unit: "mm" },
        { name: "f_uk_mpa", value_type: "number", control: "number", step: "1", label: { nl: "f_uk", en: "f_uk", fr: "f_uk" }, unit: "N/mm2" },
        { name: "pre_drilled", value_type: "boolean", control: "checkbox", label: { nl: "Voorgeboord", en: "Pre-drilled", fr: "Preperce" } },
        { name: "use_rope_effect", value_type: "boolean", control: "checkbox", label: { nl: "Touw-effect", en: "Rope effect", fr: "Effet de corde" } },
        { name: "f_ax_rk_n", value_type: "number", control: "number", step: "1", label: { nl: "Fax,Rk", en: "Fax,Rk", fr: "Fax,Rk" }, unit: "N" },
        { name: "spacings.a1_mm", path: ["spacings", "a1_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a1", en: "a1", fr: "a1" }, unit: "mm" },
        { name: "spacings.a2_mm", path: ["spacings", "a2_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a2", en: "a2", fr: "a2" }, unit: "mm" },
        { name: "spacings.a3t_mm", path: ["spacings", "a3t_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a3,t", en: "a3,t", fr: "a3,t" }, unit: "mm" },
        { name: "spacings.a3c_mm", path: ["spacings", "a3c_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a3,c", en: "a3,c", fr: "a3,c" }, unit: "mm" },
        { name: "spacings.a4t_mm", path: ["spacings", "a4t_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a4,t", en: "a4,t", fr: "a4,t" }, unit: "mm" },
        { name: "spacings.a4c_mm", path: ["spacings", "a4c_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a4,c", en: "a4,c", fr: "a4,c" }, unit: "mm" },
        { name: "alpha_deg", value_type: "number", control: "number", step: "1", label: { nl: "Hoek alpha", en: "Angle alpha", fr: "Angle alpha" }, unit: "deg" },
        { name: "f_v_ed_kn", value_type: "number", control: "number", step: "0.1", label: { nl: "FV,Ed", en: "FV,Ed", fr: "FV,Ed" }, unit: "kN" },
      ],
    },
  },
  ec5_toothed_plate_connection: {
    endpoint: "/calculate/ec5/toothed-plate-connection",
    title: {
      nl: "EC5 tandplaatverbinding",
      en: "EC5 toothed-plate connection",
      fr: "EC5 assemblage a connecteurs a dents",
    },
    sample: {
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
    },
    form: {
      fields: [
        { name: "t1_mm", value_type: "number", control: "number", step: "1", label: { nl: "Houtdikte t1", en: "Timber thickness t1", fr: "Epaisseur bois t1" }, unit: "mm" },
        { name: "t2_mm", value_type: "number", control: "number", step: "1", label: { nl: "Houtdikte t2", en: "Timber thickness t2", fr: "Epaisseur bois t2" }, unit: "mm" },
        { name: "n", value_type: "number", control: "number", step: "1", label: { nl: "Aantal paren", en: "Connector pairs", fr: "Paires connecteurs" } },
        { name: "timber_type_1", value_type: "string", control: "select", label: { nl: "Houttype 1", en: "Timber type 1", fr: "Type de bois 1" }, options: ["Softwood", "Glulam", "LVL", "Hardwood"] },
        { name: "timber_type_2", value_type: "string", control: "select", label: { nl: "Houttype 2", en: "Timber type 2", fr: "Type de bois 2" }, options: ["Softwood", "Glulam", "LVL", "Hardwood"] },
        { name: "rho_k_1", value_type: "number", control: "number", step: "1", label: { nl: "rho_k lid 1", en: "rho_k member 1", fr: "rho_k element 1" }, unit: "kg/m3" },
        { name: "rho_k_2", value_type: "number", control: "number", step: "1", label: { nl: "rho_k lid 2", en: "rho_k member 2", fr: "rho_k element 2" }, unit: "kg/m3" },
        { name: "service_class_1", value_type: "number", control: "select", label: { nl: "Serviceklasse 1", en: "Service class 1", fr: "Classe de service 1" }, options: [1, 2, 3] },
        { name: "service_class_2", value_type: "number", control: "select", label: { nl: "Serviceklasse 2", en: "Service class 2", fr: "Classe de service 2" }, options: [1, 2, 3] },
        { name: "load_duration", value_type: "string", control: "select", label: { nl: "Belastingsduur", en: "Load duration", fr: "Duree de charge" }, options: ["Permanent", "Long-term", "Medium-term", "Short-term", "Instantaneous"] },
        { name: "connector_type", value_type: "string", control: "select", label: { nl: "Connectortype", en: "Connector type", fr: "Type connecteur" }, options: ["C1-C9", "C10-C11"] },
        { name: "dc_mm", value_type: "number", control: "number", step: "1", label: { nl: "dc", en: "dc", fr: "dc" }, unit: "mm" },
        { name: "he_mm", value_type: "number", control: "number", step: "1", label: { nl: "he", en: "he", fr: "he" }, unit: "mm" },
        { name: "d_mm", value_type: "number", control: "number", step: "0.1", label: { nl: "Boutdiameter d", en: "Bolt diameter d", fr: "Diametre boulon d" }, unit: "mm" },
        { name: "f_uk_mpa", value_type: "number", control: "number", step: "1", label: { nl: "f_uk", en: "f_uk", fr: "f_uk" }, unit: "N/mm2" },
        { name: "spacings.a1_mm", path: ["spacings", "a1_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a1", en: "a1", fr: "a1" }, unit: "mm" },
        { name: "spacings.a2_mm", path: ["spacings", "a2_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a2", en: "a2", fr: "a2" }, unit: "mm" },
        { name: "spacings.a3t_mm", path: ["spacings", "a3t_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a3,t", en: "a3,t", fr: "a3,t" }, unit: "mm" },
        { name: "spacings.a3c_mm", path: ["spacings", "a3c_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a3,c", en: "a3,c", fr: "a3,c" }, unit: "mm" },
        { name: "spacings.a4t_mm", path: ["spacings", "a4t_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a4,t", en: "a4,t", fr: "a4,t" }, unit: "mm" },
        { name: "spacings.a4c_mm", path: ["spacings", "a4c_mm"], value_type: "number", control: "number", step: "1", label: { nl: "a4,c", en: "a4,c", fr: "a4,c" }, unit: "mm" },
        { name: "alpha_deg", value_type: "number", control: "number", step: "1", label: { nl: "Hoek alpha", en: "Angle alpha", fr: "Angle alpha" }, unit: "deg" },
        { name: "f_v_ed_kn", value_type: "number", control: "number", step: "0.1", label: { nl: "FV,Ed", en: "FV,Ed", fr: "FV,Ed" }, unit: "kN" },
      ],
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
  ec6_masonry_contact_pressure: {
    endpoint: "/calculate/ec6/masonry-contact-pressure",
    title: {
      nl: "EC6 contactdruk metselwerk",
      en: "EC6 masonry contact pressure",
      fr: "EC6 pression de contact maconnerie",
    },
    sample: {
      beam_id: "B2.1",
      n_ed_kn: 64.03,
      profile_name: "HE 240 A",
      beam_width_mm: 240,
      masonry_thickness_mm: 140,
      support_length_mm: 140,
      fd_design_mpa: 3,
    },
    form: {
      fields: [
        {
          name: "profile_name",
          value_type: "string",
          control: "select",
          label: { nl: "Profiel", en: "Profile", fr: "Profil" },
          options: [
            "HE 240 A",
            "HE 240 B",
            "HE 220 A",
            "HE 220 B",
            "HE 200 A",
            "HE 200 B",
            "HE 180 A",
            "HE 180 B",
            "HE 160 A",
            "HE 160 B",
            "HE 140 A",
            "HE 140 B",
            "HEA 140",
            "IPE 360",
            "2x HEA 140",
          ],
        },
        {
          name: "beam_width_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Balkbreedte", en: "Beam width", fr: "Largeur poutre" },
          unit: "mm",
        },
        {
          name: "n_ed_kn",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "NEd", en: "NEd", fr: "NEd" },
          unit: "kN",
        },
        {
          name: "masonry_thickness_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Metselwerkdikte", en: "Masonry thickness", fr: "Epaisseur maconnerie" },
          unit: "mm",
        },
        {
          name: "support_length_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Opleglengte", en: "Support length", fr: "Longueur d'appui" },
          unit: "mm",
        },
        {
          name: "fd_design_mpa",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "fd", en: "fd", fr: "fd" },
          unit: "MPa",
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
    form: {
      fields: [
        {
          name: "length_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Wandlengte", en: "Wall length", fr: "Longueur du mur" },
          unit: "mm",
        },
        {
          name: "thickness_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Wanddikte", en: "Wall thickness", fr: "Epaisseur du mur" },
          unit: "mm",
        },
        {
          name: "material_type",
          value_type: "string",
          control: "select",
          label: { nl: "Materiaal", en: "Material", fr: "Materiau" },
          options: [
            "clay",
            "calcium_silicate",
            "aggregate_concrete_cat1",
            "aggregate_concrete_cat2",
            "aac",
            "manufactured_stone",
            "natural_stone",
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
          name: "mortar_class",
          value_type: "string",
          control: "select",
          label: { nl: "Mortelklasse", en: "Mortar class", fr: "Classe de mortier" },
          options: ["M2.5-M9", "M10-M20", "thin_layer", "lightweight"],
        },
        {
          name: "mortar_type",
          value_type: "string",
          control: "select",
          label: { nl: "Morteltype", en: "Mortar type", fr: "Type de mortier" },
          options: ["general_purpose", "thin_layer", "lightweight"],
        },
        {
          name: "n_ed_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "NEd", en: "NEd", fr: "NEd" },
          unit: "kN",
        },
        {
          name: "v_ed_kn",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "VEd", en: "VEd", fr: "VEd" },
          unit: "kN",
        },
        {
          name: "m_ed_knm",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "MEd", en: "MEd", fr: "MEd" },
          unit: "kNm",
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
  ec6_masonry_horizontal_capacity: {
    endpoint: "/calculate/ec6/masonry-horizontal-capacity",
    title: {
      nl: "EC6 horizontale capaciteit metselwerk",
      en: "EC6 masonry horizontal capacity",
      fr: "EC6 capacite horizontale maconnerie",
    },
    sample: {
      length_mm: 660,
      height_mm: 1450,
      thickness_mm: 140,
      n_walls: 2,
      compression_fraction: 0.5,
      material_type: "aac",
      mortar_class: "thin_layer",
      fb_mpa: 4,
      tensile_strength_char_mpa: 0.35,
      gamma_m: 2,
    },
    form: {
      fields: [
        {
          name: "length_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Wandlengte", en: "Wall length", fr: "Longueur du mur" },
          unit: "mm",
        },
        {
          name: "height_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Wandhoogte", en: "Wall height", fr: "Hauteur du mur" },
          unit: "mm",
        },
        {
          name: "thickness_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Wanddikte", en: "Wall thickness", fr: "Epaisseur du mur" },
          unit: "mm",
        },
        {
          name: "n_walls",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Aantal wanden", en: "Number of walls", fr: "Nombre de murs" },
        },
        {
          name: "compression_fraction",
          value_type: "number",
          control: "number",
          step: "0.05",
          label: { nl: "Drukzonefractie", en: "Compression fraction", fr: "Fraction comprimee" },
        },
        {
          name: "material_type",
          value_type: "string",
          control: "select",
          label: { nl: "Materiaal", en: "Material", fr: "Materiau" },
          options: [
            "clay",
            "calcium_silicate",
            "aggregate_concrete_cat1",
            "aggregate_concrete_cat2",
            "aac",
            "manufactured_stone",
            "natural_stone",
          ],
        },
        {
          name: "mortar_class",
          value_type: "string",
          control: "select",
          label: { nl: "Mortelklasse", en: "Mortar class", fr: "Classe de mortier" },
          options: ["M2.5-M9", "M10-M20", "thin_layer", "lightweight"],
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
          name: "tensile_strength_char_mpa",
          value_type: "number",
          control: "number",
          step: "0.01",
          label: { nl: "Treksterkte fk", en: "Tensile strength fk", fr: "Resistance traction fk" },
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
    form: {
      fields: [
        {
          name: "height_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Wandhoogte", en: "Wall height", fr: "Hauteur du mur" },
          unit: "m",
        },
        {
          name: "length_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "Wandlengte", en: "Wall length", fr: "Longueur du mur" },
          unit: "m",
        },
        {
          name: "thickness_mm",
          value_type: "number",
          control: "number",
          step: "1",
          label: { nl: "Wanddikte", en: "Wall thickness", fr: "Epaisseur du mur" },
          unit: "mm",
        },
        {
          name: "support_case",
          value_type: "string",
          control: "select",
          label: { nl: "Ondersteuning", en: "Support case", fr: "Cas d'appui" },
          options: ["four_sides", "top_bottom", "left_right"],
        },
        {
          name: "material_type",
          value_type: "string",
          control: "select",
          label: { nl: "Materiaal", en: "Material", fr: "Materiau" },
          options: [
            "clay_abs_lt_7",
            "clay_abs_7_12",
            "clay_abs_gt_12",
            "calcium_silicate",
            "concrete_aac_fb_lt_5",
            "concrete_aac_fb_ge_5",
          ],
        },
        {
          name: "mortar_class",
          value_type: "string",
          control: "select",
          label: { nl: "Mortelklasse", en: "Mortar class", fr: "Classe de mortier" },
          options: ["M12", "M6_M4", "M2"],
        },
        {
          name: "n_ed_line_kn_per_m",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "NEd lijnlast", en: "NEd line load", fr: "Charge lineaire NEd" },
          unit: "kN/m",
        },
        {
          name: "w_ed_kn_per_m2",
          value_type: "number",
          control: "number",
          step: "0.1",
          label: { nl: "wEd", en: "wEd", fr: "wEd" },
          unit: "kN/m2",
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
};

const TEXT = {
  nl: {
    form: "Invoerformulier",
    input: "Invoer JSON",
    result: "Resultaat",
    calculate: "Bereken",
    save: "Bewaar",
    load: "Laad",
    download: "Download JSON",
    downloadHtml: "Download HTML",
    print: "Afdrukken",
    reportTitle: "Rekenrecord",
    generatedAt: "Gegenereerd",
    calculator: "Calculator",
    formulaVersion: "Formuleversie",
    summary: "Samenvatting",
    assumptions: "Aannames",
    sourceRefs: "Bronnen",
    warnings: "Waarschuwingen",
    none: "Geen",
    notProvided: "Niet opgegeven",
    status: "Indicatief rekenrecord.",
  },
  en: {
    form: "Input form",
    input: "Input JSON",
    result: "Result",
    calculate: "Calculate",
    save: "Save",
    load: "Load",
    download: "Download JSON",
    downloadHtml: "Download HTML",
    print: "Print",
    reportTitle: "Calculation record",
    generatedAt: "Generated",
    calculator: "Calculator",
    formulaVersion: "Formula version",
    summary: "Summary",
    assumptions: "Assumptions",
    sourceRefs: "Source references",
    warnings: "Warnings",
    none: "None",
    notProvided: "Not provided",
    status: "Indicative calculation record.",
  },
  fr: {
    form: "Formulaire",
    input: "JSON d'entree",
    result: "Resultat",
    calculate: "Calculer",
    save: "Enregistrer",
    load: "Charger",
    download: "Telecharger JSON",
    downloadHtml: "Telecharger HTML",
    print: "Imprimer",
    reportTitle: "Releve de calcul",
    generatedAt: "Genere",
    calculator: "Calculateur",
    formulaVersion: "Version formule",
    summary: "Synthese",
    assumptions: "Hypotheses",
    sourceRefs: "References",
    warnings: "Avertissements",
    none: "Aucun",
    notProvided: "Non indique",
    status: "Releve de calcul indicatif.",
  },
};

const RESULT_SUMMARY_FIELDS = {
  beam_composite_shear_stress: [
    { path: ["result", "tau_n_per_mm2"], label: { nl: "Tau", en: "Tau", fr: "Tau" }, unit: "N/mm2" },
    { path: ["result", "neutral_axis_y_mm"], label: { nl: "Neutrale as", en: "Neutral axis", fr: "Axe neutre" }, unit: "mm" },
    { path: ["result", "transformed_inertia_i_prime_mm4"], label: { nl: "I'", en: "I'", fr: "I'" }, unit: "mm4" },
    { path: ["result", "static_moment_s_prime_mm3"], label: { nl: "S'", en: "S'", fr: "S'" }, unit: "mm3" },
    { path: ["result", "actual_width_at_target_mm"], label: { nl: "Breedte", en: "Width", fr: "Largeur" }, unit: "mm" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  beam_continuous_strip: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "response", "max_moment_knm", "absolute_value"], label: { nl: "Max |M|", en: "Max |M|", fr: "Max |M|" }, unit: "kNm" },
    { path: ["result", "response", "max_shear_kn", "absolute_value"], label: { nl: "Max |V|", en: "Max |V|", fr: "Max |V|" }, unit: "kN" },
    { path: ["result", "response", "max_deflection_mm", "absolute_value"], label: { nl: "Max doorbuiging", en: "Max deflection", fr: "Fleche max" }, unit: "mm" },
    { path: ["result", "response", "reactions", 1, "ry_kn"], label: { nl: "Binnensteun links", en: "Inner-left reaction", fr: "Reaction appui interieur gauche" }, unit: "kN" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  beam_spring_calibration: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "target_moment_knm"], label: { nl: "Doelmoment", en: "Target moment", fr: "Moment cible" }, unit: "kNm" },
    { path: ["result", "calibration", "calibrated_stiffness_n_per_m"], label: { nl: "Gecalibreerde veer", en: "Calibrated spring", fr: "Ressort calibre" }, unit: "N/m" },
    { path: ["result", "calibration", "measured_value"], label: { nl: "Gemeten moment", en: "Measured moment", fr: "Moment mesure" }, unit: "kNm" },
    { path: ["result", "response", "reactions", 1, "ry_kn"], label: { nl: "Veerreactie", en: "Spring reaction", fr: "Reaction ressort" }, unit: "kN" },
    { path: ["result", "response", "max_deflection_mm", "absolute_value"], label: { nl: "Max doorbuiging", en: "Max deflection", fr: "Fleche max" }, unit: "mm" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  beam_simple_diagrams: [
    { path: ["result", "cases", "uls", "m_max_knm"], label: { nl: "ULS Mmax", en: "ULS Mmax", fr: "ELU Mmax" }, unit: "kNm" },
    { path: ["result", "cases", "uls", "v_max_kn"], label: { nl: "ULS Vmax", en: "ULS Vmax", fr: "ELU Vmax" }, unit: "kN" },
    { path: ["result", "cases", "sls", "m_max_knm"], label: { nl: "SLS Mmax", en: "SLS Mmax", fr: "ELS Mmax" }, unit: "kNm" },
    { path: ["result", "cases", "sls", "v_max_kn"], label: { nl: "SLS Vmax", en: "SLS Vmax", fr: "ELS Vmax" }, unit: "kN" },
    { path: ["result", "cases", "uls", "reactions", "left_kn"], label: { nl: "ULS R links", en: "ULS R left", fr: "ELU R gauche" }, unit: "kN" },
    { path: ["result", "cases", "uls", "reactions", "right_kn"], label: { nl: "ULS R rechts", en: "ULS R right", fr: "ELU R droite" }, unit: "kN" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  beam_support_fixity_bracketing: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "fixed_case", "max_moment_knm", "absolute_value"], label: { nl: "Vast Mmax", en: "Fixed Mmax", fr: "Fixe Mmax" }, unit: "kNm" },
    { path: ["result", "pinned_case", "max_moment_knm", "absolute_value"], label: { nl: "Scharnier Mmax", en: "Pinned Mmax", fr: "Articule Mmax" }, unit: "kNm" },
    { path: ["result", "average_response", "max_abs_moment_knm"], label: { nl: "Gemiddeld |M|max", en: "Average |M|max", fr: "Moyenne |M|max" }, unit: "kNm" },
    { path: ["result", "average_response", "max_abs_deflection_mm"], label: { nl: "Gemiddelde doorbuiging", en: "Average deflection", fr: "Fleche moyenne" }, unit: "mm" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  composite_embedded_profile_bearing: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "sigma_c_max_kpa"], label: { nl: "Sigma c max", en: "Sigma c max", fr: "Sigma c max" }, unit: "kPa" },
    { path: ["result", "concrete_design_pressure_kpa"], label: { nl: "Toelaatbaar", en: "Design limit", fr: "Limite calcul" }, unit: "kPa" },
    { path: ["result", "max_hanging_force_kn"], label: { nl: "Ophangkracht", en: "Hanging force", fr: "Effort suspendu" }, unit: "kN" },
    { path: ["result", "required_bars"], label: { nl: "Vereiste staven", en: "Required bars", fr: "Barres requises" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec1_roof_loads: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "governing_variable_load_kn_m2"], label: { nl: "Maatgevende last", en: "Governing load", fr: "Charge determinante" }, unit: "kN/m2" },
    { path: ["result", "governing_variable_load_kind"], label: { nl: "Maatgevend type", en: "Governing type", fr: "Type determinant" } },
    { path: ["result", "snow_load_kn_m2"], label: { nl: "Sneeuwlast", en: "Snow load", fr: "Charge neige" }, unit: "kN/m2" },
    { path: ["result", "maintenance_load_formula_kn_m2"], label: { nl: "Onderhoud formule", en: "Maintenance formula", fr: "Entretien formule" }, unit: "kN/m2" },
    { path: ["result", "snow_shape_coefficient_mu1"], label: { nl: "mu1", en: "mu1", fr: "mu1" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec2_rectangular_section_capacity: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "governing_capacity_knm"], label: { nl: "Maatgevende capaciteit", en: "Governing capacity", fr: "Capacite determinante" }, unit: "kNm" },
    { path: ["result", "uls_capacity_knm"], label: { nl: "ULS capaciteit", en: "ULS capacity", fr: "Capacite ELU" }, unit: "kNm" },
    { path: ["result", "sls_characteristic_capacity_knm"], label: { nl: "SLS karakteristiek", en: "SLS characteristic", fr: "ELS caracteristique" }, unit: "kNm" },
    { path: ["result", "sls_frequent_capacity_knm"], label: { nl: "SLS frequent", en: "SLS frequent", fr: "ELS frequent" }, unit: "kNm" },
    { path: ["result", "max_utilization"], label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_bolt_group_torsion: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "critical_bolt_id"], label: { nl: "Kritische bout", en: "Critical bolt", fr: "Boulon critique" } },
    { path: ["result", "max_bolt_force_kn"], label: { nl: "Max boutkracht", en: "Max bolt force", fr: "Effort boulon max" }, unit: "kN" },
    { path: ["result", "shear_resistance_per_bolt_kn"], label: { nl: "Afschuifweerstand/bout", en: "Shear resistance/bolt", fr: "Resistance cisaillement/boulon" }, unit: "kN" },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_splice_moment_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "mj_rd_knm"], label: { nl: "Mj,Rd", en: "Mj,Rd", fr: "Mj,Rd" }, unit: "kNm" },
    { path: ["result", "sj_ini_knm_per_rad"], label: { nl: "Sj,ini", en: "Sj,ini", fr: "Sj,ini" }, unit: "kNm/rad" },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "compression_flange_governs"], label: { nl: "Drukflens maatgevend", en: "Compression flange governs", fr: "Semelle comprimee critique" }, format: "check" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_double_sided_web_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "critical_component"], label: { nl: "Kritisch", en: "Critical", fr: "Critique" } },
    { path: ["result", "max_utilization"], label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
    { path: ["result", "moment_resistance_knm"], label: { nl: "Momentweerstand", en: "Moment resistance", fr: "Resistance moment" }, unit: "kNm" },
    { path: ["result", "primary_web_bearing_capacity_kn"], label: { nl: "Primair lijf opleg", en: "Primary web bearing", fr: "Appui ame primaire" }, unit: "kN" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_bolted_lap_joint: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "governing_resistance_kn"], label: { nl: "Maatgevende weerstand", en: "Governing resistance", fr: "Resistance determinante" }, unit: "kN" },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing", fr: "Determinant" } },
    { path: ["result", "geometry_warning_count"], label: { nl: "Geometrie waarschuwingen", en: "Geometry warnings", fr: "Avertissements geometrie" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_bolted_moment_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "mj_rd_knm"], label: { nl: "Mj,Rd", en: "Mj,Rd", fr: "Mj,Rd" }, unit: "kNm" },
    { path: ["result", "sj_ini_knm_per_rad"], label: { nl: "Sj,ini", en: "Sj,ini", fr: "Sj,ini" }, unit: "kNm/rad" },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "critical_component"], label: { nl: "Kritisch", en: "Critical", fr: "Critique" } },
    { path: ["result", "geometry_warning_count"], label: { nl: "Geometrie waarschuwingen", en: "Geometry warnings", fr: "Avertissements geometrie" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_fillet_weld: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "verification_method"], label: { nl: "Methode", en: "Method", fr: "Methode" } },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "geometry_check", "geometry_check_passed"], label: { nl: "Geometrie", en: "Geometry", fr: "Geometrie" }, format: "check" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_plate_tension: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "n_rd_kn"], label: { nl: "NRd", en: "NRd", fr: "NRd" }, unit: "kN" },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "governing_criterion"], label: { nl: "Maatgevend", en: "Governing", fr: "Determinant" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_steel_section_check: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "section_class"], label: { nl: "Sectieklasse", en: "Section class", fr: "Classe section" } },
    { path: ["result", "critical_check"], label: { nl: "Kritisch", en: "Critical", fr: "Critique" } },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "resistances", "m_y_rd_knm"], label: { nl: "My,Rd", en: "My,Rd", fr: "My,Rd" }, unit: "kNm" },
    { path: ["result", "resistances", "v_y_rd_kn"], label: { nl: "Vy,Rd", en: "Vy,Rd", fr: "Vy,Rd" }, unit: "kN" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_lateral_torsional_buckling: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "mb_rd_knm"], label: { nl: "Mb,Rd", en: "Mb,Rd", fr: "Mb,Rd" }, unit: "kNm" },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "lambda_lt"], label: { nl: "Lambda LT", en: "Lambda LT", fr: "Lambda LT" } },
    { path: ["result", "ltb_required"], label: { nl: "Kipcontrole nodig", en: "LTB required", fr: "Deversement requis" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec3_profile_optimizer: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "optimized_profile", "profile_name"], label: { nl: "Profiel", en: "Profile", fr: "Profil" } },
    { path: ["result", "optimized_profile", "total_weight_kg"], label: { nl: "Totaal gewicht", en: "Total weight", fr: "Poids total" }, unit: "kg" },
    { path: ["result", "optimized_profile", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "suitable_count"], label: { nl: "Geschikt", en: "Suitable", fr: "Valables" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_timber_contact_moment_joint: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "m_rd_kNm"], label: { nl: "MRd", en: "MRd", fr: "MRd" }, unit: "kNm" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "check_passed"], label: { nl: "Controle", en: "Check", fr: "Controle" }, format: "check" },
  ],
  ec5_axial_screw: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "design_capacity_n"], label: { nl: "Ontwerpcapaciteit", en: "Design capacity", fr: "Capacite de calcul" }, unit: "N" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "governing_failure_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
    { path: ["result", "check_passed"], label: { nl: "Controle", en: "Check", fr: "Controle" }, format: "check" },
  ],
  ec5_stabilizing_force: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "f_d_kn"], label: { nl: "Fd", en: "Fd", fr: "Fd" }, unit: "kN" },
    { path: ["result", "lambda_rel_m"], label: { nl: "lambda rel,m", en: "lambda rel,m", fr: "lambda rel,m" } },
    { path: ["result", "k_crit"], label: { nl: "kcrit", en: "kcrit", fr: "kcrit" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_timber_beam_check: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "uc_bending"], label: { nl: "Buiging", en: "Bending UC", fr: "Taux flexion" } },
    { path: ["result", "uc_shear"], label: { nl: "Schuif", en: "Shear UC", fr: "Taux cisaillement" } },
    { path: ["result", "w_fin_mm"], label: { nl: "Einddoorbuiging", en: "Final deflection", fr: "Fleche finale" }, unit: "mm" },
    { path: ["result", "f1_hz"], label: { nl: "Eigenfrequentie", en: "Frequency f1", fr: "Frequence f1" }, unit: "Hz" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_timber_floor_vibration: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "w_point_load_mm"], label: { nl: "Puntlastdoorbuiging", en: "Point-load deflection", fr: "Fleche charge ponctuelle" }, unit: "mm" },
    { path: ["result", "deflection_limit_mm"], label: { nl: "Doorbuigingslimiet", en: "Deflection limit", fr: "Limite fleche" }, unit: "mm" },
    { path: ["result", "f1_hz"], label: { nl: "Eigenfrequentie", en: "Frequency f1", fr: "Frequence f1" }, unit: "Hz" },
    { path: ["result", "frequency_limit_hz"], label: { nl: "Frequentielimiet", en: "Frequency limit", fr: "Limite frequence" }, unit: "Hz" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_timber_beam_fire_check: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "b_fi_mm"], label: { nl: "Restbreedte", en: "Residual width", fr: "Largeur residuelle" }, unit: "mm" },
    { path: ["result", "h_fi_mm"], label: { nl: "Resthoogte", en: "Residual height", fr: "Hauteur residuelle" }, unit: "mm" },
    { path: ["result", "uc_bending_fire"], label: { nl: "Brand buiging", en: "Fire bending UC", fr: "Taux flexion feu" } },
    { path: ["result", "uc_shear_fire"], label: { nl: "Brand schuif", en: "Fire shear UC", fr: "Taux cisaillement feu" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_timber_member_uls_6_component: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "max_utilization"], label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
    { path: ["result", "critical_check"], label: { nl: "Maatgevend", en: "Critical check", fr: "Verification critique" } },
    { path: ["result", "k_crit"], label: { nl: "kcrit", en: "kcrit", fr: "kcrit" } },
    { path: ["result", "kc_z"], label: { nl: "kc,z", en: "kc,z", fr: "kc,z" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_joist_spacing_optimizer: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "recommended_spacing_cm"], label: { nl: "Aanbevolen h.o.h.", en: "Recommended spacing", fr: "Entraxe conseille" }, unit: "cm" },
    { path: ["result", "adequate_spacing_count"], label: { nl: "Aantal OK", en: "Passing spacings", fr: "Entraxes OK" } },
    { path: ["result", "source_first_adequate_spacing_m"], label: { nl: "Eerste OK bron", en: "Source first OK", fr: "Premier OK source" }, unit: "m" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_osb_composite_vibration: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "composite_deflection_mm"], label: { nl: "Composite doorbuiging", en: "Composite deflection", fr: "Fleche composite" }, unit: "mm" },
    { path: ["result", "base_deflection_mm"], label: { nl: "Zonder OSB", en: "Without OSB", fr: "Sans OSB" }, unit: "mm" },
    { path: ["result", "reduction_percent"], label: { nl: "Reductie", en: "Reduction", fr: "Reduction" }, unit: "%" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_steel_timber_screw_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_steel_timber_double_shear_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "f_v_rk_per_shear_plane_kn"], label: { nl: "Fv,Rk vlak", en: "Fv,Rk plane", fr: "Fv,Rk plan" }, unit: "kN" },
    { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_steel_timber_five_member_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "r_k_per_fastener_kn"], label: { nl: "Rk per bout", en: "Rk per bolt", fr: "Rk par boulon" }, unit: "kN" },
    { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_timber_timber_single_shear_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "n_effective"], label: { nl: "n effectief", en: "Effective n", fr: "n effectif" } },
    { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_timber_timber_double_shear_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "f_v_rk_per_shear_plane_kn"], label: { nl: "Fv,Rk vlak", en: "Fv,Rk plane", fr: "Fv,Rk plan" }, unit: "kN" },
    { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec5_toothed_plate_connection: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "r_d_kn"], label: { nl: "Rd totaal", en: "Total Rd", fr: "Rd total" }, unit: "kN" },
    { path: ["result", "r_d_plate_kn"], label: { nl: "Rd tandplaat", en: "Plate Rd", fr: "Rd plaque" }, unit: "kN" },
    { path: ["result", "r_d_bolt_kn"], label: { nl: "Rd bout", en: "Bolt Rd", fr: "Rd boulon" }, unit: "kN" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "governing_bolt_mode"], label: { nl: "Boutmodus", en: "Bolt mode", fr: "Mode boulon" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec6_masonry_strength: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "fk_mpa"], label: { nl: "fk", en: "fk", fr: "fk" }, unit: "MPa" },
    { path: ["result", "fd_mpa"], label: { nl: "fd", en: "fd", fr: "fd" }, unit: "MPa" },
    { path: ["result", "check_passed"], label: { nl: "Controle", en: "Check", fr: "Controle" }, format: "check" },
  ],
  ec6_beam_bearing: [
    { path: ["status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "contact_pressure_mpa"], label: { nl: "Contactspanning", en: "Contact pressure", fr: "Contrainte contact" }, unit: "MPa" },
    { path: ["result", "design_bearing_resistance_mpa"], label: { nl: "Ontwerpweerstand", en: "Design resistance", fr: "Resistance de calcul" }, unit: "MPa" },
    { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec6_masonry_contact_pressure: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "sigma_d_mpa"], label: { nl: "Contactdruk", en: "Contact pressure", fr: "Pression de contact" }, unit: "MPa" },
    { path: ["result", "f_rdc_mpa"], label: { nl: "Weerstand", en: "Resistance", fr: "Resistance" }, unit: "MPa" },
    { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
    { path: ["result", "required_length_mm"], label: { nl: "Vereiste lengte", en: "Required length", fr: "Longueur requise" }, unit: "mm" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec6_inplane_shear_wall: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "bending_utilization_ratio"], label: { nl: "Buiging", en: "Bending utilization", fr: "Utilisation flexion" } },
    { path: ["result", "shear_utilization_ratio"], label: { nl: "Schuif", en: "Shear utilization", fr: "Utilisation cisaillement" } },
    { path: ["result", "v_rd_kn"], label: { nl: "VRd", en: "VRd", fr: "VRd" }, unit: "kN" },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec6_masonry_horizontal_capacity: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "combined_capacity_kn"], label: { nl: "Totale capaciteit", en: "Combined capacity", fr: "Capacite combinee" }, unit: "kN" },
    { path: ["result", "governing_per_wall_kn"], label: { nl: "Maatgevend per wand", en: "Governing per wall", fr: "Determinant par mur" }, unit: "kN" },
    { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
  ec6_lateral_wall_resistance: [
    { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
    { path: ["result", "axis_1_utilization_ratio"], label: { nl: "As 1", en: "Axis 1 utilization", fr: "Utilisation axe 1" } },
    { path: ["result", "axis_2_utilization_ratio"], label: { nl: "As 2", en: "Axis 2 utilization", fr: "Utilisation axe 2" } },
    { path: ["result", "bending_model"], label: { nl: "Model", en: "Model", fr: "Modele" } },
    { path: ["result", "warning_codes"], label: { nl: "Waarschuwingen", en: "Warnings", fr: "Avertissements" }, format: "warnings" },
  ],
};

const REPORT_SECTION_FIELDS = {
  beam_continuous_strip: [
    {
      heading: { nl: "Model en belasting", en: "Model and load", fr: "Modele et charge" },
      fields: [
        { path: ["result", "span_lengths_m", 0], label: { nl: "Overspanning 1", en: "Span 1", fr: "Portee 1" }, unit: "m" },
        { path: ["result", "span_lengths_m", 1], label: { nl: "Overspanning 2", en: "Span 2", fr: "Portee 2" }, unit: "m" },
        { path: ["result", "span_lengths_m", 2], label: { nl: "Overspanning 3", en: "Span 3", fr: "Portee 3" }, unit: "m" },
        { path: ["result", "total_length_m"], label: { nl: "Totale lengte", en: "Total length", fr: "Longueur totale" }, unit: "m" },
        { path: ["result", "uniform_load_kn_per_m"], label: { nl: "Uniforme lijnlast", en: "Uniform line load", fr: "Charge lineaire uniforme" }, unit: "kN/m" },
      ],
    },
    {
      heading: { nl: "Reacties", en: "Reactions", fr: "Reactions" },
      fields: [
        { path: ["result", "response", "reactions", 0, "ry_kn"], label: { nl: "Links", en: "Left", fr: "Gauche" }, unit: "kN" },
        { path: ["result", "response", "reactions", 1, "ry_kn"], label: { nl: "Binnen links", en: "Inner left", fr: "Interieur gauche" }, unit: "kN" },
        { path: ["result", "response", "reactions", 2, "ry_kn"], label: { nl: "Binnen rechts", en: "Inner right", fr: "Interieur droite" }, unit: "kN" },
        { path: ["result", "response", "reactions", 3, "ry_kn"], label: { nl: "Rechts", en: "Right", fr: "Droite" }, unit: "kN" },
      ],
    },
    {
      heading: { nl: "Maatgevende respons", en: "Governing response", fr: "Reponse determinante" },
      fields: [
        { path: ["result", "response", "max_shear_kn", "signed_value"], label: { nl: "Vmax", en: "Vmax", fr: "Vmax" }, unit: "kN" },
        { path: ["result", "response", "max_moment_knm", "signed_value"], label: { nl: "Mmax", en: "Mmax", fr: "Mmax" }, unit: "kNm" },
        { path: ["result", "response", "max_deflection_mm", "signed_value"], label: { nl: "wmax", en: "wmax", fr: "wmax" }, unit: "mm" },
      ],
    },
  ],
  beam_spring_calibration: [
    {
      heading: { nl: "Model en belasting", en: "Model and load", fr: "Modele et charge" },
      fields: [
        { path: ["result", "span_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "spring_position_m"], label: { nl: "Veerpositie", en: "Spring position", fr: "Position ressort" }, unit: "m" },
        { path: ["result", "uniform_load_kn_per_m"], label: { nl: "Uniforme lijnlast", en: "Uniform line load", fr: "Charge lineaire uniforme" }, unit: "kN/m" },
        { path: ["result", "target_moment_knm"], label: { nl: "Doelmoment", en: "Target moment", fr: "Moment cible" }, unit: "kNm" },
        { path: ["result", "tolerance_knm"], label: { nl: "Tolerantie", en: "Tolerance", fr: "Tolerance" }, unit: "kNm" },
      ],
    },
    {
      heading: { nl: "Calibratie", en: "Calibration", fr: "Calibration" },
      fields: [
        { path: ["result", "calibration", "calibrated_stiffness_n_per_m"], label: { nl: "Veerstijfheid", en: "Spring stiffness", fr: "Raideur ressort" }, unit: "N/m" },
        { path: ["result", "calibration", "measured_value"], label: { nl: "Gemeten moment", en: "Measured moment", fr: "Moment mesure" }, unit: "kNm" },
        { path: ["result", "response", "reactions", 1, "ry_kn"], label: { nl: "Veerreactie", en: "Spring reaction", fr: "Reaction ressort" }, unit: "kN" },
        { path: ["result", "calibration", "iterations", 0, "spring_stiffness_n_per_m"], label: { nl: "Eerste iteratie k", en: "First-iteration k", fr: "Premiere iteration k" }, unit: "N/m" },
        { path: ["result", "calibration", "iterations", 0, "error"], label: { nl: "Eerste fout", en: "First error", fr: "Premiere erreur" }, unit: "kNm" },
      ],
    },
    {
      heading: { nl: "Maatgevende respons", en: "Governing response", fr: "Reponse determinante" },
      fields: [
        { path: ["result", "response", "max_shear_kn", "signed_value"], label: { nl: "Vmax", en: "Vmax", fr: "Vmax" }, unit: "kN" },
        { path: ["result", "response", "max_moment_knm", "signed_value"], label: { nl: "Mmax", en: "Mmax", fr: "Mmax" }, unit: "kNm" },
        { path: ["result", "response", "max_deflection_mm", "signed_value"], label: { nl: "wmax", en: "wmax", fr: "wmax" }, unit: "mm" },
      ],
    },
  ],
  beam_support_fixity_bracketing: [
    {
      heading: { nl: "Model en belastingen", en: "Model and loads", fr: "Modele et charges" },
      fields: [
        { path: ["result", "length_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "e_modulus_gpa"], label: { nl: "E-modulus", en: "E modulus", fr: "Module E" }, unit: "GPa" },
        { path: ["result", "inertia_m4"], label: { nl: "Traagheidsmoment I", en: "Inertia I", fr: "Inertie I" }, unit: "m4" },
        { path: ["result", "distributed_load_count"], label: { nl: "Aantal verdeelde lasten", en: "Distributed loads", fr: "Charges reparties" } },
        { path: ["result", "point_load_count"], label: { nl: "Aantal puntlasten", en: "Point loads", fr: "Charges ponctuelles" } },
      ],
    },
    {
      heading: { nl: "Vaste linker steun", en: "Fixed-left case", fr: "Cas gauche fixe" },
      fields: [
        { path: ["result", "fixed_case", "reactions", 0, "ry_kn"], label: { nl: "Reactie links", en: "Left reaction", fr: "Reaction gauche" }, unit: "kN" },
        { path: ["result", "fixed_case", "reactions", 1, "ry_kn"], label: { nl: "Reactie rechts", en: "Right reaction", fr: "Reaction droite" }, unit: "kN" },
        { path: ["result", "fixed_case", "max_shear_kn", "absolute_value"], label: { nl: "Max |V|", en: "Max |V|", fr: "Max |V|" }, unit: "kN" },
        { path: ["result", "fixed_case", "max_moment_knm", "signed_value"], label: { nl: "Mmax", en: "Mmax", fr: "Mmax" }, unit: "kNm" },
        { path: ["result", "fixed_case", "max_deflection_mm", "absolute_value"], label: { nl: "Max doorbuiging", en: "Max deflection", fr: "Fleche max" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Scharnierende linker steun", en: "Pinned-left case", fr: "Cas gauche articule" },
      fields: [
        { path: ["result", "pinned_case", "reactions", 0, "ry_kn"], label: { nl: "Reactie links", en: "Left reaction", fr: "Reaction gauche" }, unit: "kN" },
        { path: ["result", "pinned_case", "reactions", 1, "ry_kn"], label: { nl: "Reactie rechts", en: "Right reaction", fr: "Reaction droite" }, unit: "kN" },
        { path: ["result", "pinned_case", "max_shear_kn", "absolute_value"], label: { nl: "Max |V|", en: "Max |V|", fr: "Max |V|" }, unit: "kN" },
        { path: ["result", "pinned_case", "max_moment_knm", "signed_value"], label: { nl: "Mmax", en: "Mmax", fr: "Mmax" }, unit: "kNm" },
        { path: ["result", "pinned_case", "max_deflection_mm", "absolute_value"], label: { nl: "Max doorbuiging", en: "Max deflection", fr: "Fleche max" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Gemiddelde bracketrespons", en: "Average bracket response", fr: "Reponse moyenne bracket" },
      fields: [
        { path: ["result", "average_response", "max_abs_shear_kn"], label: { nl: "Max |V|", en: "Max |V|", fr: "Max |V|" }, unit: "kN" },
        { path: ["result", "average_response", "max_abs_moment_knm"], label: { nl: "Max |M|", en: "Max |M|", fr: "Max |M|" }, unit: "kNm" },
        { path: ["result", "average_response", "max_abs_deflection_mm"], label: { nl: "Max doorbuiging", en: "Max deflection", fr: "Fleche max" }, unit: "mm" },
      ],
    },
  ],
  ec3_bolt_group_torsion: [
    {
      heading: { nl: "Boutgroep", en: "Bolt group", fr: "Groupe de boulons" },
      fields: [
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "bolt_class"], label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe de boulon" } },
        { path: ["result", "bolt_count"], label: { nl: "Aantal bouten", en: "Bolt count", fr: "Nombre de boulons" } },
        { path: ["result", "hole_diameter_mm"], label: { nl: "Gatdiameter", en: "Hole diameter", fr: "Diametre de trou" }, unit: "mm" },
        { path: ["result", "polar_inertia_mm2"], label: { nl: "Polair traagheidsmoment", en: "Polar inertia", fr: "Inertie polaire" }, unit: "mm2" },
      ],
    },
    {
      heading: { nl: "Weerstand en benutting", en: "Resistance and utilization", fr: "Resistance et utilisation" },
      fields: [
        { path: ["result", "max_bolt_force_kn"], label: { nl: "Max boutkracht", en: "Max bolt force", fr: "Effort boulon max" }, unit: "kN" },
        { path: ["result", "shear_resistance_per_bolt_kn"], label: { nl: "Afschuifweerstand/bout", en: "Shear resistance/bolt", fr: "Resistance cisaillement/boulon" }, unit: "kN" },
        { path: ["result", "min_bearing_resistance_kn"], label: { nl: "Min oplegweerstand", en: "Min bearing resistance", fr: "Resistance appui min" }, unit: "kN" },
        { path: ["result", "global_utilization"], label: { nl: "Globale benutting", en: "Global utilization", fr: "Utilisation globale" } },
        { path: ["result", "critical_bolt_id"], label: { nl: "Kritische bout", en: "Critical bolt", fr: "Boulon critique" } },
      ],
    },
  ],
  ec3_splice_moment_connection: [
    {
      heading: { nl: "Verbinding", en: "Connection", fr: "Connexion" },
      fields: [
        { path: ["result", "beam_profile"], label: { nl: "Liggerprofiel", en: "Beam profile", fr: "Profil poutre" } },
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "bolt_class"], label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe de boulon" } },
        { path: ["result", "bolt_row_count"], label: { nl: "Boutrijen", en: "Bolt rows", fr: "Rangees de boulons" } },
        { path: ["result", "tension_row_count"], label: { nl: "Trekrijen", en: "Tension rows", fr: "Rangees en traction" } },
        { path: ["result", "geometry_status"], label: { nl: "Geometriestatus", en: "Geometry status", fr: "Statut geometrie" }, format: "status" },
      ],
    },
    {
      heading: { nl: "Stijfheid en weerstand", en: "Stiffness and resistance", fr: "Rigidite et resistance" },
      fields: [
        { path: ["result", "mj_rd_knm"], label: { nl: "Mj,Rd", en: "Mj,Rd", fr: "Mj,Rd" }, unit: "kNm" },
        { path: ["result", "sj_ini_knm_per_rad"], label: { nl: "Sj,ini", en: "Sj,ini", fr: "Sj,ini" }, unit: "kNm/rad" },
        { path: ["result", "compression_reduction_factor"], label: { nl: "Reductiefactor druk", en: "Compression reduction factor", fr: "Facteur reduction compression" } },
        { path: ["result", "overall_utilization"], label: { nl: "Globale benutting", en: "Overall utilization", fr: "Utilisation globale" } },
        { path: ["result", "compression_flange_governs"], label: { nl: "Drukflens maatgevend", en: "Compression flange governs", fr: "Semelle comprimee critique" }, format: "check" },
      ],
    },
  ],
  ec3_double_sided_web_connection: [
    {
      heading: { nl: "Profielen en bouten", en: "Profiles and bolts", fr: "Profils et boulons" },
      fields: [
        { path: ["result", "project_name"], label: { nl: "Project", en: "Project", fr: "Projet" } },
        { path: ["result", "primary_profile"], label: { nl: "Primair profiel", en: "Primary profile", fr: "Profil principal" } },
        { path: ["result", "secondary_profile"], label: { nl: "Secundair profiel", en: "Secondary profile", fr: "Profil secondaire" } },
        { path: ["result", "bolt_count"], label: { nl: "Aantal bouten", en: "Bolt count", fr: "Nombre de boulons" } },
        { path: ["result", "bolt_diameter_mm"], label: { nl: "Boutdiameter", en: "Bolt diameter", fr: "Diametre de boulon" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Componentweerstanden", en: "Component resistances", fr: "Resistances des composants" },
      fields: [
        { path: ["result", "bolt_shear_capacity_kn"], label: { nl: "Boutafschuifcapaciteit", en: "Bolt shear capacity", fr: "Capacite cisaillement boulons" }, unit: "kN" },
        { path: ["result", "plate_bearing_capacity_kn"], label: { nl: "Plaatoplegcapaciteit", en: "Plate bearing capacity", fr: "Capacite appui platine" }, unit: "kN" },
        { path: ["result", "primary_web_bearing_capacity_kn"], label: { nl: "Opleg primair lijf", en: "Primary web bearing", fr: "Appui ame principale" }, unit: "kN" },
        { path: ["result", "moment_resistance_knm"], label: { nl: "Momentweerstand", en: "Moment resistance", fr: "Resistance moment" }, unit: "kNm" },
        { path: ["result", "compression_limit_kn"], label: { nl: "Druklimiet", en: "Compression limit", fr: "Limite compression" }, unit: "kN" },
      ],
    },
    {
      heading: { nl: "Maatgevend resultaat", en: "Governing result", fr: "Resultat determinant" },
      fields: [
        { path: ["result", "compression_reduction_factor"], label: { nl: "Reductiefactor druk", en: "Compression reduction factor", fr: "Facteur reduction compression" } },
        { path: ["result", "critical_component"], label: { nl: "Kritisch component", en: "Critical component", fr: "Composant critique" } },
        { path: ["result", "max_utilization"], label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
      ],
    },
  ],
  ec3_bolted_lap_joint: [
    {
      heading: { nl: "Verbindingsgegevens", en: "Connection data", fr: "Donnees de connexion" },
      fields: [
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "bolt_class"], label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe de boulon" } },
        { path: ["result", "category"], label: { nl: "Categorie", en: "Category", fr: "Categorie" } },
        { path: ["result", "bolt_count"], label: { nl: "Aantal bouten", en: "Bolt count", fr: "Nombre de boulons" } },
        { path: ["result", "hole_diameter_mm"], label: { nl: "Gatdiameter", en: "Hole diameter", fr: "Diametre de trou" }, unit: "mm" },
        { path: ["result", "geometry_warning_count"], label: { nl: "Geometriewaarschuwingen", en: "Geometry warnings", fr: "Avertissements geometrie" } },
      ],
    },
    {
      heading: { nl: "Weerstand en belasting", en: "Resistance and loading", fr: "Resistance et chargement" },
      fields: [
        { path: ["result", "applied_force_uls_kn"], label: { nl: "ULS kracht", en: "ULS force", fr: "Effort ELU" }, unit: "kN" },
        { path: ["result", "applied_force_sls_kn"], label: { nl: "SLS kracht", en: "SLS force", fr: "Effort ELS" }, unit: "kN" },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
        { path: ["result", "governing_resistance_kn"], label: { nl: "Maatgevende weerstand", en: "Governing resistance", fr: "Resistance determinante" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting ULS", en: "ULS utilization", fr: "Utilisation ELU" } },
        { path: ["result", "utilization_sls"], label: { nl: "Benutting SLS", en: "SLS utilization", fr: "Utilisation ELS" } },
      ],
    },
  ],
  ec3_bolted_moment_connection: [
    {
      heading: { nl: "Leden en bouten", en: "Members and bolts", fr: "Elements et boulons" },
      fields: [
        { path: ["result", "connection_type"], label: { nl: "Verbindingstype", en: "Connection type", fr: "Type de connexion" } },
        { path: ["result", "column_profile"], label: { nl: "Kolomprofiel", en: "Column profile", fr: "Profil colonne" } },
        { path: ["result", "beam_profile"], label: { nl: "Liggerprofiel", en: "Beam profile", fr: "Profil poutre" } },
        { path: ["result", "bolt_class"], label: { nl: "Boutklasse", en: "Bolt class", fr: "Classe de boulon" } },
        { path: ["result", "bolt_row_count"], label: { nl: "Boutrijen", en: "Bolt rows", fr: "Rangees de boulons" } },
        { path: ["result", "center_of_compression_mm"], label: { nl: "Drukcentrum", en: "Center of compression", fr: "Centre de compression" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Belasting en weerstand", en: "Loading and resistance", fr: "Chargement et resistance" },
      fields: [
        { path: ["result", "applied_moment_knm"], label: { nl: "Aangebracht moment", en: "Applied moment", fr: "Moment applique" }, unit: "kNm" },
        { path: ["result", "applied_shear_kn"], label: { nl: "Aangebrachte dwarskracht", en: "Applied shear", fr: "Effort tranchant applique" }, unit: "kN" },
        { path: ["result", "sj_ini_knm_per_rad"], label: { nl: "Sj,ini", en: "Sj,ini", fr: "Sj,ini" }, unit: "kNm/rad" },
        { path: ["result", "mj_rd_knm"], label: { nl: "Mj,Rd", en: "Mj,Rd", fr: "Mj,Rd" }, unit: "kNm" },
        { path: ["result", "overall_utilization"], label: { nl: "Globale benutting", en: "Overall utilization", fr: "Utilisation globale" } },
        { path: ["result", "critical_component"], label: { nl: "Kritisch component", en: "Critical component", fr: "Composant critique" } },
      ],
    },
  ],
  ec3_fillet_weld: [
    {
      heading: { nl: "Las en materiaal", en: "Weld and material", fr: "Soudure et materiau" },
      fields: [
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "verification_method"], label: { nl: "Methode", en: "Method", fr: "Methode" } },
        { path: ["result", "fu_mpa"], label: { nl: "fu", en: "fu", fr: "fu" }, unit: "MPa" },
        { path: ["result", "beta_w"], label: { nl: "beta w", en: "beta w", fr: "beta w" } },
        { path: ["result", "gamma_m2"], label: { nl: "gamma M2", en: "gamma M2", fr: "gamma M2" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "geometry_check", "geometry_check_passed"], label: { nl: "Geometrie OK", en: "Geometry OK", fr: "Geometrie OK" }, format: "check" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "utilization_percent"], label: { nl: "Benutting procent", en: "Utilization percent", fr: "Utilisation pourcent" }, unit: "%" },
      ],
    },
  ],
  ec3_plate_tension: [
    {
      heading: { nl: "Plaat en materiaal", en: "Plate and material", fr: "Plaque et materiau" },
      fields: [
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "fy_mpa"], label: { nl: "fy", en: "fy", fr: "fy" }, unit: "MPa" },
        { path: ["result", "fu_mpa"], label: { nl: "fu", en: "fu", fr: "fu" }, unit: "MPa" },
        { path: ["result", "a_gross_mm2"], label: { nl: "Bruto-oppervlakte", en: "Gross area", fr: "Section brute" }, unit: "mm2" },
        { path: ["result", "n_pl_rd_kn"], label: { nl: "Npl,Rd", en: "Npl,Rd", fr: "Npl,Rd" }, unit: "kN" },
      ],
    },
    {
      heading: { nl: "Maatgevend resultaat", en: "Governing result", fr: "Resultat determinant" },
      fields: [
        { path: ["result", "n_rd_kn"], label: { nl: "NRd", en: "NRd", fr: "NRd" }, unit: "kN" },
        { path: ["result", "governing_criterion"], label: { nl: "Maatgevend criterium", en: "Governing criterion", fr: "Critere determinant" } },
        { path: ["result", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
      ],
    },
  ],
  ec3_steel_section_check: [
    {
      heading: { nl: "Sectie en classificatie", en: "Section and classification", fr: "Section et classification" },
      fields: [
        { path: ["result", "profile_name"], label: { nl: "Profiel", en: "Profile", fr: "Profil" } },
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "section_class"], label: { nl: "Sectieklasse", en: "Section class", fr: "Classe section" } },
        { path: ["result", "flange_class"], label: { nl: "Flensklasse", en: "Flange class", fr: "Classe semelle" } },
        { path: ["result", "web_class"], label: { nl: "Lijfklasse", en: "Web class", fr: "Classe ame" } },
      ],
    },
    {
      heading: { nl: "Weerstanden", en: "Resistances", fr: "Resistances" },
      fields: [
        { path: ["result", "resistances", "n_rd_kn"], label: { nl: "NRd", en: "NRd", fr: "NRd" }, unit: "kN" },
        { path: ["result", "resistances", "m_y_rd_knm"], label: { nl: "My,Rd", en: "My,Rd", fr: "My,Rd" }, unit: "kNm" },
        { path: ["result", "resistances", "m_z_rd_knm"], label: { nl: "Mz,Rd", en: "Mz,Rd", fr: "Mz,Rd" }, unit: "kNm" },
        { path: ["result", "resistances", "v_y_rd_kn"], label: { nl: "Vy,Rd", en: "Vy,Rd", fr: "Vy,Rd" }, unit: "kN" },
        { path: ["result", "resistances", "v_z_rd_kn"], label: { nl: "Vz,Rd", en: "Vz,Rd", fr: "Vz,Rd" }, unit: "kN" },
      ],
    },
    {
      heading: { nl: "Controles", en: "Checks", fr: "Verifications" },
      fields: [
        { path: ["result", "critical_check"], label: { nl: "Maatgevend", en: "Critical check", fr: "Verification critique" } },
        { path: ["result", "max_utilization"], label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
        { path: ["result", "deflection_check", "deflection_mm"], label: { nl: "Doorbuiging", en: "Deflection", fr: "Fleche" }, unit: "mm" },
        { path: ["result", "deflection_check", "limit_mm"], label: { nl: "Doorbuigingslimiet", en: "Deflection limit", fr: "Limite fleche" }, unit: "mm" },
        { path: ["result", "deflection_check", "utilization_ratio"], label: { nl: "Benutting doorbuiging", en: "Deflection utilization", fr: "Utilisation fleche" } },
      ],
    },
  ],
  ec3_lateral_torsional_buckling: [
    {
      heading: { nl: "Sectie en belasting", en: "Section and loading", fr: "Section et chargement" },
      fields: [
        { path: ["result", "profile_name"], label: { nl: "Profiel", en: "Profile", fr: "Profil" } },
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "m_ed_knm"], label: { nl: "MEd", en: "MEd", fr: "MEd" }, unit: "kNm" },
        { path: ["result", "unbraced_length_m"], label: { nl: "Ongebrande lengte", en: "Unbraced length", fr: "Longueur non contreventee" }, unit: "m" },
        { path: ["result", "loading_type"], label: { nl: "Belastingstype", en: "Loading type", fr: "Type de chargement" } },
        { path: ["result", "load_position"], label: { nl: "Belastingspositie", en: "Load position", fr: "Position de charge" } },
      ],
    },
    {
      heading: { nl: "Kiprespons", en: "LTB response", fr: "Reponse deversement" },
      fields: [
        { path: ["result", "mcr_knm"], label: { nl: "Mcr", en: "Mcr", fr: "Mcr" }, unit: "kNm" },
        { path: ["result", "lambda_lt"], label: { nl: "Lambda LT", en: "Lambda LT", fr: "Lambda LT" } },
        { path: ["result", "chi_lt"], label: { nl: "Chi LT", en: "Chi LT", fr: "Chi LT" } },
        { path: ["result", "chi_lt_modified"], label: { nl: "Chi LT aangepast", en: "Modified chi LT", fr: "Chi LT modifie" } },
        { path: ["result", "mb_rd_knm"], label: { nl: "Mb,Rd", en: "Mb,Rd", fr: "Mb,Rd" }, unit: "kNm" },
        { path: ["result", "ltb_required"], label: { nl: "Kipcontrole nodig", en: "LTB required", fr: "Deversement requis" }, format: "check" },
      ],
    },
  ],
  ec3_profile_optimizer: [
    {
      heading: { nl: "Optimalisatie-instelling", en: "Optimization setup", fr: "Parametres optimisation" },
      fields: [
        { path: ["result", "steel_grade"], label: { nl: "Staalkwaliteit", en: "Steel grade", fr: "Nuance acier" } },
        { path: ["result", "profile_count"], label: { nl: "Aantal profielen", en: "Profile count", fr: "Nombre de profils" } },
        { path: ["result", "member_length_m"], label: { nl: "Liggerlengte", en: "Member length", fr: "Longueur element" }, unit: "m" },
        { path: ["result", "max_utilization"], label: { nl: "Max toegelaten benutting", en: "Max allowed utilization", fr: "Utilisation max admise" } },
        { path: ["result", "optimization_criterion"], label: { nl: "Optimalisatiecriterium", en: "Optimization criterion", fr: "Critere optimisation" } },
      ],
    },
    {
      heading: { nl: "Geselecteerd profiel", en: "Selected profile", fr: "Profil retenu" },
      fields: [
        { path: ["result", "optimized_profile", "profile_name"], label: { nl: "Profiel", en: "Profile", fr: "Profil" } },
        { path: ["result", "optimized_profile", "total_weight_kg"], label: { nl: "Totaal gewicht", en: "Total weight", fr: "Poids total" }, unit: "kg" },
        { path: ["result", "optimized_profile", "utilization_percent"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" }, unit: "%" },
        { path: ["result", "optimized_profile", "critical_check"], label: { nl: "Maatgevend", en: "Critical check", fr: "Verification critique" } },
      ],
    },
    {
      heading: { nl: "Zoekresultaat", en: "Search result", fr: "Resultat de recherche" },
      fields: [
        { path: ["result", "total_candidates"], label: { nl: "Totaal kandidaten", en: "Total candidates", fr: "Candidats totaux" } },
        { path: ["result", "suitable_count"], label: { nl: "Geschikte kandidaten", en: "Suitable candidates", fr: "Candidats valables" } },
      ],
    },
  ],
  ec5_timber_beam_check: [
    {
      heading: { nl: "Geometrie en belastingen", en: "Geometry and loads", fr: "Geometrie et charges" },
      fields: [
        { path: ["result", "span_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "spacing_m"], label: { nl: "Hart-op-hart afstand", en: "Spacing", fr: "Entraxe" }, unit: "m" },
        { path: ["result", "b_mm"], label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" }, unit: "mm" },
        { path: ["result", "h_mm"], label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" }, unit: "mm" },
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "q_permanent_kn_m2"], label: { nl: "Permanente last", en: "Permanent load", fr: "Charge permanente" }, unit: "kN/m2" },
        { path: ["result", "q_variable_kn_m2"], label: { nl: "Veranderlijke last", en: "Variable load", fr: "Charge variable" }, unit: "kN/m2" },
        { path: ["result", "self_weight_kn_m"], label: { nl: "Eigengewicht", en: "Self weight", fr: "Poids propre" }, unit: "kN/m" },
        { path: ["result", "q_uls_kn_m"], label: { nl: "q ULS", en: "q ULS", fr: "q ELU" }, unit: "kN/m" },
      ],
    },
    {
      heading: { nl: "Controles", en: "Checks", fr: "Verifications" },
      fields: [
        { path: ["result", "uc_bending"], label: { nl: "Buiging UC", en: "Bending UC", fr: "Taux flexion" } },
        { path: ["result", "uc_shear"], label: { nl: "Schuif UC", en: "Shear UC", fr: "Taux cisaillement" } },
        { path: ["result", "w_inst_mm"], label: { nl: "Initiele doorbuiging", en: "Initial deflection", fr: "Fleche initiale" }, unit: "mm" },
        { path: ["result", "limit_inst_mm"], label: { nl: "Limiet initieel", en: "Initial limit", fr: "Limite initiale" }, unit: "mm" },
        { path: ["result", "w_fin_mm"], label: { nl: "Einddoorbuiging", en: "Final deflection", fr: "Fleche finale" }, unit: "mm" },
        { path: ["result", "limit_fin_mm"], label: { nl: "Limiet finaal", en: "Final limit", fr: "Limite finale" }, unit: "mm" },
        { path: ["result", "w_1kn_mm"], label: { nl: "1 kN doorbuiging", en: "1 kN deflection", fr: "Fleche 1 kN" }, unit: "mm" },
        { path: ["result", "f1_hz"], label: { nl: "Eigenfrequentie", en: "Frequency f1", fr: "Frequence f1" }, unit: "Hz" },
        { path: ["result", "governing_criteria"], label: { nl: "Maatgevend", en: "Governing criteria", fr: "Criteres determinants" }, format: "warnings" },
      ],
    },
  ],
  ec5_timber_floor_vibration: [
    {
      heading: { nl: "Geometrie en massa", en: "Geometry and mass", fr: "Geometrie et masse" },
      fields: [
        { path: ["result", "span_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "spacing_m"], label: { nl: "Hart-op-hart afstand", en: "Spacing", fr: "Entraxe" }, unit: "m" },
        { path: ["result", "b_mm"], label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" }, unit: "mm" },
        { path: ["result", "h_mm"], label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" }, unit: "mm" },
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "q_permanent_kn_m2"], label: { nl: "Permanente last", en: "Permanent load", fr: "Charge permanente" }, unit: "kN/m2" },
        { path: ["result", "mass_beam_kg_m"], label: { nl: "Balkmassa", en: "Beam mass", fr: "Masse poutre" }, unit: "kg/m" },
        { path: ["result", "mass_floor_kg_m"], label: { nl: "Vloermassa", en: "Floor mass", fr: "Masse plancher" }, unit: "kg/m" },
        { path: ["result", "mass_linear_kg_m"], label: { nl: "Lineaire massa", en: "Linear mass", fr: "Masse lineaire" }, unit: "kg/m" },
      ],
    },
    {
      heading: { nl: "Trillingscontrole", en: "Vibration check", fr: "Verification vibration" },
      fields: [
        { path: ["result", "point_load_n"], label: { nl: "Puntlast", en: "Point load", fr: "Charge ponctuelle" }, unit: "N" },
        { path: ["result", "w_point_load_mm"], label: { nl: "Puntlastdoorbuiging", en: "Point-load deflection", fr: "Fleche charge ponctuelle" }, unit: "mm" },
        { path: ["result", "deflection_limit_mm"], label: { nl: "Doorbuigingslimiet", en: "Deflection limit", fr: "Limite fleche" }, unit: "mm" },
        { path: ["result", "f1_hz"], label: { nl: "Eigenfrequentie", en: "Frequency f1", fr: "Frequence f1" }, unit: "Hz" },
        { path: ["result", "frequency_limit_hz"], label: { nl: "Frequentielimiet", en: "Frequency limit", fr: "Limite frequence" }, unit: "Hz" },
      ],
    },
  ],
  ec5_timber_beam_fire_check: [
    {
      heading: { nl: "Geometrie en brandlast", en: "Geometry and fire load", fr: "Geometrie et charge feu" },
      fields: [
        { path: ["result", "span_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "spacing_m"], label: { nl: "Hart-op-hart afstand", en: "Spacing", fr: "Entraxe" }, unit: "m" },
        { path: ["result", "b_mm"], label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" }, unit: "mm" },
        { path: ["result", "h_mm"], label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" }, unit: "mm" },
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "fire_duration_min"], label: { nl: "Brandduur", en: "Fire duration", fr: "Duree feu" }, unit: "min" },
        { path: ["result", "q_fire_kn_m"], label: { nl: "q fire", en: "q fire", fr: "q feu" }, unit: "kN/m" },
      ],
    },
    {
      heading: { nl: "Restsectie en controle", en: "Residual section and check", fr: "Section residuelle et verification" },
      fields: [
        { path: ["result", "b_fi_mm"], label: { nl: "Restbreedte", en: "Residual width", fr: "Largeur residuelle" }, unit: "mm" },
        { path: ["result", "h_fi_mm"], label: { nl: "Resthoogte", en: "Residual height", fr: "Hauteur residuelle" }, unit: "mm" },
        { path: ["result", "uc_bending_fire"], label: { nl: "Brand buiging UC", en: "Fire bending UC", fr: "Taux flexion feu" } },
        { path: ["result", "uc_shear_fire"], label: { nl: "Brand schuif UC", en: "Fire shear UC", fr: "Taux cisaillement feu" } },
        { path: ["result", "residual_section_ok"], label: { nl: "Restsectie OK", en: "Residual section OK", fr: "Section residuelle OK" }, format: "check" },
      ],
    },
  ],
  ec5_timber_member_uls_6_component: [
    {
      heading: { nl: "Geometrie en materiaal", en: "Geometry and material", fr: "Geometrie et materiau" },
      fields: [
        { path: ["result", "b_mm"], label: { nl: "Breedte b", en: "Width b", fr: "Largeur b" }, unit: "mm" },
        { path: ["result", "h_mm"], label: { nl: "Hoogte h", en: "Height h", fr: "Hauteur h" }, unit: "mm" },
        { path: ["result", "l_ef_mm"], label: { nl: "Effectieve lengte", en: "Effective length", fr: "Longueur efficace" }, unit: "mm" },
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "k_mod"], label: { nl: "kmod", en: "kmod", fr: "kmod" } },
        { path: ["result", "f_m_d_mpa"], label: { nl: "fmd", en: "fmd", fr: "fmd" }, unit: "MPa" },
        { path: ["result", "f_c_0_d_mpa"], label: { nl: "fc0d", en: "fc0d", fr: "fc0d" }, unit: "MPa" },
        { path: ["result", "f_v_d_mpa"], label: { nl: "fvd", en: "fvd", fr: "fvd" }, unit: "MPa" },
      ],
    },
    {
      heading: { nl: "Belastingen", en: "Applied forces", fr: "Efforts appliques" },
      fields: [
        { path: ["result", "n_ed_kn"], label: { nl: "NEd", en: "NEd", fr: "NEd" }, unit: "kN" },
        { path: ["result", "vy_ed_kn"], label: { nl: "Vy,Ed", en: "Vy,Ed", fr: "Vy,Ed" }, unit: "kN" },
        { path: ["result", "vz_ed_kn"], label: { nl: "Vz,Ed", en: "Vz,Ed", fr: "Vz,Ed" }, unit: "kN" },
        { path: ["result", "mt_ed_knm"], label: { nl: "Mt,Ed", en: "Mt,Ed", fr: "Mt,Ed" }, unit: "kNm" },
        { path: ["result", "my_ed_knm"], label: { nl: "My,Ed", en: "My,Ed", fr: "My,Ed" }, unit: "kNm" },
        { path: ["result", "mz_ed_knm"], label: { nl: "Mz,Ed", en: "Mz,Ed", fr: "Mz,Ed" }, unit: "kNm" },
        { path: ["result", "lateral_restraint_type"], label: { nl: "Zijdelingse steun", en: "Lateral restraint", fr: "Maintien lateral" } },
        { path: ["result", "load_position"], label: { nl: "Lastpositie", en: "Load position", fr: "Position charge" } },
      ],
    },
    {
      heading: { nl: "Stabiliteit en benutting", en: "Stability and utilization", fr: "Stabilite et utilisation" },
      fields: [
        { path: ["result", "k_crit"], label: { nl: "kcrit", en: "kcrit", fr: "kcrit" } },
        { path: ["result", "kc_y"], label: { nl: "kc,y", en: "kc,y", fr: "kc,y" } },
        { path: ["result", "kc_z"], label: { nl: "kc,z", en: "kc,z", fr: "kc,z" } },
        { path: ["result", "lambda_rel_m"], label: { nl: "lambda rel,m", en: "lambda rel,m", fr: "lambda rel,m" } },
        { path: ["result", "max_utilization"], label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
        { path: ["result", "critical_check"], label: { nl: "Maatgevend", en: "Critical check", fr: "Verification critique" } },
        { path: ["result", "uc_biaxial_bending"], label: { nl: "Biaxiale buiging", en: "Biaxial bending", fr: "Flexion biaxiale" } },
        { path: ["result", "uc_tension_bending"], label: { nl: "Trek plus buiging", en: "Tension bending", fr: "Traction flexion" } },
        { path: ["result", "uc_compression_bending"], label: { nl: "Druk plus buiging", en: "Compression bending", fr: "Compression flexion" } },
        { path: ["result", "uc_shear_torsion"], label: { nl: "Schuif plus torsie", en: "Shear torsion", fr: "Cisaillement torsion" } },
      ],
    },
  ],
  beam_composite_shear_stress: [
    {
      heading: { nl: "Doorsnede en doelpunt", en: "Section and target point", fr: "Section et point cible" },
      fields: [
        { path: ["result", "shear_force_n"], label: { nl: "Dwarskracht", en: "Shear force", fr: "Effort tranchant" }, unit: "N" },
        { path: ["result", "y_target_mm"], label: { nl: "Doelhoogte", en: "Target height", fr: "Hauteur cible" }, unit: "mm" },
        { path: ["result", "actual_width_at_target_mm"], label: { nl: "Breedte op doelpunt", en: "Width at target", fr: "Largeur au point cible" }, unit: "mm" },
        { path: ["result", "reference_e_modulus_mpa"], label: { nl: "Referentie E", en: "Reference E", fr: "E de reference" }, unit: "MPa" },
      ],
    },
    {
      heading: { nl: "Getransformeerde doorsnede", en: "Transformed section", fr: "Section transformee" },
      fields: [
        { path: ["result", "neutral_axis_y_mm"], label: { nl: "Neutrale as", en: "Neutral axis", fr: "Axe neutre" }, unit: "mm" },
        { path: ["result", "transformed_inertia_i_prime_mm4"], label: { nl: "I prime", en: "I prime", fr: "I prime" }, unit: "mm4" },
        { path: ["result", "static_moment_s_prime_mm3"], label: { nl: "S prime", en: "S prime", fr: "S prime" }, unit: "mm3" },
      ],
    },
    {
      heading: { nl: "Schuifspanning", en: "Shear stress", fr: "Contrainte de cisaillement" },
      fields: [
        { path: ["result", "tau_n_per_mm2"], label: { nl: "Tau doelpunt", en: "Tau at target", fr: "Tau au point cible" }, unit: "N/mm2" },
        { path: ["result", "max_abs_tau_n_per_mm2"], label: { nl: "Max tau", en: "Max tau", fr: "Tau max" }, unit: "N/mm2" },
        { path: ["result", "max_abs_tau_y_mm"], label: { nl: "Hoogte max tau", en: "Height of max tau", fr: "Hauteur tau max" }, unit: "mm" },
      ],
    },
  ],
  beam_simple_diagrams: [
    {
      heading: { nl: "Model en combinaties", en: "Model and combinations", fr: "Modele et combinaisons" },
      fields: [
        { path: ["result", "span_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "load_counts", "uniform"], label: { nl: "Aantal verdeelde lasten", en: "Uniform loads", fr: "Charges reparties" } },
        { path: ["result", "load_counts", "point"], label: { nl: "Aantal puntlasten", en: "Point loads", fr: "Charges ponctuelles" } },
        { path: ["result", "load_combinations", "gamma_g"], label: { nl: "Gamma G", en: "Gamma G", fr: "Gamma G" } },
        { path: ["result", "load_combinations", "gamma_q"], label: { nl: "Gamma Q", en: "Gamma Q", fr: "Gamma Q" } },
      ],
    },
    {
      heading: { nl: "ULS respons", en: "ULS response", fr: "Reponse ELU" },
      fields: [
        { path: ["result", "cases", "uls", "m_max_knm"], label: { nl: "Mmax ULS", en: "ULS Mmax", fr: "Mmax ELU" }, unit: "kNm" },
        { path: ["result", "cases", "uls", "v_max_kn"], label: { nl: "Vmax ULS", en: "ULS Vmax", fr: "Vmax ELU" }, unit: "kN" },
        { path: ["result", "cases", "uls", "reactions", "left_kn"], label: { nl: "Reactie links", en: "Left reaction", fr: "Reaction gauche" }, unit: "kN" },
        { path: ["result", "cases", "uls", "reactions", "right_kn"], label: { nl: "Reactie rechts", en: "Right reaction", fr: "Reaction droite" }, unit: "kN" },
      ],
    },
    {
      heading: { nl: "SLS respons", en: "SLS response", fr: "Reponse ELS" },
      fields: [
        { path: ["result", "cases", "sls", "m_max_knm"], label: { nl: "Mmax SLS", en: "SLS Mmax", fr: "Mmax ELS" }, unit: "kNm" },
        { path: ["result", "cases", "sls", "v_max_kn"], label: { nl: "Vmax SLS", en: "SLS Vmax", fr: "Vmax ELS" }, unit: "kN" },
        { path: ["result", "cases", "sls", "reactions", "left_kn"], label: { nl: "Reactie links", en: "Left reaction", fr: "Reaction gauche" }, unit: "kN" },
        { path: ["result", "cases", "sls", "reactions", "right_kn"], label: { nl: "Reactie rechts", en: "Right reaction", fr: "Reaction droite" }, unit: "kN" },
      ],
    },
  ],
  composite_embedded_profile_bearing: [
    {
      heading: { nl: "Geometrie en belasting", en: "Geometry and loading", fr: "Geometrie et chargement" },
      fields: [
        { path: ["result", "eccentricity_m"], label: { nl: "Excentriciteit", en: "Eccentricity", fr: "Excentricite" }, unit: "m" },
        { path: ["result", "max_hanging_force_kn"], label: { nl: "Max ophangkracht", en: "Max hanging force", fr: "Effort suspendu max" }, unit: "kN" },
        { path: ["result", "bar_design_tension_kn"], label: { nl: "Staafkracht", en: "Bar design tension", fr: "Traction barre" }, unit: "kN" },
        { path: ["result", "max_bending_moment_knm"], label: { nl: "Max moment", en: "Max bending moment", fr: "Moment max" }, unit: "kNm" },
      ],
    },
    {
      heading: { nl: "Contactdruk", en: "Contact pressure", fr: "Pression de contact" },
      fields: [
        { path: ["result", "sigma_c_max_kpa"], label: { nl: "Sigma c max", en: "Sigma c max", fr: "Sigma c max" }, unit: "kPa" },
        { path: ["result", "sigma_c_min_kpa"], label: { nl: "Sigma c min", en: "Sigma c min", fr: "Sigma c min" }, unit: "kPa" },
        { path: ["result", "concrete_design_pressure_kpa"], label: { nl: "Toelaatbare druk", en: "Design pressure", fr: "Pression de calcul" }, unit: "kPa" },
        { path: ["result", "pressure_check_passed"], label: { nl: "Drukcontrole", en: "Pressure check", fr: "Verification pression" }, format: "check" },
      ],
    },
    {
      heading: { nl: "Wapening", en: "Reinforcement", fr: "Armatures" },
      fields: [
        { path: ["result", "required_bars"], label: { nl: "Vereiste staven", en: "Required bars", fr: "Barres requises" } },
        { path: ["result", "provided_bars"], label: { nl: "Voorziene staven", en: "Provided bars", fr: "Barres prevues" } },
        { path: ["result", "bar_count_check_passed"], label: { nl: "Staafcontrole", en: "Bar count check", fr: "Verification barres" }, format: "check" },
      ],
    },
  ],
  ec1_roof_loads: [
    {
      heading: { nl: "Dak en site", en: "Roof and site", fr: "Toiture et site" },
      fields: [
        { path: ["result", "roof_angle_degrees"], label: { nl: "Dakhelling", en: "Roof angle", fr: "Pente toiture" } },
        { path: ["result", "roof_surface_area_m2"], label: { nl: "Dakoppervlak", en: "Roof area", fr: "Surface toiture" }, unit: "m2" },
        { path: ["result", "altitude_m"], label: { nl: "Hoogte", en: "Altitude", fr: "Altitude" }, unit: "m" },
        { path: ["result", "obstacle"], label: { nl: "Obstakel", en: "Obstacle", fr: "Obstacle" }, format: "check" },
      ],
    },
    {
      heading: { nl: "Sneeuw en onderhoud", en: "Snow and maintenance", fr: "Neige et entretien" },
      fields: [
        { path: ["result", "snow_shape_coefficient_mu1"], label: { nl: "Mu1", en: "Mu1", fr: "Mu1" } },
        { path: ["result", "ground_snow_load_kn_m2"], label: { nl: "Grondsneeuw", en: "Ground snow load", fr: "Charge neige au sol" }, unit: "kN/m2" },
        { path: ["result", "adjusted_ground_snow_load_kn_m2"], label: { nl: "Aangepaste grondsneeuw", en: "Adjusted ground snow", fr: "Charge neige ajustee" }, unit: "kN/m2" },
        { path: ["result", "snow_load_kn_m2"], label: { nl: "Sneeuwlast", en: "Snow load", fr: "Charge neige" }, unit: "kN/m2" },
        { path: ["result", "maintenance_load_formula_kn_m2"], label: { nl: "Onderhoud formule", en: "Maintenance formula", fr: "Entretien formule" }, unit: "kN/m2" },
        { path: ["result", "maintenance_load_category_h_kn_m2"], label: { nl: "Onderhoud categorie H", en: "Maintenance category H", fr: "Entretien categorie H" }, unit: "kN/m2" },
      ],
    },
    {
      heading: { nl: "Maatgevende last", en: "Governing load", fr: "Charge determinante" },
      fields: [
        { path: ["result", "governing_variable_load_kind"], label: { nl: "Maatgevend type", en: "Governing type", fr: "Type determinant" } },
        { path: ["result", "governing_variable_load_kn_m2"], label: { nl: "Maatgevende last", en: "Governing load", fr: "Charge determinante" }, unit: "kN/m2" },
      ],
    },
  ],
  ec2_rectangular_section_capacity: [
    {
      heading: { nl: "Doorsnede en normaalkracht", en: "Section and axial load", fr: "Section et effort normal" },
      fields: [
        { path: ["result", "section_width_mm"], label: { nl: "Breedte", en: "Width", fr: "Largeur" }, unit: "mm" },
        { path: ["result", "section_height_mm"], label: { nl: "Hoogte", en: "Height", fr: "Hauteur" }, unit: "mm" },
        { path: ["result", "concrete_cover_bottom_mm"], label: { nl: "Dek onder", en: "Bottom cover", fr: "Enrobage bas" }, unit: "mm" },
        { path: ["result", "concrete_cover_top_mm"], label: { nl: "Dek boven", en: "Top cover", fr: "Enrobage haut" }, unit: "mm" },
        { path: ["result", "axial_force_uls_kn"], label: { nl: "N ULS", en: "ULS axial force", fr: "Effort normal ELU" }, unit: "kN" },
        { path: ["result", "applied_moment_knm"], label: { nl: "Aangebracht moment", en: "Applied moment", fr: "Moment applique" }, unit: "kNm" },
      ],
    },
    {
      heading: { nl: "Capaciteiten", en: "Capacities", fr: "Capacites" },
      fields: [
        { path: ["result", "uls_capacity_knm"], label: { nl: "ULS capaciteit", en: "ULS capacity", fr: "Capacite ELU" }, unit: "kNm" },
        { path: ["result", "sls_characteristic_capacity_knm"], label: { nl: "SLS karakteristiek", en: "SLS characteristic", fr: "ELS caracteristique" }, unit: "kNm" },
        { path: ["result", "sls_frequent_capacity_knm"], label: { nl: "SLS frequent", en: "SLS frequent", fr: "ELS frequent" }, unit: "kNm" },
        { path: ["result", "governing_capacity_case"], label: { nl: "Maatgevende toestand", en: "Governing case", fr: "Cas determinant" } },
        { path: ["result", "governing_capacity_knm"], label: { nl: "Maatgevende capaciteit", en: "Governing capacity", fr: "Capacite determinante" }, unit: "kNm" },
      ],
    },
    {
      heading: { nl: "Benutting", en: "Utilization", fr: "Utilisation" },
      fields: [
        { path: ["result", "ultimate_utilization"], label: { nl: "Benutting ULS", en: "ULS utilization", fr: "Utilisation ELU" } },
        { path: ["result", "sls_characteristic_utilization"], label: { nl: "Benutting SLS karakteristiek", en: "SLS characteristic utilization", fr: "Utilisation ELS caracteristique" } },
        { path: ["result", "sls_frequent_utilization"], label: { nl: "Benutting SLS frequent", en: "SLS frequent utilization", fr: "Utilisation ELS frequent" } },
        { path: ["result", "max_utilization"], label: { nl: "Max benutting", en: "Max utilization", fr: "Utilisation max" } },
      ],
    },
  ],
  ec5_timber_contact_moment_joint: [
    {
      heading: { nl: "Belastingen", en: "Applied loads", fr: "Charges appliquees" },
      fields: [
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "n_ed_kN"], label: { nl: "NEd", en: "NEd", fr: "NEd" }, unit: "kN" },
        { path: ["result", "m_ed_kNm"], label: { nl: "MEd", en: "MEd", fr: "MEd" }, unit: "kNm" },
      ],
    },
    {
      heading: { nl: "Capaciteit", en: "Capacity", fr: "Capacite" },
      fields: [
        { path: ["result", "m_rd_kNm"], label: { nl: "MRd", en: "MRd", fr: "MRd" }, unit: "kNm" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "governing_compression_strength_mpa"], label: { nl: "Maatgevende druksterkte", en: "Governing compression strength", fr: "Resistance compression determinante" }, unit: "MPa" },
        { path: ["result", "governing_compression_member"], label: { nl: "Maatgevend lid", en: "Governing member", fr: "Element determinant" } },
      ],
    },
    {
      heading: { nl: "Capaciteitstoestand", en: "Capacity state", fr: "Etat de capacite" },
      fields: [
        { path: ["result", "capacity_state", "neutral_axis_mm"], label: { nl: "Neutrale as", en: "Neutral axis", fr: "Axe neutre" }, unit: "mm" },
        { path: ["result", "capacity_state", "compression_depth_mm"], label: { nl: "Drukdiepte", en: "Compression depth", fr: "Profondeur compression" }, unit: "mm" },
        { path: ["result", "capacity_state", "compression_resultant_n"], label: { nl: "Drukresultante", en: "Compression resultant", fr: "Resultante compression" }, unit: "N" },
      ],
    },
  ],
  ec5_axial_screw: [
    {
      heading: { nl: "Aantrek- en terugtrekmodel", en: "Withdrawal model", fr: "Modele arrachement" },
      fields: [
        { path: ["result", "n_effective"], label: { nl: "n effectief", en: "Effective n", fr: "n effectif" } },
        { path: ["result", "f_ax_k"], label: { nl: "Fax,k", en: "Fax,k", fr: "Fax,k" } },
        { path: ["result", "k_mod"], label: { nl: "kmod", en: "kmod", fr: "kmod" } },
        { path: ["result", "gamma_m"], label: { nl: "gamma M", en: "Gamma M", fr: "Gamma M" } },
      ],
    },
    {
      heading: { nl: "Capaciteit", en: "Capacity", fr: "Capacite" },
      fields: [
        { path: ["result", "design_capacity_n"], label: { nl: "Ontwerpcapaciteit", en: "Design capacity", fr: "Capacite de calcul" }, unit: "N" },
        { path: ["result", "governing_failure_mode"], label: { nl: "Maatgevend bezwijkmechanisme", en: "Governing failure mode", fr: "Mode de rupture determinant" } },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "check_passed"], label: { nl: "Controle", en: "Check", fr: "Controle" }, format: "check" },
      ],
    },
  ],
  ec5_stabilizing_force: [
    {
      heading: { nl: "Lid en materiaal", en: "Member and material", fr: "Element et materiau" },
      fields: [
        { path: ["result", "b_mm"], label: { nl: "Breedte", en: "Width", fr: "Largeur" }, unit: "mm" },
        { path: ["result", "h_mm"], label: { nl: "Hoogte", en: "Height", fr: "Hauteur" }, unit: "mm" },
        { path: ["result", "l_unbraced_mm"], label: { nl: "Onversteunde lengte", en: "Unbraced length", fr: "Longueur non contreventee" }, unit: "mm" },
        { path: ["result", "l_ef_mm"], label: { nl: "Effectieve lengte", en: "Effective length", fr: "Longueur efficace" }, unit: "mm" },
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "timber_type"], label: { nl: "Houttype", en: "Timber type", fr: "Type de bois" } },
      ],
    },
    {
      heading: { nl: "Stabiliteit", en: "Stability", fr: "Stabilite" },
      fields: [
        { path: ["result", "sigma_m_crit_mpa"], label: { nl: "Sigma m crit", en: "Sigma m crit", fr: "Sigma m crit" }, unit: "MPa" },
        { path: ["result", "lambda_rel_m"], label: { nl: "Lambda rel,m", en: "Lambda rel,m", fr: "Lambda rel,m" } },
        { path: ["result", "k_crit"], label: { nl: "kcrit", en: "kcrit", fr: "kcrit" } },
        { path: ["result", "stabilizing_force_required"], label: { nl: "Stabiliserende kracht nodig", en: "Stabilizing force required", fr: "Effort stabilisant requis" }, format: "check" },
      ],
    },
    {
      heading: { nl: "Resultaat", en: "Result", fr: "Resultat" },
      fields: [
        { path: ["result", "m_d_knm"], label: { nl: "Md", en: "Md", fr: "Md" }, unit: "kNm" },
        { path: ["result", "nd_total_kn"], label: { nl: "Nd totaal", en: "Total Nd", fr: "Nd total" }, unit: "kN" },
        { path: ["result", "f_d_kn"], label: { nl: "Fd", en: "Fd", fr: "Fd" }, unit: "kN" },
      ],
    },
  ],
  ec5_joist_spacing_optimizer: [
    {
      heading: { nl: "Zoekbereik", en: "Search range", fr: "Plage de recherche" },
      fields: [
        { path: ["result", "span_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "b_mm"], label: { nl: "Breedte", en: "Width", fr: "Largeur" }, unit: "mm" },
        { path: ["result", "h_mm"], label: { nl: "Hoogte", en: "Height", fr: "Hauteur" }, unit: "mm" },
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "min_spacing_m"], label: { nl: "Min afstand", en: "Min spacing", fr: "Entraxe min" }, unit: "m" },
        { path: ["result", "max_spacing_m"], label: { nl: "Max afstand", en: "Max spacing", fr: "Entraxe max" }, unit: "m" },
        { path: ["result", "spacing_step_m"], label: { nl: "Stap", en: "Step", fr: "Pas" }, unit: "m" },
      ],
    },
    {
      heading: { nl: "Zoekresultaat", en: "Search result", fr: "Resultat de recherche" },
      fields: [
        { path: ["result", "spacing_count"], label: { nl: "Aantal gecontroleerd", en: "Checked spacings", fr: "Entraxes verifiés" } },
        { path: ["result", "adequate_spacing_count"], label: { nl: "Aantal voldoende", en: "Passing spacings", fr: "Entraxes valides" } },
        { path: ["result", "source_first_adequate_spacing_m"], label: { nl: "Eerste voldoende bron", en: "Source first passing", fr: "Premier valide source" }, unit: "m" },
        { path: ["result", "recommended_spacing_m"], label: { nl: "Aanbevolen afstand", en: "Recommended spacing", fr: "Entraxe recommande" }, unit: "m" },
        { path: ["result", "recommended_spacing_cm"], label: { nl: "Aanbevolen afstand", en: "Recommended spacing", fr: "Entraxe recommande" }, unit: "cm" },
      ],
    },
    {
      heading: { nl: "Grensgevallen", en: "Boundary cases", fr: "Cas limites" },
      fields: [
        { path: ["result", "first_spacing_result", "spacing_cm"], label: { nl: "Eerste afstand", en: "First spacing", fr: "Premier entraxe" }, unit: "cm" },
        { path: ["result", "first_spacing_result", "overall_status"], label: { nl: "Eerste status", en: "First status", fr: "Premier statut" }, format: "status" },
        { path: ["result", "last_spacing_result", "spacing_cm"], label: { nl: "Laatste afstand", en: "Last spacing", fr: "Dernier entraxe" }, unit: "cm" },
        { path: ["result", "last_spacing_result", "overall_status"], label: { nl: "Laatste status", en: "Last status", fr: "Dernier statut" }, format: "status" },
      ],
    },
  ],
  ec5_osb_composite_vibration: [
    {
      heading: { nl: "Vloer en materiaal", en: "Floor and material", fr: "Plancher et materiau" },
      fields: [
        { path: ["result", "span_m"], label: { nl: "Overspanning", en: "Span", fr: "Portee" }, unit: "m" },
        { path: ["result", "b_mm"], label: { nl: "Breedte", en: "Width", fr: "Largeur" }, unit: "mm" },
        { path: ["result", "h_mm"], label: { nl: "Hoogte", en: "Height", fr: "Hauteur" }, unit: "mm" },
        { path: ["result", "wood_grade"], label: { nl: "Houtkwaliteit", en: "Wood grade", fr: "Classe de bois" } },
        { path: ["result", "composite_factor"], label: { nl: "Composietfaktor", en: "Composite factor", fr: "Facteur composite" } },
      ],
    },
    {
      heading: { nl: "Doorbuiging", en: "Deflection", fr: "Fleche" },
      fields: [
        { path: ["result", "load_n"], label: { nl: "Puntlast", en: "Point load", fr: "Charge ponctuelle" }, unit: "N" },
        { path: ["result", "limit_mm"], label: { nl: "Limiet", en: "Limit", fr: "Limite" }, unit: "mm" },
        { path: ["result", "base_deflection_mm"], label: { nl: "Zonder OSB", en: "Without OSB", fr: "Sans OSB" }, unit: "mm" },
        { path: ["result", "composite_deflection_mm"], label: { nl: "Met OSB", en: "With OSB", fr: "Avec OSB" }, unit: "mm" },
        { path: ["result", "reduction_percent"], label: { nl: "Reductie", en: "Reduction", fr: "Reduction" }, unit: "%" },
        { path: ["result", "vibration_deflection_ok"], label: { nl: "Controle", en: "Check", fr: "Controle" }, format: "check" },
      ],
    },
  ],
  ec5_steel_timber_screw_connection: [
    {
      heading: { nl: "Configuratie", en: "Configuration", fr: "Configuration" },
      fields: [
        { path: ["result", "config_type"], label: { nl: "Configuratietype", en: "Configuration type", fr: "Type de configuration" } },
        { path: ["result", "input_summary", "t_timber_1_mm"], label: { nl: "Houtdikte 1", en: "Timber thickness 1", fr: "Epaisseur bois 1" }, unit: "mm" },
        { path: ["result", "input_summary", "t_timber_2_mm"], label: { nl: "Houtdikte 2", en: "Timber thickness 2", fr: "Epaisseur bois 2" }, unit: "mm" },
        { path: ["result", "input_summary", "t_plate_mm"], label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" }, unit: "mm" },
        { path: ["result", "input_summary", "n"], label: { nl: "Aantal schroeven", en: "Screw count", fr: "Nombre de vis" } },
        { path: ["result", "input_summary", "d_mm"], label: { nl: "Diameter", en: "Diameter", fr: "Diametre" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Materiaal en weerstand", en: "Material and resistance", fr: "Materiau et resistance" },
      fields: [
        { path: ["result", "k_mod"], label: { nl: "kmod", en: "kmod", fr: "kmod" } },
        { path: ["result", "k_90"], label: { nl: "k90", en: "k90", fr: "k90" } },
        { path: ["result", "f_h_k_mpa"], label: { nl: "fh,k", en: "fh,k", fr: "fh,k" }, unit: "MPa" },
        { path: ["result", "f_v_rk_per_screw_n"], label: { nl: "Fv,Rk per schroef", en: "Fv,Rk per screw", fr: "Fv,Rk par vis" }, unit: "N" },
        { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend mechanisme", en: "Governing mode", fr: "Mode determinant" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "f_d_kn"], label: { nl: "Fd", en: "Fd", fr: "Fd" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "strength_check_passed"], label: { nl: "Sterktecontrole", en: "Strength check", fr: "Verification resistance" }, format: "check" },
        { path: ["result", "geometry_check_passed"], label: { nl: "Geometriecontrole", en: "Geometry check", fr: "Verification geometrie" }, format: "check" },
      ],
    },
  ],
  ec5_steel_timber_double_shear_connection: [
    {
      heading: { nl: "Configuratie", en: "Configuration", fr: "Configuration" },
      fields: [
        { path: ["result", "connection_type"], label: { nl: "Verbindingstype", en: "Connection type", fr: "Type de connexion" } },
        { path: ["result", "configuration"], label: { nl: "Samenstelling", en: "Arrangement", fr: "Assemblage" } },
        { path: ["result", "input_summary", "t2_mm"], label: { nl: "Houtdikte", en: "Timber thickness", fr: "Epaisseur bois" }, unit: "mm" },
        { path: ["result", "input_summary", "t_plate_mm"], label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" }, unit: "mm" },
        { path: ["result", "input_summary", "n"], label: { nl: "Aantal bouten", en: "Fastener count", fr: "Nombre de fixations" } },
        { path: ["result", "input_summary", "d_mm"], label: { nl: "Diameter", en: "Diameter", fr: "Diametre" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Weerstand", en: "Resistance", fr: "Resistance" },
      fields: [
        { path: ["result", "k_mod"], label: { nl: "kmod", en: "kmod", fr: "kmod" } },
        { path: ["result", "k_90"], label: { nl: "k90", en: "k90", fr: "k90" } },
        { path: ["result", "f_v_rk_per_shear_plane_kn"], label: { nl: "Fv,Rk per vlak", en: "Fv,Rk per plane", fr: "Fv,Rk par plan" }, unit: "kN" },
        { path: ["result", "r_k_per_fastener_kn"], label: { nl: "Rk per bevestiger", en: "Rk per fastener", fr: "Rk par fixation" }, unit: "kN" },
        { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend mechanisme", en: "Governing mode", fr: "Mode determinant" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "f_d_kn"], label: { nl: "Fd", en: "Fd", fr: "Fd" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "strength_check_passed"], label: { nl: "Sterktecontrole", en: "Strength check", fr: "Verification resistance" }, format: "check" },
        { path: ["result", "geometry_check_passed"], label: { nl: "Geometriecontrole", en: "Geometry check", fr: "Verification geometrie" }, format: "check" },
      ],
    },
  ],
  ec5_steel_timber_five_member_connection: [
    {
      heading: { nl: "Configuratie", en: "Configuration", fr: "Configuration" },
      fields: [
        { path: ["result", "connection_type"], label: { nl: "Verbindingstype", en: "Connection type", fr: "Type de connexion" } },
        { path: ["result", "configuration"], label: { nl: "Samenstelling", en: "Arrangement", fr: "Assemblage" } },
        { path: ["result", "input_summary", "t_w1_mm"], label: { nl: "Houtdikte 1", en: "Timber thickness 1", fr: "Epaisseur bois 1" }, unit: "mm" },
        { path: ["result", "input_summary", "t_w2_mm"], label: { nl: "Houtdikte 2", en: "Timber thickness 2", fr: "Epaisseur bois 2" }, unit: "mm" },
        { path: ["result", "input_summary", "t_plate_mm"], label: { nl: "Plaatdikte", en: "Plate thickness", fr: "Epaisseur plaque" }, unit: "mm" },
        { path: ["result", "input_summary", "n"], label: { nl: "Aantal bouten", en: "Fastener count", fr: "Nombre de fixations" } },
      ],
    },
    {
      heading: { nl: "Weerstand", en: "Resistance", fr: "Resistance" },
      fields: [
        { path: ["result", "r_k_unit1_per_fastener_kn"], label: { nl: "Rk lid 1 per bevestiger", en: "Rk member 1 per fastener", fr: "Rk membre 1 par fixation" }, unit: "kN" },
        { path: ["result", "r_k_unit2_per_fastener_kn"], label: { nl: "Rk lid 2 per bevestiger", en: "Rk member 2 per fastener", fr: "Rk membre 2 par fixation" }, unit: "kN" },
        { path: ["result", "r_k_per_fastener_kn"], label: { nl: "Rk totaal per bevestiger", en: "Total Rk per fastener", fr: "Rk total par fixation" }, unit: "kN" },
        { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
        { path: ["result", "governing_unit_label"], label: { nl: "Maatgevend lid", en: "Governing member", fr: "Element determinant" } },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend mechanisme", en: "Governing mode", fr: "Mode determinant" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "f_d_kn"], label: { nl: "Fd", en: "Fd", fr: "Fd" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "strength_check_passed"], label: { nl: "Sterktecontrole", en: "Strength check", fr: "Verification resistance" }, format: "check" },
        { path: ["result", "geometry_check_passed"], label: { nl: "Geometriecontrole", en: "Geometry check", fr: "Verification geometrie" }, format: "check" },
      ],
    },
  ],
  ec5_timber_timber_single_shear_connection: [
    {
      heading: { nl: "Model", en: "Model", fr: "Modele" },
      fields: [
        { path: ["result", "k_mod_1"], label: { nl: "kmod 1", en: "kmod 1", fr: "kmod 1" } },
        { path: ["result", "k_mod_2"], label: { nl: "kmod 2", en: "kmod 2", fr: "kmod 2" } },
        { path: ["result", "n_actual"], label: { nl: "Aantal bevestigers", en: "Fastener count", fr: "Nombre de fixations" } },
        { path: ["result", "n_effective"], label: { nl: "n effectief", en: "Effective n", fr: "n effectif" } },
        { path: ["result", "group_effect_applied"], label: { nl: "Groepseffect", en: "Group effect applied", fr: "Effet de groupe applique" }, format: "check" },
      ],
    },
    {
      heading: { nl: "Weerstand", en: "Resistance", fr: "Resistance" },
      fields: [
        { path: ["result", "f_v_rk_per_fastener_kn"], label: { nl: "Fv,Rk per bevestiger", en: "Fv,Rk per fastener", fr: "Fv,Rk par fixation" }, unit: "kN" },
        { path: ["result", "r_k_kn"], label: { nl: "Rk", en: "Rk", fr: "Rk" }, unit: "kN" },
        { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend mechanisme", en: "Governing mode", fr: "Mode determinant" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "f_v_ed_kn"], label: { nl: "Fv,Ed", en: "Fv,Ed", fr: "Fv,Ed" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "strength_check_passed"], label: { nl: "Sterktecontrole", en: "Strength check", fr: "Verification resistance" }, format: "check" },
        { path: ["result", "geometry_check_passed"], label: { nl: "Geometriecontrole", en: "Geometry check", fr: "Verification geometrie" }, format: "check" },
      ],
    },
  ],
  ec5_timber_timber_double_shear_connection: [
    {
      heading: { nl: "Model", en: "Model", fr: "Modele" },
      fields: [
        { path: ["result", "k_mod_outer"], label: { nl: "kmod buiten", en: "Outer kmod", fr: "kmod exterieur" } },
        { path: ["result", "k_mod_inner"], label: { nl: "kmod binnen", en: "Inner kmod", fr: "kmod interieur" } },
        { path: ["result", "gamma_m"], label: { nl: "gamma M", en: "Gamma M", fr: "Gamma M" } },
        { path: ["result", "f_h_outer_k_mpa"], label: { nl: "fh buiten", en: "Outer fh,k", fr: "fh,k exterieur" }, unit: "MPa" },
        { path: ["result", "f_h_inner_k_mpa"], label: { nl: "fh binnen", en: "Inner fh,k", fr: "fh,k interieur" }, unit: "MPa" },
      ],
    },
    {
      heading: { nl: "Weerstand", en: "Resistance", fr: "Resistance" },
      fields: [
        { path: ["result", "f_v_rk_per_shear_plane_kn"], label: { nl: "Fv,Rk per vlak", en: "Fv,Rk per plane", fr: "Fv,Rk par plan" }, unit: "kN" },
        { path: ["result", "r_k_kn"], label: { nl: "Rk", en: "Rk", fr: "Rk" }, unit: "kN" },
        { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend mechanisme", en: "Governing mode", fr: "Mode determinant" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "f_v_ed_kn"], label: { nl: "Fv,Ed", en: "Fv,Ed", fr: "Fv,Ed" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "strength_check_passed"], label: { nl: "Sterktecontrole", en: "Strength check", fr: "Verification resistance" }, format: "check" },
        { path: ["result", "geometry_check_passed"], label: { nl: "Geometriecontrole", en: "Geometry check", fr: "Verification geometrie" }, format: "check" },
      ],
    },
  ],
  ec5_toothed_plate_connection: [
    {
      heading: { nl: "Connector en materiaal", en: "Connector and material", fr: "Connecteur et materiau" },
      fields: [
        { path: ["result", "connector_type"], label: { nl: "Connectortype", en: "Connector type", fr: "Type de connecteur" } },
        { path: ["result", "k_mod"], label: { nl: "kmod", en: "kmod", fr: "kmod" } },
        { path: ["result", "k1"], label: { nl: "k1", en: "k1", fr: "k1" } },
        { path: ["result", "k2"], label: { nl: "k2", en: "k2", fr: "k2" } },
        { path: ["result", "k3"], label: { nl: "k3", en: "k3", fr: "k3" } },
      ],
    },
    {
      heading: { nl: "Plaat- en boutweerstand", en: "Plate and bolt resistance", fr: "Resistance plaque et boulon" },
      fields: [
        { path: ["result", "r_d_plate_kn"], label: { nl: "Rd plaat", en: "Plate Rd", fr: "Rd plaque" }, unit: "kN" },
        { path: ["result", "r_d_bolt_kn"], label: { nl: "Rd bout", en: "Bolt Rd", fr: "Rd boulon" }, unit: "kN" },
        { path: ["result", "r_d_kn"], label: { nl: "Rd totaal", en: "Total Rd", fr: "Rd total" }, unit: "kN" },
        { path: ["result", "governing_bolt_mode"], label: { nl: "Maatgevende boutmodus", en: "Governing bolt mode", fr: "Mode boulon determinant" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "f_v_ed_kn"], label: { nl: "Fv,Ed", en: "Fv,Ed", fr: "Fv,Ed" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "strength_check_passed"], label: { nl: "Sterktecontrole", en: "Strength check", fr: "Verification resistance" }, format: "check" },
        { path: ["result", "geometry_check_passed"], label: { nl: "Geometriecontrole", en: "Geometry check", fr: "Verification geometrie" }, format: "check" },
      ],
    },
  ],
  ec6_masonry_strength: [
    {
      heading: { nl: "Materiaal", en: "Material", fr: "Materiau" },
      fields: [
        { path: ["result", "k_factor"], label: { nl: "K factor", en: "K factor", fr: "Facteur K" } },
        { path: ["result", "gamma_m"], label: { nl: "gamma M", en: "Gamma M", fr: "Gamma M" } },
        { path: ["result", "formula"], label: { nl: "Formule", en: "Formula", fr: "Formule" } },
      ],
    },
    {
      heading: { nl: "Resultaat", en: "Result", fr: "Resultat" },
      fields: [
        { path: ["result", "fk_mpa"], label: { nl: "fk", en: "fk", fr: "fk" }, unit: "MPa" },
        { path: ["result", "fd_mpa"], label: { nl: "fd", en: "fd", fr: "fd" }, unit: "MPa" },
        { path: ["result", "check_passed"], label: { nl: "Controle", en: "Check", fr: "Controle" }, format: "check" },
      ],
    },
  ],
  ec6_beam_bearing: [
    {
      heading: { nl: "Opleg", en: "Bearing", fr: "Appui" },
      fields: [
        { path: ["result", "effective_length_mm"], label: { nl: "Effectieve lengte", en: "Effective length", fr: "Longueur efficace" }, unit: "mm" },
        { path: ["result", "bearing_area_mm2"], label: { nl: "Oplegoppervlak", en: "Bearing area", fr: "Surface d'appui" }, unit: "mm2" },
        { path: ["result", "effective_area_mm2"], label: { nl: "Effectieve oppervlakte", en: "Effective area", fr: "Surface efficace" }, unit: "mm2" },
        { path: ["result", "beta"], label: { nl: "Beta", en: "Beta", fr: "Beta" } },
      ],
    },
    {
      heading: { nl: "Spanning en weerstand", en: "Stress and resistance", fr: "Contrainte et resistance" },
      fields: [
        { path: ["result", "contact_pressure_mpa"], label: { nl: "Contactspanning", en: "Contact pressure", fr: "Contrainte de contact" }, unit: "MPa" },
        { path: ["result", "design_bearing_resistance_mpa"], label: { nl: "Oplegweerstand", en: "Bearing resistance", fr: "Resistance d'appui" }, unit: "MPa" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "check_passed"], label: { nl: "Controle", en: "Check", fr: "Controle" }, format: "check" },
      ],
    },
  ],
  ec6_masonry_contact_pressure: [
    {
      heading: { nl: "Ligger en opleg", en: "Beam and bearing", fr: "Poutre et appui" },
      fields: [
        { path: ["result", "beam_id"], label: { nl: "Ligger", en: "Beam", fr: "Poutre" } },
        { path: ["result", "profile_name"], label: { nl: "Profiel", en: "Profile", fr: "Profil" } },
        { path: ["result", "beam_width_mm"], label: { nl: "Liggerbreedte", en: "Beam width", fr: "Largeur poutre" }, unit: "mm" },
        { path: ["result", "beam_width_source"], label: { nl: "Breedtebron", en: "Width source", fr: "Source largeur" } },
        { path: ["result", "support_length_mm"], label: { nl: "Opleglengte", en: "Support length", fr: "Longueur appui" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Drukcontrole", en: "Pressure check", fr: "Verification pression" },
      fields: [
        { path: ["result", "n_ed_kn"], label: { nl: "NEd", en: "NEd", fr: "NEd" }, unit: "kN" },
        { path: ["result", "contact_area_mm2"], label: { nl: "Contactoppervlak", en: "Contact area", fr: "Surface de contact" }, unit: "mm2" },
        { path: ["result", "sigma_d_mpa"], label: { nl: "Sigma d", en: "Sigma d", fr: "Sigma d" }, unit: "MPa" },
        { path: ["result", "f_rdc_mpa"], label: { nl: "Frdc", en: "Frdc", fr: "Frdc" }, unit: "MPa" },
        { path: ["result", "required_length_mm"], label: { nl: "Vereiste lengte", en: "Required length", fr: "Longueur requise" }, unit: "mm" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
      ],
    },
  ],
  ec6_inplane_shear_wall: [
    {
      heading: { nl: "Materiaal en toestand", en: "Material and stress state", fr: "Materiau et etat de contrainte" },
      fields: [
        { path: ["result", "unit_group"], label: { nl: "Unit group", en: "Unit group", fr: "Groupe d'unites" } },
        { path: ["result", "k_factor"], label: { nl: "K factor", en: "K factor", fr: "Facteur K" } },
        { path: ["result", "fk_mpa"], label: { nl: "fk", en: "fk", fr: "fk" }, unit: "MPa" },
        { path: ["result", "fd_mpa"], label: { nl: "fd", en: "fd", fr: "fd" }, unit: "MPa" },
        { path: ["result", "stress_case"], label: { nl: "Spanningstoestand", en: "Stress case", fr: "Cas de contrainte" } },
        { path: ["result", "compressed_length_lc_mm"], label: { nl: "Gedrukte lengte", en: "Compressed length", fr: "Longueur comprimee" }, unit: "mm" },
      ],
    },
    {
      heading: { nl: "Buiging en schuif", en: "Bending and shear", fr: "Flexion et cisaillement" },
      fields: [
        { path: ["result", "sigma_max_mpa"], label: { nl: "Sigma max", en: "Sigma max", fr: "Sigma max" }, unit: "MPa" },
        { path: ["result", "fvk_mpa"], label: { nl: "fvk", en: "fvk", fr: "fvk" }, unit: "MPa" },
        { path: ["result", "fvd_mpa"], label: { nl: "fvd", en: "fvd", fr: "fvd" }, unit: "MPa" },
        { path: ["result", "v_ed_kn"], label: { nl: "VEd", en: "VEd", fr: "VEd" }, unit: "kN" },
        { path: ["result", "v_rd_kn"], label: { nl: "VRd", en: "VRd", fr: "VRd" }, unit: "kN" },
        { path: ["result", "bending_utilization_ratio"], label: { nl: "Benutting buiging", en: "Bending utilization", fr: "Utilisation flexion" } },
        { path: ["result", "shear_utilization_ratio"], label: { nl: "Benutting schuif", en: "Shear utilization", fr: "Utilisation cisaillement" } },
      ],
    },
  ],
  ec6_masonry_horizontal_capacity: [
    {
      heading: { nl: "Materiaal", en: "Material", fr: "Materiau" },
      fields: [
        { path: ["result", "fvko_mpa"], label: { nl: "fvko", en: "fvko", fr: "fvko" }, unit: "MPa" },
        { path: ["result", "fvk_mpa"], label: { nl: "fvk", en: "fvk", fr: "fvk" }, unit: "MPa" },
        { path: ["result", "design_shear_strength_mpa"], label: { nl: "Schuifsterkte ontwerp", en: "Design shear strength", fr: "Resistance cisaillement calcul" }, unit: "MPa" },
        { path: ["result", "design_tensile_strength_mpa"], label: { nl: "Treksterkte ontwerp", en: "Design tensile strength", fr: "Resistance traction calcul" }, unit: "MPa" },
      ],
    },
    {
      heading: { nl: "Capaciteit", en: "Capacity", fr: "Capacite" },
      fields: [
        { path: ["result", "effective_compressed_length_mm"], label: { nl: "Effectieve gedrukte lengte", en: "Effective compressed length", fr: "Longueur comprimee efficace" }, unit: "mm" },
        { path: ["result", "shear_area_mm2"], label: { nl: "Schuifoppervlak", en: "Shear area", fr: "Surface de cisaillement" }, unit: "mm2" },
        { path: ["result", "shear_capacity_per_wall_kn"], label: { nl: "Schuifcapaciteit per wand", en: "Shear capacity per wall", fr: "Capacite cisaillement par mur" }, unit: "kN" },
        { path: ["result", "bending_capacity_per_wall_kn"], label: { nl: "Buigcapaciteit per wand", en: "Bending capacity per wall", fr: "Capacite flexion par mur" }, unit: "kN" },
        { path: ["result", "combined_capacity_kn"], label: { nl: "Totale capaciteit", en: "Combined capacity", fr: "Capacite combinee" }, unit: "kN" },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend mechanisme", en: "Governing mode", fr: "Mode determinant" } },
      ],
    },
  ],
  ec6_lateral_wall_resistance: [
    {
      heading: { nl: "Geometrie en oplegging", en: "Geometry and support case", fr: "Geometrie et appuis" },
      fields: [
        { path: ["result", "geometry", "height_m"], label: { nl: "Hoogte", en: "Height", fr: "Hauteur" }, unit: "m" },
        { path: ["result", "geometry", "length_m"], label: { nl: "Lengte", en: "Length", fr: "Longueur" }, unit: "m" },
        { path: ["result", "geometry", "thickness_mm"], label: { nl: "Dikte", en: "Thickness", fr: "Epaisseur" }, unit: "mm" },
        { path: ["result", "support_case"], label: { nl: "Oplegconditie", en: "Support case", fr: "Cas d'appui" } },
        { path: ["result", "bending_model"], label: { nl: "Buigmodel", en: "Bending model", fr: "Modele de flexion" } },
        { path: ["result", "h_l_ratio"], label: { nl: "h/l verhouding", en: "h/l ratio", fr: "Rapport h/l" } },
      ],
    },
    {
      heading: { nl: "Belasting en weerstand", en: "Loading and resistance", fr: "Chargement et resistance" },
      fields: [
        { path: ["result", "actions", "n_ed_line_kn_per_m"], label: { nl: "NEd lijn", en: "Line NEd", fr: "NEd lineique" }, unit: "kN/m" },
        { path: ["result", "actions", "w_ed_kn_per_m2"], label: { nl: "wEd", en: "wEd", fr: "wEd" }, unit: "kN/m2" },
        { path: ["result", "m_rd1_nmm_per_mm"], label: { nl: "MRd as 1", en: "Axis 1 MRd", fr: "MRd axe 1" }, unit: "Nmm/mm" },
        { path: ["result", "m_rd2_nmm_per_mm"], label: { nl: "MRd as 2", en: "Axis 2 MRd", fr: "MRd axe 2" }, unit: "Nmm/mm" },
        { path: ["result", "axis_1_utilization_ratio"], label: { nl: "Benutting as 1", en: "Axis 1 utilization", fr: "Utilisation axe 1" } },
        { path: ["result", "axis_2_utilization_ratio"], label: { nl: "Benutting as 2", en: "Axis 2 utilization", fr: "Utilisation axe 2" } },
      ],
    },
    {
      heading: { nl: "Controle", en: "Verification", fr: "Verification" },
      fields: [
        { path: ["result", "axis_1_check_passed"], label: { nl: "As 1 OK", en: "Axis 1 OK", fr: "Axe 1 OK" }, format: "check" },
        { path: ["result", "axis_2_check_passed"], label: { nl: "As 2 OK", en: "Axis 2 OK", fr: "Axe 2 OK" }, format: "check" },
        { path: ["result", "check_passed"], label: { nl: "Globale controle", en: "Overall check", fr: "Verification globale" }, format: "check" },
      ],
    },
  ],
};

const STORAGE_KEY = "ea-suys-structural-tools-input";

export function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

export function buildResultDownloadText(response) {
  return formatJson(response);
}

export function buildResultFilename(toolId, date = new Date()) {
  const stamp = date.toISOString()
    .replaceAll("-", "")
    .replaceAll(":", "")
    .replace(/\.\d{3}Z$/, "Z");
  const slug = String(toolId || "calculation")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase() || "calculation";
  return `ea-suys-${slug}-${stamp}.json`;
}

export function buildReportFilename(toolId, date = new Date()) {
  return buildResultFilename(toolId, date).replace(/\.json$/, ".html");
}

export function buildResultSummaryItems(response, lang = "en") {
  const fields = RESULT_SUMMARY_FIELDS[response?.calculator_id] || [];
  return fields
    .map((field) => {
      const value = valueAtPath(response, field.path);
      if (value === undefined || value === null) return null;
      return {
        label: field.label[lang] || field.label.en,
        value: formatSummaryValue(value, field),
      };
    })
    .filter(Boolean);
}

function buildReportSections(response, lang = "en") {
  const sections = REPORT_SECTION_FIELDS[response?.calculator_id] || [];
  return sections
    .map((section) => {
      const items = section.fields
        .map((field) => {
          const value = valueAtPath(response, field.path);
          if (value === undefined || value === null) return null;
          return {
            label: field.label[lang] || field.label.en,
            value: formatSummaryValue(value, field),
          };
        })
        .filter(Boolean);
      if (!items.length) return null;
      return {
        heading: section.heading[lang] || section.heading.en,
        items,
      };
    })
    .filter(Boolean);
}

export function buildReportModel(response, lang = "en", generatedAt = new Date()) {
  if (!response) return null;
  const text = TEXT[lang] || TEXT.en;
  const status = response.status || response.result?.overall_status || response.result?.check_passed;
  const warnings = collectWarningCodes(response);
  const summaryItems = buildResultSummaryItems(response, lang);
  const sections = buildReportSections(response, lang);
  return {
    title: text.reportTitle,
    details: [
      { label: text.generatedAt, value: generatedAt.toISOString() },
      { label: text.calculator, value: response.calculator_id || text.notProvided },
      {
        label: "Status",
        value: status === undefined
          ? text.notProvided
          : formatSummaryValue(status, { format: typeof status === "boolean" ? "check" : "status" }),
      },
      { label: text.formulaVersion, value: response.formula_version || text.notProvided },
    ],
    summaryHeading: text.summary,
    summaryItems: summaryItems.length ? summaryItems : [{ label: text.summary, value: text.none }],
    sections,
    warningsHeading: text.warnings,
    warnings: warnings.length ? warnings : [text.none],
    assumptionsHeading: text.assumptions,
    assumptions: normalizeList(response.assumptions, text.none),
    sourceRefsHeading: text.sourceRefs,
    sourceRefs: normalizeList(response.source_refs, text.none),
  };
}

export function buildReportHtml(response, lang = "en", generatedAt = new Date()) {
  const report = buildReportModel(response, lang, generatedAt);
  if (!report) return "";
  return [
    "<!DOCTYPE html>",
    `<html lang="${escapeHtml(lang)}">`,
    "<head>",
    '  <meta charset="UTF-8">',
    `  <title>${escapeHtml(report.title)}</title>`,
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "  <style>",
    "    body { font-family: Georgia, \"Times New Roman\", serif; color: #1f2a30; margin: 32px; line-height: 1.45; }",
    "    h1 { font-size: 1.7rem; margin: 0 0 20px; }",
    "    h2 { color: #8b5e00; font-size: 0.8rem; letter-spacing: 0.1em; margin: 24px 0 8px; text-transform: uppercase; }",
    "    dl { display: grid; gap: 10px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 0; }",
    "    dt { color: #6b7280; font-size: 0.85rem; font-weight: 700; }",
    "    dd { font-weight: 700; margin: 3px 0 0; overflow-wrap: anywhere; }",
    "    ul { margin: 8px 0 0; padding-left: 18px; }",
    "    li { margin-top: 4px; overflow-wrap: anywhere; }",
    "    .summary { border-top: 1px solid #d8d3c5; margin-top: 20px; padding-top: 16px; }",
    "    .detail-section { border-top: 1px solid #d8d3c5; margin-top: 18px; padding-top: 14px; }",
    "  </style>",
    "</head>",
    "<body>",
    `  <h1>${escapeHtml(report.title)}</h1>`,
    `  <dl>${report.details.map((item) => `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`).join("")}</dl>`,
    `  <section class="summary"><h2>${escapeHtml(report.summaryHeading)}</h2><ul>${report.summaryItems.map((item) => `<li>${escapeHtml(`${item.label}: ${item.value}`)}</li>`).join("")}</ul></section>`,
    ...report.sections.map((section) => buildStandaloneReportDetailSection(section)),
    `  <section><h2>${escapeHtml(report.warningsHeading)}</h2><ul>${report.warnings.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`,
    `  <section><h2>${escapeHtml(report.assumptionsHeading)}</h2><ul>${report.assumptions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`,
    `  <section><h2>${escapeHtml(report.sourceRefsHeading)}</h2><ul>${report.sourceRefs.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`,
    "</body>",
    "</html>",
  ].join("\n");
}

export function buildPayloadFromFormValues(toolId, values) {
  const tool = TOOL_CATALOG[toolId];
  if (!tool?.form) return null;
  const payload = cloneJson(tool.sample);
  for (const field of tool.form.fields) {
    const path = field.path || field.name.split(".");
    const rawValue = values[field.name] ?? valueAtPath(tool.sample, path) ?? "";
    setValueAtPath(payload, path, coerceFieldValue(field, rawValue));
  }
  return payload;
}

export function initApp(documentRef = globalThis.document) {
  if (!documentRef) return;
  const state = { lang: "en", toolId: "ec5_timber_contact_moment_joint" };
  const tabs = documentRef.querySelector("[data-tool-tabs]") as HTMLElement;
  const input = documentRef.querySelector("[data-json-input]") as HTMLTextAreaElement;
  const output = documentRef.querySelector("[data-result-output]") as HTMLElement;
  const resultSummary = documentRef.querySelector("[data-result-summary]") as HTMLElement;
  const report = documentRef.querySelector("[data-report]") as HTMLElement;
  const downloadButton = documentRef.querySelector("[data-download]") as HTMLButtonElement;
  const downloadHtmlButton = documentRef.querySelector("[data-download-html]") as HTMLButtonElement;
  const printButton = documentRef.querySelector("[data-print]") as HTMLButtonElement;
  const form = documentRef.querySelector("[data-calculator-form]") as HTMLFormElement;
  const friendlyForm = documentRef.querySelector("[data-friendly-form]") as HTMLElement;
  let lastResponse = null as any;

  function render() {
    const text = TEXT[state.lang];
    const activeTool = TOOL_CATALOG[state.toolId];
    lastResponse = null;
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
    downloadButton.textContent = text.download;
    downloadButton.disabled = true;
    downloadHtmlButton.textContent = text.downloadHtml;
    downloadHtmlButton.disabled = true;
    printButton.textContent = text.print;
    renderFriendlyForm(friendlyForm, activeTool, state.lang, text.form);
    renderResultSummary(resultSummary, null, state.lang);
    renderReport(report, null, state.lang);
    documentRef.querySelectorAll("[data-lang]").forEach((button) => {
      const langButton = button as HTMLElement;
      if (langButton.dataset.lang === state.lang) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });
    input.value = formatJson(activeTool.sample);
  }

  tabs.addEventListener("click", (event) => {
    const toolId = (event.target as HTMLElement | null)?.dataset?.toolId;
    if (!toolId) return;
    state.toolId = toolId;
    render();
  });

  documentRef.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.lang = (button as HTMLElement).dataset.lang;
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
    renderResultSummary(resultSummary, null, state.lang);
    renderReport(report, null, state.lang);
    lastResponse = null;
    downloadButton.disabled = true;
    downloadHtmlButton.disabled = true;
    try {
      const payload = JSON.parse(input.value);
      const response = await fetch(`${API_BASE_URL}${TOOL_CATALOG[state.toolId].endpoint}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      renderResultSummary(resultSummary, result, state.lang);
      renderReport(report, result, state.lang);
      output.textContent = formatJson(result);
      lastResponse = result;
      downloadButton.disabled = false;
      downloadHtmlButton.disabled = false;
    } catch (error) {
      renderResultSummary(resultSummary, null, state.lang);
      renderReport(report, null, state.lang);
      output.textContent = formatJson({ error: error.message });
      lastResponse = null;
      downloadButton.disabled = true;
      downloadHtmlButton.disabled = true;
    }
  });

  downloadButton.addEventListener("click", () => {
    if (!lastResponse) return;
    const toolId = lastResponse.calculator_id || state.toolId;
    triggerDownload(documentRef, buildResultFilename(toolId), buildResultDownloadText(lastResponse));
  });

  downloadHtmlButton.addEventListener("click", () => {
    if (!lastResponse) return;
    const toolId = lastResponse.calculator_id || state.toolId;
    triggerDownload(
      documentRef,
      buildReportFilename(toolId),
      buildReportHtml(lastResponse, state.lang),
      "text/html"
    );
  });

  printButton.addEventListener("click", () => {
    globalThis.print?.();
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
      renderFriendlyField(field, valueAtPath(tool.sample, field.path || [field.name]), lang)
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

function renderResultSummary(container, response, lang) {
  const items = buildResultSummaryItems(response, lang);
  if (!items.length) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  container.hidden = false;
  container.innerHTML = `<dl>${items.map((item) =>
    `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`
  ).join("")}</dl>`;
}

function renderReport(container, response, lang) {
  const report = buildReportModel(response, lang);
  if (!report) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  container.hidden = false;
  container.innerHTML = [
    `<h3>${escapeHtml(report.title)}</h3>`,
    `<dl class="report-details">${report.details.map((item) =>
      `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`
    ).join("")}</dl>`,
    renderReportSection(report.summaryHeading, report.summaryItems.map((item) => `${item.label}: ${item.value}`)),
    ...report.sections.map((section) => renderReportDetailSection(section)),
    renderReportSection(report.warningsHeading, report.warnings),
    renderReportSection(report.assumptionsHeading, report.assumptions),
    renderReportSection(report.sourceRefsHeading, report.sourceRefs),
  ].join("");
}

function renderReportSection(heading, items) {
  return [
    `<section><h4>${escapeHtml(heading)}</h4>`,
    `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`,
  ].join("");
}

function renderReportDetailSection(section) {
  return [
    `<section class="detail-section"><h4>${escapeHtml(section.heading)}</h4>`,
    `<dl class="report-details">${section.items.map((item) =>
      `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`
    ).join("")}</dl></section>`,
  ].join("");
}

function buildStandaloneReportDetailSection(section) {
  return [
    `  <section class="detail-section"><h2>${escapeHtml(section.heading)}</h2>`,
    `    <dl>${section.items.map((item) =>
      `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`
    ).join("")}</dl></section>`,
  ].join("\n");
}

function triggerDownload(documentRef, filename, text, mimeType = "application/json") {
  const blob = new Blob([text], { type: mimeType });
  const url = globalThis.URL.createObjectURL(blob);
  const link = documentRef.createElement("a");
  link.href = url;
  link.download = filename;
  documentRef.body.appendChild(link);
  link.click();
  link.remove();
  globalThis.URL.revokeObjectURL(url);
}

function collectWarningCodes(response) {
  const candidates = [
    response?.warning_codes,
    response?.result?.warning_codes,
  ];
  return candidates
    .flatMap((value) => Array.isArray(value) ? value : [])
    .filter((value, index, values) => value && values.indexOf(value) === index)
    .map(String);
}

function normalizeList(value, fallback) {
  if (!Array.isArray(value) || !value.length) return [fallback];
  return value.map(String);
}

function coerceFieldValue(field, rawValue) {
  if (field.value_type === "boolean") return rawValue === true || rawValue === "true" || rawValue === "on";
  if (field.value_type !== "number") return String(rawValue);
  if (rawValue === "") return "";
  const value = Number(rawValue);
  return Number.isFinite(value) ? value : rawValue;
}

function valueAtPath(source, path) {
  return path.reduce((value, key) => value?.[key], source);
}

function setValueAtPath(target, path, value) {
  let cursor = target;
  for (let index = 0; index < path.length - 1; index += 1) {
    const key = path[index];
    const nextKey = path[index + 1];
    cursor[key] = cursor[key] || (typeof nextKey === "number" ? [] : {});
    cursor = cursor[key];
  }
  cursor[path[path.length - 1]] = value;
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function formatSummaryValue(value, field) {
  if (field.format === "status") return String(value).toUpperCase();
  if (field.format === "check") return value ? "PASS" : "FAIL";
  if (field.format === "warnings") return Array.isArray(value) && value.length ? value.join(", ") : "None";
  if (typeof value === "number") return `${formatSummaryNumber(value)}${field.unit ? ` ${field.unit}` : ""}`;
  return String(value);
}

function formatSummaryNumber(value) {
  const decimals = Math.abs(value) >= 100 ? 1 : 3;
  return value.toFixed(decimals).replace(/\.?0+$/, "");
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => initApp(document));
}
