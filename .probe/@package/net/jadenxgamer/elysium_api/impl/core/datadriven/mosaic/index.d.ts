import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/mosaic" {
    export class $EntryType extends $Enum<$EntryType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $EntryType[];
        static valueOf(arg0: string): $EntryType;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EntryType>;
        static DEFAULT: $EntryType;
        static SUB_BIOME: $EntryType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EntryType}.
     */
    export type $EntryType_ = "default" | "sub_biome";
    export class $MosaicBiomeEntry extends $Record {
        biome(): $Holder<$Biome>;
        keepWeight(): number;
        subBiomeSettings(): ($MosaicBiomeEntry$SubBiomeType) | undefined;
        climatePoint(): number;
        type(): $EntryType;
        weight(): number;
        dimension(): $ResourceLocation;
        static CODEC: $Codec<$MosaicBiomeEntry>;
        constructor(type: $EntryType_, dimension: $ResourceLocation_, climatePoint: number, biome: $Holder_<$Biome>, weight: number, keepWeight: number, subBiomeSettings: ($MosaicBiomeEntry$SubBiomeType_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $MosaicBiomeEntry}.
     */
    export type $MosaicBiomeEntry_ = RegistryTypes.ElysiumApiMosaicBiomeEntry | { dimension?: $ResourceLocation_, biome?: $Holder_<$Biome>, keepWeight?: number, subBiomeSettings?: ($MosaicBiomeEntry$SubBiomeType_) | undefined, weight?: number, climatePoint?: number, type?: $EntryType_,  } | [dimension?: $ResourceLocation_, biome?: $Holder_<$Biome>, keepWeight?: number, subBiomeSettings?: ($MosaicBiomeEntry$SubBiomeType_) | undefined, weight?: number, climatePoint?: number, type?: $EntryType_, ];
    export class $SubBiomeBehavior extends $Enum<$SubBiomeBehavior> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $SubBiomeBehavior[];
        static valueOf(arg0: string): $SubBiomeBehavior;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SubBiomeBehavior>;
        static REPLACE: $SubBiomeBehavior;
        static EDGE: $SubBiomeBehavior;
        static PATCH: $SubBiomeBehavior;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SubBiomeBehavior}.
     */
    export type $SubBiomeBehavior_ = "replace" | "patch" | "edge";
    export interface $MosaicBiomeEntry extends RegistryMarked<RegistryTypes.ElysiumApiMosaicBiomeEntryTag, RegistryTypes.ElysiumApiMosaicBiomeEntry> {}
    export class $MosaicBiomeEntry$SubBiomeType extends $Record {
        replaceBiome(): $ResourceLocation;
        behavior(): $SubBiomeBehavior;
        static CODEC: $Codec<$MosaicBiomeEntry$SubBiomeType>;
        constructor(replaceBiome: $ResourceLocation_, behavior: $SubBiomeBehavior_);
    }
    /**
     * Values that may be interpreted as {@link $MosaicBiomeEntry$SubBiomeType}.
     */
    export type $MosaicBiomeEntry$SubBiomeType_ = { replaceBiome?: $ResourceLocation_, behavior?: $SubBiomeBehavior_,  } | [replaceBiome?: $ResourceLocation_, behavior?: $SubBiomeBehavior_, ];
}
