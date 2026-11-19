import { $NonNullList } from "@package/net/minecraft/core";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CraftingContainer, $ResultContainer } from "@package/net/minecraft/world/inventory";

declare module "@package/com/illusivesoulworks/polymorph/mixin/core" {
    export class $AccessorSmithingScreen {
    }
    export interface $AccessorSmithingScreen {
        callUpdateArmorStandPreview(arg0: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorSmithingScreen}.
     */
    export type $AccessorSmithingScreen_ = ((arg0: $ItemStack) => void);
    export class $AccessorCraftingMenu {
    }
    export interface $AccessorCraftingMenu {
        getCraftSlots(): $CraftingContainer;
        getResultSlots(): $ResultContainer;
        getPlayer(): $Player;
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
        get player(): $Player;
    }
    export class $AccessorInventoryMenu {
    }
    export interface $AccessorInventoryMenu {
        getCraftSlots(): $CraftingContainer;
        getResultSlots(): $ResultContainer;
        getOwner(): $Player;
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
        get owner(): $Player;
    }
    export class $AccessorSmithingTrimRecipe {
    }
    export interface $AccessorSmithingTrimRecipe {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        get addition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
    }
    export class $AccessorCrafterMenu {
    }
    export interface $AccessorCrafterMenu {
        callRefreshRecipeResult(): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorCrafterMenu}.
     */
    export type $AccessorCrafterMenu_ = (() => void);
    export class $AccessorAbstractFurnaceBlockEntity {
    }
    export interface $AccessorAbstractFurnaceBlockEntity {
        getItems(): $NonNullList<$ItemStack>;
        get items(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorAbstractFurnaceBlockEntity}.
     */
    export type $AccessorAbstractFurnaceBlockEntity_ = (() => $NonNullList<$ItemStack_>);
    export class $AccessorSmithingTransformRecipe {
    }
    export interface $AccessorSmithingTransformRecipe {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        get addition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
    }
}
