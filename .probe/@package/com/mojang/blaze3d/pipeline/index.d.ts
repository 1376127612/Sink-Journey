import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt {
        finalize(): void;
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        checkStatus(): void;
        unbindWrite(): void;
        blitToScreen(width: number, height: number): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        destroyBuffers(): void;
        unbindRead(): void;
        bindRead(): void;
        bindWrite(useDepth: boolean): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        setFilterMode(filterMode: number): void;
        isStencilEnabled(): boolean;
        getColorTextureId(): number;
        enableStencil(): void;
        getDepthTextureId(): number;
        handler$dap000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        iris$getColorBufferVersion(): number;
        iris$getDepthBufferVersion(): number;
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        stencilEnabled: boolean;
        constructor(useDepth: boolean);
        get colorTextureId(): number;
        get depthTextureId(): number;
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        stencilEnabled: boolean;
        constructor(width: number, height: number);
    }
    export class $RenderPipeline {
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        recordRenderCall(renderCall: $RenderCall_): void;
        beginRecording(): boolean;
        endRecording(): void;
        processRecordedQueue(): void;
        endProcessing(): void;
        beginProcessing(): boolean;
        canBeginRecording(): boolean;
        canBeginProcessing(): boolean;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        constructor();
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        stencilEnabled: boolean;
        constructor(width: number, height: number, useDepth: boolean, clearError: boolean);
    }
}
