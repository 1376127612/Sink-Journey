import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/publicapi/client/jei" {
    export class $RecipeInformationRegistrar {
    }
    export interface $RecipeInformationRegistrar {
        entries(): $List<$RecipeInformation>;
        registerRecipe(id: $ResourceLocation_, translationKey: string, ...arg2: $Object[]): void;
        registerRecipePool(id: $ResourceLocation_, translationKey: string, ...arg2: $Object[]): void;
    }
    export class $RecipeInformation {
    }
    export interface $RecipeInformation {
        target(): $RecipeInformation$Target;
        component(): $Component;
        "arguments"(): $List<$Object>;
        translationKey(): string;
        targetId(): $ResourceLocation;
    }
    export class $WorkstationRegistrar {
    }
    export interface $WorkstationRegistrar {
        entries(): $List<$Workstation>;
        addRecipePoolWorkstation(poolId: $ResourceLocation_, itemId: $ResourceLocation_): void;
        addRecipePoolWorkstation(poolId: $ResourceLocation_, workstation: $ItemStack_): void;
        addRecipePoolWorkstation(poolId: $ResourceLocation_, workstation: $ItemLike_): void;
        addMachineWorkstation(machineId: $ResourceLocation_, recipeTypeId: $ResourceLocation_): void;
    }
    export class $Workstation {
    }
    export interface $Workstation {
    }
    export class $RecipeInformation$Target extends $Enum<$RecipeInformation$Target> {
        static values(): $RecipeInformation$Target[];
        static valueOf(name: string): $RecipeInformation$Target;
        static RECIPE_POOL: $RecipeInformation$Target;
        static RECIPE: $RecipeInformation$Target;
    }
    /**
     * Values that may be interpreted as {@link $RecipeInformation$Target}.
     */
    export type $RecipeInformation$Target_ = "recipe_pool" | "recipe";
}
