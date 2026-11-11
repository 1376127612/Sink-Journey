import { $IConfigurableBlockEntityProperties, $ConfigurableBlockEntityPropertiesType } from "@package/sirttas/elementalcraft/block/entity/properties";
import { $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/sirttas/elementalcraft/block/container" {
    export class $ElementContainerProperties extends $Record implements $IConfigurableBlockEntityProperties {
        getType(): $ConfigurableBlockEntityPropertiesType<$ElementContainerProperties>;
        capacity(): number;
        compatibleTools(): $HolderSet<$Block>;
        static CODEC: $MapCodec<$ElementContainerProperties>;
        static DEFAULT: $ElementContainerProperties;
        constructor(compatibleTools: $HolderSet_<$Block>, capacity: number);
        get type(): $ConfigurableBlockEntityPropertiesType<$ElementContainerProperties>;
    }
    /**
     * Values that may be interpreted as {@link $ElementContainerProperties}.
     */
    export type $ElementContainerProperties_ = { compatibleTools?: $HolderSet_<$Block>, capacity?: number,  } | [compatibleTools?: $HolderSet_<$Block>, capacity?: number, ];
}
