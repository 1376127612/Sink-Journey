import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $ITooltipFunction_ } from "@package/com/blamejared/crafttweaker/api/item/tooltip";
import { $Attribute_, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_ } from "@package/java/util";
import { $IData, $MapData } from "@package/com/blamejared/crafttweaker/api/data";
import { $Predicate_, $Function_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemStack } from "@package/com/blamejared/crafttweaker/api/item";
import { $IIngredientWithAmount, $IIngredient } from "@package/com/blamejared/crafttweaker/api/ingredient";
import { $IngredientTransformers, $IIngredientTransformer } from "@package/com/blamejared/crafttweaker/api/ingredient/transformer";
import { $IIngredientCondition, $IngredientConditions } from "@package/com/blamejared/crafttweaker/api/ingredient/condition";

declare module "@package/com/blamejared/crafttweaker/api/ingredient/type" {
    export class $IIngredientList implements $IIngredient {
        getItems(): $IItemStack[];
        asVanillaIngredient(): $Ingredient;
        getCommandString(): string;
        getRemainingItem(arg0: $IItemStack): $IItemStack;
        getIngredients(): $IIngredient[];
        isEmpty(): boolean;
        matches(arg0: $IItemStack): boolean;
        transform(arg0: $IIngredientTransformer): $IIngredient;
        condition(arg0: $IIngredientCondition): $IIngredient;
        or(arg0: $IIngredient): $IIngredientList;
        conditions(): $IngredientConditions;
        transformers(): $IngredientTransformers;
        modifyShiftTooltip(arg0: $ITooltipFunction_, arg1: $ITooltipFunction_): void;
        removeTooltip(arg0: string): void;
        clearTooltip(arg0: boolean): void;
        onlyDamagedAtLeast(arg0: number): $IIngredient;
        transformDamage(arg0: number): $IIngredient;
        onlyDamaged(): $IIngredient;
        transformCustom(arg0: string, arg1: $Function_<$IItemStack, $IItemStack>): $IIngredient;
        addShiftTooltip(arg0: $Component_, arg1: $Component_): void;
        onlyDamagedAtMost(arg0: number): $IIngredient;
        modifyTooltip(arg0: $ITooltipFunction_): void;
        transformReplace(arg0: $IItemStack): $IIngredient;
        setBurnTime(arg0: number): void;
        /**
         * @deprecated
         */
        removeGlobalAttribute(arg0: $Attribute_, arg1: $EquipmentSlot_[]): void;
        asIIngredientWithAmount(): $IIngredientWithAmount;
        /**
         * @deprecated
         */
        addGlobalAttributeModifier(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_, arg4: $EquipmentSlot_[]): void;
        onlyIf(arg0: string, arg1: $Predicate_<$IItemStack>): $IIngredient;
        /**
         * @deprecated
         */
        removeGlobalAttributeModifier(arg0: $UUID_, arg1: $EquipmentSlot_[]): void;
        /**
         * @deprecated
         */
        removeGlobalAttributeModifier(arg0: string, arg1: $EquipmentSlot_[]): void;
        contains(arg0: $IIngredient): boolean;
        mul(arg0: number): $IIngredientWithAmount;
        reuse(): $IIngredient;
        asIData(): $IData;
        asMapData(): $MapData;
        anyDamage(): $IIngredient;
        addTooltip(arg0: $Component_): void;
        static ID: $ResourceLocation;
        constructor(arg0: $IIngredient[]);
        get items(): $IItemStack[];
        get commandString(): string;
        get ingredients(): $IIngredient[];
        get empty(): boolean;
        set burnTime(value: number);
    }
}
