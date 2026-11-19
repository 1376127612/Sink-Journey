import { $LoadResultGetter, $LoadResultGetter_ } from "@package/com/blamejared/crafttweaker/impl/datamap";
import { $DataMapLoader } from "@package/net/neoforged/neoforge/registries";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootModifierManager } from "@package/net/neoforged/neoforge/common/loot";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/neoforge" {
    export class $AccessNeoForgeInternalHandler {
        static crafttweaker$getLootModifierManager(): $LootModifierManager;
        static crafttweaker$getDataMap(): $DataMapLoader;
    }
    export interface $AccessNeoForgeInternalHandler {
    }
    export class $AccessDataMapLoader {
    }
    export interface $AccessDataMapLoader {
        results(): $Map<$ResourceKey<$Registry<never>>, $LoadResultGetter>;
    }
    /**
     * Values that may be interpreted as {@link $AccessDataMapLoader}.
     */
    export type $AccessDataMapLoader_ = (() => $Map_<$ResourceKey_<$Registry<never>>, $LoadResultGetter_>);
    export class $AccessDataMapLoaderResult {
    }
    export interface $AccessDataMapLoaderResult extends $LoadResultGetter {
    }
    /**
     * Values that may be interpreted as {@link $AccessDataMapLoaderResult}.
     */
    export type $AccessDataMapLoaderResult_ = (() => void);
}
