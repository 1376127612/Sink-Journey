import { $Level_ } from "@package/net/minecraft/world/level";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/jadenxgamer/netherexp/core/block/interfaces" {
    export class $GlowsporesApplicable {
    }
    export interface $GlowsporesApplicable {
        dropGlowspores(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        glowsporeOfBlock(): $Item;
        affectedProperty(): $Property<never>;
        canSporesBeApplied(arg0: $BlockState_): boolean;
    }
}
