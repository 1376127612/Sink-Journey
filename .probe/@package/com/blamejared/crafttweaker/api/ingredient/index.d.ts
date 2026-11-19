import { $Codec } from "@package/com/mojang/serialization";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ITooltipFunction_ } from "@package/com/blamejared/crafttweaker/api/item/tooltip";
import { $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $IIngredientList } from "@package/com/blamejared/crafttweaker/api/ingredient/type";
import { $Attribute_, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_ } from "@package/java/util";
import { $CommandStringDisplayable } from "@package/com/blamejared/crafttweaker/api/bracket";
import { $IData, $MapData } from "@package/com/blamejared/crafttweaker/api/data";
import { $Predicate_, $Function_ } from "@package/java/util/function";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemStack } from "@package/com/blamejared/crafttweaker/api/item";
import { $IIngredientTransformer, $IngredientTransformers } from "@package/com/blamejared/crafttweaker/api/ingredient/transformer";
import { $IIngredientCondition, $IngredientConditions } from "@package/com/blamejared/crafttweaker/api/ingredient/condition";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as condition from "@package/com/blamejared/crafttweaker/api/ingredient/condition";
export * as transformer from "@package/com/blamejared/crafttweaker/api/ingredient/transformer";
export * as type from "@package/com/blamejared/crafttweaker/api/ingredient/type";

declare module "@package/com/blamejared/crafttweaker/api/ingredient" {
    export class $IIngredientWithAmount {
    }
    export interface $IIngredientWithAmount extends $CommandStringDisplayable {
        amount(): number;
        asIData(): $IData;
        ingredient(): $IIngredient;
    }
    export class $IIngredient {
        static fromIngredient(arg0: $Ingredient_): $IIngredient;
        static INGREDIENT_ID: $ResourceLocation;
        static CODEC: $Codec<$IIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IIngredient>;
    }
    export interface $IIngredient extends $CommandStringDisplayable {
        getItems(): $IItemStack[];
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
        asVanillaIngredient(): $Ingredient;
        onlyIf(arg0: string, arg1: $Predicate_<$IItemStack>): $IIngredient;
        /**
         * @deprecated
         */
        removeGlobalAttributeModifier(arg0: $UUID_, arg1: $EquipmentSlot_[]): void;
        /**
         * @deprecated
         */
        removeGlobalAttributeModifier(arg0: string, arg1: $EquipmentSlot_[]): void;
        getCommandString(): string;
        getRemainingItem(arg0: $IItemStack): $IItemStack;
        isEmpty(): boolean;
        matches(arg0: $IItemStack): boolean;
        contains(arg0: $IIngredient): boolean;
        transform(arg0: $IIngredientTransformer): $IIngredient;
        condition(arg0: $IIngredientCondition): $IIngredient;
        or(arg0: $IIngredient): $IIngredientList;
        mul(arg0: number): $IIngredientWithAmount;
        conditions(): $IngredientConditions;
        reuse(): $IIngredient;
        transformers(): $IngredientTransformers;
        asIData(): $IData;
        asMapData(): $MapData;
        anyDamage(): $IIngredient;
        addTooltip(arg0: $Component_): void;
        get items(): $IItemStack[];
        set burnTime(value: number);
        get commandString(): string;
        get empty(): boolean;
    }
}
