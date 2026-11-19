import { $PerkAttributeMap } from "@package/hellfirepvp/astralsorcery/common/perk";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $MutableComponent } from "@package/net/minecraft/network/chat";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ModifierType_, $PerkAttributeType } from "@package/hellfirepvp/astralsorcery/common/perk/type/base";
import { $Record } from "@package/java/lang";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $PerkAttributeModifier_ } from "@package/hellfirepvp/astralsorcery/common/perk/modifier";

declare module "@package/hellfirepvp/astralsorcery/common/perk/reader" {
    export interface $PerkAttributeTypeReader$Type extends RegistryMarked<RegistryTypes.AstralsorceryPerkAttributeTypeReadersTag, RegistryTypes.AstralsorceryPerkAttributeTypeReaders> {}
    export class $PerkAttributeTypeReader$Type extends $Record {
        perkAttributeType(): $Supplier<$PerkAttributeType>;
        reader(): $PerkAttributeTypeReader;
        constructor(perkAttributeType: $Supplier_<$PerkAttributeType>, reader: $PerkAttributeTypeReader);
    }
    /**
     * Values that may be interpreted as {@link $PerkAttributeTypeReader$Type}.
     */
    export type $PerkAttributeTypeReader$Type_ = RegistryTypes.AstralsorceryPerkAttributeTypeReaders | { perkAttributeType?: $Supplier_<$PerkAttributeType>, reader?: $PerkAttributeTypeReader,  } | [perkAttributeType?: $Supplier_<$PerkAttributeType>, reader?: $PerkAttributeTypeReader, ];
    export class $PerkAttributeTypeReader {
        getDisplayValue(arg0: $PerkAttributeModifier_, arg1: $Player | null, arg2: $PlayerProgress | null): string;
        formatDisplayValue(arg0: $PerkAttributeModifier_, arg1: $Player | null, arg2: $PlayerProgress | null, arg3: string): $Component;
        static formatDecimal(arg0: number): string;
        getValueDisplayFormat(arg0: $PerkAttributeModifier_, arg1: $Player | null, arg2: $PlayerProgress | null): string;
        getModifierValueForMode(arg0: $PerkAttributeMap, arg1: $Player, arg2: $LogicalSide_, arg3: $ModifierType_): number;
        formatDisplayModifierOperation(arg0: $PerkAttributeModifier_, arg1: string): $Component;
        getDisplayModifierOperation(arg0: $PerkAttributeModifier_, arg1: $Player | null, arg2: $PlayerProgress | null): string;
        getDefaultValue(arg0: $PerkAttributeMap, arg1: $Player, arg2: $LogicalSide_): number;
        getType(): $PerkAttributeType;
        negate<T extends $PerkAttributeTypeReader>(): T;
        getDisplayFormat(arg0: $PerkAttributeModifier_): string;
        getDisplay(arg0: $PerkAttributeModifier_, arg1: $Player | null, arg2: $PlayerProgress | null): $MutableComponent;
        constructor(arg0: $Supplier_<$PerkAttributeType>);
        get type(): $PerkAttributeType;
    }
}
