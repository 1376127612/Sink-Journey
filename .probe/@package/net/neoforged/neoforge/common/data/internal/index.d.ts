import { $ItemLike } from "@package/net/minecraft/world/level";
import { $SoundDefinitionsProvider, $ExistingFileHelper, $AdvancementProvider, $DataMapProvider, $LanguageProvider, $AdvancementProvider$AdvancementGenerator, $BlockTagsProvider, $SpriteSourceProvider } from "@package/net/neoforged/neoforge/common/data";
import { $Item, $Tier, $AxeItem } from "@package/net/minecraft/world/item";
import { $BiomeTagsProvider, $ItemTagsProvider, $StructureTagsProvider, $TagsProvider$TagLookup_, $DamageTypeTagsProvider, $EnchantmentTagsProvider, $FluidTagsProvider, $EntityTypeTagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $List, $Map, $List_ } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $Criterion } from "@package/net/minecraft/advancements";
import { $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootTableProvider, $LootTableProvider$SubProviderEntry } from "@package/net/minecraft/data/loot";
import { $VanillaRecipeProvider } from "@package/net/minecraft/data/recipes/packs";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $AdvancementSubProvider, $AdvancementSubProvider_ } from "@package/net/minecraft/data/advancements";

declare module "@package/net/neoforged/neoforge/common/data/internal" {
    export class $NeoForgeEnchantmentTagsProvider extends $EnchantmentTagsProvider {
        addTags(arg0: $HolderLookup$Provider): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeLootTableProvider extends $LootTableProvider {
        subProviders: $List<$LootTableProvider$SubProviderEntry>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $NeoForgeAdvancementProvider$NeoForgeAdvancementGenerator extends $Record implements $AdvancementProvider$AdvancementGenerator {
        toSubProvider(arg0: $ExistingFileHelper): $AdvancementSubProvider;
    }
    /**
     * Values that may be interpreted as {@link $NeoForgeAdvancementProvider$NeoForgeAdvancementGenerator}.
     */
    export type $NeoForgeAdvancementProvider$NeoForgeAdvancementGenerator_ = { criteriaReplacers?: $List_<$BiFunction_<$Criterion<never>, $HolderLookup$Provider, $Criterion<never>>>, vanillaProvider?: $AdvancementSubProvider_,  } | [criteriaReplacers?: $List_<$BiFunction_<$Criterion<never>, $HolderLookup$Provider, $Criterion<never>>>, vanillaProvider?: $AdvancementSubProvider_, ];
    export class $NeoForgeFluidTagsProvider extends $FluidTagsProvider {
        addTags(arg0: $HolderLookup$Provider): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeBiomeTagsProvider extends $BiomeTagsProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeRegistryOrderReportProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
    export class $NeoForgeStructureTagsProvider extends $StructureTagsProvider {
        addTags(arg0: $HolderLookup$Provider): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeAdvancementProvider extends $AdvancementProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeDamageTypeTagsProvider extends $DamageTypeTagsProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $VanillaSoundDefinitionsProvider extends $SoundDefinitionsProvider {
        constructor(arg0: $PackOutput, arg1: $ExistingFileHelper);
    }
    export class $NeoForgeDataMapsProvider$StrippablesAccess extends $AxeItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $NeoForgeItemTagsProvider extends $ItemTagsProvider {
        addTags(arg0: $HolderLookup$Provider): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg3: $ExistingFileHelper);
    }
    export class $NeoForgeSpriteSourceProvider extends $SpriteSourceProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeBlockTagsProvider extends $BlockTagsProvider {
        addTags(arg0: $HolderLookup$Provider): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeEntityTypeTagsProvider extends $EntityTypeTagsProvider {
        addTags(arg0: $HolderLookup$Provider): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $NeoForgeRecipeProvider extends $VanillaRecipeProvider {
        static LAPIS_SMELTABLES: $ImmutableList<$ItemLike>;
        static EMERALD_SMELTABLES: $ImmutableList<$ItemLike>;
        static COPPER_SMELTABLES: $ImmutableList<$ItemLike>;
        static REDSTONE_SMELTABLES: $ImmutableList<$ItemLike>;
        static COAL_SMELTABLES: $ImmutableList<$ItemLike>;
        static GOLD_SMELTABLES: $ImmutableList<$ItemLike>;
        static IRON_SMELTABLES: $ImmutableList<$ItemLike>;
        static DIAMOND_SMELTABLES: $ImmutableList<$ItemLike>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $NeoForgeLanguageProvider extends $LanguageProvider {
        constructor(arg0: $PackOutput);
    }
    export class $NeoForgeDataMapsProvider extends $DataMapProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
}
