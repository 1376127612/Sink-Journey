import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/extendedae_plus/mixin/accessor" {
    export class $AbstractContainerScreenAccessor<T extends $AbstractContainerMenu> {
    }
    export interface $AbstractContainerScreenAccessor<T extends $AbstractContainerMenu> {
        eap$getImageHeight(): number;
        eap$getLeftPos(): number;
        eap$getTopPos(): number;
        eap$getImageWidth(): number;
        eap$getHoveredSlot(): $Slot;
        eap$setHoveredSlot(arg0: $Slot): void;
    }
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        eap$getRenderables(): $List<$Renderable>;
        eap$getChildren(): $List<$GuiEventListener>;
        eap$getFont(): $Font;
    }
}
