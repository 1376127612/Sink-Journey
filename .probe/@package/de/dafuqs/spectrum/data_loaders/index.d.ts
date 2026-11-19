import { $OreConfiguration$TargetBlockState } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $BrokenBlockPredicate_, $BrokenBlockPredicate } from "@package/de/dafuqs/spectrum/api/predicate/block";

declare module "@package/de/dafuqs/spectrum/data_loaders" {
    export interface $GeodeOreDefinition extends RegistryMarked<RegistryTypes.SpectrumGeodeOresTag, RegistryTypes.SpectrumGeodeOres> {}
    export class $GeodeOreDefinition extends $Record {
        maxDistance(): number;
        oreConfiguration(): $List<$OreConfiguration$TargetBlockState>;
        blocks(): $BrokenBlockPredicate;
        tries(): number;
        minDistance(): number;
        static CODEC: $Codec<$GeodeOreDefinition>;
        constructor(blocks: $BrokenBlockPredicate_, oreConfiguration: $List_<$OreConfiguration$TargetBlockState>, minDistance: number, maxDistance: number, tries: number);
    }
    /**
     * Values that may be interpreted as {@link $GeodeOreDefinition}.
     */
    export type $GeodeOreDefinition_ = RegistryTypes.SpectrumGeodeOres | { blocks?: $BrokenBlockPredicate_, tries?: number, minDistance?: number, oreConfiguration?: $List_<$OreConfiguration$TargetBlockState>, maxDistance?: number,  } | [blocks?: $BrokenBlockPredicate_, tries?: number, minDistance?: number, oreConfiguration?: $List_<$OreConfiguration$TargetBlockState>, maxDistance?: number, ];
}
