import { $Level } from "@package/net/minecraft/world/level";
import { $Container, $MenuProvider } from "@package/net/minecraft/world";
import { $ContainerMenuBase } from "@package/com/denfop/containermenu";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $ScreenIndustrialUpgrade } from "@package/com/denfop/screen";

declare module "@package/com/denfop/api/container" {
    export class $CustomWorldContainer {
    }
    export interface $CustomWorldContainer extends $Container, $MenuProvider {
        getWorld(): $Level;
        getGui(arg0: $Player, arg1: $ContainerMenuBase<$CustomWorldContainer>): $ScreenIndustrialUpgrade<$ContainerMenuBase<$CustomWorldContainer>>;
        getContainerId(): number;
        getMenuType(): $MenuType<never>;
        addInventorySlot(arg0: $Inventory): void;
        getGuiContainer(arg0: $Player): $ContainerMenuBase<never>;
        get world(): $Level;
        get containerId(): number;
        get menuType(): $MenuType<never>;
    }
}
