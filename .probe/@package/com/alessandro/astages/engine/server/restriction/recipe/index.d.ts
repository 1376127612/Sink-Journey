import { $ARestriction } from "@package/com/alessandro/astages/api/restriction";
import { $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $AMarkable } from "@package/com/alessandro/astages/api/feature";
import { $RecipeWrapper, $RecipeModWrapper_, $RecipeModWrapper, $RecipeWrapper_ } from "@package/com/alessandro/astages/api/wrapper";

declare module "@package/com/alessandro/astages/engine/server/restriction/recipe" {
    export class $ABaseRecipeRestriction<R extends $ARestriction<R, U, V>, U, V> extends $ARestriction<R, U, V> implements $AMarkable {
        markAsDirty(): void;
        constructor(id: string, stage: string);
    }
    export class $ARecipeModRestriction extends $ABaseRecipeRestriction<$ARecipeModRestriction, $RecipeModWrapper, $RecipeWrapper> {
        isRestricted(wrapper: $RecipeWrapper_): boolean;
        getIgnoredRecipeIds(): $List<$ResourceLocation>;
        ignoreItems(...itemIds: string[]): $ARecipeModRestriction;
        getModId(): string;
        restrict(wrapper: $RecipeModWrapper_): $ARecipeModRestriction;
        constructor(id: string, stage: string);
        get ignoredRecipeIds(): $List<$ResourceLocation>;
        get modId(): string;
    }
    export class $ARecipeRestriction extends $ABaseRecipeRestriction<$ARecipeRestriction, $RecipeWrapper, $RecipeWrapper> {
        isRestricted(wrapper: $RecipeWrapper_): boolean;
        getType(): $RecipeType<never>;
        getRecipes(): $List<$ResourceLocation>;
        restrict(wrapper: $RecipeWrapper_): $ARecipeRestriction;
        constructor(id: string, stage: string);
        get type(): $RecipeType<never>;
        get recipes(): $List<$ResourceLocation>;
    }
}
