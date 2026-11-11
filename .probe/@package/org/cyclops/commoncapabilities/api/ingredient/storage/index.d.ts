import { $IngredientComponent } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Iterable } from "@package/java/lang";
import { $Iterator } from "@package/java/util";
import { $ICapabilityGetter } from "@package/org/cyclops/commoncapabilities/api/ingredient/capability";

declare module "@package/org/cyclops/commoncapabilities/api/ingredient/storage" {
    export class $IIngredientComponentStorage<T, M> {
        [Symbol.iterator](): Iterator<T>
    }
    export interface $IIngredientComponentStorage<T, M> extends $Iterable<T> {
        extract(arg0: number, arg1: boolean): T;
        extract(arg0: T, arg1: M, arg2: boolean): T;
        insert(arg0: T, arg1: boolean): T;
        iterator(): $Iterator<T>;
        iterator(arg0: T, arg1: M): $Iterator<T>;
        getComponent(): $IngredientComponent<T, M>;
        getMaxQuantity(): number;
        [Symbol.iterator](): Iterator<T>
        get component(): $IngredientComponent<T, M>;
        get maxQuantity(): number;
    }
    export class $IIngredientComponentStorageWrapperHandler<T, M, S, C> {
    }
    export interface $IIngredientComponentStorageWrapperHandler<T, M, S, C> {
        getComponent(): $IngredientComponent<T, M>;
        getStorage(arg0: $ICapabilityGetter<C>, arg1: C): (S) | undefined;
        wrapStorage(arg0: $IIngredientComponentStorage<T, M>): S;
        wrapComponentStorage(arg0: S): $IIngredientComponentStorage<T, M>;
        getComponentStorage(arg0: $ICapabilityGetter<C>, arg1: C): $IIngredientComponentStorage<T, M>;
        get component(): $IngredientComponent<T, M>;
    }
    export class $IIngredientComponentStorageSlotted<T, M> {
    }
    export interface $IIngredientComponentStorageSlotted<T, M> extends $IIngredientComponentStorage<T, M> {
        extract(arg0: number, arg1: number, arg2: boolean): T;
        insert(arg0: number, arg1: T, arg2: boolean): T;
        getSlotContents(arg0: number): T;
        getSlots(): number;
        getMaxQuantity(arg0: number): number;
        get slots(): number;
    }
}
