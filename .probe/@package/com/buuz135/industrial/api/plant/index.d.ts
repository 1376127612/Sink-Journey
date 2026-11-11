import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $List } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/com/buuz135/industrial/api/plant" {
    export interface $PlantRecollectable extends RegistryMarked<RegistryTypes.IndustrialforegoingPlantRecollectableTag, RegistryTypes.IndustrialforegoingPlantRecollectable> {}
    export class $PlantRecollectable$Type extends $Enum<$PlantRecollectable$Type> {
        static values(): $PlantRecollectable$Type[];
        static valueOf(arg0: string): $PlantRecollectable$Type;
        static PLANT: $PlantRecollectable$Type;
        static TREE: $PlantRecollectable$Type;
        static ANY: $PlantRecollectable$Type;
    }
    /**
     * Values that may be interpreted as {@link $PlantRecollectable$Type}.
     */
    export type $PlantRecollectable$Type_ = "tree" | "plant" | "any";
    export class $PlantRecollectable {
        getPriority(): number;
        doHarvestOperation(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, ...arg3: $Object[]): $List<$ItemStack>;
        doHarvestOperation(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $List<$ItemStack>;
        canBeHarvested(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getSeedDrop(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ItemStack;
        getRecollectablesNames(): $List<string>;
        getRecollectableType(): $PlantRecollectable$Type;
        shouldCheckNextPlant(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        constructor(arg0: string);
        get priority(): number;
        get recollectablesNames(): $List<string>;
        get recollectableType(): $PlantRecollectable$Type;
    }
    /**
     * Values that may be interpreted as {@link $PlantRecollectable}.
     */
    export type $PlantRecollectable_ = RegistryTypes.IndustrialforegoingPlantRecollectable;
}
