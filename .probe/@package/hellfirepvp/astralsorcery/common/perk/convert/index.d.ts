import { $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $FloatPoint, $FloatPoint_ } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $ModifierSource } from "@package/hellfirepvp/astralsorcery/common/perk/source";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Collection } from "@package/java/util";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $PerkAttributeModifier_, $PerkAttributeModifier } from "@package/hellfirepvp/astralsorcery/common/perk/modifier";
import { $MutableIdentity } from "@package/hellfirepvp/astralsorcery/common/util";

declare module "@package/hellfirepvp/astralsorcery/common/perk/convert" {
    export interface $PerkAttributeConverter extends RegistryMarked<RegistryTypes.AstralsorceryPerkConvertersTag, RegistryTypes.AstralsorceryPerkConverters> {}
    export class $RangedPerkAttributeConverter extends $PerkAttributeConverter {
        getOffset(): $FloatPoint;
        getRadius(): number;
        static asRanged(arg0: $PerkAttributeConverter_, arg1: $FloatPoint_, arg2: number): $RangedPerkAttributeConverter;
        static CODEC: $Codec<$PerkAttributeConverter>;
        get offset(): $FloatPoint;
        get radius(): number;
    }
    export class $PerkAttributeConverter extends $MutableIdentity {
        getDescription(): $List<$MutableComponent>;
        onApply(arg0: $Player, arg1: $LogicalSide_): void;
        onRemove(arg0: $Player, arg1: $LogicalSide_): void;
        getDescriptionIds(): $List<string>;
        convertModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeModifier_, arg3: $ModifierSource | null): $PerkAttributeModifier;
        gainExtraModifiers(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeModifier_, arg3: $ModifierSource | null): $Collection<$PerkAttributeModifier>;
        asRangedConverter(arg0: $FloatPoint_, arg1: number): $RangedPerkAttributeConverter;
        static CODEC: $Codec<$PerkAttributeConverter>;
        get description(): $List<$MutableComponent>;
        get descriptionIds(): $List<string>;
    }
    /**
     * Values that may be interpreted as {@link $PerkAttributeConverter}.
     */
    export type $PerkAttributeConverter_ = RegistryTypes.AstralsorceryPerkConverters;
}
