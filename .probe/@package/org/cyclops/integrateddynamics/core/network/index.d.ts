import { $IIngredientMatcher } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Collection_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
export * as event from "@package/org/cyclops/integrateddynamics/core/network/event";

declare module "@package/org/cyclops/integrateddynamics/core/network" {
    export class $IIngredientChannelInsertPreConsumer<T> {
        static applyAll<T, M>(arg0: $Collection_<$IIngredientChannelInsertPreConsumer<T>>, arg1: $IIngredientMatcher<T, M>, arg2: number, arg3: T, arg4: T, arg5: boolean): T;
    }
    export interface $IIngredientChannelInsertPreConsumer<T> {
        insert(arg0: number, arg1: T, arg2: T, arg3: boolean): $IIngredientChannelInsertPreConsumer$Result<T>;
        /**
         * @deprecated
         */
        insert(arg0: number, arg1: T, arg2: boolean): T;
    }
    export class $IIngredientChannelInsertPreConsumer$Result<T> extends $Record {
        remaining(): T;
        unclaimed(): T;
        constructor(remaining: T, unclaimed: T);
    }
    /**
     * Values that may be interpreted as {@link $IIngredientChannelInsertPreConsumer$Result}.
     */
    export type $IIngredientChannelInsertPreConsumer$Result_<T> = { remaining?: any, unclaimed?: any,  } | [remaining?: any, unclaimed?: any, ];
}
