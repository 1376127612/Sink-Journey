import { $Level_ } from "@package/net/minecraft/world/level";
import { $IPressureTile } from "@package/com/denfop/api/otherenergies/pressure";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/otherenergies/pressure/event" {
    export class $PressureTileLoadEvent extends $PressureTileEvent {
        tile: $IPressureTile;
        constructor(arg0: $IPressureTile, arg1: $Level_);
    }
    export class $PressureTileEvent extends $LevelEvent {
        tile: $IPressureTile;
        constructor(arg0: $IPressureTile, arg1: $Level_);
    }
    export class $PressureTileUnloadEvent extends $PressureTileEvent {
        tile: $IPressureTile;
        constructor(arg0: $IPressureTile, arg1: $Level_);
    }
}
