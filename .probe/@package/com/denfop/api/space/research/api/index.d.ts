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
        getLevelTable(): $EnumLevels;
        getSpaceBody(): $Map<$IBody, $SpaceOperation>;
        setLevel(arg0: $EnumLevels_): void;
        getPlayer(): $UUID;
        get levelTable(): $EnumLevels;
        get spaceBody(): $Map<$IBody, $SpaceOperation>;
        set level(value: $EnumLevels_);
        get player(): $UUID;
    }
    export class $IRocketLaunchPad {
    }
    export interface $IRocketLaunchPad {
        getPos(): $BlockPos;
        addFluidStack(arg0: $FluidStack_): void;
        refuel(arg0: $ItemStack_, arg1: $IRoversItem): void;
        getRover(): $IRoversItem;
        getSlotOutput(): $InventoryOutput;
        consumeRover(): void;
        addDataRocket(arg0: $ItemStack_): void;
        getRoverStack(): $ItemStack;
        getRoverSlot(): $Inventory;
        getWorldPad(): $Level;
        charge(arg0: $ItemStack_): void;
        getPlayer(): $UUID;
        get pos(): $BlockPos;
        get rover(): $IRoversItem;
        get slotOutput(): $InventoryOutput;
        get roverStack(): $ItemStack;
        get roverSlot(): $Inventory;
        get worldPad(): $Level;
        get player(): $UUID;
    }
}
