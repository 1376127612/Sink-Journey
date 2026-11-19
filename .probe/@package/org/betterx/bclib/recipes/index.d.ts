import { $Level_ } from "@package/net/minecraft/world/level";
import { $UnknownReceipBookCategory } from "@package/org/betterx/bclib/interfaces";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $Recipe, $RecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $NonNullList, $Holder } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/org/betterx/bclib/recipes" {
    export class $AnvilRecipe implements $Recipe<$AnvilRecipeInput>, $UnknownReceipBookCategory {
        getDamage(): number;
        static getHammerSlot(arg0: $Container): number;
        static isHammer(arg0: $Item_): boolean;
        assemble(arg0: $AnvilRecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getMainIngredient(): $Ingredient;
        static getAllHammers(): $Iterable<$Holder<$Item>>;
        static getIngredientSlot(arg0: $Container): number;
        getHammer(arg0: $AnvilRecipeInput): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        matches(arg0: $AnvilRecipeInput, arg1: $Level_): boolean;
        matches(arg0: $AnvilRecipeInput): boolean;
        static register(): void;
        canUse(arg0: $Item_): boolean;
        getType(): $RecipeType<never>;
        getAllowedTools(): $TagKey<$Item>;
        getIngredient(arg0: $AnvilRecipeInput): $ItemStack;
        getInputCount(): number;
        getAnvilLevel(): number;
        checkHammerDurability(arg0: $AnvilRecipeInput, arg1: $Player): boolean;
        isSpecial(): boolean;
        craft(arg0: $AnvilRecipeInput, arg1: $Player): $ItemStack;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: $AnvilRecipeInput): $NonNullList<$ItemStack>;
        static GROUP: string;
        static SERIALIZER: $AnvilRecipe$Serializer;
        static ID: $ResourceLocation;
        static TYPE: $RecipeType<$AnvilRecipe>;
        constructor(arg0: $Ingredient_, arg1: $ItemStack_, arg2: number, arg3: $TagKey_<$Item>, arg4: number, arg5: number);
        get damage(): number;
        get mainIngredient(): $Ingredient;
        static get allHammers(): $Iterable<$Holder<$Item>>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get type(): $RecipeType<never>;
        get allowedTools(): $TagKey<$Item>;
        get inputCount(): number;
        get anvilLevel(): number;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $AnvilRecipeInput implements $RecipeInput {
        hasIngerdient(): boolean;
        getHammer(): $ItemStack;
        hasHammer(): boolean;
        size(): number;
        getItem(arg0: number): $ItemStack;
        getIngredient(): $ItemStack;
        isEmpty(): boolean;
        self(): $RecipeInput;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        INGREDIENT_SLOT: number;
        HAMMER_SLOT: number;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $TagKey_<$Item>);
        get hammer(): $ItemStack;
        get ingredient(): $ItemStack;
        get empty(): boolean;
    }
    export class $AnvilRecipe$Serializer implements $RecipeSerializer<$AnvilRecipe> {
        codec(): $MapCodec<$AnvilRecipe>;
        static toNetwork(arg0: $RegistryFriendlyByteBuf, arg1: $AnvilRecipe): void;
        static fromNetwork(arg0: $RegistryFriendlyByteBuf): $AnvilRecipe;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AnvilRecipe>;
        static CODEC: $MapCodec<$AnvilRecipe>;
        static ITEM_TAG_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TagKey<$Item>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AnvilRecipe>;
        constructor();
    }
}
