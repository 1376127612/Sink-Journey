import { $Level_ } from "@package/net/minecraft/world/level";
import { $IWindMechanism } from "@package/com/denfop/api/windsystem";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/windsystem/event" {
    export class $WindGeneratorEvent extends $LevelEvent {
        getLoad(): boolean;
        getWindMechanism(): $IWindMechanism;
        constructor(arg0: $IWindMechanism, arg1: $Level_, arg2: boolean);
        get load(): boolean;
        get windMechanism(): $IWindMechanism;
    }
}
