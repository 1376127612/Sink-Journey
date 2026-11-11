import { $AbstractRenderTexture } from "@package/hellfirepvp/astralsorcery/client/resource";
import { $ResearchNode } from "@package/hellfirepvp/astralsorcery/common/research";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $TomePagesScreen } from "@package/hellfirepvp/astralsorcery/client/screen/tome";

declare module "@package/hellfirepvp/astralsorcery/client/screen/tome/page" {
    export class $RenderPage {
        init(arg0: $TomePagesScreen, arg1: number, arg2: number): void;
        preRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        postRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        tick(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        propagateMouseDrag(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        propagateMouseClick(arg0: number, arg1: number): boolean;
        propagateMouseScroll(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        renderPageOverlay(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $AbstractRenderTexture): void;
        static getFontRenderer(): $Font;
        constructor(arg0: $ResearchNode | null, arg1: number);
        static get fontRenderer(): $Font;
    }
}
