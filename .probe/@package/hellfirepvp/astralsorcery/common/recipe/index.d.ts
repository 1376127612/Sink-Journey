import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $RecipeType, $RecipeInput, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResolvingRecipeTypeRegistryObject } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
export * as altar from "@package/hellfirepvp/astralsorcery/common/recipe/altar";
export * as infusion from "@package/hellfirepvp/astralsorcery/common/recipe/infusion";
export * as focal from "@package/hellfirepvp/astralsorcery/common/recipe/focal";
export * as liquid from "@package/hellfirepvp/astralsorcery/common/recipe/liquid";
export * as attunement from "@package/hellfirepvp/astralsorcery/common/recipe/attunement";
export * as lumen from "@package/hellfirepvp/astralsorcery/common/recipe/lumen";

declare module "@package/hellfirepvp/astralsorcery/common/recipe" {
    export class $CustomRecipe<R extends $CustomRecipe<R, T>, T extends $CustomRecipeInput> implements $Recipe<T> {
        assemble(arg0: T, arg1: $HolderLookup$Provider): $ItemStack;
        getRecipeType(): $ResolvingRecipeTypeRegistryObject<R>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        showNotification(): boolean;
        getRecipeSerializer(): $Supplier<$RecipeSerializer<R>>;
        consumeInputs(arg0: T, arg1: $HolderLookup$Provider): boolean;
        createOutput(arg0: T, arg1: $HolderLookup$Provider): void;
        getType(): $RecipeType<never>;
        setGroup(arg0: string): void;
        isSpecial(): boolean;
        getGroup(): string;
        getIngredients(): $NonNullList<$Ingredient>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getRemainingItems(arg0: T): $NonNullList<$ItemStack>;
        constructor();
        get recipeType(): $ResolvingRecipeTypeRegistryObject<R>;
        get serializer(): $RecipeSerializer<never>;
        get recipeSerializer(): $Supplier<$RecipeSerializer<R>>;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $CustomRecipeInput implements $RecipeInput {
        size(): number;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        self(): $RecipeInput;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor();
        get empty(): boolean;
    }
    export class $ActiveRecipe<T extends $Recipe<never>> {
        getRecipeId(): $ResourceLocation;
        getRecipe(arg0: $Level_): (T) | undefined;
        isValid(arg0: $Level_): boolean;
        get recipeId(): $ResourceLocation;
    }
}
