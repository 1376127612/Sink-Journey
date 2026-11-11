import { $BiomeGetter, $Dimensional } from "@package/com/supermartijn642/fusion/util";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $Lifecycle, $Dynamic, $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $MobCategory_, $EquipmentTable_, $MobCategory, $Entity, $EntityType, $LivingEntity, $EquipmentTable, $Mob } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource, $StringRepresentable$EnumCodec, $InclusiveRange_, $StringRepresentable, $InclusiveRange } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $WorldViewMixin } from "@package/net/fabricmc/fabric/mixin/rendering/data";
import { $InteractionResult, $Difficulty_, $DifficultyInstance, $TickRateManager, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockGetterExtension, $ILevelReaderExtension, $IOwnedSpawner, $ILevelExtension, $IBlockAndTintGetterExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $MultipartPartsHolder } from "@package/earth/terrarium/adastra/common/entities/multipart";
import { $StructureCheckResult, $StructureCheck, $StructureStart, $Structure, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $Item, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $BiomeManager$NoiseBiomeSource, $Biome, $BiomeManager, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $Abilities, $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelChunk, $StructureAccess, $BlockColumn, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ModelDataManager, $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityGetterKJS, $GameRulesKJS, $LevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $BaseSpawnerAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $FabricBlockView } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $ArrayList, $Map, $List, $Collection_, $List_, $Collection, $UUID, $Optional } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ForcedChunkManager$TicketTracker } from "@package/net/neoforged/neoforge/common/world/chunk";
import { $LevelExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $BiConsumer_, $Supplier, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $WorldGenRegion, $ChunkMap, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $Direction, $HolderLookup, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ExplosionAccessor } from "@package/com/denfop/mixin/access";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Iterable, $Thread, $Iterable_, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $WorldOptions, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Fireworks_, $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $BlockEntityGetter } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $LithiumData, $ChunkRandomSource, $ChunkView, $LithiumData$Data } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $Stream } from "@package/java/util/stream";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $BlockViewMixin } from "@package/net/fabricmc/fabric/mixin/blockview";
import { $LevelAccessor as $LevelAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ClipContextAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/raycast";
import { $DamageSource, $DamageSources, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as levelgen from "@package/net/minecraft/world/level/levelgen";
export * as lighting from "@package/net/minecraft/world/level/lighting";
export * as block from "@package/net/minecraft/world/level/block";
export * as material from "@package/net/minecraft/world/level/material";
export * as portal from "@package/net/minecraft/world/level/portal";
export * as chunk from "@package/net/minecraft/world/level/chunk";
export * as biome from "@package/net/minecraft/world/level/biome";
export * as border from "@package/net/minecraft/world/level/border";
export * as entity from "@package/net/minecraft/world/level/entity";
export * as storage from "@package/net/minecraft/world/level/storage";
export * as gameevent from "@package/net/minecraft/world/level/gameevent";
export * as saveddata from "@package/net/minecraft/world/level/saveddata";
export * as pathfinder from "@package/net/minecraft/world/level/pathfinder";
export * as timers from "@package/net/minecraft/world/level/timers";
export * as dimension from "@package/net/minecraft/world/level/dimension";
export * as redstone from "@package/net/minecraft/world/level/redstone";
export * as validation from "@package/net/minecraft/world/level/validation";

declare module "@package/net/minecraft/world/level" {
    export class $EntityGetter {
    }
    export interface $EntityGetter extends $EntityGetterKJS {
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, area: $AABB_, predicate: $Predicate_<$Entity>): $List<$Entity>;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity> | null): $Player;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
    }
    export class $GameRules$IntegerValue extends $GameRules$Value<$GameRules$IntegerValue> {
        tryDeserialize(name: string): boolean;
        get(): number;
        set(value: number, server: $MinecraftServer | null): void;
        static create(defaultValue: number, changeListener: $BiConsumer_<$MinecraftServer, $GameRules$IntegerValue>): $GameRules$Type<$GameRules$IntegerValue>;
        static create(defaultValue: number): $GameRules$Type<$GameRules$IntegerValue>;
        setFrom(value: $GameRules$IntegerValue, server: $MinecraftServer | null): void;
        constructor(type: $GameRules$Type<$GameRules$IntegerValue>, value: number);
    }
    export class $LightLayer extends $Enum<$LightLayer> {
        static values(): $LightLayer[];
        static valueOf(arg0: string): $LightLayer;
        static SKY: $LightLayer;
        static BLOCK: $LightLayer;
    }
    /**
     * Values that may be interpreted as {@link $LightLayer}.
     */
    export type $LightLayer_ = "sky" | "block";
    export class $GameType extends $Enum<$GameType> implements $StringRepresentable {
        /**
         * Returns the name of this game type
         */
        getName(): string;
        static values(): $GameType[];
        /**
         * Gets the game type registered with the specified name. If no matches were found, survival will be returned.
         */
        static valueOf(gamemodeName: string): $GameType;
        /**
         * Returns the ID of this game type
         */
        getId(): number;
        /**
         * Gets the game type registered with the specified name. If no matches were found, survival will be returned.
         */
        static byName(gamemodeName: string): $GameType;
        static byName(targetName: string, fallback: $GameType_ | null): $GameType;
        /**
         * Returns the name of this game type
         */
        getSerializedName(): string;
        /**
         * Returns `true` if this is the ADVENTURE game type
         */
        isBlockPlacingRestricted(): boolean;
        /**
         * Returns `true` if this is the ADVENTURE game type
         */
        isCreative(): boolean;
        /**
         * Gets the game type by its ID. Will be survival if none was found.
         */
        static byId(id: number): $GameType;
        static getNullableId(gameType: $GameType_ | null): number;
        getLongDisplayName(): $Component;
        /**
         * Gets the game type by its ID. Will be survival if none was found.
         */
        static byNullableId(id: number): $GameType;
        /**
         * Configures the player abilities based on the game type
         */
        updatePlayerAbilities(abilities: $Abilities): void;
        getShortDisplayName(): $Component;
        /**
         * Returns `true` if this is the ADVENTURE game type
         */
        isSurvival(): boolean;
        /**
         * Returns the name of this game type
         */
        getRemappedEnumConstantName(): string;
        static SURVIVAL: $GameType;
        static SPECTATOR: $GameType;
        static CODEC: $StringRepresentable$EnumCodec<$GameType>;
        static CREATIVE: $GameType;
        static ADVENTURE: $GameType;
        static DEFAULT_MODE: $GameType;
        get id(): number;
        get serializedName(): string;
        get blockPlacingRestricted(): boolean;
        get creative(): boolean;
        get longDisplayName(): $Component;
        get shortDisplayName(): $Component;
        get survival(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameType}.
     */
    export type $GameType_ = "survival" | "creative" | "adventure" | "spectator";
    export class $SignalGetter {
        static DIRECTIONS: $Direction[];
    }
    export interface $SignalGetter extends $BlockGetter {
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
        /**
         * Returns the highest redstone signal the given position receives from neighboring blocks.
         */
        getDirectSignalTo(pos: $BlockPos_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns whether the given position receives any redstone signal from neighboring blocks.
         */
        hasNeighborSignal(pos: $BlockPos_): boolean;
        /**
         * Returns the highest redstone signal the given position receives from neighboring blocks.
         */
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
    }
    export class $LevelAccessor {
    }
    export interface $LevelAccessor extends $CommonLevelAccessor, $LevelTimeAccess {
        getRandom(): $RandomSource;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        dayTime(): number;
        getDifficulty(): $Difficulty;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number): void;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        getServer(): $MinecraftServer;
        getBlockTicks(): $LevelTickAccess<$Block>;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        nextSubTickCount(): number;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        get random(): $RandomSource;
        get levelData(): $LevelData;
        get chunkSource(): $ChunkSource;
        get difficulty(): $Difficulty;
        get server(): $MinecraftServer;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
    }
    export class $NaturalSpawner$SpawnState {
        getSpawnableChunkCount(): number;
        getMobCategoryCounts(): $Object2IntMap<$MobCategory>;
        get spawnableChunkCount(): number;
        get mobCategoryCounts(): $Object2IntMap<$MobCategory>;
    }
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor extends $LevelAccessor {
        getLevel(): $ServerLevel;
        addFreshEntityWithPassengers(entity: $Entity): void;
        get level(): $ServerLevel;
    }
    export class $WorldDataConfiguration extends $Record {
        expandFeatures(newFeatures: $FeatureFlagSet): $WorldDataConfiguration;
        enabledFeatures(): $FeatureFlagSet;
        dataPacks(): $DataPackConfig;
        static CODEC: $Codec<$WorldDataConfiguration>;
        static ENABLED_FEATURES_ID: string;
        static DEFAULT: $WorldDataConfiguration;
        constructor(arg0: $DataPackConfig, arg1: $FeatureFlagSet);
    }
    /**
     * Values that may be interpreted as {@link $WorldDataConfiguration}.
     */
    export type $WorldDataConfiguration_ = { enabledFeatures?: $FeatureFlagSet, dataPacks?: $DataPackConfig,  } | [enabledFeatures?: $FeatureFlagSet, dataPacks?: $DataPackConfig, ];
    export class $StructureManager {
        forWorldGenRegion(region: $WorldGenRegion): $StructureManager;
        hasAnyStructureAt(pos: $BlockPos_): boolean;
        addReference(structureStart: $StructureStart): void;
        registryAccess(): $RegistryAccess;
        getAllStructuresAt(pos: $BlockPos_): $Map<$Structure, $LongSet>;
        startsForStructure(chunkPos: $ChunkPos, structurePredicate: $Predicate_<$Structure>): $List<$StructureStart>;
        startsForStructure(sectionPos: $SectionPos, structure: $Structure_): $List<$StructureStart>;
        setStartForStructure(sectionPos: $SectionPos, structure: $Structure_, structureStart: $StructureStart, structureAccess: $StructureAccess): void;
        addReferenceForStructure(sectionPos: $SectionPos, structure: $Structure_, reference: number, arg3: $StructureAccess): void;
        getStartForStructure(sectionPos: $SectionPos, structure: $Structure_, structureAccess: $StructureAccess): $StructureStart;
        structureHasPieceAt(pos: $BlockPos_, structureStart: $StructureStart): boolean;
        fillStartsForStructure(structure: $Structure_, structureRefs: $LongSet, startConsumer: $Consumer_<$StructureStart>): void;
        checkStructurePresence(chunkPos: $ChunkPos, structure: $Structure_, placement: $StructurePlacement, skipKnownStructures: boolean): $StructureCheckResult;
        shouldGenerateStructures(): boolean;
        getStructureWithPieceAt(pos: $BlockPos_, structureTag: $TagKey_<$Structure>): $StructureStart;
        getStructureWithPieceAt(pos: $BlockPos_, structures: $HolderSet_<$Structure>): $StructureStart;
        getStructureWithPieceAt(pos: $BlockPos_, predicate: $Predicate_<$Holder<$Structure>>): $StructureStart;
        getStructureWithPieceAt(pos: $BlockPos_, structure: $Structure_): $StructureStart;
        getStructureAt(pos: $BlockPos_, structure: $Structure_): $StructureStart;
        constructor(level: $LevelAccessor, worldOptions: $WorldOptions, structureCheck: $StructureCheck);
    }
    export class $PotentialCalculator$PointCharge {
    }
    export class $GrassColor {
        static get(temperature: number, arg1: number): number;
        static init(grassBuffer: number[]): void;
        static getDefaultColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
    }
    export class $GameRules implements $GameRulesKJS {
        getBoolean(key: $GameRules$Key<$GameRules$BooleanValue>): boolean;
        getInt(key: $GameRules$Key<$GameRules$IntegerValue>): number;
        static register<T extends $GameRules$Value<T>>(name: string, category: $GameRules$Category_, type: $GameRules$Type<T>): $GameRules$Key<T>;
        copy(): $GameRules;
        /**
         * Return the defined game rules as NBT.
         */
        createTag(): $CompoundTag;
        getRule<T extends $GameRules$Value<T>>(key: $GameRules$Key<T>): T;
        static visitGameRuleTypes(visitor: $GameRules$GameRuleTypeVisitor): void;
        set(rule: string, value: string): void;
        get(rule: string): $GameRules$Value<any>;
        assignFrom(rules: $GameRules, server: $MinecraftServer | null): void;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
        static RULE_MAX_COMMAND_CHAIN_LENGTH: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DROWNING_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LOGADMINCOMMANDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_REDUCEDDEBUGINFO: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_WEATHER_CYCLE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FORGIVE_DEAD_PLAYERS: $GameRules$Key<$GameRules$BooleanValue>;
        static DEFAULT_RANDOM_TICK_SPEED: number;
        static RULE_TNT_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_NATURAL_REGENERATION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_CHUNK_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ANNOUNCE_ADVANCEMENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMANDBLOCKOUTPUT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBSPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PROJECTILESCANBREAKBLOCKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DAYLIGHT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_RAIDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FIRE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_SLEEPING_PERCENTAGE: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_WATER_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOBLOCKDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_BLOCK_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SPECTATORSGENERATECHUNKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_VINES_SPREAD: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_IMMEDIATE_RESPAWN: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOENTITYDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_KEEPINVENTORY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_RANDOMTICKING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DO_TRADER_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBLOOT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_GLOBAL_SOUND_EVENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_PATROL_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_DEFAULT_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_FALL_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOINSOMNIA: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOB_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LIMITED_CRAFTING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_WARDEN_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOFIRETICK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOBGRIEFING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_CREATIVE_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SHOWDEATHMESSAGES: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_ENTITY_CRAMMING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_UNIVERSAL_ANGER: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FREEZE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SNOW_ACCUMULATION_HEIGHT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_LAVA_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SENDCOMMANDFEEDBACK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_COMMAND_FORK_COUNT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ENDER_PEARLS_VANISH_ON_DEATH: $GameRules$Key<$GameRules$BooleanValue>;
        constructor(tag: $DynamicLike<never>);
        constructor();
    }
    export class $ChunkPos {
        static hash(x: number, z: number): number;
        static rangeClosed(center: $ChunkPos, radius: number): $Stream<$ChunkPos>;
        static rangeClosed(start: $ChunkPos, end: $ChunkPos): $Stream<$ChunkPos>;
        toLong(): number;
        /**
         * Converts the chunk coordinate pair to a long
         */
        static asLong(x: number, z: number): number;
        static asLong(pos: $BlockPos_): number;
        static getX(packedPos: number): number;
        static getZ(packedPos: number): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMinBlockZ(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMinBlockX(): number;
        getBlockZ(x: number): number;
        getBlockX(x: number): number;
        distanceSquared(packedPos: number): number;
        distanceSquared(chunkPos: $ChunkPos): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMaxBlockX(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMaxBlockZ(): number;
        getChessboardDistance(chunkPos: $ChunkPos): number;
        getChessboardDistance(x: number, z: number): number;
        getMiddleBlockPosition(y: number): $BlockPos;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionZ(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionX(): number;
        getBlockAt(xSection: number, y: number, zSection: number): $BlockPos;
        static maxFromRegion(chunkX: number, chunkZ: number): $ChunkPos;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionLocalX(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionLocalZ(): number;
        static minFromRegion(chunkX: number, chunkZ: number): $ChunkPos;
        getWorldPosition(): $BlockPos;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMiddleBlockX(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMiddleBlockZ(): number;
        static ZERO: $ChunkPos;
        static REGION_MAX_INDEX: number;
        static INVALID_CHUNK_POS: number;
        x: number;
        static REGION_SIZE: number;
        z: number;
        constructor(packedPos: number);
        constructor(pos: $BlockPos_);
        constructor(x: number, y: number);
        get minBlockZ(): number;
        get minBlockX(): number;
        get maxBlockX(): number;
        get maxBlockZ(): number;
        get regionZ(): number;
        get regionX(): number;
        get regionLocalX(): number;
        get regionLocalZ(): number;
        get worldPosition(): $BlockPos;
        get middleBlockX(): number;
        get middleBlockZ(): number;
    }
    export class $ColorResolver {
    }
    export interface $ColorResolver {
        getColor(biome: $Biome_, x: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ColorResolver}.
     */
    export type $ColorResolver_ = ((arg0: $Biome, arg1: number, arg2: number) => number);
    export class $PotentialCalculator {
        addCharge(pos: $BlockPos_, charge: number): void;
        getPotentialEnergyChange(pos: $BlockPos_, charge: number): number;
        constructor();
    }
    export class $BlockGetter {
        static traverseBlocks<T, C>(from: $Vec3_, to: $Vec3_, context: C, tester: $BiFunction_<C, $BlockPos, T>, onFail: $Function_<C, T>): T;
    }
    export interface $BlockGetter extends $LevelHeightAccessor, $IBlockGetterExtension, $FabricBlockView, $BlockViewMixin {
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getLightEmission(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        get maxLightLevel(): number;
    }
    export class $NaturalSpawner$SpawnPredicate {
    }
    export interface $NaturalSpawner$SpawnPredicate {
        test(entityType: $EntityType_<never>, pos: $BlockPos_, chunk: $ChunkAccess): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$SpawnPredicate}.
     */
    export type $NaturalSpawner$SpawnPredicate_ = ((arg0: $EntityType<never>, arg1: $BlockPos, arg2: $ChunkAccess) => boolean);
    export class $GameRules$Value<T extends $GameRules$Value<T>> {
        getCommandResult(): number;
        setFromArgument(context: $CommandContext<$CommandSourceStack>, paramName: string): void;
        deserialize(value: string): void;
        serialize(): string;
        setFrom(value: T, server: $MinecraftServer | null): void;
        onChanged(server: $MinecraftServer | null): void;
        constructor(type: $GameRules$Type<T>);
        get commandResult(): number;
    }
    export class $LevelSettings {
        withGameType(gameType: $GameType_): $LevelSettings;
        withDifficulty(difficulty: $Difficulty_): $LevelSettings;
        static parse(levelData: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_): $LevelSettings;
        copy(): $LevelSettings;
        getLifecycle(): $Lifecycle;
        levelName(): string;
        gameType(): $GameType;
        withLifecycle(arg0: $Lifecycle): $LevelSettings;
        hardcore(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        allowCommands(): boolean;
        difficulty(): $Difficulty;
        gameRules(): $GameRules;
        withDataConfiguration(dataConfiguration: $WorldDataConfiguration_): $LevelSettings;
        constructor(levelName: string, gameType: $GameType_, hardcore: boolean, difficulty: $Difficulty_, allowCommands: boolean, gameRules: $GameRules, dataConfiguration: $WorldDataConfiguration_);
        constructor(arg0: string, arg1: $GameType_, arg2: boolean, arg3: $Difficulty_, arg4: boolean, arg5: $GameRules, arg6: $WorldDataConfiguration_, arg7: $Lifecycle);
        get lifecycle(): $Lifecycle;
        get dataConfiguration(): $WorldDataConfiguration;
    }
    export class $Explosion$BlockInteraction extends $Enum<$Explosion$BlockInteraction> {
        static values(): $Explosion$BlockInteraction[];
        static valueOf(arg0: string): $Explosion$BlockInteraction;
        static TRIGGER_BLOCK: $Explosion$BlockInteraction;
        static DESTROY_WITH_DECAY: $Explosion$BlockInteraction;
        static DESTROY: $Explosion$BlockInteraction;
        static KEEP: $Explosion$BlockInteraction;
    }
    /**
     * Values that may be interpreted as {@link $Explosion$BlockInteraction}.
     */
    export type $Explosion$BlockInteraction_ = "keep" | "destroy" | "destroy_with_decay" | "trigger_block";
    export class $GameRules$Key<T extends $GameRules$Value<T>> {
        getId(): string;
        getCategory(): $GameRules$Category;
        getDescriptionId(): string;
        constructor(id: string, category: $GameRules$Category_);
        get id(): string;
        get category(): $GameRules$Category;
        get descriptionId(): string;
    }
    export interface $Level extends RegistryMarked<RegistryTypes.DimensionTag, RegistryTypes.Dimension> {}
    export class $NaturalSpawner$AfterSpawnCallback {
    }
    export interface $NaturalSpawner$AfterSpawnCallback {
        run(mob: $Mob, chunk: $ChunkAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$AfterSpawnCallback}.
     */
    export type $NaturalSpawner$AfterSpawnCallback_ = ((arg0: $Mob, arg1: $ChunkAccess) => void);
    export class $LevelReader {
    }
    export interface $LevelReader extends $BlockAndTintGetter, $CollisionGetter, $SignalGetter, $BiomeManager$NoiseBiomeSource, $ILevelReaderExtension, $WorldViewMixin, $RenderAttachedBlockView, $ChunkView, $BiomeGetter {
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        hasChunk(chunkX: number, chunkZ: number): boolean;
        isWaterAt(pos: $BlockPos_): boolean;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        dimensionType(): $DimensionType;
        getBiomeManager(): $BiomeManager;
        isClientSide(): boolean;
        getMinBuildHeight(): number;
        /**
         * Checks if any of the blocks within the aabb are liquids.
         */
        containsAnyLiquid(bb: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        getHeight(): number;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        getSkyDarken(): number;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
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
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        lithium$getLoadedChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        get biomeManager(): $BiomeManager;
        get clientSide(): boolean;
        get minBuildHeight(): number;
        get seaLevel(): number;
        get skyDarken(): number;
    }
    export class $LevelWriter {
    }
    export interface $LevelWriter {
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
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
        addFreshEntity(entity: $Entity): boolean;
        /**
         * Sets a block to air, but also plays the sound and particles and can spawn drops
         */
        destroyBlock(pos: $BlockPos_, dropBlock: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        /**
         * Sets a block to air, but also plays the sound and particles and can spawn drops
         */
        removeBlock(pos: $BlockPos_, dropBlock: boolean): boolean;
    }
    export class $NaturalSpawner$ChunkGetter {
    }
    export interface $NaturalSpawner$ChunkGetter {
        query(chunkPos: number, arg1: $Consumer_<$LevelChunk>): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$ChunkGetter}.
     */
    export type $NaturalSpawner$ChunkGetter_ = ((arg0: number, arg1: $Consumer<$LevelChunk>) => void);
    export class $CommonLevelAccessor {
    }
    export interface $CommonLevelAccessor extends $EntityGetter, $LevelReader, $LevelSimulatedRW {
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        getEntityCollisions(entity: $Entity | null, collisionBox: $AABB_): $List<$VoxelShape>;
    }
    export class $LevelSimulatedRW {
    }
    export interface $LevelSimulatedRW extends $LevelSimulatedReader, $LevelWriter {
    }
    export class $GameRules$Type<T extends $GameRules$Value<T>> {
        callVisitor(visitor: $GameRules$GameRuleTypeVisitor, key: $GameRules$Key<T>): void;
        createArgument(name: string): $RequiredArgumentBuilder<$CommandSourceStack, never>;
        createRule(): T;
    }
    export class $EmptyBlockGetter extends $Enum<$EmptyBlockGetter> implements $BlockGetter {
        static values(): $EmptyBlockGetter[];
        static valueOf(arg0: string): $EmptyBlockGetter;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getMinBuildHeight(): number;
        getHeight(): number;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getLightEmission(pos: $BlockPos_): number;
        isBlockInLine(failContext: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
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
        static INSTANCE: $EmptyBlockGetter;
        get minBuildHeight(): number;
        get height(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    /**
     * Values that may be interpreted as {@link $EmptyBlockGetter}.
     */
    export type $EmptyBlockGetter_ = "instance";
    export class $ExplosionDamageCalculator {
        getBlockExplosionResistance(explosion: $Explosion, reader: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $FluidState): (number) | undefined;
        shouldBlockExplode(explosion: $Explosion, reader: $BlockGetter, pos: $BlockPos_, state: $BlockState_, power: number): boolean;
        shouldDamageEntity(explosion: $Explosion, entity: $Entity): boolean;
        getKnockbackMultiplier(entity: $Entity): number;
        getEntityDamageAmount(explosion: $Explosion, entity: $Entity): number;
        constructor();
    }
    export class $GameRules$Category extends $Enum<$GameRules$Category> {
        static values(): $GameRules$Category[];
        static valueOf(arg0: string): $GameRules$Category;
        getDescriptionId(): string;
        static PLAYER: $GameRules$Category;
        static DROPS: $GameRules$Category;
        static MOBS: $GameRules$Category;
        static CHAT: $GameRules$Category;
        static UPDATES: $GameRules$Category;
        static MISC: $GameRules$Category;
        static SPAWNING: $GameRules$Category;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$Category}.
     */
    export type $GameRules$Category_ = "player" | "mobs" | "spawning" | "drops" | "updates" | "chat" | "misc";
    export class $WorldGenLevel {
    }
    export interface $WorldGenLevel extends $ServerLevelAccessor {
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        ensureCanWrite(pos: $BlockPos_): boolean;
        get seed(): number;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    /**
     * @param paramA Different for each blockID
     */
    export class $BlockEventData extends $Record {
        pos(): $BlockPos;
        block(): $Block;
        paramA(): number;
        paramB(): number;
        constructor(pos: $BlockPos_, block: $Block_, paramA: number, paramB: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockEventData}.
     */
    export type $BlockEventData_ = { paramB?: number, paramA?: number, block?: $Block_, pos?: $BlockPos_,  } | [paramB?: number, paramA?: number, block?: $Block_, pos?: $BlockPos_, ];
    export class $FoliageColor {
        static get(temperature: number, arg1: number): number;
        static init(foliageBuffer: number[]): void;
        static getDefaultColor(): number;
        static getEvergreenColor(): number;
        static getMangroveColor(): number;
        static getBirchColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
        static get evergreenColor(): number;
        static get mangroveColor(): number;
        static get birchColor(): number;
    }
    export class $Level extends $AttachmentHolder implements $LevelAccessor, $AutoCloseable, $ILevelExtension, $LevelKJS, $ChunkRandomSource, $LevelAccessor$1, $BlockEntityGetter, $LithiumData, $LevelHeightAccessor, $Dimensional, $Trackable, $LevelExtension, $MultipartPartsHolder {
        /**
         * If on MP, sends a quitting packet.
         */
        close(): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isDebug(): boolean;
        isLoaded(pos: $BlockPos_): boolean;
        getRandom(): $RandomSource;
        /**
         * Sends a `ClientboundEntityEventPacket` to all tracked players of that entity.
         */
        broadcastEntityEvent(entity: $Entity, state: number): void;
        getDimensionKey(): $ResourceKey<$Level>;
        /**
         * Returns the Entity with the given ID, or null if it doesn't exist in this Level.
         */
        getEntity(id: number): $Entity;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>, output: $List_<T>): void;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity>): $List<$Entity>;
        /**
         * If on MP, sends a quitting packet.
         */
        disconnect(): void;
        getProfiler(): $ProfilerFiller;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will notify neighboring blocks through neighborChanged updates.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        getFluidState(pos: $BlockPos_): $FluidState;
        getData(): $AttachedData<any>;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, pos: $Vec3_, radius: number, fire: boolean, explosionInteraction: $Level$ExplosionInteraction_): $Explosion;
        explode(source: $Entity | null, x: number, arg2: number, y: number, arg4: number, z: boolean, arg6: $Level$ExplosionInteraction_): $Explosion;
        explode(source: $Entity | null, x: number, arg2: number, y: number, arg4: number, z: $Level$ExplosionInteraction_): $Explosion;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg4: number, y: number, arg6: number, z: boolean, arg8: $Level$ExplosionInteraction_, radius: boolean, fire: $ParticleOptions_, explosionInteraction: $ParticleOptions_, spawnParticles: $Holder_<$SoundEvent>): $Explosion;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg4: number, y: number, arg6: number, z: boolean, arg8: $Level$ExplosionInteraction_, radius: $ParticleOptions_, fire: $ParticleOptions_, explosionInteraction: $Holder_<$SoundEvent>): $Explosion;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg4: number, y: number, arg6: number, z: boolean, arg8: $Level$ExplosionInteraction_): $Explosion;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        getWorldBorder(): $WorldBorder;
        getBlockState(pos: $BlockPos_): $BlockState;
        /**
         * Adds some basic stats of the world to the given crash report.
         */
        fillReportDetails(report: $CrashReport): $CrashReportCategory;
        tickRateManager(): $TickRateManager;
        registryAccess(): $RegistryAccess;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getTime(): number;
        broadcastDamageEvent(entity: $Entity, damageSource: $DamageSource_): void;
        static isInSpawnableBounds(pos: $BlockPos_): boolean;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isNight(): boolean;
        lithium$getLoadedExistingBlockEntity(pos: $BlockPos_): $BlockEntity;
        getMapData(mapId: $MapId_): $MapItemSavedData;
        setMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isRaining(): boolean;
        blockEvent(pos: $BlockPos_, block: $Block_, eventID: number, eventParam: number): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        noSave(): boolean;
        dimensionType(): $DimensionType;
        getBiomeManager(): $BiomeManager;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isClientSide(): boolean;
        shouldTickDeath(entity: $Entity): boolean;
        damageSources(): $DamageSources;
        getScoreboard(): $Scoreboard;
        playSeededSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $Holder_<$SoundEvent>, z: $SoundSource_, arg6: number, sound: number, category: number): void;
        playSeededSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $SoundEvent_, z: $SoundSource_, arg6: number, sound: number, category: number): void;
        playSeededSound(player: $Player | null, entity: $Entity, sound: $Holder_<$SoundEvent>, category: $SoundSource_, volume: number, pitch: number, seed: number): void;
        addParticle(particleData: $ParticleOptions_, ignoreRange: boolean, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): void;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        playLocalSound(pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number, distanceDelay: boolean): void;
        playLocalSound(entity: $Entity, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        playLocalSound(x: number, arg1: number, y: number, arg3: $SoundEvent_, z: $SoundSource_, arg5: number, sound: number, category: boolean): void;
        /**
         * Gets the GameRules instance.
         */
        getGameRules(): $GameRules;
        noCollision(entity: $Entity, boundingBox: $AABB_): boolean;
        isRainingAt(pos: $BlockPos_): boolean;
        playSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $Holder_<$SoundEvent>, z: $SoundSource_, arg6: number, sound: number): void;
        playSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $SoundEvent_, z: $SoundSource_): void;
        playSound(player: $Player | null, entity: $Entity, event: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        playSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $SoundEvent_, z: $SoundSource_, arg6: number, sound: number): void;
        playSound(entity: $Entity | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        getServer(): $MinecraftServer;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        getMcEntities(): $Iterable<any>;
        getLightEngine(): $LevelLightEngine;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        getSkyDarken(): number;
        nextSubTickCount(): number;
        onBlockStateChange(pos: $BlockPos_, blockState: $BlockState_, newState: $BlockState_): void;
        /**
         * Convenience method to update the block on both the client and server
         */
        setBlockAndUpdate(pos: $BlockPos_, state: $BlockState_): boolean;
        updateNeighborsAt(pos: $BlockPos_, block: $Block_): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        neighborChanged(pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_): void;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        isInWorldBounds(pos: $BlockPos_): boolean;
        markAndNotifyBlock(arg0: $BlockPos_, arg1: $LevelChunk | null, arg2: $BlockState_, arg3: $BlockState_, arg4: number, arg5: number): void;
        setBlocksDirty(pos: $BlockPos_, blockState: $BlockState_, newState: $BlockState_): void;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        /**
         * Flags are as in setBlockState
         */
        sendBlockUpdated(pos: $BlockPos_, oldState: $BlockState_, newState: $BlockState_, flags: number): void;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        getDayTimePerTick(): number;
        /**
         * Sets the strength of the rain.
         */
        setRainLevel(strength: number): void;
        shouldTickBlocksAt(pos: $BlockPos_): boolean;
        shouldTickBlocksAt(chunkPos: number): boolean;
        /**
         * Sets the strength of the rain.
         */
        setThunderLevel(strength: number): void;
        /**
         * Sets the strength of the rain.
         */
        setDayTimePerTick(strength: number): void;
        sendPacketToServer(packet: $Packet<never>): void;
        blockEntityChanged(pos: $BlockPos_): void;
        potionBrewing(): $PotionBrewing;
        removeBlockEntity(pos: $BlockPos_): void;
        setBlockEntity(blockEntity: $BlockEntity): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isThundering(): boolean;
        getFreeMapId(): $MapId;
        /**
         * Returns rain strength.
         */
        getRainLevel(delta: number): number;
        /**
         * Returns rain strength.
         */
        getSunAngle(delta: number): number;
        /**
         * Returns rain strength.
         */
        getThunderLevel(delta: number): number;
        globalLevelEvent(breakerId: number, pos: $BlockPos_, progress: number): void;
        createFireworks(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number, xSpeed: $List_<$FireworkExplosion_>): void;
        guardEntityTick<T extends $Entity>(consumerEntity: $Consumer_<T>, entity: T): void;
        /**
         * First boolean for hostile mobs and second for peaceful mobs
         */
        setSpawnSettings(hostile: boolean, peaceful: boolean): void;
        setSkyFlashTime(timeFlash: number): void;
        getRecipeManager(): $RecipeManager;
        getBlockRandomPos(x: number, y: number, z: number, yMask: number): $BlockPos;
        getMaxEntityRadius(): number;
        /**
         * Sets the strength of the rain.
         */
        setDayTimeFraction(strength: number): void;
        lithium$getData(): $LithiumData$Data;
        fusionGetDimension(): $ResourceLocation;
        adastra$getParts(): $Int2ObjectMap<any>;
        getSharedSpawnPos(): $BlockPos;
        findFreePosition(entity: $Entity, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): $Optional<any>;
        mayInteract(player: $Player, pos: $BlockPos_): boolean;
        getDayTimeFraction(): number;
        atl$getBaseClass(): $Class<any>;
        getChunkAt(pos: $BlockPos_): $LevelChunk;
        getChunk(chunkX: number, chunkZ: number): $LevelChunk;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getDayTime(): number;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isDay(): boolean;
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, blockType: $Block_, skipSide: $Direction_): void;
        flywheel$getAllLoadedEntities(): $Iterable<any>;
        lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos): void;
        updateNeighbourForOutputSignal(pos: $BlockPos_, block: $Block_): void;
        loadedAndEntityCanStandOnFace(pos: $BlockPos_, entity: $Entity, direction: $Direction_): boolean;
        getSharedSpawnAngle(): number;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        addAlwaysVisibleParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        addAlwaysVisibleParticle(particleData: $ParticleOptions_, ignoreRange: boolean, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): void;
        addBlockEntityTicker(ticker: $TickingBlockEntity): void;
        addFreshBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        dimensionTypeRegistration(): $Holder<$DimensionType>;
        getEntityByUUID(id: $UUID_): $Entity;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        /**
         * Returns the Entity with the given ID, or null if it doesn't exist in this Level.
         */
        getEntityByNetworkID(id: number): $Entity;
        addDestroyBlockEffect(pos: $BlockPos_, state: $BlockState_): void;
        increaseMaxEntityRadius(arg0: number): number;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        gatherChunkSourceStats(): string;
        getProfilerSupplier(): $Supplier<$ProfilerFiller>;
        /**
         * If on MP, sends a quitting packet.
         */
        updateSkyBrightness(): void;
        destroyBlockProgress(breakerId: number, pos: $BlockPos_, progress: number): void;
        loadedAndEntityCanStandOn(pos: $BlockPos_, entity: $Entity): boolean;
        hasChunk(x: number, z: number): boolean;
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
        levelEvent(breakerId: number, pos: $BlockPos_, progress: number): void;
        getDescription(): $Component;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: C): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_): T;
        getPartEntities(): $Collection<$PartEntity<never>>;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getDescriptionKey(): string;
        invalidateCapabilities(arg0: $ChunkPos): void;
        invalidateCapabilities(pos: $BlockPos_): void;
        getModelDataManager(): $ModelDataManager;
        setStatusMessage(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        self(): $Level;
        tell(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getSide(): $ScriptType;
        getDimension(): $ResourceLocation;
        createEntity(type: $EntityType_<never>): $Entity;
        setTime(time: number): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isOverworld(): boolean;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        wrap(): $WeakReference<$Trackable>;
        /**
         * If on MP, sends a quitting packet.
         */
        startTracking(): void;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        /**
         * Returns rain strength.
         */
        getTimeOfDay(delta: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
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
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity> | null): $Player;
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
        hasChunkAt(x: number, z: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
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
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        lithium$getLoadedChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        getDisplayName(): $Component;
        getEntities(): $EntityArrayList;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
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
        addFreshEntity(entity: $Entity): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
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
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        hasBiomes(): boolean;
        getBiomeFabric(pos: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getThread(): $Thread;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        tickingBlockEntities: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        get debug(): boolean;
        get dimensionKey(): $ResourceKey<$Level>;
        get profiler(): $ProfilerFiller;
        get data(): $AttachedData<any>;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get night(): boolean;
        get raining(): boolean;
        get biomeManager(): $BiomeManager;
        get clientSide(): boolean;
        get scoreboard(): $Scoreboard;
        get gameRules(): $GameRules;
        get server(): $MinecraftServer;
        get mcEntities(): $Iterable<any>;
        get lightEngine(): $LevelLightEngine;
        get seaLevel(): number;
        get skyDarken(): number;
        get thundering(): boolean;
        get freeMapId(): $MapId;
        set skyFlashTime(value: number);
        get recipeManager(): $RecipeManager;
        get maxEntityRadius(): number;
        get sharedSpawnPos(): $BlockPos;
        get day(): boolean;
        get sharedSpawnAngle(): number;
        get profilerSupplier(): $Supplier<$ProfilerFiller>;
        get difficulty(): $Difficulty;
        get description(): $Component;
        get partEntities(): $Collection<$PartEntity<never>>;
        get descriptionKey(): string;
        get modelDataManager(): $ModelDataManager;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get side(): $ScriptType;
        get dimension(): $ResourceLocation;
        get overworld(): boolean;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get moonBrightness(): number;
        get moonPhase(): number;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get displayName(): $Component;
        get maxLightLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $Level}.
     */
    export type $Level_ = RegistryTypes.Dimension;
    export class $SpawnData extends $Record {
        entityToSpawn(): $CompoundTag;
        equipment(): ($EquipmentTable) | undefined;
        getCustomSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        getEntityToSpawn(): $CompoundTag;
        getEquipment(): ($EquipmentTable) | undefined;
        customSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        static CODEC: $Codec<$SpawnData>;
        static ENTITY_TAG: string;
        static LIST_CODEC: $Codec<$SimpleWeightedRandomList<$SpawnData>>;
        constructor();
        constructor(entityToSpawn: $CompoundTag_, customSpawnRules: ($SpawnData$CustomSpawnRules_) | undefined, equipment: ($EquipmentTable_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SpawnData}.
     */
    export type $SpawnData_ = { entityToSpawn?: $CompoundTag_, customSpawnRules?: ($SpawnData$CustomSpawnRules_) | undefined, equipment?: ($EquipmentTable_) | undefined,  } | [entityToSpawn?: $CompoundTag_, customSpawnRules?: ($SpawnData$CustomSpawnRules_) | undefined, equipment?: ($EquipmentTable_) | undefined, ];
    export class $ClipBlockStateContext {
        getFrom(): $Vec3;
        getTo(): $Vec3;
        isTargetBlock(): $Predicate<$BlockState>;
        constructor(from: $Vec3_, to: $Vec3_, block: $Predicate_<$BlockState>);
        get from(): $Vec3;
        get to(): $Vec3;
        get targetBlock(): $Predicate<$BlockState>;
    }
    export class $LocalMobCapCalculator$MobCounts {
    }
    export class $GameRules$GameRuleTypeVisitor {
    }
    export interface $GameRules$GameRuleTypeVisitor {
        visit<T extends $GameRules$Value<T>>(key: $GameRules$Key<T>, type: $GameRules$Type<T>): void;
        visitBoolean(key: $GameRules$Key<$GameRules$BooleanValue>, type: $GameRules$Type<$GameRules$BooleanValue>): void;
        visitInteger(key: $GameRules$Key<$GameRules$IntegerValue>, type: $GameRules$Type<$GameRules$IntegerValue>): void;
    }
    export class $CustomSpawner {
    }
    export interface $CustomSpawner {
        tick(level: $ServerLevel, spawnEnemies: boolean, spawnFriendlies: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpawner}.
     */
    export type $CustomSpawner_ = ((arg0: $ServerLevel, arg1: boolean, arg2: boolean) => number);
    export class $SpawnData$CustomSpawnRules extends $Record {
        skyLightLimit(): $InclusiveRange<number>;
        blockLightLimit(): $InclusiveRange<number>;
        isValidPosition(pos: $BlockPos_, level: $ServerLevel): boolean;
        static CODEC: $Codec<$SpawnData$CustomSpawnRules>;
        constructor(arg0: $InclusiveRange_<number>, arg1: $InclusiveRange_<number>);
    }
    /**
     * Values that may be interpreted as {@link $SpawnData$CustomSpawnRules}.
     */
    export type $SpawnData$CustomSpawnRules_ = { blockLightLimit?: $InclusiveRange_<number>, skyLightLimit?: $InclusiveRange_<number>,  } | [blockLightLimit?: $InclusiveRange_<number>, skyLightLimit?: $InclusiveRange_<number>, ];
    export class $BaseCommandBlock implements $CommandSource {
        /**
         * Returns the lastOutput.
         */
        getName(): $Component;
        load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        save(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $CompoundTag;
        isValid(): boolean;
        getPosition(): $Vec3;
        getLevel(): $ServerLevel;
        /**
         * Returns the `successCount` int.
         */
        getSuccessCount(): number;
        performCommand(level: $Level_): boolean;
        setSuccessCount(successCount: number): void;
        setTrackOutput(shouldTrackOutput: boolean): void;
        createCommandSourceStack(): $CommandSourceStack;
        usedBy(player: $Player): $InteractionResult;
        /**
         * Returns the lastOutput.
         */
        getCustomName(): $Component;
        sendSystemMessage(component: $Component_): void;
        setCustomName(component: $Component_ | null): void;
        shouldInformAdmins(): boolean;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        /**
         * Returns the command of the command block.
         */
        getCommand(): string;
        /**
         * Sets the command.
         */
        setCommand(command: string): void;
        onUpdated(): void;
        setLastOutput(component: $Component_ | null): void;
        /**
         * Returns the lastOutput.
         */
        getLastOutput(): $Component;
        isTrackOutput(): boolean;
        alwaysAccepts(): boolean;
        constructor();
        get name(): $Component;
        get valid(): boolean;
        get position(): $Vec3;
        get level(): $ServerLevel;
    }
    export class $ClipContext$ShapeGetter {
    }
    export interface $ClipContext$ShapeGetter {
        get(state: $BlockState_, block: $BlockGetter, pos: $BlockPos_, collisionContext: $CollisionContext): $VoxelShape;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$ShapeGetter}.
     */
    export type $ClipContext$ShapeGetter_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape);
    export class $BaseSpawner implements $IOwnedSpawner, $BaseSpawnerAccess {
        load(level: $Level_ | null, pos: $BlockPos_, tag: $CompoundTag_): void;
        save(tag: $CompoundTag_): $CompoundTag;
        getOwner(): $Either<$BlockEntity, $Entity>;
        clientTick(level: $Level_, pos: $BlockPos_): void;
        serverTick(serverLevel: $ServerLevel, pos: $BlockPos_): void;
        setEntityId(type: $EntityType_<never>, level: $Level_ | null, random: $RandomSource, pos: $BlockPos_): void;
        onEventTriggered(level: $Level_, id: number): boolean;
        getOrCreateDisplayEntity(level: $Level_, pos: $BlockPos_): $Entity;
        getoSpin(): number;
        broadcastEvent(level: $Level_, pos: $BlockPos_, eventId: number): void;
        getSpin(): number;
        getRequiredPlayerRange(): number;
        setRequiredPlayerRange(arg0: number): void;
        setOSpin(arg0: number): void;
        getNextSpawnData(): $SpawnData;
        setSpawnDelay(arg0: number): void;
        getSpawnDelay(): number;
        static SPAWN_DATA_TAG: string;
        spawnPotentials: $SimpleWeightedRandomList<$SpawnData>;
        nextSpawnData: $SpawnData;
        constructor();
        get owner(): $Either<$BlockEntity, $Entity>;
        get oSpin(): number;
        get spin(): number;
        set OSpin(value: number);
    }
    export class $NaturalSpawner {
        static spawnForChunk(level: $ServerLevel, chunk: $LevelChunk, spawnState: $NaturalSpawner$SpawnState, spawnFriendlies: boolean, spawnMonsters: boolean, forcedDespawn: boolean): void;
        static createState(spawnableChunkCount: number, entities: $Iterable_<$Entity>, chunkGetter: $NaturalSpawner$ChunkGetter_, calculator: $LocalMobCapCalculator): $NaturalSpawner$SpawnState;
        static isValidEmptySpawnBlock(block: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, fluidState: $FluidState, entityType: $EntityType_<never>): boolean;
        static spawnMobsForChunkGeneration(levelAccessor: $ServerLevelAccessor, biome: $Holder_<$Biome>, chunkPos: $ChunkPos, random: $RandomSource): void;
        static spawnCategoryForChunk(category: $MobCategory_, level: $ServerLevel, chunk: $LevelChunk, filter: $NaturalSpawner$SpawnPredicate_, callback: $NaturalSpawner$AfterSpawnCallback_): void;
        static isInNetherFortressBounds(pos: $BlockPos_, level: $ServerLevel, category: $MobCategory_, structureManager: $StructureManager): boolean;
        static spawnCategoryForPosition(category: $MobCategory_, level: $ServerLevel, chunk: $ChunkAccess, pos: $BlockPos_, filter: $NaturalSpawner$SpawnPredicate_, callback: $NaturalSpawner$AfterSpawnCallback_): void;
        static spawnCategoryForPosition(category: $MobCategory_, level: $ServerLevel, pos: $BlockPos_): void;
        static SPAWN_DISTANCE_BLOCK: number;
        static SPAWN_DISTANCE_CHUNK: number;
    }
    export class $DataPackConfig {
        addModPacks(arg0: $List_<string>): void;
        getEnabled(): $List<string>;
        getDisabled(): $List<string>;
        static CODEC: $Codec<$DataPackConfig>;
        static DEFAULT: $DataPackConfig;
        constructor(enabled: $List_<string>, disabled: $List_<string>);
        get enabled(): $List<string>;
        get disabled(): $List<string>;
    }
    export class $CollisionGetter {
    }
    export interface $CollisionGetter extends $BlockGetter {
        getWorldBorder(): $WorldBorder;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        noBlockCollision(entity: $Entity | null, box: $AABB_): boolean;
        noCollision(entity: $Entity | null, box: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        collidesWithSuffocatingBlock(entity: $Entity | null, box: $AABB_): boolean;
        getEntityCollisions(entity: $Entity | null, collisionBox: $AABB_): $List<$VoxelShape>;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        get worldBorder(): $WorldBorder;
    }
    export class $GameRules$BooleanValue extends $GameRules$Value<$GameRules$BooleanValue> {
        get(): boolean;
        set(value: boolean, server: $MinecraftServer | null): void;
        static create(defaultValue: boolean, changeListener: $BiConsumer_<$MinecraftServer, $GameRules$BooleanValue>): $GameRules$Type<$GameRules$BooleanValue>;
        static create(defaultValue: boolean): $GameRules$Type<$GameRules$BooleanValue>;
        setFrom(value: $GameRules$BooleanValue, server: $MinecraftServer | null): void;
        constructor(type: $GameRules$Type<$GameRules$BooleanValue>, value: boolean);
    }
    export class $Spawner {
        static appendHoverText(stack: $ItemStack_, tooltipLines: $List_<$Component_>, spawnDataKey: string): void;
        static getSpawnEntityDisplayName(stack: $ItemStack_, spawnDataKey: string): $Component;
    }
    export interface $Spawner {
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
    }
    /**
     * Values that may be interpreted as {@link $Spawner}.
     */
    export type $Spawner_ = ((arg0: $EntityType<never>, arg1: $RandomSource) => void);
    export class $LevelTimeAccess {
    }
    export interface $LevelTimeAccess extends $LevelReader {
        getTimeOfDay(partialTick: number): number;
        dayTime(): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        get moonBrightness(): number;
        get moonPhase(): number;
    }
    export class $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
    }
    export interface $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
    }
    /**
     * Values that may be interpreted as {@link $GameRules$VisitorCaller}.
     */
    export type $GameRules$VisitorCaller_<T> = (() => void);
    export class $BlockCollisions<T> extends $AbstractIterator<T> {
        constructor(collisionGetter: $CollisionGetter, entity: $Entity | null, box: $AABB_, onlySuffocatingBlocks: boolean, resultProvider: $BiFunction_<$BlockPos$MutableBlockPos, $VoxelShape, T>);
    }
    export class $NoiseColumn implements $BlockColumn {
        getBlock(pos: number): $BlockState;
        setBlock(pos: number, state: $BlockState_): void;
        constructor(minY: number, column: $BlockState_[]);
    }
    export class $ItemLike {
    }
    export interface $ItemLike {
        asItem(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $ItemLike}.
     */
    export type $ItemLike_ = $Item_ | (() => $Item_);
    export class $PathNavigationRegion implements $BlockGetter, $CollisionGetter, $ChunkView {
        getProfiler(): $ProfilerFiller;
        getFluidState(pos: $BlockPos_): $FluidState;
        getWorldBorder(): $WorldBorder;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getMinBuildHeight(): number;
        getHeight(): number;
        getEntityCollisions(entity: $Entity | null, collisionBox: $AABB_): $List<$VoxelShape>;
        lithium$getLoadedChunk(x: number, z: number): $ChunkAccess;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getLightEmission(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
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
        constructor(level: $Level_, centerPos: $BlockPos_, offsetPos: $BlockPos_);
        get profiler(): $ProfilerFiller;
        get worldBorder(): $WorldBorder;
        get minBuildHeight(): number;
        get height(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $SimpleExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(explodesBlocks: boolean, damagesEntities: boolean, knockbackMultiplier: (number) | undefined, immuneBlocks: ($HolderSet_<$Block>) | undefined);
    }
    export class $LocalMobCapCalculator {
        canSpawn(category: $MobCategory_, pos: $ChunkPos): boolean;
        addMob(pos: $ChunkPos, category: $MobCategory_): void;
        constructor(chunkMap: $ChunkMap);
    }
    export class $LevelSimulatedReader {
    }
    export interface $LevelSimulatedReader {
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, type: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
    }
    export class $BlockAndTintGetter {
    }
    export interface $BlockAndTintGetter extends $BlockGetter, $IBlockAndTintGetterExtension {
        canSeeSky(blockPos: $BlockPos_): boolean;
        getShade(direction: $Direction_, shade: boolean): number;
        getLightEngine(): $LevelLightEngine;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        get lightEngine(): $LevelLightEngine;
    }
    export class $ClipContext implements $ClipContextAccessor {
        getFrom(): $Vec3;
        getTo(): $Vec3;
        getBlockShape(blockState: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getFluidShape(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getFluidHandling(): $ClipContext$Fluid;
        constructor(from: $Vec3_, to: $Vec3_, block: $ClipContext$Block_, fluid: $ClipContext$Fluid_, entity: $Entity);
        constructor(from: $Vec3_, to: $Vec3_, block: $ClipContext$Block_, fluid: $ClipContext$Fluid_, collisionContext: $CollisionContext);
        get from(): $Vec3;
        get to(): $Vec3;
        get fluidHandling(): $ClipContext$Fluid;
    }
    export class $EntityBasedExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(source: $Entity);
    }
    export class $ForcedChunksSavedData extends $SavedData {
        static load(tag: $CompoundTag_, registries: $HolderLookup$Provider): $ForcedChunksSavedData;
        static factory(): $SavedData$Factory<$ForcedChunksSavedData>;
        getChunks(): $LongSet;
        getBlockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        getEntityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
        static FILE_ID: string;
        constructor();
        get chunks(): $LongSet;
        get blockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        get entityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
    }
    export class $Level$ExplosionInteraction extends $Enum<$Level$ExplosionInteraction> implements $StringRepresentable {
        static values(): $Level$ExplosionInteraction[];
        static valueOf(arg0: string): $Level$ExplosionInteraction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MOB: $Level$ExplosionInteraction;
        static CODEC: $Codec<$Level$ExplosionInteraction>;
        static TRIGGER: $Level$ExplosionInteraction;
        static BLOCK: $Level$ExplosionInteraction;
        static TNT: $Level$ExplosionInteraction;
        static NONE: $Level$ExplosionInteraction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Level$ExplosionInteraction}.
     */
    export type $Level$ExplosionInteraction_ = "none" | "block" | "mob" | "tnt" | "trigger";
    export class $ClipContext$Block extends $Enum<$ClipContext$Block> implements $ClipContext$ShapeGetter {
        get(state: $BlockState_, block: $BlockGetter, pos: $BlockPos_, collisionContext: $CollisionContext): $VoxelShape;
        static values(): $ClipContext$Block[];
        static valueOf(arg0: string): $ClipContext$Block;
        static COLLIDER: $ClipContext$Block;
        static FALLDAMAGE_RESETTING: $ClipContext$Block;
        static OUTLINE: $ClipContext$Block;
        static VISUAL: $ClipContext$Block;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Block}.
     */
    export type $ClipContext$Block_ = "collider" | "outline" | "visual" | "falldamage_resetting";
    export class $LevelHeightAccessor {
        static create(minBuildHeight: number, height: number): $LevelHeightAccessor;
    }
    export interface $LevelHeightAccessor {
        getMaxBuildHeight(): number;
        getMinBuildHeight(): number;
        getHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(y: number): number;
        getMinSection(): number;
        getSectionIndexFromSectionY(y: number): number;
        getSectionYFromSectionIndex(y: number): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        get maxBuildHeight(): number;
        get minBuildHeight(): number;
        get height(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $ClipContext$Fluid extends $Enum<$ClipContext$Fluid> {
        static values(): $ClipContext$Fluid[];
        static valueOf(arg0: string): $ClipContext$Fluid;
        canPick(state: $FluidState): boolean;
        static SOURCE_ONLY: $ClipContext$Fluid;
        static NONE: $ClipContext$Fluid;
        static ANY: $ClipContext$Fluid;
        static WATER: $ClipContext$Fluid;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Fluid}.
     */
    export type $ClipContext$Fluid_ = "none" | "source_only" | "any" | "water";
    export class $Explosion implements $ExplosionAccessor {
        getIndirectSourceEntity(): $LivingEntity;
        getBlockInteraction(): $Explosion$BlockInteraction;
        /**
         * Returns either the entity that placed the explosive block, the entity that caused the explosion or null.
         */
        getDirectSourceEntity(): $Entity;
        center(): $Vec3;
        /**
         * Does the first part of the explosion (destroy blocks)
         */
        explode(): void;
        canTriggerBlocks(): boolean;
        radius(): number;
        interactsWithBlocks(): boolean;
        getSmallExplosionParticles(): $ParticleOptions;
        getLargeExplosionParticles(): $ParticleOptions;
        /**
         * Does the second part of the explosion (sound, particles, drop spawn)
         */
        finalizeExplosion(spawnParticles: boolean): void;
        static getSeenPercent(explosionVector: $Vec3_, entity: $Entity): number;
        getExplosionSound(): $Holder<$SoundEvent>;
        getHitPlayers(): $Map<$Player, $Vec3>;
        /**
         * Does the first part of the explosion (destroy blocks)
         */
        clearToBlow(): void;
        static getDefaultDamageSource(level: $Level_, source: $Entity | null): $DamageSource;
        getToBlow(): $List<$BlockPos>;
        static addOrAppendStack(drops: $List_<$Pair<$ItemStack_, $BlockPos_>>, stack: $ItemStack_, pos: $BlockPos_): void;
        getLevel(): $Level;
        source: $Entity;
        constructor(level: $Level_, source: $Entity | null, x: number, arg3: number, y: number, arg5: number, z: boolean, arg7: $Explosion$BlockInteraction_);
        constructor(level: $Level_, source: $Entity | null, x: number, arg3: number, y: number, arg5: number, z: boolean, arg7: $Explosion$BlockInteraction_, radius: $List_<$BlockPos_>);
        constructor(level: $Level_, source: $Entity | null, x: number, arg3: number, y: number, arg5: number, z: $List_<$BlockPos_>, arg7: $Explosion$BlockInteraction_, radius: $ParticleOptions_, toBlow: $ParticleOptions_, blockInteraction: $Holder_<$SoundEvent>);
        constructor(level: $Level_, source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg5: number, y: number, arg7: number, z: boolean, arg9: $Explosion$BlockInteraction_, radius: $ParticleOptions_, fire: $ParticleOptions_, blockInteraction: $Holder_<$SoundEvent>);
        get indirectSourceEntity(): $LivingEntity;
        get blockInteraction(): $Explosion$BlockInteraction;
        get directSourceEntity(): $Entity;
        get smallExplosionParticles(): $ParticleOptions;
        get largeExplosionParticles(): $ParticleOptions;
        get explosionSound(): $Holder<$SoundEvent>;
        get hitPlayers(): $Map<$Player, $Vec3>;
        get toBlow(): $List<$BlockPos>;
        get level(): $Level;
    }
}
