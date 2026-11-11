import { $Predicate } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $Record } from "@package/java/lang";

declare module "@package/hellfirepvp/astralsorcery/common/perk/tree/requirement" {
    export interface $PerkRequirement$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryPerkRequirementTypesTag, RegistryTypes.AstralsorceryPerkRequirementTypes> {}
    export class $PerkRequirement {
        getType(): $PerkRequirement$Type<never>;
        createProgressCondition(): $Predicate<$PlayerProgress>;
        static CODEC: $Codec<$PerkRequirement>;
        constructor();
        get type(): $PerkRequirement$Type<never>;
    }
    export class $PerkRequirement$Type<T extends $PerkRequirement> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PerkRequirement$Type}.
     */
    export type $PerkRequirement$Type_<T> = RegistryTypes.AstralsorceryPerkRequirementTypes | { codec?: $MapCodec_<$PerkRequirement>,  } | [codec?: $MapCodec_<$PerkRequirement>, ];
}
