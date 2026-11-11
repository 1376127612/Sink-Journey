import { $LevelReader } from "@package/net/minecraft/world/level";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/hellfirepvp/astralsorcery/common/worldgen/structure/marker" {
    export class $StructureMarkerReplacement$Type<T extends $StructureMarkerReplacement> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $StructureMarkerReplacement$Type}.
     */
    export type $StructureMarkerReplacement$Type_<T> = RegistryTypes.AstralsorceryStructureMarkerReplacementTypes | { codec?: $MapCodec_<$StructureMarkerReplacement>,  } | [codec?: $MapCodec_<$StructureMarkerReplacement>, ];
    export class $StructureMarkerReplacement {
        replace(arg0: $LevelReader, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $RandomSource): $StructureTemplate$StructureBlockInfo;
        getType(): $StructureMarkerReplacement$Type<never>;
        static CODEC: $Codec<$StructureMarkerReplacement>;
        constructor();
        get type(): $StructureMarkerReplacement$Type<never>;
    }
    export interface $StructureMarkerReplacement$Type<T> extends RegistryMarked<RegistryTypes.AstralsorceryStructureMarkerReplacementTypesTag, RegistryTypes.AstralsorceryStructureMarkerReplacementTypes> {}
}
