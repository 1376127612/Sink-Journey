import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RenderPage } from "@package/hellfirepvp/astralsorcery/client/screen/tome/page";
import { $ResearchNode } from "@package/hellfirepvp/astralsorcery/common/research";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/research/tome" {
    export class $TomePage {
        static CODEC: $Codec<$TomePage>;
        static DEFAULT_HEIGHT: number;
        static DEFAULT_WIDTH: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TomePage>;
    }
    export interface $TomePage {
        createPage(arg0: $ResearchNode | null, arg1: number): $RenderPage;
        getType(): $TomePage$TomePageType<never>;
        get type(): $TomePage$TomePageType<never>;
    }
    export class $TomePage$TomePageType<T extends $TomePage> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $TomePage$TomePageType}.
     */
    export type $TomePage$TomePageType_<T> = RegistryTypes.AstralsorceryTomePageTypes | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $TomePage>, codec?: $MapCodec_<$TomePage>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $TomePage>, codec?: $MapCodec_<$TomePage>, ];
    export interface $TomePage$TomePageType<T> extends RegistryMarked<RegistryTypes.AstralsorceryTomePageTypesTag, RegistryTypes.AstralsorceryTomePageTypes> {}
}
