import { $Gson, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $FilterInputStream, $InputStream, $BufferedReader } from "@package/java/io";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $ResourcePackLookup$GroupedAccess, $ResourcePackEntry } from "@package/com/ccr4ft3r/lightspeed/cache/resource";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $List, $Map_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $ZipEntry, $ZipFile } from "@package/java/util/zip";
import { $Unit_, $ResourceLocationPattern } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Predicate_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $IFakeIResource$V1, $IFakeIResource$V2, $IFakeIResourceManager$V1, $IFakeIResourceManager$V2 } from "@package/customskinloader/fake/itf";
import { $Path_ } from "@package/java/nio/file";
import { $PackResources, $PackType_ } from "@package/net/minecraft/server/packs";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FallbackResourceManagerPackEntryAccessor } from "@package/com/ccr4ft3r/lightspeed/mixin/resources";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";

declare module "@package/net/minecraft/server/packs/resources" {
    export class $ResourceProvider {
        static fromMap(resources: $Map_<$ResourceLocation_, $Resource>): $ResourceProvider;
        static EMPTY: $ResourceProvider;
    }
    export interface $ResourceProvider {
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        open(location: $ResourceLocation_): $InputStream;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
    }
    /**
     * Values that may be interpreted as {@link $ResourceProvider}.
     */
    export type $ResourceProvider_ = ((arg0: $ResourceLocation) => ($Resource) | undefined);
    export class $PreparableReloadListener$PreparationBarrier {
    }
    export interface $PreparableReloadListener$PreparationBarrier {
        wait<T>(backgroundResult: T): $CompletableFuture<T>;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener$PreparationBarrier}.
     */
    export type $PreparableReloadListener$PreparationBarrier_ = ((arg0: any) => $CompletableFuture<any>);
    export class $FallbackResourceManager$ResourceWithSource extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$ResourceWithSource}.
     */
    export type $FallbackResourceManager$ResourceWithSource_ = { source?: $PackResources, resource?: $IoSupplier_<$InputStream>,  } | [source?: $PackResources, resource?: $IoSupplier_<$InputStream>, ];
    export class $ResourceMetadata$Builder {
        put<T>(key: $MetadataSectionSerializer<T>, value: T): $ResourceMetadata$Builder;
        build(): $ResourceMetadata;
        constructor();
    }
    export class $SimpleReloadInstance$StateFactory<S> {
    }
    export interface $SimpleReloadInstance$StateFactory<S> {
    }
    /**
     * Values that may be interpreted as {@link $SimpleReloadInstance$StateFactory}.
     */
    export type $SimpleReloadInstance$StateFactory_<S> = (() => void);
    export class $IoSupplier<T> {
        static create(path: $Path_): $IoSupplier<$InputStream>;
        static create(zipFile: $ZipFile, zipEntry: $ZipEntry): $IoSupplier<$InputStream>;
    }
    export interface $IoSupplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $IoSupplier}.
     */
    export type $IoSupplier_<T> = (() => T);
    export class $PreparableReloadListener {
    }
    export interface $PreparableReloadListener {
        getName(): string;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener}.
     */
    export type $PreparableReloadListener_ = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor) => $CompletableFuture<void>);
    export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $JsonElement>> {
        static scanDirectory(resourceManager: $ResourceManager, name: string, gson: $Gson, output: $Map_<$ResourceLocation_, $JsonElement_>): void;
        constructor(gson: $Gson, directory: string);
    }
    export class $FallbackResourceManager$1ResourceWithSourceAndIndex extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$1ResourceWithSourceAndIndex}.
     */
    export type $FallbackResourceManager$1ResourceWithSourceAndIndex_ = { packIndex?: number, packResources?: $PackResources, resource?: $IoSupplier_<$InputStream>,  } | [packIndex?: number, packResources?: $PackResources, resource?: $IoSupplier_<$InputStream>, ];
    export class $FallbackResourceManager$LeakedResourceWarningInputStream extends $FilterInputStream {
    }
    export class $ResourceMetadata {
        static fromJsonStream(stream: $InputStream): $ResourceMetadata;
        static EMPTY_SUPPLIER: $IoSupplier<$ResourceMetadata>;
        static EMPTY: $ResourceMetadata;
    }
    export interface $ResourceMetadata {
        getSection<T>(serializer: $MetadataSectionSerializer<T>): (T) | undefined;
        copySections(serializers: $Collection_<$MetadataSectionSerializer<never>>): $ResourceMetadata;
    }
    /**
     * Values that may be interpreted as {@link $ResourceMetadata}.
     */
    export type $ResourceMetadata_ = ((arg0: $MetadataSectionSerializer<any>) => (T) | undefined);
    export class $ResourceManagerReloadListener {
    }
    export interface $ResourceManagerReloadListener extends $PreparableReloadListener {
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManagerReloadListener}.
     */
    export type $ResourceManagerReloadListener_ = ((arg0: $ResourceManager) => void);
    export class $MultiPackResourceManager implements $CloseableResourceManager {
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getNamespaces(): $Set<string>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        open(location: $ResourceLocation_): $InputStream;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        namespacedManagers: $Map<string, $FallbackResourceManager>;
        packs: $List<$PackResources>;
        constructor(type: $PackType_, packs: $List_<$PackResources>);
        get namespaces(): $Set<string>;
    }
    export class $CloseableResourceManager {
    }
    export interface $CloseableResourceManager extends $ResourceManager, $AutoCloseable {
        close(): void;
    }
    export class $SimpleReloadInstance<S> implements $ReloadInstance {
        done(): $CompletableFuture<never>;
        static of(resourceManager: $ResourceManager, listeners: $List_<$PreparableReloadListener_>, backgroundExecutor: $Executor_, gameExecutor: $Executor_, alsoWaitedFor: $CompletableFuture<$Unit_>): $SimpleReloadInstance<void>;
        static create(resourceManager: $ResourceManager, listeners: $List_<$PreparableReloadListener_>, backgroundExecutor: $Executor_, gameExecutor: $Executor_, alsoWaitedFor: $CompletableFuture<$Unit_>, profiled: boolean): $ReloadInstance;
        getActualProgress(): number;
        isDone(): boolean;
        checkExceptions(): void;
        get actualProgress(): number;
    }
    export class $FallbackResourceManager$PackEntry extends $Record implements $FallbackResourceManagerPackEntryAccessor, $ResourcePackEntry {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$PackEntry}.
     */
    export type $FallbackResourceManager$PackEntry_ = { resources?: $PackResources, name?: string, filter?: $Predicate_<$ResourceLocation>,  } | [resources?: $PackResources, name?: string, filter?: $Predicate_<$ResourceLocation>, ];
    export class $FallbackResourceManager implements $ResourceManager, $ResourcePackLookup$GroupedAccess<any> {
        lightspeed$lookupRead(arg0: $PackResources, arg1: $ResourceLocation_): $IoSupplier<any>;
        lightspeed$lookupContains(arg0: $PackResources, arg1: $ResourceLocation_): boolean;
        lightspeed$canGroup(arg0: $PackResources): boolean;
        lightspeed$lookupFiltered(arg0: $ResourcePackEntry, arg1: $ResourceLocation_): boolean;
        lightspeed$lookupResource(arg0: $PackResources, arg1: $ResourceLocation_, arg2: $IoSupplier_<any>, arg3: number): $Resource;
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        push(resources: $PackResources, filter: $Predicate_<$ResourceLocation>): void;
        push(resources: $PackResources): void;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getNamespaces(): $Set<string>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        pushFilterOnly(name: string, filter: $Predicate_<$ResourceLocation>): void;
        open(location: $ResourceLocation_): $InputStream;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        fallbacks: $List<$FallbackResourceManager$PackEntry>;
        constructor(type: $PackType_, namespace: string);
        get namespaces(): $Set<string>;
    }
    export class $ProfiledReloadInstance extends $SimpleReloadInstance<$ProfiledReloadInstance$State> {
        constructor(resourceManager: $ResourceManager, listeners: $List_<$PreparableReloadListener_>, backgroundExecutor: $Executor_, gameExecutor: $Executor_, alsoWaitedFor: $CompletableFuture<$Unit_>);
    }
    export class $ProfiledReloadInstance$State {
        reloadNanos: $AtomicLong;
        preparationNanos: $AtomicLong;
    }
    export class $ResourceManager$Empty extends $Enum<$ResourceManager$Empty> implements $ResourceManager {
        static values(): $ResourceManager$Empty[];
        static valueOf(arg0: string): $ResourceManager$Empty;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getNamespaces(): $Set<string>;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        open(arg0: $ResourceLocation_): $InputStream;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        static INSTANCE: $ResourceManager$Empty;
        get namespaces(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManager$Empty}.
     */
    export type $ResourceManager$Empty_ = "instance";
    export class $FallbackResourceManager$EntryStack extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$EntryStack}.
     */
    export type $FallbackResourceManager$EntryStack_ = { metadataLocation?: $ResourceLocation_, fileSources?: $List_<$FallbackResourceManager$ResourceWithSource_>, metaSources?: $Map_<$PackResources, $IoSupplier_<$InputStream>>, fileLocation?: $ResourceLocation_,  } | [metadataLocation?: $ResourceLocation_, fileSources?: $List_<$FallbackResourceManager$ResourceWithSource_>, metaSources?: $Map_<$PackResources, $IoSupplier_<$InputStream>>, fileLocation?: $ResourceLocation_, ];
    export class $ReloadableResourceManager implements $ResourceManager, $AutoCloseable {
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getNamespaces(): $Set<string>;
        registerReloadListener(listener: $PreparableReloadListener_): void;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        createReload(backgroundExecutor: $Executor_, gameExecutor: $Executor_, waitingFor: $CompletableFuture<$Unit_>, resourcePacks: $List_<$PackResources>): $ReloadInstance;
        registerReloadListenerIfNotPresent(listener: $PreparableReloadListener_): void;
        open(location: $ResourceLocation_): $InputStream;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        resources: $CloseableResourceManager;
        constructor(type: $PackType_);
        get namespaces(): $Set<string>;
    }
    export class $SimplePreparableReloadListener<T> extends $ContextAwareReloadListener implements $PreparableReloadListener {
        constructor();
    }
    export class $ResourceManager {
    }
    export interface $ResourceManager extends $ResourceProvider, $IFakeIResourceManager$V1, $IFakeIResourceManager$V2 {
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getNamespaces(): $Set<string>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        get namespaces(): $Set<string>;
    }
    export class $Resource implements $IFakeIResource$V1, $IFakeIResource$V2 {
        source(): $PackResources;
        open(): $InputStream;
        sourcePackId(): string;
        metadata(): $ResourceMetadata;
        knownPackInfo(): ($KnownPack) | undefined;
        openAsReader(): $BufferedReader;
        constructor(source: $PackResources, streamSupplier: $IoSupplier_<$InputStream>, metadataSupplier: $IoSupplier_<$ResourceMetadata>);
        constructor(source: $PackResources, streamSupplier: $IoSupplier_<$InputStream>);
    }
    export class $ResourceFilterSection {
        isNamespaceFiltered(namespace: string): boolean;
        isPathFiltered(namespace: string): boolean;
        static TYPE: $MetadataSectionType<$ResourceFilterSection>;
        constructor(blockList: $List_<$ResourceLocationPattern>);
    }
    export class $ReloadInstance {
    }
    export interface $ReloadInstance {
        done(): $CompletableFuture<never>;
        isDone(): boolean;
        getActualProgress(): number;
        checkExceptions(): void;
        get actualProgress(): number;
    }
}
