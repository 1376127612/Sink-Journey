import { $ITerminalStorageTabIngredientCraftingHandler, $ITerminalCraftingOption, $ITerminalCraftingPlanFlat } from "@package/org/cyclops/integratedterminals/api/terminalstorage/crafting";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";

declare module "@package/org/cyclops/integratedterminals/core/terminalstorage/crafting" {
    export class $HandlerWrappedTerminalCraftingOption<T> {
        getHandler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
        static deserialize<T, M>(arg0: $HolderLookup$Provider, arg1: $IngredientComponent_<T, M>, arg2: $CompoundTag_): $HandlerWrappedTerminalCraftingOption<T>;
        static serialize<T>(arg0: $HolderLookup$Provider, arg1: $HandlerWrappedTerminalCraftingOption<T>): $CompoundTag;
        getCraftingOption(): $ITerminalCraftingOption<T>;
        constructor(arg0: $ITerminalStorageTabIngredientCraftingHandler<any, any>, arg1: $ITerminalCraftingOption<T>);
        get handler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
        get craftingOption(): $ITerminalCraftingOption<T>;
    }
    export class $HandlerWrappedTerminalCraftingPlan {
        getHandler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $HandlerWrappedTerminalCraftingPlan;
        static serialize(arg0: $HolderLookup$Provider, arg1: $HandlerWrappedTerminalCraftingPlan): $CompoundTag;
        getCraftingPlanFlat(): $ITerminalCraftingPlanFlat<any>;
        constructor(arg0: $ITerminalStorageTabIngredientCraftingHandler<any, any>, arg1: $ITerminalCraftingPlanFlat<any>);
        get handler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
        get craftingPlanFlat(): $ITerminalCraftingPlanFlat<any>;
    }
}
