import { $IIngredientCollection } from "@package/org/cyclops/cyclopscore/ingredient/collection";

declare module "@package/org/cyclops/cyclopscore/ingredient/collection/diff" {
    export class $IngredientCollectionDiff<T, M> {
        getDeletions(): $IIngredientCollection<T, M>;
        isCompletelyEmpty(): boolean;
        hasAdditions(): boolean;
        hasDeletions(): boolean;
        getAdditions(): $IIngredientCollection<T, M>;
        constructor(arg0: $IIngredientCollection<T, M> | null, arg1: $IIngredientCollection<T, M> | null, arg2: boolean);
        get deletions(): $IIngredientCollection<T, M>;
        get completelyEmpty(): boolean;
        get additions(): $IIngredientCollection<T, M>;
    }
}
