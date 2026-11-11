import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        oldDataFile(): $Path;
        directoryName(): string;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        lockFile(): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData,  } | [dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Get current world name
         */
        getLevelName(): string;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        worldGenOptions(): $WorldOptions;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        setDifficultyLocked(locked: boolean): void;
        getDataConfiguration(): $WorldDataConfiguration;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getStorageVersionName(storageVersionId: number): string;
        worldGenSettingsLifecycle(): $Lifecycle;
        getRemovedFeatureFlags(): $Set<string>;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        overworldData(): $ServerLevelData;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get flatWorld(): boolean;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isCompatible(dataVersion: $DataVersion): boolean;
        isSideSeries(): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Get current world name
         */
        getLevelName(): string;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getDayTimeFraction(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setGameType(type: $GameType_): void;
        setThunderTime(time: number): void;
        setRainTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get hardcore(): boolean;
        get difficultyLocked(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get allowCommands(): boolean;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        get gameTime(): number;
        get hardcore(): boolean;
        get difficultyLocked(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
        get dayTime(): number;
    }
    export class $DimensionDataStorage {
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        getTranslationKey(): string;
        shouldBackup(): boolean;
        isSevere(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        checkForLowDiskSpace(): boolean;
        restoreLevelDataFromOld(): boolean;
        renameAndDropPlayer(saveName: string): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        getLevelId(): string;
        hasWorldData(): boolean;
        deleteLevel(): void;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        getLevelPath(folderName: $LevelResource): $Path;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        getFileModificationTime(useFallback: boolean): $Instant;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getIconFile(): ($Path) | undefined;
        createPlayerStorage(): $PlayerDataStorage;
        safeClose(): void;
        renameLevel(saveName: string): void;
        makeWorldBackup(): number;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        estimateDiskSpace(): number;
        getDataTag(): $Dynamic<never>;
        handler$don000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        get levelId(): string;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get iconFile(): ($Path) | undefined;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTag(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        getPlayerDir(): $File;
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Get current world name
         */
        getLevelName(): string;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getDayTimeFraction(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setGameType(type: $GameType_): void;
        setThunderTime(time: number): void;
        setRainTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        get levelName(): string;
        set dayTime(value: number);
        set gameTime(value: number);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersion(): $DataVersion;
        minecraftVersionName(): string;
        lastPlayed(): number;
        levelDataVersion(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getLevelPath(saveName: string): $Path;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        isNewLevelIdAcceptable(saveName: string): boolean;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        getWorldDirValidator(): $DirectoryValidator;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        levelExists(saveName: string): boolean;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get worldDirValidator(): $DirectoryValidator;
        get baseDir(): $Path;
        get backupPath(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Get current world name
         */
        getLevelName(): string;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getDayTimeFraction(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        worldGenOptions(): $WorldOptions;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        setThunderTime(time: number): void;
        setRainTime(time: number): void;
        setThundering(locked: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setDifficultyLocked(locked: boolean): void;
        getDataConfiguration(): $WorldDataConfiguration;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        getRemovedFeatureFlags(): $Set<string>;
        setRaining(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        overworldData(): $ServerLevelData;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getStorageVersionName(storageVersionId: number): string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get flatWorld(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        isCompatible(): boolean;
        getSettings(): $LevelSettings;
        getInfo(): $Component;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getIcon(): $Path;
        canDelete(): boolean;
        isDisabled(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        requiresManualConversion(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        primaryActionActive(): boolean;
        isExperimental(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        levelVersion(): $LevelVersion;
        isDowngrade(): boolean;
        getLastPlayed(): number;
        canRecreate(): boolean;
        shouldBackup(): boolean;
        hasCommands(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get compatible(): boolean;
        get settings(): $LevelSettings;
        get info(): $Component;
        get levelName(): string;
        get icon(): $Path;
        get disabled(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
        get gameMode(): $GameType;
        get worldVersionName(): $MutableComponent;
        get experimental(): boolean;
        get downgrade(): boolean;
        get lastPlayed(): number;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
