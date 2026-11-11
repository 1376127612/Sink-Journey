import { $MenuScreens$ScreenConstructor } from "@package/net/minecraft/client/gui/screens";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $Map } from "@package/java/util";

declare module "@package/cn/dancingsnow/neoecoae/mixins/client/accessor" {
    export class $MenuScreensAccessor {
        static neoecoae$getScreens(): $Map<$MenuType<never>, $MenuScreens$ScreenConstructor<never, never>>;
    }
    export interface $MenuScreensAccessor {
    }
}
