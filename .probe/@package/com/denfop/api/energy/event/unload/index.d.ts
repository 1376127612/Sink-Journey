import { $Level_ } from "@package/net/minecraft/world/level";
import { $EnergyController, $EnergyTile } from "@package/com/denfop/api/energy/interfaces";
import { $EnergyTileEvent } from "@package/com/denfop/api/energy";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/energy/event/unload" {
    export class $TileUnLoadEvent extends $LevelEvent {
        tileentity: $BlockEntity;
        constructor(arg0: $Level_, arg1: $BlockEntity);
    }
    export class $EnergyTileUnLoadEvent extends $LevelEvent {
        tile: $EnergyTile;
        constructor(arg0: $Level_, arg1: $EnergyTile);
    }
    export class $EventUnloadController extends $EnergyTileEvent {
        tile: $EnergyTile;
        constructor(arg0: $EnergyController, arg1: $Level_);
    }
}
