import { $PostChain } from "@package/net/minecraft/client/renderer";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/me/flashyreese/mods/sodiumextra/client/render" {
    export class $PaniniProjection {
        isApplying(): boolean;
        transparencyTarget(name: string, nativeTarget: $RenderTarget): $RenderTarget;
        nativeTarget(target: $RenderTarget): $RenderTarget;
        outlineTarget(nativeOutline: $RenderTarget): $RenderTarget;
        isRenderingWorld(): boolean;
        transparencyChain(nativeChain: $PostChain): $PostChain;
        worldTarget(nativeMain: $RenderTarget): $RenderTarget;
        finish(minecraft: $Minecraft, fieldOfView: number, partialTick: number): void;
        begin(minecraft: $Minecraft): void;
        close(): void;
        resize(): void;
        abort(): void;
        forcesViewport(): boolean;
        constructor();
        get applying(): boolean;
        get renderingWorld(): boolean;
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
