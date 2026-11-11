import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $Inventory } from "@package/com/denfop/inventory";
import { $List_ } from "@package/java/util";

declare module "@package/com/denfop/api/recipe" {
    export class $InventoryOutput extends $Inventory {
        add(arg0: $ItemStack_, arg1: number): void;
        add(arg0: $List_<$ItemStack_>, arg1: number): boolean;
        addWithoutIgnoring(arg0: $List_<$ItemStack_>, arg1: boolean): boolean;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: number);
    }
}
