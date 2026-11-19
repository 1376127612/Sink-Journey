import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DynamicOps, $Dynamic } from "@package/com/mojang/serialization";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentType, $DataComponentPatch, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/recipe/component" {
    export class $ComponentCondition {
    }
    export interface $ComponentCondition {
        matches(candidate: $Dynamic<never>): boolean;
        isExact(): boolean;
        get exact(): boolean;
    }
    export class $ComponentConstraints {
        static ofIds(values: $Map_<$ResourceLocation_, $ComponentCondition>): $ComponentConstraints;
        static ofTypes(values: $Map_<$DataComponentType_<never>, $ComponentCondition>): $ComponentConstraints;
        static EMPTY: $ComponentConstraints;
    }
    export interface $ComponentConstraints {
        applyTo(stack: $ItemStack_, ops: $DynamicOps<never>): void;
        applyTo(stack: $ItemStack_): void;
        displayStack(item: $Item_, count: number): $ItemStack;
        displayStack(item: $Item_, count: number, ops: $DynamicOps<never>): $ItemStack;
        hasNonExactValues(): boolean;
        exactPatch(): ($DataComponentPatch) | undefined;
        values(): $Map<$DataComponentType<never>, $ComponentCondition>;
        isEmpty(): boolean;
        matches(stack: $ItemStack_, ops: $DynamicOps<never>): boolean;
        matches(stack: $ItemStack_): boolean;
        get empty(): boolean;
    }
}
