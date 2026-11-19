import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/dev/shadowsoffire/apotheosis/mixin/client" {
    export class $GuiGraphicsAccessor {
    }
    export interface $GuiGraphicsAccessor {
        setTooltipStack(arg0: $ItemStack_): void;
        getTooltipStack(): $ItemStack;
    }
}
