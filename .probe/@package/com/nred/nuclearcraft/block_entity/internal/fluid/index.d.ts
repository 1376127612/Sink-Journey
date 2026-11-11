import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGuiButton } from "@package/com/nred/nuclearcraft/gui";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Enum, $Record } from "@package/java/lang";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/nred/nuclearcraft/block_entity/internal/fluid" {
    export class $TankSorption extends $Enum<$TankSorption> implements $StringRepresentable, $IGuiButton {
        static values(): $TankSorption[];
        static valueOf(arg0: string): $TankSorption;
        next(arg0: $TankSorption$Type_, arg1: boolean): $TankSorption;
        getTexture(arg0: boolean): $ResourceLocation;
        getSerializedName(): string;
        canConnect(): boolean;
        getTextColor(): $ChatFormatting;
        static fromInt(arg0: $TankSorption$Type_, arg1: number): $TankSorption;
        getTextureWidth(): number;
        getTextureHeight(): number;
        canDrain(): boolean;
        canFill(): boolean;
        getRemappedEnumConstantName(): string;
        static AUTO_IN: $TankSorption;
        static AUTO_OUT: $TankSorption;
        static IN: $TankSorption;
        static NON: $TankSorption;
        static BOTH: $TankSorption;
        static OUT: $TankSorption;
        get serializedName(): string;
        get textColor(): $ChatFormatting;
        get textureWidth(): number;
        get textureHeight(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TankSorption}.
     */
    export type $TankSorption_ = "in" | "out" | "both" | "non" | "auto_in" | "auto_out";
    export class $Tank$TankInfo extends $Record {
        location(): $ResourceLocation;
        amount(): number;
        static readInfoList(arg0: $List_<$Tank$TankInfo_>, arg1: $List_<$Tank>): void;
        static getInfoList(arg0: $List_<$Tank>): $List<$Tank$TankInfo>;
        constructor(arg0: $Tank);
        constructor(location: $ResourceLocation_, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $Tank$TankInfo}.
     */
    export type $Tank$TankInfo_ = { location?: $ResourceLocation_, amount?: number,  } | [location?: $ResourceLocation_, amount?: number, ];
    export class $Tank extends $FluidTank {
        static of(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): $Tank;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): $CompoundTag;
        isFull(): boolean;
        mergeTank(arg0: $Tank): void;
        readInfo(arg0: $Tank$TankInfo_): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): $Tank;
        setFluidStored(arg0: $FluidStack_): void;
        changeFluidAmount(arg0: number): void;
        changeFluidStored(arg0: $Fluid_, arg1: number): void;
        setTankCapacity(arg0: number): void;
        getFluidName(): $Component;
        setFluidAmount(arg0: number): void;
        clampTankAmount(): void;
        setAllowedFluids(arg0: $Set_<$ResourceLocation_>): void;
        getFluidId(): $ResourceLocation;
        getFluidAmountFraction(): number;
        constructor(arg0: number, arg1: $Set_<$ResourceLocation_>);
        get full(): boolean;
        set fluidStored(value: $FluidStack_);
        set tankCapacity(value: number);
        get fluidName(): $Component;
        set fluidAmount(value: number);
        set allowedFluids(value: $Set_<$ResourceLocation_>);
        get fluidId(): $ResourceLocation;
        get fluidAmountFraction(): number;
    }
    export class $TankSorption$Type extends $Enum<$TankSorption$Type> {
        static values(): $TankSorption$Type[];
        static valueOf(arg0: string): $TankSorption$Type;
        static INPUT: $TankSorption$Type;
        static OUTPUT: $TankSorption$Type;
        static DEFAULT: $TankSorption$Type;
    }
    /**
     * Values that may be interpreted as {@link $TankSorption$Type}.
     */
    export type $TankSorption$Type_ = "default" | "input" | "output";
}
