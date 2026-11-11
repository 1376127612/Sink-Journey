import { $Level_ } from "@package/net/minecraft/world/level";
import { $ICoolTile } from "@package/com/denfop/api/otherenergies/cool";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/otherenergies/cool/event" {
    export class $CoolTileUnloadEvent extends $CoolTileEvent {
        tile: $ICoolTile;
        constructor(arg0: $ICoolTile, arg1: $Level_);
    }
    export class $CoolTileEvent extends $LevelEvent {
        tile: $ICoolTile;
        constructor(arg0: $ICoolTile, arg1: $Level_);
    }
    export class $CoolTileLoadEvent extends $CoolTileEvent {
        tile: $ICoolTile;
        constructor(arg0: $ICoolTile, arg1: $Level_);
    }
}
