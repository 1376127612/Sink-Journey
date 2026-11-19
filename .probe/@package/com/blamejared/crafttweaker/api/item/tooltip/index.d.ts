import { $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemStack } from "@package/com/blamejared/crafttweaker/api/item";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/blamejared/crafttweaker/api/item/tooltip" {
    export class $ITooltipFunction {
    }
    export interface $ITooltipFunction {
        apply(arg0: $IItemStack, arg1: $List_<$Component_>, arg2: $Item$TooltipContext, arg3: $TooltipFlag): void;
    }
    /**
     * Values that may be interpreted as {@link $ITooltipFunction}.
     */
    export type $ITooltipFunction_ = ((arg0: $IItemStack, arg1: $List<$Component>, arg2: $Item$TooltipContext, arg3: $TooltipFlag) => void);
}
