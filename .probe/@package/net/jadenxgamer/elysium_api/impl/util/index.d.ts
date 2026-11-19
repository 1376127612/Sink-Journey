import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/net/jadenxgamer/elysium_api/impl/util" {
    export class $ConditionalBoolean$BooleanRule extends $Record {
        value(): boolean;
        condition(): $BlockStatePropertiesCondition;
        static CODEC: $Codec<$ConditionalBoolean$BooleanRule>;
        constructor(condition: $BlockStatePropertiesCondition, value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalBoolean$BooleanRule}.
     */
    export type $ConditionalBoolean$BooleanRule_ = { value?: boolean, condition?: $BlockStatePropertiesCondition,  } | [value?: boolean, condition?: $BlockStatePropertiesCondition, ];
    export class $BlockStatePropertiesCondition {
        matches(arg0: $BlockState_): boolean;
        properties(): $Map<string, string>;
        static CODEC: $Codec<$BlockStatePropertiesCondition>;
        constructor(arg0: $Map_<string, string>);
    }
    export class $ConditionalBoolean extends $Record {
        getValue(arg0: $BlockState_): boolean;
        defaultValue(): boolean;
        rules(): $List<$ConditionalBoolean$BooleanRule>;
        static CODEC: $Codec<$ConditionalBoolean>;
        constructor(defaultValue: boolean, rules: $List_<$ConditionalBoolean$BooleanRule_>);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalBoolean}.
     */
    export type $ConditionalBoolean_ = { defaultValue?: boolean, rules?: $List_<$ConditionalBoolean$BooleanRule_>,  } | [defaultValue?: boolean, rules?: $List_<$ConditionalBoolean$BooleanRule_>, ];
    export class $ConditionalInt extends $Record {
        getValue(arg0: $BlockState_): number;
        defaultValue(): number;
        rules(): $List<$ConditionalInt$IntRule>;
        static CODEC: $Codec<$ConditionalInt>;
        constructor(defaultValue: number, rules: $List_<$ConditionalInt$IntRule_>);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalInt}.
     */
    export type $ConditionalInt_ = { defaultValue?: number, rules?: $List_<$ConditionalInt$IntRule_>,  } | [defaultValue?: number, rules?: $List_<$ConditionalInt$IntRule_>, ];
    export class $ConditionalInt$IntRule extends $Record {
        value(): number;
        condition(): $BlockStatePropertiesCondition;
        static CODEC: $Codec<$ConditionalInt$IntRule>;
        constructor(condition: $BlockStatePropertiesCondition, value: number);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalInt$IntRule}.
     */
    export type $ConditionalInt$IntRule_ = { value?: number, condition?: $BlockStatePropertiesCondition,  } | [value?: number, condition?: $BlockStatePropertiesCondition, ];
}
