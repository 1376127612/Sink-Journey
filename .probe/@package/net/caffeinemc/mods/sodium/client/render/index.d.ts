import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockDestructionProgress } from "@package/net/minecraft/server/level";
import { $ChunkRenderMatrices_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $RenderType, $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LocalBooleanRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Camera, $Minecraft } from "@package/net/minecraft/client";
import { $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $SortedSet, $Collection } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as viewport from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
export * as texture from "@package/net/caffeinemc/mods/sodium/client/render/texture";
export * as chunk from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/vertex";

declare module "@package/net/caffeinemc/mods/sodium/client/render" {
    export class $SodiumWorldRenderer {
        static instance(): $SodiumWorldRenderer;
        setupTerrain(arg0: $Camera, arg1: $Viewport, arg2: boolean, arg3: boolean): void;
        reload(): void;
        isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        setLevel(arg0: $ClientLevel): void;
        scheduleRebuildForBlockArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        iterateVisibleBlockEntities(arg0: $Consumer_<$BlockEntity>): void;
        drawChunkLayer(arg0: $RenderType, arg1: $ChunkRenderMatrices_, arg2: number, arg3: number, arg4: number): void;
        isSectionReady(arg0: number, arg1: number, arg2: number): boolean;
        scheduleRebuildForChunk(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        scheduleRebuildForChunks(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        getChunksDebugString(): string;
        scheduleTerrainUpdate(): void;
        renderBlockEntities(arg0: $PoseStack, arg1: $RenderBuffers, arg2: $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>, arg3: $Camera, arg4: number, arg5: $LocalBooleanRef): void;
        getVisibleChunkCount(): number;
        isTerrainRenderComplete(): boolean;
        isEntityVisible(arg0: $Entity): boolean;
        static instanceNullable(): $SodiumWorldRenderer;
        getDebugStrings(): $Collection<string>;
        constructor(arg0: $Minecraft);
        set level(value: $ClientLevel);
        get chunksDebugString(): string;
        get visibleChunkCount(): number;
        get terrainRenderComplete(): boolean;
        get debugStrings(): $Collection<string>;
    }
}
