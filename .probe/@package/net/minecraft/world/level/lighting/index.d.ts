import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongPredicate_ } from "@package/java/util/function";
import { $LongLinkedOpenHashSet, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $DataLayer, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum, $Object } from "@package/java/lang";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        getLightValue(levelPos: $BlockPos_): number;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(predicate: $LongPredicate_): void;
        getQueueSize(): number;
        static SOURCE: number;
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static getFromLevel(entry: number): number;
        static isFromEmptyShape(entry: number): boolean;
        static increaseSkySourceInDirections(down: boolean, north: boolean, south: boolean, west: boolean, east: boolean): number;
        static shouldPropagateInDirection(entry: number, arg1: $Direction_): boolean;
        static increaseSkipOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static increaseOnlyOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static isIncreaseFromEmission(entry: number): boolean;
        static decreaseSkipOneDirection(level: number, direction: $Direction_): number;
        static decreaseAllDirections(level: number): number;
        static increaseLightFromEmission(level: number, fromEmptyShape: boolean): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        setLayer(sectionPos: number, arg1: $DataLayer): void;
        copyDataLayer(index: number): $DataLayer;
        removeLayer(index: number): $DataLayer;
        getLayer(index: number): $DataLayer;
        copy(): M;
        clearCache(): void;
        disableCache(): void;
        hasLayer(sectionPos: number): boolean;
    }
    export class $LevelLightEngine implements $LightEventListener {
        getDebugSectionType(lightLayer: $LightLayer_, sectionPos: $SectionPos): $LayerLightSectionStorage$SectionType;
        lightOnInSection(sectionPos: $SectionPos): boolean;
        handler$zcp000$sodium_extra$checkBlock(pos: $BlockPos_, ci: $CallbackInfo): void;
        handler$zcp000$sodium_extra$doLightUpdates(cir: $CallbackInfoReturnable<any>): void;
        runLightUpdates(): number;
        checkBlock(pos: $BlockPos_): void;
        getLayerListener(type: $LightLayer_): $LayerLightEventListener;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        setLightEnabled(pos: $ChunkPos, retain: boolean): void;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        hasLightWork(): boolean;
        queueSectionData(lightLayer: $LightLayer_, sectionPos: $SectionPos, dataLayer: $DataLayer | null): void;
        retainData(pos: $ChunkPos, retain: boolean): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        getDebugData(lightLayer: $LightLayer_, sectionPos: $SectionPos): string;
        getMinLightSection(): number;
        getMaxLightSection(): number;
        getLightSectionCount(): number;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunkGetter: $LightChunkGetter, blockLight: boolean, skyLight: boolean);
        get minLightSection(): number;
        get maxLightSection(): number;
        get lightSectionCount(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        constructor(expectedSize: number, loadFactor: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        static MAX_LEVEL: number;
        constructor(chunkSource: $LightChunkGetter);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        runLightUpdates(): number;
        checkBlock(pos: $BlockPos_): void;
        static getOcclusionShape(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, direction: $Direction_): $VoxelShape;
        getLightValue(levelPos: $BlockPos_): number;
        setLightEnabled(chunkPos: $ChunkPos, retainData: boolean): void;
        static getLightBlockInto(level: $BlockGetter, state1: $BlockState_, pos1: $BlockPos_, state2: $BlockState_, pos2: $BlockPos_, direction: $Direction_, defaultReturnValue: number): number;
        static hasDifferentLightProperties(level: $BlockGetter, pos: $BlockPos_, state1: $BlockState_, state2: $BlockState_): boolean;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        hasLightWork(): boolean;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        retainData(chunkPos: $ChunkPos, retainData: boolean): void;
        getDebugData(sectionPos: number): string;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        flywheel$storage(): $Object;
        static MAX_LEVEL: number;
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(value: number, arg1: number): void;
        dequeue(value: number, arg1: number, levelIndex: number): void;
        removeFirstLong(): number;
        constructor(levelCount: number, expectedSize: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        flywheel$skyDataLayer(sectionPos: number): $DataLayer;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        runLightUpdates(): number;
        checkBlock(pos: $BlockPos_): void;
        getLightValue(levelPos: $BlockPos_): number;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        hasLightWork(): boolean;
        propagateLightSources(chunkPos: $ChunkPos): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        runLightUpdates(): number;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        hasLightWork(): boolean;
        propagateLightSources(chunkPos: $ChunkPos): void;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        getDataLayerData(sectionPos: number): $DataLayer;
        retainData(sectionColumnPos: number, arg1: boolean): void;
        flywheel$callGetDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
    }
    export class $ChunkSkyLightSources {
        getLowestSourceY(x: number, z: number): number;
        update(level: $BlockGetter, x: number, y: number, z: number): boolean;
        fillFrom(chunk: $ChunkAccess): void;
        getHighestLowestSourceY(): number;
        static NEGATIVE_INFINITY: number;
        constructor(level: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        static MAX_LEVEL: number;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, storage: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
}
