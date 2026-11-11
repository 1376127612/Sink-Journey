import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PerkAttributeConverter_ } from "@package/hellfirepvp/astralsorcery/common/perk/convert";
import { $ModifierType_, $PerkAttributeType, $PerkAttributeType_, $ModifierType } from "@package/hellfirepvp/astralsorcery/common/perk/type/base";
import { $MutableIdentity } from "@package/hellfirepvp/astralsorcery/common/util";

declare module "@package/hellfirepvp/astralsorcery/common/perk/modifier" {
    export class $PerkAttributeModifier extends $MutableIdentity {
        getValue(arg0: $Player | null, arg1: $PlayerProgress | null): number;
        isAbsolute(): boolean;
        getAttributeType(): $PerkAttributeType;
        /**
         * @deprecated
         */
        getRawValue(): number;
        getMode(): $ModifierType;
        gainAsExtraModifier(arg0: $PerkAttributeConverter_, arg1: $PerkAttributeType_, arg2: $ModifierType_, arg3: number): $PerkAttributeModifier;
        convertModifier(arg0: $PerkAttributeType_, arg1: $ModifierType_, arg2: number): $PerkAttributeModifier;
        static SERIALIZE_CODEC: $Codec<$PerkAttributeModifier>;
        static CODEC: $Codec<$PerkAttributeModifier>;
        constructor(arg0: string, arg1: $PerkAttributeType_, arg2: $ModifierType_, arg3: number);
        constructor(arg0: $PerkAttributeType_, arg1: $ModifierType_, arg2: number);
        get absolute(): boolean;
        get attributeType(): $PerkAttributeType;
        get rawValue(): number;
        get mode(): $ModifierType;
    }
    /**
     * Values that may be interpreted as {@link $PerkAttributeModifier}.
     */
    export type $PerkAttributeModifier_ = RegistryTypes.AstralsorceryPerkCustomModifiers;
    export interface $PerkAttributeModifier extends RegistryMarked<RegistryTypes.AstralsorceryPerkCustomModifiersTag, RegistryTypes.AstralsorceryPerkCustomModifiers> {}
}
