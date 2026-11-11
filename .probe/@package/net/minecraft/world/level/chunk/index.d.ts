import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $WeakReference } from "@package/java/lang/ref";
import { $BitStorage, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $AttachmentType, $AttachmentType_, $IAttachmentHolder, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $WorldBorderListenerOnce } from "@package/net/caffeinemc/mods/lithium/common/world/listeners";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ExtendedPalettedContainer } from "@package/org/embeddedt/modernfix/chunk";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Map$Entry, $Set, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $Function_, $BiPredicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $IChunkGenerator } from "@package/org/embeddedt/modernfix/duck";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelChunkAuxiliaryLightManager, $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        factory(): $Palette$Factory;
        bits(): number;
        createData(registry: $IdMap<T>, paletteResize: $PaletteResize_<T>, size: number): $PalettedContainer$Data<T>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { bits?: number, factory?: $Palette$Factory_,  } | [bits?: number, factory?: $Palette$Factory_, ];
    /**
     * A representation of a 16x16x16 cube of nibbles (half-bytes).
     */
    export class $DataLayer {
        layerToString(unused: number): string;
        /**
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         * @return The value of this data layer at the provided position.
         */
        get(x: number, y: number, z: number): number;
        isEmpty(): boolean;
        fill(size: number): void;
        /**
         * Sets the value of this data layer at the provided position.
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         */
        set(x: number, y: number, z: number, value: number): void;
        copy(): $DataLayer;
        getData(): number[];
        isDefinitelyHomogenous(): boolean;
        isDefinitelyFilledWith(value: number): boolean;
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor();
        constructor(size: number);
        constructor(data: number[]);
        get empty(): boolean;
        get data(): number[];
        get definitelyHomogenous(): boolean;
    }
    export class $ChunkGenerator implements $ChunkGeneratorAccessor {
        validate(): void;
        getFirstOccupiedHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        createState(structureSetLookup: $HolderLookup<$StructureSet_>, randomState: $RandomState, seed: number): $ChunkGeneratorStructureState;
        findNearestMapStructure(level: $ServerLevel, structure: $HolderSet_<$Structure>, pos: $BlockPos_, searchRadius: number, skipKnownStructures: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        getSeaLevel(): number;
        addDebugScreenInfo(info: $List_<string>, random: $RandomState, pos: $BlockPos_): void;
        getSpawnHeight(level: $LevelHeightAccessor): number;
        buildSurface(level: $WorldGenRegion, structureManager: $StructureManager, random: $RandomState, chunk: $ChunkAccess): void;
        applyCarvers(level: $WorldGenRegion, seed: number, arg2: $RandomState, random: $BiomeManager, biomeManager: $StructureManager, structureManager: $ChunkAccess, chunk: $GenerationStep$Carving_): void;
        createBiomes(randomState: $RandomState, blender: $Blender, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        fillFromNoise(blender: $Blender, randomState: $RandomState, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        spawnOriginalMobs(level: $WorldGenRegion): void;
        createReferences(level: $WorldGenLevel, structureManager: $StructureManager, chunk: $ChunkAccess): void;
        createStructures(registryAccess: $RegistryAccess, structureState: $ChunkGeneratorStructureState, structureManager: $StructureManager, chunk: $ChunkAccess, structureTemplateManager: $StructureTemplateManager): void;
        getFirstFreeHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        refreshFeaturesPerStep(): void;
        applyBiomeDecoration(level: $WorldGenLevel, chunk: $ChunkAccess, structureManager: $StructureManager): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        getMinY(): number;
        getMobsAt(biome: $Holder_<$Biome>, structureManager: $StructureManager, category: $MobCategory_, pos: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        handler$dfm000$terrablender$validate(arg0: $CallbackInfo): void;
        getBaseHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getBaseColumn(x: number, z: number, height: $LevelHeightAccessor, random: $RandomState): $NoiseColumn;
        getGenDepth(): number;
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        setBiomeSource(biomeSource: $BiomeSource): void;
        setFeaturesPerStep(arg0: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        getBiomeSource(): $BiomeSource;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        constructor(biomeSource: $BiomeSource);
        constructor(biomeSource: $BiomeSource, generationSettingsGetter: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        get seaLevel(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get minY(): number;
        get genDepth(): number;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, packedData: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(pos: number): $BlockState;
        setBlock(pos: number, state: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(x: number, y: number, z: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $ChunkGeneratorStructureState implements $IChunkGenerator {
        hasStructureChunkInRange(structureSet: $Holder_<$StructureSet>, x: number, z: number, range: number): boolean;
        mfix$setStrongholdCachePath(arg0: $Path_, arg1: $MinecraftServer): void;
        ensureStructuresGenerated(): void;
        static createForNormal(randomState: $RandomState, seed: number, arg2: $BiomeSource, biomeSource: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        static createForFlat(randomState: $RandomState, levelSeed: number, arg2: $BiomeSource, biomeSource: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        randomState(): $RandomState;
        getRingPositionsFor(placement: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        getPlacementsForStructure(structure: $Holder_<$Structure>): $List<$StructurePlacement>;
        getLevelSeed(): number;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        getStartForStructure(structure: $Structure_): $StructureStart;
        getAllReferences(): $Map<$Structure, $LongSet>;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        storage(): ($LongStream) | undefined;
        paletteEntries(): $List<T>;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>,  } | [storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>, ];
    /**
     * During world generation, adjacent chunks may be fully generated (and thus be level chunks), but are often needed in proto chunk form. This wraps a completely generated chunk as a proto chunk.
     */
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        static NO_FILLED_SECTION: number;
        constructor(wrapped: $LevelChunk, allowWrites: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        calculateBitsForSerialization<A>(registry: $IdMap<A>, size: number): number;
        size(): number;
        getIndex(x: number, y: number, z: number): number;
        getConfiguration<A>(registry: $IdMap<A>, size: number): $PalettedContainer$Configuration<A>;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
        constructor(sizeBits: number);
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>,  } | [blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity, $WorldBorderListenerOnce {
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, size: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, size: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, size: number): void;
        onAreaReplaced(arg0: $WorldBorder): void;
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $Trackable {
        getData<T>(arg0: $AttachmentType_<T>): T;
        getLevel(): $Level;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getSections(): $LevelChunkSection[];
        getPos(): $ChunkPos;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getBlockEntityNbtForSaving(pos: $BlockPos_, registries: $HolderLookup$Provider): $CompoundTag;
        hasData(arg0: $AttachmentType_<never>): boolean;
        setUnsaved(lightCorrect: boolean): void;
        addEntity(entity: $Entity): void;
        getMinBuildHeight(): number;
        getSection(index: number): $LevelChunkSection;
        getHeight(type: $Heightmap$Types_, x: number, z: number): number;
        getHeight(): number;
        getBlockTicks(): $TickContainerAccess<$Block>;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        setBlockState(pos: $BlockPos_, state: $BlockState_, isMoving: boolean): $BlockState;
        removeBlockEntity(pos: $BlockPos_): void;
        setBlockEntity(blockEntity: $BlockEntity): void;
        getInhabitedTime(): number;
        hasAttachments(): boolean;
        atl$getBaseClass(): $Class<any>;
        markPosForPostprocessing(pos: $BlockPos_): void;
        getOrCreateHeightmapUnprimed(type: $Heightmap$Types_): $Heightmap;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        addPackedPostProcess(packedPosition: number, index: number): void;
        static getOrCreateOffsetList(packedPositions: $ShortList[], index: number): $ShortList;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        getHighestGeneratedStatus(): $ChunkStatus;
        getStartForStructure(structure: $Structure_): $StructureStart;
        getListenerRegistry(sectionY: number): $GameEventListenerRegistry;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        getHighestFilledSectionIndex(): number;
        getOrCreateNoiseChunk(noiseChunkCreator: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasAnyStructureReferences(): boolean;
        initializeLightSources(): void;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        isOldNoiseGeneration(): boolean;
        incrementInhabitedTime(amount: number): void;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        fillBiomesFromNoise(resolver: $BiomeResolver_, sampler: $Climate$Sampler_): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(predicate: $Predicate_<$BlockState>, output: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        isUnsaved(): boolean;
        setInhabitedTime(amount: number): void;
        getPersistedStatus(): $ChunkStatus;
        /**
         * @deprecated
         */
        carverBiome(caverBiomeSettingsSupplier: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        setLightCorrect(lightCorrect: boolean): void;
        getAllReferences(): $Map<any, any>;
        getSkyLightSources(): $ChunkSkyLightSources;
        setHeightmap(type: $Heightmap$Types_, data: number[]): void;
        setAllStarts(structureReferencesMap: $Map_<$Structure_, $StructureStart>): void;
        getPostProcessing(): $ShortList[];
        getBlendingData(): $BlendingData;
        setBlendingData(blendingData: $BlendingData): void;
        isUpgrading(): boolean;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        setBlockEntityNbt(tag: $CompoundTag_): void;
        isSectionEmpty(y: number): boolean;
        getBlockEntityNbt(pos: $BlockPos_): $CompoundTag;
        isLightCorrect(): boolean;
        getUpgradeData(): $UpgradeData;
        isYSpaceEmpty(startY: number, endY: number): boolean;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        hasPrimedHeightmap(type: $Heightmap$Types_): boolean;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getLightEmission(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        syncData(arg0: $AttachmentType_<never>): void;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, inhabitedTime: number, arg5: $LevelChunkSection[] | null, sections: $BlendingData | null);
        get level(): $Level;
        get sections(): $LevelChunkSection[];
        get pos(): $ChunkPos;
        get minBuildHeight(): number;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get highestGeneratedStatus(): $ChunkStatus;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get highestSectionPosition(): number;
        get highestFilledSectionIndex(): number;
        get oldNoiseGeneration(): boolean;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get persistedStatus(): $ChunkStatus;
        get skyLightSources(): $ChunkSkyLightSources;
        get postProcessing(): $ShortList[];
        get upgrading(): boolean;
        get upgradeData(): $UpgradeData;
        get heightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity, $WrappedBlockEntityTickInvokerAccessor {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        copyFrom(palette: $Palette<T>, bitStorage: $BitStorage): void;
        storage(): $BitStorage;
        palette(): $Palette<T>;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { storage?: $BitStorage, palette?: $Palette<any>, configuration?: $PalettedContainer$Configuration_<any>,  } | [storage?: $BitStorage, palette?: $Palette<any>, configuration?: $PalettedContainer$Configuration_<any>, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ExtendedPalettedContainer<any>, $PalettedContainerROExtension<any> {
        handler$cgb000$lithium$removeLockHelper(arg0: $CallbackInfo): void;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        handler$cge000$lithium$count(arg0: $PalettedContainer$CountConsumer_<any>, arg1: $CallbackInfo): void;
        get(x: number, y: number, z: number): T;
        /**
         * Counts the number of instances of each state in the container.
         * The provided consumer is invoked for each state with the number of instances.
         */
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        set(x: number, y: number, z: number, state: T): void;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        release(): void;
        getAndSet(x: number, y: number, z: number, state: T): T;
        acquire(): void;
        pack(registry: $IdMap<any>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<any>;
        getAll(consumer: $Consumer_<T>): void;
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
        mfix$getPalette(): $Palette<any>;
        recreate(): $PalettedContainer<T>;
        maybeHas(predicate: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        static codecRO<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainerRO<T>>;
        static codecRW<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainer<T>>;
        sodium$copy(): $PalettedContainerRO<any>;
        getAndSetUnchecked(x: number, y: number, z: number, state: T): T;
        constructor(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, values: $List_<T>);
        constructor(registry: $IdMap<T>, palette: T, strategy: $PalettedContainer$Strategy);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(state: T, count: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData {
        isEmpty(): boolean;
        write(): $CompoundTag;
        upgrade(chunk: $LevelChunk): void;
        static EMPTY: $UpgradeData;
        constructor(tag: $CompoundTag_, level: $LevelHeightAccessor);
        get empty(): boolean;
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        get(x: number, y: number, z: number): T;
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        write(buffer: $FriendlyByteBuf): void;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        getAll(consumer: $Consumer_<T>): void;
        recreate(): $PalettedContainer<T>;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(chunk: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, value: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>, resizeHandler: $PaletteResize_<T>, value: $List_<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(index: number);
    }
    export class $LevelChunkSection {
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        release(): void;
        acquire(): void;
        getStates(): $PalettedContainer<$BlockState>;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingBlocks(): boolean;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingFluids(): boolean;
        getFluidState(x: number, y: number, z: number): $FluidState;
        getBlockState(x: number, y: number, z: number): $BlockState;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        hasOnlyAir(): boolean;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTicking(): boolean;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        setBlockState(x: number, y: number, z: number, state: $BlockState_): $BlockState;
        setBlockState(x: number, y: number, z: number, state: $BlockState_, useLocks: boolean): $BlockState;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        fillBiomesFromNoise(biomeResolver: $BiomeResolver_, climateSampler: $Climate$Sampler_, x: number, y: number, z: number): void;
        /**
         * @return `true` if this section has any states matching the given predicate. As the internal representation uses a `Palette`, this is more efficient than looping through every position in the section, or indeed the chunk.
         */
        maybeHas(predicate: $Predicate_<$BlockState>): boolean;
        readBiomes(buffer: $FriendlyByteBuf): void;
        getSerializedSize(): number;
        recalcBlockCounts(): void;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(states: $PalettedContainer<$BlockState_>, biomes: $PalettedContainerRO<$Holder_<$Biome>>);
        constructor(biomeRegistry: $Registry<$Biome_>);
        get states(): $PalettedContainer<$BlockState>;
        get randomlyTickingBlocks(): boolean;
        get randomlyTickingFluids(): boolean;
        get randomlyTicking(): boolean;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get serializedSize(): number;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder {
        isEmpty(): boolean;
        getFluidState(x: number, y: number, z: number): $FluidState;
        setGameEventListenerRegistrySections(arg0: $Int2ObjectMap<any>): void;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        getBlockEntity(pos: $BlockPos_, creationType: $LevelChunk$EntityCreationType_): $BlockEntity;
        unregisterTickContainerFromLevel(level: $ServerLevel): void;
        getAuxLightManager(arg0: $ChunkPos): $LevelChunkAuxiliaryLightManager;
        getFullStatus(): $FullChunkStatus;
        handler$fmd000$electroenergetics$onPostProcessGeneration(arg0: $CallbackInfo): void;
        registerTickContainerInLevel(level: $ServerLevel): void;
        unpackTicks(pos: number): void;
        clearAllBlockEntities(): void;
        addAndRegisterBlockEntity(blockEntity: $BlockEntity): void;
        postProcessGeneration(): void;
        updateBlockEntityTicker<T extends $BlockEntity>(blockEntity: T): void;
        replaceWithPacketData(buffer: $FriendlyByteBuf, tag: $CompoundTag_, outputTagConsumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        handler$zzp000$astralsorcery$additionalRemoval(arg0: $BlockPos_, arg1: $CallbackInfo, arg2: $BlockEntity): void;
        handler$bkk000$observerlib$onBlockStateUpdate(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: $CallbackInfoReturnable<any>, arg4: $BlockState_): void;
        handler$fmd000$electroenergetics$setBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: $CallbackInfoReturnable<any>): void;
        setLoaded(loaded: boolean): void;
        handler$zzp000$astralsorcery$overwriteBlockEntityAdditionalRemoval(arg0: $BlockEntity, arg1: $CallbackInfo, arg2: $BlockEntity): void;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        runPostLoad(): void;
        replaceBiomes(buffer: $FriendlyByteBuf): void;
        setFullStatus(fullStatus: $Supplier_<$FullChunkStatus>): void;
        loaded: boolean;
        xaero_chunkClean: boolean;
        tickersInLevel: $Map<$BlockPos, $LevelChunk$RebindableTickingBlockEntityWrapper>;
        static NO_FILLED_SECTION: number;
        constructor(level: $ServerLevel, chunk: $ProtoChunk, postLoad: $LevelChunk$PostLoadProcessor_ | null);
        constructor(level: $Level_, pos: $ChunkPos, data: $UpgradeData, blockTicks: $LevelChunkTicks<$Block_>, fluidTicks: $LevelChunkTicks<$Fluid_>, inhabitedTime: number, arg6: $LevelChunkSection[] | null, sections: $LevelChunk$PostLoadProcessor_ | null, postLoad: $BlendingData | null);
        constructor(level: $Level_, pos: $ChunkPos);
        get empty(): boolean;
        set gameEventListenerRegistrySections(value: $Int2ObjectMap<any>);
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        close(): void;
        tick(hasTimeLeft: $BooleanSupplier_, tickChunks: boolean): void;
        /**
         * @return `true` if a chunk is loaded at the provided position, without forcing a chunk load.
         */
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getLightEngine(): $LevelLightEngine;
        /**
         * @return A human-readable string representing data about this chunk source.
         */
        gatherStats(): string;
        setSpawnSettings(hostile: boolean, peaceful: boolean): void;
        getChunkNow(chunkX: number, chunkZ: number): $LevelChunk;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number, load: boolean): $LevelChunk;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        getLoadedChunksCount(): number;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        constructor();
        get lightEngine(): $LevelLightEngine;
        get loadedChunksCount(): number;
    }
    export class $ProtoChunk extends $ChunkAccess {
        setPersistedStatus(status: $ChunkStatus_): void;
        setCarvingMask(step: $GenerationStep$Carving_, carvingMask: $CarvingMask): void;
        setLightEngine(lightEngine: $LevelLightEngine): void;
        setBelowZeroRetrogen(belowZeroRetrogen: $BelowZeroRetrogen | null): void;
        getEntities(): $List<$CompoundTag>;
        addEntity(tag: $CompoundTag_): void;
        static packOffsetCoordinates(pos: $BlockPos_): number;
        getCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        getOrCreateCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        static unpackOffsetCoordinates(packedPos: number, yOffset: number, chunkPos: $ChunkPos): $BlockPos;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, sections: $LevelChunkSection[] | null, blockTicks: $ProtoChunkTicks<$Block_>, liquidTicks: $ProtoChunkTicks<$Fluid_>, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        set persistedStatus(value: $ChunkStatus_);
        set lightEngine(value: $LevelLightEngine);
        set belowZeroRetrogen(value: $BelowZeroRetrogen | null);
        get entities(): $List<$CompoundTag>;
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getEntries(): $List<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>, values: $List_<T>);
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>);
        get size(): number;
        get entries(): $List<T>;
        get serializedSize(): number;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        updateShape(state: $BlockState_, direction: $Direction_, offsetState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, offsetPos: $BlockPos_): $BlockState;
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        close(): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        getSection(pos: $BlockPos_): $LevelChunkSection;
        constructor(level: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(registry: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getLevel(): $BlockGetter;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        loaded: boolean;
        xaero_chunkClean: boolean;
        tickersInLevel: $Map<$BlockPos, $LevelChunk$RebindableTickingBlockEntityWrapper>;
        static NO_FILLED_SECTION: number;
        constructor(level: $Level_, pos: $ChunkPos, biome: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        setAdditionalMask(additionalMask: $CarvingMask$Mask_): void;
        get(x: number, y: number, z: number): boolean;
        toArray(): number[];
        stream(pos: $ChunkPos): $Stream<$BlockPos>;
        set(x: number, y: number, z: number): void;
        constructor(mask: number[], minY: number);
        constructor(mask: number, minY: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
