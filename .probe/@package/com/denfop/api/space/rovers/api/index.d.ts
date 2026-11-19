import { $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EnumTypeRovers, $EnumRoversLevel, $EnumTypeUpgrade } from "@package/com/denfop/api/space/rovers/enums";
import { $List } from "@package/java/util";

declare module "@package/com/denfop/api/space/rovers/api" {
    export class $IRoversItem {
    }
    export interface $IRoversItem {
        getUpgradeModules(): $List<$EnumTypeUpgrade>;
        getAddProgress(): number;
        getName(): string;
        getType(): $EnumTypeRovers;
        getLevel(): $EnumRoversLevel;
        getFluidHandler(arg0: $ItemStack_): $IFluidHandlerItem;
        get upgradeModules(): $List<$EnumTypeUpgrade>;
        get addProgress(): number;
        get name(): string;
        get type(): $EnumTypeRovers;
        get level(): $EnumRoversLevel;
    }
}
