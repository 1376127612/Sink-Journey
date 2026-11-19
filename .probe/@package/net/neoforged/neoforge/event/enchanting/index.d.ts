import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $Holder$Reference, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ItemEnchantments$Mutable, $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/event/enchanting" {
    export class $EnchantmentLevelSetEvent extends $Event {
        getPower(): number;
        getPos(): $BlockPos;
        getOriginalLevel(): number;
        setEnchantLevel(arg0: number): void;
        getEnchantRow(): number;
        getEnchantLevel(): number;
        getItem(): $ItemStack;
        getLevel(): $Level;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number);
        get power(): number;
        get pos(): $BlockPos;
        get originalLevel(): number;
        get enchantRow(): number;
        get item(): $ItemStack;
        get level(): $Level;
    }
    export class $EnchantedEntityLootEvent extends $LivingEvent {
        getEnchantment(): $Holder<$Enchantment>;
        getDamageSource(): $DamageSource;
        setEnchantmentLevel(arg0: number): void;
        getEnchantmentLevel(): number;
        getAttacker(): $Entity;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $Holder_<$Enchantment>, arg3: number);
        get enchantment(): $Holder<$Enchantment>;
        get damageSource(): $DamageSource;
        get attacker(): $Entity;
    }
    export class $GetEnchantmentLevelEvent extends $Event {
        getHolder(arg0: $ResourceKey_<$Enchantment>): ($Holder$Reference<$Enchantment>) | undefined;
        isTargetting(arg0: $ResourceKey_<$Enchantment>): boolean;
        isTargetting(arg0: $Holder_<$Enchantment>): boolean;
        getTargetEnchant(): $Holder<$Enchantment>;
        getStack(): $ItemStack;
        getLookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        getEnchantments(): $ItemEnchantments$Mutable;
        constructor(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $Holder_<$Enchantment>, arg3: $HolderLookup$RegistryLookup<$Enchantment_>);
        get targetEnchant(): $Holder<$Enchantment>;
        get stack(): $ItemStack;
        get lookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        get enchantments(): $ItemEnchantments$Mutable;
    }
    export class $EnchantedBlockLootEvent extends $BlockEvent {
        getTool(): $ItemStack;
        getEnchantment(): $Holder<$Enchantment>;
        setEnchantmentLevel(arg0: number): void;
        getEntity(): $Entity;
        getEnchantmentLevel(): number;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ItemStack_, arg4: $Holder_<$Enchantment>, arg5: number, arg6: $Entity);
        get tool(): $ItemStack;
        get enchantment(): $Holder<$Enchantment>;
        get entity(): $Entity;
    }
}
