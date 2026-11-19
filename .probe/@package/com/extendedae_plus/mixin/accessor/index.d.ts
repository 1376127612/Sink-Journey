import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/extendedae_plus/mixin/accessor" {
    export class $AbstractContainerScreenAccessor<T extends $AbstractContainerMenu> {
    }
    export interface $AbstractContainerScreenAccessor<T extends $AbstractContainerMenu> {
        eap$getLeftPos(): number;
        eap$getTopPos(): number;
        eap$setHoveredSlot(arg0: $Slot): void;
        eap$getImageHeight(): number;
        eap$getImageWidth(): number;
        eap$getHoveredSlot(): $Slot;
    }
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        eap$getFont(): $Font;
        eap$getChildren(): $List<$GuiEventListener>;
        eap$getRenderables(): $List<$Renderable>;
    }
}
