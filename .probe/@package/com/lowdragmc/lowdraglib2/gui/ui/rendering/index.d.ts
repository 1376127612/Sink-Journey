import { $Consumer_ } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Scope } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Runnable_ } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $Rect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Matrix4f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering" {
    export class $UISurface {
        static main(): $UISurface;
        static of(arg0: $ModularUI): $UISurface;
        static current(): $UISurface;
        static push(arg0: $UISurface): $Scope;
        static currentTarget(): $RenderTarget;
    }
    export interface $UISurface {
        screenHeight(): number;
        screenWidth(): number;
        windowHandle(): number;
        target(): $RenderTarget;
        guiScaledHeight(): number;
        isMainWindow(): boolean;
        guiScaledWidth(): number;
        guiScale(): number;
        framebufferWidth(): number;
        framebufferHeight(): number;
        get mainWindow(): boolean;
    }
    export class $EnhancedPoseStack {
        rotateAround(arg0: $Quaternionf, arg1: number, arg2: number, arg3: number): void;
        setOnTransform(arg0: $Runnable_): $EnhancedPoseStack;
        clear(): boolean;
        scale(arg0: number, arg1: number, arg2: number): void;
        last(): $PoseStack$Pose;
        mulPose(arg0: $Quaternionf): void;
        mulPose(arg0: $Matrix4f): void;
        setIdentity(): void;
        pushPose(): void;
        popPose(): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        pushTransformation(arg0: $Transformation): void;
        pose: $PoseStack;
        constructor(arg0: $PoseStack);
        set onTransform(value: $Runnable_);
    }
    export class $UIVisualLayer {
        clear(): void;
        release(): void;
        bind(arg0: $GUIContext): void;
        unbind(): void;
        draw(arg0: $GUIContext): void;
        textureId(): number;
        constructor(arg0: $UIElement);
    }
    export class $GUIContext {
        postRendering(arg0: $Consumer_<$GUIContext>): void;
        pushVisualLayer(arg0: $UIVisualLayer): void;
        popVisualLayer(): void;
        setElementColor(arg0: number): void;
        resetElementColor(): void;
        drawTexture(arg0: $IGuiTexture_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        refreshLocalMouse(): void;
        callPostRendering(): void;
        static of(arg0: $ModularUI, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): $GUIContext;
        static of(arg0: $ModularUI, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: $UISurface): $GUIContext;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Matrix4f): void;
        disableScissor(): void;
        mouseX: number;
        surface: $UISurface;
        visualLayers: $ObjectArrayList<$UIVisualLayer>;
        modularUI: $ModularUI;
        pose: $EnhancedPoseStack;
        mouseY: number;
        localMouseY: number;
        scissorStack: $ObjectArrayList<$Rect>;
        graphics: $GuiGraphics;
        localMouseX: number;
        elementColor: number;
        partialTick: number;
        mc: $Minecraft;
        constructor();
    }
}
