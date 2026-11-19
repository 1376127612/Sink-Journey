import { $Level_ } from "@package/net/minecraft/world/level";
import { $ISingleElementInstrumentRecipe } from "@package/sirttas/elementalcraft/recipe/instrument";
import { $Supplier } from "@package/java/util/function";
import { $SimpleIOInstrumentRecipeInput, $SimpleIOInstrumentRecipeInput_, $IOInstrumentRecipe } from "@package/sirttas/elementalcraft/recipe/instrument/io";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ElementType } from "@package/sirttas/elementalcraft/api/element";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/sirttas/elementalcraft/recipe/instrument/io/purification" {
    export class $OrePurificationRecipe extends $Record implements $IOInstrumentRecipe<$SimpleIOInstrumentRecipeInput>, $ISingleElementInstrumentRecipe<$SimpleIOInstrumentRecipeInput> {
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        elementAmount(): number;
        getInputSize(): number;
        getElementAmount(): number;
        luckRatio(): number;
        matches(arg0: $ItemStack_, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        input(): $Ingredient;
        getElementType(): $ElementType;
        output(): $ItemStack;
        inputSize(): number;
        getLuck(arg0: $SimpleIOInstrumentRecipeInput_): number;
        matches(arg0: $SimpleIOInstrumentRecipeInput_, arg1: $Level_): boolean;
        getValidElementTypes(): $List<$ElementType>;
        getElementAmount(arg0: $SimpleIOInstrumentRecipeInput_): number;
        getRandomSource(arg0: $SimpleIOInstrumentRecipeInput_): $RandomSource;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        assemble(arg0: $SimpleIOInstrumentRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: $SimpleIOInstrumentRecipeInput_): $NonNullList<$ItemStack>;
        static NAME: string;
        constructor(input: $Ingredient_, output: $ItemStack_, elementAmount: number, inputSize: number, luckRatio: number);
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get type(): $RecipeType<never>;
        get elementType(): $ElementType;
        get validElementTypes(): $List<$ElementType>;
        get elementTypeSupplier(): $Supplier<$ElementType>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
        get group(): string;
    }
    /**
     * Values that may be interpreted as {@link $OrePurificationRecipe}.
     */
    export type $OrePurificationRecipe_ = { output?: $ItemStack_, luckRatio?: number, input?: $Ingredient_, inputSize?: number, elementAmount?: number,  } | [output?: $ItemStack_, luckRatio?: number, input?: $Ingredient_, inputSize?: number, elementAmount?: number, ];
}
