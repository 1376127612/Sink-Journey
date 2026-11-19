import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
export * as upgrade from "@package/com/denfop/api/item/upgrade";

declare module "@package/com/denfop/api/item" {
    export class $DamageItem {
    }
    export interface $DamageItem {
        getCustomDamage(arg0: $ItemStack_): number;
        setCustomDamage(arg0: $ItemStack_, arg1: number): void;
        getMaxCustomDamage(arg0: $ItemStack_): number;
        applyCustomDamage(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): boolean;
    }
}
