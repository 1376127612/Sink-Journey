import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $IFluidHandlerModifiable } from "@package/com/lowdragmc/lowdraglib2/misc";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleFluidContent, $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $DataComponentType } from "@package/net/minecraft/core/component";

declare module "@package/net/neoforged/neoforge/fluids/capability/templates" {
    export class $FluidHandlerItemStackSimple$SwapEmpty extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $FluidHandlerItemStack$Consumable extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $FluidTank implements $IFluidHandler, $IFluidTank, $IFluidHandlerModifiable {
        isEmpty(): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CompoundTag;
        getSpace(): number;
        setCapacity(arg0: number): $FluidTank;
        getCapacity(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluid(): $FluidStack;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        isFluidValid(arg0: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        setFluid(arg0: $FluidStack_): void;
        getTankCapacity(arg0: number): number;
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FluidTank;
        getFluidAmount(): number;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        setValidator(arg0: $Predicate_<$FluidStack>): $FluidTank;
        supportsDrain(arg0: number): boolean;
        supportsFill(arg0: number): boolean;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Predicate_<$FluidStack>);
        get empty(): boolean;
        get space(): number;
        get tanks(): number;
        get fluidAmount(): number;
        set validator(value: $Predicate_<$FluidStack>);
    }
    export class $FluidHandlerItemStack implements $IFluidHandlerItem {
        canFillFluidType(arg0: $FluidStack_): boolean;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getContainer(): $ItemStack;
        getFluid(): $FluidStack;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get container(): $ItemStack;
        get fluid(): $FluidStack;
        get tanks(): number;
    }
    export class $FluidHandlerItemStack$SwapEmpty extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $EmptyFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        static INSTANCE: $EmptyFluidHandler;
        get tanks(): number;
    }
    export class $FluidHandlerItemStackSimple implements $IFluidHandlerItem {
        canFillFluidType(arg0: $FluidStack_): boolean;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getContainer(): $ItemStack;
        getFluid(): $FluidStack;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get container(): $ItemStack;
        get fluid(): $FluidStack;
        get tanks(): number;
    }
    export class $FluidHandlerItemStackSimple$Consumable extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $VoidFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        static INSTANCE: $VoidFluidHandler;
        constructor();
        get tanks(): number;
    }
}
