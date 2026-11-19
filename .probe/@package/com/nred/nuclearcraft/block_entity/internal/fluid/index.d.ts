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
        getTextColor(): $ChatFormatting;
        getSerializedName(): string;
        static fromInt(arg0: $TankSorption$Type_, arg1: number): $TankSorption;
        getTextureWidth(): number;
        getTextureHeight(): number;
        canFill(): boolean;
        canDrain(): boolean;
        canConnect(): boolean;
        static values(): $TankSorption[];
        static valueOf(arg0: string): $TankSorption;
        next(arg0: $TankSorption$Type_, arg1: boolean): $TankSorption;
        getTexture(arg0: boolean): $ResourceLocation;
        getRemappedEnumConstantName(): string;
        static AUTO_IN: $TankSorption;
        static AUTO_OUT: $TankSorption;
        static IN: $TankSorption;
        static NON: $TankSorption;
        static BOTH: $TankSorption;
        static OUT: $TankSorption;
        get textColor(): $ChatFormatting;
        get serializedName(): string;
        get textureWidth(): number;
        get textureHeight(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TankSorption}.
     */
    export type $TankSorption_ = "in" | "out" | "both" | "non" | "auto_in" | "auto_out";
    export class $Tank$TankInfo extends $Record {
        static getInfoList(arg0: $List_<$Tank>): $List<$Tank$TankInfo>;
        static readInfoList(arg0: $List_<$Tank$TankInfo_>, arg1: $List_<$Tank>): void;
        location(): $ResourceLocation;
        amount(): number;
        constructor(arg0: $Tank);
        constructor(location: $ResourceLocation_, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $Tank$TankInfo}.
     */
    export type $Tank$TankInfo_ = { location?: $ResourceLocation_, amount?: number,  } | [location?: $ResourceLocation_, amount?: number, ];
    export class $Tank extends $FluidTank {
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): $Tank;
        readInfo(arg0: $Tank$TankInfo_): void;
        setTankCapacity(arg0: number): void;
        setFluidStored(arg0: $FluidStack_): void;
        changeFluidAmount(arg0: number): void;
        changeFluidStored(arg0: $Fluid_, arg1: number): void;
        clampTankAmount(): void;
        static of(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: string): $Tank;
        isFull(): boolean;
        getFluidName(): $Component;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): $CompoundTag;
        mergeTank(arg0: $Tank): void;
        setAllowedFluids(arg0: $Set_<$ResourceLocation_>): void;
        getFluidAmountFraction(): number;
        getFluidId(): $ResourceLocation;
        setFluidAmount(arg0: number): void;
        constructor(arg0: number, arg1: $Set_<$ResourceLocation_>);
        set tankCapacity(value: number);
        set fluidStored(value: $FluidStack_);
        get full(): boolean;
        get fluidName(): $Component;
        set allowedFluids(value: $Set_<$ResourceLocation_>);
        get fluidAmountFraction(): number;
        get fluidId(): $ResourceLocation;
        set fluidAmount(value: number);
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
