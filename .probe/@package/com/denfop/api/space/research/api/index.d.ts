import { $Level } from "@package/net/minecraft/world/level";
import { $IBody, $EnumLevels, $EnumLevels_ } from "@package/com/denfop/api/space";
import { $BlockPos } from "@package/net/minecraft/core";
import { $IRoversItem } from "@package/com/denfop/api/space/rovers/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Inventory } from "@package/com/denfop/inventory";
import { $SpaceOperation } from "@package/com/denfop/api/space/fakebody";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $UUID, $Map } from "@package/java/util";

declare module "@package/com/denfop/api/space/research/api" {
    export class $IResearchTable {
    }
    export interface $IResearchTable {
        setLevel(arg0: $EnumLevels_): void;
        getPlayer(): $UUID;
        getLevelTable(): $EnumLevels;
        getSpaceBody(): $Map<$IBody, $SpaceOperation>;
        set level(value: $EnumLevels_);
        get player(): $UUID;
        get levelTable(): $EnumLevels;
        get spaceBody(): $Map<$IBody, $SpaceOperation>;
    }
    export class $IRocketLaunchPad {
    }
    export interface $IRocketLaunchPad {
        getPos(): $BlockPos;
        charge(arg0: $ItemStack_): void;
        getPlayer(): $UUID;
        refuel(arg0: $ItemStack_, arg1: $IRoversItem): void;
        addFluidStack(arg0: $FluidStack_): void;
        getRover(): $IRoversItem;
        getRoverStack(): $ItemStack;
        getRoverSlot(): $Inventory;
        getWorldPad(): $Level;
        getSlotOutput(): $InventoryOutput;
        addDataRocket(arg0: $ItemStack_): void;
        consumeRover(): void;
        get pos(): $BlockPos;
        get player(): $UUID;
        get rover(): $IRoversItem;
        get roverStack(): $ItemStack;
        get roverSlot(): $Inventory;
        get worldPad(): $Level;
        get slotOutput(): $InventoryOutput;
    }
}
