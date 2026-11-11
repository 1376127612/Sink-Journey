import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/hellfirepvp/astralsorcery/common/item/base" {
    export class $ItemStackEquipmentReference {
        static setEquipmentReference<T extends $ItemStack>(arg0: $ItemStack_, arg1: $UUID_ | null, arg2: $EquipmentSlot_ | null): void;
        static getEquipmentReference<T extends $ItemStack>(arg0: $ItemStack_): $Pair<$UUID, $EquipmentSlot>;
    }
    export interface $ItemStackEquipmentReference {
        getPlayerReference(): $UUID;
        setPlayerReference(arg0: $UUID_ | null): void;
        getEquippedSlot(): $EquipmentSlot;
        setEquippedSlot(arg0: $EquipmentSlot_ | null): void;
    }
}
