import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $BlockLootSubProviderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer, $BiConsumer_, $Function_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
export * as packs from "@package/net/minecraft/data/loot/packs";

declare module "@package/net/minecraft/data/loot" {
    export class $LootTableProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        getTables(): $List<$LootTableProvider$SubProviderEntry>;
        subProviders: $List<$LootTableProvider$SubProviderEntry>;
        constructor(output: $PackOutput, requiredTables: $Set_<$ResourceKey_<$LootTable>>, subProviders: $List_<$LootTableProvider$SubProviderEntry_>, registries: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
        get tables(): $List<$LootTableProvider$SubProviderEntry>;
    }
    export class $BlockLootSubProvider implements $LootTableSubProvider, $BlockLootSubProviderAccessor {
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        createSingleItemTable(item: $ItemLike_): $LootTable$Builder;
        createAttachedStemDrops(block: $Block_, item: $Item_): $LootTable$Builder;
        createStemDrops(block: $Block_, item: $Item_): $LootTable$Builder;
        static noDrop(): $LootTable$Builder;
        create$hasSilkTouch(): $LootItemCondition$Builder;
    }
    export class $LootTableProvider$SubProviderEntry extends $Record {
        provider(): $Function<$HolderLookup$Provider, $LootTableSubProvider>;
        paramSet(): $LootContextParamSet;
        constructor(provider: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet: $LootContextParamSet);
    }
    /**
     * Values that may be interpreted as {@link $LootTableProvider$SubProviderEntry}.
     */
    export type $LootTableProvider$SubProviderEntry_ = { paramSet?: $LootContextParamSet, provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>,  } | [paramSet?: $LootContextParamSet, provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, ];
    export class $LootTableSubProvider {
    }
    export interface $LootTableSubProvider {
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootTableSubProvider}.
     */
    export type $LootTableSubProvider_ = ((arg0: $BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>) => void);
    export class $EntityLootSubProvider implements $LootTableSubProvider {
        generate(): void;
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        static SPECIAL_LOOT_TABLE_TYPES: $Set<$EntityType<never>>;
    }
}
