import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ModifierType_, $PerkAttributeType, $PerkAttributeType_ } from "@package/hellfirepvp/astralsorcery/common/perk/type/base";
import { $Collection_ } from "@package/java/util";
export * as source from "@package/hellfirepvp/astralsorcery/common/perk/source";
export * as type from "@package/hellfirepvp/astralsorcery/common/perk/type";
export * as convert from "@package/hellfirepvp/astralsorcery/common/perk/convert";
export * as tree from "@package/hellfirepvp/astralsorcery/common/perk/tree";
export * as modifier from "@package/hellfirepvp/astralsorcery/common/perk/modifier";
export * as reader from "@package/hellfirepvp/astralsorcery/common/perk/reader";

declare module "@package/hellfirepvp/astralsorcery/common/perk" {
    export class $PerkAttributeMap {
        hasModifiers(arg0: $PerkAttributeType_): boolean;
        getModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeType_, arg3: $ModifierType_): number;
        getModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $Supplier_<$PerkAttributeType>, arg3: $ModifierType_): number;
        getModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $Supplier_<$PerkAttributeType>, arg3: $Collection_<$ModifierType_>): number;
        getModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeType_, arg3: $Collection_<$ModifierType_>): number;
        getModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $Supplier_<$PerkAttributeType>): number;
        getModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeType_): number;
        modifyValue(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeType_, arg3: number): number;
        modifyValue(arg0: $Player, arg1: $PlayerProgress, arg2: $Supplier_<$PerkAttributeType>, arg3: number): number;
    }
    export class $PerkAttributeLimiter$Limit {
        getType(): $PerkAttributeType;
        getMax(): $Supplier<number>;
        getMin(): $Supplier<number>;
        limitValue(arg0: number): number;
        constructor(arg0: $Supplier_<$PerkAttributeType>, arg1: $Supplier_<number>, arg2: $Supplier_<number>);
        get type(): $PerkAttributeType;
        get max(): $Supplier<number>;
        get min(): $Supplier<number>;
    }
    /**
     * Values that may be interpreted as {@link $PerkAttributeLimiter$Limit}.
     */
    export type $PerkAttributeLimiter$Limit_ = RegistryTypes.AstralsorceryPerkAttributeLimits;
    export interface $PerkAttributeLimiter$Limit extends RegistryMarked<RegistryTypes.AstralsorceryPerkAttributeLimitsTag, RegistryTypes.AstralsorceryPerkAttributeLimits> {}
}
