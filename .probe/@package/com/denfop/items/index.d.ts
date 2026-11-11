import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/items" {
    export class $EnumInfoUpgradeModules extends $Enum<$EnumInfoUpgradeModules> {
        static values(): $EnumInfoUpgradeModules[];
        static valueOf(arg0: string): $EnumInfoUpgradeModules;
        static getFromID(arg0: number): $EnumInfoUpgradeModules;
        static INVISIBILITY: $EnumInfoUpgradeModules;
        static GENERATOR: $EnumInfoUpgradeModules;
        static REPAIRED: $EnumInfoUpgradeModules;
        static LOOT: $EnumInfoUpgradeModules;
        static JUMP: $EnumInfoUpgradeModules;
        static SPEED: $EnumInfoUpgradeModules;
        static FIRE: $EnumInfoUpgradeModules;
        static MACERATOR: $EnumInfoUpgradeModules;
        static SMELTER: $EnumInfoUpgradeModules;
        static PROTECTION_ARROW: $EnumInfoUpgradeModules;
        static LUCKY: $EnumInfoUpgradeModules;
        static WATER: $EnumInfoUpgradeModules;
        static STORAGE: $EnumInfoUpgradeModules;
        static ENERGY: $EnumInfoUpgradeModules;
        static SABERENERGY: $EnumInfoUpgradeModules;
        static PROTECTION: $EnumInfoUpgradeModules;
        static SIZE: $EnumInfoUpgradeModules;
        static LAPPACK_ENERGY: $EnumInfoUpgradeModules;
        static VAMPIRES: $EnumInfoUpgradeModules;
        static THERMAL: $EnumInfoUpgradeModules;
        list: $List<number>;
        static BLINDNESS: $EnumInfoUpgradeModules;
        static THORNS: $EnumInfoUpgradeModules;
        static COMB_MACERATOR: $EnumInfoUpgradeModules;
        static WRENCH: $EnumInfoUpgradeModules;
        static SILK_TOUCH: $EnumInfoUpgradeModules;
        static FLYSPEED: $EnumInfoUpgradeModules;
        static BOWDAMAGE: $EnumInfoUpgradeModules;
        static RESISTANCE: $EnumInfoUpgradeModules;
        static EXPERIENCE: $EnumInfoUpgradeModules;
        static BOWENERGY: $EnumInfoUpgradeModules;
        static FALLING_DAMAGE: $EnumInfoUpgradeModules;
        static DIG_DEPTH: $EnumInfoUpgradeModules;
        static LATEX: $EnumInfoUpgradeModules;
        static GENNIGHT: $EnumInfoUpgradeModules;
        static AOE_DIG: $EnumInfoUpgradeModules;
        static PURIFIER: $EnumInfoUpgradeModules;
        static SABER_DAMAGE: $EnumInfoUpgradeModules;
        static PRESSURE: $EnumInfoUpgradeModules;
        static WITHER: $EnumInfoUpgradeModules;
        static FLY: $EnumInfoUpgradeModules;
        static GENDAY: $EnumInfoUpgradeModules;
        static EFFICIENCY: $EnumInfoUpgradeModules;
        static EFFICIENT: $EnumInfoUpgradeModules;
        static NIGTHVISION: $EnumInfoUpgradeModules;
        static HUNGRY: $EnumInfoUpgradeModules;
        max: number;
        static RANDOM: $EnumInfoUpgradeModules;
        static FIRE_PROTECTION: $EnumInfoUpgradeModules;
        static OXYGEN: $EnumInfoUpgradeModules;
        static BAGS: $EnumInfoUpgradeModules;
        static POISON: $EnumInfoUpgradeModules;
    }
    /**
     * Values that may be interpreted as {@link $EnumInfoUpgradeModules}.
     */
    export type $EnumInfoUpgradeModules_ = "genday" | "gennight" | "protection" | "efficiency" | "bowenergy" | "saberenergy" | "dig_depth" | "fire_protection" | "water" | "speed" | "jump" | "bowdamage" | "saber_damage" | "aoe_dig" | "flyspeed" | "storage" | "energy" | "vampires" | "resistance" | "poison" | "wither" | "silk_touch" | "invisibility" | "loot" | "fire" | "repaired" | "lucky" | "efficient" | "smelter" | "nigthvision" | "thorns" | "experience" | "blindness" | "protection_arrow" | "falling_damage" | "macerator" | "comb_macerator" | "random" | "hungry" | "generator" | "bags" | "fly" | "size" | "lappack_energy" | "purifier" | "latex" | "wrench" | "oxygen" | "thermal" | "pressure";
}
