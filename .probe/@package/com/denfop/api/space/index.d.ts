import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $EnumTypeRovers } from "@package/com/denfop/api/space/rovers/enums";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
export * as research from "@package/com/denfop/api/space/research";
export * as fakebody from "@package/com/denfop/api/space/fakebody";
export * as rovers from "@package/com/denfop/api/space/rovers";
export * as upgrades from "@package/com/denfop/api/space/upgrades";

declare module "@package/com/denfop/api/space" {
    export class $IPlanet {
    }
    export interface $IPlanet extends $IBody {
        getResource(): $ResourceLocation;
        getType(): $EnumType;
        getTemperature(): number;
        getLevels(): $EnumLevels;
        hasOxygen(): boolean;
        getRing(): $EnumRing;
        getSatelliteList(): $List<$ISatellite>;
        getDistanceFromStar(): number;
        getPressure(): boolean;
        getStar(): $IStar;
        canHaveColonies(): boolean;
        get resource(): $ResourceLocation;
        get type(): $EnumType;
        get temperature(): number;
        get levels(): $EnumLevels;
        get ring(): $EnumRing;
        get satelliteList(): $List<$ISatellite>;
        get distanceFromStar(): number;
        get pressure(): boolean;
        get star(): $IStar;
    }
    export class $EnumLevels extends $Enum<$EnumLevels> {
        static values(): $EnumLevels[];
        static valueOf(arg0: string): $EnumLevels;
        static FIVE: $EnumLevels;
        static SIX: $EnumLevels;
        static THIRD: $EnumLevels;
        static SECOND: $EnumLevels;
        static FIRST: $EnumLevels;
        static NONE: $EnumLevels;
        static FOURTH: $EnumLevels;
        static SEVEN: $EnumLevels;
    }
    /**
     * Values that may be interpreted as {@link $EnumLevels}.
     */
    export type $EnumLevels_ = "first" | "second" | "third" | "fourth" | "five" | "six" | "seven" | "none";
    export class $IStar {
    }
    export interface $IStar extends $IBody {
        getResource(): $ResourceLocation;
        getAsteroidList(): $List<$IAsteroid>;
        getPlanetList(): $List<$IPlanet>;
        get resource(): $ResourceLocation;
        get asteroidList(): $List<$IAsteroid>;
        get planetList(): $List<$IPlanet>;
    }
    export class $ISystem {
    }
    export interface $ISystem {
        getName(): string;
        getDistanceFromSolar(): number;
        getStarList(): $List<$IStar>;
        get name(): string;
        get distanceFromSolar(): number;
        get starList(): $List<$IStar>;
    }
    export class $IBody {
    }
    export interface $IBody {
        getSize(): number;
        getName(): string;
        getLocation(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getDistance(): number;
        getRotation(arg0: number): number;
        getTemperature(): number;
        getSystem(): $ISystem;
        getRotationAngle(): number;
        getRotationTimeZ(arg0: number): number;
        getOrbitPeriod(): number;
        getRotationTimeX(arg0: number): number;
        get size(): number;
        get name(): string;
        get location(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get distance(): number;
        get temperature(): number;
        get system(): $ISystem;
        get rotationAngle(): number;
        get orbitPeriod(): number;
    }
    export class $IAsteroid {
    }
    export interface $IAsteroid extends $IBody {
        getResource(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getType(): $EnumType;
        getTemperature(): number;
        getLevels(): $EnumLevels;
        getDistanceFromStar(): number;
        getMaxDistance(): number;
        getStar(): $IStar;
        getMinDistance(): number;
        canHaveColonies(): boolean;
        getMiniAsteroid(): $List<$MiniAsteroid>;
        get resource(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get type(): $EnumType;
        get temperature(): number;
        get levels(): $EnumLevels;
        get distanceFromStar(): number;
        get maxDistance(): number;
        get star(): $IStar;
        get minDistance(): number;
        get miniAsteroid(): $List<$MiniAsteroid>;
    }
    export class $IBaseResource {
    }
    export interface $IBaseResource {
        getItemStack(): $ItemStack;
        getBody(): $IBody;
        getChance(): number;
        getFluidStack(): $FluidStack;
        getTypeRovers(): $EnumTypeRovers;
        getMaxChance(): number;
        getPercentPanel(): number;
        writeNBTTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getPercentResearchBody(): number;
        get itemStack(): $ItemStack;
        get body(): $IBody;
        get chance(): number;
        get fluidStack(): $FluidStack;
        get typeRovers(): $EnumTypeRovers;
        get maxChance(): number;
        get percentPanel(): number;
        get percentResearchBody(): number;
    }
}
