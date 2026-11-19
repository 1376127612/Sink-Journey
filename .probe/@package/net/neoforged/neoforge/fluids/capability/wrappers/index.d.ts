import { $Level_ } from "@package/net/minecraft/world/level";
import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BucketPickup, $LiquidBlockContainer } from "@package/net/minecraft/world/level/block";
import { $VoidFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/net/neoforged/neoforge/fluids/capability/wrappers" {
    export class $FluidBucketWrapper implements $IFluidHandlerItem {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        canFillFluidType(arg0: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluid(): $FluidStack;
        getContainer(): $ItemStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        constructor(arg0: $ItemStack_);
        get tanks(): number;
        get fluid(): $FluidStack;
        get container(): $ItemStack;
    }
    export class $CauldronWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get tanks(): number;
    }
    export class $BlockWrapper$LiquidContainerBlockWrapper extends $VoidFluidHandler {
        static INSTANCE: $VoidFluidHandler;
        constructor(arg0: $LiquidBlockContainer, arg1: $Level_, arg2: $BlockPos_);
    }
    export class $BlockWrapper extends $VoidFluidHandler {
        static INSTANCE: $VoidFluidHandler;
        constructor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_);
    }
    export class $BucketPickupHandlerWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        constructor(arg0: $Player, arg1: $BucketPickup, arg2: $Level_, arg3: $BlockPos_);
        get tanks(): number;
    }
}
