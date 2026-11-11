import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IngredientComponent, $IngredientComponent_, $IPrototypedIngredient } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/org/cyclops/integratedcrafting/core" {
    export class $CraftingHelpers$IIdentifierGenerator {
    }
    export interface $CraftingHelpers$IIdentifierGenerator {
        getNext(): number;
        get next(): number;
    }
    /**
     * Values that may be interpreted as {@link $CraftingHelpers$IIdentifierGenerator}.
     */
    export type $CraftingHelpers$IIdentifierGenerator_ = (() => number);
    export class $MissingIngredients$PrototypedWithRequested<T, M> {
        setQuantityMissing(arg0: number): void;
        getQuantityMissing(): number;
        getRequestedPrototype(): $IPrototypedIngredient<T, M>;
        constructor(arg0: $IPrototypedIngredient<T, M>, arg1: number);
        get requestedPrototype(): $IPrototypedIngredient<T, M>;
    }
    export class $MissingIngredients$Element<T, M> {
        getAlternatives(): $List<$MissingIngredients$PrototypedWithRequested<T, M>>;
        isInputReusable(): boolean;
        constructor(arg0: $List_<$MissingIngredients$PrototypedWithRequested<T, M>>, arg1: boolean);
        get alternatives(): $List<$MissingIngredients$PrototypedWithRequested<T, M>>;
        get inputReusable(): boolean;
    }
    export class $MissingIngredients<T, M> {
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Map<$IngredientComponent<never, never>, $MissingIngredients<never, never>>;
        static serialize(arg0: $HolderLookup$Provider, arg1: $Map_<$IngredientComponent_<never, never>, $MissingIngredients<never, never>>): $CompoundTag;
        getElements(): $List<$MissingIngredients$Element<T, M>>;
        constructor(arg0: $List_<$MissingIngredients$Element<T, M>>);
        get elements(): $List<$MissingIngredients$Element<T, M>>;
    }
}
