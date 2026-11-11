import { $Level } from "@package/net/minecraft/world/level";
import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region" {
    export class $Region extends $Record {
        name(): ($ResourceKey<$Region>) | undefined;
        static create(arg0: $ResourceKey_<$Region>, arg1: $ResourceKey_<$Level>, arg2: $HolderSet_<$Biome>, arg3: number): $Region;
        static create(arg0: $ResourceKey_<$LevelStem>, arg1: number, arg2: $HolderSet_<$Biome>): $Region;
        weight(): number;
        dimension(): $ResourceKey<$LevelStem>;
        biomes(): $HolderSet<$Biome>;
        static CODEC: $Codec<$Region>;
        static KEY_CODEC: $Codec<$ResourceKey<$Region>>;
        constructor(name: ($ResourceKey_<$Region>) | undefined, dimension: $ResourceKey_<$LevelStem>, biomes: $HolderSet_<$Biome>, weight: number);
    }
    /**
     * Values that may be interpreted as {@link $Region}.
     */
    export type $Region_ = RegistryTypes.LithostitchedRegion | { dimension?: $ResourceKey_<$LevelStem>, name?: ($ResourceKey_<$Region>) | undefined, biomes?: $HolderSet_<$Biome>, weight?: number,  } | [dimension?: $ResourceKey_<$LevelStem>, name?: ($ResourceKey_<$Region>) | undefined, biomes?: $HolderSet_<$Biome>, weight?: number, ];
    export interface $Region extends RegistryMarked<RegistryTypes.LithostitchedRegionTag, RegistryTypes.LithostitchedRegion> {}
}
