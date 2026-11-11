import { $Function_, $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List } from "@package/java/util";
import { $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as transfer from "@package/sirttas/elementalcraft/api/element/transfer";
export * as storage from "@package/sirttas/elementalcraft/api/element/storage";

declare module "@package/sirttas/elementalcraft/api/element" {
    export class $IElementTypeProvider {
    }
    export interface $IElementTypeProvider {
        getElementType(): $ElementType;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        get elementType(): $ElementType;
        get elementTypeSupplier(): $Supplier<$ElementType>;
    }
    /**
     * Values that may be interpreted as {@link $IElementTypeProvider}.
     */
    export type $IElementTypeProvider_ = (() => $ElementType_);
    export class $ElementType extends $Enum<$ElementType> implements $StringRepresentable, $IElementTypeProvider {
        static values(): $ElementType[];
        static valueOf(arg0: string): $ElementType;
        static random(arg0: $RandomSource): $ElementType;
        static random(): $ElementType;
        getElementType(): $ElementType;
        static getElementType(arg0: $BlockState_): $ElementType;
        static getElementType(arg0: $ItemStack_): $ElementType;
        getDisplayName(): $Component;
        static byName(arg0: string): $ElementType;
        static forGetter<T>(arg0: $Function_<T, $ElementType>): $RecordCodecBuilder<T, $ElementType>;
        getSerializedName(): string;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getDescriptionId(): string;
        getColor(): number;
        getRemappedEnumConstantName(): string;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        static EARTH: $ElementType;
        static CODEC: $Codec<$ElementType>;
        static ALL_VALID: $List<$ElementType>;
        static FIRE: $ElementType;
        static AIR: $ElementType;
        static NONE: $ElementType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ElementType>;
        static WATER: $ElementType;
        get displayName(): $Component;
        get serializedName(): string;
        get red(): number;
        get green(): number;
        get blue(): number;
        get descriptionId(): string;
        get color(): number;
        get remappedEnumConstantName(): string;
        get elementTypeSupplier(): $Supplier<$ElementType>;
    }
    /**
     * Values that may be interpreted as {@link $ElementType}.
     */
    export type $ElementType_ = "none" | "water" | "fire" | "earth" | "air";
}
