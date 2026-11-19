import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/fluid" {
    export class $IExtendedFluidHandler {
    }
    export interface $IExtendedFluidHandler extends $IFluidHandler {
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
    }
    export class $IExtendedFluidTank {
    }
    export interface $IExtendedFluidTank extends $IFluidTank, $INBTSerializable<$CompoundTag>, $IContentsListener {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        isFluidEqual(arg0: $FluidStack_): boolean;
        setStackUnchecked(arg0: $FluidStack_): void;
        setStackSize(arg0: number, arg1: $Action_): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        getFluidAmount(): number;
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        insert(arg0: $FluidStack_, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        setEmpty(): void;
        setStack(arg0: $FluidStack_): void;
        getNeeded(): number;
        growStack(arg0: number, arg1: $Action_): number;
        set stackUnchecked(value: $FluidStack_);
        get fluidAmount(): number;
        set stack(value: $FluidStack_);
        get needed(): number;
    }
    export class $ISidedFluidHandler {
    }
    export interface $ISidedFluidHandler extends $IExtendedFluidHandler {
        getTanks(): number;
        getTanks(arg0: $Direction_): number;
        getFluidInTank(arg0: number): $FluidStack;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        get fluidSideFor(): $Direction;
    }
    export class $IMekanismFluidHandler {
    }
    export interface $IMekanismFluidHandler extends $ISidedFluidHandler, $IContentsListener {
        getTanks(arg0: $Direction_): number;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
        getFluidTanks(arg0: $Direction_): $List<$IExtendedFluidTank>;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
    }
}
