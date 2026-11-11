import { $Level_ } from "@package/net/minecraft/world/level";
import { $PollutionMechanism } from "@package/com/denfop/api/pollution";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/pollution/air" {
    export class $PollutionAirLoadEvent extends $LevelEvent {
        tile: $PollutionMechanism;
        constructor(arg0: $Level_, arg1: $PollutionMechanism);
    }
    export class $PollutionAirUnLoadEvent extends $LevelEvent {
        tile: $PollutionMechanism;
        constructor(arg0: $Level_, arg1: $PollutionMechanism);
    }
}
