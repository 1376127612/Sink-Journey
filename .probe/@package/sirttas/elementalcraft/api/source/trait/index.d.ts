import { $ServerLevelAccessor } from "@package/net/minecraft/world/level";
import { $ISourceTraitValueProvider, $ISourceTraitValue } from "@package/sirttas/elementalcraft/api/source/trait/value";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Encoder, $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as value from "@package/sirttas/elementalcraft/api/source/trait/value";

declare module "@package/sirttas/elementalcraft/api/source/trait" {
    export class $SourceTrait {
        load(arg0: $Tag_): $ISourceTraitValue;
        static builder(): $SourceTrait$Builder;
        getId(): $ResourceLocation;
        save(arg0: $ISourceTraitValue): $Tag;
        getOrder(): number;
        setId(arg0: $ResourceLocation_): void;
        roll(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: number): $ISourceTraitValue;
        breed(arg0: $RandomSource, arg1: number, arg2: $ISourceTraitValue, arg3: $ISourceTraitValue): $ISourceTraitValue;
        valueCodec(): $Codec<$ISourceTraitValue>;
        valueStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ISourceTraitValue>;
        static CODEC: $Codec<$SourceTrait>;
        constructor(arg0: number, arg1: $ISourceTraitValueProvider);
        get order(): number;
    }
    export class $SourceTrait$Type extends $Enum<$SourceTrait$Type> implements $StringRepresentable {
        static values(): $SourceTrait$Type[];
        static valueOf(arg0: string): $SourceTrait$Type;
        static byName(arg0: string): $SourceTrait$Type;
        getSerializedName(): string;
        static valueCodec<T>(arg0: $Codec<T>): $Codec<$Map<$SourceTrait$Type, T>>;
        getRemappedEnumConstantName(): string;
        static PRESERVATION: $SourceTrait$Type;
        static CAPACITY: $SourceTrait$Type;
        static CODEC: $Codec<$SourceTrait$Type>;
        static BREEDING_COST: $SourceTrait$Type;
        static VALUE_CODEC: $Codec<$Map<$SourceTrait$Type, number>>;
        static EXTRACTION_SPEED: $SourceTrait$Type;
        static NONE: $SourceTrait$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SourceTrait$Type}.
     */
    export type $SourceTrait$Type_ = "none" | "element_capacity" | "extraction_speed" | "element_preservation" | "breeding_cost";
    export class $SourceTrait$Builder {
        value(arg0: $ISourceTraitValueProvider): $SourceTrait$Builder;
        order(arg0: number): $SourceTrait$Builder;
        static ENCODER: $Encoder<$SourceTrait$Builder>;
    }
    export class $SourceTraitRollContext extends $Record {
        random(): $RandomSource;
        luck(): number;
        trait(): $SourceTrait;
        constructor(trait: $SourceTrait, random: $RandomSource, luck: number);
    }
    /**
     * Values that may be interpreted as {@link $SourceTraitRollContext}.
     */
    export type $SourceTraitRollContext_ = { luck?: number, trait?: $SourceTrait, random?: $RandomSource,  } | [luck?: number, trait?: $SourceTrait, random?: $RandomSource, ];
}
