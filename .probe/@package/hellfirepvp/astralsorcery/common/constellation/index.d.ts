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
        getHolder(): ($Holder<$BaseConstellation>) | undefined;
        getConstellationColor(): $ColorWrapper;
        getTier(): $BaseConstellation$Tier;
        getStars(): $List<$StarLocation>;
        getPropertyOpt<T extends $ConstellationProperty<T>>(arg0: $ConstellationProperty$Key<T>): (T) | undefined;
        canDiscover(arg0: $Player, arg1: $PlayerProgress): boolean;
        getSortingId(): number;
        getStarConnections(): $List<$StarConnection>;
        getName(): $MutableComponent;
        getProperty<T extends $ConstellationProperty<T>>(arg0: $ConstellationProperty$Key<T>): T;
        compareTo(arg0: $BaseConstellation_): number;
        static builder<T extends $BaseConstellation>(arg0: $ColorWrapper): $BaseConstellation$Builder<T>;
        is(arg0: $TagKey_<$BaseConstellation>): boolean;
        hasProperty(arg0: $ConstellationProperty$Key<never>): boolean;
        getColoredName(): $MutableComponent;
        static STAR_GRID_WIDTH_HEIGHT: number;
        constructor(arg0: $ColorWrapper);
        get holder(): ($Holder<$BaseConstellation>) | undefined;
        get constellationColor(): $ColorWrapper;
        get tier(): $BaseConstellation$Tier;
        get stars(): $List<$StarLocation>;
        get sortingId(): number;
        get starConnections(): $List<$StarConnection>;
        get name(): $MutableComponent;
        get coloredName(): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $BaseConstellation}.
     */
    export type $BaseConstellation_ = RegistryTypes.AstralsorceryConstellations;
    export class $BaseConstellation$Builder<T extends $BaseConstellation> {
        tier(arg0: $BaseConstellation$Tier): $BaseConstellation$Builder<T>;
        withProperty<V extends $ConstellationProperty<V>>(arg0: $ConstellationProperty$Key<V>, arg1: $Function_<T, V>): $BaseConstellation$Builder<T>;
        addConnection(arg0: $StarLocation_, arg1: $StarLocation_): $StarConnection;
        addStar(arg0: number, arg1: number): $StarLocation;
        build(arg0: $Function_<$ColorWrapper, T>): $Supplier<T>;
        sorted(): $BaseConstellation$Builder<T>;
        constructor(arg0: $ColorWrapper);
    }
    export interface $BaseConstellation extends RegistryMarked<RegistryTypes.AstralsorceryConstellationsTag, RegistryTypes.AstralsorceryConstellations> {}
    export class $BaseConstellation$Tier {
        canDiscover(arg0: $Player, arg1: $PlayerProgress): boolean;
        getTierTypeName(): string;
        getTierName(): $MutableComponent;
        getColor(): $ColorWrapper;
        static MAJOR: $BaseConstellation$Tier;
        static MINOR: $BaseConstellation$Tier;
        static HIDDEN: $BaseConstellation$Tier;
        constructor(arg0: string, arg1: $ColorWrapper);
        get tierTypeName(): string;
        get tierName(): $MutableComponent;
        get color(): $ColorWrapper;
    }
}
