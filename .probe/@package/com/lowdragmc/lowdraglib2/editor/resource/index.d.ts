import { $File, $File_ } from "@package/java/io";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Pattern } from "@package/java/util/regex";
import { $Spliterator, $Iterator, $List, $List_, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $Dialog } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $BiConsumer_, $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $IRenderer } from "@package/com/lowdragmc/lowdraglib2/client/renderer";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceContainer, $ResourceProviderContainer } from "@package/com/lowdragmc/lowdraglib2/editor/ui/resource";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum, $Record, $Runnable_, $Iterable } from "@package/java/lang";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/lowdragmc/lowdraglib2/editor/resource" {
    export class $ResourceImportContext<T> {
        suggestedName(): string;
        getResource(): $Resource<T>;
        cancel(): void;
        fail(arg0: string): void;
        getFile(): $File;
        getOwner(): $UIElement;
        complete(arg0: string, arg1: T): void;
        complete(arg0: T): void;
        getProvider(): $IResourceProvider<T>;
        getEditor(): $Editor;
        constructor(arg0: $Resource<T>, arg1: $IResourceProvider<T>, arg2: $File_, arg3: $UIElement, arg4: $Editor, arg5: $BiConsumer_<string, T>, arg6: $Runnable_);
        get resource(): $Resource<T>;
        get file(): $File;
        get owner(): $UIElement;
        get provider(): $IResourceProvider<T>;
        get editor(): $Editor;
    }
    export class $ResourceInstance$ResourceEntry<T> extends $Record {
        getResourceName(): string;
        getResource(): T;
        provider(): $IResourceProvider<T>;
        path(): $IResourcePath;
        constructor(provider: $IResourceProvider<T>, path: $IResourcePath);
        get resourceName(): string;
        get resource(): T;
    }
    /**
     * Values that may be interpreted as {@link $ResourceInstance$ResourceEntry}.
     */
    export type $ResourceInstance$ResourceEntry_<T> = { path?: $IResourcePath, provider?: $IResourceProvider<any>,  } | [path?: $IResourcePath, provider?: $IResourceProvider<any>, ];
    export class $IResourcePath {
        static parse(arg0: string): $IResourcePath;
        static CODEC: $Codec<$IResourcePath>;
        static PATH_WITH_TYPE_PATTERN: $Pattern;
        /**
         * @deprecated
         */
        static V0: $Codec<$IResourcePath>;
        /**
         * @deprecated
         */
        static V1: $Codec<$IResourcePath>;
        static V2: $Codec<$IResourcePath>;
    }
    export interface $IResourcePath {
        getResourceName(): string;
        getPathWithType(): string;
        getType(): $ResourceProviderType;
        getPath(): string;
        get resourceName(): string;
        get pathWithType(): string;
        get type(): $ResourceProviderType;
        get path(): string;
    }
    export class $EditorResourceEvent extends $Event implements $IModBusEvent {
        resourceInstance: $ResourceInstance<never>;
        constructor(arg0: $ResourceInstance<never>);
    }
    export class $IRendererResource extends $Resource<$IRenderer> {
        reloadResourcesAndRefreshOpenedContainers(): void;
        serializeResource(arg0: $IRenderer, arg1: $HolderLookup$Provider): $Tag;
        refreshOpenedContainers(): void;
        onAdditionalModel(arg0: $Consumer_<$ModelResourceLocation>): void;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): $IRenderer;
        onPrepareTextureAtlas(arg0: $ResourceLocation_, arg1: $Consumer_<$ResourceLocation>): void;
        static INSTANCE: $IRendererResource;
        constructor();
    }
    export class $Resource<T> {
        getIcon(): $IGuiTexture;
        getResourceInstance(): $ResourceInstance<T>;
        serializeResource(arg0: T, arg1: $HolderLookup$Provider): $Tag;
        setDefaultDisplayMode(arg0: $Resource$DisplayMode_): void;
        getDefaultDisplayMode(): $Resource$DisplayMode;
        importFile(arg0: $ResourceImportContext<T>): void;
        createResourceProviderContainer(arg0: $IResourceProvider<T>): $ResourceProviderContainer<T>;
        canImportFile(arg0: $File_): boolean;
        getDefaultUIWidth(): number;
        setDefaultUIWidth(arg0: number): void;
        buildBuiltin(arg0: $BuiltinResourceProvider<T>): void;
        buildBuiltin(arg0: $ResourceInstance<T>): void;
        getName(): string;
        getDisplayName(): $Component;
        getFileExtension(): string;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): T;
        constructor();
        get icon(): $IGuiTexture;
        get resourceInstance(): $ResourceInstance<T>;
        get name(): string;
        get displayName(): $Component;
        get fileExtension(): string;
    }
    export class $EditorResourceEvent$LoadBuiltin extends $EditorResourceEvent {
        resourceInstance: $ResourceInstance<never>;
        constructor<T>(arg0: $ResourceInstance<T>);
    }
    export class $Resource$SortMode extends $Enum<$Resource$SortMode> {
        static values(): $Resource$SortMode[];
        static valueOf(arg0: string): $Resource$SortMode;
        static SIZE: $Resource$SortMode;
        static MODIFIED: $Resource$SortMode;
        static DEFAULT: $Resource$SortMode;
        fileBased: boolean;
        static NAME: $Resource$SortMode;
    }
    /**
     * Values that may be interpreted as {@link $Resource$SortMode}.
     */
    export type $Resource$SortMode_ = "default" | "name" | "modified" | "size";
    export class $BuiltinResourceProvider<T> extends $ResourceProvider<T> {
        resourceInstance: $ResourceInstance<T>;
        name: string;
        static TYPE: $ResourceProviderType;
        constructor(arg0: string, arg1: $ResourceInstance<T>);
    }
    export class $Resources {
        static of(...arg0: $Resource<never>[]): $Resources;
        resources: $ImmutableList<$Resource<never>>;
        static EMPTY: $Resources;
        constructor(arg0: $List_<$Resource<never>>);
    }
    export class $ColorsResource extends $Resource<number> {
        serializeResource(arg0: number, arg1: $HolderLookup$Provider): $Tag;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): number;
        static INSTANCE: $ColorsResource;
        constructor();
    }
    export class $ResourceProviderType {
        supportCustom(): boolean;
        onCreateCustom<T>(arg0: $ResourceContainer<T>): void;
        getIcon(): $IGuiTexture;
        fromNbt<T>(arg0: $ResourceInstance<T>, arg1: $CompoundTag_): $ResourceProvider<T>;
        createFullPath(arg0: string): $IResourcePath;
        getTypeName(): string;
        constructor();
        get icon(): $IGuiTexture;
        get typeName(): string;
    }
    export class $IResourceProvider<T> {
    }
    export interface $IResourceProvider<T> extends $Iterable<$Map$Entry<$IResourcePath, T>> {
        hasResource(arg0: $IResourcePath): boolean;
        getResourceName(arg0: $IResourcePath): string;
        canEdit(arg0: $IResourcePath): boolean;
        getResourceInstance(): $ResourceInstance<$Map$Entry<$IResourcePath, T>>;
        serializeNBT(): $CompoundTag;
        getLoadedResource(arg0: $IResourcePath): $Map$Entry<$IResourcePath, T>;
        removeResource(arg0: $IResourcePath): $Map$Entry<$IResourcePath, T>;
        getName(): string;
        getResource(arg0: $IResourcePath): $Map$Entry<$IResourcePath, T>;
        getType(): $ResourceProviderType;
        createSubPath(arg0: string): $IResourcePath;
        addResource(arg0: $IResourcePath, arg1: $Map$Entry<$IResourcePath, T>): boolean;
        createProviderToggle(): $UIElement;
        getResourceOrDefault(arg0: $IResourcePath, arg1: $Map$Entry<$IResourcePath, T>): $Map$Entry<$IResourcePath, T>;
        getResourceOrSupply(arg0: $IResourcePath, arg1: $Supplier_<$Map$Entry<$IResourcePath, T>>): $Map$Entry<$IResourcePath, T>;
        canRemove(arg0: $IResourcePath): boolean;
        onMenu(arg0: $TreeBuilder$Menu): void;
        canRename(arg0: $IResourcePath): boolean;
        canCopy(arg0: $IResourcePath): boolean;
        supportAdd(): boolean;
        checkAndUpdateResourceProvider(): boolean;
        get resourceInstance(): $ResourceInstance<$Map$Entry<$IResourcePath, T>>;
        get name(): string;
        get type(): $ResourceProviderType;
    }
    export class $ResourceInstance<T> implements $INBTSerializable<$CompoundTag> {
        addBuiltinProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        addCustomProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        listAllResources(): $List<$Map$Entry<$IResourcePath, $CompoundTag>>;
        createSelectorDialog(arg0: number, arg1: number, arg2: $Consumer_<$CompoundTag>, arg3: $Runnable_, arg4: $IResourcePath): $Dialog;
        createSelectorDialog(arg0: number, arg1: number, arg2: $Consumer_<$CompoundTag>, arg3: $Runnable_, arg4: $CompoundTag_): $Dialog;
        createSelectorDialog(arg0: number, arg1: number, arg2: $Consumer_<$CompoundTag>, arg3: $Runnable_): $Dialog;
        saveSettings(): void;
        findResourcePath(arg0: $CompoundTag_): $IResourcePath;
        listWritableProviders(): $List<$IResourceProvider<$CompoundTag>>;
        getUiWidth(): number;
        setUiWidth(arg0: number): void;
        setUiWidth(arg0: number, arg1: boolean): void;
        writeUnowned(arg0: $IResourcePath, arg1: $CompoundTag_): boolean;
        getCustomProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        findResourceEntry(arg0: $CompoundTag_): $ResourceInstance$ResourceEntry<$CompoundTag>;
        setSortAscending(arg0: boolean): void;
        getSortMode(): $Resource$SortMode;
        setSortMode(arg0: $Resource$SortMode_): void;
        isSortAscending(): boolean;
        listAllResourceEntries(): $List<$ResourceInstance$ResourceEntry<$CompoundTag>>;
        removeCustomProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        removeUnlistedProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getProvidersVersion(): number;
        removeBuiltinProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        addUnlistedProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getBuiltinProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        getResource(arg0: $IResourcePath): $CompoundTag;
        getDisplayMode(): $Resource$DisplayMode;
        setDisplayMode(arg0: $Resource$DisplayMode_): void;
        clearCache(): void;
        resource: $Resource<$CompoundTag>;
        constructor(arg0: $Resource<$CompoundTag_>);
        get customProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        get providersVersion(): number;
        get builtinProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
    }
    export class $Resource$DisplayMode extends $Enum<$Resource$DisplayMode> {
        static values(): $Resource$DisplayMode[];
        static valueOf(arg0: string): $Resource$DisplayMode;
        static GRID: $Resource$DisplayMode;
        static LIST: $Resource$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Resource$DisplayMode}.
     */
    export type $Resource$DisplayMode_ = "list" | "grid";
    export class $TexturesResource extends $Resource<$IGuiTexture> {
        serializeResource(arg0: $IGuiTexture_, arg1: $HolderLookup$Provider): $Tag;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): $IGuiTexture;
        static IMAGE_EXTENSIONS: $Set<string>;
        static INSTANCE: $TexturesResource;
        constructor();
    }
    export class $ResourceProvider<T> implements $IResourceProvider<T> {
        supportResourcePath(arg0: $IResourcePath): boolean;
        hasResource(arg0: $IResourcePath): boolean;
        canEdit(arg0: $IResourcePath): boolean;
        getResourceInstance(): $ResourceInstance<T>;
        getLoadedResource(arg0: $IResourcePath): T;
        removeResource(arg0: $IResourcePath): T;
        removeResource(arg0: string): T;
        iterator(): $Iterator<$Map$Entry<$IResourcePath, T>>;
        getResource(arg0: $IResourcePath): T;
        getContents(): $Map<$IResourcePath, T>;
        addResource(arg0: string, arg1: T): boolean;
        addResource(arg0: $IResourcePath, arg1: T): boolean;
        canRemove(arg0: $IResourcePath): boolean;
        canRename(arg0: $IResourcePath): boolean;
        canCopy(arg0: $IResourcePath): boolean;
        getResourceName(arg0: $IResourcePath): string;
        serializeNBT(): $CompoundTag;
        createProviderToggle(): $UIElement;
        getResourceOrDefault(arg0: $IResourcePath, arg1: T): T;
        getResourceOrSupply(arg0: $IResourcePath, arg1: $Supplier_<T>): T;
        onMenu(arg0: $TreeBuilder$Menu): void;
        supportAdd(): boolean;
        checkAndUpdateResourceProvider(): boolean;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        resourceInstance: $ResourceInstance<T>;
        [Symbol.iterator](): Iterator<$Map$Entry<$IResourcePath, T>>
        get contents(): $Map<$IResourcePath, T>;
    }
    export class $UIResource extends $Resource<$UITemplate> {
        serializeResource(arg0: $UITemplate, arg1: $HolderLookup$Provider): $Tag;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): $UITemplate;
        static INSTANCE: $UIResource;
        constructor();
    }
}
