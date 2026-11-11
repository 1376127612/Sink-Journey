import { $Level_ } from "@package/net/minecraft/world/level";
import { $IHeatTile } from "@package/com/denfop/api/otherenergies/heat";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/otherenergies/heat/event" {
    export class $HeatTileUnloadEvent extends $HeatTileEvent {
        tile: $IHeatTile;
        constructor(arg0: $IHeatTile, arg1: $Level_);
    }
    export class $HeatTileEvent extends $LevelEvent {
        tile: $IHeatTile;
        constructor(arg0: $IHeatTile, arg1: $Level_);
    }
    export class $HeatTileLoadEvent extends $HeatTileEvent {
        tile: $IHeatTile;
        constructor(arg0: $IHeatTile, arg1: $Level_);
    }
}
