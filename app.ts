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

const CONTACT_ENDPOINT = "/lead/study-request";
const TURNSTILE_SITE_KEY = "0x4AAAAAADYeVJCZgqihubKs";
const TURNSTILE_SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export const TOOL_GROUP_ORDER = ["beam", "ec1", "ec2", "ec3", "ec5", "ec6", "composite"] as const;

const TOOL_GROUP_TEXT = {
  beam: {
    label: {
      nl: "Balkmechanica",
      en: "Beam mechanics",
      fr: "Mecanique des poutres",
    },
    summary: {
      nl: "Lineair-elastische balkhulpen voor diagrammen, continue stroken, steunbrackets, veren en samengestelde schuifspanningen.",
      en: "Linear-elastic beam helpers for diagrams, continuous strips, support bracketing, springs, and composite shear stress.",
      fr: "Aides lineaires-elastiques pour diagrammes, bandes continues, brackets d'appuis, ressorts et cisaillement composite.",
    },
    limitations: {
      nl: "Geen volledige FEM-, niet-lineaire of materiaalontwerpworkflow.",
      en: "Not a full FEM, nonlinear, or material-design workflow.",
      fr: "Ce n'est pas un flux complet FEM, non lineaire ou de dimensionnement materiau.",
    },
  },
  ec1: {
    label: { nl: "EC1 belastingen", en: "EC1 loads", fr: "EC1 charges" },
    summary: {
      nl: "Snelle variabele daklastcontrole met Belgische aannames zichtbaar in de invoer.",
      en: "Quick variable roof-load screening with Belgian assumptions exposed in the input.",
      fr: "Verification rapide des charges variables de toiture avec hypotheses belges visibles en entree.",
    },
    limitations: {
      nl: "Geen volledige EN 1990 combinaties of windmodule.",
      en: "No full EN 1990 combination engine or wind module.",
      fr: "Pas de moteur complet EN 1990 ni de module vent.",
    },
  },
  ec2: {
    label: { nl: "EC2 beton", en: "EC2 concrete", fr: "EC2 beton" },
    summary: {
      nl: "Beperkte rechthoekige doorsnedecapaciteit met ULS en SLS momentcontrole.",
      en: "Bounded rectangular section capacity with ULS and SLS moment checks.",
      fr: "Capacite bornee de section rectangulaire avec controles ELU et ELS.",
    },
    limitations: {
      nl: "Geen volledige gewapend-beton detailcontrole of meerassige doorsnede-engine.",
      en: "No full reinforced-concrete detailing or multiaxial section engine.",
      fr: "Pas de detail complet beton arme ni de moteur multiaxial.",
    },
  },
  ec3: {
    label: { nl: "EC3 staal", en: "EC3 steel", fr: "EC3 acier" },
    summary: {
      nl: "Gerichte staal- en verbindingschecks met expliciete geometrie en duidelijke maatgevende componenten.",
      en: "Focused steel and connection checks with explicit geometry and clear governing components.",
      fr: "Verifications acier et assemblages ciblees avec geometrie explicite et composant determinant clair.",
    },
    limitations: {
      nl: "Geen databankgestuurde algemene staalapplicatie over alle profielen en verbindingstypes.",
      en: "Not a full database-driven steel application across all profiles and connection types.",
      fr: "Ce n'est pas une application acier generale pour tous les profils et assemblages.",
    },
  },
  ec5: {
    label: { nl: "EC5 hout", en: "EC5 timber", fr: "EC5 bois" },
    summary: {
      nl: "Timber-, schroef-, connector- en trillingshelpers voor vroege haalbaarheidscontroles.",
      en: "Timber, screw, connector, and vibration helpers for early feasibility checks.",
      fr: "Aides bois, vis, connecteurs et vibrations pour controles de faisabilite initiaux.",
    },
    limitations: {
      nl: "Geen volledige detailengineering, uitvoeringsvoorschriften of fabrikantmodules.",
      en: "No full detailing, execution detailing, or manufacturer-specific modules.",
      fr: "Pas de detail complet, prescriptions d'execution ou modules fabricants.",
    },
  },
  ec6: {
    label: { nl: "EC6 metselwerk", en: "EC6 masonry", fr: "EC6 maconnerie" },
    summary: {
      nl: "Ongewapende metselwerkhulpen voor druk, opleg, in-plane en uit-vlak snelle controles.",
      en: "Unreinforced masonry helpers for compression, bearing, in-plane, and out-of-plane quick checks.",
      fr: "Aides maconnerie non armee pour compression, appui, en plan et hors plan.",
    },
    limitations: {
      nl: "Geen openingen, wapening, verankering of projectspecifieke detaillering.",
      en: "No openings, reinforcement, anchorage, or project-specific detailing.",
      fr: "Pas d'ouvertures, d'armatures, d'ancrages ou de details specifiques au projet.",
    },
  },
  composite: {
    label: { nl: "Composiet", en: "Composite", fr: "Composite" },
    summary: {
      nl: "Gespecialiseerde samengestelde doorsnede- en opleghulpen buiten de klassieke Eurocode calculatorfamilies.",
      en: "Specialized composite section and bearing helpers outside the standard Eurocode calculator families.",
      fr: "Aides specialisees de sections et appuis composites hors familles classiques de calculateurs Eurocode.",
    },
    limitations: {
      nl: "Geen volledige EC4- of samengestelde detailengineering.",
      en: "No full EC4 or composite detailing workflow.",
      fr: "Pas de flux complet EC4 ou de details composites.",
    },
  },
} as const;

const TOOL_CONTEXT_OVERRIDES = {
  beam_simple_diagrams: {
    summary: {
      nl: "Eenvoudige opgelegde balk met ULS- en SLS-diagrammen uit gecombineerde lijn- en puntlasten.",
      en: "Simple supported beam with ULS and SLS diagrams from combined line and point loads.",
      fr: "Poutre simplement appuyee avec diagrammes ELU et ELS issus de charges lineaires et ponctuelles.",
    },
  },
  ec2_rectangular_section_capacity: {
    summary: {
      nl: "Rechthoekige betonsectie met maximaal zes wapeningslagen en optionele momentbenutting.",
      en: "Rectangular concrete section with up to six reinforcement layers and optional moment utilization.",
      fr: "Section beton rectangulaire avec jusqu'a six nappes d'armatures et utilisation de moment optionnelle.",
    },
  },
  ec3_bolt_group_torsion: {
    summary: {
      nl: "Rechthoekige boutgroep onder dwarskracht en in-vlak torsie, met kritische boutidentificatie.",
      en: "Rectangular bolt group under shear and in-plane torsion, with critical-bolt identification.",
      fr: "Groupe de boulons rectangulaire sous cisaillement et torsion dans le plan, avec identification du boulon critique.",
    },
  },
  ec5_timber_beam_check: {
    summary: {
      nl: "Beperkte rechthoekige vloerbalkcontrole voor buiging, schuif, doorbuiging en trilling.",
      en: "Bounded rectangular floor-beam check for bending, shear, deflection, and vibration.",
      fr: "Verification bornee de poutre de plancher rectangulaire pour flexion, cisaillement, fleche et vibration.",
    },
  },
  ec6_masonry_contact_pressure: {
    summary: {
      nl: "Conservatieve contactdrukquickcheck met beta = 1.0 voor profielopleggingen op metselwerk.",
      en: "Conservative contact-pressure quick check with beta = 1.0 for profile bearings on masonry.",
      fr: "Verification rapide conservative de pression de contact avec beta = 1.0 pour appuis de profils sur maconnerie.",
    },
  },
} as const;

const TOOL_REFERENCE_ASSETS = {
  ec5_axial_screw: [
    {
      src: "images/calculators/ec5-spacing-requirements.png",
      alt: "EC5 spacing requirement reference",
      caption: {
        nl: "Referentiebeeld voor minimale afstanden en randafstanden bij schroefcontroles.",
        en: "Reference image for minimum spacing and edge-distance checks in screw verifications.",
        fr: "Image de reference pour les entraxes minimaux et distances aux bords dans les verifications de vis.",
      },
    },
  ],
  ec5_steel_timber_screw_connection: [
    {
      src: "images/calculators/ec5-spacing-requirements.png",
      alt: "EC5 spacing requirement reference",
      caption: {
        nl: "Gebruik dit detailbeeld samen met de gerapporteerde geometriewaarschuwingen.",
        en: "Use this detailing image together with the reported geometry warnings.",
        fr: "Utiliser ce detail avec les avertissements de geometrie rapportes.",
      },
    },
  ],
  ec5_timber_timber_single_shear_connection: [
    {
      src: "images/calculators/ec5-group-effect-bolts.png",
      alt: "Timber fastener group effect reference",
      caption: {
        nl: "Groepseffectreferentie voor houten verbindingen met bouten of schroeven.",
        en: "Group-effect reference for timber fastener connections.",
        fr: "Reference d'effet de groupe pour assemblages bois avec fixations.",
      },
    },
  ],
  ec5_timber_timber_double_shear_connection: [
    {
      src: "images/calculators/ec5-group-effect-bolts.png",
      alt: "Timber fastener group effect reference",
      caption: {
        nl: "Groepseffectreferentie voor dubbele schuifverbindingen in hout.",
        en: "Group-effect reference for double-shear timber fastener connections.",
        fr: "Reference d'effet de groupe pour assemblages bois en double cisaillement.",
      },
    },
  ],
  ec5_steel_timber_double_shear_connection: [
    {
      src: "images/calculators/ec5-group-effect-bolts.png",
      alt: "Steel-timber fastener group effect reference",
      caption: {
        nl: "Groepseffectreferentie voor staal-houtverbindingen met meerdere bevestigers.",
        en: "Group-effect reference for steel-to-timber connections with multiple fasteners.",
        fr: "Reference d'effet de groupe pour assemblages acier-bois avec fixations multiples.",
      },
    },
  ],
  ec5_steel_timber_five_member_connection: [
    {
      src: "images/calculators/ec5-group-effect-bolts.png",
      alt: "Steel-timber fastener group effect reference",
      caption: {
        nl: "Groepseffectreferentie voor vijfdelige staal-houtverbindingen.",
        en: "Group-effect reference for five-member steel-to-timber connections.",
        fr: "Reference d'effet de groupe pour assemblages acier-bois a cinq elements.",
      },
    },
  ],
  ec5_toothed_plate_connection: [
    {
      src: "images/calculators/ec5-group-effect-connectors.png",
      alt: "Toothed-plate connector group effect reference",
      caption: {
        nl: "Connectorreferentie voor groepseffect en dichtheid van tandringverbindingen.",
        en: "Connector reference for group effect and connector density in toothed-plate joints.",
        fr: "Reference connecteur pour l'effet de groupe et la densite des plaques a dents.",
      },
    },
  ],
} as const;

const FRIENDLY_FIELD_HELP_OVERRIDES = {
  ec3_bolted_lap_joint: {
    e1_mm: {
      en: "Loaded end distance parallel to the force direction.",
      nl: "Belaste randafstand evenwijdig met de kracht.",
      fr: "Distance au bord chargee parallele a l'effort.",
    },
    e2_mm: {
      en: "Side edge distance perpendicular to the force direction.",
      nl: "Zijdelingse randafstand loodrecht op de kracht.",
      fr: "Distance au bord laterale perpendiculaire a l'effort.",
    },
    p1_mm: {
      en: "Pitch parallel to the force direction between bolt rows.",
      nl: "Steek evenwijdig met de kracht tussen boutrijen.",
      fr: "Pas parallele a l'effort entre rangees de boulons.",
    },
    p2_mm: {
      en: "Gauge perpendicular to the force direction between bolt lines.",
      nl: "Hartenmaat loodrecht op de kracht tussen boutlijnen.",
      fr: "Entraxe perpendiculaire a l'effort entre lignes de boulons.",
    },
  },
  ec5_timber_contact_moment_joint: {
    "actions.n_ed_kN": {
      en: "Compression is positive. Tension remains outside this bounded joint helper.",
      nl: "Druk is positief. Trek blijft buiten deze begrensde voeghelper.",
      fr: "La compression est positive. La traction reste hors du domaine de cet outil.",
    },
    "actions.m_ed_kNm": {
      en: "Applied major-axis design moment for the contact-plus-screws joint model.",
      nl: "Aangelegd ontwerpbuigend moment voor het contact-plus-schroeven voegmodel.",
      fr: "Moment de calcul applique pour le modele de joint contact-plus-vis.",
    },
  },
  ec5_timber_member_uls_6_component: {
    lateral_restraint_spacing_mm: {
      en: "Only used for the discrete-restraint case; leave the default for full restraint.",
      nl: "Alleen gebruikt bij discrete zijdelingse fixatie; laat de standaardwaarde staan bij volledige fixatie.",
      fr: "Utilise uniquement pour le cas d'appuis lateraux discrets; laisser la valeur par defaut en cas de maintien complet.",
    },
  },
} as const;

type ToolGroupId = typeof TOOL_GROUP_ORDER[number];

const TEXT = {
  nl: {
    form: "Invoerformulier",
    input: "Invoer JSON",
    result: "Resultaat",
    findCalculator: "Zoek calculator",
    calculatorCount: "calculators",
    scope: "Scope",
    limitations: "Beperkingen",
    route: "Route",
    contactTitle: "Projectspecifieke controle nodig?",
    contactIntro: "Gebruik dit resultaat als vertrekpunt en open een voorgemailde projectvraag voor een beoordeelde studie of gerichte engineeringvraag.",
    contactProject: "Projectnaam",
    contactEmail: "E-mail",
    contactMessage: "Vraag of context",
    contactConsent: "Ik mag gecontacteerd worden over deze aanvraag.",
    contactSummary: "Samenvatting resultaat",
    contactSubmit: "Vraag voorbereiden",
    contactFallback: "Open e-mail direct",
    contactStatusIdle: "De aanvraag opent een e-mailconcept met tool- en resultatensamenvatting.",
    contactStatusSubmitted: "E-mailconcept wordt geopend.",
    contactStatusVerification: "Menselijke verificatie wordt geladen indien beschikbaar.",
    contactVerificationUnavailable: "Menselijke verificatie niet beschikbaar; e-mailfallback blijft bruikbaar.",
    noSearchResults: "Geen calculators gevonden voor deze zoekterm.",
    visuals: "Visuele output",
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
    requiredLabel: "Verplicht",
    defaultLabel: "Standaard",
  },
  en: {
    form: "Input form",
    input: "Input JSON",
    result: "Result",
    findCalculator: "Find calculator",
    calculatorCount: "calculators",
    scope: "Scope",
    limitations: "Limitations",
    route: "Route",
    contactTitle: "Need a project-specific review?",
    contactIntro: "Use this result as a starting point and open a prefilled project enquiry for a reviewed study or targeted engineering question.",
    contactProject: "Project name",
    contactEmail: "Email",
    contactMessage: "Question or context",
    contactConsent: "EA Suys may contact me about this enquiry.",
    contactSummary: "Result summary",
    contactSubmit: "Prepare enquiry",
    contactFallback: "Open email directly",
    contactStatusIdle: "This opens an email draft with the tool and result summary.",
    contactStatusSubmitted: "Opening email draft.",
    contactStatusVerification: "Human verification is loading when available.",
    contactVerificationUnavailable: "Human verification is unavailable; the email fallback still works.",
    noSearchResults: "No calculators match this search.",
    visuals: "Visual output",
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
    requiredLabel: "Required",
    defaultLabel: "Default",
  },
  fr: {
    form: "Formulaire",
    input: "JSON d'entree",
    result: "Resultat",
    findCalculator: "Trouver un calculateur",
    calculatorCount: "calculateurs",
    scope: "Portee",
    limitations: "Limites",
    route: "Route",
    contactTitle: "Besoin d'une revue specifique au projet ?",
    contactIntro: "Utilisez ce resultat comme point de depart et ouvrez une demande de projet pre-remplie pour une etude revue ou une question d'ingenierie ciblee.",
    contactProject: "Nom du projet",
    contactEmail: "E-mail",
    contactMessage: "Question ou contexte",
    contactConsent: "EA Suys peut me contacter au sujet de cette demande.",
    contactSummary: "Synthese du resultat",
    contactSubmit: "Preparer la demande",
    contactFallback: "Ouvrir l'e-mail directement",
    contactStatusIdle: "Cela ouvre un brouillon d'e-mail avec le calculateur et la synthese du resultat.",
    contactStatusSubmitted: "Ouverture du brouillon d'e-mail.",
    contactStatusVerification: "La verification humaine se charge si disponible.",
    contactVerificationUnavailable: "Verification humaine indisponible ; la solution e-mail reste disponible.",
    noSearchResults: "Aucun calculateur ne correspond a cette recherche.",
    visuals: "Sortie visuelle",
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
    requiredLabel: "Requis",
    defaultLabel: "Defaut",
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
const APP_STATE_STORAGE_KEY = "ea-suys-structural-tools-contact";

let turnstileScriptPromise: Promise<any> | null = null;
let schemaMetadataPromise: Promise<any> | null = null;
let schemaMetadataCache: any = null;

function toolGroupId(toolId: string): ToolGroupId {
  if (toolId.startsWith("beam_")) return "beam";
  if (toolId.startsWith("ec1_")) return "ec1";
  if (toolId.startsWith("ec2_")) return "ec2";
  if (toolId.startsWith("ec3_")) return "ec3";
  if (toolId.startsWith("ec5_")) return "ec5";
  if (toolId.startsWith("ec6_")) return "ec6";
  return "composite";
}

function groupLabel(groupId: ToolGroupId, lang: keyof typeof TEXT) {
  return TOOL_GROUP_TEXT[groupId].label[lang] || TOOL_GROUP_TEXT[groupId].label.en;
}

function activeText(toolId: string, lang: keyof typeof TEXT) {
  const tool = TOOL_CATALOG[toolId];
  return tool?.title?.[lang] || tool?.title?.en || toolId;
}

function toolSearchText(toolId: string) {
  const tool = TOOL_CATALOG[toolId];
  const groupId = toolGroupId(toolId);
  const group = TOOL_GROUP_TEXT[groupId];
  return [
    toolId,
    tool.endpoint,
    tool.title.nl,
    tool.title.en,
    tool.title.fr,
    group.label.nl,
    group.label.en,
    group.label.fr,
    group.summary.en,
  ].join(" ").toLowerCase();
}

export function buildFilteredToolGroups(query = "", lang: keyof typeof TEXT = "en") {
  const normalizedQuery = query.trim().toLowerCase();
  const entries = Object.entries(TOOL_CATALOG).filter(([toolId]) =>
    !normalizedQuery || toolSearchText(toolId).includes(normalizedQuery)
  );

  return TOOL_GROUP_ORDER.map((groupId) => {
    const items = entries
      .filter(([toolId]) => toolGroupId(toolId) === groupId)
      .map(([toolId, tool]) => ({
        toolId,
        title: tool.title[lang] || tool.title.en,
      }));
    return {
      groupId,
      label: groupLabel(groupId, lang),
      summary: TOOL_GROUP_TEXT[groupId].summary[lang] || TOOL_GROUP_TEXT[groupId].summary.en,
      items,
    };
  }).filter((group) => group.items.length > 0);
}

function buildToolOverviewHtml(query: string, lang: keyof typeof TEXT) {
  const groups = buildFilteredToolGroups(query, lang);
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  return [
    `<div class="tool-overview-summary"><strong>${total}</strong> ${escapeHtml(TEXT[lang].calculatorCount)}</div>`,
    `<div class="tool-overview-groups">${groups.map((group) => (
      `<article class="tool-overview-card">
        <h3>${escapeHtml(group.label)}</h3>
        <p>${escapeHtml(group.summary)}</p>
        <button type="button" data-group-jump="${group.groupId}">${escapeHtml(group.items[0]?.title || group.label)}</button>
      </article>`
    )).join("")}</div>`,
  ].join("");
}

function renderToolTabs(toolId: string, query: string, lang: keyof typeof TEXT) {
  const groups = buildFilteredToolGroups(query, lang);
  if (!groups.length) {
    return `<div class="tool-nav-empty">${escapeHtml(TEXT[lang].noSearchResults)}</div>`;
  }
  return `<div class="tool-nav-groups">${groups.map((group) => (
    `<section class="tool-nav-group">
      <div class="tool-nav-group-title">${escapeHtml(group.label)}</div>
      ${group.items.map((item) => (
        `<button type="button" data-tool-id="${item.toolId}" ${item.toolId === toolId ? 'aria-current="true"' : ""}>${escapeHtml(item.title)}</button>`
      )).join("")}
    </section>`
  )).join("")}</div>`;
}

export function buildToolContextModel(toolId: string, lang: keyof typeof TEXT = "en") {
  const groupId = toolGroupId(toolId);
  const group = TOOL_GROUP_TEXT[groupId];
  const override = TOOL_CONTEXT_OVERRIDES[toolId as keyof typeof TOOL_CONTEXT_OVERRIDES] as any;
  const assets = (TOOL_REFERENCE_ASSETS[toolId as keyof typeof TOOL_REFERENCE_ASSETS] || []).map((asset) => ({
    src: asset.src,
    alt: asset.alt,
    caption: asset.caption[lang] || asset.caption.en,
  }));
  return {
    title: activeText(toolId, lang),
    groupLabel: groupLabel(groupId, lang),
    route: TOOL_CATALOG[toolId].endpoint,
    summary: override?.summary?.[lang] || override?.summary?.en || group.summary[lang] || group.summary.en,
    limitations: override?.limitations?.[lang] || override?.limitations?.en || group.limitations[lang] || group.limitations.en,
    assets,
  };
}

function renderToolContext(container: HTMLElement, toolId: string, lang: keyof typeof TEXT) {
  const context = buildToolContextModel(toolId, lang);
  container.innerHTML = [
    `<div class="tool-context-header">`,
    `<h3>${escapeHtml(context.title)}</h3>`,
    `<span class="tool-context-chip">${escapeHtml(context.groupLabel)}</span>`,
    `</div>`,
    `<div class="tool-context-grid">`,
    `<section><h4>${escapeHtml(TEXT[lang].scope)}</h4><p>${escapeHtml(context.summary)}</p></section>`,
    `<section><h4>${escapeHtml(TEXT[lang].limitations)}</h4><p>${escapeHtml(context.limitations)}</p></section>`,
    `</div>`,
    context.assets.length ? `<div class="tool-asset-gallery">${context.assets.map((asset: any) => (
      `<figure class="tool-asset-card">
        <img src="${escapeHtml(asset.src)}" alt="${escapeHtml(asset.alt)}" loading="lazy">
        <figcaption>${escapeHtml(asset.caption)}</figcaption>
      </figure>`
    )).join("")}</div>` : "",
    `<div class="tool-overview-summary"><strong>${escapeHtml(TEXT[lang].route)}:</strong> ${escapeHtml(context.route)}</div>`,
  ].join("");
}

function readUrlState() {
  const params = new URLSearchParams(globalThis.location?.search || "");
  return {
    toolId: params.get("tool") || "",
    lang: params.get("lang") || "",
    query: params.get("q") || "",
  };
}

function writeUrlState(state: { toolId: string; lang: string; query: string }) {
  if (!globalThis.history?.replaceState || !globalThis.location) return;
  const params = new URLSearchParams(globalThis.location.search);
  params.set("tool", state.toolId);
  params.set("lang", state.lang);
  if (state.query.trim()) {
    params.set("q", state.query.trim());
  } else {
    params.delete("q");
  }
  const url = `${globalThis.location.pathname}?${params.toString()}`;
  globalThis.history.replaceState({}, "", url);
}

type ContactState = {
  projectName: string;
  email: string;
  message: string;
  consent: boolean;
};

function readStoredContactState(): ContactState {
  try {
    const value = JSON.parse(localStorage.getItem(APP_STATE_STORAGE_KEY) || "null");
    if (!value || typeof value !== "object") throw new Error("missing");
    return {
      projectName: typeof value.projectName === "string" ? value.projectName : "",
      email: typeof value.email === "string" ? value.email : "",
      message: typeof value.message === "string" ? value.message : "",
      consent: value.consent === true,
    };
  } catch {
    return {
      projectName: "",
      email: "",
      message: "",
      consent: false,
    };
  }
}

function persistContactState(state: ContactState) {
  localStorage.setItem(APP_STATE_STORAGE_KEY, JSON.stringify(state));
}

function buildContactSummaryLines(response: any, lang: keyof typeof TEXT) {
  return buildResultSummaryItems(response, lang)
    .slice(0, 6)
    .map((item) => `${item.label}: ${item.value}`);
}

export function buildDirectMailto(toolId: string, lang: keyof typeof TEXT, contact: ContactState, response: any = null) {
  const toolLabel = activeText(toolId, lang);
  const projectName = contact.projectName.trim() || toolLabel;
  const summary = buildContactSummaryLines(response, lang);
  const body = [
    "Structural tools enquiry",
    "",
    `Project: ${projectName}`,
    `Tool: ${toolLabel}`,
    "",
    "Question / context:",
    contact.message.trim() || "Please review this result.",
    "",
    "Result summary:",
    ...(summary.length ? summary.map((line) => `- ${line}`) : ["- No result summary captured"]),
  ].join("\n");
  return `mailto:info@easuys.be?subject=${encodeURIComponent(`EA Suys Structural Tools - ${projectName}`)}&body=${encodeURIComponent(body)}`;
}

function loadSchemaMetadata() {
  if (schemaMetadataCache) return Promise.resolve(schemaMetadataCache);
  if (schemaMetadataPromise) return schemaMetadataPromise;
  schemaMetadataPromise = fetch(`${API_BASE_URL}/schema`)
    .then((response) => {
      if (!response.ok) throw new Error("Schema metadata unavailable.");
      return response.json();
    })
    .then((payload) => {
      schemaMetadataCache = payload;
      return payload;
    })
    .catch(() => null);
  return schemaMetadataPromise;
}

function rootFieldName(field: any) {
  const path = Array.isArray(field.path) && field.path.length ? field.path : String(field.name || "").split(".");
  return String(path[0] ?? "");
}

export function buildFriendlyFieldHelp(toolId: string, tool: any, field: any, lang: keyof typeof TEXT = "en", schemaMetadata: any = schemaMetadataCache) {
  const override = (FRIENDLY_FIELD_HELP_OVERRIDES as any)?.[toolId]?.[field.name];
  const overrideText = override?.[lang] || override?.en || "";
  const rootName = rootFieldName(field);
  const schemaField = schemaMetadata?.schemas?.[tool.endpoint]?.fields?.[rootName];
  const parts = [];
  if (overrideText) {
    parts.push(overrideText);
  } else if (schemaField?.description) {
    parts.push(schemaField.description);
  }
  if (schemaField?.required) {
    parts.push(TEXT[lang].requiredLabel);
  }
  const schemaDefault = schemaField?.default;
  if (schemaDefault !== undefined && schemaDefault !== null && schemaDefault !== "") {
    const defaultValue = typeof schemaDefault === "number" ? formatSummaryNumber(schemaDefault) : String(schemaDefault);
    const unitSuffix = schemaField?.unit ? ` ${schemaField.unit}` : "";
    parts.push(`${TEXT[lang].defaultLabel}: ${defaultValue}${unitSuffix}`);
  }
  return parts.join(" ");
}

function loadTurnstileScript(documentRef = globalThis.document) {
  if ((globalThis as any).turnstile) {
    return Promise.resolve((globalThis as any).turnstile);
  }
  if (turnstileScriptPromise) return turnstileScriptPromise;
  turnstileScriptPromise = new Promise((resolve, reject) => {
    if (!documentRef) {
      reject(new Error("No document"));
      return;
    }
    const existing = documentRef.querySelector(`script[src="${TURNSTILE_SCRIPT_URL}"]`) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve((globalThis as any).turnstile), { once: true });
      existing.addEventListener("error", () => reject(new Error("Turnstile failed to load")), { once: true });
      return;
    }
    const script = documentRef.createElement("script");
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve((globalThis as any).turnstile), { once: true });
    script.addEventListener("error", () => reject(new Error("Turnstile failed to load")), { once: true });
    documentRef.head.appendChild(script);
  });
  return turnstileScriptPromise;
}

export function buildVisualizationHtml(response: any, lang: keyof typeof TEXT) {
  if (!response?.calculator_id || !response?.result) return "";
  const cards = [];
  const beamCard = buildBeamVisualizationCard(response, lang);
  if (beamCard) cards.push(beamCard);
  const ec2Card = buildEc2VisualizationCard(response, lang);
  if (ec2Card) cards.push(ec2Card);
  const ec3Card = buildEc3VisualizationCard(response, lang);
  if (ec3Card) cards.push(ec3Card);
  const ec5Card = buildEc5VisualizationCard(response, lang);
  if (ec5Card) cards.push(ec5Card);
  const ec6Card = buildEc6VisualizationCard(response, lang);
  if (ec6Card) cards.push(ec6Card);
  if (!cards.length) return "";
  return [
    `<div class="visual-card"><h3>${escapeHtml(TEXT[lang].visuals)}</h3><div class="visual-grid">${cards.join("")}</div></div>`,
  ].join("");
}

function buildBeamVisualizationCard(response: any, lang: keyof typeof TEXT) {
  const toolId = response.calculator_id;
  const title = activeText(toolId, lang);
  if (toolId === "beam_simple_diagrams") {
    const span = numberOrNull(response.result.span_m) || numberOrNull(response.input?.span_m) || 1;
    const x = response.result.cases?.uls?.diagrams?.x_m;
    const shear = response.result.cases?.uls?.diagrams?.shear_kn;
    const moment = response.result.cases?.uls?.diagrams?.moment_knm;
    if (!Array.isArray(x) || !Array.isArray(shear) || !Array.isArray(moment)) return "";
    return `<article class="visual-card">${buildBeamSketchSvg(span, response.input)}${buildLineChartSvg(x, shear, "VEd", "kN")}${buildLineChartSvg(x, moment, "MEd", "kNm")}<p>${escapeHtml(title)}</p></article>`;
  }
  if (toolId === "beam_continuous_strip" || toolId === "beam_spring_calibration" || toolId === "beam_support_fixity_bracketing") {
    const supportPositions =
      response.result.support_positions_m
      || response.result.fixed_case?.reactions?.map((_: any, index: number) => index * ((numberOrNull(response.result.length_m) || 1) / Math.max((response.result.fixed_case?.reactions?.length || 2) - 1, 1)));
    const sample = response.result.sampled_response || response.result.average_response?.diagrams;
    if (!sample?.x_m || !sample?.moment_knm) return "";
    return `<article class="visual-card">${buildBeamSketchSvg(numberOrNull(response.result.total_length_m) || numberOrNull(response.result.span_m) || numberOrNull(response.result.length_m) || 1, response.input, Array.isArray(supportPositions) ? supportPositions : undefined)}${buildLineChartSvg(sample.x_m, sample.shear_kn, "Shear", "kN")}${buildLineChartSvg(sample.x_m, sample.moment_knm, "Moment", "kNm")}${sample.deflection_mm ? buildLineChartSvg(sample.x_m, sample.deflection_mm, "Deflection", "mm") : ""}</article>`;
  }
  return "";
}

function buildEc2VisualizationCard(response: any, lang: keyof typeof TEXT) {
  if (response.calculator_id !== "ec2_rectangular_section_capacity") return "";
  const width = numberOrNull(response.result.section_width_mm) || 1;
  const height = numberOrNull(response.result.section_height_mm) || 1;
  const layers = Array.isArray(response.result.reinforcement_layers) ? response.result.reinforcement_layers : [];
  const bars = layers.flatMap((layer: any) => distributeLayerBars(layer.n_bars, layer.depth_mm, width, layer.phi_mm));
  const svg = buildEc2SectionSvg(width, height, bars);
  const metrics = buildMetricBars([
    { label: "ULS", value: ratioPercent(response.result.applied_moment_knm, response.result.uls_capacity_knm), display: formatVisualizationRatio(response.result.ultimate_utilization) },
    { label: "SLS char.", value: ratioPercent(response.result.applied_moment_knm, response.result.sls_characteristic_capacity_knm), display: formatVisualizationRatio(response.result.sls_characteristic_utilization) },
    { label: "SLS freq.", value: ratioPercent(response.result.applied_moment_knm, response.result.sls_frequent_capacity_knm), display: formatVisualizationRatio(response.result.sls_frequent_utilization) },
  ]);
  return `<article class="visual-card">${svg}${metrics}</article>`;
}

function buildEc3VisualizationCard(response: any, lang: keyof typeof TEXT) {
  const toolId = response.calculator_id;
  if (toolId === "ec3_bolt_group_torsion") {
    const bolts = Array.isArray(response.result.bolts) ? response.result.bolts : [];
    if (!bolts.length) return "";
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(response.result.utilization_ratio), display: formatVisualizationRatio(response.result.utilization_ratio) },
      { label: "Critical bolt", value: ratioPercent(response.result.critical_bolt_force_kn, response.result.bolt_shear_resistance_kn), display: response.result.critical_bolt_id || "n/a" },
    ]);
    return `<article class="visual-card">${buildBoltGroupSvg(bolts, response.result.critical_bolt_id)}${metrics}</article>`;
  }
  if (toolId === "ec3_bolted_lap_joint") {
    const svg = buildBoltGridSvg(
      numberOrNull(response.input?.plate_width_mm) || 140,
      180,
      numberOrNull(response.input?.num_cols) || 2,
      numberOrNull(response.input?.num_rows) || 2
    );
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(response.result.utilization_ratio), display: formatVisualizationRatio(response.result.utilization_ratio) },
      { label: "Resistance", value: ratioPercent(response.input?.force_uls_kn, response.result.governing_resistance_kn), display: response.result.governing_mode || "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (toolId === "ec3_bolted_moment_connection" || toolId === "ec3_splice_moment_connection" || toolId === "ec3_double_sided_web_connection") {
    const svg = buildConnectionRowsSvg(
      Array.isArray(response.input?.bolts?.rows) ? response.input.bolts.rows : [],
      numberOrNull(response.input?.end_plate?.width_mm) || 220,
      numberOrNull(response.input?.end_plate?.height_mm) || numberOrNull(response.input?.primary?.height_mm) || 360,
      numberOrNull(response.input?.bolts?.horizontal_spacing_mm) || 100
    );
    const momentResistance =
      response.result.mj_rd_knm
      ?? response.result.moment_resistance_knm
      ?? response.result.moment_resistance_knm
      ?? null;
    const utilization =
      response.result.overall_utilization
      ?? response.result.max_utilization
      ?? response.result.utilization_ratio;
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(utilization), display: formatVisualizationRatio(utilization) },
      {
        label: "Moment",
        value: ratioPercent(response.input?.loads?.moment_knm, momentResistance),
        display: momentResistance !== null ? `${formatSummaryNumber(momentResistance)} kNm` : (response.result.critical_component || "n/a"),
      },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (toolId === "ec3_fillet_weld") {
    const svg = buildWeldStripSvg(numberOrNull(response.input?.effective_length_leff_mm) || 120, numberOrNull(response.input?.throat_thickness_a_mm) || 5);
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(response.result.utilization_ratio), display: formatVisualizationRatio(response.result.utilization_ratio) },
      { label: "Method", value: response.result.verification_method === "directional" ? 100 : 70, display: response.result.verification_method || "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (toolId === "ec3_lateral_torsional_buckling") {
    const svg = buildISectionSvg(response.input?.section || {});
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(response.result.utilization_ratio), display: formatVisualizationRatio(response.result.utilization_ratio) },
      { label: "Chi LT", value: utilizationPercent(response.result.chi_lt_modified ?? response.result.chi_lt), display: response.result.chi_lt_modified !== undefined ? formatSummaryNumber(response.result.chi_lt_modified) : formatSummaryNumber(response.result.chi_lt) },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (toolId === "ec3_steel_section_check" || toolId === "ec3_profile_optimizer") {
    const section = response.result.optimized_profile?.section || response.input?.section || {};
    const deflection = response.result.deflection_check?.deflection_mm || response.result.optimized_profile?.deflection_check?.deflection_mm;
    const deflectionLimit = response.result.deflection_check?.limit_mm || response.result.optimized_profile?.deflection_check?.limit_mm;
    const utilization = response.result.max_utilization ?? response.result.optimized_profile?.max_utilization;
    const critical = response.result.critical_check ?? response.result.optimized_profile?.critical_check ?? "n/a";
    const svg = buildISectionSvg(section);
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(utilization), display: formatVisualizationRatio(utilization) },
      { label: "Deflection", value: ratioPercent(deflection, deflectionLimit), display: deflection !== undefined ? `${formatSummaryNumber(deflection)} mm` : critical },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (toolId === "ec3_plate_tension") {
    const svg = buildPlateSectionSvg(numberOrNull(response.input?.width_mm) || 120, numberOrNull(response.input?.thickness_mm) || 10);
    const metrics = buildMetricBars([
      { label: "Utilization", value: response.result.utilization_percent || ratioPercent(response.input?.n_ed_kn, response.result.n_rd_kn), display: `${formatSummaryNumber(response.result.utilization_percent || 0)}%` },
      { label: "Resistance", value: ratioPercent(response.input?.n_ed_kn, response.result.n_rd_kn), display: response.result.governing_criterion || "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  return "";
}

function buildEc5VisualizationCard(response: any, lang: keyof typeof TEXT) {
  if (response.calculator_id === "ec5_timber_beam_check") {
    const svg = buildRectSectionSvg(numberOrNull(response.input?.b_mm) || 1, numberOrNull(response.input?.h_mm) || 1, "#d6a85a");
    const metrics = buildMetricBars([
      { label: "Bending", value: utilizationPercent(response.result.uc_bending), display: formatVisualizationRatio(response.result.uc_bending) },
      { label: "Shear", value: utilizationPercent(response.result.uc_shear), display: formatVisualizationRatio(response.result.uc_shear) },
      { label: "Final defl.", value: ratioPercent(response.result.w_fin_mm, response.result.w_fin_lim_mm), display: response.result.w_fin_mm !== undefined ? `${formatSummaryNumber(response.result.w_fin_mm)} mm` : "n/a" },
      { label: "Frequency", value: inverseLimitPercent(response.result.f1_hz, 8), display: response.result.f1_hz !== undefined ? `${formatSummaryNumber(response.result.f1_hz)} Hz` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_axial_screw") {
    const svg = buildFastenerArraySvg(numberOrNull(response.input?.n) || 4, numberOrNull(response.input?.t_timber) || 140, 160, "screw");
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(response.result.utilization_ratio), display: formatVisualizationRatio(response.result.utilization_ratio) },
      { label: "n eff.", value: ratioPercent(response.result.n_effective, response.input?.n), display: response.result.governing_failure_mode || "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_steel_timber_screw_connection"
    || response.calculator_id === "ec5_steel_timber_double_shear_connection"
    || response.calculator_id === "ec5_steel_timber_five_member_connection"
    || response.calculator_id === "ec5_timber_timber_single_shear_connection"
    || response.calculator_id === "ec5_timber_timber_double_shear_connection"
    || response.calculator_id === "ec5_toothed_plate_connection") {
    const svg = buildFastenerArraySvg(numberOrNull(response.input?.n) || 4, 180, 170, "bolt");
    const applied =
      response.input?.f_d_kn
      ?? response.input?.f_v_ed_kn
      ?? null;
    const resistance =
      response.result.r_d_kn
      ?? response.result.r_k_kn
      ?? null;
    const utilization = response.result.utilization_ratio;
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(utilization), display: formatVisualizationRatio(utilization) },
      { label: "Resistance", value: ratioPercent(applied, resistance), display: response.result.governing_mode || response.result.overall_status || "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_stabilizing_force") {
    const svg = buildRectSectionSvg(numberOrNull(response.input?.b_mm) || 75, numberOrNull(response.input?.h_mm) || 225, "#d6a85a");
    const metrics = buildMetricBars([
      { label: "kcrit", value: utilizationPercent(response.result.k_crit), display: response.result.k_crit !== undefined ? formatSummaryNumber(response.result.k_crit) : "n/a" },
      { label: "Force", value: ratioPercent(response.result.f_d_kn, 1), display: response.result.stabilizing_force_required ? `${formatSummaryNumber(response.result.f_d_kn)} kN` : "Not required" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_joist_spacing_optimizer") {
    const recommended = response.result.recommended_result || {};
    const svg = buildRectSectionSvg(numberOrNull(response.input?.b_mm) || 75, numberOrNull(response.input?.h_mm) || 225, "#d6a85a");
    const metrics = buildMetricBars([
      { label: "Spacing", value: ratioPercent(response.result.recommended_spacing_m, response.result.max_adequate_spacing_m), display: response.result.recommended_spacing_cm !== undefined ? `${formatSummaryNumber(response.result.recommended_spacing_cm)} cm` : "n/a" },
      { label: "Frequency", value: inverseLimitPercent(recommended.f1_hz, 8), display: recommended.f1_hz !== undefined ? `${formatSummaryNumber(recommended.f1_hz)} Hz` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_osb_composite_vibration") {
    const svg = buildRectSectionSvg(numberOrNull(response.input?.b_mm) || 75, numberOrNull(response.input?.h_mm) || 225, "#d6a85a");
    const metrics = buildMetricBars([
      { label: "Base defl.", value: ratioPercent(response.result.base_deflection_mm, response.input?.limit_mm), display: response.result.base_deflection_mm !== undefined ? `${formatSummaryNumber(response.result.base_deflection_mm)} mm` : "n/a" },
      { label: "Composite defl.", value: ratioPercent(response.result.composite_deflection_mm, response.input?.limit_mm), display: response.result.composite_deflection_mm !== undefined ? `${formatSummaryNumber(response.result.composite_deflection_mm)} mm` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_timber_floor_vibration") {
    const svg = buildRectSectionSvg(numberOrNull(response.input?.b_mm) || 1, numberOrNull(response.input?.h_mm) || 1, "#d6a85a");
    const metrics = buildMetricBars([
      { label: "Point load", value: ratioPercent(response.result.w_point_load_mm, response.result.deflection_limit_mm), display: response.result.w_point_load_mm !== undefined ? `${formatSummaryNumber(response.result.w_point_load_mm)} mm` : "n/a" },
      { label: "Frequency", value: inverseLimitPercent(response.result.f1_hz, response.result.frequency_limit_hz), display: response.result.f1_hz !== undefined ? `${formatSummaryNumber(response.result.f1_hz)} Hz` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_timber_beam_fire_check") {
    const originalWidth = numberOrNull(response.input?.b_mm) || 1;
    const originalHeight = numberOrNull(response.input?.h_mm) || 1;
    const residualWidth = numberOrNull(response.result.b_fi_mm) || 1;
    const residualHeight = numberOrNull(response.result.h_fi_mm) || 1;
    const svg = buildResidualSectionSvg(originalWidth, originalHeight, residualWidth, residualHeight);
    const metrics = buildMetricBars([
      { label: "Fire bending", value: utilizationPercent(response.result.uc_bending_fire), display: formatVisualizationRatio(response.result.uc_bending_fire) },
      { label: "Fire shear", value: utilizationPercent(response.result.uc_shear_fire), display: formatVisualizationRatio(response.result.uc_shear_fire) },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_timber_contact_moment_joint") {
    const svg = buildJointSectionSvg(
      numberOrNull(response.input?.interface?.width_mm) || 160,
      numberOrNull(response.input?.interface?.height_mm) || 360,
      Array.isArray(response.input?.screws) ? response.input.screws : []
    );
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(response.result.utilization_ratio), display: formatVisualizationRatio(response.result.utilization_ratio) },
      { label: "Compression", value: ratioPercent(response.result.compression_depth_mm, response.input?.interface?.height_mm), display: response.result.compression_depth_mm !== undefined ? `${formatSummaryNumber(response.result.compression_depth_mm)} mm` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec5_timber_member_uls_6_component") {
    const svg = buildRectSectionSvg(numberOrNull(response.input?.b_mm) || 120, numberOrNull(response.input?.h_mm) || 360, "#d6a85a");
    const metrics = buildMetricBars([
      { label: "Utilization", value: utilizationPercent(response.result.max_utilization), display: formatVisualizationRatio(response.result.max_utilization) },
      { label: "kcrit", value: utilizationPercent(response.result.k_crit), display: response.result.critical_check || "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  return "";
}

function buildEc6VisualizationCard(response: any, lang: keyof typeof TEXT) {
  if (response.calculator_id === "ec6_masonry_contact_pressure") {
    const svg = buildMasonryBearingSvg(
      numberOrNull(response.result.beam_width_mm) || 1,
      numberOrNull(response.result.support_length_mm) || 1,
      numberOrNull(response.result.required_length_mm) || 1
    );
    const metrics = buildMetricBars([
      { label: "Contact pressure", value: ratioPercent(response.result.sigma_d_mpa, response.result.f_rdc_mpa), display: response.result.sigma_d_mpa !== undefined ? `${formatSummaryNumber(response.result.sigma_d_mpa)} MPa` : "n/a" },
      { label: "Support length", value: ratioPercent(response.result.required_length_mm, response.result.support_length_mm), display: response.result.required_length_mm !== undefined ? `${formatSummaryNumber(response.result.required_length_mm)} mm req.` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec6_beam_bearing") {
    const svg = buildMasonryBearingSvg(
      numberOrNull(response.input?.bearing_width_mm) || 1,
      numberOrNull(response.input?.bearing_length_mm) || 1,
      numberOrNull(response.result.effective_length_mm) || 1
    );
    const metrics = buildMetricBars([
      { label: "Bearing stress", value: ratioPercent(response.result.contact_pressure_mpa, response.result.design_bearing_resistance_mpa), display: response.result.contact_pressure_mpa !== undefined ? `${formatSummaryNumber(response.result.contact_pressure_mpa)} MPa` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec6_masonry_strength") {
    const svg = buildWallPanelSvg(180, 120);
    const metrics = buildMetricBars([
      { label: "fd / fk", value: ratioPercent(response.result.fd_mpa, response.result.fk_mpa), display: response.result.fd_mpa !== undefined ? `${formatSummaryNumber(response.result.fd_mpa)} MPa` : "n/a" },
      { label: "k factor", value: utilizationPercent(response.result.k_factor), display: response.result.k_factor !== undefined ? formatSummaryNumber(response.result.k_factor) : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec6_inplane_shear_wall") {
    const svg = buildWallPanelSvg(numberOrNull(response.input?.length_mm) || 1200, 220, numberOrNull(response.result.compressed_length_lc_mm) || numberOrNull(response.input?.length_mm) || 1200);
    const metrics = buildMetricBars([
      { label: "Bending", value: utilizationPercent(response.result.bending_utilization_ratio), display: formatVisualizationRatio(response.result.bending_utilization_ratio) },
      { label: "Shear", value: utilizationPercent(response.result.shear_utilization_ratio), display: formatVisualizationRatio(response.result.shear_utilization_ratio) },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec6_lateral_wall_resistance") {
    const svg = buildWallPanelSvg((numberOrNull(response.input?.length_m) || 4) * 1000, (numberOrNull(response.input?.height_m) || 3) * 1000);
    const metrics = buildMetricBars([
      { label: "Axis 1", value: utilizationPercent(response.result.axis_1_utilization_ratio), display: formatVisualizationRatio(response.result.axis_1_utilization_ratio) },
      { label: "Axis 2", value: utilizationPercent(response.result.axis_2_utilization_ratio), display: formatVisualizationRatio(response.result.axis_2_utilization_ratio) },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  if (response.calculator_id === "ec6_masonry_horizontal_capacity") {
    const svg = buildWallPanelSvg(numberOrNull(response.input?.length_mm) || 660, numberOrNull(response.input?.height_mm) || 1450, numberOrNull(response.result.effective_compressed_length_mm) || numberOrNull(response.input?.length_mm) || 660);
    const metrics = buildMetricBars([
      { label: "Bending cap.", value: ratioPercent(response.result.bending_capacity_per_wall_kn, response.result.shear_capacity_per_wall_kn), display: response.result.governing_mode || "n/a" },
      { label: "Combined cap.", value: ratioPercent(response.result.combined_capacity_kn, response.result.combined_capacity_kn), display: response.result.combined_capacity_kn !== undefined ? `${formatSummaryNumber(response.result.combined_capacity_kn)} kN` : "n/a" },
    ]);
    return `<article class="visual-card">${svg}${metrics}</article>`;
  }
  return "";
}

function buildMetricBars(metrics: Array<{ label: string; value: number; display: string }>) {
  return `<div class="visual-metrics">${metrics.map((metric) => {
    const normalized = Math.max(0, Math.min(metric.value, 150));
    return `<div class="visual-metric">
      <div class="visual-metric-label">${escapeHtml(metric.label)}</div>
      <div class="visual-metric-track"><div class="visual-metric-fill ${normalized > 100 ? "is-danger" : ""}" style="width:${normalized}%"></div></div>
      <div class="visual-metric-value">${escapeHtml(metric.display)}</div>
    </div>`;
  }).join("")}</div>`;
}

function buildLineChartSvg(xValues: any[], yValues: any[], title: string, unit: string) {
  if (!Array.isArray(xValues) || !Array.isArray(yValues) || !xValues.length || xValues.length !== yValues.length) return "";
  const width = 280;
  const height = 120;
  const padding = 16;
  const minX = Math.min(...xValues.map(Number));
  const maxX = Math.max(...xValues.map(Number));
  const minY = Math.min(...yValues.map(Number));
  const maxY = Math.max(...yValues.map(Number));
  const xSpan = maxX - minX || 1;
  const ySpan = maxY - minY || 1;
  const points = xValues.map((x, index) => {
    const px = padding + ((Number(x) - minX) / xSpan) * (width - 2 * padding);
    const py = height - padding - ((Number(yValues[index]) - minY) / ySpan) * (height - 2 * padding);
    return `${roundVisual(px, 2)},${roundVisual(py, 2)}`;
  }).join(" ");
  const zeroY = height - padding - ((0 - minY) / ySpan) * (height - 2 * padding);
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(title)}">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#b9c3cb" stroke-width="1"></line>
      <line x1="${padding}" y1="${Math.max(padding, Math.min(height - padding, zeroY))}" x2="${width - padding}" y2="${Math.max(padding, Math.min(height - padding, zeroY))}" stroke="#e1cba8" stroke-width="1" stroke-dasharray="3 3"></line>
      <polyline fill="none" stroke="#2b4c65" stroke-width="2" points="${points}"></polyline>
      <text x="${padding}" y="14" font-size="11" fill="#5a6772">${escapeHtml(title)} (${escapeHtml(unit)})</text>
    </svg>`;
}

function buildBeamSketchSvg(span: number, input: any, supportPositions?: number[]) {
  const width = 280;
  const height = 90;
  const padding = 20;
  const supports = supportPositions?.length
    ? supportPositions
    : [0, span];
  const loads = [
    ...(Array.isArray(input?.point_loads) ? input.point_loads.map((load: any) => ({ position: Number(load.position_m), type: "point" })) : []),
    ...(Array.isArray(input?.distributed_loads) ? input.distributed_loads.map((load: any) => ({ position: Number(load.start_m), type: "distributed" })) : []),
    ...(Array.isArray(input?.uniform_loads) && input.uniform_loads.length ? [{ position: span / 2, type: "uniform" }] : []),
    ...(typeof input?.uniform_load_kn_per_m === "number" ? [{ position: span / 2, type: "uniform" }] : []),
  ];
  const lineY = 35;
  const supportSvg = supports.map((position) => {
    const x = padding + (position / span) * (width - 2 * padding);
    return `<g><line x1="${x}" y1="${lineY}" x2="${x}" y2="${lineY + 20}" stroke="#1a232b" stroke-width="1.5"></line><polygon points="${x - 8},${lineY + 28} ${x + 8},${lineY + 28} ${x},${lineY + 20}" fill="#2b4c65"></polygon></g>`;
  }).join("");
  const loadSvg = loads.slice(0, 6).map((load) => {
    const x = padding + (Math.max(0, Math.min(span, load.position)) / span) * (width - 2 * padding);
    return `<g><line x1="${x}" y1="${8}" x2="${x}" y2="${24}" stroke="#a5513d" stroke-width="1.5"></line><polygon points="${x - 4},24 ${x + 4},24 ${x},31" fill="#a5513d"></polygon></g>`;
  }).join("");
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Beam sketch">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <line x1="${padding}" y1="${lineY}" x2="${width - padding}" y2="${lineY}" stroke="#1a232b" stroke-width="3"></line>
      ${supportSvg}
      ${loadSvg}
      <text x="${padding}" y="${height - 10}" font-size="11" fill="#5a6772">Span ${formatSummaryNumber(span)} m</text>
    </svg>`;
}

function buildRectSectionSvg(widthMm: number, heightMm: number, fill = "#d6a85a") {
  const width = 220;
  const height = 220;
  const pad = 24;
  const scale = Math.min((width - 2 * pad) / widthMm, (height - 2 * pad) / heightMm);
  const rectW = widthMm * scale;
  const rectH = heightMm * scale;
  const x = (width - rectW) / 2;
  const y = (height - rectH) / 2;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Section sketch">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${x}" y="${y}" width="${rectW}" height="${rectH}" fill="${fill}" fill-opacity="0.35" stroke="#8b5e00" stroke-width="2"></rect>
      <text x="${width / 2}" y="${y - 8}" text-anchor="middle" font-size="11" fill="#5a6772">b = ${formatSummaryNumber(widthMm)} mm</text>
      <text x="${x + rectW + 8}" y="${height / 2}" font-size="11" fill="#5a6772">h = ${formatSummaryNumber(heightMm)} mm</text>
    </svg>`;
}

function buildResidualSectionSvg(widthMm: number, heightMm: number, residualWidthMm: number, residualHeightMm: number) {
  const width = 220;
  const height = 220;
  const pad = 24;
  const scale = Math.min((width - 2 * pad) / widthMm, (height - 2 * pad) / heightMm);
  const outerW = widthMm * scale;
  const outerH = heightMm * scale;
  const innerW = residualWidthMm * scale;
  const innerH = residualHeightMm * scale;
  const x = (width - outerW) / 2;
  const y = (height - outerH) / 2;
  const innerX = (width - innerW) / 2;
  const innerY = (height - innerH) / 2;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Residual section">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${x}" y="${y}" width="${outerW}" height="${outerH}" fill="#f2e1cf" stroke="#bf7b4a" stroke-dasharray="4 3" stroke-width="2"></rect>
      <rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" fill="#d6a85a" fill-opacity="0.45" stroke="#8b5e00" stroke-width="2"></rect>
    </svg>`;
}

function distributeLayerBars(count: number, depthMm: number, widthMm: number, phiMm: number) {
  if (!count || count <= 0) return [];
  if (count === 1) {
    return [{ x: widthMm / 2, y: depthMm, r: Math.max(4, phiMm / 2) }];
  }
  return Array.from({ length: count }, (_, index) => ({
    x: (widthMm * 0.15) + (index * (widthMm * 0.7) / (count - 1)),
    y: depthMm,
    r: Math.max(4, phiMm / 2),
  }));
}

function buildEc2SectionSvg(widthMm: number, heightMm: number, bars: Array<{ x: number; y: number; r: number }>) {
  const width = 220;
  const height = 220;
  const pad = 24;
  const scale = Math.min((width - 2 * pad) / widthMm, (height - 2 * pad) / heightMm);
  const rectW = widthMm * scale;
  const rectH = heightMm * scale;
  const x = (width - rectW) / 2;
  const y = (height - rectH) / 2;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="EC2 section">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${x}" y="${y}" width="${rectW}" height="${rectH}" fill="#e4d9cb" stroke="#7b6448" stroke-width="2"></rect>
      ${bars.map((bar) => {
        const cx = x + bar.x * scale;
        const cy = y + (heightMm - bar.y) * scale;
        return `<circle cx="${cx}" cy="${cy}" r="${Math.max(4, bar.r * scale * 0.5)}" fill="#a5513d"></circle>`;
      }).join("")}
    </svg>`;
}

function buildBoltGroupSvg(bolts: any[], criticalBoltId: string) {
  const width = 220;
  const height = 220;
  const pad = 26;
  const xs = bolts.map((bolt) => Number(bolt.x_mm));
  const zs = bolts.map((bolt) => Number(bolt.z_mm));
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minZ = Math.min(...zs);
  const maxZ = Math.max(...zs);
  const spanX = maxX - minX || 1;
  const spanZ = maxZ - minZ || 1;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Bolt group">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${pad}" y="${pad}" width="${width - 2 * pad}" height="${height - 2 * pad}" fill="#f8f5ee" stroke="#d6d1c6"></rect>
      ${bolts.map((bolt) => {
        const cx = pad + ((Number(bolt.x_mm) - minX) / spanX) * (width - 2 * pad);
        const cy = height - pad - ((Number(bolt.z_mm) - minZ) / spanZ) * (height - 2 * pad);
        const critical = bolt.id === criticalBoltId;
        return `<g>
          <circle cx="${cx}" cy="${cy}" r="${critical ? 10 : 8}" fill="${critical ? "#a5513d" : "#2b4c65"}" fill-opacity="0.85"></circle>
          <text x="${cx}" y="${cy + 4}" text-anchor="middle" font-size="8" fill="#ffffff">${escapeHtml(String(bolt.id || ""))}</text>
        </g>`;
      }).join("")}
    </svg>`;
}

function buildBoltGridSvg(widthMm: number, heightMm: number, cols: number, rows: number) {
  const bolts = [];
  const safeCols = Math.max(1, Math.round(cols));
  const safeRows = Math.max(1, Math.round(rows));
  for (let row = 0; row < safeRows; row += 1) {
    for (let col = 0; col < safeCols; col += 1) {
      bolts.push({
        id: `${row + 1}-${col + 1}`,
        x_mm: safeCols === 1 ? widthMm / 2 : (widthMm * 0.18) + (col * (widthMm * 0.64) / (safeCols - 1)),
        z_mm: safeRows === 1 ? heightMm / 2 : (heightMm * 0.18) + (row * (heightMm * 0.64) / (safeRows - 1)),
      });
    }
  }
  return buildBoltGroupSvg(bolts, "");
}

function buildConnectionRowsSvg(rows: any[], plateWidthMm: number, plateHeightMm: number, horizontalSpacingMm: number) {
  const width = 220;
  const height = 240;
  const pad = 24;
  const safePlateWidth = Math.max(plateWidthMm, 1);
  const safePlateHeight = Math.max(plateHeightMm, 1);
  const rowPositions = rows.map((row) => Number(row.vertical_position_mm)).filter(Number.isFinite);
  const minRow = Math.min(...rowPositions, 0);
  const maxRow = Math.max(...rowPositions, safePlateHeight);
  const rowSpan = maxRow - minRow || 1;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Connection bolt rows">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${pad}" y="${pad}" width="${width - 2 * pad}" height="${height - 2 * pad}" fill="#f8f5ee" stroke="#d6d1c6"></rect>
      ${rows.map((row) => {
        const count = Math.max(1, Number(row.number_of_bolts) || 2);
        const y = height - pad - ((Number(row.vertical_position_mm || 0) - minRow) / rowSpan) * (height - 2 * pad);
        return Array.from({ length: count }, (_, index) => {
          const x = count === 1
            ? width / 2
            : (width / 2) - ((horizontalSpacingMm / safePlateWidth) * (width - 2 * pad) / 2) + (index * ((horizontalSpacingMm / safePlateWidth) * (width - 2 * pad))) / (count - 1);
          return `<circle cx="${roundVisual(x, 2)}" cy="${roundVisual(y, 2)}" r="8" fill="#2b4c65"></circle>`;
        }).join("");
      }).join("")}
    </svg>`;
}

function buildWeldStripSvg(lengthMm: number, throatMm: number) {
  const width = 240;
  const height = 120;
  const pad = 20;
  const weldWidth = Math.max(60, Math.min(width - 2 * pad, lengthMm * 0.8));
  const weldHeight = Math.max(14, Math.min(40, throatMm * 3));
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Weld strip">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${(width - weldWidth) / 2}" y="${(height - weldHeight) / 2}" width="${weldWidth}" height="${weldHeight}" fill="#a5513d" fill-opacity="0.72"></rect>
      <text x="${width / 2}" y="${height - 16}" text-anchor="middle" font-size="11" fill="#5a6772">leff = ${formatSummaryNumber(lengthMm)} mm, a = ${formatSummaryNumber(throatMm)} mm</text>
    </svg>`;
}

function buildISectionSvg(section: any) {
  const h = Math.max(1, numberOrNull(section?.h_mm) || 240);
  const b = Math.max(1, numberOrNull(section?.b_mm) || 120);
  const tw = Math.max(1, numberOrNull(section?.tw_mm) || 6);
  const tf = Math.max(1, numberOrNull(section?.tf_mm) || 10);
  const width = 220;
  const height = 240;
  const pad = 22;
  const scale = Math.min((width - 2 * pad) / b, (height - 2 * pad) / h);
  const flangeW = b * scale;
  const flangeT = tf * scale;
  const webT = tw * scale;
  const webH = Math.max(10, (h - 2 * tf) * scale);
  const x = (width - flangeW) / 2;
  const y = (height - (2 * flangeT + webH)) / 2;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Steel I-section">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${x}" y="${y}" width="${flangeW}" height="${flangeT}" fill="#8c9dad" stroke="#2b4c65"></rect>
      <rect x="${(width - webT) / 2}" y="${y + flangeT}" width="${webT}" height="${webH}" fill="#8c9dad" stroke="#2b4c65"></rect>
      <rect x="${x}" y="${y + flangeT + webH}" width="${flangeW}" height="${flangeT}" fill="#8c9dad" stroke="#2b4c65"></rect>
    </svg>`;
}

function buildPlateSectionSvg(widthMm: number, thicknessMm: number) {
  const width = 220;
  const height = 180;
  const pad = 24;
  const safeWidth = Math.max(widthMm, 1);
  const safeThickness = Math.max(thicknessMm, 1);
  const scale = Math.min((width - 2 * pad) / safeWidth, (height - 2 * pad) / Math.max(safeThickness * 8, 30));
  const rectW = safeWidth * scale;
  const rectH = Math.max(20, safeThickness * scale * 6);
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Steel plate">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${(width - rectW) / 2}" y="${(height - rectH) / 2}" width="${rectW}" height="${rectH}" fill="#d8dde2" stroke="#2b4c65" stroke-width="2"></rect>
      <text x="${width / 2}" y="${height - 14}" text-anchor="middle" font-size="11" fill="#5a6772">${formatSummaryNumber(widthMm)} x ${formatSummaryNumber(thicknessMm)} mm</text>
    </svg>`;
}

function buildFastenerArraySvg(count: number, widthMm: number, heightMm: number, kind = "bolt") {
  const safeCount = Math.max(1, Math.round(count));
  const cols = Math.ceil(Math.sqrt(safeCount));
  const rows = Math.ceil(safeCount / cols);
  const width = 220;
  const height = 180;
  const pad = 24;
  const color = kind === "screw" ? "#a5513d" : "#2b4c65";
  const bolts = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (bolts.length >= safeCount) break;
      bolts.push({
        id: bolts.length + 1,
        x_mm: cols === 1 ? widthMm / 2 : (widthMm * 0.18) + (col * (widthMm * 0.64) / (cols - 1)),
        z_mm: rows === 1 ? heightMm / 2 : (heightMm * 0.18) + (row * (heightMm * 0.64) / (rows - 1)),
      });
    }
  }
  const xs = bolts.map((bolt) => bolt.x_mm);
  const zs = bolts.map((bolt) => bolt.z_mm);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minZ = Math.min(...zs);
  const maxZ = Math.max(...zs);
  const spanX = maxX - minX || 1;
  const spanZ = maxZ - minZ || 1;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Fastener layout">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${pad}" y="${pad}" width="${width - 2 * pad}" height="${height - 2 * pad}" fill="#f8f5ee" stroke="#d6d1c6"></rect>
      ${bolts.map((bolt) => {
        const cx = pad + ((bolt.x_mm - minX) / spanX) * (width - 2 * pad);
        const cy = height - pad - ((bolt.z_mm - minZ) / spanZ) * (height - 2 * pad);
        return `<circle cx="${roundVisual(cx, 2)}" cy="${roundVisual(cy, 2)}" r="8" fill="${color}" fill-opacity="0.85"></circle>`;
      }).join("")}
    </svg>`;
}

function buildJointSectionSvg(widthMm: number, heightMm: number, screws: any[]) {
  const width = 220;
  const height = 240;
  const pad = 22;
  const scale = Math.min((width - 2 * pad) / Math.max(widthMm, 1), (height - 2 * pad) / Math.max(heightMm, 1));
  const rectW = widthMm * scale;
  const rectH = heightMm * scale;
  const x = (width - rectW) / 2;
  const y = (height - rectH) / 2;
  const maxAbsY = Math.max(...screws.map((screw) => Math.abs(Number(screw.y_mm) || 0)), 1);
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Timber joint section">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${x}" y="${y}" width="${rectW}" height="${rectH}" fill="#f2e1cf" stroke="#8b5e00" stroke-width="2"></rect>
      ${screws.map((screw, index) => {
        const offsetY = ((Number(screw.y_mm) || 0) / maxAbsY) * (rectH * 0.36);
        return `<circle cx="${width / 2 + (index % 2 === 0 ? -rectW * 0.18 : rectW * 0.18)}" cy="${height / 2 - offsetY}" r="5.5" fill="#a5513d"></circle>`;
      }).join("")}
    </svg>`;
}

function buildMasonryBearingSvg(widthMm: number, supportLengthMm: number, requiredLengthMm: number) {
  const width = 240;
  const height = 140;
  const pad = 18;
  const scale = Math.min((width - 2 * pad) / Math.max(widthMm, requiredLengthMm, 1), 0.7);
  const beamW = widthMm * scale;
  const supportW = supportLengthMm * scale;
  const requiredW = requiredLengthMm * scale;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Masonry bearing">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${(width - supportW) / 2}" y="78" width="${supportW}" height="26" fill="#d7c4ae" stroke="#7b6448"></rect>
      <rect x="${(width - beamW) / 2}" y="40" width="${beamW}" height="22" fill="#8c9dad" stroke="#2b4c65"></rect>
      <line x1="${(width - requiredW) / 2}" y1="112" x2="${(width + requiredW) / 2}" y2="112" stroke="#a5513d" stroke-width="3"></line>
      <text x="${width / 2}" y="128" text-anchor="middle" font-size="11" fill="#5a6772">required ${formatSummaryNumber(requiredLengthMm)} mm</text>
    </svg>`;
}

function buildWallPanelSvg(widthMm: number, heightMm: number, compressedWidthMm?: number) {
  const width = 240;
  const height = 180;
  const pad = 18;
  const safeWidth = Math.max(widthMm, 1);
  const safeHeight = Math.max(heightMm, 1);
  const scale = Math.min((width - 2 * pad) / safeWidth, (height - 2 * pad) / safeHeight);
  const panelW = safeWidth * scale;
  const panelH = safeHeight * scale;
  const x = (width - panelW) / 2;
  const y = (height - panelH) / 2;
  const compressionW = compressedWidthMm ? Math.max(8, Math.min(panelW, compressedWidthMm * scale)) : 0;
  return `
    <svg class="visual-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Wall panel">
      <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff"></rect>
      <rect x="${x}" y="${y}" width="${panelW}" height="${panelH}" fill="#d7c4ae" stroke="#7b6448" stroke-width="2"></rect>
      ${compressionW ? `<rect x="${x}" y="${y}" width="${compressionW}" height="${panelH}" fill="#a5513d" fill-opacity="0.2"></rect>` : ""}
    </svg>`;
}

function ratioPercent(actual: any, limit: any) {
  const numerator = numberOrNull(actual);
  const denominator = numberOrNull(limit);
  if (numerator === null || denominator === null || Math.abs(denominator) < 1e-9) return 0;
  return (numerator / denominator) * 100;
}

function inverseLimitPercent(actual: any, limit: any) {
  const numerator = numberOrNull(actual);
  const denominator = numberOrNull(limit);
  if (numerator === null || denominator === null || Math.abs(numerator) < 1e-9) return 0;
  return (denominator / numerator) * 100;
}

function utilizationPercent(value: any) {
  const numeric = numberOrNull(value);
  return numeric === null ? 0 : numeric * 100;
}

function formatVisualizationRatio(value: any) {
  const numeric = numberOrNull(value);
  return numeric === null ? "n/a" : `${formatSummaryNumber(numeric)} (${formatSummaryNumber(numeric * 100)}%)`;
}

function numberOrNull(value: any) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function roundVisual(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

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
  const visuals = buildVisualizationHtml(response, lang as keyof typeof TEXT);
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
    "    .visual-card { border: 1px solid #d8d3c5; border-radius: 10px; padding: 12px; margin-top: 12px; }",
    "    .visual-grid { display: grid; gap: 12px; }",
    "    .visual-svg { display: block; width: 100%; height: auto; }",
    "    .visual-metrics { display: grid; gap: 8px; margin-top: 10px; }",
    "    .visual-metric-label { color: #6b7280; font-size: 0.85rem; font-weight: 700; }",
    "    .visual-metric-track { background: rgba(43,76,101,0.12); border-radius: 999px; height: 10px; overflow: hidden; }",
    "    .visual-metric-fill { background: #2b4c65; height: 100%; }",
    "    .visual-metric-fill.is-danger { background: #a5513d; }",
    "    .visual-metric-value { font-weight: 700; margin-top: 3px; }",
    "  </style>",
    "</head>",
    "<body>",
    `  <h1>${escapeHtml(report.title)}</h1>`,
    `  <dl>${report.details.map((item) => `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`).join("")}</dl>`,
    `  <section class="summary"><h2>${escapeHtml(report.summaryHeading)}</h2><ul>${report.summaryItems.map((item) => `<li>${escapeHtml(`${item.label}: ${item.value}`)}</li>`).join("")}</ul></section>`,
    visuals ? `  <section class="detail-section"><h2>${escapeHtml(TEXT[lang]?.visuals || TEXT.en.visuals)}</h2>${visuals}</section>` : "",
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
  const urlState = readUrlState();
  const storedContactState = readStoredContactState();
  const state = {
    lang: (urlState.lang && urlState.lang in TEXT ? urlState.lang : "en") as keyof typeof TEXT,
    toolId: TOOL_CATALOG[urlState.toolId] ? urlState.toolId : "ec5_timber_contact_moment_joint",
    query: urlState.query || "",
    contact: storedContactState,
    turnstileToken: "",
  };
  const overview = documentRef.querySelector("[data-tool-overview]") as HTMLElement;
  const tabs = documentRef.querySelector("[data-tool-tabs]") as HTMLElement;
  const tabsMeta = documentRef.querySelector("[data-tool-nav-meta]") as HTMLElement;
  const searchLabel = documentRef.querySelector("[data-tool-search-label]") as HTMLElement;
  const searchInput = documentRef.querySelector("[data-tool-search]") as HTMLInputElement;
  const input = documentRef.querySelector("[data-json-input]") as HTMLTextAreaElement;
  const output = documentRef.querySelector("[data-result-output]") as HTMLElement;
  const resultSummary = documentRef.querySelector("[data-result-summary]") as HTMLElement;
  const report = documentRef.querySelector("[data-report]") as HTMLElement;
  const context = documentRef.querySelector("[data-tool-context]") as HTMLElement;
  const visual = documentRef.querySelector("[data-result-visual]") as HTMLElement;
  const contact = documentRef.querySelector("[data-result-contact]") as HTMLElement;
  const downloadButton = documentRef.querySelector("[data-download]") as HTMLButtonElement;
  const downloadHtmlButton = documentRef.querySelector("[data-download-html]") as HTMLButtonElement;
  const printButton = documentRef.querySelector("[data-print]") as HTMLButtonElement;
  const form = documentRef.querySelector("[data-calculator-form]") as HTMLFormElement;
  const friendlyForm = documentRef.querySelector("[data-friendly-form]") as HTMLElement;
  let lastResponse = null as any;

  function renderNavigation() {
    const groups = buildFilteredToolGroups(state.query, state.lang);
    const total = groups.reduce((sum, group) => sum + group.items.length, 0);
    searchLabel.textContent = TEXT[state.lang].findCalculator;
    searchInput.placeholder = TEXT[state.lang].findCalculator;
    searchInput.value = state.query;
    tabsMeta.textContent = `${total} ${TEXT[state.lang].calculatorCount}`;
    tabs.innerHTML = renderToolTabs(state.toolId, state.query, state.lang);
    overview.innerHTML = buildToolOverviewHtml(state.query, state.lang);
  }

  function renderVisuals(response: any) {
    const html = buildVisualizationHtml(response, state.lang);
    if (!html) {
      visual.hidden = true;
      visual.innerHTML = "";
      return;
    }
    visual.hidden = false;
    visual.innerHTML = html;
  }

  async function handleContactSubmit(event: Event) {
    event.preventDefault();
    const status = contact.querySelector("[data-contact-status]") as HTMLElement | null;
    const fallbackLink = contact.querySelector("[data-contact-fallback]") as HTMLAnchorElement | null;
    if (status) status.textContent = TEXT[state.lang].contactStatusIdle;
    const payload = {
      email: (contact.querySelector("[data-contact-email]") as HTMLInputElement | null)?.value?.trim() || "",
      project_name: (contact.querySelector("[data-contact-project]") as HTMLInputElement | null)?.value?.trim() || "",
      message: (contact.querySelector("[data-contact-message]") as HTMLTextAreaElement | null)?.value?.trim() || "",
      lead_tracking_consent: (contact.querySelector("[data-contact-consent]") as HTMLInputElement | null)?.checked || false,
      source_tool: state.toolId,
      tool_label: activeText(state.toolId, state.lang),
      locale: state.lang,
      source_url: globalThis.location?.href || "",
      result_summary: buildContactSummaryLines(lastResponse, state.lang),
      turnstile_token: state.turnstileToken,
    };
    state.contact = {
      projectName: payload.project_name,
      email: payload.email,
      message: payload.message,
      consent: payload.lead_tracking_consent,
    };
    persistContactState(state.contact);
    const directMailto = buildDirectMailto(state.toolId, state.lang, state.contact, lastResponse);
    if (fallbackLink) fallbackLink.href = directMailto;
    try {
      const response = await fetch(`${API_BASE_URL}${CONTACT_ENDPOINT}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to prepare the enquiry.");
      }
      if (status) status.textContent = TEXT[state.lang].contactStatusSubmitted;
      globalThis.location.href = result.mailto || directMailto;
    } catch (error) {
      if (status) status.textContent = String(error instanceof Error ? error.message : error);
    }
  }

  function activateTurnstile() {
    const target = contact.querySelector("[data-contact-turnstile]") as HTMLElement | null;
    const status = contact.querySelector("[data-contact-status]") as HTMLElement | null;
    if (!target || !status || target.dataset.loaded === "true") return;
    status.textContent = TEXT[state.lang].contactStatusVerification;
    loadTurnstileScript(documentRef)
      .then((turnstile) => {
        if (!turnstile || target.dataset.loaded === "true") return;
        target.dataset.loaded = "true";
        turnstile.render(target, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            state.turnstileToken = token;
            status.textContent = TEXT[state.lang].contactStatusIdle;
          },
          "expired-callback": () => {
            state.turnstileToken = "";
            status.textContent = TEXT[state.lang].contactStatusVerification;
          },
          "error-callback": () => {
            state.turnstileToken = "";
            status.textContent = TEXT[state.lang].contactVerificationUnavailable;
          },
        });
      })
      .catch(() => {
        status.textContent = TEXT[state.lang].contactVerificationUnavailable;
      });
  }

  function renderContactPanel(response: any) {
    const summaryLines = buildContactSummaryLines(response, state.lang);
    const fallbackMailto = buildDirectMailto(state.toolId, state.lang, state.contact, response);
    contact.innerHTML = [
      `<h3>${escapeHtml(TEXT[state.lang].contactTitle)}</h3>`,
      `<p>${escapeHtml(TEXT[state.lang].contactIntro)}</p>`,
      `<div class="result-contact-summary"><strong>${escapeHtml(TEXT[state.lang].contactSummary)}</strong><ul>${summaryLines.length ? summaryLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("") : `<li>${escapeHtml(TEXT[state.lang].none)}</li>`}</ul></div>`,
      `<form class="result-contact-form" data-contact-form>`,
      `<div class="result-contact-grid">`,
      `<label class="result-contact-field"><span>${escapeHtml(TEXT[state.lang].contactProject)}</span><input data-contact-project type="text" value="${escapeHtml(state.contact.projectName)}"></label>`,
      `<label class="result-contact-field"><span>${escapeHtml(TEXT[state.lang].contactEmail)}</span><input data-contact-email type="email" value="${escapeHtml(state.contact.email)}"></label>`,
      `<label class="result-contact-field result-contact-field--full"><span>${escapeHtml(TEXT[state.lang].contactMessage)}</span><textarea data-contact-message>${escapeHtml(state.contact.message)}</textarea></label>`,
      `</div>`,
      `<label class="result-contact-consent"><input data-contact-consent type="checkbox" ${state.contact.consent ? "checked" : ""}><span>${escapeHtml(TEXT[state.lang].contactConsent)}</span></label>`,
      `<div data-contact-turnstile></div>`,
      `<div class="result-contact-actions">`,
      `<button type="submit" class="primary" data-contact-submit>${escapeHtml(TEXT[state.lang].contactSubmit)}</button>`,
      `<a data-contact-fallback href="${escapeHtml(fallbackMailto)}">${escapeHtml(TEXT[state.lang].contactFallback)}</a>`,
      `</div>`,
      `<div class="result-contact-status" data-contact-status>${escapeHtml(TEXT[state.lang].contactStatusIdle)}</div>`,
      `</form>`,
    ].join("");
    const formEl = contact.querySelector("[data-contact-form]") as HTMLFormElement | null;
    formEl?.addEventListener("submit", (event) => {
      void handleContactSubmit(event);
    });
    contact.querySelectorAll("[data-contact-project], [data-contact-email], [data-contact-message], [data-contact-consent]").forEach((field) => {
      field.addEventListener("input", () => {
        state.contact = {
          projectName: (contact.querySelector("[data-contact-project]") as HTMLInputElement | null)?.value || "",
          email: (contact.querySelector("[data-contact-email]") as HTMLInputElement | null)?.value || "",
          message: (contact.querySelector("[data-contact-message]") as HTMLTextAreaElement | null)?.value || "",
          consent: (contact.querySelector("[data-contact-consent]") as HTMLInputElement | null)?.checked || false,
        };
        persistContactState(state.contact);
      });
      field.addEventListener("change", () => {
        state.contact = {
          projectName: (contact.querySelector("[data-contact-project]") as HTMLInputElement | null)?.value || "",
          email: (contact.querySelector("[data-contact-email]") as HTMLInputElement | null)?.value || "",
          message: (contact.querySelector("[data-contact-message]") as HTMLTextAreaElement | null)?.value || "",
          consent: (contact.querySelector("[data-contact-consent]") as HTMLInputElement | null)?.checked || false,
        };
        persistContactState(state.contact);
      });
    });
    activateTurnstile();
  }

  function render() {
    const text = TEXT[state.lang];
    const activeTool = TOOL_CATALOG[state.toolId];
    lastResponse = null;
    renderNavigation();
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
    renderToolContext(context, state.toolId, state.lang);
    renderFriendlyForm(friendlyForm, state.toolId, activeTool, state.lang, text.form);
    renderResultSummary(resultSummary, null, state.lang);
    renderReport(report, null, state.lang);
    renderVisuals(null);
    renderContactPanel(null);
    documentRef.querySelectorAll("[data-lang]").forEach((button) => {
      const langButton = button as HTMLElement;
      if (langButton.dataset.lang === state.lang) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });
    input.value = formatJson(activeTool.sample);
    writeUrlState(state);
  }

  tabs.addEventListener("click", (event) => {
    const toolId = (event.target as HTMLElement | null)?.dataset?.toolId;
    if (!toolId) return;
    state.toolId = toolId;
    render();
  });

  overview.addEventListener("click", (event) => {
    const groupId = (event.target as HTMLElement | null)?.dataset?.groupJump as ToolGroupId | undefined;
    if (!groupId) return;
    const first = Object.keys(TOOL_CATALOG).find((toolId) => toolGroupId(toolId) === groupId);
    if (!first) return;
    state.toolId = first;
    state.query = "";
    render();
  });

  documentRef.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.lang = ((button as HTMLElement).dataset.lang || "en") as keyof typeof TEXT;
      render();
    });
  });

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    renderNavigation();
    writeUrlState(state);
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
      renderVisuals(result);
      output.textContent = formatJson(result);
      lastResponse = result;
      downloadButton.disabled = false;
      downloadHtmlButton.disabled = false;
      renderContactPanel(result);
    } catch (error) {
      renderResultSummary(resultSummary, null, state.lang);
      renderReport(report, null, state.lang);
      renderVisuals(null);
      output.textContent = formatJson({ error: error.message });
      lastResponse = null;
      downloadButton.disabled = true;
      downloadHtmlButton.disabled = true;
      renderContactPanel(null);
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
  void loadSchemaMetadata().then(() => {
    renderFriendlyForm(friendlyForm, state.toolId, TOOL_CATALOG[state.toolId], state.lang, TEXT[state.lang].form);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderFriendlyForm(container, toolId, tool, lang, heading) {
  if (!tool.form) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  container.hidden = false;
  container.innerHTML = [
    `<div class="friendly-form-heading">${escapeHtml(heading)}</div>`,
    `<div class="friendly-fields">${tool.form.fields.map((field) =>
      renderFriendlyField(toolId, tool, field, valueAtPath(tool.sample, field.path || [field.name]), lang)
    ).join("")}</div>`,
  ].join("");
}

function renderFriendlyField(toolId, tool, field, value, lang) {
  const baseLabel = field.label[lang] || field.label.en;
  const label = field.unit ? `${baseLabel} (${field.unit})` : baseLabel;
  const help = buildFriendlyFieldHelp(toolId, tool, field, lang);
  if (field.control === "checkbox") {
    return `<label class="friendly-field friendly-field-checkbox"><input name="${escapeHtml(field.name)}" type="checkbox" ${value ? "checked" : ""}><span>${escapeHtml(label)}</span>${help ? `<small class="friendly-field-help">${escapeHtml(help)}</small>` : ""}</label>`;
  }
  const control = field.control === "select"
    ? `<select name="${escapeHtml(field.name)}">${field.options.map((option) =>
      `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`
    ).join("")}</select>`
    : `<input name="${escapeHtml(field.name)}" type="${field.control === "text" ? "text" : "number"}" ${field.control === "text" ? "" : `step="${escapeHtml(field.step || "any")}"`} value="${escapeHtml(value)}">`;
  return `<label class="friendly-field"><span>${escapeHtml(label)}</span>${control}${help ? `<small class="friendly-field-help">${escapeHtml(help)}</small>` : ""}</label>`;
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
