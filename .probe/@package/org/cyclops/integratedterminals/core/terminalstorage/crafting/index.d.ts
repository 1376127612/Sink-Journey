import { $ITerminalStorageTabIngredientCraftingHandler, $ITerminalCraftingOption, $ITerminalCraftingPlanFlat } from "@package/org/cyclops/integratedterminals/api/terminalstorage/crafting";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";

declare module "@package/org/cyclops/integratedterminals/core/terminalstorage/crafting" {
    export class $HandlerWrappedTerminalCraftingOption<T> {
        getCraftingOption(): $ITerminalCraftingOption<T>;
        getHandler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
        static deserialize<T, M>(arg0: $HolderLookup$Provider, arg1: $IngredientComponent_<T, M>, arg2: $CompoundTag_): $HandlerWrappedTerminalCraftingOption<T>;
        static serialize<T>(arg0: $HolderLookup$Provider, arg1: $HandlerWrappedTerminalCraftingOption<T>): $CompoundTag;
        constructor(arg0: $ITerminalStorageTabIngredientCraftingHandler<any, any>, arg1: $ITerminalCraftingOption<T>);
        get craftingOption(): $ITerminalCraftingOption<T>;
        get handler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
    }
    export class $HandlerWrappedTerminalCraftingPlan {
        getCraftingPlanFlat(): $ITerminalCraftingPlanFlat<any>;
        getHandler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $HandlerWrappedTerminalCraftingPlan;
        static serialize(arg0: $HolderLookup$Provider, arg1: $HandlerWrappedTerminalCraftingPlan): $CompoundTag;
        constructor(arg0: $ITerminalStorageTabIngredientCraftingHandler<any, any>, arg1: $ITerminalCraftingPlanFlat<any>);
        get craftingPlanFlat(): $ITerminalCraftingPlanFlat<any>;
        get handler(): $ITerminalStorageTabIngredientCraftingHandler<any, any>;
    }
}
