import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/moakiee/ae2lt/api/lightning" {
    export class $LightningTier extends $Enum<$LightningTier> implements $StringRepresentable {
        static values(): $LightningTier[];
        static valueOf(arg0: string): $LightningTier;
        static fromSerializedName(arg0: string): $LightningTier;
        getSerializedName(): string;
        static fromOrdinal(arg0: number): $LightningTier;
        getRemappedEnumConstantName(): string;
        static EXTREME_HIGH_VOLTAGE: $LightningTier;
        static CODEC: $Codec<$LightningTier>;
        static HIGH_VOLTAGE: $LightningTier;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LightningTier>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LightningTier}.
     */
    export type $LightningTier_ = "high_voltage" | "extreme_high_voltage";
}
