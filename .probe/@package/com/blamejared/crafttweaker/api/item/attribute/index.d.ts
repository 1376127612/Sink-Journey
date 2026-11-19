import { $ItemStack } from "@package/net/minecraft/world/item";
import { $EquipmentSlot } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $Attribute_, $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Collection } from "@package/java/util";

declare module "@package/com/blamejared/crafttweaker/api/item/attribute" {
    export class $ItemAttributeModifierBase {
    }
    export interface $ItemAttributeModifierBase {
        getOriginalModifiers(): $Multimap<$Attribute, $AttributeModifier>;
        addModifier(arg0: $Attribute_, arg1: $AttributeModifier_): boolean;
        clearModifiers(): void;
        getSlotType(): $EquipmentSlot;
        getModifiers(): $Multimap<$Attribute, $AttributeModifier>;
        getItemStack(): $ItemStack;
        removeAttribute(arg0: $Attribute_): $Collection<$AttributeModifier>;
        removeModifier(arg0: $Attribute_, arg1: $AttributeModifier_): boolean;
        get originalModifiers(): $Multimap<$Attribute, $AttributeModifier>;
        get slotType(): $EquipmentSlot;
        get modifiers(): $Multimap<$Attribute, $AttributeModifier>;
        get itemStack(): $ItemStack;
    }
}
