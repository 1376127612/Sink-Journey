import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Set_ } from "@package/java/util";

declare module "@package/hellfirepvp/astralsorcery/common/util/tank" {
    export class $FluidTankView$InputFilter {
        static NO_FILTER: $FluidTankView$InputFilter;
    }
    export interface $FluidTankView$InputFilter {
        and(arg0: $FluidTankView$InputFilter_): $FluidTankView$InputFilter;
        canInsert(arg0: number, arg1: $FluidStack_, arg2: $FluidStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidTankView$InputFilter}.
     */
    export type $FluidTankView$InputFilter_ = ((arg0: number, arg1: $FluidStack, arg2: $FluidStack) => boolean);
    export class $FluidContainerList {
        static create(): $FluidContainerList;
        getTank(arg0: number): $FluidContainer;
        static CODEC: $Codec<$FluidContainerList>;
    }
    export class $FluidContainer {
        getModifiableContent(): $FluidStack;
        clear(): void;
        getContent(): $FluidStack;
        setContent(arg0: $FluidStack_): void;
        static CODEC: $Codec<$FluidContainer>;
        constructor(arg0: $FluidStack_);
        get modifiableContent(): $FluidStack;
    }
    export class $FluidTankView$ExtractFilter {
        static NO_FILTER: $FluidTankView$ExtractFilter;
    }
    export interface $FluidTankView$ExtractFilter {
        and(arg0: $FluidTankView$ExtractFilter_): $FluidTankView$ExtractFilter;
        canExtract(arg0: number, arg1: number, arg2: $FluidStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidTankView$ExtractFilter}.
     */
    export type $FluidTankView$ExtractFilter_ = ((arg0: number, arg1: number, arg2: $FluidStack) => boolean);
    export class $FluidTankView implements $IFluidHandler {
        clearTanks(): void;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getWithoutFilters<T>(arg0: $Function_<$FluidTankView, T>): T;
        withoutFilters(arg0: $Consumer_<$FluidTankView>): void;
        getFluidAccess(arg0: $Direction_ | null): $FluidTankView;
        clearTank(arg0: number): void;
        constructor(arg0: number, arg1: $FluidContainerList, arg2: $Set_<$Direction_>, arg3: $Consumer_<number>, arg4: $Function_<number, number>, arg5: $FluidTankView$InputFilter_, arg6: $FluidTankView$ExtractFilter_);
        get tanks(): number;
    }
}
