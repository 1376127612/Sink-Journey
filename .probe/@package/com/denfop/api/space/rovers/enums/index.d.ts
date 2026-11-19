import { $EnumLevels } from "@package/com/denfop/api/space";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/space/rovers/enums" {
    export class $EnumTypeUpgrade extends $Enum<$EnumTypeUpgrade> {
        getUpgrade(): string;
        static getFromID(arg0: number): $EnumTypeUpgrade;
        static values(): $EnumTypeUpgrade[];
        static valueOf(arg0: string): $EnumTypeUpgrade;
        getMax(): number;
        static PRESSURE: $EnumTypeUpgrade;
        static PROTECTION: $EnumTypeUpgrade;
        static HEATER: $EnumTypeUpgrade;
        static COOLER: $EnumTypeUpgrade;
        static SOLAR: $EnumTypeUpgrade;
        static ENGINE: $EnumTypeUpgrade;
        static DRILL: $EnumTypeUpgrade;
        get upgrade(): string;
        get max(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeUpgrade}.
     */
    export type $EnumTypeUpgrade_ = "solar" | "heater" | "cooler" | "pressure" | "protection" | "engine" | "drill";
    export class $EnumTypeRovers extends $Enum<$EnumTypeRovers> {
        static values(): $EnumTypeRovers[];
        static valueOf(arg0: string): $EnumTypeRovers;
        static ROCKET: $EnumTypeRovers;
        static SATELLITE: $EnumTypeRovers;
        static ROVERS: $EnumTypeRovers;
        static PROBE: $EnumTypeRovers;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeRovers}.
     */
    export type $EnumTypeRovers_ = "rocket" | "satellite" | "rovers" | "probe";
    export class $EnumRoversLevel extends $Enum<$EnumRoversLevel> {
        getLevelsList(): $List<$EnumLevels>;
        static values(): $EnumRoversLevel[];
        static valueOf(arg0: string): $EnumRoversLevel;
        static ONE: $EnumRoversLevel;
        static FOUR: $EnumRoversLevel;
        static TWO: $EnumRoversLevel;
        static THREE: $EnumRoversLevel;
        get levelsList(): $List<$EnumLevels>;
    }
    /**
     * Values that may be interpreted as {@link $EnumRoversLevel}.
     */
    export type $EnumRoversLevel_ = "one" | "two" | "three" | "four";
}
