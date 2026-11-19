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
        getLevels(): $EnumLevels;
        getRing(): $EnumRing;
        getStar(): $IStar;
        hasOxygen(): boolean;
        getSatelliteList(): $List<$ISatellite>;
        getDistanceFromStar(): number;
        canHaveColonies(): boolean;
        getResource(): $ResourceLocation;
        getType(): $EnumType;
        getTemperature(): number;
        getPressure(): boolean;
        get levels(): $EnumLevels;
        get ring(): $EnumRing;
        get star(): $IStar;
        get satelliteList(): $List<$ISatellite>;
        get distanceFromStar(): number;
        get resource(): $ResourceLocation;
        get type(): $EnumType;
        get temperature(): number;
        get pressure(): boolean;
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
        getAsteroidList(): $List<$IAsteroid>;
        getPlanetList(): $List<$IPlanet>;
        getResource(): $ResourceLocation;
        get asteroidList(): $List<$IAsteroid>;
        get planetList(): $List<$IPlanet>;
        get resource(): $ResourceLocation;
    }
    export class $ISystem {
    }
    export interface $ISystem {
        getStarList(): $List<$IStar>;
        getDistanceFromSolar(): number;
        getName(): string;
        get starList(): $List<$IStar>;
        get distanceFromSolar(): number;
        get name(): string;
    }
    export class $IBody {
    }
    export interface $IBody {
        getSystem(): $ISystem;
        getDistance(): number;
        getRotationAngle(): number;
        getRotationTimeX(arg0: number): number;
        getOrbitPeriod(): number;
        getRotationTimeZ(arg0: number): number;
        getSize(): number;
        getName(): string;
        getLocation(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getTemperature(): number;
        getRotation(arg0: number): number;
        get system(): $ISystem;
        get distance(): number;
        get rotationAngle(): number;
        get orbitPeriod(): number;
        get size(): number;
        get name(): string;
        get location(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get temperature(): number;
    }
    export class $IAsteroid {
    }
    export interface $IAsteroid extends $IBody {
        getLevels(): $EnumLevels;
        getStar(): $IStar;
        getMaxDistance(): number;
        getDistanceFromStar(): number;
        getMinDistance(): number;
        canHaveColonies(): boolean;
        getMiniAsteroid(): $List<$MiniAsteroid>;
        getResource(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getType(): $EnumType;
        getTemperature(): number;
        get levels(): $EnumLevels;
        get star(): $IStar;
        get maxDistance(): number;
        get distanceFromStar(): number;
        get minDistance(): number;
        get miniAsteroid(): $List<$MiniAsteroid>;
        get resource(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get type(): $EnumType;
        get temperature(): number;
    }
    export class $IBaseResource {
    }
    export interface $IBaseResource {
        getFluidStack(): $FluidStack;
        getMaxChance(): number;
        getTypeRovers(): $EnumTypeRovers;
        getPercentPanel(): number;
        writeNBTTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getPercentResearchBody(): number;
        getItemStack(): $ItemStack;
        getChance(): number;
        getBody(): $IBody;
        get fluidStack(): $FluidStack;
        get maxChance(): number;
        get typeRovers(): $EnumTypeRovers;
        get percentPanel(): number;
        get percentResearchBody(): number;
        get itemStack(): $ItemStack;
        get chance(): number;
        get body(): $IBody;
    }
}
