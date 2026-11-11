import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerData, $IMinecraftServer } from "@package/xaero/common/server";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_ } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements {
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        flushDirty(serverPlayer: $ServerPlayer): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        setPlayer(serverPlayer: $ServerPlayer): void;
        stopListening(): void;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
        set player(value: $ServerPlayer);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { finalDimensions?: $RegistryAccess$Frozen, cookie?: any,  } | [finalDimensions?: $RegistryAccess$Frozen, cookie?: any, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        resourceManager(): $CloseableResourceManager;
        managers(): $ReloadableServerResources;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
        get(location: $ResourceLocation_): $AdvancementHolder;
        tree(): $AdvancementTree;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        constructor(registries: $HolderLookup$Provider);
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMotd(): string;
        getServerVersion(): string;
        getPlayerCount(): number;
        getMaxPlayers(): number;
        get motd(): string;
        get serverVersion(): string;
        get playerCount(): number;
        get maxPlayers(): number;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        stopSprinting(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        stopStepping(): boolean;
        requestGameToSprint(sprintTime: number): boolean;
        updateJoiningPlayer(player: $ServerPlayer): void;
        isSprinting(): boolean;
        endTickWork(): void;
        checkShouldSprintThisTick(): boolean;
        static MIN_TICKRATE: number;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        packRepository(): $PackRepository;
        safeMode(): boolean;
        initMode(): boolean;
        initialDataConfig(): $WorldDataConfiguration;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { initMode?: boolean, packRepository?: $PackRepository, initialDataConfig?: $WorldDataConfiguration_, safeMode?: boolean,  } | [initMode?: boolean, packRepository?: $PackRepository, initialDataConfig?: $WorldDataConfiguration_, safeMode?: boolean, ];
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        getJsonKeys(): string;
        get filename(): string;
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        static getMissingTranslations(): $Set<string>;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static realStdoutPrintln(message: string): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        static forException(exception: $Exception): $ChainedJsonException;
        prependJsonKey(message: string): void;
        setFilenameAndFlush(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        datapackWorldgen(): $RegistryAccess$Frozen;
        datapackDimensions(): $RegistryAccess$Frozen;
        dataConfiguration(): $WorldDataConfiguration;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_, datapackWorldgen?: $RegistryAccess$Frozen, datapackDimensions?: $RegistryAccess$Frozen,  } | [resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_, datapackWorldgen?: $RegistryAccess$Frozen, datapackDimensions?: $RegistryAccess$Frozen, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        getProperties(): $DedicatedServerProperties;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        get levelIdName(): string;
        get serverIp(): string;
        get pluginNames(): string;
        get properties(): $DedicatedServerProperties;
        get serverPort(): number;
        get playerNames(): string[];
        get serverName(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener {
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get availableTags(): $Iterable<$ResourceLocation>;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $ITimeTrackingServer, $MinecraftServerKJS, $Trackable, $MinecraftServerAccessor, $IMinecraftServer {
        getWorldScreenshotFile(): ($Path) | undefined;
        getFile(path: string): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        getConnection(): $ServerConnectionListener;
        getResourceManager(): $ResourceManager;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        getStatus(): $ServerStatus;
        setPort(idleTimeout: number): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        getScheduledEvents(): $ScheduledEvents;
        getProfiler(): $ProfilerFiller;
        getData(): $AttachedData<any>;
        getFunctions(): $ServerFunctionManager;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        fillSystemReport(report: $SystemReport): $SystemReport;
        getWorldData(): $WorldData;
        getAdvancements(): $ServerAdvancementManager;
        tickRateManager(): $ServerTickRateManager;
        registryAccess(): $RegistryAccess$Frozen;
        getRunningThread(): $Thread;
        getFixerUpper(): $DataFixer;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        overworld(): $ServerLevel;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        getDefaultGameType(): $GameType;
        getForcedGameType(): $GameType;
        getProxy(): $Proxy;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        getStructureManager(): $StructureTemplateManager;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        doRunTask(task: $TickTask): void;
        getPlayerList(): $PlayerList;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        getSpawnRadius(level: $ServerLevel | null): number;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        getCommands(): $Commands;
        sendSystemMessage(component: $Component_): void;
        getScoreboard(): $ServerScoreboard;
        getGameRules(): $GameRules;
        potionBrewing(): $PotionBrewing;
        getRecipeManager(): $RecipeManager;
        serverLinks(): $ServerLinks;
        getProfilePermissions(profile: $GameProfile): number;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        restoreInventories(): $Map<any, any>;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        atl$getBaseClass(): $Class<any>;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        getServerResources(): $MinecraftServer$ReloadableResources;
        getAllLevels(): $Iterable<$ServerLevel>;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        getCustomBossEvents(): $CustomBossEvents;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        getWorldPath(levelResource: $LevelResource): $Path;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getCommandStorage(): $CommandStorage;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        handler$fmf000$electroenergetics$electroEnergetics$runServer(arg0: $CallbackInfo): void;
        handler$fmf000$electroenergetics$electroEnergetics$stopServer(arg0: $CallbackInfo): void;
        handler$fmf000$electroenergetics$electroEnergetics$tickServerPost(arg0: $BooleanSupplier_, arg1: $CallbackInfo): void;
        handler$fmf000$electroenergetics$electroEnergetics$tickServerPre(arg0: $BooleanSupplier_, arg1: $CallbackInfo): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        handler$blm000$ae2$injectSpatialLevel(arg0: $ChunkProgressListener, arg1: $CallbackInfo): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        setLocalIp(serverId: string): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        setMotd(serverId: string): void;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        getModdedStatus(): $ModCheck;
        getServerDirectory(): $Path;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        addTickable(tickable: $Runnable_): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        getSessionService(): $MinecraftSessionService;
        setPlayerList(list: $PlayerList): void;
        getNextTickTime(): number;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        static setFatalException(fatalException: $RuntimeException): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        getTickTimesNanos(): number[];
        stopTimeProfiler(): $ProfileResults;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        getOverworld(): $ServerLevel;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        getPackRepository(): $PackRepository;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        getAverageTickTimeNanos(): number;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        getSingleplayerProfile(): $GameProfile;
        getProfileRepository(): $GameProfileRepository;
        dumpServerProperties(path: $Path_): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        getXaeroMinimapServerData(): $MinecraftServerData;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        setPlayerIdleTimeout(idleTimeout: number): void;
        getCurrentSmoothedTickTime(): number;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        getScaledTrackingDistance(trackingDistance: number): number;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        mfix$getLastTickStartTime(): number;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        sendData(channel: string, data: $CompoundTag_): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        self(): $MinecraftServer;
        tell(component: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        getName(): $Component;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTracking(): void;
        sendData(serverId: string): void;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntities(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get worldScreenshotFile(): ($Path) | undefined;
        get shutdown(): boolean;
        get connection(): $ServerConnectionListener;
        get resourceManager(): $ResourceManager;
        get currentlySaving(): boolean;
        get status(): $ServerStatus;
        get profileKeySignatureValidator(): $SignatureValidator;
        get keyPair(): $KeyPair;
        get running(): boolean;
        get stopped(): boolean;
        get dedicated(): boolean;
        get scheduledEvents(): $ScheduledEvents;
        get profiler(): $ProfilerFiller;
        get data(): $AttachedData<any>;
        get functions(): $ServerFunctionManager;
        get published(): boolean;
        get worldData(): $WorldData;
        get advancements(): $ServerAdvancementManager;
        get runningThread(): $Thread;
        get fixerUpper(): $DataFixer;
        get singleplayer(): boolean;
        get maxChainedNeighborUpdates(): number;
        get persistentData(): $CompoundTag;
        get forcedGameType(): $GameType;
        get proxy(): $Proxy;
        get paused(): boolean;
        get hardcore(): boolean;
        get ready(): boolean;
        get structureManager(): $StructureTemplateManager;
        get absoluteMaxWorldSize(): number;
        get commands(): $Commands;
        get scoreboard(): $ServerScoreboard;
        get gameRules(): $GameRules;
        get recipeManager(): $RecipeManager;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get allLevels(): $Iterable<$ServerLevel>;
        get spawningAnimals(): boolean;
        set difficultyLocked(value: boolean);
        get customBossEvents(): $CustomBossEvents;
        get resourcePackRequired(): boolean;
        get commandBlockEnabled(): boolean;
        get tickCount(): number;
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get commandStorage(): $CommandStorage;
        get playerNames(): string[];
        get rateLimitPacketsPerSecond(): number;
        get functionCompilationLevel(): number;
        get operatorUserPermissionLevel(): number;
        get serverModName(): string;
        get moddedStatus(): $ModCheck;
        get serverDirectory(): $Path;
        get serverVersion(): string;
        get playerCount(): number;
        get spawningMonsters(): boolean;
        get epollEnabled(): boolean;
        get sessionService(): $MinecraftSessionService;
        get nextTickTime(): number;
        get statusJson(): string;
        static set fatalException(value: $RuntimeException);
        get maxPlayers(): number;
        get tickTimesNanos(): number[];
        get packRepository(): $PackRepository;
        get recordingMetrics(): boolean;
        get averageTickTimeNanos(): number;
        get tickTimeLoggingEnabled(): boolean;
        get profileRepository(): $GameProfileRepository;
        get timeProfilerRunning(): boolean;
        get currentSmoothedTickTime(): number;
        get spawnProtectionRadius(): number;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get compressionThreshold(): number;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        dataPackResources(): $ReloadableServerResources;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources?: $ReloadableServerResources, ];
    export class $ServerScoreboard extends $Scoreboard {
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        stopTrackingObjective(objective: $Objective): void;
        startTrackingObjective(objective: $Objective): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        addDirtyListener(runnable: $Runnable_): void;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        listeners(): $List<$PreparableReloadListener>;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getAdvancements(): $ServerAdvancementManager;
        getCommands(): $Commands;
        getRecipeManager(): $RecipeManager;
        getConditionContext(): $ICondition$IContext;
        getRegistryLookup(): $HolderLookup$Provider;
        kjs$getServerScriptManager(): $ServerScriptManager;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        kjs$getTagManager(): $TagManager;
        get advancements(): $ServerAdvancementManager;
        get commands(): $Commands;
        get recipeManager(): $RecipeManager;
        get conditionContext(): $ICondition$IContext;
        get registryLookup(): $HolderLookup$Provider;
        get functionLibrary(): $ServerFunctionLibrary;
    }
    export class $WorldLoader$InitConfig extends $Record {
        packConfig(): $WorldLoader$PackConfig;
        functionCompilationLevel(): number;
        commandSelection(): $Commands$CommandSelection;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number, commandSelection?: $Commands$CommandSelection_,  } | [packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number, commandSelection?: $Commands$CommandSelection_, ];
    export class $TickTask implements $Runnable {
        run(): void;
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_, hash?: string,  } | [url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_, hash?: string, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string, ];
    export class $Services extends $Record {
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        canValidateProfileKeys(): boolean;
        profileCache(): $GameProfileCache;
        sessionService(): $MinecraftSessionService;
        servicesKeySet(): $ServicesKeySet;
        profileKeySignatureValidator(): $SignatureValidator;
        profileRepository(): $GameProfileRepository;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_, profileCache?: $GameProfileCache, servicesKeySet?: $ServicesKeySet_,  } | [sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_, profileCache?: $GameProfileCache, servicesKeySet?: $ServicesKeySet_, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        getGameLoopSender(): $CommandSourceStack;
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        mfix$getProfilingResults(): string;
        tick(): void;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getTagNames(): $Iterable<$ResourceLocation>;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get gameLoopSender(): $CommandSourceStack;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get tagNames(): $Iterable<$ResourceLocation>;
        get functionNames(): $Iterable<$ResourceLocation>;
    }
}
