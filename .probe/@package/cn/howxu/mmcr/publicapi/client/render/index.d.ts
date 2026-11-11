import { $BlockPos, $Direction } from "@package/net/minecraft/core";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $DataKey } from "@package/cn/howxu/mmcr/publicapi/data";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RuntimeFailure } from "@package/cn/howxu/mmcr/publicapi/runtime";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum } from "@package/java/lang";
import { $Map } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/client/render" {
    export class $ControllerRenderContext {
    }
    export interface $ControllerRenderContext {
        lightCoords(): number;
        structure(): $ControllerRenderContext$StructureView;
        partialTick(): number;
        crafting(): $ControllerRenderContext$CraftingView;
        facing(): $Direction;
        machineId(): $ResourceLocation;
        controllerPos(): $BlockPos;
        dataStorageValues(): $Map<string, $DataKey>;
    }
    export class $ControllerRenderContext$CraftingView {
    }
    export interface $ControllerRenderContext$CraftingView {
        status(): $ControllerRenderContext$Status;
        failure(): $RuntimeFailure;
        parallelism(): number;
        tick(): number;
        recipeId(): $ResourceLocation;
        maxParallelism(): number;
        statusMessage(): string;
        totalTick(): number;
    }
    export class $ControllerRenderContext$StructureView {
    }
    export interface $ControllerRenderContext$StructureView {
        formed(): boolean;
        structureAreaLoaded(): boolean;
        matchedStage(): number;
    }
    export class $ControllerRenderer {
    }
    export interface $ControllerRenderer {
        render(context: $ControllerRenderContext, poses: $PoseStack, buffers: $MultiBufferSource_, light: number, overlay: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(): boolean;
        get viewDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $ControllerRenderer}.
     */
    export type $ControllerRenderer_ = ((context: $ControllerRenderContext, poses: $PoseStack, buffers: $MultiBufferSource, light: number, overlay: number) => void);
    export class $ControllerRenderContext$Status extends $Enum<$ControllerRenderContext$Status> {
        static values(): $ControllerRenderContext$Status[];
        static valueOf(name: string): $ControllerRenderContext$Status;
        static PAUSED: $ControllerRenderContext$Status;
        static NO_RECIPE: $ControllerRenderContext$Status;
        static IDLE: $ControllerRenderContext$Status;
        static MISSING_STRUCTURE: $ControllerRenderContext$Status;
        static CRAFTING: $ControllerRenderContext$Status;
        static CHUNK_UNLOADED: $ControllerRenderContext$Status;
    }
    /**
     * Values that may be interpreted as {@link $ControllerRenderContext$Status}.
     */
    export type $ControllerRenderContext$Status_ = "idle" | "crafting" | "missing_structure" | "chunk_unloaded" | "no_recipe" | "paused";
    export class $RendererRegistrar {
    }
    export interface $RendererRegistrar {
        register(machineId: $ResourceLocation_, renderer: $ControllerRenderer_): void;
        renderers(): $Map<$ResourceLocation, $ControllerRenderer>;
    }
}
