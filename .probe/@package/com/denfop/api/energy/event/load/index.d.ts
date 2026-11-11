import { $Level_ } from "@package/net/minecraft/world/level";
import { $EnergyController, $EnergyTile } from "@package/com/denfop/api/energy/interfaces";
import { $EnergyTileEvent } from "@package/com/denfop/api/energy";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/energy/event/load" {
    export class $EventLoadController extends $EnergyTileEvent {
        tile: $EnergyTile;
        constructor(arg0: $EnergyController, arg1: $Level_);
    }
    export class $TileLoadEvent extends $LevelEvent {
        tileentity: $BlockEntity;
        constructor(arg0: $Level_, arg1: $BlockEntity);
    }
    export class $EnergyTileLoadEvent extends $LevelEvent {
        tile: $EnergyTile;
        tileentity: $BlockEntity;
        constructor(arg0: $Level_, arg1: $BlockEntity, arg2: $EnergyTile);
        constructor(arg0: $Level_, arg1: $EnergyTile);
    }
}
