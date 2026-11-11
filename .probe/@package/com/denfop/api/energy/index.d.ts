import { $Level_ } from "@package/net/minecraft/world/level";
import { $EnergyTile } from "@package/com/denfop/api/energy/interfaces";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";
export * as interfaces from "@package/com/denfop/api/energy/interfaces";
export * as event from "@package/com/denfop/api/energy/event";

declare module "@package/com/denfop/api/energy" {
    export class $EnergyTileEvent extends $LevelEvent {
        tile: $EnergyTile;
        constructor(arg0: $EnergyTile, arg1: $Level_);
    }
}
