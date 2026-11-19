import { $ITier, $BaseTier, $BaseTier_ } from "@package/mekanism/api/tier";
import { $CachedIntValue, $CachedLongValue } from "@package/mekanism/common/config/value";
import { $Enum } from "@package/java/lang";

declare module "@package/mekanism/common/tier" {
    export class $TubeTier extends $Enum<$TubeTier> implements $ITier {
        getTubeCapacity(): number;
        getTubePullAmount(): number;
        setConfigReference(capacityReference: $CachedLongValue, pullReference: $CachedLongValue): void;
        getBaseTier(): $BaseTier;
        getBaseCapacity(): number;
        getBasePull(): number;
        static get(tier: $BaseTier_): $TubeTier;
        static values(): $TubeTier[];
        static valueOf(name: string): $TubeTier;
        getBaseTierLevel(): number;
        static ELITE: $TubeTier;
        static ULTIMATE: $TubeTier;
        static BASIC: $TubeTier;
        static ADVANCED: $TubeTier;
        get tubeCapacity(): number;
        get tubePullAmount(): number;
        get baseTier(): $BaseTier;
        get baseCapacity(): number;
        get basePull(): number;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $TubeTier}.
     */
    export type $TubeTier_ = "basic" | "advanced" | "elite" | "ultimate";
    export class $CableTier extends $Enum<$CableTier> implements $ITier {
        setConfigReference(capacityReference: $CachedLongValue): void;
        getBaseTier(): $BaseTier;
        getBaseCapacity(): number;
        getCableCapacity(): number;
        static get(tier: $BaseTier_): $CableTier;
        static values(): $CableTier[];
        static valueOf(name: string): $CableTier;
        getBaseTierLevel(): number;
        static ELITE: $CableTier;
        static ULTIMATE: $CableTier;
        static BASIC: $CableTier;
        static ADVANCED: $CableTier;
        set configReference(value: $CachedLongValue);
        get baseTier(): $BaseTier;
        get baseCapacity(): number;
        get cableCapacity(): number;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $CableTier}.
     */
    export type $CableTier_ = "basic" | "advanced" | "elite" | "ultimate";
    export class $PipeTier extends $Enum<$PipeTier> implements $ITier {
        getPipeCapacity(): number;
        getPipePullAmount(): number;
        setConfigReference(capacityReference: $CachedIntValue, pullReference: $CachedIntValue): void;
        getBaseTier(): $BaseTier;
        getBaseCapacity(): number;
        getBasePull(): number;
        static get(tier: $BaseTier_): $PipeTier;
        static values(): $PipeTier[];
        static valueOf(name: string): $PipeTier;
        getBaseTierLevel(): number;
        static ELITE: $PipeTier;
        static ULTIMATE: $PipeTier;
        static BASIC: $PipeTier;
        static ADVANCED: $PipeTier;
        get pipeCapacity(): number;
        get pipePullAmount(): number;
        get baseTier(): $BaseTier;
        get baseCapacity(): number;
        get basePull(): number;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $PipeTier}.
     */
    export type $PipeTier_ = "basic" | "advanced" | "elite" | "ultimate";
}
