import { $Supplier_ } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ModifierSource } from "@package/hellfirepvp/astralsorcery/common/perk/source";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeModifier$Operation, $Attribute, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Enum } from "@package/java/lang";
import { $PerkAttributeTypeReader } from "@package/hellfirepvp/astralsorcery/common/perk/reader";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $PerkAttributeModifier } from "@package/hellfirepvp/astralsorcery/common/perk/modifier";

declare module "@package/hellfirepvp/astralsorcery/common/perk/type/base" {
    export class $ModifierType extends $Enum<$ModifierType> {
        stringifyValue(arg0: number): string;
        isNeutralVanillaValue(arg0: number): boolean;
        getModifierOperationNameId(arg0: number): string;
        getVanillaAttributeOperation(): $AttributeModifier$Operation;
        static fromVanillaAttributeOperation(arg0: $AttributeModifier$Operation_): $ModifierType;
        static values(): $ModifierType[];
        static valueOf(arg0: string): $ModifierType;
        static ADDED_MULTIPLY: $ModifierType;
        static STACKING_MULTIPLY: $ModifierType;
        static ADDITION: $ModifierType;
        get vanillaAttributeOperation(): $AttributeModifier$Operation;
    }
    /**
     * Values that may be interpreted as {@link $ModifierType}.
     */
    export type $ModifierType_ = "addition" | "added_multiply" | "stacking_multiply";
    export interface $PerkAttributeType extends RegistryMarked<RegistryTypes.AstralsorceryPerkAttributeTypesTag, RegistryTypes.AstralsorceryPerkAttributeTypes> {}
    export class $PerkAttributeType {
        onRemove(arg0: $Player, arg1: $LogicalSide_, arg2: boolean, arg3: $ModifierSource): void;
        static fromVanillaType(arg0: $Holder_<$Attribute>): ($PerkAttributeType) | undefined;
        isMultiplicative(): boolean;
        onModeRemove(arg0: $Player, arg1: $ModifierType_, arg2: $LogicalSide_, arg3: boolean): void;
        onModeApply(arg0: $Player, arg1: $ModifierType_, arg2: $LogicalSide_): void;
        hasTypeApplied(arg0: $Player, arg1: $LogicalSide_): boolean;
        getName(): $MutableComponent;
        static create(arg0: boolean): $PerkAttributeType;
        is(arg0: $PerkAttributeType_): boolean;
        is(arg0: $Supplier_<$PerkAttributeType>): boolean;
        static clearCache(arg0: $LogicalSide_): void;
        getReader(): ($PerkAttributeTypeReader) | undefined;
        onApply(arg0: $Player, arg1: $LogicalSide_, arg2: $ModifierSource): void;
        createModifier(arg0: number, arg1: $ModifierType_): $PerkAttributeModifier;
        static CODEC: $Codec<$PerkAttributeType>;
        get multiplicative(): boolean;
        get name(): $MutableComponent;
        get reader(): ($PerkAttributeTypeReader) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $PerkAttributeType}.
     */
    export type $PerkAttributeType_ = RegistryTypes.AstralsorceryPerkAttributeTypes;
}
