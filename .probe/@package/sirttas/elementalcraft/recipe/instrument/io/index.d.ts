import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $ILuckRecipe, $IInstrumentRecipe } from "@package/sirttas/elementalcraft/recipe/instrument";
import { $RecipeInput, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Rune$BonusType, $Rune$BonusType_ } from "@package/sirttas/elementalcraft/api/rune";
import { $ElementType_, $ElementType } from "@package/sirttas/elementalcraft/api/element";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Map } from "@package/java/util";
import { $ElementRecipeInput, $RandomSourceRecipeInput, $RuneBonusesRecipeInput } from "@package/sirttas/elementalcraft/recipe/input";
import { $RandomSource } from "@package/net/minecraft/util";
export * as purification from "@package/sirttas/elementalcraft/recipe/instrument/io/purification";

declare module "@package/sirttas/elementalcraft/recipe/instrument/io" {
    export class $IOInstrumentRecipe<I extends $IOInstrumentRecipeInput> {
    }
    export interface $IOInstrumentRecipe<I extends $IOInstrumentRecipeInput> extends $IInstrumentRecipe<I>, $ILuckRecipe<I> {
        matches(arg0: $ItemStack_, arg1: $Level_): boolean;
        matches(arg0: I, arg1: $Level_): boolean;
        getInputSize(): number;
        get inputSize(): number;
    }
    export class $IOInstrumentRecipeInput {
    }
    export interface $IOInstrumentRecipeInput extends $ElementRecipeInput, $RandomSourceRecipeInput {
        toSingleRecipeInput(): $SingleRecipeInput;
    }
    export class $SimpleIOInstrumentRecipeInput extends $Record implements $IOInstrumentRecipeInput, $RuneBonusesRecipeInput {
        size(): number;
        elementType(): $ElementType;
        input(): $ItemStack;
        getItem(arg0: number): $ItemStack;
        output(): $ItemStack;
        getElementType(): $ElementType;
        getRuneBonus(arg0: $Rune$BonusType_): number;
        getElementAmount(arg0: $ElementType_): number;
        elementAmount(): number;
        randomSource(): $RandomSource;
        bonuses(): $Map<$Rune$BonusType, number>;
        getRandomSource(): $RandomSource;
        getItemLimit(arg0: number): number;
        itemLimit(): number;
        toSingleRecipeInput(): $SingleRecipeInput;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(input: $ItemStack_, output: $ItemStack_, itemLimit: number, randomSource: $RandomSource, elementType: $ElementType_, elementAmount: number, bonuses: $Map_<$Rune$BonusType_, number>);
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $RandomSource, arg3: $ElementType_, arg4: number, arg5: $Map_<$Rune$BonusType_, number>);
        get elementTypeSupplier(): $Supplier<$ElementType>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SimpleIOInstrumentRecipeInput}.
     */
    export type $SimpleIOInstrumentRecipeInput_ = { input?: $ItemStack_, itemLimit?: number, elementType?: $ElementType_, bonuses?: $Map_<$Rune$BonusType_, number>, randomSource?: $RandomSource, output?: $ItemStack_, elementAmount?: number,  } | [input?: $ItemStack_, itemLimit?: number, elementType?: $ElementType_, bonuses?: $Map_<$Rune$BonusType_, number>, randomSource?: $RandomSource, output?: $ItemStack_, elementAmount?: number, ];
}
