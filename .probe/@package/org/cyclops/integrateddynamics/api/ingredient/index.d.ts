import { $IngredientComponent } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $IngredientCollectionDiff } from "@package/org/cyclops/cyclopscore/ingredient/collection/diff";
import { $Enum } from "@package/java/lang";
import { $Iterator } from "@package/java/util";
import { $PrioritizedPartPos, $PartPos } from "@package/org/cyclops/integrateddynamics/api/part";
import { $IIngredientCollection } from "@package/org/cyclops/cyclopscore/ingredient/collection";

declare module "@package/org/cyclops/integrateddynamics/api/ingredient" {
    export class $IIngredientComponentStorageObservable$StorageChangeEvent<T, M> {
        getInstances(): $IIngredientCollection<T, M>;
        getPos(): $PrioritizedPartPos;
        isCompleteChange(): boolean;
        getDiff(): $IngredientCollectionDiff<T, M>;
        getChangeType(): $IIngredientComponentStorageObservable$Change;
        getChannel(): number;
        isInitialChange(): boolean;
        constructor(arg0: number, arg1: $PrioritizedPartPos, arg2: $IIngredientComponentStorageObservable$Change_, arg3: boolean, arg4: $IIngredientCollection<T, M>, arg5: boolean);
        get instances(): $IIngredientCollection<T, M>;
        get pos(): $PrioritizedPartPos;
        get completeChange(): boolean;
        get diff(): $IngredientCollectionDiff<T, M>;
        get changeType(): $IIngredientComponentStorageObservable$Change;
        get channel(): number;
        get initialChange(): boolean;
    }
    export class $IIngredientComponentStorageObservable<T, M> {
    }
    export interface $IIngredientComponentStorageObservable<T, M> {
        scheduleObservation(): void;
        scheduleObservationForced(arg0: number, arg1: $PartPos): void;
        isObservationForcedPending(arg0: number): boolean;
        shouldObserve(): boolean;
        runObserverSync(): void;
        getChannelIndex(arg0: number): $IIngredientPositionsIndex<T, M>;
        addObserver(arg0: $IIngredientComponentStorageObservable$IIndexChangeObserver_<T, M>): void;
        removeObserver(arg0: $IIngredientComponentStorageObservable$IIndexChangeObserver_<T, M>): void;
        getComponent(): $IngredientComponent<T, M>;
        get component(): $IngredientComponent<T, M>;
    }
    export class $IIngredientPositionsIndex<T, M> {
    }
    export interface $IIngredientPositionsIndex<T, M> extends $IIngredientCollection<T, M> {
        getQuantity(arg0: T): number;
        getPositions(arg0: T, arg1: M): $Iterator<$PartPos>;
        removePosition(arg0: T, arg1: $PrioritizedPartPos): void;
        addPosition(arg0: T, arg1: $PrioritizedPartPos): void;
        getNonEmptyPositions(): $Iterator<$PartPos>;
        get nonEmptyPositions(): $Iterator<$PartPos>;
    }
    export class $IIngredientComponentStorageObservable$IIndexChangeObserver<T, M> {
    }
    export interface $IIngredientComponentStorageObservable$IIndexChangeObserver<T, M> {
        onChange(arg0: $IIngredientComponentStorageObservable$StorageChangeEvent<T, M>): void;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientComponentStorageObservable$IIndexChangeObserver}.
     */
    export type $IIngredientComponentStorageObservable$IIndexChangeObserver_<T, M> = ((arg0: $IIngredientComponentStorageObservable$StorageChangeEvent<T, M>) => void);
    export class $IIngredientComponentStorageObservable$Change extends $Enum<$IIngredientComponentStorageObservable$Change> {
        static values(): $IIngredientComponentStorageObservable$Change[];
        static valueOf(arg0: string): $IIngredientComponentStorageObservable$Change;
        static ADDITION: $IIngredientComponentStorageObservable$Change;
        static DELETION: $IIngredientComponentStorageObservable$Change;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientComponentStorageObservable$Change}.
     */
    export type $IIngredientComponentStorageObservable$Change_ = "addition" | "deletion";
}
