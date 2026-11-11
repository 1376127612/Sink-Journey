import { $ServerChunkCacheAccessor } from "@package/org/embeddedt/modernfix/common/mixin/bugfix/chunk_deadlock";
import { $Long2ObjectLinkedOpenHashMap, $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerScoreboard, $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $Entity$RemovalReason, $LivingEntity, $Mob, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $IServerLevel } from "@package/alternate/current/interfaces/mixin";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $MultipartPartsHolder } from "@package/earth/terrarium/adastra/common/entities/multipart";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $Duration_ } from "@package/java/time";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor as $ServerLevelAccessor$3 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $List, $List_, $Collection, $Comparator, $Set } from "@package/java/util";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $CustomSpawner_, $LightLayer_, $ChunkPos, $BlockGetter, $ColorResolver_, $Level_, $BlockEventData, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $ServerWorldExtended } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $ServerPlayerData as $ServerPlayerData$1, $IServerPlayer as $IServerPlayer$1 } from "@package/xaero/common/server/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit } from "@package/net/minecraft/util";
import { $IServerPlayer, $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $BossEvent$BossBarOverlay_, $InteractionResult, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ReportedException } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ServerLevelBlockEventsAccessor } from "@package/com/createnestedfactory/create_nested_factory/mixin/accessor";
import { $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $PersistentEntitySectionManager, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $WireHandler } from "@package/alternate/current/wire";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $TextFilter, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Inventory, $ChatVisiblity, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkScanAccess, $ChunkStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $ChunkHolderExtended } from "@package/net/caffeinemc/mods/lithium/common/world/chunk";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $IClearableChunkHolder, $ISuspendedHolderTrackingChunkMap } from "@package/org/embeddedt/modernfix/duck/release_protochunks";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ServerPlayerGameModeAccess, $ServerPlayerAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $DynamicGraphMinFixedPoint, $LightEngine, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $ObjectLinkedOpenHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $ChunkStep_, $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $LevelTicks, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $GenerationChunkHolderAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/chunk_access";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $ServerLevelAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning";
import { $Stream } from "@package/java/util/stream";
import { $ServerLevelAccessor as $ServerLevelAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking";
import { $ServerLevelAccessor as $ServerLevelAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        center(): $ChunkPos;
        viewDistance(): number;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        isInViewDistance(x: number, z: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackingView$Positioned}.
     */
    export type $ChunkTrackingView$Positioned_ = { viewDistance?: number, center?: $ChunkPos,  } | [viewDistance?: number, center?: $ChunkPos, ];
    export class $PlayerRespawnLogic {
        static getSpawnPosInChunk(level: $ServerLevel, chunkPos: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>> {
        getTicketLevel(): number;
        isForceTicks(): boolean;
        compareTo(other: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        createdTick: number;
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get ticketLevel(): number;
        get forceTicks(): boolean;
        get type(): $TicketType<$Ticket<never>>;
    }
    export class $TicketType<T> {
        static create<T>(name: string, comparator: $Comparator<T>): $TicketType<T>;
        static create<T>(name: string, comparator: $Comparator<T>, lifespan: number): $TicketType<T>;
        timeout(): number;
        getComparator(): $Comparator<T>;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        removeAllPlayers(): void;
        /**
         * Makes the boss visible to the given player.
         */
        addPlayer(player: $ServerPlayer): void;
        isVisible(): boolean;
        setVisible(visible: boolean): void;
        /**
         * Makes the boss visible to the given player.
         */
        removePlayer(player: $ServerPlayer): void;
        /**
         * The returned collection is unmodifiable
         */
        getPlayers(): $Collection<$ServerPlayer>;
        constructor(name: $Component_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_);
        get players(): $Collection<$ServerPlayer>;
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $IClearableChunkHolder, $ChunkHolderExtended {
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        lithium$updateLastAccessTime(arg0: number): boolean;
        mfix$resetProtoChunkFutures(): void;
        setTicketLevel(queueLevel: number): void;
        getSaveSyncFuture(): $CompletableFuture<never>;
        getSendSyncFuture(): $CompletableFuture<never>;
        addSendDependency(dependency: $CompletableFuture<never>): void;
        getChunkToSend(): $LevelChunk;
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        isReadyForSaving(): boolean;
        getTickingChunk(): $LevelChunk;
        wasAccessibleSinceLastSave(): boolean;
        refreshAccessibility(): void;
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        sectionLightChanged(type: $LightLayer_, sectionY: number): void;
        broadcastChanges(chunk: $LevelChunk): void;
        blockChanged(pos: $BlockPos_): void;
        currentlyLoading: $LevelChunk;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        constructor(pos: $ChunkPos, ticketLevel: number, levelHeightAccessor: $LevelHeightAccessor, lightEngine: $LevelLightEngine, onLevelChange: $ChunkHolder$LevelChangeListener_, playerProvider: $ChunkHolder$PlayerProvider_);
        get entityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        set ticketLevel(value: number);
        get saveSyncFuture(): $CompletableFuture<never>;
        get sendSyncFuture(): $CompletableFuture<never>;
        get chunkToSend(): $LevelChunk;
        get fullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        get readyForSaving(): boolean;
        get tickingChunk(): $LevelChunk;
        get tickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
    }
    export class $WorldGenRegion implements $WorldGenLevel {
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        getRandom(): $RandomSource;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity> | null): $List<$Entity>;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        getFluidState(pos: $BlockPos_): $FluidState;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        getBlockState(pos: $BlockPos_): $BlockState;
        registryAccess(): $RegistryAccess;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getShade(direction: $Direction_, shade: boolean): number;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        dimensionType(): $DimensionType;
        getBiomeManager(): $BiomeManager;
        isClientSide(): boolean;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        addFreshEntity(entity: $Entity): boolean;
        getMinBuildHeight(): number;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        getServer(): $MinecraftServer;
        getHeight(): number;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity>): $Player;
        getLightEngine(): $LevelLightEngine;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        getSkyDarken(): number;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        /**
         * Gets the random world seed.
         */
        nextSubTickCount(): number;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        getCenter(): $ChunkPos;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        ensureCanWrite(pos: $BlockPos_): boolean;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        addFreshEntityWithPassengers(entity: $Entity): void;
        /**
         * Gets the random world seed.
         */
        dayTime(): number;
        getDifficulty(): $Difficulty;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        getTimeOfDay(partialTick: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        isWaterAt(pos: $BlockPos_): boolean;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        containsAnyLiquid(collisionBox: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        fusionGetBiome(pos: $BlockPos_): $ResourceLocation;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        lithium$getLoadedChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        self(): $EntityGetter;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        getDirectSignalTo(pos: $BlockPos_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        hasNeighborSignal(pos: $BlockPos_): boolean;
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will cause a block update.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        getEntities(): $EntityArrayList;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        getBlockStates(aabb: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getLightEmission(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
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
        getBiomeFabric(pos: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(level: $ServerLevel, cache: $StaticCache2D<$GenerationChunkHolder>, generatingStep: $ChunkStep_, center: $ChunkAccess);
        get random(): $RandomSource;
        get seed(): number;
        get level(): $ServerLevel;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        set currentlyGenerating(value: $Supplier_<string> | null);
        get biomeManager(): $BiomeManager;
        get clientSide(): boolean;
        get minBuildHeight(): number;
        get server(): $MinecraftServer;
        get blockTicks(): $LevelTickAccess<$Block>;
        get lightEngine(): $LevelLightEngine;
        get seaLevel(): number;
        get skyDarken(): number;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get center(): $ChunkPos;
        get difficulty(): $Difficulty;
        get moonBrightness(): number;
        get moonPhase(): number;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $ChunkTrackingView {
        static of(center: $ChunkPos, viewDistance: number): $ChunkTrackingView;
        /**
         * Calculates the chunks that the player needs to drop in the `oldChunkTrackingView` and the chunks that need to be sent for the `newChunkTrackingView`. The chunks that overlap in both views can be kept.
         */
        static difference(oldChunkTrackingView: $ChunkTrackingView, newChunkTrackingView: $ChunkTrackingView, chunkMarker: $Consumer_<$ChunkPos>, chunkDropper: $Consumer_<$ChunkPos>): void;
        static isInViewDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number): boolean;
        /**
         * Check if a chunk `(x,z)` is within a `viewDistance` which is centered on `(centerX, centerZ)`
         */
        static isWithinDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        isInViewDistance(x: number, z: number): boolean;
    }
    export class $GenerationChunkHolder implements $GenerationChunkHolderAccessor {
        scheduleChunkGenerationTask(targetStatus: $ChunkStatus_, chunkMap: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getLatestStatus(): $ChunkStatus;
        getLatestChunk(): $ChunkAccess;
        getTicketLevel(): number;
        getQueueLevel(): number;
        getAllFutures(): $List<$Pair<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        replaceProtoChunk(chunk: $ImposterProtoChunk): void;
        getChunkIfPresent(status: $ChunkStatus_): $ChunkAccess;
        getGenerationRefCount(): number;
        increaseGenerationRefCount(): void;
        getChunkIfPresentUnchecked(status: $ChunkStatus_): $ChunkAccess;
        decreaseGenerationRefCount(): void;
        getPos(): $ChunkPos;
        getFullStatus(): $FullChunkStatus;
        getPersistedStatus(): $ChunkStatus;
        lithium$getChunkFuturesByStatus(): $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        invokeCannotBeLoaded(status: $ChunkStatus_): boolean;
        currentlyLoading: $LevelChunk;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        constructor(pos: $ChunkPos);
        get latestStatus(): $ChunkStatus;
        get latestChunk(): $ChunkAccess;
        get ticketLevel(): number;
        get queueLevel(): number;
        get allFutures(): $List<$Pair<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        get generationRefCount(): number;
        get pos(): $ChunkPos;
        get fullStatus(): $FullChunkStatus;
        get persistedStatus(): $ChunkStatus;
    }
    export class $ChunkResult<T> {
        static of<T>(value: T): $ChunkResult<T>;
        static orElse<R>(chunkResult: $ChunkResult<R>, orElse: R | null): R;
        static error<T>(error: string): $ChunkResult<T>;
        static error<T>(errorSupplier: $Supplier_<string>): $ChunkResult<T>;
    }
    export interface $ChunkResult<T> {
        map<R>(mappingFunction: $Function_<T, R>): $ChunkResult<R>;
        orElse(value: T | null): T;
        orElseThrow<E extends $Throwable>(exceptionSupplier: $Supplier_<E>): T;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(action: $Consumer_<T>): $ChunkResult<T>;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCache$ChunkAndHolder}.
     */
    export type $ServerChunkCache$ChunkAndHolder_ = { chunk?: $LevelChunk, holder?: $ChunkHolder,  } | [chunk?: $LevelChunk, holder?: $ChunkHolder, ];
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $ServerChunkCacheAccessor {
        getChunkDebugData(chunkPos: $ChunkPos): string;
        save(flush: boolean): void;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        getGenerator(): $ChunkGenerator;
        pollTask(): boolean;
        getLevel(): $Level;
        getPendingTasksCount(): number;
        setSimulationDistance(simulationDistance: number): void;
        addEntity(entity: $Entity): void;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        removeEntity(entity: $Entity): void;
        blockChanged(pos: $BlockPos_): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        isPositionTicking(chunkPos: number): boolean;
        chunkScanner(): $ChunkScanAccess;
        getDataStorage(): $DimensionDataStorage;
        randomState(): $RandomState;
        getGeneratorState(): $ChunkGeneratorStructureState;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        getPoiManager(): $PoiManager;
        getTickingGenerated(): number;
        removeTicketsOnClosing(): void;
        setViewDistance(simulationDistance: number): void;
        getChunkFuture(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        self(): $ServerChunkCache;
        broadcast(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        broadcastAndSend(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        mfix$getMainThreadProcessor(): $ServerChunkCache$MainThreadExecutor;
        level: $ServerLevel;
        chunkMap: $ChunkMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, generator: $ChunkGenerator, viewDistance: number, simulationDistance: number, sync: boolean, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>);
        get generator(): $ChunkGenerator;
        get pendingTasksCount(): number;
        set simulationDistance(value: number);
        get lightEngine(): $ThreadedLevelLightEngine;
        get dataStorage(): $DimensionDataStorage;
        get generatorState(): $ChunkGeneratorStructureState;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        get poiManager(): $PoiManager;
        get tickingGenerated(): number;
        set viewDistance(value: number);
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        constructor(arg0: T);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Success}.
     */
    export type $ChunkResult$Success_<T> = { value?: any,  } | [value?: any, ];
    export class $PlayerMap {
        unIgnorePlayer(player: $ServerPlayer): void;
        ignoredOrUnknown(player: $ServerPlayer): boolean;
        ignorePlayer(player: $ServerPlayer): void;
        ignored(player: $ServerPlayer): boolean;
        addPlayer(player: $ServerPlayer, skipPlayer: boolean): void;
        removePlayer(player: $ServerPlayer): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static isEntityTicking(level: number): boolean;
        static isBlockTicking(level: number): boolean;
        static generationStatus(level: number): $ChunkStatus;
        static byStatus(status: $ChunkStatus_): number;
        static byStatus(status: $FullChunkStatus_): number;
        static getStatusAroundFullChunk(level: number): $ChunkStatus;
        static getStatusAroundFullChunk(distance: number, chunkStatus: $ChunkStatus_ | null): $ChunkStatus;
        static isLoaded(level: number): boolean;
        static fullStatus(level: number): $FullChunkStatus;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static MAX_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        getLastSentYHeadRot(): number;
        getLastSentMovement(): $Vec3;
        addPairing(player: $ServerPlayer): void;
        getLastSentXRot(): number;
        getPositionBase(): $Vec3;
        getLastSentYRot(): number;
        sendChanges(): void;
        removePairing(player: $ServerPlayer): void;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(level: $ServerLevel, entity: $Entity, updateInterval: number, trackDelta: boolean, broadcast: $Consumer_<$Packet<never>>);
        get lastSentYHeadRot(): number;
        get lastSentMovement(): $Vec3;
        get lastSentXRot(): number;
        get positionBase(): $Vec3;
        get lastSentYRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        runGenerationTasks(): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
    }
    export class $ColumnPos extends $Record {
        x(): number;
        z(): number;
        toLong(): number;
        static asLong(x: number, z: number): number;
        static getX(pos: number): number;
        static getZ(pos: number): number;
        toChunkPos(): $ChunkPos;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { z?: number, x?: number,  } | [z?: number, x?: number, ];
    export class $ChunkTaskPriorityQueue<T> {
        pop(): $Stream<$Either<T, $Runnable>>;
        hasWork(): boolean;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(name: string, maxTasks: number);
    }
    export class $ChunkGenerationTask {
        runUntilWait(): $CompletableFuture<never>;
        markForCancellation(): void;
        static create(chunkMap: $GeneratingChunkMap, targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        getCenter(): $GenerationChunkHolder;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        compareTo(other: $BlockDestructionProgress): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getId(): number;
        getPos(): $BlockPos;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        updateTick(damage: number): void;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getProgress(): number;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        setProgress(damage: number): void;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getUpdatedRenderTick(): number;
        create$getExtraPositions(): $Set<any>;
        create$setExtraPositions(arg0: $Set_<any>): void;
        constructor(id: number, pos: $BlockPos_);
        get id(): number;
        get pos(): $BlockPos;
        get updatedRenderTick(): number;
    }
    export class $TickingTracker extends $ChunkTracker {
        getTicketDebugString(chunkPos: number): string;
        replacePlayerTicketsLevel(ticketLevel: number): void;
        getLevel(chunkPos: $ChunkPos): number;
        runAllUpdates(): void;
        removeTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable {
        tryScheduleUpdate(): void;
        initializeLight(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        lightChunk(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        waitForPendingTasks(x: number, z: number): $CompletableFuture<never>;
        close(): void;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunk: $LightChunkGetter, chunkMap: $ChunkMap, skyLight: boolean, taskMailbox: $ProcessorMailbox<$Runnable_>, sorterMailbox: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker {
        static SOURCE: number;
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker {
        static SOURCE: number;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        destroyProgressStart: number;
        gameTicks: number;
        lastSentState: number;
        destroyPos: $BlockPos;
        constructor(player: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        static SOURCE: number;
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        error(): $Supplier<string>;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Fail}.
     */
    export type $ChunkResult$Fail_<T> = { error?: $Supplier_<string>,  } | [error?: $Supplier_<string>, ];
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        isOrAfter(status: $FullChunkStatus_): boolean;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
        onSectionChange(arg0: $Entity): void;
        onTrackingStart(arg0: $Entity): void;
        onTickingEnd(arg0: $Entity): void;
        onTickingStart(arg0: $Entity): void;
        onTrackingEnd(arg0: $Entity): void;
        onDestroyed(arg0: $Entity): void;
        onCreated(arg0: $Entity): void;
    }
    export class $ClientInformation extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        language(): string;
        textFilteringEnabled(): boolean;
        static createDefault(): $ClientInformation;
        chatVisibility(): $ChatVisiblity;
        mainHand(): $HumanoidArm;
        chatColors(): boolean;
        modelCustomisation(): number;
        viewDistance(): number;
        allowsListing(): boolean;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientInformation}.
     */
    export type $ClientInformation_ = { viewDistance?: number, language?: string, allowsListing?: boolean, chatVisibility?: $ChatVisiblity_, chatColors?: boolean, mainHand?: $HumanoidArm_, textFilteringEnabled?: boolean, modelCustomisation?: number,  } | [viewDistance?: number, language?: string, allowsListing?: boolean, chatVisibility?: $ChatVisiblity_, chatColors?: boolean, mainHand?: $HumanoidArm_, textFilteringEnabled?: boolean, modelCustomisation?: number, ];
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $ISuspendedHolderTrackingChunkMap {
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        mfix$markForSuspensionCheck(chunkPos: $ChunkPos): void;
        getChunkDebugData(pos: $ChunkPos): string;
        getChunkToSend(chunkPos: number): $LevelChunk;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        runGenerationTasks(): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        prepareEntityTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        mfix$getMainThreadExecutor(): $Executor;
        prepareTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        resendBiomesForChunks(chunks: $List_<$ChunkAccess>): void;
        prepareAccessibleChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getPlayersCloseForSpawning(chunkPos: $ChunkPos): $List<$ServerPlayer>;
        waitForLightBeforeSending(chunkPos: $ChunkPos, range: number): void;
        size(): number;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        getChunks(): $Iterable<$ChunkHolder>;
        getDistanceManager(): $DistanceManager;
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
        hasWork(): boolean;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        getStorageName(): string;
        getTickingGenerated(): number;
        /**
         * Checks if a chunk is on the edge of the player's view distance.
         */
        isChunkTracked(player: $ServerPlayer, x: number, z: number): boolean;
        debugFuturesAndCreateReportedException(exception: $IllegalStateException, details: string): $ReportedException;
        playerMap: $PlayerMap;
        entityMap: $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static MAX_VIEW_DISTANCE: number;
        static FORCED_TICKET_LEVEL: number;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        pendingUnloads: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, mainThreadExecutor: $BlockableEventLoop<$Runnable_>, lightChunk: $LightChunkGetter, generator: $ChunkGenerator, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>, viewDistance: number, sync: boolean);
        get chunks(): $Iterable<$ChunkHolder>;
        get distanceManager(): $DistanceManager;
        get storageName(): string;
        get tickingGenerated(): number;
    }
    export class $ServerPlayerGameMode implements $ServerPlayerGameModeAccess {
        /**
         * Sets the world instance.
         */
        setLevel(serverLevel: $ServerLevel): void;
        tick(): void;
        useItem(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_, hitResult: $BlockHitResult): $InteractionResult;
        /**
         * Get if we are in creative game mode.
         */
        isCreative(): boolean;
        getPreviousGameModeForPlayer(): $GameType;
        /**
         * Attempts to harvest a block
         */
        destroyBlock(pos: $BlockPos_): boolean;
        changeGameModeForPlayer(gameModeForPlayer: $GameType_): boolean;
        getGameModeForPlayer(): $GameType;
        /**
         * Get if we are in creative game mode.
         */
        isSurvival(): boolean;
        handleBlockBreakAction(pos: $BlockPos_, action: $ServerboundPlayerActionPacket$Action_, face: $Direction_, maxBuildHeight: number, sequence: number): void;
        destroyAndAck(pos: $BlockPos_, sequence: number, message: string): void;
        /**
         * Get if we are in creative game mode.
         */
        isDestroyingBlock(): boolean;
        /**
         * Get if we are in creative game mode.
         */
        hasDelayedDestroy(): boolean;
        destroyProgressStart: number;
        gameTicks: number;
        lastSentState: number;
        destroyPos: $BlockPos;
        constructor(player: $ServerPlayer);
        set level(value: $ServerLevel);
        get creative(): boolean;
        get previousGameModeForPlayer(): $GameType;
        get gameModeForPlayer(): $GameType;
        get survival(): boolean;
        get destroyingBlock(): boolean;
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager {
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        position(): $Vec3;
        static of(position: $Vec3_, towardsPos: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        yaw(): number;
        constructor(position: $Vec3_, yaw: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayer$RespawnPosAngle}.
     */
    export type $ServerPlayer$RespawnPosAngle_ = { yaw?: number, position?: $Vec3_,  } | [yaw?: number, position?: $Vec3_, ];
    export class $DistanceManager {
        hasPlayersNearby(chunkPos: number): boolean;
        shouldForceTicks(chunkPos: number): boolean;
        updateSimulationDistance(viewDistance: number): void;
        addPlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        inBlockTickingRange(chunkPos: number): boolean;
        /**
         * Returns the number of chunks taken into account when calculating the mob cap
         */
        getNaturalSpawnChunkCount(): number;
        inEntityTickingRange(chunkPos: number): boolean;
        removePlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        getDebugStatus(): string;
        runAllUpdates(chunkMap: $ChunkMap): boolean;
        removeTicketsOnClosing(): void;
        removeTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        addTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        hasTickets(): boolean;
        get naturalSpawnChunkCount(): number;
        get debugStatus(): string;
    }
    export class $ServerPlayer extends $Player implements $ServerPlayerKJS, $IServerPlayer, $ServerPlayerAccess, $IServerPlayer$1 {
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getLanguage(): string;
        drop(bypassHiddenChat: boolean): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        disconnect(): void;
        lookAt(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_): void;
        handler$bod000$ae2wtlib$restockDrop(arg0: boolean, arg1: $CallbackInfoReturnable<any>, arg2: $ItemStack_): void;
        /**
         * Returns if other players can attack this player
         */
        isChangingDimension(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        requestedViewDistance(): number;
        updateOptions(clientInformation: $ClientInformation_): void;
        getAdvancements(): $PlayerAdvancements;
        /**
         * Get entity this is riding
         */
        getCamera(): $Entity;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        setCamera(targetEntity: $Entity | null): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doTick(): void;
        getStatsCounter(): $ServerStatsCounter;
        getTextFilter(): $TextFilter;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListFooter(): $Component;
        getChatSession(): $RemoteChatSession;
        setKnownMovement(knownMovement: $Vec3_): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        refreshTabListName(): void;
        loadGameTypes(compound: $CompoundTag_ | null): void;
        setChatSession(chatSession: $RemoteChatSession_): void;
        setTabListHeader(component: $Component_): void;
        setTabListFooter(component: $Component_): void;
        getRespawnPosition(): $BlockPos;
        getRecipeBook(): $ServerRecipeBook;
        getLastSectionPos(): $SectionPos;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(gameMode: $GameType_): boolean;
        doCheckFallDamage(movementX: number, arg1: number, movementY: number, arg3: boolean): void;
        /**
         * Returns if other players can attack this player
         */
        canChatInColor(): boolean;
        setLastSectionPos(sectionPos: $SectionPos): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListHeader(): $Component;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRespawnAngle(): number;
        /**
         * Returns if other players can attack this player
         */
        hasDisconnected(): boolean;
        sendChatMessage(message: $OutgoingChatMessage, filtered: boolean, boundType: $ChatType$Bound_): void;
        sendServerStatus(serverStatus: $ServerStatus_): void;
        getLastActionTime(): number;
        setRespawnPosition(dimension: $ResourceKey_<$Level>, position: $BlockPos_ | null, angle: number, forced: boolean, sendMessage: boolean): void;
        setServerLevel(level: $ServerLevel): void;
        /**
         * Returns if other players can attack this player
         */
        isRespawnForced(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        showEndCredits(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetSentInfo(): void;
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getIpAddress(): string;
        getChatVisibility(): $ChatVisiblity;
        setPlayerInput(strafe: number, forward: number, jumping: boolean, sneaking: boolean): void;
        clientInformation(): $ClientInformation;
        /**
         * Returns if other players can attack this player
         */
        allowsListing(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        initInventoryMenu(): void;
        sendSystemMessage(chatComponent: $Component_, actionBar: boolean): void;
        serverLevel(): $ServerLevel;
        findRespawnPositionAndUseSpawnBlock(keepInventory: boolean, postDimensionTransition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        teleportTo(newLevel: $ServerLevel, x: number, arg2: number, y: number, arg4: number, z: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackEnteredOrExitedLavaOnVehicle(): void;
        triggerDimensionChangeTriggers(level: $ServerLevel): void;
        setSpawnExtraParticlesOnFall(spawnExtraParticlesOnFall: boolean): void;
        xaerolib_setData(arg0: $ServerPlayerData): void;
        xaerolib_getData(): $ServerPlayerData;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        clearRaidOmenPosition(): void;
        shouldFilterMessageTo(player: $ServerPlayer): boolean;
        getRaidOmenPosition(): $BlockPos;
        getRespawnDimension(): $ResourceKey<$Level>;
        copyRespawnPosition(player: $ServerPlayer): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackStartFallingPosition(): void;
        createCommonSpawnInfo(level: $ServerLevel): $CommonPlayerSpawnInfo;
        checkMovementStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetLastActionTime(): void;
        getChunkTrackingView(): $ChunkTrackingView;
        setChunkTrackingView(chunkTrackingView: $ChunkTrackingView): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        hasChangedDimension(): void;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        checkRidingStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Add experience levels to this player.
         */
        setExperiencePoints(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setExperienceLevels(levels: number): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListDisplayName(): $Component;
        setRaidOmenPosition(raidOmenPosition: $BlockPos_): void;
        getXaeroMinimapPlayerData(): $ServerPlayerData$1;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData$1): void;
        onInsideBlock(state: $BlockState_): void;
        restoreFrom(that: $ServerPlayer, keepEverything: boolean): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doCloseContainer(): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(component: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        kick(): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        heal(): void;
        /**
         * Checks, whether the player is a server operator.
         * Returns if other players can attack this player
         */
        isOp(): boolean;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        revokeAdvancement(statKey: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(spawnExtraParticlesOnFall: boolean): void;
        captureInventory(autoRestore: boolean): $Container;
        unlockAdvancement(statKey: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        setIsChangingDimension(spawnExtraParticlesOnFall: boolean): void;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        useItem: $ItemStack;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        wonGame: boolean;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        gameMode: $ServerPlayerGameMode;
        object: $Object;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        enteredNetherPosition: $Vec3;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(server: $MinecraftServer, level: $ServerLevel, gameProfile: $GameProfile, clientInformation: $ClientInformation_);
        get language(): string;
        get changingDimension(): boolean;
        get advancements(): $PlayerAdvancements;
        get statsCounter(): $ServerStatsCounter;
        get textFilter(): $TextFilter;
        set knownMovement(value: $Vec3_);
        get recipeBook(): $ServerRecipeBook;
        get respawnAngle(): number;
        get lastActionTime(): number;
        get respawnForced(): boolean;
        get ipAddress(): string;
        get chatVisibility(): $ChatVisiblity;
        set spawnExtraParticlesOnFall(value: boolean);
        get respawnDimension(): $ResourceKey<$Level>;
        set experiencePoints(value: number);
        set experienceLevels(value: number);
        get tabListDisplayName(): $Component;
        get op(): boolean;
        set creativeMode(value: boolean);
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        getReleaseProcessor(processor: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static message<T>(chunk: $GenerationChunkHolder, task: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(chunk: $GenerationChunkHolder, task: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message(task: $Runnable_, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        close(): void;
        static release(task: $Runnable_, pos: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        getProcessor<T>(processor: $ProcessorHandle<T>, flush: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
        getDebugStatus(): string;
        hasWork(): boolean;
        constructor(queues: $List_<$ProcessorHandle<never>>, task: $Executor_, maxTasks: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $ServerLevelKJS, $ServerWorldExtended, $ServerLevelAccessor, $ServerLevelAccessor$1, $ServerLevelAccessor$2, $IServerLevel, $ServerLevelAccessor$3, $ServerLevelBlockEventsAccessor, $MultipartPartsHolder {
        save(progress: $ProgressListener | null, flush: boolean, skipSave: boolean): void;
        unload(chunk: $LevelChunk): void;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        getLevel(): $ServerLevel;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>): $List<T>;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ServerChunkCache;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        tryAddFreshEntityWithPassengers(entity: $Entity): boolean;
        lithium$setNavigationInactive(arg0: $Mob): void;
        handler$fje000$ad_astra$tickChunk(arg0: $LevelChunk, arg1: number, arg2: $CallbackInfo): void;
        alternate_current$getWireHandler(): $WireHandler;
        lithium$setNavigationActive(arg0: $Mob): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        cleanCapabilityListenerReferences(): void;
        /**
         * Returns `true` if the current rain strength is greater than 0.2
         */
        areEntityNavigationsConsistent(): boolean;
        getPersistentData(): $CompoundTag;
        /**
         * Resets the updateEntityTick field to 0
         */
        updateSleepingPlayerList(): void;
        /**
         * Returns `true` if the current rain strength is greater than 0.2
         */
        isFlat(): boolean;
        setDayTime(time: number): void;
        getStructureManager(): $StructureTemplateManager;
        setWeatherParameters(clearTime: number, weatherTime: number, isRaining: boolean, isThundering: boolean): void;
        addWorldGenChunkEntities(entities: $Stream<$Entity>): void;
        onStructureStartsAvailable(chunk: $ChunkAccess): void;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        isNaturalSpawningAllowed(chunkPos: $ChunkPos): boolean;
        isNaturalSpawningAllowed(pos: $BlockPos_): boolean;
        isPositionEntityTicking(pos: $BlockPos_): boolean;
        findNearestMapStructure(structureTag: $TagKey_<$Structure>, pos: $BlockPos_, radius: number, skipExistingChunks: boolean): $BlockPos;
        addLegacyChunkEntities(entities: $Stream<$Entity>): void;
        sendParticles<T extends $ParticleOptions>(player: $ServerPlayer, type: T, longDistance: boolean, posX: number, arg4: number, posY: number, arg6: number, posZ: number, arg8: number, particleCount: number, xOffset: number): boolean;
        sendParticles<T extends $ParticleOptions>(type: T, posX: number, arg2: number, posY: number, arg4: number, posZ: number, arg6: number, particleCount: number, xOffset: number): number;
        getScoreboard(): $ServerScoreboard;
        getBlockTicks(): $LevelTicks<$Block>;
        getFluidTicks(): $LevelTicks<$Fluid>;
        tickNonPassenger(entity: $Entity): void;
        setDefaultSpawnPos(pos: $BlockPos_, angle: number): void;
        removePlayerImmediately(player: $ServerPlayer, reason: $Entity$RemovalReason_): void;
        /**
         * Returns `true` if the current rain strength is greater than 0.2
         */
        canSleepThroughNights(): boolean;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetEmptyTime(): void;
        addDuringTeleport(entity: $Entity): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        addWithUUID(entity: $Entity): boolean;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getWatchdogStats(): string;
        startTickingChunk(chunk: $LevelChunk): void;
        getDragonFight(): $EndDragonFight;
        getRandomSequence(location: $ResourceLocation_): $RandomSource;
        getPathTypeCache(): $PathTypeCache;
        getRandomSequences(): $RandomSequences;
        areEntitiesLoaded(chunkPos: number): boolean;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetWeatherCycle(): void;
        tickCustomSpawners(spawnEnemies: boolean, spawnFriendlies: boolean): void;
        tickPrecipitation(blockPos: $BlockPos_): void;
        getDataStorage(): $DimensionDataStorage;
        structureManager(): $StructureManager;
        /**
         * @deprecated
         */
        setDragonFight(dragonFight: $EndDragonFight | null): void;
        /**
         * @deprecated
         * Returns the Entity with the given ID, or null if it doesn't exist in this World.
         */
        getEntityOrPart(id: number): $Entity;
        isCloseToVillage(pos: $BlockPos_, sections: number): boolean;
        onReputationEvent(type: $ReputationEventType, target: $Entity, host: $ReputationEventHandler_): void;
        sectionsToVillage(pos: $SectionPos): number;
        clearBlockEvents(boundingBox: $BoundingBox): void;
        getForcedChunks(): $LongSet;
        /**
         * Gets an unmodifiable iterator of all loaded entities in the world.
         */
        getAllEntities(): $Iterable<$Entity>;
        findClosestBiome3d(biomePredicate: $Predicate_<$Holder<$Biome>>, pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number): $Pair<$BlockPos, $Holder<$Biome>>;
        getLogicalHeight(): number;
        /**
         * Returns `true` if the current rain strength is greater than 0.2
         */
        isHandlingTick(): boolean;
        setChunkForced(chunkX: number, chunkZ: number, add: boolean): boolean;
        getPortalForcer(): $PortalForcer;
        saveDebugReport(path: $Path_): void;
        getPoiManager(): $PoiManager;
        getRandomPlayer(): $ServerPlayer;
        addNewPlayer(player: $ServerPlayer): void;
        addRespawnedPlayer(player: $ServerPlayer): void;
        isRaided(pos: $BlockPos_): boolean;
        getRaidAt(pos: $BlockPos_): $Raid;
        isVillage(pos: $SectionPos): boolean;
        isVillage(pos: $BlockPos_): boolean;
        getRaids(): $Raids;
        tickChunk(chunk: $LevelChunk, randomTickSpeed: number): void;
        getPlayers(predicate: $Predicate_<$ServerPlayer>, maxResults: number): $List<$ServerPlayer>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        getDragons(): $List<$EnderDragon>;
        handler$fje000$ad_astra$adastra$init(arg0: $MinecraftServer, arg1: $Executor_, arg2: $LevelStorageSource$LevelStorageAccess, arg3: $ServerLevelData, arg4: $ResourceKey_<any>, arg5: $LevelStem_, arg6: $ChunkProgressListener, arg7: boolean, arg8: number, arg9: $List_<any>, arg10: boolean, arg11: $RandomSequences, arg12: $CallbackInfo): void;
        handler$fje000$ad_astra$adastra$tick(arg0: $BooleanSupplier_, arg1: $CallbackInfo): void;
        handler$zbd000$astralsorcery$addMiningSizeDestroyProgress(arg0: number, arg1: $BlockPos_, arg2: number, arg3: $CallbackInfo): void;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        ensureCanWrite(pos: $BlockPos_): boolean;
        self(): $ServerLevel;
        addFreshEntityWithPassengers(entity: $Entity): void;
        createNestedFactory$getBlockEvents(): $ObjectLinkedOpenHashSet<$BlockEventData>;
        create$getEntityTickList(): $EntityTickList;
        getEntityManager(): $PersistentEntitySectionManager<$Entity>;
        restoringBlockSnapshots: boolean;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        tickingBlockEntities: boolean;
        static RAIN_DURATION: $IntProvider;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(server: $MinecraftServer, dispatcher: $Executor_, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, serverLevelData: $ServerLevelData, dimension: $ResourceKey_<$Level>, levelStem: $LevelStem_, progressListener: $ChunkProgressListener, isDebug: boolean, biomeZoomSeed: number, arg9: $List_<$CustomSpawner_>, customSpawners: boolean, tickTime: $RandomSequences | null);
        get seed(): number;
        get level(): $ServerLevel;
        get chunkSource(): $ServerChunkCache;
        get persistentData(): $CompoundTag;
        get flat(): boolean;
        get scoreboard(): $ServerScoreboard;
        get blockTicks(): $LevelTicks<$Block>;
        get fluidTicks(): $LevelTicks<$Fluid>;
        get watchdogStats(): string;
        get pathTypeCache(): $PathTypeCache;
        get randomSequences(): $RandomSequences;
        get dataStorage(): $DimensionDataStorage;
        get forcedChunks(): $LongSet;
        get allEntities(): $Iterable<$Entity>;
        get logicalHeight(): number;
        get handlingTick(): boolean;
        get portalForcer(): $PortalForcer;
        get poiManager(): $PoiManager;
        get randomPlayer(): $ServerPlayer;
        get raids(): $Raids;
        get dragons(): $List<$EnderDragon>;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        static SOURCE: number;
    }
    export class $ChunkMap$TrackedEntity {
        updatePlayers(playersList: $List_<$ServerPlayer>): void;
        broadcastRemoved(): void;
        broadcast(packet: $Packet<never>): void;
        broadcastAndSend(packet: $Packet<never>): void;
        removePlayer(player: $ServerPlayer): void;
        updatePlayer(player: $ServerPlayer): void;
        constructor(entity: $ChunkMap, range: $Entity, updateInterval: number, trackDelta: number, arg4: boolean);
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker {
        static SOURCE: number;
    }
}
