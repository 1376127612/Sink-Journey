import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Function_ } from "@package/java/util/function";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IContentChangeAware } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Runnable_, $Runnable } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/misc" {
    export class $IFluidHandlerModifiable {
    }
    export interface $IFluidHandlerModifiable extends $IFluidHandler {
        supportsFill(arg0: number): boolean;
        supportsDrain(arg0: number): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
    }
    export class $ItemStackTransfer extends $ItemStackHandler implements $IContentChangeAware {
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: boolean): void;
        setOnContentsChanged(arg0: $Runnable_): void;
        getOnContentsChanged(): $Runnable;
        copy(): $ItemStackTransfer;
        setFilter(arg0: $Function_<$ItemStack, boolean>): void;
        constructor();
        constructor(arg0: number);
        constructor(arg0: $NonNullList<$ItemStack_>);
        constructor(arg0: $ItemStack_);
        set filter(value: $Function_<$ItemStack, boolean>);
    }
}
