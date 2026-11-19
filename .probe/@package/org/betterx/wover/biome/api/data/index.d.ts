import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Function4_, $Function13_, $Function15_, $Function8_, $Function11_, $Function6_, $Function5_, $Function3_, $Function14_, $Function16_, $Function9_, $Function10_, $Function12_, $Function7_ } from "@package/com/mojang/datafixers/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Climate$ParameterPoint_, $Climate$ParameterPoint, $Biome } from "@package/net/minecraft/world/level/biome";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $KeyDispatchDataCodec } from "@package/net/minecraft/util";

declare module "@package/org/betterx/wover/biome/api/data" {
    export interface $BiomeData extends RegistryMarked<RegistryTypes.WoverWorldgenBiomeDataTag, RegistryTypes.WoverWorldgenBiomeData> {}
    export class $BiomeData {
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9, P10, P11, P12>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $RecordCodecBuilder<T, P10>, arg7: $RecordCodecBuilder<T, P11>, arg8: $RecordCodecBuilder<T, P12>, arg9: $Function12_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, P10, P11, P12, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9, P10, P11>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $RecordCodecBuilder<T, P10>, arg7: $RecordCodecBuilder<T, P11>, arg8: $Function11_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, P10, P11, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9, P10>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $RecordCodecBuilder<T, P10>, arg7: $Function10_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, P10, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $Function9_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $Function8_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, T>): $MapCodec<T>;
        codec(): $KeyDispatchDataCodec<$BiomeData>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $RecordCodecBuilder<T, P10>, arg7: $RecordCodecBuilder<T, P11>, arg8: $RecordCodecBuilder<T, P12>, arg9: $RecordCodecBuilder<T, P13>, arg10: $RecordCodecBuilder<T, P14>, arg11: $RecordCodecBuilder<T, P15>, arg12: $RecordCodecBuilder<T, P16>, arg13: $Function16_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $RecordCodecBuilder<T, P10>, arg7: $RecordCodecBuilder<T, P11>, arg8: $RecordCodecBuilder<T, P12>, arg9: $RecordCodecBuilder<T, P13>, arg10: $RecordCodecBuilder<T, P14>, arg11: $Function14_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $RecordCodecBuilder<T, P10>, arg7: $RecordCodecBuilder<T, P11>, arg8: $RecordCodecBuilder<T, P12>, arg9: $RecordCodecBuilder<T, P13>, arg10: $Function13_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $RecordCodecBuilder<T, P8>, arg5: $RecordCodecBuilder<T, P9>, arg6: $RecordCodecBuilder<T, P10>, arg7: $RecordCodecBuilder<T, P11>, arg8: $RecordCodecBuilder<T, P12>, arg9: $RecordCodecBuilder<T, P13>, arg10: $RecordCodecBuilder<T, P14>, arg11: $RecordCodecBuilder<T, P15>, arg12: $Function15_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, T>): $MapCodec<T>;
        static codec<T extends $BiomeData>(arg0: $Function3_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4>(arg0: $RecordCodecBuilder<T, P4>, arg1: $Function4_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6, P7>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $RecordCodecBuilder<T, P7>, arg4: $Function7_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, P7, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5, P6>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $RecordCodecBuilder<T, P6>, arg3: $Function6_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, P6, T>): $MapCodec<T>;
        static codec<T extends $BiomeData, P4, P5>(arg0: $RecordCodecBuilder<T, P4>, arg1: $RecordCodecBuilder<T, P5>, arg2: $Function5_<number, $ResourceKey<$Biome>, $BiomeGenerationDataContainer, P4, P5, T>): $MapCodec<T>;
        biome(): $Biome;
        isTemp(): boolean;
        static tempOf(arg0: $ResourceKey_<$Biome>): $BiomeData;
        genChance(): number;
        biomeHolder(): $Holder<$Biome>;
        isIntendedFor(arg0: $TagKey_<$Biome>): boolean;
        static of(arg0: $ResourceKey_<$Biome>): $BiomeData;
        isEnabled(): boolean;
        networkCodec(): $KeyDispatchDataCodec<$BiomeData>;
        isSame(arg0: $ResourceKey_<$Biome>): boolean;
        isSame(arg0: $BiomeData_): boolean;
        static isSame(arg0: $ResourceKey_<$Biome>, arg1: $ResourceKey_<$Biome>): boolean;
        isPickable(): boolean;
        static CODEC: $MapCodec<$BiomeData>;
        biomeKey: $ResourceKey<$Biome>;
        fogDensity: number;
        generationData: $BiomeGenerationDataContainer;
        static KEY_CODEC: $KeyDispatchDataCodec<$BiomeData>;
        constructor(arg0: number, arg1: $ResourceKey_<$Biome>, arg2: $BiomeGenerationDataContainer_);
        get temp(): boolean;
        get enabled(): boolean;
        get pickable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BiomeData}.
     */
    export type $BiomeData_ = RegistryTypes.WoverWorldgenBiomeData;
    export class $BiomeGenerationDataContainer extends $Record {
        parameterPoints(): $List<$Climate$ParameterPoint>;
        intendedPlacement(): $TagKey<$Biome>;
        static CODEC: $Codec<$BiomeGenerationDataContainer>;
        static EMPTY: $BiomeGenerationDataContainer;
        constructor(parameterPoints: $List_<$Climate$ParameterPoint_>, intendedPlacement: $TagKey_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeGenerationDataContainer}.
     */
    export type $BiomeGenerationDataContainer_ = { parameterPoints?: $List_<$Climate$ParameterPoint_>, intendedPlacement?: $TagKey_<$Biome>,  } | [parameterPoints?: $List_<$Climate$ParameterPoint_>, intendedPlacement?: $TagKey_<$Biome>, ];
}
