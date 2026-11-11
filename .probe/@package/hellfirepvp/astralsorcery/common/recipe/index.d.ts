import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $RecipeType, $RecipeInput, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResolvingRecipeTypeRegistryObject } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $List } from "@package/java/util";
export * as altar from "@package/hellfirepvp/astralsorcery/common/recipe/altar";
export * as infusion from "@package/hellfirepvp/astralsorcery/common/recipe/infusion";
export * as focal from "@package/hellfirepvp/astralsorcery/common/recipe/focal";
export * as liquid from "@package/hellfirepvp/astralsorcery/common/recipe/liquid";
export * as attunement from "@package/hellfirepvp/astralsorcery/common/recipe/attunement";
export * as lumen from "@package/hellfirepvp/astralsorcery/common/recipe/lumen";

declare module "@package/hellfirepvp/astralsorcery/common/recipe" {
    export class $CustomRecipe<R extends $CustomRecipe<R, T>, T extends $CustomRecipeInput> implements $Recipe<T> {
        getType(): $RecipeType<never>;
        setGroup(arg0: string): void;
        getGroup(): string;
        isSpecial(): boolean;
        assemble(arg0: T, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getRecipeSerializer(): $Supplier<$RecipeSerializer<R>>;
        getRecipeType(): $ResolvingRecipeTypeRegistryObject<R>;
        consumeInputs(arg0: T, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: T, arg1: $HolderLookup$Provider): void;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        showNotification(): boolean;
        getRemainingItems(arg0: T): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        getToastSymbol(): $ItemStack;
        constructor();
        get type(): $RecipeType<never>;
        get special(): boolean;
        get serializer(): $RecipeSerializer<never>;
        get recipeSerializer(): $Supplier<$RecipeSerializer<R>>;
        get recipeType(): $ResolvingRecipeTypeRegistryObject<R>;
        get incomplete(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get toastSymbol(): $ItemStack;
    }
    export class $CustomRecipeInput implements $RecipeInput {
        size(): number;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor();
        get empty(): boolean;
    }
    export class $ActiveRecipe<T extends $Recipe<never>> {
        isValid(arg0: $Level_): boolean;
        getRecipe(arg0: $Level_): (T) | undefined;
        getRecipeId(): $ResourceLocation;
        get recipeId(): $ResourceLocation;
    }
}
