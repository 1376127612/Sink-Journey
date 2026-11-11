import { $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $DamageItem } from "@package/com/denfop/api/item";
import { $Color } from "@package/java/awt";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
export * as upgrade from "@package/com/denfop/api/windsystem/upgrade";
export * as event from "@package/com/denfop/api/windsystem/event";

declare module "@package/com/denfop/api/windsystem" {
    export class $EnumLevelGenerators extends $Enum<$EnumLevelGenerators> {
        static values(): $EnumLevelGenerators[];
        static valueOf(arg0: string): $EnumLevelGenerators;
        getMax(): number;
        getMin(): number;
        static ONE: $EnumLevelGenerators;
        static FOUR: $EnumLevelGenerators;
        static TWO: $EnumLevelGenerators;
        static THREE: $EnumLevelGenerators;
        get max(): number;
        get min(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumLevelGenerators}.
     */
    export type $EnumLevelGenerators_ = "one" | "two" | "three" | "four";
    export class $IWindMechanism {
    }
    export interface $IWindMechanism {
        getTime(): number;
        getSpace(): boolean;
        getMin(): boolean;
        getItemStack(): $ItemStack;
        change(): void;
        getAngle(): number;
        getFacing(): $Direction;
        getAuto(): boolean;
        getRotor(): $WindRotor;
        getRotorRenderTexture(): $ResourceLocation;
        getAdditionalCoefficient(): number;
        getMinWind(): number;
        setWork(arg0: boolean): void;
        can_repair(): boolean;
        need_repair(): boolean;
        getRotorDiameter(): number;
        getRotorSide(): $EnumRotorSide;
        setRotationSpeed(arg0: number): void;
        getAdditionalPower(): number;
        getCoefficient(): number;
        getMinWindSpeed(): number;
        setCoefficient(arg0: number): void;
        setRotorSide(arg0: $EnumRotorSide_): void;
        getLevelGenerator(): $EnumLevelGenerators;
        get time(): number;
        get space(): boolean;
        get min(): boolean;
        get itemStack(): $ItemStack;
        get angle(): number;
        get facing(): $Direction;
        get auto(): boolean;
        get rotor(): $WindRotor;
        get rotorRenderTexture(): $ResourceLocation;
        get additionalCoefficient(): number;
        get minWind(): number;
        set work(value: boolean);
        get rotorDiameter(): number;
        set rotationSpeed(value: number);
        get additionalPower(): number;
        get minWindSpeed(): number;
        get levelGenerator(): $EnumLevelGenerators;
    }
    export class $WindRotor {
    }
    export interface $WindRotor extends $DamageItem {
        getIndex(): number;
        getLevel(): number;
        getEfficiency(arg0: $ItemStack_): number;
        getColor(): $Color;
        getDiameter(arg0: $ItemStack_): number;
        getSourceTier(): number;
        getRotorRenderTexture(arg0: $ItemStack_): $ResourceLocation;
        get index(): number;
        get level(): number;
        get color(): $Color;
        get sourceTier(): number;
    }
    export class $EnumHorizonSide extends $Enum<$EnumHorizonSide> {
        static values(): $EnumHorizonSide[];
        static valueOf(arg0: string): $EnumHorizonSide;
        getEnumWindSide(): $List<$EnumHorizonSide>;
        static EW: $EnumHorizonSide;
        static S: $EnumHorizonSide;
        static SW: $EnumHorizonSide;
        static E: $EnumHorizonSide;
        static W: $EnumHorizonSide;
        static NW: $EnumHorizonSide;
        static EN: $EnumHorizonSide;
        static SN: $EnumHorizonSide;
        static N: $EnumHorizonSide;
        static ES: $EnumHorizonSide;
        get enumWindSide(): $List<$EnumHorizonSide>;
    }
    /**
     * Values that may be interpreted as {@link $EnumHorizonSide}.
     */
    export type $EnumHorizonSide_ = "w" | "e" | "n" | "s" | "nw" | "sw" | "en" | "es" | "ew" | "sn";
    export class $EnumRotorSide extends $Enum<$EnumRotorSide> {
        static values(): $EnumRotorSide[];
        static valueOf(arg0: string): $EnumRotorSide;
        getGood_sides(): $EnumHorizonSide;
        getNeutral_sides(): $EnumHorizonSide;
        getBad_sides(): $EnumHorizonSide;
        static S: $EnumRotorSide;
        static E: $EnumRotorSide;
        good_sides: $EnumHorizonSide;
        static W: $EnumRotorSide;
        bad_sides: $EnumHorizonSide;
        neutral_sides: $EnumHorizonSide;
        static N: $EnumRotorSide;
    }
    /**
     * Values that may be interpreted as {@link $EnumRotorSide}.
     */
    export type $EnumRotorSide_ = "w" | "e" | "n" | "s";
}
