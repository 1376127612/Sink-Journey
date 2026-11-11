import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResearchNode, $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/research/condition" {
    export class $ResearchNodeCondition$Type<T extends $ResearchNodeCondition> extends $Record {
        codec(): $MapCodec<T>;
        syncCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, syncCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $ResearchNodeCondition$Type}.
     */
    export type $ResearchNodeCondition$Type_<T> = RegistryTypes.AstralsorceryResearchNodeConditionTypes | { syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ResearchNodeCondition>, codec?: $MapCodec_<$ResearchNodeCondition>,  } | [syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ResearchNodeCondition>, codec?: $MapCodec_<$ResearchNodeCondition>, ];
    export class $ResearchNodeVisibility {
        getType(): $ResearchNodeVisibility$Type;
        static hidden(): $ResearchNodeVisibility;
        getReasons(): $List<$Component>;
        constructor(arg0: $ResearchNodeVisibility$Type_, arg1: $List_<$Component_>);
        get type(): $ResearchNodeVisibility$Type;
        get reasons(): $List<$Component>;
    }
    export class $ResearchNodeVisibility$Type extends $Enum<$ResearchNodeVisibility$Type> {
        static values(): $ResearchNodeVisibility$Type[];
        static valueOf(arg0: string): $ResearchNodeVisibility$Type;
        shouldRender(): boolean;
        static LOCKED: $ResearchNodeVisibility$Type;
        static HIDDEN: $ResearchNodeVisibility$Type;
        static VISIBLE: $ResearchNodeVisibility$Type;
    }
    /**
     * Values that may be interpreted as {@link $ResearchNodeVisibility$Type}.
     */
    export type $ResearchNodeVisibility$Type_ = "visible" | "locked" | "hidden";
    export interface $ResearchNodeCondition$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryResearchNodeConditionTypesTag, RegistryTypes.AstralsorceryResearchNodeConditionTypes> {}
    export class $ResearchNodeCondition {
        static CODEC: $Codec<$ResearchNodeCondition>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ResearchNodeCondition>;
    }
    export interface $ResearchNodeCondition {
        getType(): $ResearchNodeCondition$Type<never>;
        canSee(arg0: $ResearchNode, arg1: $PlayerProgress): boolean;
        getConditionDescription(arg0: $ResearchNode, arg1: $PlayerProgress): $List<$Component>;
        getSuggestedVisibility(arg0: $ResearchNode, arg1: $PlayerProgress): $ResearchNodeVisibility$Type;
        get type(): $ResearchNodeCondition$Type<never>;
    }
}
