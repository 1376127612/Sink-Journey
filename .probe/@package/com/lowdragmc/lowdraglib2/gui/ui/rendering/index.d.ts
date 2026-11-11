import { $Scope } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Rect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Consumer_ } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $LDLibGUIContextAccessor } from "@package/io/github/reserveword/imblocker/common/accessor";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Runnable_ } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $Matrix4f, $Quaternionf, $Matrix3x2f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering" {
    export class $UISurface {
        static main(): $UISurface;
        static of(arg0: $ModularUI): $UISurface;
        static current(): $UISurface;
        static push(arg0: $UISurface): $Scope;
        static currentTarget(): $RenderTarget;
    }
    export interface $UISurface {
        target(): $RenderTarget;
        guiScaledWidth(): number;
        guiScaledHeight(): number;
        isMainWindow(): boolean;
        guiScale(): number;
        framebufferHeight(): number;
        framebufferWidth(): number;
        screenWidth(): number;
        screenHeight(): number;
        windowHandle(): number;
        get mainWindow(): boolean;
    }
    export class $EnhancedPoseStack {
        clear(): boolean;
        scale(arg0: number, arg1: number, arg2: number): void;
        last(): $PoseStack$Pose;
        setIdentity(): void;
        rotateAround(arg0: $Quaternionf, arg1: number, arg2: number, arg3: number): void;
        mulPose(arg0: $Quaternionf): void;
        mulPose(arg0: $Matrix4f): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        pushPose(): void;
        popPose(): void;
        pushTransformation(arg0: $Transformation): void;
        setOnTransform(arg0: $Runnable_): $EnhancedPoseStack;
        pose: $PoseStack;
        constructor(arg0: $PoseStack);
        set onTransform(value: $Runnable_);
    }
    export class $UIVisualLayer {
        clear(): void;
        release(): void;
        bind(arg0: $GUIContext): void;
        draw(arg0: $GUIContext): void;
        textureId(): number;
        unbind(): void;
        constructor(arg0: $UIElement);
    }
    export class $GUIContext implements $LDLibGUIContextAccessor {
        static of(arg0: $ModularUI, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: $UISurface): $GUIContext;
        static of(arg0: $ModularUI, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): $GUIContext;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Matrix4f): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        disableScissor(): void;
        resetElementColor(): void;
        drawTexture(arg0: $IGuiTexture_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        popVisualLayer(): void;
        pushVisualLayer(arg0: $UIVisualLayer): void;
        setElementColor(arg0: number): void;
        imblocker$getPose(): $Matrix3x2f;
        postRendering(arg0: $Consumer_<$GUIContext>): void;
        refreshLocalMouse(): void;
        callPostRendering(): void;
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
