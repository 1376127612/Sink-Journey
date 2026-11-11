import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DynamicOps, $Dynamic } from "@package/com/mojang/serialization";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentType, $DataComponentType_, $DataComponentPatch } from "@package/net/minecraft/core/component";
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
        values(): $Map<$DataComponentType<never>, $ComponentCondition>;
        isEmpty(): boolean;
        matches(stack: $ItemStack_, ops: $DynamicOps<never>): boolean;
        matches(stack: $ItemStack_): boolean;
        exactPatch(): ($DataComponentPatch) | undefined;
        applyTo(stack: $ItemStack_, ops: $DynamicOps<never>): void;
        applyTo(stack: $ItemStack_): void;
        hasNonExactValues(): boolean;
        displayStack(item: $Item_, count: number, ops: $DynamicOps<never>): $ItemStack;
        displayStack(item: $Item_, count: number): $ItemStack;
        get empty(): boolean;
    }
}
