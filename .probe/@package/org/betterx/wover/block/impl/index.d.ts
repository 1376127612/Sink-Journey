import { $Holder$Reference } from "@package/net/minecraft/core";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/org/betterx/wover/block/impl" {
    export class $BlockHolderBridge {
    }
    export interface $BlockHolderBridge {
        wover$getBuiltInRegistryHolder(): $Holder$Reference<$Block>;
        wover$setBuiltInRegistryHolder(arg0: $Holder$Reference<$Block_>): void;
    }
}
