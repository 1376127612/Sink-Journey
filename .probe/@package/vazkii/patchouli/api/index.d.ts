import { $Event } from "@package/net/neoforged/bus/api";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/vazkii/patchouli/api" {
    export class $BookContentsReloadEvent extends $Event {
        getBook(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        get book(): $ResourceLocation;
    }
    export class $BookDrawScreenEvent extends $Event {
        getMouseX(): number;
        getMouseY(): number;
        getGraphics(): $GuiGraphics;
        getScreen(): $Screen;
        getBook(): $ResourceLocation;
        getPartialTicks(): number;
        constructor(arg0: $ResourceLocation_, arg1: $Screen, arg2: number, arg3: number, arg4: number, arg5: $GuiGraphics);
        get mouseX(): number;
        get mouseY(): number;
        get graphics(): $GuiGraphics;
        get screen(): $Screen;
        get book(): $ResourceLocation;
        get partialTicks(): number;
    }
}
