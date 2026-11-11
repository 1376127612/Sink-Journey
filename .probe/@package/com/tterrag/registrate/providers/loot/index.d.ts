import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $FunctionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Set } from "@package/java/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $NonNullConsumer_ } from "@package/com/tterrag/registrate/util/nullness";
import { $PackOutput } from "@package/net/minecraft/data";
import { $FrogVariant } from "@package/net/minecraft/world/entity/animal";
import { $Consumer_, $BiConsumer, $Consumer } from "@package/java/util/function";
import { $HolderLookup$Provider, $WritableRegistry, $Holder, $HolderLookup } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTableSubProvider, $LootTableProvider, $LootTableProvider$SubProviderEntry } from "@package/net/minecraft/data/loot";
import { $RegistrateProvider } from "@package/com/tterrag/registrate/providers";
import { $LootItemCondition$Builder, $LootItemCondition$Builder_, $ConditionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $VanillaBlockLoot, $VanillaEntityLoot } from "@package/net/minecraft/data/loot/packs";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $ValidationContext, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/com/tterrag/registrate/providers/loot" {
    export class $RegistrateEntityLootTables extends $VanillaEntityLoot implements $RegistrateLootTables {
        add(arg0: $EntityType_<never>, arg1: $LootTable$Builder): void;
        add(arg0: $EntityType_<never>, arg1: $ResourceKey_<$LootTable>, arg2: $LootTable$Builder): void;
        getRegistries(): $HolderLookup$Provider;
        entityLookup(): $HolderLookup<$EntityType<never>>;
        blockLookup(): $HolderLookup<$Block>;
        itemLookup(): $HolderLookup<$Item>;
        static createSheepTable(arg0: $ItemLike_): $LootTable$Builder;
        canHaveLootTable(arg0: $EntityType_<never>): boolean;
        killedByFrogVariant(arg0: $ResourceKey_<$FrogVariant>): $LootItemCondition$Builder;
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext): void;
        static SPECIAL_LOOT_TABLE_TYPES: $Set<$EntityType<never>>;
        constructor(arg0: $HolderLookup$Provider, arg1: $AbstractRegistrate<never>, arg2: $Consumer_<$RegistrateEntityLootTables>);
        get registries(): $HolderLookup$Provider;
    }
    export class $RegistrateBlockLootTables extends $VanillaBlockLoot implements $RegistrateLootTables {
        add(arg0: $Block_, arg1: $LootTable$Builder): void;
        getRegistries(): $HolderLookup$Provider;
        entityLookup(): $HolderLookup<$EntityType<never>>;
        blockLookup(): $HolderLookup<$Block>;
        itemLookup(): $HolderLookup<$Item>;
        dropSelf(arg0: $Block_): void;
        applyExplosionDecay<T extends $FunctionUserBuilder<T>>(arg0: $ItemLike_, arg1: $FunctionUserBuilder<T>): T;
        applyExplosionCondition<T extends $ConditionUserBuilder<T>>(arg0: $ItemLike_, arg1: $ConditionUserBuilder<T>): T;
        createShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_, arg1: $NumberProvider_): $LootTable$Builder;
        createSilkTouchOnlyTable(arg0: $ItemLike_): $LootTable$Builder;
        createPotFlowerItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createSlabItemTable(arg0: $Block_): $LootTable$Builder;
        createShulkerBoxDrop(arg0: $Block_): $LootTable$Builder;
        createCopperOreDrops(arg0: $Block_): $LootTable$Builder;
        createMangroveLeavesDrops(arg0: $Block_): $LootTable$Builder;
        createMushroomBlockDrop(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createCaveVinesDrop(arg0: $Block_): $LootTable$Builder;
        createLapisOreDrops(arg0: $Block_): $LootTable$Builder;
        createMultifaceBlockDrops(arg0: $Block_, arg1: $LootItemCondition$Builder_): $LootTable$Builder;
        addNetherVinesDropTable(arg0: $Block_, arg1: $Block_): void;
        createOakLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        static createShearsOnlyDrop(arg0: $ItemLike_): $LootTable$Builder;
        createRedstoneOreDrops(arg0: $Block_): $LootTable$Builder;
        static createCandleCakeDrops(arg0: $Block_): $LootTable$Builder;
        dropOther(arg0: $Block_, arg1: $ItemLike_): void;
        createNameableBlockEntityTable(arg0: $Block_): $LootTable$Builder;
        createDoublePlantShearsDrop(arg0: $Block_): $LootTable$Builder;
        createDoublePlantWithSeedDrops(arg0: $Block_, arg1: $Block_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_, arg2: $NumberProvider_): $LootTable$Builder;
        createSilkTouchDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSilkTouchOrShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        otherWhenSilkTouch(arg0: $Block_, arg1: $Block_): void;
        createBannerDrop(arg0: $Block_): $LootTable$Builder;
        createCropDrops(arg0: $Block_, arg1: $Item_, arg2: $Item_, arg3: $LootItemCondition$Builder_): $LootTable$Builder;
        createPetalsDrops(arg0: $Block_): $LootTable$Builder;
        createGrassDrops(arg0: $Block_): $LootTable$Builder;
        createDoorTable(arg0: $Block_): $LootTable$Builder;
        createBeeHiveDrop(arg0: $Block_): $LootTable$Builder;
        createBeeNestDrop(arg0: $Block_): $LootTable$Builder;
        createOreDrop(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        dropWhenSilkTouch(arg0: $Block_): void;
        createLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        dropPottedContents(arg0: $Block_): void;
        createCandleDrops(arg0: $Block_): $LootTable$Builder;
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext): void;
        constructor(arg0: $HolderLookup$Provider, arg1: $AbstractRegistrate<never>, arg2: $Consumer_<$RegistrateBlockLootTables>);
        get registries(): $HolderLookup$Provider;
    }
    export class $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> {
        static register<T extends $RegistrateLootTables>(arg0: string, arg1: $LootContextParamSet, arg2: $TriFunction_<$HolderLookup$Provider, $AbstractRegistrate<any>, $Consumer<T>, T>): $RegistrateLootTableProvider$LootType<T>;
        static ENTITY: $RegistrateLootTableProvider$LootType<$RegistrateEntityLootTables>;
        static BLOCK: $RegistrateLootTableProvider$LootType<$RegistrateBlockLootTables>;
    }
    export interface $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> {
        getLootCreator(arg0: $HolderLookup$Provider, arg1: $AbstractRegistrate<never>, arg2: $Consumer_<T>): T;
        getLootSet(): $LootContextParamSet;
        get lootSet(): $LootContextParamSet;
    }
    export class $RegistrateLootTables {
    }
    export interface $RegistrateLootTables extends $LootTableSubProvider {
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistrateLootTables}.
     */
    export type $RegistrateLootTables_ = (() => void);
    export class $RegistrateLootTableProvider extends $LootTableProvider implements $RegistrateProvider {
        resolve<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        getProvider(): $HolderLookup$Provider;
        getSide(): $LogicalSide;
        addLootAction<T extends $RegistrateLootTables>(arg0: $RegistrateLootTableProvider$LootType<T>, arg1: $NonNullConsumer_<T>): void;
        addLootAction(arg0: $LootContextParamSet, arg1: $Consumer_<$BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>>): void;
        subProviders: $List<$LootTableProvider$SubProviderEntry>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>);
        get provider(): $HolderLookup$Provider;
        get side(): $LogicalSide;
    }
}
