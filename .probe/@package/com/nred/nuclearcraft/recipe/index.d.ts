import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $RecipeManager, $Recipe, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
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
        matches(arg0: $BasicRecipeInput_, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(arg0: $BasicRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getFluidIngredients(): $List<$SizedChanceFluidIngredient>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getItemProducts(): $List<$SizedChanceItemIngredient>;
        getItemIngredients(): $List<$SizedChanceItemIngredient>;
        getFluidProducts(): $List<$SizedChanceFluidIngredient>;
        getFluidIngredient(): $SizedChanceFluidIngredient;
        getFluidProduct(): $SizedChanceFluidIngredient;
        getItemIngredient(): $SizedChanceItemIngredient;
        getItemProduct(): $SizedChanceItemIngredient;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $BasicRecipeInput_): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        getToastSymbol(): $ItemStack;
        fluidProducts: $List<$SizedChanceFluidIngredient>;
        itemIngredients: $List<$SizedChanceItemIngredient>;
        itemProducts: $List<$SizedChanceItemIngredient>;
        fluidIngredients: $List<$SizedChanceFluidIngredient>;
        constructor(arg0: $List_<$SizedChanceItemIngredient>, arg1: $List_<$SizedChanceFluidIngredient>, arg2: $List_<$SizedChanceItemIngredient>, arg3: $List_<$SizedChanceFluidIngredient>);
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get fluidIngredient(): $SizedChanceFluidIngredient;
        get fluidProduct(): $SizedChanceFluidIngredient;
        get itemIngredient(): $SizedChanceItemIngredient;
        get itemProduct(): $SizedChanceItemIngredient;
        get group(): string;
        get special(): boolean;
        get incomplete(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get toastSymbol(): $ItemStack;
    }
    export class $SizedChanceFluidIngredient {
        chancePercent(): number;
        getStackRaw(): $FluidStack;
        getFluidsRaw(): $FluidStack[];
        getMeanStackSize(): number;
        test(arg0: $FluidStack_): boolean;
        isEmpty(): boolean;
        static of(arg0: $Fluid_, arg1: number): $SizedChanceFluidIngredient;
        static of(arg0: $FluidStack_): $SizedChanceFluidIngredient;
        static of(arg0: $Fluid_, arg1: number, arg2: number, arg3: number, arg4: number): $SizedChanceFluidIngredient;
        static of(arg0: $Fluid_, arg1: number, arg2: number, arg3: number): $SizedChanceFluidIngredient;
        static of(arg0: $FluidStack_, arg1: number, arg2: number): $SizedChanceFluidIngredient;
        static of(arg0: $TagKey_<$Fluid>, arg1: number): $SizedChanceFluidIngredient;
        static of(arg0: $TagKey_<$Fluid>, arg1: number, arg2: number, arg3: number): $SizedChanceFluidIngredient;
        increment(): number;
        getStack(): $FluidStack;
        amount(): number;
        ingredient(): $FluidIngredient;
        sized(): $SizedFluidIngredient;
        getFluids(): $FluidStack[];
        minStackSize(): number;
        static EMPTY: $SizedChanceFluidIngredient;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedChanceFluidIngredient>;
        static FLAT_CODEC: $Codec<$SizedChanceFluidIngredient>;
        constructor(arg0: $FluidIngredient_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $FluidIngredient_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $FluidIngredient_, arg1: number);
        get stackRaw(): $FluidStack;
        get fluidsRaw(): $FluidStack[];
        get meanStackSize(): number;
        get empty(): boolean;
        get stack(): $FluidStack;
        get fluids(): $FluidStack[];
    }
    export class $SizedChanceItemIngredient {
        chancePercent(): number;
        getStackRaw(): $ItemStack;
        getItemsRaw(): $ItemStack[];
        getMeanStackSize(): number;
        test(arg0: $ItemStack_): boolean;
        isEmpty(): boolean;
        static of(arg0: $ItemLike_, arg1: number, arg2: number): $SizedChanceItemIngredient;
        static of(arg0: $ItemStack_): $SizedChanceItemIngredient;
        static of(arg0: $ItemLike_, arg1: number): $SizedChanceItemIngredient;
        static of(arg0: $TagKey_<$Item>, arg1: number): $SizedChanceItemIngredient;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: number): $SizedChanceItemIngredient;
        count(): number;
        getStack(): $ItemStack;
        ingredient(): $Ingredient;
        getItems(): $ItemStack[];
        sized(): $SizedIngredient;
        minStackSize(): number;
        static EMPTY: $SizedChanceItemIngredient;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedChanceItemIngredient>;
        static FLAT_CODEC: $Codec<$SizedChanceItemIngredient>;
        constructor(arg0: $Ingredient_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Ingredient_, arg1: number);
        get stackRaw(): $ItemStack;
        get itemsRaw(): $ItemStack[];
        get meanStackSize(): number;
        get empty(): boolean;
        get stack(): $ItemStack;
        get items(): $ItemStack[];
    }
    export class $IRecipe {
    }
    export interface $IRecipe {
        getFluidIngredients(): $List<$SizedChanceFluidIngredient>;
        getFluidIngredient(): $SizedChanceFluidIngredient;
        getItemProducts(): $List<$SizedChanceItemIngredient>;
        getItemIngredients(): $List<$SizedChanceItemIngredient>;
        getFluidProducts(): $List<$SizedChanceFluidIngredient>;
        getFluidProduct(): $SizedChanceFluidIngredient;
        getItemIngredient(): $SizedChanceItemIngredient;
        getItemProduct(): $SizedChanceItemIngredient;
        get fluidIngredients(): $List<$SizedChanceFluidIngredient>;
        get fluidIngredient(): $SizedChanceFluidIngredient;
        get itemProducts(): $List<$SizedChanceItemIngredient>;
        get itemIngredients(): $List<$SizedChanceItemIngredient>;
        get fluidProducts(): $List<$SizedChanceFluidIngredient>;
        get fluidProduct(): $SizedChanceFluidIngredient;
        get itemIngredient(): $SizedChanceItemIngredient;
        get itemProduct(): $SizedChanceItemIngredient;
    }
    export class $RecipeUnitInfo {
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): void;
        getString(arg0: number, arg1: number): string;
        static readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: string): $RecipeUnitInfo;
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
        getBaseProcessTime(arg0: number): number;
        getProcessPowerMultiplier(): number;
        fluidProducts: $List<$SizedChanceFluidIngredient>;
        itemIngredients: $List<$SizedChanceItemIngredient>;
        itemProducts: $List<$SizedChanceItemIngredient>;
        fluidIngredients: $List<$SizedChanceFluidIngredient>;
        constructor(arg0: $List_<$SizedChanceItemIngredient>, arg1: $List_<$SizedChanceItemIngredient>, arg2: $List_<$SizedChanceFluidIngredient>, arg3: $List_<$SizedChanceFluidIngredient>, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $List_<$SizedChanceItemIngredient>, arg1: $List_<$SizedChanceItemIngredient>, arg2: $List_<$SizedChanceFluidIngredient>, arg3: $List_<$SizedChanceFluidIngredient>, arg4: number, arg5: number);
        get baseProcessRadiation(): number;
        get processTimeMultiplier(): number;
        get processPowerMultiplier(): number;
    }
    export class $BasicRecipeInput extends $Record implements $RecipeInput {
        size(): number;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        fluidIngredients(): $List<$SizedChanceFluidIngredient>;
        getFluid(arg0: number): $FluidStack;
        itemIngredients(): $List<$SizedChanceItemIngredient>;
        fluid_size(): number;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(itemIngredients: $List_<$SizedChanceItemIngredient>, fluidIngredients: $List_<$SizedChanceFluidIngredient>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BasicRecipeInput}.
     */
    export type $BasicRecipeInput_ = { itemIngredients?: $List_<$SizedChanceItemIngredient>, fluidIngredients?: $List_<$SizedChanceFluidIngredient>,  } | [itemIngredients?: $List_<$SizedChanceItemIngredient>, fluidIngredients?: $List_<$SizedChanceFluidIngredient>, ];
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
