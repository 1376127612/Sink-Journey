import { $Slot } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/earth/terrarium/adastra/client/screens/base" {
    export class $AbstractContainerScreenExtension {
    }
    export interface $AbstractContainerScreenExtension {
        adastra$renderPreSlot(arg0: $GuiGraphics, arg1: $Slot): void;
    }
}
