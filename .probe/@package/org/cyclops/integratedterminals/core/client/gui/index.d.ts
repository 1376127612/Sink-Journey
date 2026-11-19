import { $HandlerWrappedTerminalCraftingOption, $HandlerWrappedTerminalCraftingPlan } from "@package/org/cyclops/integratedterminals/core/terminalstorage/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IngredientComponent, $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $ITerminalStorageLocation } from "@package/org/cyclops/integratedterminals/api/terminalstorage/location";

declare module "@package/org/cyclops/integratedterminals/core/client/gui" {
    export class $CraftingOptionGuiData<T, M, L> {
        getAmount(): number;
        getCraftingOption(): $HandlerWrappedTerminalCraftingOption<T>;
        getCraftingPlan(): $HandlerWrappedTerminalCraftingPlan;
        getLocation(): $ITerminalStorageLocation<L>;
        getChannel(): number;
        getComponent(): $IngredientComponent<T, M>;
        copyWithAmount(arg0: number): $CraftingOptionGuiData<T, M, L>;
        writeToPacketBuffer(arg0: $RegistryFriendlyByteBuf): void;
        getTabName(): string;
        static readFromPacketBuffer(arg0: $RegistryFriendlyByteBuf): $CraftingOptionGuiData<any, any, any>;
        getLocationInstance(): L;
        constructor(arg0: $IngredientComponent_<T, M>, arg1: string, arg2: number, arg3: $HandlerWrappedTerminalCraftingOption<T> | null, arg4: number, arg5: $HandlerWrappedTerminalCraftingPlan, arg6: $ITerminalStorageLocation<L>, arg7: L);
        get amount(): number;
        get craftingOption(): $HandlerWrappedTerminalCraftingOption<T>;
        get craftingPlan(): $HandlerWrappedTerminalCraftingPlan;
        get location(): $ITerminalStorageLocation<L>;
        get channel(): number;
        get component(): $IngredientComponent<T, M>;
        get tabName(): string;
        get locationInstance(): L;
    }
}
