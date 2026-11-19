import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $RecipeManager, $Recipe, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $FluidIngredient, $SizedFluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as processor from "@package/com/nred/nuclearcraft/recipe/processor";

declare module "@package/com/nred/nuclearcraft/recipe" {
    export class $IRecipeHandler {
    }
    export interface $IRecipeHandler {
        isValidFluidInput(arg0: $FluidStack_, arg1: $RecipeManager): boolean;
        getFluidInputSize(): number;
        getFluidOutputSize(): number;
        get fluidInputSize(): number;
        get fluidOutputSize(): number;
    }
    export class $RecipeMatchResult {
        itemInputOrder: $IntList;
        fluidInputOrder: $IntList;
        isMatch: boolean;
        static FAIL: $RecipeMatchResult;
        constructor(arg0: boolean, arg1: $IntList, arg2: $IntList);
    }
    export class $BasicRecipe implements $IRecipe, $Recipe<$BasicRecipeInput> {
        assemble(arg0: $BasicRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getFluidIngredients(): $List<$SizedChanceFluidIngredient>;
        getFluidProducts(): $List<$SizedChanceFluidIngredient>;
        getItemProducts(): $List<$SizedChanceItemIngredient>;
        getItemIngredients(): $List<$SizedChanceItemIngredient>;
        matches(arg0: $BasicRecipeInput_, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getFluidIngredient(): $SizedChanceFluidIngredient;
        getItemProduct(): $SizedChanceItemIngredient;
        getFluidProduct(): $SizedChanceFluidIngredient;
        getItemIngredient(): $SizedChanceItemIngredient;
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: $BasicRecipeInput_): $NonNullList<$ItemStack>;
        fluidProducts: $List<$SizedChanceFluidIngredient>;
        itemIngredients: $List<$SizedChanceItemIngredient>;
        itemProducts: $List<$SizedChanceItemIngredient>;
        fluidIngredients: $List<$SizedChanceFluidIngredient>;
        constructor(arg0: $List_<$SizedChanceItemIngredient>, arg1: $List_<$SizedChanceFluidIngredient>, arg2: $List_<$SizedChanceItemIngredient>, arg3: $List_<$SizedChanceFluidIngredient>);
        get serializer(): $RecipeSerializer<never>;
        get type(): $RecipeType<never>;
        get fluidIngredient(): $SizedChanceFluidIngredient;
        get itemProduct(): $SizedChanceItemIngredient;
        get fluidProduct(): $SizedChanceFluidIngredient;
        get itemIngredient(): $SizedChanceItemIngredient;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
        get group(): string;
    }
    export class $SizedChanceFluidIngredient {
        getFluidsRaw(): $FluidStack[];
        getStackRaw(): $FluidStack;
        getMeanStackSize(): number;
        minStackSize(): number;
        chancePercent(): number;
        test(arg0: $FluidStack_): boolean;
        isEmpty(): boolean;
        static of(arg0: $Fluid_, arg1: number, arg2: number, arg3: number, arg4: number): $SizedChanceFluidIngredient;
        static of(arg0: $FluidStack_): $SizedChanceFluidIngredient;
        static of(arg0: $Fluid_, arg1: number, arg2: number, arg3: number): $SizedChanceFluidIngredient;
        static of(arg0: $Fluid_, arg1: number): $SizedChanceFluidIngredient;
        static of(arg0: $TagKey_<$Fluid>, arg1: number, arg2: number, arg3: number): $SizedChanceFluidIngredient;
        static of(arg0: $TagKey_<$Fluid>, arg1: number): $SizedChanceFluidIngredient;
        static of(arg0: $FluidStack_, arg1: number, arg2: number): $SizedChanceFluidIngredient;
        increment(): number;
        getStack(): $FluidStack;
        amount(): number;
        sized(): $SizedFluidIngredient;
        getFluids(): $FluidStack[];
        ingredient(): $FluidIngredient;
        static EMPTY: $SizedChanceFluidIngredient;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedChanceFluidIngredient>;
        static FLAT_CODEC: $Codec<$SizedChanceFluidIngredient>;
        constructor(arg0: $FluidIngredient_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $FluidIngredient_, arg1: number);
        constructor(arg0: $FluidIngredient_, arg1: number, arg2: number, arg3: number);
        get fluidsRaw(): $FluidStack[];
        get stackRaw(): $FluidStack;
        get meanStackSize(): number;
        get empty(): boolean;
        get stack(): $FluidStack;
        get fluids(): $FluidStack[];
    }
    export class $SizedChanceItemIngredient {
        getItems(): $ItemStack[];
        getItemsRaw(): $ItemStack[];
        getStackRaw(): $ItemStack;
        getMeanStackSize(): number;
        minStackSize(): number;
        chancePercent(): number;
        test(arg0: $ItemStack_): boolean;
        isEmpty(): boolean;
        static of(arg0: $TagKey_<$Item>, arg1: number): $SizedChanceItemIngredient;
        static of(arg0: $ItemLike_, arg1: number, arg2: number): $SizedChanceItemIngredient;
        static of(arg0: $ItemStack_): $SizedChanceItemIngredient;
        static of(arg0: $ItemLike_, arg1: number): $SizedChanceItemIngredient;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: number): $SizedChanceItemIngredient;
        count(): number;
        getStack(): $ItemStack;
        sized(): $SizedIngredient;
        ingredient(): $Ingredient;
        static EMPTY: $SizedChanceItemIngredient;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedChanceItemIngredient>;
        static FLAT_CODEC: $Codec<$SizedChanceItemIngredient>;
        constructor(arg0: $Ingredient_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Ingredient_, arg1: number);
        get items(): $ItemStack[];
        get itemsRaw(): $ItemStack[];
        get stackRaw(): $ItemStack;
        get meanStackSize(): number;
        get empty(): boolean;
        get stack(): $ItemStack;
    }
    export class $IRecipe {
    }
    export interface $IRecipe {
        getFluidIngredient(): $SizedChanceFluidIngredient;
        getFluidIngredients(): $List<$SizedChanceFluidIngredient>;
        getItemProduct(): $SizedChanceItemIngredient;
        getFluidProduct(): $SizedChanceFluidIngredient;
        getItemIngredient(): $SizedChanceItemIngredient;
        getFluidProducts(): $List<$SizedChanceFluidIngredient>;
        getItemProducts(): $List<$SizedChanceItemIngredient>;
        getItemIngredients(): $List<$SizedChanceItemIngredient>;
        get fluidIngredient(): $SizedChanceFluidIngredient;
        get fluidIngredients(): $List<$SizedChanceFluidIngredient>;
        get itemProduct(): $SizedChanceItemIngredient;
        get fluidProduct(): $SizedChanceFluidIngredient;
        get itemIngredient(): $SizedChanceItemIngredient;
        get fluidProducts(): $List<$SizedChanceFluidIngredient>;
        get itemProducts(): $List<$SizedChanceItemIngredient>;
        get itemIngredients(): $List<$SizedChanceItemIngredient>;
    }
    export class $RecipeUnitInfo {
        static readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): $RecipeUnitInfo;
        getString(arg0: number, arg1: number): string;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): void;
        withRateMultiplier(arg0: number): $RecipeUnitInfo;
        unit: string;
        rateMultiplier: number;
        static DEFAULT: $RecipeUnitInfo;
        startingPrefix: number;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $ProcessorRecipe extends $BasicRecipe {
        getBaseProcessPower(arg0: number): number;
        getBaseProcessRadiation(): number;
        getProcessTimeMultiplier(): number;
        getProcessPowerMultiplier(): number;
        getBaseProcessTime(arg0: number): number;
        fluidProducts: $List<$SizedChanceFluidIngredient>;
        itemIngredients: $List<$SizedChanceItemIngredient>;
        itemProducts: $List<$SizedChanceItemIngredient>;
        fluidIngredients: $List<$SizedChanceFluidIngredient>;
        constructor(arg0: $List_<$SizedChanceItemIngredient>, arg1: $List_<$SizedChanceItemIngredient>, arg2: $List_<$SizedChanceFluidIngredient>, arg3: $List_<$SizedChanceFluidIngredient>, arg4: number, arg5: number);
        constructor(arg0: $List_<$SizedChanceItemIngredient>, arg1: $List_<$SizedChanceItemIngredient>, arg2: $List_<$SizedChanceFluidIngredient>, arg3: $List_<$SizedChanceFluidIngredient>, arg4: number, arg5: number, arg6: number);
        get baseProcessRadiation(): number;
        get processTimeMultiplier(): number;
        get processPowerMultiplier(): number;
    }
    export class $BasicRecipeInput extends $Record implements $RecipeInput {
        fluidIngredients(): $List<$SizedChanceFluidIngredient>;
        itemIngredients(): $List<$SizedChanceItemIngredient>;
        size(): number;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        getFluid(arg0: number): $FluidStack;
        fluid_size(): number;
        self(): $RecipeInput;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(itemIngredients: $List_<$SizedChanceItemIngredient>, fluidIngredients: $List_<$SizedChanceFluidIngredient>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BasicRecipeInput}.
     */
    export type $BasicRecipeInput_ = { fluidIngredients?: $List_<$SizedChanceFluidIngredient>, itemIngredients?: $List_<$SizedChanceItemIngredient>,  } | [fluidIngredients?: $List_<$SizedChanceFluidIngredient>, itemIngredients?: $List_<$SizedChanceItemIngredient>, ];
    export class $RecipeInfo<RECIPE extends $IRecipe> {
        getFluidInputOrder(): $IntList;
        getItemInputOrder(): $IntList;
        getRecipeUnitInfo(arg0: number): $RecipeUnitInfo;
        matchResult: $RecipeMatchResult;
        recipe: RECIPE;
        constructor(arg0: RECIPE, arg1: $RecipeMatchResult);
        get fluidInputOrder(): $IntList;
        get itemInputOrder(): $IntList;
    }
}
