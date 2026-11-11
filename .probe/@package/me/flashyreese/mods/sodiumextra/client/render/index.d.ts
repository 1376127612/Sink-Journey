import { $PostChain } from "@package/net/minecraft/client/renderer";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/me/flashyreese/mods/sodiumextra/client/render" {
    export class $PaniniProjection {
        finish(minecraft: $Minecraft, fieldOfView: number, partialTick: number): void;
        begin(minecraft: $Minecraft): void;
        close(): void;
        resize(): void;
        isRenderingWorld(): boolean;
        outlineTarget(nativeOutline: $RenderTarget): $RenderTarget;
        nativeTarget(target: $RenderTarget): $RenderTarget;
        transparencyTarget(name: string, nativeTarget: $RenderTarget): $RenderTarget;
        abort(): void;
        transparencyChain(nativeChain: $PostChain): $PostChain;
        worldTarget(nativeMain: $RenderTarget): $RenderTarget;
        forcesViewport(): boolean;
        isApplying(): boolean;
        constructor();
        get renderingWorld(): boolean;
        get applying(): boolean;
    }
    export class $EntityOutlineState {
    }
    export interface $EntityOutlineState {
        sodiumExtra$hasEntityOutline(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EntityOutlineState}.
     */
    export type $EntityOutlineState_ = (() => boolean);
}
