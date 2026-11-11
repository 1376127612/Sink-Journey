import { $Pair } from "@package/oshi/util/tuples";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/com/denfop/datagen/blocktags" {
    export class $IBlockTag {
    }
    export interface $IBlockTag {
        getBlock(): $Block;
        getHarvestLevel(): $Pair<string, number>;
        get block(): $Block;
        get harvestLevel(): $Pair<string, number>;
    }
}
