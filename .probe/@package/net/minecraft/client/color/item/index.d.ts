import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $Item, $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $BlockColors } from "@package/net/minecraft/client/color/block";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ItemColorsExtension {
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        modifyExpressionValue$dfg000$astages$getItem(item: $Item_): $Item;
        modify$dfg000$astages$getColor(stack: $ItemStack_): $ItemStack;
        /**
         * @deprecated
         */
        register(itemColor: $ItemColor_, ...items: $ItemLike_[]): void;
        getColor(stack: $ItemStack_, tintIndex: number): number;
        static createDefault(colors: $BlockColors): $ItemColors;
        constructor();
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(stack: $ItemStack_, tintIndex: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
