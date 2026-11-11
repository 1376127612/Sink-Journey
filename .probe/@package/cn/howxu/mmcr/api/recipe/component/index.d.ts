import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentType, $DataComponentType_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/api/recipe/component" {
    export class $DataComponentPredicateSet extends $Record {
        values(): $Map<$DataComponentType<never>, $ComponentPredicate>;
        isEmpty(): boolean;
        matches(stack: $ItemStack_): boolean;
        matches(stack: $ItemStack_, ops: $DynamicOps<never>): boolean;
        exactPatch(): ($DataComponentPatch) | undefined;
        static ofIds(predicates: $Map_<$ResourceLocation_, $ComponentPredicate>): $DataComponentPredicateSet;
        applyTo(stack: $ItemStack_): void;
        applyTo(stack: $ItemStack_, ops: $DynamicOps<never>): void;
        hasNonExactValues(): boolean;
        displayStack(item: $Item_, count: number): $ItemStack;
        displayStack(item: $Item_, count: number, ops: $DynamicOps<never>): $ItemStack;
        static CODEC: $Codec<$DataComponentPredicateSet>;
        static EMPTY: $DataComponentPredicateSet;
        constructor(values: $Map_<$DataComponentType_<never>, $ComponentPredicate>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPredicateSet}.
     */
    export type $DataComponentPredicateSet_ = { values?: $Map_<$DataComponentType_<never>, $ComponentPredicate>,  } | [values?: $Map_<$DataComponentType_<never>, $ComponentPredicate>, ];
}
