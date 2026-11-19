import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
export * as client from "@package/vazkii/patchouli/mixin/client";

declare module "@package/vazkii/patchouli/mixin" {
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
