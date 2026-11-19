import { $Holder } from "@package/net/minecraft/core";
import { $TerrainAdjustment_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/org/betterx/wover/structure/api/builders" {
    export class $BaseStructureBuilder<S extends $Structure, R extends $BaseStructureBuilder<S, R>> {
    }
    export interface $BaseStructureBuilder<S extends $Structure, R extends $BaseStructureBuilder<S, R>> {
        directHolder(): $Holder<$Structure>;
        register(): $Holder<$Structure>;
        adjustment(arg0: $TerrainAdjustment_): R;
    }
}
