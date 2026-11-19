import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $RecipeType, $RecipeInput, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Record } from "@package/java/lang";

declare module "@package/de/ellpeck/actuallyadditions/mod/crafting" {
    export class $EmpowererRecipe implements $Recipe<$RecipeInput> {
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_): boolean;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getTime(): number;
        getInput(): $Ingredient;
        getOutput(): $ItemStack;
        isSpecial(): boolean;
        getStandThree(): $Ingredient;
        getStandFour(): $Ingredient;
        getParticleColors(): number;
        getStandOne(): $Ingredient;
        getStandTwo(): $Ingredient;
        getEnergyPerStand(): number;
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        static NAME: string;
        constructor(arg0: $ItemStack_, arg1: $Ingredient_, arg2: $NonNullList<$Ingredient_>, arg3: number, arg4: number, arg5: number);
        get serializer(): $RecipeSerializer<never>;
        get type(): $RecipeType<never>;
        get time(): number;
        get input(): $Ingredient;
        get output(): $ItemStack;
        get special(): boolean;
        get standThree(): $Ingredient;
        get standFour(): $Ingredient;
        get particleColors(): number;
        get standOne(): $Ingredient;
        get standTwo(): $Ingredient;
        get energyPerStand(): number;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $CrushingRecipe$CrushingResult extends $Record {
        chance(): number;
        stack(): $ItemStack;
        static EMPTY: $CrushingRecipe$CrushingResult;
        constructor(stack: $ItemStack_, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $CrushingRecipe$CrushingResult}.
     */
    export type $CrushingRecipe$CrushingResult_ = { chance?: number, stack?: $ItemStack_,  } | [chance?: number, stack?: $ItemStack_, ];
    export class $CoffeeIngredientRecipe$EffectInstance extends $Record {
        toNetwork(arg0: $FriendlyByteBuf): void;
        static fromNetwork(arg0: $FriendlyByteBuf): $CoffeeIngredientRecipe$EffectInstance;
        duration(): number;
        effect(): $ResourceLocation;
        amplifier(): number;
        static CODEC: $Codec<$CoffeeIngredientRecipe$EffectInstance>;
        static EMPTY: $CoffeeIngredientRecipe$EffectInstance;
        constructor(arg0: $MobEffectInstance);
        constructor(effect: $ResourceLocation_, duration: number, amplifier: number);
    }
    /**
     * Values that may be interpreted as {@link $CoffeeIngredientRecipe$EffectInstance}.
     */
    export type $CoffeeIngredientRecipe$EffectInstance_ = { amplifier?: number, duration?: number, effect?: $ResourceLocation_,  } | [amplifier?: number, duration?: number, effect?: $ResourceLocation_, ];
}
