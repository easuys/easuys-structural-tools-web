export const API_BASE_URL = "https://easuys-structural-tools-api.yellow-violet-f185.workers.dev";
export const TOOL_CATALOG = {
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
    ec5_timber_timber_single_shear_connection: [
        { path: ["result", "overall_status"], label: { nl: "Status", en: "Status", fr: "Statut" }, format: "status" },
        { path: ["result", "r_d_kn"], label: { nl: "Rd", en: "Rd", fr: "Rd" }, unit: "kN" },
        { path: ["result", "utilization_ratio"], label: { nl: "Benutting", en: "Utilization", fr: "Utilisation" } },
        { path: ["result", "n_effective"], label: { nl: "n effectief", en: "Effective n", fr: "n effectif" } },
        { path: ["result", "governing_mode"], label: { nl: "Maatgevend", en: "Governing mode", fr: "Mode determinant" } },
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
export function buildResultSummaryItems(response, lang = "en") {
    const fields = RESULT_SUMMARY_FIELDS[response?.calculator_id] || [];
    return fields
        .map((field) => {
        const value = valueAtPath(response, field.path);
        if (value === undefined || value === null)
            return null;
        return {
            label: field.label[lang] || field.label.en,
            value: formatSummaryValue(value, field),
        };
    })
        .filter(Boolean);
}
export function buildReportModel(response, lang = "en", generatedAt = new Date()) {
    if (!response)
        return null;
    const text = TEXT[lang] || TEXT.en;
    const status = response.status || response.result?.overall_status || response.result?.check_passed;
    const warnings = collectWarningCodes(response);
    const summaryItems = buildResultSummaryItems(response, lang);
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
        warningsHeading: text.warnings,
        warnings: warnings.length ? warnings : [text.none],
        assumptionsHeading: text.assumptions,
        assumptions: normalizeList(response.assumptions, text.none),
        sourceRefsHeading: text.sourceRefs,
        sourceRefs: normalizeList(response.source_refs, text.none),
    };
}
export function buildPayloadFromFormValues(toolId, values) {
    const tool = TOOL_CATALOG[toolId];
    if (!tool?.form)
        return null;
    const payload = cloneJson(tool.sample);
    for (const field of tool.form.fields) {
        const path = field.path || [field.name];
        const rawValue = values[field.name] ?? valueAtPath(tool.sample, path) ?? "";
        setValueAtPath(payload, path, coerceFieldValue(field, rawValue));
    }
    return payload;
}
export function initApp(documentRef = globalThis.document) {
    if (!documentRef)
        return;
    const state = { lang: "en", toolId: "ec5_timber_contact_moment_joint" };
    const tabs = documentRef.querySelector("[data-tool-tabs]");
    const input = documentRef.querySelector("[data-json-input]");
    const output = documentRef.querySelector("[data-result-output]");
    const resultSummary = documentRef.querySelector("[data-result-summary]");
    const report = documentRef.querySelector("[data-report]");
    const downloadButton = documentRef.querySelector("[data-download]");
    const printButton = documentRef.querySelector("[data-print]");
    const form = documentRef.querySelector("[data-calculator-form]");
    const friendlyForm = documentRef.querySelector("[data-friendly-form]");
    let lastResponse = null;
    function render() {
        const text = TEXT[state.lang];
        const activeTool = TOOL_CATALOG[state.toolId];
        lastResponse = null;
        tabs.innerHTML = Object.entries(TOOL_CATALOG).map(([toolId, tool]) => (`<button type="button" data-tool-id="${toolId}" ${toolId === state.toolId ? 'aria-current="true"' : ""}>${escapeHtml(tool.title[state.lang])}</button>`)).join("");
        documentRef.querySelector("[data-tool-title]").textContent = activeTool.title[state.lang];
        documentRef.querySelector("[data-tool-status]").textContent = text.status;
        documentRef.querySelector("[data-input-label]").textContent = text.input;
        documentRef.querySelector("[data-result-heading]").textContent = text.result;
        documentRef.querySelector("[data-calculate]").textContent = text.calculate;
        documentRef.querySelector("[data-save]").textContent = text.save;
        documentRef.querySelector("[data-load]").textContent = text.load;
        downloadButton.textContent = text.download;
        downloadButton.disabled = true;
        printButton.textContent = text.print;
        renderFriendlyForm(friendlyForm, activeTool, state.lang, text.form);
        renderResultSummary(resultSummary, null, state.lang);
        renderReport(report, null, state.lang);
        documentRef.querySelectorAll("[data-lang]").forEach((button) => {
            const langButton = button;
            if (langButton.dataset.lang === state.lang) {
                button.setAttribute("aria-current", "page");
            }
            else {
                button.removeAttribute("aria-current");
            }
        });
        input.value = formatJson(activeTool.sample);
    }
    tabs.addEventListener("click", (event) => {
        const toolId = event.target?.dataset?.toolId;
        if (!toolId)
            return;
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
        renderResultSummary(resultSummary, null, state.lang);
        renderReport(report, null, state.lang);
        lastResponse = null;
        downloadButton.disabled = true;
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
        }
        catch (error) {
            renderResultSummary(resultSummary, null, state.lang);
            renderReport(report, null, state.lang);
            output.textContent = formatJson({ error: error.message });
            lastResponse = null;
            downloadButton.disabled = true;
        }
    });
    downloadButton.addEventListener("click", () => {
        if (!lastResponse)
            return;
        const toolId = lastResponse.calculator_id || state.toolId;
        triggerDownload(documentRef, buildResultFilename(toolId), buildResultDownloadText(lastResponse));
    });
    printButton.addEventListener("click", () => {
        globalThis.print?.();
    });
    documentRef.querySelector("[data-save]").addEventListener("click", () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ toolId: state.toolId, input: input.value }));
    });
    documentRef.querySelector("[data-load]").addEventListener("click", () => {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (!saved)
            return;
        if (TOOL_CATALOG[saved.toolId])
            state.toolId = saved.toolId;
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
        `<div class="friendly-fields">${tool.form.fields.map((field) => renderFriendlyField(field, valueAtPath(tool.sample, field.path || [field.name]), lang)).join("")}</div>`,
    ].join("");
}
function renderFriendlyField(field, value, lang) {
    const baseLabel = field.label[lang] || field.label.en;
    const label = field.unit ? `${baseLabel} (${field.unit})` : baseLabel;
    if (field.control === "checkbox") {
        return `<label class="friendly-field friendly-field-checkbox"><input name="${escapeHtml(field.name)}" type="checkbox" ${value ? "checked" : ""}><span>${escapeHtml(label)}</span></label>`;
    }
    const control = field.control === "select"
        ? `<select name="${escapeHtml(field.name)}">${field.options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`
        : `<input name="${escapeHtml(field.name)}" type="number" step="${escapeHtml(field.step || "any")}" value="${escapeHtml(value)}">`;
    return `<label class="friendly-field"><span>${escapeHtml(label)}</span>${control}</label>`;
}
function syncJsonFromFriendlyForm(toolId, container, input) {
    const values = {};
    container.querySelectorAll("[name]").forEach((control) => {
        values[control.name] = control.type === "checkbox" ? control.checked : control.value;
    });
    const payload = buildPayloadFromFormValues(toolId, values);
    if (payload)
        input.value = formatJson(payload);
}
function renderResultSummary(container, response, lang) {
    const items = buildResultSummaryItems(response, lang);
    if (!items.length) {
        container.hidden = true;
        container.innerHTML = "";
        return;
    }
    container.hidden = false;
    container.innerHTML = `<dl>${items.map((item) => `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`).join("")}</dl>`;
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
        `<dl class="report-details">${report.details.map((item) => `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`).join("")}</dl>`,
        renderReportSection(report.summaryHeading, report.summaryItems.map((item) => `${item.label}: ${item.value}`)),
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
function triggerDownload(documentRef, filename, text) {
    const blob = new Blob([text], { type: "application/json" });
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
    if (!Array.isArray(value) || !value.length)
        return [fallback];
    return value.map(String);
}
function coerceFieldValue(field, rawValue) {
    if (field.value_type === "boolean")
        return rawValue === true || rawValue === "true" || rawValue === "on";
    if (field.value_type !== "number")
        return String(rawValue);
    if (rawValue === "")
        return "";
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
    if (field.format === "status")
        return String(value).toUpperCase();
    if (field.format === "check")
        return value ? "PASS" : "FAIL";
    if (field.format === "warnings")
        return Array.isArray(value) && value.length ? value.join(", ") : "None";
    if (typeof value === "number")
        return `${formatSummaryNumber(value)}${field.unit ? ` ${field.unit}` : ""}`;
    return String(value);
}
function formatSummaryNumber(value) {
    const decimals = Math.abs(value) >= 100 ? 1 : 3;
    return value.toFixed(decimals).replace(/\.?0+$/, "");
}
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => initApp(document));
}
