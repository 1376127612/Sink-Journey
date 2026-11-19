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
        static asRanged(arg0: $PerkAttributeConverter_, arg1: $FloatPoint_, arg2: number): $RangedPerkAttributeConverter;
        getOffset(): $FloatPoint;
        getRadius(): number;
        static CODEC: $Codec<$PerkAttributeConverter>;
        get offset(): $FloatPoint;
        get radius(): number;
    }
    export class $PerkAttributeConverter extends $MutableIdentity {
        onRemove(arg0: $Player, arg1: $LogicalSide_): void;
        convertModifier(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeModifier_, arg3: $ModifierSource | null): $PerkAttributeModifier;
        gainExtraModifiers(arg0: $Player, arg1: $PlayerProgress, arg2: $PerkAttributeModifier_, arg3: $ModifierSource | null): $Collection<$PerkAttributeModifier>;
        asRangedConverter(arg0: $FloatPoint_, arg1: number): $RangedPerkAttributeConverter;
        getDescriptionIds(): $List<string>;
        getDescription(): $List<$MutableComponent>;
        onApply(arg0: $Player, arg1: $LogicalSide_): void;
        static CODEC: $Codec<$PerkAttributeConverter>;
        get descriptionIds(): $List<string>;
        get description(): $List<$MutableComponent>;
    }
    /**
     * Values that may be interpreted as {@link $PerkAttributeConverter}.
     */
    export type $PerkAttributeConverter_ = RegistryTypes.AstralsorceryPerkConverters;
}
