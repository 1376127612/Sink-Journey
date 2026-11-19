import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vector3f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/de/dafuqs/spectrum/api/ink/color" {
    export class $InkColor {
        getColorARGB(): number;
        getDyeColor(): ($DyeColor) | undefined;
        /**
         * @deprecated
         */
        getColorInt(): number;
        getColoredInkName(): $MutableComponent;
        getColorRGB(): number;
        getTextColorVec(): $Vector3f;
        getTextColorInt(): number;
        getColorVec(): $Vector3f;
        static ofDyeColor(arg0: $DyeColor_): $InkColor;
        static ofIdString(arg0: string): ($InkColor) | undefined;
        getRequiredAdvancement(): $ResourceLocation;
        getName(): $MutableComponent;
        getID(): $ResourceLocation;
        static ofId(arg0: $ResourceLocation_): ($InkColor) | undefined;
        getColoredName(): $MutableComponent;
        isIn(arg0: $TagKey_<$InkColor>): boolean;
        static CODEC: $Codec<$InkColor>;
        static PACKET_CODEC: $StreamCodec<$ByteBuf, $InkColor>;
        constructor(arg0: $DyeColor_, arg1: number, arg2: $ResourceLocation_);
        constructor(arg0: $DyeColor_, arg1: number, arg2: number, arg3: $ResourceLocation_);
        constructor(arg0: ($DyeColor_) | undefined, arg1: number, arg2: number, arg3: $ResourceLocation_);
        get colorARGB(): number;
        get dyeColor(): ($DyeColor) | undefined;
        get colorInt(): number;
        get coloredInkName(): $MutableComponent;
        get colorRGB(): number;
        get textColorVec(): $Vector3f;
        get textColorInt(): number;
        get colorVec(): $Vector3f;
        get requiredAdvancement(): $ResourceLocation;
        get name(): $MutableComponent;
        get ID(): $ResourceLocation;
        get coloredName(): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $InkColor}.
     */
    export type $InkColor_ = RegistryTypes.SpectrumInkColor;
    export interface $InkColor extends RegistryMarked<RegistryTypes.SpectrumInkColorTag, RegistryTypes.SpectrumInkColor> {}
}
