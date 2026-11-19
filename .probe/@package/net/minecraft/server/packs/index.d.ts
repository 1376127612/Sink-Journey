import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FileTime } from "@package/java/nio/file/attribute";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $IoSupplier, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $InclusiveRange, $StringRepresentable, $HttpUtil$DownloadProgressListener, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $BiConsumer, $Consumer, $Consumer_ } from "@package/java/util/function";
import { $IPackResourcesExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Proxy, $URL } from "@package/java/net";
import { $SharedZipFileAccessAccessor } from "@package/com/ccr4ft3r/lightspeed/mixin/resources";
import { $Enum, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $File, $InputStream, $File_ } from "@package/java/io";
import { $HashFunction, $HashCode } from "@package/com/google/common/hash";
import { $ICachingResourcePack } from "@package/org/embeddedt/modernfix/resources";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IPathResourcePack, $IPackResources, $IndexedPackResources } from "@package/com/ccr4ft3r/lightspeed/interfaces";
import { $ZipFile } from "@package/java/util/zip";
import { $SharedZipFileAccessAccessor as $SharedZipFileAccessAccessor$1 } from "@package/org/embeddedt/modernfix/common/mixin/perf/resourcepacks";
import { $Instant } from "@package/java/time";
import { $Pack$Position_, $PackSource, $Pack$Metadata_, $Pack$Position, $KnownPack_, $Pack$ResourcesSupplier, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
export * as repository from "@package/net/minecraft/server/packs/repository";
export * as linkfs from "@package/net/minecraft/server/packs/linkfs";
export * as resources from "@package/net/minecraft/server/packs/resources";
export * as metadata from "@package/net/minecraft/server/packs/metadata";

declare module "@package/net/minecraft/server/packs" {
    export class $VanillaPackResources implements $PackResources, $IPackResources {
        lightspeed$persistAndClearCache(): void;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        handler$bij000$lightspeed$getResourceHeadInjected(arg0: $PackType_, arg1: $Object, arg2: $CallbackInfoReturnable<any>): void;
        handler$bij001$lightspeed$initReturnInjected(arg0: $CallbackInfo): void;
        handler$bij000$lightspeed$getResourceReturnInjected(arg0: $PackType_, arg1: $Object, arg2: $CallbackInfoReturnable<any>): void;
        asProvider(): $ResourceProvider;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        lightspeed$cacheExists(arg0: $PackType_, arg1: string, arg2: boolean): void;
        getNamespaces(type: $PackType_): $Set<string>;
        lightspeed$exists(arg0: $PackType_, arg1: string): boolean;
        listRawPaths(packType: $PackType_, packLocation: $ResourceLocation_, output: $Consumer_<$Path>): void;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $PathPackResources$PathResourcesSupplier implements $Pack$ResourcesSupplier {
        openPrimary(location: $PackLocationInfo_): $PackResources;
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        constructor(content: $Path_);
    }
    export class $DownloadQueue$LogEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$LogEntry}.
     */
    export type $DownloadQueue$LogEntry_ = { id?: $UUID_, errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>, time?: $Instant, hash?: (string) | undefined, url?: string,  } | [id?: $UUID_, errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>, time?: $Instant, hash?: (string) | undefined, url?: string, ];
    export class $DownloadCacheCleaner$PathAndTime extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndTime}.
     */
    export type $DownloadCacheCleaner$PathAndTime_ = { path?: $Path_, modifiedTime?: $FileTime,  } | [path?: $Path_, modifiedTime?: $FileTime, ];
    export class $DownloadCacheCleaner$PathAndPriority extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndPriority}.
     */
    export type $DownloadCacheCleaner$PathAndPriority_ = { path?: $Path_, removalPriority?: number,  } | [path?: $Path_, removalPriority?: number, ];
    export class $DownloadQueue implements $AutoCloseable {
        close(): void;
        downloadBatch(batchConfig: $DownloadQueue$BatchConfig_, downloads: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>): $CompletableFuture<$DownloadQueue$BatchResult>;
        constructor(cacheDir: $Path_);
    }
    export class $DownloadQueue$BatchResult extends $Record {
        downloaded(): $Map<$UUID, $Path>;
        failed(): $Set<$UUID>;
        constructor();
        constructor(arg0: $Map_<$UUID_, $Path_>, arg1: $Set_<$UUID_>);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchResult}.
     */
    export type $DownloadQueue$BatchResult_ = { failed?: $Set_<$UUID_>, downloaded?: $Map_<$UUID_, $Path_>,  } | [failed?: $Set_<$UUID_>, downloaded?: $Map_<$UUID_, $Path_>, ];
    export class $BuiltInMetadata {
        get<T>(serializer: $MetadataSectionSerializer<T>): T;
        static of<T>(serializer: $MetadataSectionSerializer<T>, value: T): $BuiltInMetadata;
        static of<T1, T2>(serializer1: $MetadataSectionSerializer<T1>, value1: T1, serializer2: $MetadataSectionSerializer<T2>, value2: T2): $BuiltInMetadata;
        static of(): $BuiltInMetadata;
    }
    export class $DownloadCacheCleaner {
        static vacuumCacheDir(path: $Path_, maxEntries: number): void;
        constructor();
    }
    export class $CompositePackResources implements $PackResources {
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        isHidden(): boolean;
        constructor(primaryPackResources: $PackResources, packResourcesStack: $List_<$PackResources>);
        get hidden(): boolean;
    }
    export class $FeatureFlagsMetadataSection extends $Record {
        flags(): $FeatureFlagSet;
        static TYPE: $MetadataSectionType<$FeatureFlagsMetadataSection>;
        constructor(arg0: $FeatureFlagSet);
    }
    /**
     * Values that may be interpreted as {@link $FeatureFlagsMetadataSection}.
     */
    export type $FeatureFlagsMetadataSection_ = { flags?: $FeatureFlagSet,  } | [flags?: $FeatureFlagSet, ];
    export class $FilePackResources$SharedZipFileAccess implements $AutoCloseable, $SharedZipFileAccessAccessor$1, $SharedZipFileAccessAccessor {
        getOrCreateZipFile(): $ZipFile;
        close(): void;
        mfix$getOrCreateZipFile(): $ZipFile;
        lightspeed$getOrCreateZipFile(): $ZipFile;
        mfix$getFile(): $File;
        lightspeed$close(): void;
        file: $File;
        constructor(file: $File_);
        get orCreateZipFile(): $ZipFile;
    }
    export class $PackResources {
        static PACK_META: string;
        static METADATA_EXTENSION: string;
    }
    export interface $PackResources extends $AutoCloseable, $IPackResourcesExtension {
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        knownPackInfo(): ($KnownPack) | undefined;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        packId(): string;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
    }
    export class $FilePackResources extends $AbstractPackResources implements $IndexedPackResources {
        lightspeed$containsIndexed(arg0: string, arg1: string, arg2: string): boolean;
        static extractNamespace(directory: string, name: string): string;
        constructor(location: $PackLocationInfo_, zipFileAccess: $FilePackResources$SharedZipFileAccess, prefix: string);
    }
    export class $DownloadQueue$FileInfoEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$FileInfoEntry}.
     */
    export type $DownloadQueue$FileInfoEntry_ = { size?: number, name?: string,  } | [size?: number, name?: string, ];
    export class $OverlayMetadataSection extends $Record {
        overlays(): $List<$OverlayMetadataSection$OverlayEntry>;
        overlaysForVersion(version: number): $List<string>;
        static NEOFORGE_TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        static TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        constructor(overlays: $List_<$OverlayMetadataSection$OverlayEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection}.
     */
    export type $OverlayMetadataSection_ = { overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>,  } | [overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>, ];
    export class $DownloadQueue$BatchConfig extends $Record {
        hashFunction(): $HashFunction;
        proxy(): $Proxy;
        maxSize(): number;
        listener(): $HttpUtil$DownloadProgressListener;
        headers(): $Map<string, string>;
        constructor(arg0: $HashFunction, arg1: number, arg2: $Map_<string, string>, arg3: $Proxy, arg4: $HttpUtil$DownloadProgressListener);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchConfig}.
     */
    export type $DownloadQueue$BatchConfig_ = { hashFunction?: $HashFunction, headers?: $Map_<string, string>, maxSize?: number, proxy?: $Proxy, listener?: $HttpUtil$DownloadProgressListener,  } | [hashFunction?: $HashFunction, headers?: $Map_<string, string>, maxSize?: number, proxy?: $Proxy, listener?: $HttpUtil$DownloadProgressListener, ];
    export class $PackLocationInfo extends $Record {
        knownPackInfo(): ($KnownPack) | undefined;
        id(): string;
        source(): $PackSource;
        title(): $Component;
        createChatLink(enabled: boolean, text: $Component_): $Component;
        constructor(arg0: string, arg1: $Component_, arg2: $PackSource, arg3: ($KnownPack_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PackLocationInfo}.
     */
    export type $PackLocationInfo_ = { source?: $PackSource, id?: string, knownPackInfo?: ($KnownPack_) | undefined, title?: $Component_,  } | [source?: $PackSource, id?: string, knownPackInfo?: ($KnownPack_) | undefined, title?: $Component_, ];
    export class $VanillaPackResourcesBuilder {
        build(location: $PackLocationInfo_): $VanillaPackResources;
        pushClasspathResources(packType: $PackType_, clazz: $Class<never>): $VanillaPackResourcesBuilder;
        applyDevelopmentConfig(): $VanillaPackResourcesBuilder;
        pushUniversalPath(path: $Path_): $VanillaPackResourcesBuilder;
        exposeNamespace(...namespaces: string[]): $VanillaPackResourcesBuilder;
        setMetadata(metadata: $BuiltInMetadata): $VanillaPackResourcesBuilder;
        pushJarResources(): $VanillaPackResourcesBuilder;
        pushAssetPath(packType: $PackType_, path: $Path_): $VanillaPackResourcesBuilder;
        static developmentConfig: $Consumer<$VanillaPackResourcesBuilder>;
        constructor();
        set metadata(value: $BuiltInMetadata);
    }
    export class $PathPackResources extends $AbstractPackResources implements $IPackResources, $IPathResourcePack, $ICachingResourcePack {
        lightspeed$getResolvedPath(...arg0: string[]): $Path;
        lightspeed$setModFile(arg0: $IModFile): void;
        lightspeed$getFilePaths(arg0: $PackType_, arg1: string, arg2: $Path_): $List<any>;
        lightspeed$cacheNamespaces(arg0: $PackType_, arg1: $Set_<any>): void;
        handler$bih000$lightspeed$initReturnInjected(arg0: $PackLocationInfo_, arg1: $Path_, arg2: $CallbackInfo): void;
        handler$bih000$lightspeed$getResourceHeadInjected(arg0: $PackType_, arg1: $ResourceLocation_, arg2: $CallbackInfoReturnable<any>): void;
        lightspeed$hasIndexedResource(arg0: $PackType_, arg1: $ResourceLocation_): boolean;
        lightspeed$getCachedNamespaces(type: $PackType_): $Set<any>;
        lightspeed$getCachedFilePaths(arg0: $PackType_, arg1: string): $List<any>;
        static getResource(location: $ResourceLocation_, path: $Path_): $IoSupplier<$InputStream>;
        handler$bih000$lightspeed$getRootResourceReturnInjected(arg0: string[], arg1: $CallbackInfoReturnable<any>): void;
        handler$bih000$lightspeed$getRootResourceHeadInjected(arg0: string[], arg1: $CallbackInfoReturnable<any>): void;
        handler$bih000$lightspeed$listResourcesHeadInjected(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_, arg4: $CallbackInfo): void;
        handler$bih000$lightspeed$getNamespacesHeadInjected(arg0: $PackType_, arg1: $CallbackInfoReturnable<any>): void;
        handler$bih000$lightspeed$getNamespacesReturnInjected(arg0: $PackType_, arg1: $CallbackInfoReturnable<any>): void;
        invalidateCache(): void;
        static returnFileIfExists(path: $Path_): $IoSupplier<$InputStream>;
        lightspeed$cacheExists(arg0: string, arg1: boolean): void;
        static listPath(namespace: string, namespacePath: $Path_, decomposedPath: $List_<string>, resourceOutput: $PackResources$ResourceOutput_): void;
        static validatePath(path: $Path_): boolean;
        lightspeed$exists(arg0: string): boolean;
        constructor(location: $PackLocationInfo_, root: $Path_);
    }
    export class $FilePackResources$FileResourcesSupplier implements $Pack$ResourcesSupplier {
        openPrimary(location: $PackLocationInfo_): $PackResources;
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        constructor(content: $File_);
        constructor(content: $Path_);
    }
    export class $DownloadQueue$DownloadRequest extends $Record {
        hash(): $HashCode;
        url(): $URL;
        constructor(arg0: $URL, arg1: $HashCode | null);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$DownloadRequest}.
     */
    export type $DownloadQueue$DownloadRequest_ = { url?: $URL, hash?: $HashCode,  } | [url?: $URL, hash?: $HashCode, ];
    export class $PackResources$ResourceOutput {
    }
    export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
    }
    /**
     * Values that may be interpreted as {@link $PackResources$ResourceOutput}.
     */
    export type $PackResources$ResourceOutput_ = (() => void);
    export class $PackType extends $Enum<$PackType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $PackType[];
        static valueOf(arg0: string): $PackType;
        getDirectory(): string;
        getRemappedEnumConstantName(): string;
        static CLIENT_RESOURCES: $PackType;
        static SERVER_DATA: $PackType;
        get serializedName(): string;
        get directory(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackType}.
     */
    export type $PackType_ = "client_resources" | "server_data";
    export class $AbstractPackResources implements $PackResources, $IPackResources {
        lightspeed$persistAndClearCache(): void;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        handler$bie000$lightspeed$initReturnInjected(arg0: $CallbackInfo): void;
        location(): $PackLocationInfo;
        lightspeed$getExistenceByResource(): $Map<any, any>;
        lightspeed$setExistenceByResource(arg0: $Map_<any, any>): void;
        static getMetadataFromStream<T>(deserializer: $MetadataSectionSerializer<T>, inputStream: $InputStream): T;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $PackSelectionConfig extends $Record {
        required(): boolean;
        defaultPosition(): $Pack$Position;
        fixedPosition(): boolean;
        constructor(arg0: boolean, arg1: $Pack$Position_, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PackSelectionConfig}.
     */
    export type $PackSelectionConfig_ = { fixedPosition?: boolean, defaultPosition?: $Pack$Position_, required?: boolean,  } | [fixedPosition?: boolean, defaultPosition?: $Pack$Position_, required?: boolean, ];
    export class $OverlayMetadataSection$OverlayEntry extends $Record {
        isApplicable(version: number): boolean;
        format(): $InclusiveRange<number>;
        overlay(): string;
        static CODEC: $Codec<$OverlayMetadataSection$OverlayEntry>;
        constructor(format: $InclusiveRange_<number>, overlay: string);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection$OverlayEntry}.
     */
    export type $OverlayMetadataSection$OverlayEntry_ = { overlay?: string, format?: $InclusiveRange_<number>,  } | [overlay?: string, format?: $InclusiveRange_<number>, ];
}
