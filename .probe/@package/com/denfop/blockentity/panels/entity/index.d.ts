import { $DataBlockEntity } from "@package/com/denfop/dataregistry";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/blockentity/panels/entity" {
    export class $EnumSolarPanels extends $Enum<$EnumSolarPanels> {
        static registerTile(): void;
        static getFromID(arg0: number): $EnumSolarPanels;
        static values(): $EnumSolarPanels[];
        static valueOf(arg0: string): $EnumSolarPanels;
        static ADVANCED_SOLAR_PANEL: $EnumSolarPanels;
        static HYBRID_SOLAR_PANEL: $EnumSolarPanels;
        static HADRON_SOLAR_PANEL: $EnumSolarPanels;
        maxstorage: number;
        genday: number;
        gennight: number;
        static SINGULAR_SOLAR_PANEL: $EnumSolarPanels;
        static PERFECT_SOLAR_PANEL: $EnumSolarPanels;
        static QUANTUM_SOLAR_PANEL: $EnumSolarPanels;
        static DIFFRACTION_SOLAR_PANEL: $EnumSolarPanels;
        static GRAVITON_SOLAR_PANEL: $EnumSolarPanels;
        static QUARK_SOLAR_PANEL: $EnumSolarPanels;
        producing: number;
        tier: number;
        solarold: $EnumSolarPanels;
        meta: number;
        static PROTON_SOLAR_PANEL: $EnumSolarPanels;
        block: $DataBlockEntity<any>;
        static BARION_SOLAR_PANEL: $EnumSolarPanels;
        static SOLAR_PANEL_DEFAULT: $EnumSolarPanels;
        static SPECTRAL_SOLAR_PANEL: $EnumSolarPanels;
        static PHOTONIC_SOLAR_PANEL: $EnumSolarPanels;
        static NEUTRONIUN_SOLAR_PANEL: $EnumSolarPanels;
        register: boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumSolarPanels}.
     */
    export type $EnumSolarPanels_ = "solar_panel_default" | "advanced_solar_panel" | "hybrid_solar_panel" | "perfect_solar_panel" | "quantum_solar_panel" | "spectral_solar_panel" | "proton_solar_panel" | "singular_solar_panel" | "diffraction_solar_panel" | "photonic_solar_panel" | "neutroniun_solar_panel" | "barion_solar_panel" | "hadron_solar_panel" | "graviton_solar_panel" | "quark_solar_panel";
}
