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
        getMin(): number;
        getMax(): number;
        static ONE: $EnumLevelGenerators;
        static FOUR: $EnumLevelGenerators;
        static TWO: $EnumLevelGenerators;
        static THREE: $EnumLevelGenerators;
        get min(): number;
        get max(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumLevelGenerators}.
     */
    export type $EnumLevelGenerators_ = "one" | "two" | "three" | "four";
    export class $IWindMechanism {
    }
    export interface $IWindMechanism {
        getAngle(): number;
        getCoefficient(): number;
        setWork(arg0: boolean): void;
        getMinWind(): number;
        can_repair(): boolean;
        getRotorSide(): $EnumRotorSide;
        need_repair(): boolean;
        getRotorDiameter(): number;
        setCoefficient(arg0: number): void;
        getLevelGenerator(): $EnumLevelGenerators;
        setRotorSide(arg0: $EnumRotorSide_): void;
        getMinWindSpeed(): number;
        getAdditionalPower(): number;
        setRotationSpeed(arg0: number): void;
        getAdditionalCoefficient(): number;
        getRotorRenderTexture(): $ResourceLocation;
        getRotor(): $WindRotor;
        getAuto(): boolean;
        getTime(): number;
        getSpace(): boolean;
        change(): void;
        getItemStack(): $ItemStack;
        getMin(): boolean;
        getFacing(): $Direction;
        get angle(): number;
        set work(value: boolean);
        get minWind(): number;
        get rotorDiameter(): number;
        get levelGenerator(): $EnumLevelGenerators;
        get minWindSpeed(): number;
        get additionalPower(): number;
        set rotationSpeed(value: number);
        get additionalCoefficient(): number;
        get rotorRenderTexture(): $ResourceLocation;
        get rotor(): $WindRotor;
        get auto(): boolean;
        get time(): number;
        get space(): boolean;
        get itemStack(): $ItemStack;
        get min(): boolean;
        get facing(): $Direction;
    }
    export class $WindRotor {
    }
    export interface $WindRotor extends $DamageItem {
        getEfficiency(arg0: $ItemStack_): number;
        getDiameter(arg0: $ItemStack_): number;
        getSourceTier(): number;
        getRotorRenderTexture(arg0: $ItemStack_): $ResourceLocation;
        getIndex(): number;
        getLevel(): number;
        getColor(): $Color;
        get sourceTier(): number;
        get index(): number;
        get level(): number;
        get color(): $Color;
    }
    export class $EnumHorizonSide extends $Enum<$EnumHorizonSide> {
        getEnumWindSide(): $List<$EnumHorizonSide>;
        static values(): $EnumHorizonSide[];
        static valueOf(arg0: string): $EnumHorizonSide;
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
        getBad_sides(): $EnumHorizonSide;
        getNeutral_sides(): $EnumHorizonSide;
        getGood_sides(): $EnumHorizonSide;
        static values(): $EnumRotorSide[];
        static valueOf(arg0: string): $EnumRotorSide;
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
