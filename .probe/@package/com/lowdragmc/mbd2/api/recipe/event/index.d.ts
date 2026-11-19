import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $RecipeType, $Recipe, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $MBDRecipeType, $MBDRecipe } from "@package/com/lowdragmc/mbd2/api/recipe";

declare module "@package/com/lowdragmc/mbd2/api/recipe/event" {
    export class $RecipeUIEvent extends $RecipeTypeEvent implements $ICancellableEvent {
        getRecipe(): $MBDRecipe;
        getUi(): $UI;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        ui: $UI;
        recipeType: $MBDRecipeType;
        recipe: $MBDRecipe;
        constructor(arg0: $MBDRecipeType, arg1: $MBDRecipe, arg2: $UI);
    }
    export class $TransferProxyRecipeEvent extends $RecipeTypeEvent implements $ICancellableEvent {
        getMbdRecipe(): $MBDRecipe;
        getProxyRecipeId(): $ResourceLocation;
        getProxyTypeId(): $ResourceLocation;
        getProxyRecipe(): $Recipe<never>;
        getProxyType(): $RecipeType<never>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        proxyTypeId: $ResourceLocation;
        recipeType: $MBDRecipeType;
        proxyRecipe: $Recipe<never>;
        proxyType: $RecipeType<never>;
        proxyRecipeId: $ResourceLocation;
        mbdRecipe: $MBDRecipe;
        constructor(arg0: $MBDRecipeType, arg1: $ResourceLocation_, arg2: $RecipeType_<never>, arg3: $ResourceLocation_, arg4: $Recipe<never>, arg5: $MBDRecipe);
    }
    export class $RecipeTypeEvent extends $Event {
        getRecipeType(): $MBDRecipeType;
        postKubeJSEvent(): $RecipeTypeEvent;
        postCustomEvent(): $RecipeTypeEvent;
        recipeType: $MBDRecipeType;
        constructor(arg0: $MBDRecipeType);
    }
}
