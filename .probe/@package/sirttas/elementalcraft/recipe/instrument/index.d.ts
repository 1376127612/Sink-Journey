import { $IECRecipe } from "@package/sirttas/elementalcraft/recipe";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ElementType, $IElementTypeProvider } from "@package/sirttas/elementalcraft/api/element";
import { $List } from "@package/java/util";
import { $RandomSourceRecipeInput } from "@package/sirttas/elementalcraft/recipe/input";
import { $RandomSource } from "@package/net/minecraft/util";
export * as io from "@package/sirttas/elementalcraft/recipe/instrument/io";

declare module "@package/sirttas/elementalcraft/recipe/instrument" {
    export class $IInstrumentRecipe<I extends $RecipeInput> {
    }
    export interface $IInstrumentRecipe<I extends $RecipeInput> extends $IECRecipe<I> {
        getElementAmount(): number;
        getElementAmount(arg0: I): number;
        getValidElementTypes(): $List<$ElementType>;
        get validElementTypes(): $List<$ElementType>;
    }
    export class $ISingleElementInstrumentRecipe<I extends $RecipeInput> {
    }
    export interface $ISingleElementInstrumentRecipe<I extends $RecipeInput> extends $IInstrumentRecipe<I>, $IElementTypeProvider {
        getValidElementTypes(): $List<$ElementType>;
        get validElementTypes(): $List<$ElementType>;
    }
    export class $ILuckRecipe<I extends $RandomSourceRecipeInput> {
    }
    export interface $ILuckRecipe<I extends $RandomSourceRecipeInput> extends $IECRecipe<I> {
        getLuck(arg0: I): number;
        getRandomSource(arg0: I): $RandomSource;
    }
}
