import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Function_, $Supplier } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $ColorWrapper } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $StarLocation, $StarLocation_, $StarConnection } from "@package/hellfirepvp/astralsorcery/common/constellation/star";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $ConstellationProperty$Key, $ConstellationProperty } from "@package/hellfirepvp/astralsorcery/common/constellation/property";
export * as star from "@package/hellfirepvp/astralsorcery/common/constellation/star";
export * as property from "@package/hellfirepvp/astralsorcery/common/constellation/property";

declare module "@package/hellfirepvp/astralsorcery/common/constellation" {
    export class $BaseConstellation implements $Comparable<$BaseConstellation> {
        getName(): $MutableComponent;
        getProperty<T extends $ConstellationProperty<T>>(arg0: $ConstellationProperty$Key<T>): T;
        compareTo(arg0: $BaseConstellation_): number;
        static builder<T extends $BaseConstellation>(arg0: $ColorWrapper): $BaseConstellation$Builder<T>;
        is(arg0: $TagKey_<$BaseConstellation>): boolean;
        hasProperty(arg0: $ConstellationProperty$Key<never>): boolean;
        getHolder(): ($Holder<$BaseConstellation>) | undefined;
        getTier(): $BaseConstellation$Tier;
        getStars(): $List<$StarLocation>;
        canDiscover(arg0: $Player, arg1: $PlayerProgress): boolean;
        getColoredName(): $MutableComponent;
        getPropertyOpt<T extends $ConstellationProperty<T>>(arg0: $ConstellationProperty$Key<T>): (T) | undefined;
        getStarConnections(): $List<$StarConnection>;
        getSortingId(): number;
        getConstellationColor(): $ColorWrapper;
        static STAR_GRID_WIDTH_HEIGHT: number;
        constructor(arg0: $ColorWrapper);
        get name(): $MutableComponent;
        get holder(): ($Holder<$BaseConstellation>) | undefined;
        get tier(): $BaseConstellation$Tier;
        get stars(): $List<$StarLocation>;
        get coloredName(): $MutableComponent;
        get starConnections(): $List<$StarConnection>;
        get sortingId(): number;
        get constellationColor(): $ColorWrapper;
    }
    /**
     * Values that may be interpreted as {@link $BaseConstellation}.
     */
    export type $BaseConstellation_ = RegistryTypes.AstralsorceryConstellations;
    export class $BaseConstellation$Builder<T extends $BaseConstellation> {
        build(arg0: $Function_<$ColorWrapper, T>): $Supplier<T>;
        sorted(): $BaseConstellation$Builder<T>;
        withProperty<V extends $ConstellationProperty<V>>(arg0: $ConstellationProperty$Key<V>, arg1: $Function_<T, V>): $BaseConstellation$Builder<T>;
        tier(arg0: $BaseConstellation$Tier): $BaseConstellation$Builder<T>;
        addStar(arg0: number, arg1: number): $StarLocation;
        addConnection(arg0: $StarLocation_, arg1: $StarLocation_): $StarConnection;
        constructor(arg0: $ColorWrapper);
    }
    export interface $BaseConstellation extends RegistryMarked<RegistryTypes.AstralsorceryConstellationsTag, RegistryTypes.AstralsorceryConstellations> {}
    export class $BaseConstellation$Tier {
        getColor(): $ColorWrapper;
        canDiscover(arg0: $Player, arg1: $PlayerProgress): boolean;
        getTierTypeName(): string;
        getTierName(): $MutableComponent;
        static MAJOR: $BaseConstellation$Tier;
        static MINOR: $BaseConstellation$Tier;
        static HIDDEN: $BaseConstellation$Tier;
        constructor(arg0: string, arg1: $ColorWrapper);
        get color(): $ColorWrapper;
        get tierTypeName(): string;
        get tierName(): $MutableComponent;
    }
}
