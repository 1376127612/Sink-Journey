import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $Map_, $Map } from "@package/java/util";
import { $LootContext, $LootParams } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/loot" {
    export class $AccessLootContextBuilder {
    }
    export interface $AccessLootContextBuilder {
        crafttweaker$getParams(): $LootParams;
    }
    /**
     * Values that may be interpreted as {@link $AccessLootContextBuilder}.
     */
    export type $AccessLootContextBuilder_ = (() => $LootParams);
    export class $AccessLootModifierManager {
    }
    export interface $AccessLootModifierManager {
        crafttweaker$setModifiers(arg0: $Map_<$ResourceLocation_, $IGlobalLootModifier>): void;
        crafttweaker$getModifiers(): $Map<$ResourceLocation, $IGlobalLootModifier>;
    }
    export class $AccessLootTable {
    }
    export interface $AccessLootTable {
        crafttweaker$callGetRandomItems(arg0: $LootContext): $ObjectArrayList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $AccessLootTable}.
     */
    export type $AccessLootTable_ = ((arg0: $LootContext) => $ObjectArrayList<$ItemStack_>);
    export class $AccessLootContext {
    }
    export interface $AccessLootContext {
        crafttweaker$getParams(): $LootParams;
    }
    /**
     * Values that may be interpreted as {@link $AccessLootContext}.
     */
    export type $AccessLootContext_ = (() => $LootParams);
}
