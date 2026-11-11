import { $Stream } from "@package/java/util/stream";
import { $IngredientComponent } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Object, $Iterable, $Iterable_ } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
export * as diff from "@package/org/cyclops/cyclopscore/ingredient/collection/diff";

declare module "@package/org/cyclops/cyclopscore/ingredient/collection" {
    export class $IIngredientCollection<T, M> {
    }
    export interface $IIngredientCollection<T, M> extends $IIngredientCollectionLike<T, M, T> {
        toArray(): T[];
        iterator(arg0: T, arg1: M): $Iterator<T>;
        stream(): $Stream<T>;
        count(arg0: T, arg1: M): number;
        contains(arg0: T): boolean;
        contains(arg0: T, arg1: M): boolean;
        spliterator(): $Spliterator<T>;
        containsAll(arg0: $Iterable_<T>, arg1: M): boolean;
        containsAll(arg0: $Iterable_<T>): boolean;
        parallelStream(): $Stream<T>;
    }
    export class $IIngredientCollectionLike<T, M, I> {
    }
    export interface $IIngredientCollectionLike<T, M, I> extends $Iterable<I> {
        size(): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        isEmpty(): boolean;
        iterator(arg0: I, arg1: M): $Iterator<I>;
        getComponent(): $IngredientComponent<I, M>;
        get empty(): boolean;
        get component(): $IngredientComponent<I, M>;
    }
}
