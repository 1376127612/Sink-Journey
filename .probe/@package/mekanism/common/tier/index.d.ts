import { $ITier, $BaseTier, $BaseTier_ } from "@package/mekanism/api/tier";
import { $CachedIntValue, $CachedLongValue } from "@package/mekanism/common/config/value";
import { $Enum } from "@package/java/lang";

declare module "@package/mekanism/common/tier" {
    export class $TubeTier extends $Enum<$TubeTier> implements $ITier {
        static get(tier: $BaseTier_): $TubeTier;
        static values(): $TubeTier[];
        static valueOf(name: string): $TubeTier;
        getBaseCapacity(): number;
        getTubePullAmount(): number;
        getTubeCapacity(): number;
        setConfigReference(capacityReference: $CachedLongValue, pullReference: $CachedLongValue): void;
        getBaseTier(): $BaseTier;
        getBasePull(): number;
        getBaseTierLevel(): number;
        static ELITE: $TubeTier;
        static ULTIMATE: $TubeTier;
        static BASIC: $TubeTier;
        static ADVANCED: $TubeTier;
        get baseCapacity(): number;
        get tubePullAmount(): number;
        get tubeCapacity(): number;
        get baseTier(): $BaseTier;
        get basePull(): number;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $TubeTier}.
     */
    export type $TubeTier_ = "basic" | "advanced" | "elite" | "ultimate";
    export class $CableTier extends $Enum<$CableTier> implements $ITier {
        static get(tier: $BaseTier_): $CableTier;
        static values(): $CableTier[];
        static valueOf(name: string): $CableTier;
        getBaseCapacity(): number;
        getCableCapacity(): number;
        setConfigReference(capacityReference: $CachedLongValue): void;
        getBaseTier(): $BaseTier;
        getBaseTierLevel(): number;
        static ELITE: $CableTier;
        static ULTIMATE: $CableTier;
        static BASIC: $CableTier;
        static ADVANCED: $CableTier;
        get baseCapacity(): number;
        get cableCapacity(): number;
        set configReference(value: $CachedLongValue);
        get baseTier(): $BaseTier;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $CableTier}.
     */
    export type $CableTier_ = "basic" | "advanced" | "elite" | "ultimate";
    export class $PipeTier extends $Enum<$PipeTier> implements $ITier {
        static get(tier: $BaseTier_): $PipeTier;
        static values(): $PipeTier[];
        static valueOf(name: string): $PipeTier;
        getBaseCapacity(): number;
        setConfigReference(capacityReference: $CachedIntValue, pullReference: $CachedIntValue): void;
        getBaseTier(): $BaseTier;
        getBasePull(): number;
        getPipePullAmount(): number;
        getPipeCapacity(): number;
        getBaseTierLevel(): number;
        static ELITE: $PipeTier;
        static ULTIMATE: $PipeTier;
        static BASIC: $PipeTier;
        static ADVANCED: $PipeTier;
        get baseCapacity(): number;
        get baseTier(): $BaseTier;
        get basePull(): number;
        get pipePullAmount(): number;
        get pipeCapacity(): number;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $PipeTier}.
     */
    export type $PipeTier_ = "basic" | "advanced" | "elite" | "ultimate";
}
