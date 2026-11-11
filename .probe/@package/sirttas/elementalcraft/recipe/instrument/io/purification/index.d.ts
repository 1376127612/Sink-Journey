import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $ISingleElementInstrumentRecipe } from "@package/sirttas/elementalcraft/recipe/instrument";
import { $SimpleIOInstrumentRecipeInput, $SimpleIOInstrumentRecipeInput_, $IOInstrumentRecipe } from "@package/sirttas/elementalcraft/recipe/instrument/io";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ElementType } from "@package/sirttas/elementalcraft/api/element";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/sirttas/elementalcraft/recipe/instrument/io/purification" {
    export class $OrePurificationRecipe extends $Record implements $IOInstrumentRecipe<$SimpleIOInstrumentRecipeInput>, $ISingleElementInstrumentRecipe<$SimpleIOInstrumentRecipeInput> {
        matches(arg0: $ItemStack_, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        input(): $Ingredient;
        output(): $ItemStack;
        getElementType(): $ElementType;
        inputSize(): number;
        getElementAmount(): number;
        elementAmount(): number;
        getInputSize(): number;
        getLuck(arg0: $SimpleIOInstrumentRecipeInput_): number;
        luckRatio(): number;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        matches(arg0: $SimpleIOInstrumentRecipeInput_, arg1: $Level_): boolean;
        getValidElementTypes(): $List<$ElementType>;
        getElementAmount(arg0: $SimpleIOInstrumentRecipeInput_): number;
        getRandomSource(arg0: $SimpleIOInstrumentRecipeInput_): $RandomSource;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        assemble(arg0: $SimpleIOInstrumentRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $SimpleIOInstrumentRecipeInput_): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        showNotification(): boolean;
        getToastSymbol(): $ItemStack;
        static NAME: string;
        constructor(input: $Ingredient_, output: $ItemStack_, elementAmount: number, inputSize: number, luckRatio: number);
        get type(): $RecipeType<never>;
        get elementType(): $ElementType;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get validElementTypes(): $List<$ElementType>;
        get elementTypeSupplier(): $Supplier<$ElementType>;
        get group(): string;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $OrePurificationRecipe}.
     */
    export type $OrePurificationRecipe_ = { input?: $Ingredient_, inputSize?: number, elementAmount?: number, output?: $ItemStack_, luckRatio?: number,  } | [input?: $Ingredient_, inputSize?: number, elementAmount?: number, output?: $ItemStack_, luckRatio?: number, ];
}
