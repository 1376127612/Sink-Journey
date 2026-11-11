import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractPerk, $PerkType, $AttributeModifierPerk, $AbstractPerk$Data } from "@package/hellfirepvp/astralsorcery/common/perk/tree";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/perk/tree/perk" {
    export class $RootPerk<D extends $AbstractPerk$Data> extends $AttributeModifierPerk<D> {
        getConstellation(): $BaseConstellation;
        setConstellation<P extends $RootPerk<never>>(arg0: $BaseConstellation_): P;
        static CODEC: $MapCodec<$AttributeModifierPerk<never>>;
        static TO_CLIENT_PERKTREE_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk<never>>;
        static DATAPACK_CODEC: $Codec<$AbstractPerk<never>>;
        static TYPE: $PerkType<$AttributeModifierPerk<never>>;
    }
}
