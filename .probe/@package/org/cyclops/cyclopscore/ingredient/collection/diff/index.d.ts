import { $IIngredientCollection } from "@package/org/cyclops/cyclopscore/ingredient/collection";

declare module "@package/org/cyclops/cyclopscore/ingredient/collection/diff" {
    export class $IngredientCollectionDiff<T, M> {
        hasDeletions(): boolean;
        hasAdditions(): boolean;
        getAdditions(): $IIngredientCollection<T, M>;
        getDeletions(): $IIngredientCollection<T, M>;
        isCompletelyEmpty(): boolean;
        constructor(arg0: $IIngredientCollection<T, M> | null, arg1: $IIngredientCollection<T, M> | null, arg2: boolean);
        get additions(): $IIngredientCollection<T, M>;
        get deletions(): $IIngredientCollection<T, M>;
        get completelyEmpty(): boolean;
    }
}
