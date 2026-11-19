import { $IPrimaryLevelData, $ExtraFightData } from "@package/com/yungnickyoung/minecraft/betterendisland/world";
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
        dataFile(): $Path;
        iconFile(): $Path;
        lockFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        path(): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        resourcePath(resource: $LevelResource): $Path;
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
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getKnownServerBrands(): $Set<string>;
        getStorageVersionName(storageVersionId: number): string;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getRemovedFeatureFlags(): $Set<string>;
        getDataConfiguration(): $WorldDataConfiguration;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        setDifficultyLocked(locked: boolean): void;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        getVersion(): number;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        setModdedInfo(name: string, isModded: boolean): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get gameRules(): $GameRules;
        get flatWorld(): boolean;
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
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
        isSideSeries(): boolean;
        isCompatible(dataVersion: $DataVersion): boolean;
        getSeries(): string;
        getVersion(): number;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get sideSeries(): boolean;
        get series(): string;
        get version(): number;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        getDayTimeFraction(): number;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setGameType(type: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setClearWeatherTime(time: number): void;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get difficultyLocked(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get levelName(): string;
        get hardcore(): boolean;
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
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        get difficultyLocked(): boolean;
        get dayTime(): number;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get thundering(): boolean;
        get spawnAngle(): number;
        get gameTime(): number;
        get hardcore(): boolean;
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
        getTranslationKey(): string;
        isSevere(): boolean;
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
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
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        getFileModificationTime(useFallback: boolean): $Instant;
        getLevelPath(folderName: $LevelResource): $Path;
        getIconFile(): ($Path) | undefined;
        createPlayerStorage(): $PlayerDataStorage;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        deleteLevel(): void;
        hasWorldData(): boolean;
        getDataTag(): $Dynamic<never>;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        checkForLowDiskSpace(): boolean;
        renameAndDropPlayer(saveName: string): void;
        restoreLevelDataFromOld(): boolean;
        makeWorldBackup(): number;
        getWorldDir(): $Path;
        getDataTagFallback(): $Dynamic<never>;
        estimateDiskSpace(): number;
        renameLevel(saveName: string): void;
        handler$dde000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$eel001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        parent(): $LevelStorageSource;
        close(): void;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getLevelId(): string;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        safeClose(): void;
        get iconFile(): ($Path) | undefined;
        get dataTag(): $Dynamic<never>;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get worldDir(): $Path;
        get dataTagFallback(): $Dynamic<never>;
        get levelId(): string;
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
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        getDayTimeFraction(): number;
        setGameType(type: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Get current world name
         */
        getLevelName(): string;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setClearWeatherTime(time: number): void;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set dayTime(value: number);
        get levelName(): string;
        get allowCommands(): boolean;
        set gameTime(value: number);
    }
    export class $LevelVersion {
        minecraftVersionName(): string;
        lastPlayed(): number;
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        levelDataVersion(): number;
        minecraftVersion(): $DataVersion;
    }
    export class $LevelStorageSource {
        isNewLevelIdAcceptable(saveName: string): boolean;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        getWorldDirValidator(): $DirectoryValidator;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getLevelPath(saveName: string): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getName(): string;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        levelExists(saveName: string): boolean;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get worldDirValidator(): $DirectoryValidator;
        get baseDir(): $Path;
        get name(): string;
        get backupPath(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $IPrimaryLevelData {
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Get current world time
         */
        getDayTime(): number;
        getKnownServerBrands(): $Set<string>;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getRemovedFeatureFlags(): $Set<string>;
        getDataConfiguration(): $WorldDataConfiguration;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        setDifficultyLocked(locked: boolean): void;
        setExtraEndDragonFightData(arg0: $ExtraFightData): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        getExtraEndDragonFightData(): $ExtraFightData;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        setRaining(locked: boolean): void;
        getDayTimeFraction(): number;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setGameType(type: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        setThunderTime(time: number): void;
        setThundering(locked: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        setModdedInfo(name: string, isModded: boolean): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setClearWeatherTime(time: number): void;
        getStorageVersionName(arg0: number): string;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get gameRules(): $GameRules;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        getIcon(): $Path;
        requiresManualConversion(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        primaryActionActive(): boolean;
        isCompatible(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        canDelete(): boolean;
        getSettings(): $LevelSettings;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        getInfo(): $Component;
        levelVersion(): $LevelVersion;
        getLastPlayed(): number;
        hasCommands(): boolean;
        shouldBackup(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        isDowngrade(): boolean;
        isExperimental(): boolean;
        canRecreate(): boolean;
        isDisabled(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get icon(): $Path;
        get worldVersionName(): $MutableComponent;
        get compatible(): boolean;
        get gameMode(): $GameType;
        get locked(): boolean;
        get settings(): $LevelSettings;
        get levelName(): string;
        get hardcore(): boolean;
        get levelId(): string;
        get info(): $Component;
        get lastPlayed(): number;
        get downgrade(): boolean;
        get experimental(): boolean;
        get disabled(): boolean;
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
