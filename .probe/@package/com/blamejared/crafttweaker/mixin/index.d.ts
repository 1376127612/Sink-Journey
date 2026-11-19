import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BiMap } from "@package/com/google/common/collect";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as common from "@package/com/blamejared/crafttweaker/mixin/common";

declare module "@package/com/blamejared/crafttweaker/mixin" {
    export class $AccessLootContextParamSets {
        static crafttweaker$getREGISTRY(): $BiMap<$ResourceLocation, $LootContextParamSet>;
    }
    export interface $AccessLootContextParamSets {
    }
}
